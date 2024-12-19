// Avatar style collections from DiceBear API v7
export const AVATAR_STYLES = {
  modern: [
    'adventurer',
    'adventurer-neutral',
    'avataaars',
    'big-ears',
    'big-ears-neutral',
    'big-smile',
    'bottts',
    'fun-emoji',
    'icons',
    'lorelei',
    'lorelei-neutral',
    'micah',
    'miniavs',
    'notionists',
    'notionists-neutral',
    'open-peeps',
    'peeps',
    'personas',
    'pixel-art',
    'pixel-art-neutral'
  ],
  fun: [
    'bottts',
    'fun-emoji',
    'thumbs',
    'lorelei',
    'lorelei-neutral',
    'notionists',
    'notionists-neutral'
  ],
  abstract: [
    'bauhaus',
    'beam',
    'cells',
    'circles',
    'identicon',
    'initials',
    'rings',
    'shapes',
    'sunset-dots'
  ]
};

// Style-specific configuration options
export const STYLE_CONFIG = {
  avataaars: {
    flip: false,
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf'],
    accessoriesChance: 50,
    facialHairChance: 50
  },
  'pixel-art': {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf'],
    scale: 8
  },
  bottts: {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf'],
    colorful: true,
    primaryColorLevel: 600,
    secondaryColorLevel: 400
  },
  'fun-emoji': {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf']
  },
  initials: {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf']
  },
  lorelei: {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf'],
    flip: false
  },
  micah: {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf']
  },
  'open-peeps': {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf']
  },
  personas: {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf'],
    mood: ['happy', 'surprised', 'confident']
  },
  rings: {
    backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf']
  }
};