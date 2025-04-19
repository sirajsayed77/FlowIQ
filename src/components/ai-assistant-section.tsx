"use client";

import { useState } from "react";
import { Bot, Send, ChevronRight, Clock, Calendar, ListTodo, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const exampleMessages = [
  "Plan my week based on urgent tasks",
  "Create a focus schedule for tomorrow",
  "Move less important tasks to next week",
  "What's my optimal focus time?",
];

// Define a Record type for the bot responses
type BotResponses = Record<string, string>;

export function AiAssistantSection() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm FlowBot, your intelligent productivity assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message = inputValue) => {
    if (!message.trim()) return;

    // Add the user message
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setInputValue("");

    // Simulate bot typing
    setIsTyping(true);

    // Simulate a response after a short delay
    setTimeout(() => {
      const botResponses: BotResponses = {
        "Plan my week based on urgent tasks":
          "Based on your urgent tasks, I've planned your week:\n\n1. Mon-Tue morning: Finalize the website redesign (due Wed)\n2. Tue afternoon: Prepare for the client presentation\n3. Wed: Client meeting and feedback collection\n4. Thu: Implement critical feature requests\n5. Fri: Team retrospective and planning\n\nI've left buffer time for unexpected tasks. Want me to add this to your calendar?",
        "Create a focus schedule for tomorrow":
          "Here's your optimized focus schedule for tomorrow:\n\n9:00-10:30 AM: Deep work (high energy time)\n10:30-10:45 AM: Short break\n10:45-12:00 PM: Team meeting\n12:00-1:00 PM: Lunch\n1:00-2:30 PM: Administrative tasks\n2:30-4:00 PM: Second deep work session\n4:00-5:00 PM: Email and slack responses\n\nThis schedule aligns with your energy patterns. Sound good?",
        "Move less important tasks to next week":
          "I've identified these low-priority tasks to reschedule:\n\n1. Documentation updates\n2. Research for future project\n3. Optional training webinar\n\nI'll move these to next Monday-Tuesday. This should free up about 4 hours this week for your high-priority work.",
        "What's my optimal focus time?":
          "Based on your productivity patterns over the last 3 weeks, you're most focused between 9:30-11:30 AM and 2:00-4:00 PM. You complete 73% of your deep work during these times.\n\nI recommend scheduling your most critical tasks during these windows and using your 4:00-5:30 PM slot (your lowest energy time) for administrative tasks and emails."
      };

      // If it's a prefilled message, use the corresponding response
      if (Object.keys(botResponses).includes(message)) {
        setMessages((prev) => [...prev, {
          role: "assistant",
          content: botResponses[message] || "I'm not sure how to answer that yet."
        }]);
      } else {
        // Generic response for any other input
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I'll help you with that! I'd analyze your calendar, tasks, and work patterns to provide personalized assistance. Would you like me to show you an example of how I'd solve this?"
          }
        ]);
      }
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="ai-assistant" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet <span className="text-primary">FlowBot</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Your intelligent sidekick for managing chaos.
            </p>
            <p className="mb-8">
              FlowBot learns your work patterns, communication style, and preferences
              to provide personalized productivity recommendations. It helps you
              prioritize tasks, manage your schedule, and stay focused on what matters.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Smart scheduling</h3>
                  <p className="text-muted-foreground">
                    Automatically organizes your day based on priorities and energy levels
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Work pattern analysis</h3>
                  <p className="text-muted-foreground">
                    Identifies your most productive times and suggests optimal focus periods
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ListTodo className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Intelligent task prioritization</h3>
                  <p className="text-muted-foreground">
                    Suggests what to work on next based on deadlines, importance, and context
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border rounded-xl shadow-lg overflow-hidden max-w-md mx-auto w-full"
          >
            <div className="bg-primary/10 p-4 flex items-center gap-2">
              <div className="bg-primary rounded-full p-1.5">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold">FlowBot</h3>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={`message-${message.role}-${index}`}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm">{message.content}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-muted">
                    <div className="flex gap-1 items-center">
                      <motion.div
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {exampleMessages.map((message, index) => (
                    <Button
                      key={`example-${message.substring(0, 10)}-${index}`}
                      variant="outline"
                      size="sm"
                      className="text-xs flex items-center gap-1"
                      onClick={() => handleSendMessage(message)}
                    >
                      <Sparkles className="w-3 h-3" />
                      {message}
                      <ChevronRight className="w-3 h-3" />
                    </Button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSendMessage();
                    }}
                  />
                  <Button
                    size="icon"
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
