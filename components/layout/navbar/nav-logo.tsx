"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function NavLogo() {
  return (
    <Link href="/">
      <motion.div 
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <BookOpen className="w-5 h-5 text-matcha-600" />
        <span className="font-medium text-base">VocabPK</span>
      </motion.div>
    </Link>
  );
}