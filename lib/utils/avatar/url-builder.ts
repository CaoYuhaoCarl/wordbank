import { STYLE_CONFIG } from './config';
import type { AvatarStyle } from './types';

export function buildAvatarUrl(style: AvatarStyle, seed: string): string {
  const baseUrl = `https://api.dicebear.com/7.x/${style}/svg`;
  const config = STYLE_CONFIG[style as keyof typeof STYLE_CONFIG] || {};
  
  const params = new URLSearchParams({
    seed,
    ...config,
    backgroundColor: config.backgroundColor?.[
      Math.floor(Math.random() * (config.backgroundColor?.length || 1))
    ]
  });

  return `${baseUrl}?${params}`;
}