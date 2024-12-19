"use client";

import { motion } from 'framer-motion';

interface AvatarPreviewProps {
  currentAvatar: string;
}

export function AvatarPreview({ currentAvatar }: AvatarPreviewProps) {
  return (
    <motion.div 
      className="relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={currentAvatar}
        alt="Your avatar"
        className="w-24 h-24 rounded-full ring-4 ring-matcha-100 group-hover:ring-matcha-200 transition-all"
      />
      <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white text-sm font-medium">Change Avatar</span>
      </div>
    </motion.div>
  );
}