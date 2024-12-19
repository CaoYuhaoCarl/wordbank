"use client";

import { useState, useEffect, useCallback } from 'react';
import { useQuestionGenerator } from './useQuestionGenerator';
import { useScoreTracking } from './useScoreTracking';
import { studentsData } from '@/lib/data/users/students';
import type { PKBattleState } from '@/lib/types/pk-battle';

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
    player1: { id: '', name: '', avatar: '' },
    player2: { id: '', name: '', avatar: '' }
  },
  playedWords: []
};

export function useClassPKBattle(
  userId: string,
  opponentId: string | null,
  totalRounds: number = 10,
  timePerRound: number = 15
) {
  const { trackPKScore } = useScoreTracking(userId);
  const { generateQuestion } = useQuestionGenerator();
  
  const [battleState, setBattleState] = useState<PKBattleState>(() => {
    const currentUser = studentsData.find(s => s.id === userId);
    const opponent = opponentId ? studentsData.find(s => s.id === opponentId) : null;

    if (!currentUser) {
      console.error('Current user not found:', userId);
      return INITIAL_STATE;
    }

    return {
      ...INITIAL_STATE,
      totalRounds,
      players: {
        player1: {
          id: currentUser.id,
          name: currentUser.name,
          avatar: currentUser.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'
        },
        player2: opponent ? {
          id: opponent.id,
          name: opponent.name,
          avatar: opponent.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=opponent'
        } : INITIAL_STATE.players.player2
      }
    };
  });

  // Update battle state when opponent changes
  useEffect(() => {
    if (opponentId) {
      const opponent = studentsData.find(s => s.id === opponentId);
      if (opponent) {
        setBattleState(prev => ({
          ...prev,
          players: {
            ...prev.players,
            player2: {
              id: opponent.id,
              name: opponent.name,
              avatar: opponent.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=opponent'
            }
          }
        }));
      }
    }
  }, [opponentId]);

  const handleGameComplete = useCallback(() => {
    setBattleState(prev => ({
      ...prev,
      gameStatus: 'complete'
    }));

    if (opponentId) {
      trackPKScore({
        userId,
        type: 'pk',
        opponentId,
        playerScore: battleState.scores.player1,
        opponentScore: battleState.scores.player2,
        correct: battleState.scores.player1,
        total: totalRounds,
        details: {
          wordIds: battleState.playedWords,
          timeSpent: (totalRounds - battleState.timeLeft) * timePerRound,
          difficulty: 'medium'
        }
      });
    }
  }, [userId, opponentId, battleState.scores, battleState.playedWords, battleState.timeLeft, totalRounds, timePerRound, trackPKScore]);

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

    // Simulate opponent's turn with dynamic difficulty based on their level
    setTimeout(() => {
      const opponent = studentsData.find(s => s.id === opponentId);
      const opponentAccuracy = opponent?.progress.accuracy || 70;
      const opponentCorrect = Math.random() * 100 < opponentAccuracy;
      
      const opponentAnswer = opponentCorrect 
        ? battleState.currentQuestion?.correctIndex 
        : Math.floor(Math.random() * 4);

      setBattleState(prev => ({
        ...prev,
        selectedAnswer: opponentAnswer,
        scores: {
          ...prev.scores,
          player2: opponentCorrect ? prev.scores.player2 + 1 : prev.scores.player2
        },
        isRoundComplete: true,
        currentRound: prev.currentRound + 1,
        currentTurn: 'player1'
      }));

      if (battleState.currentRound >= totalRounds) {
        handleGameComplete();
      } else {
        setTimeout(startNewRound, 2000);
      }
    }, 1500);
  }, [battleState, opponentId, handleGameComplete, startNewRound]);

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
    if (battleState.gameStatus === 'waiting' && opponentId) {
      startNewRound();
    }
  }, [battleState.gameStatus, opponentId, startNewRound]);

  return {
    battleState,
    actions: {
      selectAnswer,
      startNewRound,
    },
  };
}