import { Lesson } from '../../types';

export const NETWORK_INFRA_LESSONS: Lesson[] = [
  {
    id: 'net-1',
    slug: 'network-protocols-and-ip',
    title: 'Network Protocols & IP',
    category: 'Network',
    difficulty: 'Beginner',
    description: 'Basic networking terms like IP addresses, DNS, and HTTP.',
    isFree: true,
    learningObjective: 'Understand basic networking concepts in Japanese.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '通信', reading: 'つうしん', romaji: 'tsuushin', meaning: 'Communication', example: '通信プロトコルを確認します。' },
      { kanji: '接続', reading: 'せつぞく', romaji: 'setsuzoku', meaning: 'Connection', example: 'サーバーに接続できません。' },
      { kanji: '帯域', reading: 'たいいき', romaji: 'taiiki', meaning: 'Bandwidth', example: '帯域幅を制限します。' },
      { kanji: '遅延', reading: 'ちえん', romaji: 'chien', meaning: 'Latency', example: 'ネットワークの遅延が発生しています。' },
      { kanji: '経路', reading: 'けいろ', romaji: 'keiro', meaning: 'Route', example: 'ルーティングの設定を確認してください。' },
      { kanji: '階層', reading: 'かいそう', romaji: 'kaisou', meaning: 'Layer', example: 'OSI参照モデルの第7階層です。' },
      { kanji: '暗号化', reading: 'あんごうか', romaji: 'angouka', meaning: 'Encryption', example: 'SSLで通信を暗号化します。' },
      { kanji: '認証', reading: 'にんしょう', romaji: 'ninshou', meaning: 'Authentication', example: 'ユーザー認証が必要です。' },
      { kanji: '許可', reading: 'きょか', romaji: 'kyoka', meaning: 'Permission', example: 'アクセスを許可します。' },
      { kanji: '遮断', reading: 'しゃだん', romaji: 'shadan', meaning: 'Block/Cut off', example: '不正なアクセスを遮断します。' }
    ],
    dialogue: [
      { speaker: 'Admin', japanese: 'サーバーへの接続が不安定です。', meaning: 'The connection to the server is unstable.' },
      { speaker: 'Engineer', japanese: 'ネットワークの遅延が原因かもしれません。経路を確認します。', meaning: 'Network latency might be the cause. I\'ll check the route.' },
      { speaker: 'Admin', japanese: 'ファイアウォールで遮断されていないかも見てください。', meaning: 'Please also check if it\'s not being blocked by the firewall.' }
    ]
  },
  {
    id: 'infra-1',
    slug: 'server-setup-and-maintenance',
    title: 'Server Setup & Maintenance',
    category: 'Infrastructure / DevOps',
    difficulty: 'Intermediate',
    description: 'Discussing server configuration, OS, and hardware.',
    isFree: true,
    learningObjective: 'Learn to talk about server infrastructure.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '構築', reading: 'こうちく', romaji: 'kouchiku', meaning: 'Construction/Setup', example: 'サーバー環境を構築します。' },
      { kanji: '運用', reading: 'うんよう', romaji: 'unyou', meaning: 'Operation', example: 'システムの運用保守を担当します。' },
      { kanji: '監視', reading: 'かんし', romaji: 'kanshi', meaning: 'Monitoring', example: 'リソースの使用率を監視します。' },
      { kanji: '冗長化', reading: 'じょうちょうか', romaji: 'jouchouka', meaning: 'Redundancy', example: 'サーバーを冗長化して可用性を高めます。' },
      { kanji: '負荷分散', reading: 'ふかぶんさん', romaji: 'fukabunsan', meaning: 'Load balancing', example: 'ロードバランサーで負荷分散を行います。' },
      { kanji: '仮想化', reading: 'かそうか', romaji: 'kasouka', meaning: 'Virtualization', example: '仮想サーバーを立ち上げます。' },
      { kanji: '移行', reading: 'いこう', romaji: 'ikou', meaning: 'Migration', example: 'クラウドへの移行を計画しています。' },
      { kanji: '復旧', reading: 'ふっきゅう', romaji: 'fukkyuu', meaning: 'Recovery', example: '障害からシステムを復旧させます。' },
      { kanji: 'バックアップ', reading: 'ばっくあっぷ', romaji: 'bakkuappu', meaning: 'Backup', example: '定期的にバックアップを取ります。' },
      { kanji: '容量', reading: 'ようりょう', romaji: 'youryou', meaning: 'Capacity', example: 'ディスク容量が不足しています。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: 'サーバーの負荷が高まっています。', meaning: 'The server load is increasing.' },
      { speaker: 'Infra', japanese: '負荷分散の設定を確認し、必要ならインスタンスを追加します。', meaning: 'I\'ll check the load balancing settings and add instances if necessary.' },
      { speaker: 'Lead', japanese: '冗長化構成になっているので、サービス停止は避けられそうですね。', meaning: 'Since it\'s a redundant configuration, we should be able to avoid service downtime.' }
    ]
  }
];
