"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { getStudentRank } from "@/lib/data/classes/class-utils";
import { AvatarPicker } from "@/components/avatar/avatar-picker";
import { UserInfo } from "./user-info";
import { UserStats } from "./user-stats";
import type { Student } from "@/lib/data/users/user-types";

interface ProfileHeaderProps {
  user: Student;
  onAvatarChange: (avatar: string) => void;
}

export function ProfileHeader({ user, onAvatarChange }: ProfileHeaderProps) {
  const rank = getStudentRank(user.id);

  return (
    <motion.div 
      className="bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-matcha-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <AvatarPicker 
            currentAvatar={user.avatar || ''}
            onAvatarChange={onAvatarChange}
          />
          <div className="absolute -bottom-2 -right-2 bg-matcha-100 text-matcha-700 
                        px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Star className="w-4 h-4" />
            Lv.{user.progress.vocabularyLevel}
          </div>
        </div>
        
        <div className="flex-1 space-y-4">
          <UserInfo user={user} rank={rank} />
          <UserStats user={user} />
        </div>
      </div>
    </motion.div>
  );
}