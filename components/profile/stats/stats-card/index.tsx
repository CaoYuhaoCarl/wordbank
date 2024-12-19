"use client";

import { Brain, Target, Book, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { StatItem } from './stat-item';
import type { Student } from '@/lib/data/users/user-types';

interface StatsCardProps {
  user: Student;
}

const stats = [
  {
    icon: Book,
    label: "Words Learned",
    getValue: (user: Student) => user.progress.wordsLearned.toLocaleString(),
    color: "text-blue-500"
  },
  {
    icon: Target,
    label: "Accuracy",
    getValue: (user: Student) => `${user.progress.accuracy}%`,
    color: "text-green-500"
  },
  {
    icon: Brain,
    label: "Vocabulary Level",
    getValue: (user: Student) => user.progress.vocabularyLevel,
    color: "text-purple-500"
  },
  {
    icon: Award,
    label: "Completed Lessons",
    getValue: (user: Student) => user.progress.completedLessons,
    color: "text-orange-500"
  }
];

export function StatsCard({ user }: StatsCardProps) {
  return (
    <Card className="p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-4">Learning Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            icon={stat.icon}
            label={stat.label}
            value={stat.getValue(user)}
            color={stat.color}
            index={index}
          />
        ))}
      </div>
    </Card>
  );
}