import { AVATAR_STYLES, STYLE_CONFIG } from '@/lib/constants/avatars';

interface AvatarOption {
  url: string;
  style: string;
  category: string;
  name: string;
}

function generateSeedVariants(style: string, count: number = 5): string[] {
  const variants = [];
  for (let i = 0; i < count; i++) {
    variants.push(`${style}-${Math.random().toString(36).substring(7)}`);
  }
  return variants;
}

function buildAvatarUrl(style: string, seed: string): string {
  const baseUrl = `https://api.dicebear.com/7.x/${style}/svg`;
  const config = STYLE_CONFIG[style as keyof typeof STYLE_CONFIG] || {};
  
  const params = new URLSearchParams({
    seed,
    ...config,
    backgroundColor: config.backgroundColor?.[Math.floor(Math.random() * config.backgroundColor?.length)],
  });

  return `${baseUrl}?${params.toString()}`;
}

export function getAvatarOptions(): AvatarOption[] {
  const avatars: AvatarOption[] = [];

  // Generate avatars for each category and style
  Object.entries(AVATAR_STYLES).forEach(([category, styles]) => {
    styles.forEach(style => {
      // Generate multiple variants for each style
      const seeds = generateSeedVariants(style);
      
      seeds.forEach((seed, index) => {
        avatars.push({
          url: buildAvatarUrl(style, seed),
          style,
          category,
          name: `${style.charAt(0).toUpperCase() + style.slice(1)} ${index + 1}`
        });
      });
    });
  });

  // Add special themed avatars for education context
  const specialThemes = [
    { seed: 'teacher', style: 'avataaars', name: 'Teacher' },
    { seed: 'student', style: 'avataaars', name: 'Student' },
    { seed: 'graduate', style: 'avataaars', name: 'Graduate' },
    { seed: 'scholar', style: 'personas', name: 'Scholar' },
    { seed: 'researcher', style: 'personas', name: 'Researcher' },
    { seed: 'professor', style: 'personas', name: 'Professor' }
  ];

  specialThemes.forEach(theme => {
    avatars.push({
      url: buildAvatarUrl(theme.style, theme.seed),
      style: theme.style,
      category: 'special',
      name: theme.name
    });
  });

  return avatars;
}