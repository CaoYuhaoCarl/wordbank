"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import type { Player } from "@/lib/types/pk-battle";

interface PlayerInfoProps {
  player: Player;
  score: number;
  isCurrentTurn: boolean;
}

export function PlayerInfo({ player, score, isCurrentTurn }: PlayerInfoProps) {
  return (
    <motion.div 
      className={`flex flex-col items-center ${isCurrentTurn ? 'scale-105' : 'opacity-80'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: isCurrentTurn ? 1.05 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={player.avatar} 
          alt={player.name} 
          className="w-16 h-16 rounded-full border-2 border-matcha-200"
        />
        {isCurrentTurn && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                        bg-matcha-100 text-matcha-700 text-xs font-medium 
                        px-2 py-0.5 rounded-full whitespace-nowrap">
            Current Turn
          </div>
        )}
      </div>
      <p className="font-semibold text-center mt-2">{player.name}</p>
      <p className="text-2xl font-bold text-matcha-600">{score}</p>
    </motion.div>
  );
}