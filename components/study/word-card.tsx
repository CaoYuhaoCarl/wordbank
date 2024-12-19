"use client";

import { Card } from "@/components/ui/card";
import { TTSButton } from "@/components/ui/tts-button";
import type { Word } from "@/lib/data/vocabulary";

interface WordCardProps {
  word: Word;
  showMeaning: boolean;
}

export function WordCard({ word, showMeaning }: WordCardProps) {
  return (
    <Card className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{word.word}</h2>
        <TTSButton text={word.word} />
      </div>

      <p className="text-muted-foreground mb-4">{word.pronunciation}</p>

      {showMeaning && (
        <div className="space-y-4">
          <p className="text-lg">{word.meaning}</p>
          <div className="space-y-2">
            {word.examples.map((example, index) => (
              <div key={index} className="flex items-start gap-2">
                <TTSButton text={example} className="mt-1" />
                <p className="text-muted-foreground">{example}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}