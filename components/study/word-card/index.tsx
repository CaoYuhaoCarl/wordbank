"use client";

import { Card } from "@/components/ui/card";
import { WordHeader } from "./word-header";
import { WordMeaning } from "./word-meaning";
import { WordExamples } from "./word-examples";
import type { Word } from "@/lib/data/vocabulary";
import { motion, AnimatePresence } from "framer-motion";

interface WordCardProps {
  word: Word;
  showMeaning: boolean;
}

export function WordCard({ word, showMeaning }: WordCardProps) {
  return (
    <Card className="p-8 overflow-hidden">
      <div className="space-y-6">
        <WordHeader word={word.word} pronunciation={word.pronunciation} />
        
        <AnimatePresence>
          {showMeaning && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <WordMeaning meaning={word.meaning} />
              <WordExamples examples={word.examples} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}