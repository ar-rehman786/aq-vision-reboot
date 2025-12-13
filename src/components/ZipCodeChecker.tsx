import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Loader2, Check, Wifi, Tv, Phone, Star, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Core packages with exact pricing as specified
const corePackages = [
  { name: "Business Fiber", speed: "500 Mbps", price: "39.99", type: "Fiber", rating: 5.0 },
  { name: "Cable Standard", speed: "2 Gbps", price: "49.99", type: "Cable", rating: 4.9 },
  { name: "Fiber Plus", speed: "100 Mbps", price: "29.99", type: "Fiber", rating: 4.3 },
];

// Additional provider options for variety
const providerOptions = [
  ...corePackages,
  { name: "Fiber Pro", speed: "1 Gbps", price: "69.99", type: "Fiber", rating: 4.8 },
  { name: "Cable Ultra", speed: "1 Gbps", price: "59.99", type: "Cable", rating: 4.7 },
  { name: "DSL Connect", speed: "75 Mbps", price: "24.99", type: "DSL", rating: 4.4 },
  { name: "DSL Plus", speed: "150 Mbps", price: "34.99", type: "DSL", rating: 4.5 },
  { name: "Home Starter", speed: "50 Mbps", price: "19.99", type: "Cable", rating: 4.2 },
  { name: "Wireless Home", speed: "100 Mbps", price: "44.99", type: "Fixed Wireless", rating: 4.3 },
];

const typeVariants = ["Fiber", "Cable", "DSL", "Fixed Wireless"];

const bundleOptions = [
  { name: "Internet + TV Basic", channels: "100+", price: "+29.99/mo" },
  { name: "Internet + TV Premium", channels: "250+", price: "+49.99/mo" },
  { name: "Internet + Phone", features: "Unlimited calls", price: "+14.99/mo" },
  { name: "Triple Play Bundle", features: "Internet + TV + Phone", price: "+59.99/mo" },
];

const generateRandomProviders = (zipCode: string) => {
  // Use zip code to seed pseudo-random but consistent results
  const seed = parseInt(zipCode) || 12345;
  const random = (max: number, offset = 0) => ((seed + offset) % max);
  
  const numProviders = 2 + random(4, 1); // 2-5 providers
  const providers = [];
  
  // Always include at least one core package
  const shuffledOptions = [...providerOptions].sort(() => (seed % 2 === 0 ? 1 : -1));
  
  for (let i = 0; i < numProviders && i < shuffledOptions.length; i++) {
    const baseProvider = shuffledOptions[(seed + i * 7) % shuffledOptions.length];
    providers.push({
      ...baseProvider,
      id: i,
    });
  }
  
  // Sort by rating descending
  return providers.sort((a, b) => b.rating - a.rating);
};

const generateRandomBundles = (zipCode: string) => {
  const seed = parseInt(zipCode) || 12345;
  const numBundles = 1 + (seed % 3); // 1-3 bundles
  const bundles = [];
  
  for (let i = 0; i < numBundles; i++) {
    bundles.push(bundleOptions[(seed + i * 11) % bundleOptions.length]);
  }
  
  return bundles;
};

interface ZipCodeCheckerProps {
  variant?: "hero" | "standalone";
}

export const ZipCodeChecker = ({ variant = "hero" }: ZipCodeCheckerProps) => {
  const [zipCode, setZipCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{
    providers: ReturnType<typeof generateRandomProviders>;
    bundles: ReturnType<typeof generateRandomBundles>;
    zipCode: string;
  } | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!zipCode || zipCode.length !== 5 || !/^\d{5}$/.test(zipCode)) {
      setError("Please enter a valid 5-digit zip code");
      return;
    }
    
    setError("");
    setIsLoading(true);
    setResults(null);
    
    // Simulate API call with 1.5 second delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const providers = generateRandomProviders(zipCode);
    const bundles = generateRandomBundles(zipCode);
    
    setResults({ providers, bundles, zipCode });
    setIsLoading(false);
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZipCode(value);
    setError("");
    if (results) setResults(null);
  };

  return (
    <div className={variant === "hero" ? "" : "bg-card rounded-2xl p-8 border border-border"}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            value={zipCode}
            onChange={handleZipChange}
            placeholder="Enter your zip code"
            className="pl-12 h-14 text-lg bg-background border-border"
            maxLength={5}
          />
        </div>
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="h-14 px-8"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Searching...
            </>
          ) : (
            "Check Availability"
          )}
        </Button>
      </form>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-destructive mt-3 text-sm"
        >
          {error}
        </motion.p>
      )}

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8"
          >
            <div className="bg-card/50 rounded-xl p-8 border border-border">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                  <Wifi className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-foreground font-semibold">Searching providers in {zipCode}...</p>
                  <p className="text-muted-foreground text-sm mt-1">Checking availability and best rates</p>
                </div>
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {results && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 space-y-6"
          >
            {/* Success Header */}
            <div className="flex items-center gap-3 text-primary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Great news! Service is available in {results.zipCode}</p>
                <p className="text-sm text-muted-foreground">{results.providers.length} plans found in your area</p>
              </div>
            </div>

            {/* Provider Cards */}
            <div className="grid gap-4">
              {results.providers.map((provider, index) => (
                <motion.div
                  key={provider.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-xl p-6 border ${
                    index === 0
                      ? "bg-primary/5 border-primary"
                      : "bg-card border-border"
                  }`}
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Best Match
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        provider.type === "Fiber" ? "bg-primary/10 text-primary" :
                        provider.type === "Cable" ? "bg-accent/10 text-accent" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        <Wifi className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{provider.name}</h4>
                        <p className="text-sm text-muted-foreground">{provider.type} • Up to {provider.speed}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 text-accent fill-accent" />
                          <span className="text-sm font-medium text-foreground">{provider.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">${provider.price}</div>
                        <div className="text-sm text-muted-foreground">/month</div>
                      </div>
                      <Button variant={index === 0 ? "hero" : "outline"} size="sm">
                        Select Plan
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bundle Options */}
            {results.bundles.length > 0 && (
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Tv className="w-5 h-5 text-primary" />
                  Available Bundles
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.bundles.map((bundle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {bundle.name.includes("TV") && <Tv className="w-5 h-5 text-primary" />}
                        {bundle.name.includes("Phone") && <Phone className="w-5 h-5 text-accent" />}
                      </div>
                      <h5 className="font-medium text-foreground">{bundle.name}</h5>
                      <p className="text-sm text-muted-foreground">
                        {bundle.channels || bundle.features}
                      </p>
                      <p className="text-primary font-semibold mt-2">{bundle.price}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <p className="text-foreground mb-3">
                Ready to get started? Call us now or schedule an installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+19299902934">Call (929) 990-2934</a>
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Installation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
