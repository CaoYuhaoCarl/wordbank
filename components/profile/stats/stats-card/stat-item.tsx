"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: string;
  index: number;
}

export function StatItem({ icon: Icon, label, value, color, index }: StatItemProps) {
  return (
    <motion.div
      className="p-4 rounded-xl bg-matcha-50 dark:bg-matcha-900/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Icon className={`w-5 h-5 ${color} mb-2`} />
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}