import { Lesson } from '../../types';
import { PROGRAMMING_LESSONS } from './programming';
import { TESTING_LESSONS } from './testing';
import { DATABASE_LESSONS } from './database';
import { NETWORK_INFRA_LESSONS } from './network_infra';
import { BUSINESS_COMM_LESSONS } from './business_comm';
import { AGILE_PM_LESSONS } from './agile_pm';
import { FRONTEND_BACKEND_LESSONS } from './frontend_backend';
import { AI_CLOUD_LESSONS } from './ai_cloud';
import { SECURITY_MOBILE_LESSONS } from './security_mobile';
import { REQUIREMENTS_UIUX_LESSONS } from './requirements_uiux';
import { REAL_SITUATIONS_LESSONS } from './real_situations';
import { EXTRA_LESSONS_1 } from './extra_1';
import { EXTRA_LESSONS_2 } from './extra_2';
import { EXTRA_LESSONS_3 } from './extra_3';
import { EXTRA_LESSONS_4 } from './extra_4';
import { EXTRA_LESSONS_5 } from './extra_5';

export const ALL_LESSONS: Lesson[] = [
  ...PROGRAMMING_LESSONS,
  ...TESTING_LESSONS,
  ...DATABASE_LESSONS,
  ...NETWORK_INFRA_LESSONS,
  ...BUSINESS_COMM_LESSONS,
  ...AGILE_PM_LESSONS,
  ...FRONTEND_BACKEND_LESSONS,
  ...AI_CLOUD_LESSONS,
  ...SECURITY_MOBILE_LESSONS,
  ...REQUIREMENTS_UIUX_LESSONS,
  ...REAL_SITUATIONS_LESSONS,
  ...EXTRA_LESSONS_1,
  ...EXTRA_LESSONS_2,
  ...EXTRA_LESSONS_3,
  ...EXTRA_LESSONS_4,
  ...EXTRA_LESSONS_5,
];

export const CATEGORIES = [
  'All',
  'Programming',
  'Testing / QA',
  'Database',
  'Network',
  'Infrastructure / DevOps',
  'Security',
  'Cloud / AWS / Azure',
  'UI/UX / Frontend',
  'Backend / API',
  'Mobile Development',
  'AI / Machine Learning',
  'Agile / Scrum',
  'Project Management',
  'Requirement Analysis',
  'Client Communication',
  'Team Communication',
  'Interview Preparation',
  'Business Japanese / Keigo',
  'BrSE Communication',
  'Real Project Situations'
];
