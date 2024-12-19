"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { studentsData } from "@/lib/data/users/students";
import { getClassStudents } from "@/lib/data/classes/class-utils";
import { Trophy, Book, Target, Brain } from "lucide-react";

interface ClassListProps {
  currentUserId: string;
  onSelectOpponent: (opponentId: string) => void;
}

export function ClassList({ currentUserId, onSelectOpponent }: ClassListProps) {
  const currentUser = studentsData.find(s => s.id === currentUserId);
  const classmates = currentUser 
    ? getClassStudents(currentUser.classId)
        .filter(s => s.id !== currentUserId)
        .sort((a, b) => b.progress.wordsLearned - a.progress.wordsLearned)
    : [];

  if (classmates.length === 0) {
    return (
      <div className="text-center p-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl">
        <p className="text-lg text-muted-foreground">No classmates found in your class.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {classmates.map((student, index) => (
        <motion.div
          key={student.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="group p-6 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-black/20 backdrop-blur-sm border border-matcha-100 hover:border-matcha-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-16 h-16 rounded-full border-2 border-matcha-200 group-hover:border-matcha-300 transition-colors"
                />
                <div className="absolute -bottom-1 -right-1 bg-matcha-100 text-matcha-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  Lv.{student.progress.vocabularyLevel}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-matcha-700 transition-colors">
                  {student.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {student.level.charAt(0).toUpperCase() + student.level.slice(1)}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4 text-matcha-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Words Learned</p>
                  <p className="font-semibold">{student.progress.wordsLearned.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-matcha-500" />
                <div>
                  <p className="text-sm text-muted-foreground">PK Wins</p>
                  <p className="font-semibold">{student.progress.pkWins}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-matcha-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p className="font-semibold">{student.progress.accuracy}%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-matcha-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Vocab Level</p>
                  <p className="font-semibold">{student.progress.vocabularyLevel}</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-matcha-400 hover:bg-matcha-500 text-white transition-all duration-200
                         shadow-sm hover:shadow-md group-hover:scale-[1.02]"
              onClick={() => onSelectOpponent(student.id)}
            >
              Challenge
            </Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}