import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Swords, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">English Vocabulary PK</h1>
          <p className="text-lg text-muted-foreground">
            Challenge yourself and compete with others to master English vocabulary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Link href="/study" className="block">
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Study Mode</h2>
                <p className="text-sm text-muted-foreground text-center">
                  Learn and memorize new vocabulary through intensive training
                </p>
              </div>
            </div>
          </Link>

          <Link href="/pk" className="block">
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Swords className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">PK Mode</h2>
                <p className="text-sm text-muted-foreground text-center">
                  Challenge other learners in real-time vocabulary battles
                </p>
              </div>
            </div>
          </Link>

          <Link href="/stats" className="block">
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Statistics</h2>
                <p className="text-sm text-muted-foreground text-center">
                  Track your progress and view detailed learning analytics
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}