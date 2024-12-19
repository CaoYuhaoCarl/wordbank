"use client";

import { TTSButton } from "@/components/ui/tts-button";

interface WordExamplesProps {
  examples: string[];
}

export function WordExamples({ examples }: WordExamplesProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">Examples:</h3>
      <div className="space-y-2">
        {examples.map((example, index) => (
          <div key={index} className="flex items-start gap-2 group">
            <TTSButton 
              text={example} 
              className="opacity-0 group-hover:opacity-100 transition-opacity" 
            />
            <p className="text-muted-foreground">{example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}