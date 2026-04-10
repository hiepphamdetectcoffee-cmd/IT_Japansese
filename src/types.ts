export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Topic {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  role: string;
  difficulty: Difficulty;
  isPremium: boolean;
  scenarioBackground: string;
  goal: string;
  outcome: string;
  systemPrompt: string;
  initialMessage: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: number;
  feedback?: Feedback;
}

export interface Feedback {
  corrected: string;
  natural: string;
  explanation: string;
  nextQuestion?: string;
}

export type UserRole = 'guest' | 'normal' | 'premium' | 'admin';

export type PaymentStatus = 'pending' | 'approved' | 'rejected';

export interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface PaymentRequest {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  amount: number;
  planId: string;
  planName: string;
  transferCode: string;
  screenshotUrl?: string;
  status: PaymentStatus;
  createdAt: number;
  updatedAt: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: number;
  updatedAt: number;
}

export interface GuestUsage {
  topicIds: string[];
  chatCount: number;
  voiceCount: number;
  lastUsedAt: number;
}

export interface VocabularyItem {
  kanji: string;
  reading: string;
  romaji: string;
  meaning: string;
  example: string;
}

export interface DialogueItem {
  speaker: string;
  japanese: string;
  meaning: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  category: string;
  difficulty: Difficulty;
  description: string;
  isFree: boolean;
  vocabulary: VocabularyItem[];
  dialogue: DialogueItem[];
  learningObjective: string;
  aiPracticeTopicKey: string;
}

export type AppState = 'landing' | 'topic-selection' | 'conversation' | 'login' | 'admin' | 'upgrade' | 'study';
