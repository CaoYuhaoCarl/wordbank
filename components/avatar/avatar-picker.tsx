"use client";

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AvatarGrid } from './avatar-grid';
import { motion } from 'framer-motion';

interface AvatarPickerProps {
  currentAvatar: string;
  onSelect: (avatar: string) => void;
}

export function AvatarPicker({ currentAvatar, onSelect }: AvatarPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);

  const handleSelect = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  const handleSave = () => {
    onSelect(selectedAvatar);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
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
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Choose Your Avatar</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <AvatarGrid 
            selectedAvatar={selectedAvatar} 
            onSelect={handleSelect} 
          />

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              <Check className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}