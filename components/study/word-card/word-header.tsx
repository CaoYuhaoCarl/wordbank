"use client";

import { TTSButton } from "@/components/ui/tts-button";

interface WordHeaderProps {
  word: string;
  pronunciation: string;
}

export function WordHeader({ word, pronunciation }: WordHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{word}</h2>
        <TTSButton text={word} />
      </div>
      <p className="text-muted-foreground">{pronunciation}</p>
    </div>
  );
}