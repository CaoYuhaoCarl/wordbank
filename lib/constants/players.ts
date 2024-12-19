import type { Player } from '@/lib/types/pk-battle';
import { studentsData } from '@/lib/data/users/students';

// Get the current user from studentsData
const currentUser = studentsData.find(s => s.id === "s1");

export const MOCK_PLAYER: Player = {
  id: "s1",
  name: currentUser?.name || "You",
  avatar: currentUser?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=player1"
};

export const AI_OPPONENT: Player = {
  id: "ai-1",
  name: "AI Opponent",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ai",
  isAI: true
};