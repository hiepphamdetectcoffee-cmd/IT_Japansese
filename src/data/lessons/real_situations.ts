import { Lesson } from '../../types';

export const REAL_SITUATIONS_LESSONS: Lesson[] = [
  {
    id: 'real-1',
    slug: 'handling-system-outages',
    title: 'Handling System Outages',
    category: 'Real Project Situations',
    difficulty: 'Advanced',
    description: 'Emergency communication during a system down situation.',
    isFree: true,
    learningObjective: 'Learn to communicate under pressure during incidents.',
    aiPracticeTopicKey: 'simulation',
    vocabulary: [
      { kanji: '障害', reading: 'しょうがい', romaji: 'shougai', meaning: 'Failure/Outage', example: '大規模なシステム障害が発生しました。' },
      { kanji: '復旧', reading: 'ふっきゅう', romaji: 'fukkyuu', meaning: 'Recovery', example: '復旧作業を最優先で行います。' },
      { kanji: '原因', reading: 'げんいん', romaji: 'genin', meaning: 'Cause', example: '原因の切り分けを行います。' },
      { kanji: '暫定', reading: 'ざんてい', romaji: 'zantei', meaning: 'Provisional/Temporary', example: '暫定的な対応を講じます。' },
      { kanji: '恒久', reading: 'こうきゅう', romaji: 'koukyuu', meaning: 'Permanent', example: '恒久対策を検討します。' },
      { kanji: '影響', reading: 'えいきょう', romaji: 'eikyou', meaning: 'Impact', example: '影響範囲を調査してください。' },
      { kanji: '報告', reading: 'ほうこく', romaji: 'houkoku', meaning: 'Report', example: '状況を随時報告します。' },
      { kanji: '周知', reading: 'しゅうち', romaji: 'shuuchi', meaning: 'Public notice/Announcement', example: 'ユーザーに障害を周知します。' },
      { kanji: '再発防止', reading: 'さいはつぼうし', romaji: 'saihatsu boushi', meaning: 'Recurrence prevention', example: '再発防止策を策定します。' },
      { kanji: '切り戻し', reading: 'きりもどし', romaji: 'kirimodoshi', meaning: 'Rollback', example: '修正を切り戻します。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: 'サーバーがダウンしています。影響範囲は？', meaning: 'The server is down. What is the impact range?' },
      { speaker: 'Engineer', japanese: '全ユーザーがログインできない状態です。現在、原因を切り分け中です。', meaning: 'All users are unable to log in. We are currently isolating the cause.' },
      { speaker: 'Lead', japanese: 'まずは暫定対応で復旧を急ぎ、後で恒久対策を考えましょう。', meaning: 'Let\'s hurry to recover with a temporary fix first, and then think about a permanent solution later.' }
    ]
  },
  {
    id: 'real-2',
    slug: 'dealing-with-specification-changes',
    title: 'Dealing with Specification Changes',
    category: 'Real Project Situations',
    difficulty: 'Intermediate',
    description: 'How to handle sudden changes in project specifications.',
    isFree: true,
    learningObjective: 'Learn to negotiate and discuss spec changes.',
    aiPracticeTopicKey: 'simulation',
    vocabulary: [
      { kanji: '仕様変更', reading: 'しようへんこう', romaji: 'shiyou henkou', meaning: 'Specification change', example: '急な仕様変更が入りました。' },
      { kanji: '追加', reading: 'ついか', romaji: 'tsuika', meaning: 'Addition', example: '機能を追加してください。' },
      { kanji: '工数', reading: 'こうすう', romaji: 'kousuu', meaning: 'Man-hours', example: '追加の工数を見積もります。' },
      { kanji: '納期', reading: 'のうき', romaji: 'nouki', meaning: 'Deadline', example: '納期への影響を確認します。' },
      { kanji: '優先順位', reading: 'ゆうせんじゅんい', romaji: 'yuusen jun\'i', meaning: 'Priority', example: 'タスクの優先順位を入れ替えます。' },
      { kanji: '調整', reading: 'ちょうせい', romaji: 'chousei', meaning: 'Adjustment', example: 'スケジュールの調整が必要です。' },
      { kanji: '合意', reading: 'ごうい', romaji: 'gouii', meaning: 'Agreement', example: '変更内容について合意を得ます。' },
      { kanji: '妥協', reading: 'だきょう', romaji: 'dakyou', meaning: 'Compromise', example: '一部の機能を妥協します。' },
      { kanji: '反映', reading: 'はんえい', romaji: 'han\'ei', meaning: 'Reflection/Implementation', example: '変更を設計書に反映させます。' },
      { kanji: '相談', reading: 'そうだん', romaji: 'soudan', meaning: 'Consultation', example: 'リーダーに相談します。' }
    ],
    dialogue: [
      { speaker: 'Client', japanese: 'このボタンの動作を、クリックからホバーに変更したいです。', meaning: 'I want to change the behavior of this button from click to hover.' },
      { speaker: 'BrSE', japanese: '仕様変更ですね。納期への影響を確認して、改めてご相談させてください。', meaning: 'That\'s a spec change. I\'ll check the impact on the deadline and consult with you again.' },
      { speaker: 'Client', japanese: 'わかりました。なるべく早めにお願いします。', meaning: 'Understood. Please do it as soon as possible.' }
    ]
  }
];
