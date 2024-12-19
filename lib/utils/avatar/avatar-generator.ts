import { AvatarOption, AvatarTheme } from './avatar-types';
import { AVATAR_STYLES, STYLE_CONFIG } from '@/lib/constants/avatars';

function generateSeedVariants(style: string, count: number = 3): string[] {
  return Array.from({ length: count }, (_, i) => 
    `${style}${i + 1}${Math.random().toString(36).substring(7)}`
  );
}

function buildAvatarUrl(style: string, seed: string): string {
  const baseUrl = `https://api.dicebear.com/7.x/${style}/svg`;
  const config = STYLE_CONFIG[style as keyof typeof STYLE_CONFIG] || {};
  
  const params = new URLSearchParams({
    seed,
    ...config,
    backgroundColor: config.backgroundColor?.[Math.floor(Math.random() * (config.backgroundColor?.length || 1))]
  });

  return `${baseUrl}?${params}`;
}

export function generateAvatars(): AvatarOption[] {
  const avatars: AvatarOption[] = [];

  Object.entries(AVATAR_STYLES).forEach(([category, styles]) => {
    styles.forEach(style => {
      generateSeedVariants(style).forEach((seed, index) => {
        avatars.push({
          url: buildAvatarUrl(style, seed),
          style,
          category,
          name: `${style.charAt(0).toUpperCase() + style.slice(1)} ${index + 1}`
        });
      });
    });
  });

  return avatars;
}

export function generateThemedAvatars(): AvatarOption[] {
  const themes: AvatarTheme[] = [
    { seed: 'teacher', style: 'personas', name: 'Teacher' },
    { seed: 'student', style: 'personas', name: 'Student' },
    { seed: 'graduate', style: 'personas', name: 'Graduate' },
    { seed: 'scholar', style: 'personas', name: 'Scholar' },
    { seed: 'researcher', style: 'personas', name: 'Researcher' },
    { seed: 'professor', style: 'personas', name: 'Professor' }
  ];

  return themes.map(theme => ({
    url: buildAvatarUrl(theme.style, theme.seed),
    style: theme.style,
    category: 'special',
    name: theme.name
  }));
}