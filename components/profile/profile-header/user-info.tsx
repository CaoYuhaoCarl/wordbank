"use client";

import { Crown } from "lucide-react";
import type { Student } from "@/lib/data/users/user-types";

interface UserInfoProps {
  user: Student;
  rank: number;
}

export function UserInfo({ user, rank }: UserInfoProps) {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        {rank <= 3 && (
          <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Crown className="w-4 h-4" />
            Rank #{rank}
          </div>
        )}
      </div>
      
      <p className="text-muted-foreground mb-4">
        {user.level.charAt(0).toUpperCase() + user.level.slice(1)} Level • 
        Joined {new Date(user.joinedAt).toLocaleDateString()}
      </p>
    </div>
  );
}