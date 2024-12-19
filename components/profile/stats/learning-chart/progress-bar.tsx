"use client";

import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  progress: number;
  nextLevel: number;
  wordsNeeded: number;
  currentWords: number;
}

export function ProgressBar({ progress, nextLevel, wordsNeeded, currentWords }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Progress to Level {nextLevel}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground mt-2">
        {wordsNeeded - currentWords} words until next level
      </p>
    </div>
  );
}