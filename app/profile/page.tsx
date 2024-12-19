"use client";

import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileStats } from "@/components/profile/profile-stats";
import { LearningProgress } from "@/components/profile/learning-progress";
import { PKHistory } from "@/components/profile/pk-history";
import { useUser } from "@/lib/hooks/useUser";

// Using a mock user ID - in a real app, this would come from authentication
const MOCK_USER_ID = "s1";

export default function ProfilePage() {
  const { user, updateUserAvatar } = useUser(MOCK_USER_ID);

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">User not found</h1>
          <p className="text-gray-500 mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl space-y-8">
      <ProfileHeader 
        user={user}
        onAvatarChange={updateUserAvatar}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileStats user={user} />
        <LearningProgress user={user} />
      </div>
      
      <PKHistory userId={user.id} />
    </div>
  );
}