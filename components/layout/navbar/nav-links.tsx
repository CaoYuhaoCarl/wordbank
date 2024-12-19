"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, BookOpen, Swords, BarChart3 } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/study", label: "Study", icon: BookOpen },
  { href: "/pk", label: "Battle", icon: Swords },
  { href: "/stats", label: "Stats", icon: BarChart3 },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon 
                className={`w-4 h-4 ${isActive ? 'text-matcha-600' : 'text-gray-600'}`} 
              />
              <span className={`${isActive ? 'text-matcha-600' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </motion.div>
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-matcha-50 -z-10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}