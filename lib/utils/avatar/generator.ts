import { AVATAR_STYLES, THEMED_AVATARS } from './constants';
import { buildAvatarUrl } from './url-builder';
import { generateSeed } from './seed-generator';
import type { AvatarStyle, AvatarOption } from './types';

export function generateAvatars(category: string): AvatarOption[] {
  const categoryStyles = AVATAR_STYLES[category as keyof typeof AVATAR_STYLES] || [];
  
  return categoryStyles.flatMap(style => 
    Array.from({ length: 3 }, (_, i) => ({
      url: buildAvatarUrl(style as AvatarStyle, generateSeed(style, i)),
      style: style as AvatarStyle,
      category,
      name: `${style.charAt(0).toUpperCase() + style.slice(1)} ${i + 1}`
    }))
  );
}

export function generateThemedAvatars(): AvatarOption[] {
  return THEMED_AVATARS.map(theme => ({
    url: buildAvatarUrl(theme.style as AvatarStyle, theme.seed),
    style: theme.style as AvatarStyle,
    category: 'special',
    name: theme.name
  }));
}