"use client";

import { Trophy } from "lucide-react";
import type { Student } from "@/lib/data/users/user-types";

interface UserStatsProps {
  user: Student;
}

export function UserStats({ user }: UserStatsProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5 text-matcha-500" />
        <span className="font-medium">{user.progress.pkWins} PK Wins</span>
      </div>
      <div className="text-muted-foreground">•</div>
      <div className="text-muted-foreground">
        {user.progress.streak} Day Streak
      </div>
    </div>
  );
}