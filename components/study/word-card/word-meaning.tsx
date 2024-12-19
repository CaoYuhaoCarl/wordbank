"use client";

interface WordMeaningProps {
  meaning: string;
}

export function WordMeaning({ meaning }: WordMeaningProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground">Meaning:</h3>
      <p className="text-lg">{meaning}</p>
    </div>
  );
}