import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ============ Rate Limiting ============
// Simple in-memory rate limiter (per edge function instance)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20; // 20 requests per minute per IP

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically
function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now >= entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

// Check if request is rate limited
function isRateLimited(clientId: string): { limited: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(clientId);
  
  if (!entry || now >= entry.resetTime) {
    // New window
    rateLimitStore.set(clientId, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }
  
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return { limited: true, remaining: 0, resetIn: entry.resetTime - now };
  }
  
  entry.count++;
  return { limited: false, remaining: MAX_REQUESTS_PER_WINDOW - entry.count, resetIn: entry.resetTime - now };
}

// Get client identifier (IP address or fallback)
function getClientId(req: Request): string {
  // Try various headers for client IP
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }
  // Fallback to a hash of user-agent + origin as fingerprint
  const ua = req.headers.get("user-agent") || "unknown";
  const origin = req.headers.get("origin") || "unknown";
  return `${ua.slice(0, 50)}-${origin}`;
}

// Periodic cleanup every 5 minutes
setInterval(cleanupRateLimitStore, 5 * 60 * 1000);

// ============ CORS Configuration ============
// Allowed origins for CORS - add your production domains here
const allowedOrigins = [
  "https://internetone.info",
  "https://www.internetone.info",
];

// Check if origin is allowed (includes Lovable preview URLs)
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (allowedOrigins.includes(origin)) return true;
  // Allow Lovable preview URLs
  if (origin.endsWith(".lovable.app") || origin.endsWith(".lovableproject.com")) return true;
  return false;
}

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = isAllowedOrigin(origin) ? origin! : allowedOrigins[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}

// Website knowledge base for Internet One
const SYSTEM_PROMPT = `You are a helpful customer support assistant for Internet One, an internet and TV service provider comparison website. You help customers find the best internet and TV packages in their area.

## Company Information
- **Company Name**: Internet One
- **Website**: internetone.info
- **Phone**: (929) 536-5524 (Available 7 days a week)
- **Email**: zahid@internetone.info
- **Address**: 3052 Bainbridge Ave, Apt 5e, Bronx, NY 10467

## What We Do
Internet One helps customers discover and compare internet and TV packages from leading providers. We help users get connected with great deals available at their location.

## Our Services
- Home Internet services
- Business Internet services
- Cable TV packages
- Bundle packages (Internet + TV, Internet + Phone, Triple Play)

## Available Plans & Pricing
1. **Business Fiber** - $39.99/month
   - Up to 500 Mbps speed
   - 5-star rating
   - Fiber connection type

2. **Cable Standard** - $49.99/month
   - Up to 2 Gbps speed
   - 4.9-star rating
   - Cable connection type

3. **Fiber Plus** - $29.99/month
   - Up to 100 Mbps speed
   - 4.3-star rating
   - Fiber connection type

## Bundle Options
- Internet + TV Basic: 100+ channels for +$29.99/mo
- Internet + TV Premium: 250+ channels for +$49.99/mo
- Internet + Phone: Unlimited calls for +$14.99/mo
- Triple Play Bundle: Internet + TV + Phone for +$59.99/mo

## How It Works
1. Enter your zip code to check availability
2. View available providers in your area
3. Choose a plan that fits your needs
4. Schedule installation

## Why Choose Internet One?
- Easy Comparison: Compare plans from multiple providers in one place
- Quick Setup: Fast activation and professional installation
- Trusted Service: Partnered with leading internet and TV providers
- Expert Support: Our team helps you find the perfect plan
- No Hidden Fees
- Free Consultation
- 24/7 Support

## Key Benefits
- 256-bit SSL encryption for security
- Privacy guaranteed
- Authorized service partner
- Verified providers with top-rated networks
- Safe payments with secure transactions

## Important Guidelines for Responses
- Be friendly, helpful, and professional
- For pricing questions, provide the exact prices listed above
- For availability, ask for their zip code and encourage them to use the website's availability checker
- For installation or ordering, direct them to call (929) 536-5524 or visit the website
- Keep responses concise and helpful
- If you don't know something specific, direct them to call or email for more details`;

// Maximum total payload size (50KB)
const MAX_TOTAL_PAYLOAD_SIZE = 50000;

// Sanitize message content - remove control characters except newlines/tabs
function sanitizeContent(content: string): string {
  // Remove control characters except \n, \r, \t
  return content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
}

// Validate message structure with enhanced checks
function validateMessages(messages: unknown): { valid: boolean; error?: string; sanitized?: { role: string; content: string }[] } {
  if (!Array.isArray(messages)) {
    return { valid: false, error: "Messages must be an array" };
  }
  
  if (messages.length === 0) {
    return { valid: false, error: "Messages array cannot be empty" };
  }
  
  if (messages.length > 50) {
    return { valid: false, error: "Too many messages in conversation" };
  }

  const sanitizedMessages: { role: string; content: string }[] = [];
  let totalSize = 0;
  
  for (const msg of messages) {
    if (typeof msg !== "object" || msg === null) {
      return { valid: false, error: "Invalid message format" };
    }
    
    const { role, content } = msg as { role?: unknown; content?: unknown };
    
    if (typeof role !== "string" || !["user", "assistant"].includes(role)) {
      return { valid: false, error: "Invalid message role" };
    }
    
    if (typeof content !== "string") {
      return { valid: false, error: "Message content must be a string" };
    }
    
    if (content.length > 4000) {
      return { valid: false, error: "Message content too long" };
    }

    // Track total payload size
    totalSize += content.length;
    if (totalSize > MAX_TOTAL_PAYLOAD_SIZE) {
      return { valid: false, error: "Total message payload too large" };
    }

    // Sanitize content
    const sanitizedContent = sanitizeContent(content);
    sanitizedMessages.push({ role, content: sanitizedContent });
  }
  
  return { valid: true, sanitized: sanitizedMessages };
}

serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Check rate limit
  const clientId = getClientId(req);
  const rateLimit = isRateLimited(clientId);
  
  if (rateLimit.limited) {
    console.log("Rate limit exceeded for client:", clientId);
    return new Response(
      JSON.stringify({ 
        error: "Too many requests. Please wait a moment before trying again.",
        retryAfter: Math.ceil(rateLimit.resetIn / 1000)
      }),
      { 
        status: 429, 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "Retry-After": String(Math.ceil(rateLimit.resetIn / 1000))
        } 
      }
    );
  }

  try {
    // Parse request body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { messages } = body as { messages?: unknown };
    
    // Validate and sanitize messages
    const validation = validateMessages(messages);
    if (!validation.valid || !validation.sanitized) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Service configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Processing chat request with", validation.sanitized.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...validation.sanitized,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error("AI gateway error:", response.status);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to process request" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response from AI gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error instanceof Error ? error.message : "Unknown error");
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
