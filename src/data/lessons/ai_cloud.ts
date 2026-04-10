import { Lesson } from '../../types';

export const AI_CLOUD_LESSONS: Lesson[] = [
  {
    id: 'ai-1',
    slug: 'machine-learning-basics',
    title: 'Machine Learning Basics',
    category: 'AI / Machine Learning',
    difficulty: 'Intermediate',
    description: 'Discussing models, training, and inference.',
    isFree: true,
    learningObjective: 'Understand basic AI and ML terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '学習', reading: 'がくしゅう', romaji: 'gakushuu', meaning: 'Training/Learning', example: 'モデルの学習を行います。' },
      { kanji: '推論', reading: 'すいろん', romaji: 'suiron', meaning: 'Inference', example: '推論の精度を向上させます。' },
      { kanji: '教師データ', reading: 'きょうしでーた', romaji: 'kyoushi deeta', meaning: 'Training data', example: '質の高い教師データを集めます。' },
      { kanji: '精度', reading: 'せいど', romaji: 'seido', meaning: 'Accuracy/Precision', example: '予測の精度を確認してください。' },
      { kanji: '過学習', reading: 'かがくしゅう', romaji: 'kagakushuu', meaning: 'Overfitting', example: '過学習を防ぐための対策を立てます。' },
      { kanji: '特徴量', reading: 'とくちょうりょう', romaji: 'tokuchouryou', meaning: 'Feature', example: '特徴量の選定が重要です。' },
      { kanji: '分類', reading: 'ぶんるい', romaji: 'bunrui', meaning: 'Classification', example: '画像を自動で分類します。' },
      { kanji: '回帰', reading: 'かいき', romaji: 'kaiki', meaning: 'Regression', example: '線形回帰モデルを使用します。' },
      { kanji: '強化学習', reading: 'きょうかがくしゅう', romaji: 'kyouka gakushuu', meaning: 'Reinforcement learning', example: '強化学習のアルゴリズムを実装します。' },
      { kanji: '深層学習', reading: 'しんそうがくしゅう', romaji: 'shinsou gakushuu', meaning: 'Deep learning', example: '深層学習で複雑なパターンを認識します。' }
    ],
    dialogue: [
      { speaker: 'Data Scientist', japanese: 'モデルの精度が上がりません。', meaning: 'The model accuracy is not improving.' },
      { speaker: 'Engineer', japanese: '教師データの不足か、過学習が起きている可能性がありますね。', meaning: 'It\'s possible that there\'s a lack of training data or overfitting is occurring.' },
      { speaker: 'Data Scientist', japanese: '特徴量を見直して、もう一度学習させてみます。', meaning: 'I\'ll review the features and try training it again.' }
    ]
  },
  {
    id: 'cloud-1',
    slug: 'cloud-computing-and-aws',
    title: 'Cloud Computing & AWS',
    category: 'Cloud / AWS / Azure',
    difficulty: 'Intermediate',
    description: 'Talking about cloud services, instances, and storage.',
    isFree: true,
    learningObjective: 'Learn to discuss cloud infrastructure.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '可用性', reading: 'かようせい', romaji: 'kayousei', meaning: 'Availability', example: '高い可用性を維持します。' },
      { kanji: '拡張性', reading: 'かくちょうせい', romaji: 'kakuchousei', meaning: 'Scalability', example: 'システムの拡張性を考慮します。' },
      { kanji: '冗長化', reading: 'じょうちょうか', romaji: 'jouchouka', meaning: 'Redundancy', example: 'マルチAZ構成で冗長化します。' },
      { kanji: '弾力性', reading: 'だんりょくせい', romaji: 'danryokusei', meaning: 'Elasticity', example: 'オートスケーリングで弾力性を持たせます。' },
      { kanji: '従量課金', reading: 'じゅうりょうかきん', romaji: 'juuryou kakin', meaning: 'Pay-as-you-go', example: 'クラウドは従量課金制です。' },
      { kanji: '管理画面', reading: 'かんりがめん', romaji: 'kanri gamen', meaning: 'Management console', example: 'AWSの管理画面で設定を変更します。' },
      { kanji: '領域', reading: 'りょういき', romaji: 'ryouiki', meaning: 'Region/Area', example: '東京リージョンを使用します。' },
      { kanji: '配信', reading: 'はいしん', romaji: 'haishin', meaning: 'Delivery/Distribution', example: 'CDNでコンテンツを配信します。' },
      { kanji: '保存', reading: 'ほぞん', romaji: 'hozon', meaning: 'Storage/Save', example: 'S3にファイルを保存します。' },
      { kanji: '連携', reading: 'れんけい', romaji: 'renkei', meaning: 'Integration', example: '外部サービスと連携させます。' }
    ],
    dialogue: [
      { speaker: 'Architect', japanese: 'このシステム、可用性を高めるにはどうすればいいですか？', meaning: 'How can we increase the availability of this system?' },
      { speaker: 'Cloud Engineer', japanese: 'マルチAZ構成にして、データベースを冗長化するのが一般的です。', meaning: 'It\'s common to use a multi-AZ configuration and make the database redundant.' },
      { speaker: 'Architect', japanese: 'コストも考慮して、従量課金の範囲内で調整しましょう。', meaning: 'Let\'s also consider the cost and adjust it within the pay-as-you-go range.' }
    ]
  }
];
