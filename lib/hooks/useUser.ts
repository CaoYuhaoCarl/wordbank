"use client";

import { useState, useCallback } from 'react';
import { Student } from '@/lib/data/users/user-types';
import { studentsData } from '@/lib/data/users/students';

export function useUser(userId: string) {
  const [user, setUser] = useState<Student | null>(() => 
    studentsData.find(s => s.id === userId) || null
  );

  const updateUserAvatar = useCallback((newAvatar: string) => {
    setUser(prev => {
      if (!prev) return null;
      
      // Update the local state
      const updatedUser = {
        ...prev,
        avatar: newAvatar
      };

      // In a real app, this would be an API call
      // For now, we'll update the mock data
      const userIndex = studentsData.findIndex(s => s.id === userId);
      if (userIndex !== -1) {
        studentsData[userIndex] = updatedUser;
      }

      return updatedUser;
    });
  }, [userId]);

  return {
    user,
    updateUserAvatar
  };
}