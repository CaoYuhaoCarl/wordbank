export type AvatarStyle = 
  | 'adventurer'
  | 'avataaars'
  | 'bottts'
  | 'fun-emoji'
  | 'lorelei'
  | 'micah'
  | 'personas'
  | 'pixel-art'
  | 'identicon'
  | 'rings'
  | 'shapes';

export type AvatarCategory = 'modern' | 'fun' | 'abstract' | 'special';

export interface AvatarOption {
  url: string;
  style: AvatarStyle;
  category: AvatarCategory;
  name: string;
}