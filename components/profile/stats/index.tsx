"use client";

import { LearningChart } from "./learning-chart";
import { StatsCard } from "./stats-card";
import type { Student } from "@/lib/data/users/user-types";

interface ProfileStatsProps {
  user: Student;
}

export function ProfileStats({ user }: ProfileStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <StatsCard user={user} />
      <LearningChart user={user} />
    </div>
  );
}