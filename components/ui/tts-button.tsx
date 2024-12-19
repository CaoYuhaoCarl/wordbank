"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import useSound from 'use-sound';

interface TTSButtonProps {
  text: string;
  className?: string;
}

export function TTSButton({ text, className }: TTSButtonProps) {
  const [speaking, setSpeaking] = useState(false);
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      // Play click sound
      playClick();

      // If already speaking, stop
      if (speaking) {
        window.speechSynthesis.cancel();
        setSpeaking(false);
        return;
      }

      // Get English voices
      const voices = window.speechSynthesis.getVoices();
      const englishVoices = voices.filter(voice => voice.lang.includes('en-'));
      
      // Create utterance
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice (prefer English voices)
      if (englishVoices.length > 0) {
        utterance.voice = englishVoices[0];
      }
      
      // Configure speech
      utterance.rate = 0.9; // Slightly slower for learning
      utterance.pitch = 1;
      
      // Handle events
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      
      // Speak
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleSpeak}
      className={cn(
        "hover:bg-matcha-50 hover:text-matcha-600 transition-colors",
        speaking && "text-matcha-600 bg-matcha-50",
        className
      )}
    >
      {speaking ? (
        <VolumeX className="h-4 w-4" />
      ) : (
        <Volume2 className="h-4 w-4" />
      )}
    </Button>
  );
}