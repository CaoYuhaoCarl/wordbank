"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { studentsData } from "@/lib/data/users/students";
import { pkHistoryData } from "@/lib/data/learning-progress";

interface PKHistoryProps {
  userId: string;
}

export function PKHistory({ userId }: PKHistoryProps) {
  const recentMatches = pkHistoryData
    .filter(match => match.player1Id === userId || match.player2Id === userId)
    .slice(0, 5);

  return (
    <Card className="p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-4">Recent PK Matches</h2>
      
      <div className="space-y-4">
        {recentMatches.map((match, index) => {
          const isPlayer1 = match.player1Id === userId;
          const opponent = studentsData.find(s => 
            s.id === (isPlayer1 ? match.player2Id : match.player1Id)
          );
          const won = isPlayer1 
            ? match.player1Score > match.player2Score
            : match.player2Score > match.player1Score;
          
          return (
            <motion.div
              key={match.id}
              className="flex items-center justify-between p-4 rounded-xl bg-matcha-50 dark:bg-matcha-900/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <img 
                  src={opponent?.avatar} 
                  alt={opponent?.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{opponent?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(match.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <p className={`font-bold ${won ? 'text-green-600' : 'text-red-600'}`}>
                  {isPlayer1 ? match.player1Score : match.player2Score} - {isPlayer1 ? match.player2Score : match.player1Score}
                </p>
                <p className="text-sm text-muted-foreground">
                  {won ? 'Victory' : 'Defeat'}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}