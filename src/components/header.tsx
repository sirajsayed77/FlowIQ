"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Activity, Brain, BarChart3, Clock, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-sm backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <Activity className="h-6 w-6 text-sky-500" />
          <span>FlowIQ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#ai-assistant"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            AI Assistant
          </Link>
          <Link
            href="#testimonials"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button>Try FlowIQ Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4">
          <nav className="flex flex-col gap-4 py-4">
            <Link
              href="#features"
              className="text-lg p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#ai-assistant"
              className="text-lg p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              AI Assistant
            </Link>
            <Link
              href="#testimonials"
              className="text-lg p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-lg p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Button className="mt-4" onClick={() => setMenuOpen(false)}>
              Try FlowIQ Free
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
