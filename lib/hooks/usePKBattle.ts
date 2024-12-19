"use client";

import { useState, useEffect, useCallback } from 'react';
import { useAIOpponent } from './useAIOpponent';
import { useQuestionGenerator } from './useQuestionGenerator';
import { useScoreTracking } from './useScoreTracking';
import { useSoundEffects } from './useSoundEffects';
import type { PKBattleState } from '@/lib/types/pk-battle';
import { MOCK_PLAYER, AI_OPPONENT } from '@/lib/constants/players';

const INITIAL_STATE: PKBattleState = {
  currentRound: 1,
  totalRounds: 10,
  timeLeft: 15,
  scores: { player1: 0, player2: 0 },
  currentQuestion: null,
  selectedAnswer: null,
  isRoundComplete: false,
  gameStatus: 'waiting',
  currentTurn: 'player1',
  players: {
    player1: MOCK_PLAYER,
    player2: AI_OPPONENT
  },
  playedWords: []
};

export function usePKBattle(
  userId: string, 
  totalRounds: number = 10, 
  timePerRound: number = 15,
  aiDifficulty: 'easy' | 'medium' | 'hard' = 'medium'
) {
  const { trackPKScore } = useScoreTracking(userId);
  const { getAIAnswer } = useAIOpponent(aiDifficulty);
  const { generateQuestion } = useQuestionGenerator();
  const { playCorrect, playIncorrect } = useSoundEffects();
  
  const [battleState, setBattleState] = useState<PKBattleState>(INITIAL_STATE);

  const handleGameComplete = useCallback(() => {
    setBattleState(prev => ({
      ...prev,
      gameStatus: 'complete'
    }));

    trackPKScore({
      userId,
      type: 'pk',
      opponentId: AI_OPPONENT.id,
      playerScore: battleState.scores.player1,
      opponentScore: battleState.scores.player2,
      correct: battleState.scores.player1,
      total: totalRounds,
      details: {
        wordIds: battleState.playedWords,
        timeSpent: (totalRounds - battleState.timeLeft) * timePerRound,
        difficulty: aiDifficulty
      }
    });
  }, [userId, battleState.scores, battleState.playedWords, battleState.timeLeft, totalRounds, timePerRound, trackPKScore, aiDifficulty]);

  const startNewRound = useCallback(() => {
    if (battleState.currentRound > totalRounds) {
      handleGameComplete();
      return;
    }

    const newQuestion = generateQuestion(battleState.playedWords);
    
    setBattleState(prev => ({
      ...prev,
      currentQuestion: newQuestion,
      selectedAnswer: null,
      isRoundComplete: false,
      timeLeft: timePerRound,
      gameStatus: 'playing',
      currentTurn: 'player1'
    }));
  }, [battleState.currentRound, battleState.playedWords, totalRounds, generateQuestion, timePerRound, handleGameComplete]);

  const selectAnswer = useCallback((index: number) => {
    if (battleState.selectedAnswer !== null || 
        battleState.isRoundComplete || 
        battleState.currentTurn !== 'player1' ||
        !battleState.currentQuestion) return;

    const isCorrect = index === battleState.currentQuestion.correctIndex;
    
    if (isCorrect) {
      playCorrect();
    } else {
      playIncorrect();
    }

    setBattleState(prev => ({
      ...prev,
      selectedAnswer: index,
      scores: {
        ...prev.scores,
        player1: isCorrect ? prev.scores.player1 + 1 : prev.scores.player1
      },
      currentTurn: 'player2',
      playedWords: [...prev.playedWords, prev.currentQuestion?.word.id || '']
    }));
  }, [battleState, playCorrect, playIncorrect]);

  // Handle AI Turn
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (battleState.gameStatus === 'playing' && 
        battleState.currentTurn === 'player2' && 
        battleState.currentQuestion) {
      
      getAIAnswer(battleState.currentQuestion).then(aiAnswer => {
        const isCorrect = aiAnswer === battleState.currentQuestion?.correctIndex;
        
        setBattleState(prev => ({
          ...prev,
          scores: {
            ...prev.scores,
            player2: isCorrect ? prev.scores.player2 + 1 : prev.scores.player2
          },
          isRoundComplete: true,
          currentRound: prev.currentRound + 1,
          currentTurn: 'player1'
        }));

        if (battleState.currentRound >= totalRounds) {
          handleGameComplete();
        } else {
          timeoutId = setTimeout(startNewRound, 2000);
        }
      });
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [battleState, getAIAnswer, totalRounds, handleGameComplete, startNewRound]);

  // Timer Effect
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (battleState.gameStatus === 'playing' && !battleState.isRoundComplete) {
      timerId = setInterval(() => {
        setBattleState(prev => {
          if (prev.timeLeft <= 1) {
            if (prev.currentTurn === 'player1') {
              selectAnswer(-1);
            }
            return {
              ...prev,
              timeLeft: 0,
              isRoundComplete: true,
              currentTurn: prev.currentTurn === 'player1' ? 'player2' : 'player1'
            };
          }
          return {
            ...prev,
            timeLeft: prev.timeLeft - 1
          };
        });
      }, 1000);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [battleState.gameStatus, battleState.isRoundComplete, selectAnswer]);

  // Start game effect
  useEffect(() => {
    if (battleState.gameStatus === 'waiting') {
      startNewRound();
    }
  }, [battleState.gameStatus, startNewRound]);

  return {
    battleState,
    actions: {
      selectAnswer,
      startNewRound,
    },
  };
}