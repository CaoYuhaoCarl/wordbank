"use client";

import { useState } from 'react';
import { useClassPKBattle } from '@/lib/hooks/useClassPKBattle';
import { PKHeader } from '@/components/pk/layout/pk-header';
import { ClassList } from '@/components/pk/class/class-list';
import { Timer } from '@/components/pk/game/timer';
import { ScoreDisplay } from '@/components/pk/game/score-display';
import { RoundIndicator } from '@/components/pk/game/round-indicator';
import { BattleCard } from '@/components/pk/battle-card';
import { GameOver } from '@/components/pk/game-over';
import { studentsData } from '@/lib/data/users/students';

// Using a real student ID from our data
const CURRENT_USER_ID = "s1"; // Alice Johnson

export default function ClassPKPage() {
  const [selectedOpponentId, setSelectedOpponentId] = useState<string | null>(null);
  const { battleState, actions } = useClassPKBattle(CURRENT_USER_ID, selectedOpponentId);

  const currentUser = studentsData.find(s => s.id === CURRENT_USER_ID);
  
  if (!currentUser) {
    return <div>User not found</div>;
  }

  if (!selectedOpponentId) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <PKHeader mode="class" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Your Class: {currentUser.level}</h2>
          <p className="text-muted-foreground">
            Challenge your classmates to improve your vocabulary together
          </p>
        </div>
        <ClassList 
          currentUserId={CURRENT_USER_ID}
          onSelectOpponent={setSelectedOpponentId}
        />
      </div>
    );
  }

  if (battleState.gameStatus === 'complete') {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <GameOver 
          battleState={battleState} 
          onRestart={() => setSelectedOpponentId(null)}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <PKHeader mode="class" />
      
      <div className="space-y-6">
        <ScoreDisplay battleState={battleState} />
        
        <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
          <RoundIndicator 
            currentRound={battleState.currentRound} 
            totalRounds={battleState.totalRounds} 
          />
          
          <Timer 
            timeLeft={battleState.timeLeft} 
            totalTime={15}
          />
          
          <BattleCard 
            battleState={battleState}
            onSelectAnswer={actions.selectAnswer}
          />
        </div>
      </div>
    </div>
  );
}