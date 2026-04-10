import { Topic, Category } from './types';
import { ALL_TOPICS } from './data/topics';

export const CATEGORIES: Category[] = [
  {
    id: 'free',
    title: 'Free Tier',
    description: 'Basic communication and interview practice.',
    icon: 'Sparkles'
  },
  {
    id: 'brse',
    title: 'BrSE Communication Pack',
    description: 'Master the bridge between clients and developers.',
    icon: 'Bridge'
  },
  {
    id: 'tester',
    title: 'Tester Communication Pack',
    description: 'Report bugs and manage QA cycles professionally.',
    icon: 'Bug'
  },
  {
    id: 'developer',
    title: 'Developer Communication Pack',
    description: 'Technical discussions and architectural proposals.',
    icon: 'Code'
  },
  {
    id: 'simulation',
    title: 'Real Project Simulation',
    description: 'End-to-end project communication across various industries.',
    icon: 'Terminal'
  }
];

export const TOPICS: Topic[] = ALL_TOPICS;
