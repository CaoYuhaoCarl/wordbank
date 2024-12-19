"use client";

import useSound from 'use-sound';

export function useSoundEffects() {
  const [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.5 });
  const [playIncorrect] = useSound('/sounds/incorrect.mp3', { volume: 0.5 });
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });
  const [playSuccess] = useSound('/sounds/success.mp3', { volume: 0.5 });
  const [playLevelUp] = useSound('/sounds/level-up.mp3', { volume: 0.5 });

  return {
    playCorrect,
    playIncorrect,
    playClick,
    playSuccess,
    playLevelUp,
  };
}