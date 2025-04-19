"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah W.",
    role: "Product Designer",
    avatar: "/avatars/sarah.jpg",
    initials: "SW",
    content:
      "FlowIQ has completely transformed my workday. The AI suggestions are spot-on, and the focus timer keeps me in the zone. Finally focused!",
    stars: 5,
  },
  {
    id: "testimonial-2",
    name: "Michael T.",
    role: "Marketing Director",
    avatar: "/avatars/michael.jpg",
    initials: "MT",
    content:
      "As someone who juggles multiple projects, FlowIQ's prioritization tool is a game-changer. I'm meeting deadlines with less stress and getting tasks done on time.",
    stars: 5,
  },
  {
    id: "testimonial-3",
    name: "Alex K.",
    role: "Software Engineer",
    avatar: "/avatars/alex.jpg",
    initials: "AK",
    content:
      "I was skeptical about another productivity app, but the UI is beautiful and intuitive. The Kanban board syncs perfectly with my GitHub issues!",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their productivity
            with FlowIQ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                        <Star
                          key={`${testimonial.id}-star-${starIndex}`}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-4">
            Join over <span className="font-semibold">10,000+</span> users who have boosted their productivity
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-muted-foreground/70 font-medium">TechCorp</div>
            <div className="text-muted-foreground/70 font-medium">DesignHub</div>
            <div className="text-muted-foreground/70 font-medium">Innovate Inc</div>
            <div className="text-muted-foreground/70 font-medium">FutureSoft</div>
            <div className="text-muted-foreground/70 font-medium">CreativeStudio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
