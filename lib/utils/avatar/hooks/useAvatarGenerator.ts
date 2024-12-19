"use client";

import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { AVATAR_COLLECTIONS } from '../collections';
import { STYLE_CONFIG } from '../config';
import type { AvatarCategory } from '../types';

export function useAvatarGenerator(category: AvatarCategory) {
  return useMemo(() => {
    const avatars = AVATAR_COLLECTIONS[category].map(({ style, name }) => {
      const config = STYLE_CONFIG[style.name as keyof typeof STYLE_CONFIG] || {};
      
      // Generate multiple variants for each style
      return Array.from({ length: 3 }, (_, i) => {
        const seed = `${style.name}-${i + 1}-${Math.random().toString(36).slice(2)}`;
        const dataUri = createAvatar(style, {
          seed,
          size: 128,
          ...config
        }).toDataUriSync();

        return {
          url: dataUri,
          style: style.name,
          category,
          name: `${name} ${i + 1}`
        };
      });
    }).flat();

    return avatars;
  }, [category]);
}