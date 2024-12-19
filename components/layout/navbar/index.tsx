"use client";

import { NavLogo } from "./nav-logo";
import { NavLinks } from "./nav-links";
import { UserProfile } from "./user-profile";
import { useUser } from "@/lib/hooks/useUser";

// Mock user ID - in a real app, this would come from authentication
const MOCK_USER_ID = "s1";

export function Navbar() {
  const { user } = useUser(MOCK_USER_ID);

  if (!user) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/80 dark:bg-black/20 backdrop-blur-lg border-b border-gray-200/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <NavLogo />
            <NavLinks />
            <UserProfile user={user} />
          </div>
        </div>
      </div>
    </header>
  );
}