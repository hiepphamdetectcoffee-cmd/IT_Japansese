import { Lesson } from '../../types';

export const AGILE_PM_LESSONS: Lesson[] = [
  {
    id: 'agile-1',
    slug: 'scrum-ceremonies-and-roles',
    title: 'Scrum Ceremonies & Roles',
    category: 'Agile / Scrum',
    difficulty: 'Beginner',
    description: 'Learn how to discuss sprints, standups, and retrospectives.',
    isFree: true,
    learningObjective: 'Master basic Scrum terminology in Japanese.',
    aiPracticeTopicKey: 'free-2',
    vocabulary: [
      { kanji: '朝会', reading: 'ちょうかい', romaji: 'choukai', meaning: 'Morning meeting/Standup', example: '朝会で進捗を報告します。' },
      { kanji: '振り返り', reading: 'ふりかえり', romaji: 'furikaeri', meaning: 'Retrospective', example: 'スプリントの振り返りを行います。' },
      { kanji: '見積もり', reading: 'みつもり', romaji: 'mitsumori', meaning: 'Estimation', example: 'タスクの工数を見積もります。' },
      { kanji: '工数', reading: 'こうすう', romaji: 'kousuu', meaning: 'Man-hours/Effort', example: 'この機能の実装には3人日かかります。' },
      { kanji: '優先順位', reading: 'ゆうせんじゅんい', romaji: 'yuusen jun\'i', meaning: 'Priority order', example: 'バックログの優先順位を決めます。' },
      { kanji: '受け入れ基準', reading: 'うけいれきじゅん', romaji: 'ukeire kijun', meaning: 'Acceptance criteria', example: '受け入れ基準を満たしているか確認します。' },
      { kanji: '速度', reading: 'そくど', romaji: 'sokudo', meaning: 'Velocity', example: 'チームのベロシティを計測します。' },
      { kanji: '障害', reading: 'しょうがい', romaji: 'shougai', meaning: 'Impediment/Obstacle', example: '進捗を妨げる障害はありますか？' },
      { kanji: '成果物', reading: 'せいかぶつ', romaji: 'seikabutsu', meaning: 'Deliverable', example: 'スプリントの成果物をデモします。' },
      { kanji: '改善', reading: 'かいぜん', romaji: 'kaizen', meaning: 'Improvement', example: 'プロセスの改善案を出し合います。' }
    ],
    dialogue: [
      { speaker: 'Scrum Master', japanese: '今日の朝会を始めます。障害になっていることはありますか？', meaning: 'Let\'s start today\'s standup. Are there any impediments?' },
      { speaker: 'Dev', japanese: '環境構築で少し手間取っていますが、今日中には終わる予定です。', meaning: 'I\'m having a bit of trouble with the environment setup, but I plan to finish it by the end of today.' },
      { speaker: 'Scrum Master', japanese: '承知しました。振り返りで改善策を話し合いましょう。', meaning: 'Understood. Let\'s discuss improvement measures in the retrospective.' }
    ]
  },
  {
    id: 'pm-1',
    slug: 'project-planning-and-milestones',
    title: 'Project Planning & Milestones',
    category: 'Project Management',
    difficulty: 'Intermediate',
    description: 'Discussing schedules, milestones, and resource allocation.',
    isFree: true,
    learningObjective: 'Learn to talk about project timelines and management.',
    aiPracticeTopicKey: 'simulation',
    vocabulary: [
      { kanji: '計画', reading: 'けいかく', romaji: 'keikaku', meaning: 'Plan', example: 'プロジェクト計画を策定します。' },
      { kanji: '納期', reading: 'のうき', romaji: 'nouki', meaning: 'Deadline/Delivery date', example: '納期に間に合うよう調整します。' },
      { kanji: '工程', reading: 'こうてい', romaji: 'koutei', meaning: 'Process/Phase', example: '設計工程に入ります。' },
      { kanji: '進捗', reading: 'しんちょく', romaji: 'shinchoku', meaning: 'Progress', example: '進捗が遅れています。' },
      { kanji: '巻き返し', reading: 'まきかえし', romaji: 'makikaeshi', meaning: 'Recovery/Catching up', example: '遅れを巻き返すための対策を立てます。' },
      { kanji: 'リソース', reading: 'りそーす', romaji: 'risoosu', meaning: 'Resource', example: 'リソースが不足しています。' },
      { kanji: '予算', reading: 'よさん', romaji: 'yosan', meaning: 'Budget', example: '予算内で対応可能です。' },
      { kanji: '品質管理', reading: 'ひんしつかんり', romaji: 'hinshitsu kanri', meaning: 'Quality control', example: '品質管理を徹底してください。' },
      { kanji: 'リスク管理', reading: 'りすくかんり', romaji: 'risuku kanri', meaning: 'Risk management', example: 'リスク管理表を更新します。' },
      { kanji: '報告', reading: 'ほうこく', romaji: 'houkoku', meaning: 'Report', example: '週次報告を行います。' }
    ],
    dialogue: [
      { speaker: 'PM', japanese: '現在の進捗状況はどうですか？', meaning: 'What is the current progress status?' },
      { speaker: 'Leader', japanese: '設計工程で少し遅れが出ていますが、実装で巻き返せる見込みです。', meaning: 'There is a slight delay in the design phase, but we expect to catch up during implementation.' },
      { speaker: 'PM', japanese: '納期は厳守でお願いします。リソースが必要なら言ってください。', meaning: 'Please strictly adhere to the deadline. Let me know if you need more resources.' }
    ]
  }
];
