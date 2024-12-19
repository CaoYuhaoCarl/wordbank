"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Swords, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { studentsData } from "@/lib/data/users/students";

// Mock user ID - in a real app, this would come from authentication
const MOCK_USER_ID = "s1";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/study", label: "Study", icon: BookOpen },
  { href: "/pk", label: "Battle", icon: Swords },
  { href: "/profile", label: "Profile", icon: User },
];

export function Navbar() {
  const pathname = usePathname();
  const currentUser = studentsData.find(s => s.id === MOCK_USER_ID);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-matcha-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-matcha-600" />
            <span className="font-bold text-lg">VocabPK</span>
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    "hover:text-matcha-600 hover:bg-matcha-50",
                    isActive ? "text-matcha-600" : "text-muted-foreground"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-matcha-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {currentUser && (
              <Link href="/profile" className="flex items-center gap-2">
                <div className="relative">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-full border-2 border-matcha-200"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-matcha-100 text-matcha-700 text-xs font-medium px-1 rounded-full">
                    {currentUser.progress.vocabularyLevel}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">{currentUser.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {currentUser.progress.wordsLearned.toLocaleString()} words
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}