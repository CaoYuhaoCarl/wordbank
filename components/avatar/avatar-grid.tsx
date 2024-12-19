"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAvatars } from '@/lib/utils/avatar/hooks/useAvatars';
import type { AvatarCategory } from '@/lib/utils/avatar/types';

interface AvatarGridProps {
  selectedAvatar: string;
  onSelect: (avatar: string) => void;
}

export function AvatarGrid({ selectedAvatar, onSelect }: AvatarGridProps) {
  const [category, setCategory] = useState<AvatarCategory>('modern');
  const avatars = useAvatars(category);

  return (
    <div className="space-y-6">
      <Tabs value={category} onValueChange={(value) => setCategory(value as AvatarCategory)}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="modern">Modern</TabsTrigger>
          <TabsTrigger value="fun">Fun</TabsTrigger>
          <TabsTrigger value="abstract">Abstract</TabsTrigger>
          <TabsTrigger value="special">Special</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-h-[400px] overflow-y-auto p-2">
        {avatars.map((avatar, index) => (
          <motion.button
            key={`${avatar.style}-${index}`}
            className="relative group"
            onClick={() => onSelect(avatar.url)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={avatar.url}
              alt={avatar.name}
              className={cn(
                "w-20 h-20 rounded-full ring-4 transition-all duration-200",
                selectedAvatar === avatar.url 
                  ? "ring-matcha-400" 
                  : "ring-matcha-100 group-hover:ring-matcha-200"
              )}
            />
            {selectedAvatar === avatar.url && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-matcha-400 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-black/40 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-medium">{avatar.name}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}