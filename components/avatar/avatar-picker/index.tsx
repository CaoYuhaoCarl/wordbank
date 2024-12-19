"use client";

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AvatarGrid } from '../avatar-grid';
import { AvatarPreview } from './avatar-preview';

interface AvatarPickerProps {
  currentAvatar: string;
  onAvatarChange: (avatar: string) => void;
}

export function AvatarPicker({ currentAvatar, onAvatarChange }: AvatarPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);

  const handleSelect = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  const handleSave = () => {
    onAvatarChange(selectedAvatar);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
          <AvatarPreview currentAvatar={currentAvatar} />
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