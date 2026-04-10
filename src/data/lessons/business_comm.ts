import { Lesson } from '../../types';

export const BUSINESS_COMM_LESSONS: Lesson[] = [
  {
    id: 'bus-1',
    slug: 'professional-greetings-and-introductions',
    title: 'Professional Greetings & Introductions',
    category: 'Business Japanese / Keigo',
    difficulty: 'Beginner',
    description: 'Master the basic greetings and self-introductions in a Japanese workplace.',
    isFree: true,
    learningObjective: 'Learn standard business greetings and self-intro patterns.',
    aiPracticeTopicKey: 'free-1',
    vocabulary: [
      { kanji: 'お疲れ様です', reading: 'おつかれさまです', romaji: 'otsukaresama desu', meaning: 'Thank you for your hard work (standard greeting)', example: 'お疲れ様です。お先に失礼します。' },
      { kanji: 'お世話になっております', reading: 'おせわになっております', romaji: 'osewa ni natte orimasu', meaning: 'Thank you for your support (external greeting)', example: 'いつもお世話になっております。' },
      { kanji: '承知いたしました', reading: 'しょうちいたしました', romaji: 'shouchi itashimashita', meaning: 'I understand/acknowledged (polite)', example: '修正の件、承知いたしました。' },
      { kanji: '申し訳ございません', reading: 'もうしわけございません', romaji: 'moushiwake gozaimasen', meaning: 'I am very sorry', example: '返信が遅れ、申し訳ございません。' },
      { kanji: '確認させていただきます', reading: 'かくにんさせていただきます', romaji: 'kakunin sasete itadakimasu', meaning: 'I will check/confirm', example: '詳細を確認させていただきます。' },
      { kanji: '検討させていただきます', reading: 'けんとうさせていただきます', romaji: 'kentou sasete itadakimasu', meaning: 'I will consider/think about it', example: '社内で検討させていただきます。' },
      { kanji: '恐縮ですが', reading: 'きょうしゅくですが', romaji: 'kyoushuku desu ga', meaning: 'I am sorry to trouble you, but...', example: '恐縮ですが、資料をいただけますか？' },
      { kanji: '幸いです', reading: 'さいわいです', romaji: 'saiwai desu', meaning: 'I would appreciate it/It would be great if...', example: 'ご確認いただければ幸いです。' },
      { kanji: '何卒', reading: 'なにとぞ', romaji: 'nanitozo', meaning: 'Kindly/Please (formal)', example: '何卒よろしくお願い申し上げます。' },
      { kanji: '拝承', reading: 'はいしょう', romaji: 'haishou', meaning: 'Acknowledged (formal email)', example: 'メールの件、拝承いたしました。' }
    ],
    dialogue: [
      { speaker: 'Staff', japanese: 'いつもお世話になっております。', meaning: 'Thank you for your continued support.' },
      { speaker: 'Client', japanese: 'こちらこそ。例の資料は確認いただけましたか？', meaning: 'Likewise. Have you checked the documents I mentioned?' },
      { speaker: 'Staff', japanese: 'はい、承知いたしました。週明けに回答させていただきます。', meaning: 'Yes, I have. I will provide an answer at the beginning of next week.' }
    ]
  },
  {
    id: 'brse-1',
    slug: 'bridge-se-requirements-clarification',
    title: 'BrSE: Requirements Clarification',
    category: 'BrSE Communication',
    difficulty: 'Intermediate',
    description: 'How to clarify requirements between Japanese clients and offshore teams.',
    isFree: true,
    learningObjective: 'Master terms for bridging communication gaps.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '要件定義', reading: 'ようけんていぎ', romaji: 'youken teigi', meaning: 'Requirements definition', example: '要件定義書の内容を確認します。' },
      { kanji: '認識合わせ', reading: 'にんしきあわせ', romaji: 'ninshiki awase', meaning: 'Alignment/Checking mutual understanding', example: '仕様の認識合わせを行いましょう。' },
      { kanji: '齟齬', reading: 'そご', romaji: 'sogo', meaning: 'Discrepancy/Misunderstanding', example: '認識に齟齬がないか確認してください。' },
      { kanji: '展開', reading: 'てんかい', romaji: 'tenkai', meaning: 'Deployment/Sharing with team', example: '修正内容をチームに展開します。' },
      { kanji: '吸い上げる', reading: 'すいあげる', romaji: 'suiageru', meaning: 'To gather/extract (requirements)', example: '顧客の要望を吸い上げます。' },
      { kanji: '落とし込む', reading: 'おとしこむ', romaji: 'otoshikomu', meaning: 'To incorporate/translate into (design)', example: '要件を設計に落とし込みます。' },
      { kanji: '調整', reading: 'ちょうせい', romaji: 'chousei', meaning: 'Adjustment/Coordination', example: 'スケジュールの調整が必要です。' },
      { kanji: '合意', reading: 'ごうい', romaji: 'gouii', meaning: 'Agreement/Consensus', example: '仕様について合意を得ました。' },
      { kanji: '懸念点', reading: 'けねんてん', romaji: 'kenenten', meaning: 'Concern/Point of worry', example: 'いくつかの懸念点があります。' },
      { kanji: '進捗管理', reading: 'しんちょくかんり', romaji: 'shinchoku kanri', meaning: 'Progress management', example: 'オフショア側の進捗管理を行います。' }
    ],
    dialogue: [
      { speaker: 'BrSE', japanese: 'この仕様について、認識合わせをさせてください。', meaning: 'Let\'s align our understanding of this specification.' },
      { speaker: 'Client', japanese: 'はい。オフショアチームの方で何か懸念点はありますか？', meaning: 'Sure. Are there any concerns from the offshore team?' },
      { speaker: 'BrSE', japanese: '実装の難易度について、認識に齟齬がないか確認中です。', meaning: 'We are currently checking if there are any discrepancies in our understanding of the implementation difficulty.' }
    ]
  }
];
