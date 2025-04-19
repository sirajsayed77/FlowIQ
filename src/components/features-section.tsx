"use client";

import { Brain, Clock, ListTodo, Users, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const features = [
  {
    id: "feature-1",
    icon: Brain,
    title: "Smart Task Prioritization",
    description:
      "AI analyzes your workload, deadlines, and priorities to suggest what to focus on next, helping you work on what truly matters.",
    color: "bg-orange-100 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "feature-2",
    icon: Clock,
    title: "Focus Timer with Ambient Sound",
    description:
      "Built-in pomodoro timer with customizable work/break intervals and ambient sound library to help you achieve deep focus states.",
    color: "bg-blue-100 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "feature-3",
    icon: ListTodo,
    title: "AI-Powered Daily Planner",
    description:
      "Let FlowBot organize your day based on your priorities, energy levels, and available time. Get an optimized schedule with just one click.",
    color: "bg-purple-100 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "feature-4",
    icon: Users,
    title: "Team Kanban Board",
    description:
      "Visualize workflow, collaborate seamlessly, and keep everyone aligned with our intuitive drag-and-drop Kanban board.",
    color: "bg-green-100 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    id: "feature-5",
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your productivity patterns, focus time, completed tasks, and streaks to continuously improve your workflow.",
    color: "bg-pink-100 dark:bg-pink-900/20",
    textColor: "text-pink-600 dark:text-pink-400",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Optimal Productivity
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            FlowIQ combines cutting-edge AI with thoughtful design to help you
            achieve more with less stress.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow bg-card border-muted">
                <CardHeader className="pb-2">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}
                  >
                    <feature.icon
                      className={`w-6 h-6 ${feature.textColor}`}
                    />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
