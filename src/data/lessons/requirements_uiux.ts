import { Lesson } from '../../types';

export const REQUIREMENTS_UIUX_LESSONS: Lesson[] = [
  {
    id: 'req-1',
    slug: 'gathering-and-analyzing-requirements',
    title: 'Gathering & Analyzing Requirements',
    category: 'Requirement Analysis',
    difficulty: 'Intermediate',
    description: 'How to discuss user needs and system requirements.',
    isFree: true,
    learningObjective: 'Learn to talk about requirements gathering.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '要望', reading: 'ようぼう', romaji: 'youbou', meaning: 'Request/Demand', example: '顧客の要望をヒアリングします。' },
      { kanji: '要件', reading: 'ようけん', romaji: 'youken', meaning: 'Requirement', example: 'システム要件をまとめます。' },
      { kanji: '定義', reading: 'ていぎ', romaji: 'teigi', meaning: 'Definition', example: '要件定義書を作成します。' },
      { kanji: '分析', reading: 'ぶんせき', romaji: 'bunseki', meaning: 'Analysis', example: '現状の業務フローを分析します。' },
      { kanji: '妥当性', reading: 'だとうせい', romaji: 'datousei', meaning: 'Validity/Feasibility', example: '要件の妥当性を検証します。' },
      { kanji: '優先順位', reading: 'ゆうせんじゅんい', romaji: 'yuusen jun\'i', meaning: 'Priority', example: '要件の優先順位を決めます。' },
      { kanji: '制約', reading: 'せいやく', romaji: 'seiyaku', meaning: 'Constraint', example: '技術的な制約を確認してください。' },
      { kanji: '範囲', reading: 'はんい', romaji: 'han\'i', meaning: 'Scope', example: 'プロジェクトの範囲を明確にします。' },
      { kanji: '合意', reading: 'ごうい', romaji: 'gouii', meaning: 'Agreement', example: '要件について合意を得ます。' },
      { kanji: '齟齬', reading: 'そご', romaji: 'sogo', meaning: 'Discrepancy', example: '認識に齟齬がないか確認します。' }
    ],
    dialogue: [
      { speaker: 'Analyst', japanese: '顧客の要望を要件定義書にまとめました。', meaning: 'I have summarized the customer\'s requests into the requirements definition document.' },
      { speaker: 'Lead', japanese: '技術的な制約で、実装が難しい要件はありませんか？', meaning: 'Are there any requirements that are difficult to implement due to technical constraints?' },
      { speaker: 'Analyst', japanese: 'いくつかありますが、優先順位を調整して合意を得る予定です。', meaning: 'There are a few, but I plan to adjust the priorities and get agreement.' }
    ]
  },
  {
    id: 'uiux-1',
    slug: 'ui-ux-design-principles',
    title: 'UI/UX Design Principles',
    category: 'UI/UX / Frontend',
    difficulty: 'Beginner',
    description: 'Discussing usability, accessibility, and visual design.',
    isFree: true,
    learningObjective: 'Master design terminology in Japanese.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '利便性', reading: 'りべんせい', romaji: 'ribensei', meaning: 'Convenience/Usability', example: 'ユーザーの利便性を向上させます。' },
      { kanji: '視認性', reading: 'しにんせい', romaji: 'shininsei', meaning: 'Visibility', example: '文字の視認性を高めます。' },
      { kanji: '操作性', reading: 'そうさせい', romaji: 'sousasei', meaning: 'Operability', example: '直感的な操作性を実現します。' },
      { kanji: '一貫性', reading: 'いっかんせい', romaji: 'ikkansei', meaning: 'Consistency', example: 'デザインの一貫性を保ちます。' },
      { kanji: '配色', reading: 'はいしょく', romaji: 'haishoku', meaning: 'Color scheme', example: '配色のバランスを考えます。' },
      { kanji: '配置', reading: 'はいち', romaji: 'haichi', meaning: 'Layout', example: 'ボタンの配置を検討します。' },
      { kanji: '導線', reading: 'どうせん', romaji: 'dousen', meaning: 'User path/Flow', example: 'ユーザーの導線を設計します。' },
      { kanji: '体験', reading: 'たいけん', romaji: 'taiken', meaning: 'Experience', example: '優れたユーザー体験を提供します。' },
      { kanji: '試作', reading: 'しさく', romaji: 'shisaku', meaning: 'Prototype', example: 'プロトタイプを試作します。' },
      { kanji: '評価', reading: 'ひょうか', romaji: 'hyouka', meaning: 'Evaluation', example: 'ユーザーテストで評価を行います。' }
    ],
    dialogue: [
      { speaker: 'Designer', japanese: 'この画面、操作性が少し悪い気がします。', meaning: 'I feel the operability of this screen is a bit poor.' },
      { speaker: 'Lead', japanese: 'ボタンの配置と、ユーザーの導線を見直してみましょう。', meaning: 'Let\'s review the button placement and the user path.' },
      { speaker: 'Designer', japanese: 'はい。視認性も考慮して、配色も調整します。', meaning: 'Yes. I\'ll also adjust the color scheme, considering visibility.' }
    ]
  }
];
