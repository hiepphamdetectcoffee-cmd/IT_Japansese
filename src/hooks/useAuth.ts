import { useState, useEffect, useCallback } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { UserProfile, UserRole, GuestUsage } from '../types';

export const GUEST_LIMITS = {
  TOPICS: 3,
  CHATS_PER_TOPIC: 5,
  VOICE_ATTEMPTS: 3,
};

export const NORMAL_LIMITS = {
  CHATS_PER_TOPIC: 20,
  VOICE_ATTEMPTS: 15,
};

const GUEST_STORAGE_KEY = 'jp_it_guest_usage';

const initialGuestUsage: GuestUsage = {
  topicIds: [],
  chatCount: 0,
  voiceCount: 0,
  lastUsedAt: Date.now(),
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [guestUsage, setGuestUsage] = useState<GuestUsage>(() => {
    const stored = localStorage.getItem(GUEST_STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialGuestUsage;
  });

  useEffect(() => {
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(guestUsage));
  }, [guestUsage]);

  useEffect(() => {
    let unsubProfile: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      // Cleanup previous profile listener if it exists
      if (unsubProfile) {
        unsubProfile();
        unsubProfile = null;
      }

      setUser(firebaseUser);

      if (firebaseUser) {
        // Clear guest usage on login to ensure fresh start if they ever logout
        // or just to keep local storage clean
        setGuestUsage(initialGuestUsage);
        
        const userDoc = doc(db, 'users', firebaseUser.uid);
        unsubProfile = onSnapshot(userDoc, (docSnap) => {
          if (docSnap.exists()) {
            setProfile(docSnap.data() as UserProfile);
          } else {
            const newProfile: UserProfile = {
              id: firebaseUser.uid,
              name: firebaseUser.displayName || 'User',
              email: firebaseUser.email || '',
              role: 'normal',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            };
            setDoc(userDoc, newProfile);
            setProfile(newProfile);
          }
          setLoading(false);
        }, (error) => {
          console.error("Profile sync error:", error);
          setLoading(false);
        });
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubProfile) unsubProfile();
    };
  }, []);

  const incrementGuestChat = useCallback(() => {
    setGuestUsage(prev => ({ ...prev, chatCount: prev.chatCount + 1, lastUsedAt: Date.now() }));
  }, []);

  const incrementGuestVoice = useCallback(() => {
    setGuestUsage(prev => ({ ...prev, voiceCount: prev.voiceCount + 1, lastUsedAt: Date.now() }));
  }, []);

  const addGuestTopic = useCallback((topicId: string) => {
    setGuestUsage(prev => {
      if (prev.topicIds.includes(topicId)) return prev;
      return { ...prev, topicIds: [...prev.topicIds, topicId], lastUsedAt: Date.now() };
    });
  }, []);

  const isAuthenticated = !!user;
  const isGuest = !user;
  const role: UserRole = profile?.role || 'guest';

  return {
    user,
    profile,
    role,
    isGuest,
    isAuthenticated,
    loading,
    guestUsage,
    incrementGuestChat,
    incrementGuestVoice,
    addGuestTopic,
  };
}
