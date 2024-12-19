"use client";

import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { personas } from '@dicebear/collection';
import { STYLE_CONFIG } from '../config';

const THEMES = [
  { seed: 'teacher', name: 'Teacher' },
  { seed: 'student', name: 'Student' },
  { seed: 'graduate', name: 'Graduate' },
  { seed: 'scholar', name: 'Scholar' },
  { seed: 'researcher', name: 'Researcher' },
  { seed: 'professor', name: 'Professor' }
];

export function useThemedAvatars() {
  return useMemo(() => {
    const config = STYLE_CONFIG.personas;
    
    return THEMES.map(theme => ({
      url: createAvatar(personas, {
        seed: theme.seed,
        size: 128,
        ...config
      }).toDataUriSync(),
      style: 'personas',
      category: 'special',
      name: theme.name
    }));
  }, []);
}