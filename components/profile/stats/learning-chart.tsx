"use client";

import { LineChart } from "@/components/charts/line-chart";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Student } from "@/lib/data/users/user-types";

interface LearningChartProps {
  user: Student;
}

// Mock data - in a real app, this would come from an API
const weeklyProgress = [
  { day: "Mon", words: 25 },
  { day: "Tue", words: 40 },
  { day: "Wed", words: 30 },
  { day: "Thu", words: 45 },
  { day: "Fri", words: 35 },
  { day: "Sat", words: 50 },
  { day: "Sun", words: 42 }
];

export function LearningChart({ user }: LearningChartProps) {
  const nextLevel = user.progress.vocabularyLevel + 1;
  const wordsNeeded = nextLevel * 500; // Example: each level requires 500 more words
  const progress = (user.progress.wordsLearned / wordsNeeded) * 100;

  return (
    <Card className="p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-4">Learning Progress</h2>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Progress to Level {nextLevel}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-muted-foreground mt-2">
          {wordsNeeded - user.progress.wordsLearned} words until next level
        </p>
      </div>

      <LineChart 
        data={weeklyProgress}
        xKey="day"
        yKey="words"
        height={200}
      />
    </Card>
  );
}