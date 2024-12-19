"use client";

import { motion } from "framer-motion";
import { Brain, Target, Book, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Student } from "@/lib/data/users/user-types";

interface StatsCardProps {
  user: Student;
}

const stats = [
  {
    icon: Book,
    label: "Words Learned",
    value: (user: Student) => user.progress.wordsLearned.toLocaleString(),
    color: "text-blue-500"
  },
  {
    icon: Target,
    label: "Accuracy",
    value: (user: Student) => `${user.progress.accuracy}%`,
    color: "text-green-500"
  },
  {
    icon: Brain,
    label: "Vocabulary Level",
    value: (user: Student) => user.progress.vocabularyLevel,
    color: "text-purple-500"
  },
  {
    icon: Award,
    label: "Completed Lessons",
    value: (user: Student) => user.progress.completedLessons,
    color: "text-orange-500"
  }
];

export function StatsCard({ user }: StatsCardProps) {
  return (
    <Card className="p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-4">Learning Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="p-4 rounded-xl bg-matcha-50 dark:bg-matcha-900/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold mb-1">{stat.value(user)}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}