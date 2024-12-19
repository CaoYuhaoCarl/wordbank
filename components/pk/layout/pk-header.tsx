"use client";

import { motion } from "framer-motion";
import { Swords, Users } from "lucide-react";

interface PKHeaderProps {
  mode?: 'ai' | 'class';
}

export function PKHeader({ mode = 'ai' }: PKHeaderProps) {
  const Icon = mode === 'class' ? Users : Swords;
  const title = mode === 'class' ? 'Class Battle' : 'Vocabulary Battle';
  const subtitle = mode === 'class' 
    ? 'Challenge your classmates and improve together'
    : 'Challenge yourself and compete with others';

  return (
    <motion.div 
      className="text-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-matcha-100">
        <Icon className="w-6 h-6 text-matcha-600" />
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}