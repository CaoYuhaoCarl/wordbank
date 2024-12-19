"use client";

import { useMemo } from 'react';
import { generateAvatars, generateThemedAvatars } from '../generator';
import type { AvatarCategory } from '../types';

export function useAvatars(category: AvatarCategory) {
  return useMemo(() => {
    if (category === 'special') {
      return generateThemedAvatars();
    }
    return generateAvatars(category);
  }, [category]);
}