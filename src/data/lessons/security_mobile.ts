import { Lesson } from '../../types';

export const SECURITY_MOBILE_LESSONS: Lesson[] = [
  {
    id: 'sec-1',
    slug: 'network-security-and-firewalls',
    title: 'Network Security & Firewalls',
    category: 'Security',
    difficulty: 'Intermediate',
    description: 'Discussing protection against unauthorized access.',
    isFree: true,
    learningObjective: 'Learn to talk about network security measures.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '防御', reading: 'ぼうぎょ', romaji: 'bougyo', meaning: 'Defense', example: '外部からの攻撃を防御します。' },
      { kanji: '検知', reading: 'けんち', romaji: 'kenchi', meaning: 'Detection', example: '不正侵入を検知します。' },
      { kanji: '遮断', reading: 'しゃだん', romaji: 'shadan', meaning: 'Block', example: '不審なトラフィックを遮断します。' },
      { kanji: '脆弱性', reading: 'ぜいじゃくせい', romaji: 'zeijakusei', meaning: 'Vulnerability', example: '脆弱性対策を講じます。' },
      { kanji: '暗号化', reading: 'あんごうか', romaji: 'angouka', meaning: 'Encryption', example: '通信を暗号化してください。' },
      { kanji: '証明書', reading: 'しょうめいしょ', romaji: 'shoumeisho', meaning: 'Certificate', example: 'SSL証明書を更新します。' },
      { kanji: '認証', reading: 'にんしょう', romaji: 'ninshou', meaning: 'Authentication', example: '二要素認証を導入します。' },
      { kanji: '認可', reading: 'にんか', romaji: 'ninka', meaning: 'Authorization', example: '適切な認可制御が必要です。' },
      { kanji: '監査', reading: 'かんさ', romaji: 'kansa', meaning: 'Audit', example: 'セキュリティ監査を実施します。' },
      { kanji: '漏洩', reading: 'ろうえい', romaji: 'rouei', meaning: 'Leakage', example: '情報の漏洩を防止します。' }
    ],
    dialogue: [
      { speaker: 'Admin', japanese: '不正アクセスの試行を検知しました。', meaning: 'We detected an attempt of unauthorized access.' },
      { speaker: 'Security', japanese: '該当するIPアドレスを直ちに遮断してください。', meaning: 'Please block the corresponding IP address immediately.' },
      { speaker: 'Admin', japanese: '承知しました。脆弱性がないか再点検します。', meaning: 'Understood. I\'ll re-check for any vulnerabilities.' }
    ]
  },
  {
    id: 'mob-1',
    slug: 'mobile-app-development-basics',
    title: 'Mobile App Development Basics',
    category: 'Mobile Development',
    difficulty: 'Beginner',
    description: 'Terms for iOS, Android, and cross-platform development.',
    isFree: true,
    learningObjective: 'Master mobile development terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '端末', reading: 'たんまつ', romaji: 'tanmatsu', meaning: 'Device/Terminal', example: '実機端末でテストを行います。' },
      { kanji: '配信', reading: 'はいしん', romaji: 'haishin', meaning: 'Distribution/Release', example: 'アプリをストアに配信します。' },
      { kanji: '審査', reading: 'しんさ', romaji: 'shinsa', meaning: 'Review', example: 'アップルの審査を待ちます。' },
      { kanji: '通知', reading: 'つうち', romaji: 'tsuuchi', meaning: 'Notification', example: 'プッシュ通知を実装します。' },
      { kanji: '位置情報', reading: 'いちじょうほう', romaji: 'ichijouhou', meaning: 'Location information', example: 'GPSで位置情報を取得します。' },
      { kanji: '解像度', reading: 'かいぞうど', romaji: 'kaizoudo', meaning: 'Resolution', example: '画面の解像度を考慮します。' },
      { kanji: '回転', reading: 'かいてん', romaji: 'kaiten', meaning: 'Rotation', example: '画面の回転に対応します。' },
      { kanji: '電池', reading: 'でんち', romaji: 'denchi', meaning: 'Battery', example: '電池の消耗を抑えます。' },
      { kanji: 'オフライン', reading: 'おふらいん', romaji: 'ofurain', meaning: 'Offline', example: 'オフラインでも動作するようにします。' },
      { kanji: '同期', reading: 'どうき', romaji: 'douki', meaning: 'Sync', example: 'サーバーとデータを同期します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: '新しいバージョンのアプリを配信しました。', meaning: 'I have distributed the new version of the app.' },
      { speaker: 'QA', japanese: '実機端末での動作確認は終わっていますか？', meaning: 'Is the operation check on the actual device finished?' },
      { speaker: 'Dev', japanese: 'はい。プッシュ通知と位置情報の取得も問題ありません。', meaning: 'Yes. There are no problems with push notifications and location information acquisition.' }
    ]
  }
];
