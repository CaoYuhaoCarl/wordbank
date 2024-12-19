"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Student } from "@/lib/data/users/user-types";

interface UserProfileProps {
  user: Student;
}

export function UserProfile({ user }: UserProfileProps) {
  if (!user) return null;
  
  return (
    <Link href="/profile">
      <motion.div 
        className="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-matcha-50 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full ring-2 ring-matcha-100"
          />
          <div className="absolute -bottom-1 -right-1 bg-matcha-100 text-matcha-700 text-xs font-medium px-1.5 rounded-full">
            {user.progress.vocabularyLevel}
          </div>
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">
            {user.progress.wordsLearned.toLocaleString()} words
          </p>
        </div>
      </motion.div>
    </Link>
  );
}