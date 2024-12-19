"use client";

import { motion } from "framer-motion";
import { Student } from "@/lib/data/users/user-types";
import { getStudentRank } from "@/lib/data/classes/class-utils";
import { Crown, Star, Trophy } from "lucide-react";
import { AvatarPicker } from "@/components/avatar/avatar-picker";

interface ProfileHeaderProps {
  user: Student;
  onUpdateAvatar?: (newAvatar: string) => void;
}

export function ProfileHeader({ user, onUpdateAvatar }: ProfileHeaderProps) {
  const rank = getStudentRank(user.id);

  const handleAvatarChange = (newAvatar: string) => {
    onUpdateAvatar?.(newAvatar);
  };

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
            onSelect={handleAvatarChange}
          />
          <div className="absolute -bottom-2 -right-2 bg-matcha-100 text-matcha-700 
                        px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Star className="w-4 h-4" />
            Lv.{user.progress.vocabularyLevel}
          </div>
        </div>
        
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
        </div>
      </div>
    </motion.div>
  );
}