import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Website knowledge base for Internet Core
const SYSTEM_PROMPT = `You are a helpful customer support assistant for Internet Core, an internet and TV service provider comparison website. You help customers find the best internet and TV packages in their area.

## Company Information
- **Company Name**: Internet Core
- **Website**: internetcore.us
- **Phone**: (929) 990-2934 (Available 7 days a week)
- **Email**: support@internetcore.us
- **Address**: 2601 Woodland Park Drive, Apt 8209, Houston, TX 77077, USA

## What We Do
Internet Core helps customers discover and compare internet and TV packages from leading providers. We help users get connected with great deals available at their location.

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

## Why Choose Internet Core?
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
- For installation or ordering, direct them to call (929) 990-2934 or visit the website
- Keep responses concise and helpful
- If you don't know something specific, direct them to call or email for more details`;

// Validate message structure
function validateMessages(messages: unknown): { valid: boolean; error?: string } {
  if (!Array.isArray(messages)) {
    return { valid: false, error: "Messages must be an array" };
  }
  
  if (messages.length === 0) {
    return { valid: false, error: "Messages array cannot be empty" };
  }
  
  if (messages.length > 50) {
    return { valid: false, error: "Too many messages in conversation" };
  }
  
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
  }
  
  return { valid: true };
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
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
    
    // Validate messages
    const validation = validateMessages(messages);
    if (!validation.valid) {
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

    console.log("Processing chat request with", (messages as unknown[]).length, "messages");

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
          ...(messages as { role: string; content: string }[]),
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
