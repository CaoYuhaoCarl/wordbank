// Avatar style collections
export const AVATAR_STYLES = {
  modern: [
    'avataaars',
    'bottts',
    'personas',
    'pixel-art',
    'micah'
  ],
  fun: [
    'fun-emoji',
    'bottts',
    'lorelei'
  ],
  abstract: [
    'identicon',
    'rings',
    'shapes'
  ]
} as const;

// Special themed avatars
export const THEMED_AVATARS = [
  { seed: 'teacher', style: 'personas', name: 'Teacher' },
  { seed: 'student', style: 'personas', name: 'Student' },
  { seed: 'graduate', style: 'personas', name: 'Graduate' },
  { seed: 'scholar', style: 'personas', name: 'Scholar' }
] as const;