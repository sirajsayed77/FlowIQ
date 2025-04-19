"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { getGradientStyle } from "@/lib/utils";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={getGradientStyle(theme as "light" | "dark")}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 -z-10 bg-background/20 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="gradient-text block">
              Work smarter. Focus better.
            </span>
            <span className="gradient-text block">Flow forever.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            AI-powered productivity that adapts to your workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" className="text-lg py-6 px-8">
              Try FlowIQ Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg py-6 px-8 gap-2"
            >
              <PlayCircle className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Abstract shapes */}
          <div className="mt-16 relative">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/30 rounded-full blur-xl" />

            {/* Mock Dashboard Preview */}
            <div className="bg-background border rounded-xl shadow-2xl p-1 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="p-6 rounded-lg w-full max-w-4xl h-[400px] bg-card">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold">Today's Focus</h3>
                    <p className="text-sm text-muted-foreground">Tuesday, April 15</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium">AI</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Priority Tasks</h4>
                    <div className="space-y-2">
                      <div className="bg-background p-2 rounded-md flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-sm">Finalize UI designs</span>
                      </div>
                      <div className="bg-background p-2 rounded-md flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="text-sm">Client presentation</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Focus Sessions</h4>
                    <div className="space-y-2">
                      <div className="bg-background p-2 rounded-md">
                        <span className="text-sm">10:00 - 11:30 AM</span>
                        <p className="text-xs text-muted-foreground">Deep work</p>
                      </div>
                      <div className="bg-background p-2 rounded-md">
                        <span className="text-sm">2:00 - 3:30 PM</span>
                        <p className="text-xs text-muted-foreground">Project planning</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">AI Suggestions</h4>
                    <div className="space-y-2">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <span className="text-sm">Take a break after the meeting</span>
                      </div>
                      <div className="bg-primary/10 p-2 rounded-md">
                        <span className="text-sm">Move low-impact tasks to tomorrow</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Your focus score: <span className="text-primary font-medium">86%</span>
                  </div>
                  <Button variant="ghost" size="sm">View Full Dashboard</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
