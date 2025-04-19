"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    description: "For individuals getting started with productivity tracking",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      "Task organization",
      "Basic focus timer",
      "Limited AI prioritization",
      "Up to 3 projects",
      "7-day history",
    ],
    popular: false,
    ctaText: "Get Started",
  },
  {
    name: "Pro",
    description: "For professionals seeking advanced productivity tools",
    price: {
      monthly: 12,
      yearly: 120,
    },
    features: [
      "Everything in Basic",
      "Advanced focus timer with sounds",
      "Full AI prioritization & scheduling",
      "Unlimited projects",
      "Detailed analytics",
      "Full history",
      "Calendar integration",
    ],
    popular: true,
    ctaText: "Start Free Trial",
  },
  {
    name: "Team",
    description: "For teams looking to boost collaborative productivity",
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      "Everything in Pro",
      "Team Kanban boards",
      "Task delegation & tracking",
      "Team analytics & insights",
      "Admin controls",
      "Priority support",
      "Custom integrations",
    ],
    popular: false,
    ctaText: "Contact Sales",
  },
];

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans come with a 14-day free trial.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`${
                billingPeriod === "monthly"
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Monthly billing
            </span>
            <Switch
              checked={billingPeriod === "yearly"}
              onCheckedChange={(checked) =>
                setBillingPeriod(checked ? "yearly" : "monthly")
              }
            />
            <span
              className={`${
                billingPeriod === "yearly"
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Annual billing <span className="text-green-500">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`border rounded-xl overflow-hidden ${
                plan.popular
                  ? "ring-2 ring-primary shadow-lg"
                  : "ring-1 ring-border"
              }`}
            >
              {plan.popular && (
                <div className="bg-primary py-1.5 text-center text-xs font-medium uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-2">{plan.description}</p>

                <div className="mt-6 mb-8">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      ${plan.price[billingPeriod]}
                    </span>
                    {plan.price[billingPeriod] > 0 && (
                      <span className="text-muted-foreground ml-1 pb-1">
                        /{billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    )}
                  </div>
                  {plan.price[billingPeriod] === 0 && (
                    <span className="text-muted-foreground">Free Forever</span>
                  )}
                </div>

                <Button
                  className="w-full mb-8"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.ctaText}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-muted/40 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
          <p className="text-muted-foreground mb-6">
            Contact us for enterprise pricing and custom-tailored solutions for
            your organization's unique needs.
          </p>
          <Button variant="outline">Contact Enterprise Sales</Button>
        </div>
      </div>
    </section>
  );
}
