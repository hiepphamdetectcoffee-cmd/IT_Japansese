import { Lesson } from '../../types';

export const EXTRA_LESSONS_5: Lesson[] = [
  {
    id: 'devops-1',
    slug: 'ci-cd-pipelines-and-automation',
    title: 'CI/CD Pipelines & Automation',
    category: 'Infrastructure / DevOps',
    difficulty: 'Intermediate',
    description: 'Discussing automated builds, tests, and deployments.',
    isFree: true,
    learningObjective: 'Master CI/CD terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '継続的', reading: 'けいぞくてき', romaji: 'keizokuteki', meaning: 'Continuous', example: '継続的インテグレーションを導入します。' },
      { kanji: '自動', reading: 'じどう', romaji: 'jidou', meaning: 'Automatic', example: 'ビルドとテストを自動化します。' },
      { kanji: '展開', reading: 'てんかい', romaji: 'tenkai', meaning: 'Deployment', example: '本番環境にデプロイします。' },
      { kanji: '監視', reading: 'かんし', romaji: 'kanshi', meaning: 'Monitoring', example: 'パイプラインの状態を監視します。' },
      { kanji: '短縮', reading: 'たんしゅく', romaji: 'tanshuku', meaning: 'Shortening/Reduction', example: 'リリースサイクルを短縮します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'デプロイ作業に時間がかかりすぎています。', meaning: 'The deployment work is taking too much time.' },
      { speaker: 'DevOps', japanese: 'CI/CDパイプラインを構築して、自動化しましょう。', meaning: 'Let\'s build a CI/CD pipeline and automate it.' }
    ]
  },
  {
    id: 'prog-9',
    slug: 'code-review-best-practices',
    title: 'Code Review Best Practices',
    category: 'Programming',
    difficulty: 'Intermediate',
    description: 'How to give and receive constructive code reviews.',
    isFree: true,
    learningObjective: 'Learn to discuss code quality in reviews.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '指摘', reading: 'してき', romaji: 'shiteki', meaning: 'Indication/Comment', example: 'コードレビューでいくつかの指摘をしました。' },
      { kanji: '承認', reading: 'しょうにん', romaji: 'shounin', meaning: 'Approval/Approve', example: '修正を確認したので、承認します。' },
      { kanji: '改善', reading: 'かいぜん', romaji: 'kaizen', meaning: 'Improvement', example: '可読性を高めるための改善を提案します。' },
      { kanji: '一貫性', reading: 'いっかんせい', romaji: 'ikkansei', meaning: 'Consistency', example: 'コーディング規約との一貫性を確認してください。' },
      { kanji: '意図', reading: 'いと', romaji: 'ito', meaning: 'Intention', example: 'この実装の意図を教えてください。' }
    ],
    dialogue: [
      { speaker: 'Reviewer', japanese: 'この変数の命名、もう少し具体的にできませんか？', meaning: 'Can this variable naming be a bit more specific?' },
      { speaker: 'Author', japanese: 'ご指摘ありがとうございます。修正して再送します。', meaning: 'Thank you for the comment. I\'ll fix it and resend.' }
    ]
  },
  {
    id: 'test-8',
    slug: 'integration-testing-strategies',
    title: 'Integration Testing Strategies',
    category: 'Testing / QA',
    difficulty: 'Intermediate',
    description: 'Discussing how different modules work together.',
    isFree: true,
    learningObjective: 'Master integration testing terminology.',
    aiPracticeTopicKey: 'tester',
    vocabulary: [
      { kanji: '連携', reading: 'れんけい', romaji: 'renkei', meaning: 'Coordination/Link', example: 'モジュール間の連携を確認します。' },
      { kanji: '界面', reading: 'かいめん', romaji: 'kaimen', meaning: 'Interface', example: 'インターフェースの整合性をテストします。' },
      { kanji: '結合', reading: 'けつごう', romaji: 'ketsugou', meaning: 'Integration/Join', example: '結合テストのシナリオを作成してください。' },
      { kanji: '不備', reading: 'ふび', romaji: 'fubi', meaning: 'Deficiency/Flaw', example: 'データの受け渡しに不備が見つかりました。' },
      { kanji: '網羅', reading: 'もうら', romaji: 'moura', meaning: 'Coverage', example: '主要なパスを網羅します。' }
    ],
    dialogue: [
      { speaker: 'QA', japanese: '結合テストで、APIのレスポンス形式が合っていないことが分かりました。', meaning: 'In the integration test, we found that the API response format doesn\'t match.' },
      { speaker: 'Dev', japanese: 'インターフェースの定義に誤りがあったようです。すぐに修正します。', meaning: 'It seems there was an error in the interface definition. I\'ll fix it immediately.' }
    ]
  },
  {
    id: 'db-6',
    slug: 'database-backup-and-recovery',
    title: 'Database Backup & Recovery',
    category: 'Database',
    difficulty: 'Intermediate',
    description: 'Talking about RPO, RTO, and disaster recovery.',
    isFree: true,
    learningObjective: 'Learn to discuss database safety measures.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '保存', reading: 'ほぞん', romaji: 'hozon', meaning: 'Save/Storage', example: '毎日バックアップを保存します。' },
      { kanji: '復旧', reading: 'ふっきゅう', romaji: 'fukkyuu', meaning: 'Recovery', example: '障害発生時にデータを復旧させます。' },
      { kanji: '地点', reading: 'ちてん', romaji: 'chiten', meaning: 'Point', example: '特定の時点までデータを戻します。' },
      { kanji: '損失', reading: 'そんしつ', romaji: 'sonshitsu', meaning: 'Loss', example: 'データの損失を最小限に抑えます。' },
      { kanji: '検証', reading: 'けんしょう', romaji: 'kenshou', meaning: 'Verification', example: 'バックアップが正常に取れているか検証します。' }
    ],
    dialogue: [
      { speaker: 'Manager', japanese: '万が一のデータ消失に備えて、バックアップ体制はどうなっていますか？', meaning: 'In case of data loss, what is the backup system like?' },
      { speaker: 'DBA', japanese: '1日1回のフルバックアップと、1時間ごとのログ保存を行っています。', meaning: 'We perform a full backup once a day and save logs every hour.' }
    ]
  },
  {
    id: 'net-5',
    slug: 'vpn-and-secure-remote-access',
    title: 'VPN & Secure Remote Access',
    category: 'Network',
    difficulty: 'Beginner',
    description: 'Discussing secure connections for remote work.',
    isFree: true,
    learningObjective: 'Understand basic remote access terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '仮想', reading: 'かそう', romaji: 'kasou', meaning: 'Virtual', example: '仮想専用線（VPN）を使用します。' },
      { kanji: '暗号', reading: 'あんごう', romaji: 'angou', meaning: 'Encryption', example: '通信を暗号化して安全性を高めます。' },
      { kanji: '接続', reading: 'せつぞく', romaji: 'setsuzoku', meaning: 'Connection', example: '社内ネットワークに接続します。' },
      { kanji: '認証', reading: 'にんしょう', romaji: 'ninshou', meaning: 'Authentication', example: 'VPN接続には二要素認証が必要です。' },
      { kanji: '許可', reading: 'きょか', romaji: 'kyoka', meaning: 'Permission', example: 'リモートアクセスを許可します。' }
    ],
    dialogue: [
      { speaker: 'Staff', japanese: '自宅から社内システムにアクセスできません。', meaning: 'I can\'t access the internal system from home.' },
      { speaker: 'IT Support', japanese: 'VPNに接続していますか？認証の状態を確認してください。', meaning: 'Are you connected to the VPN? Please check the authentication status.' }
    ]
  },
  {
    id: 'infra-5',
    slug: 'monitoring-and-alerting-systems',
    title: 'Monitoring & Alerting Systems',
    category: 'Infrastructure / DevOps',
    difficulty: 'Intermediate',
    description: 'Talking about Prometheus, Grafana, and incident response.',
    isFree: true,
    learningObjective: 'Master monitoring terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '監視', reading: 'かんし', romaji: 'kanshi', meaning: 'Monitoring', example: 'サーバーの死活監視を行います。' },
      { kanji: '閾値', reading: 'いきち', romaji: 'ikichi', meaning: 'Threshold', example: 'CPU使用率の閾値を設定します。' },
      { kanji: '通知', reading: 'つうち', romaji: 'tsuuchi', meaning: 'Notification/Alert', example: '異常を検知したらSlackに通知します。' },
      { kanji: '可視化', reading: 'かしか', romaji: 'kashika', meaning: 'Visualization', example: 'メトリクスをダッシュボードで可視化します。' },
      { kanji: '対応', reading: 'たいおう', romaji: 'taiou', meaning: 'Response', example: 'アラートが発生したらすぐに対応してください。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: '最近、アラートが頻繁に飛んできますね。', meaning: 'Alerts have been flying in frequently lately.' },
      { speaker: 'Infra', japanese: '閾値が低すぎるのかもしれません。設定を見直します。', meaning: 'The threshold might be too low. I\'ll review the settings.' }
    ]
  },
  {
    id: 'sec-6',
    slug: 'cross-site-scripting-xss-prevention',
    title: 'Cross-Site Scripting (XSS) Prevention',
    category: 'Security',
    difficulty: 'Intermediate',
    description: 'How to prevent malicious scripts from running in the browser.',
    isFree: true,
    learningObjective: 'Learn to discuss XSS countermeasures.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '埋め込み', reading: 'うめこみ', romaji: 'umekomi', meaning: 'Embedding', example: '悪意のあるスクリプトの埋め込みを防ぎます。' },
      { kanji: '無害化', reading: 'むがいか', romaji: 'mugaika', meaning: 'Sanitization/Escaping', example: '出力時にHTMLエスケープを行います。' },
      { kanji: '検証', reading: 'けんしょう', romaji: 'kenshou', meaning: 'Validation', example: '入力内容を厳格に検証します。' },
      { kanji: '実行', reading: 'じっこう', romaji: 'jikkou', meaning: 'Execution', example: 'ブラウザ上でのスクリプト実行を制限します。' },
      { kanji: '保護', reading: 'ほご', romaji: 'hogo', meaning: 'Protection', example: 'Content Security Policy (CSP)で保護を強化します。' }
    ],
    dialogue: [
      { speaker: 'Security', japanese: 'この掲示板、XSSの脆弱性がありますよ。', meaning: 'This bulletin board has an XSS vulnerability.' },
      { speaker: 'Dev', japanese: '本当ですね。ユーザーの投稿内容をエスケープせずに表示していました。', meaning: 'You\'re right. I was displaying user posts without escaping them.' }
    ]
  },
  {
    id: 'cld-6',
    slug: 'cloud-native-application-design',
    title: 'Cloud-Native Application Design',
    category: 'Cloud / AWS / Azure',
    difficulty: 'Advanced',
    description: 'Discussing the 12-factor app and cloud-optimized patterns.',
    isFree: true,
    learningObjective: 'Understand cloud-native concepts.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '最適', reading: 'さいてき', romaji: 'saiteki', meaning: 'Optimal/Optimized', example: 'クラウドに最適化された設計を行います。' },
      { kanji: '疎結合', reading: 'そけつごう', romaji: 'soketsugou', meaning: 'Loose coupling', example: 'コンポーネント間を疎結合にします。' },
      { kanji: '状態', reading: 'じょうたい', romaji: 'joutai', meaning: 'State/Stateless', example: 'ステートレスな設計を推奨します。' },
      { kanji: '拡張', reading: 'かくちょう', romaji: 'kakuchou', meaning: 'Expansion/Scaling', example: '水平拡張が容易な構成にします。' },
      { kanji: '自動', reading: 'じどう', romaji: 'jidou', meaning: 'Automatic', example: '自動復旧機能を備えています。' }
    ],
    dialogue: [
      { speaker: 'Architect', japanese: 'クラウドネイティブなアプリにするために、ステートレスな設計にしましょう。', meaning: 'To make it a cloud-native app, let\'s go with a stateless design.' },
      { speaker: 'Dev', japanese: 'はい。セッション情報は外部のキャッシュサーバーで管理するようにします。', meaning: 'Yes. We\'ll manage session information on an external cache server.' }
    ]
  },
  {
    id: 'ux-6',
    slug: 'typography-and-readability',
    title: 'Typography & Readability',
    category: 'UI/UX / Frontend',
    difficulty: 'Beginner',
    description: 'Discussing font choices, line height, and text layout.',
    isFree: true,
    learningObjective: 'Learn to talk about text design.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '書体', reading: 'しょたい', romaji: 'shotai', meaning: 'Typeface/Font', example: '読みやすい書体を選びます。' },
      { kanji: '行間', reading: 'ぎょうかん', romaji: 'gyoukan', meaning: 'Line spacing/Leading', example: '行間を広げて可読性を高めます。' },
      { kanji: '余白', reading: 'よはく', romaji: 'yohaku', meaning: 'Margin/Whitespace', example: '適切な余白を設定してください。' },
      { kanji: '強調', reading: 'きょうちょう', romaji: 'kyouchou', meaning: 'Emphasis', example: '重要な部分は太字で強調します。' },
      { kanji: '配置', reading: 'はいち', romaji: 'haichi', meaning: 'Alignment/Layout', example: 'テキストを左揃えにします。' }
    ],
    dialogue: [
      { speaker: 'Designer', japanese: 'この文章、少し読みにくい気がします。', meaning: 'I feel this text is a bit difficult to read.' },
      { speaker: 'Lead', japanese: '行間をもう少し空けて、フォントサイズを大きくしてみましょう。', meaning: 'Let\'s try adding a bit more line spacing and increasing the font size.' }
    ]
  },
  {
    id: 'api-6',
    slug: 'api-versioning-strategies',
    title: 'API Versioning Strategies',
    category: 'Backend / API',
    difficulty: 'Intermediate',
    description: 'How to manage changes to APIs without breaking clients.',
    isFree: true,
    learningObjective: 'Learn to discuss API versioning.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '互換', reading: 'ごかん', romaji: 'gokan', meaning: 'Compatibility', example: '後方互換性を維持します。' },
      { kanji: '更新', reading: 'こうしん', romaji: 'koushin', meaning: 'Update/Version up', example: 'APIのバージョンを上げます。' },
      { kanji: '移行', reading: 'いこう', romaji: 'ikou', meaning: 'Migration', example: '新しいバージョンへの移行を促します。' },
      { kanji: '廃止', reading: 'はいし', romaji: 'haishi', meaning: 'Abolition/Deprecation', example: '古いバージョンを廃止します。' },
      { kanji: '指定', reading: 'してい', romaji: 'shitei', meaning: 'Specification/Designation', example: 'URLでバージョンを指定します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'APIに破壊的な変更を加えたいのですが。', meaning: 'I want to make a breaking change to the API.' },
      { speaker: 'Lead', japanese: 'それなら、新しいバージョン（v2）を切り出して並行稼働させましょう。', meaning: 'In that case, let\'s create a new version (v2) and run it in parallel.' }
    ]
  },
  {
    id: 'mob-6',
    slug: 'mobile-app-analytics-and-tracking',
    title: 'Mobile App Analytics & Tracking',
    category: 'Mobile Development',
    difficulty: 'Intermediate',
    description: 'Discussing user behavior tracking and event logging.',
    isFree: true,
    learningObjective: 'Master mobile analytics terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '計測', reading: 'けいそく', romaji: 'keisoku', meaning: 'Measurement', example: 'ユーザーの行動を計測します。' },
      { kanji: '分析', reading: 'ぶんせき', romaji: 'bunseki', meaning: 'Analysis', example: '離脱率を分析して改善に繋げます。' },
      { kanji: '特定', reading: 'とくてい', romaji: 'tokutei', meaning: 'Identification', example: 'よく使われている機能を特定します。' },
      { kanji: '改善', reading: 'かいぜん', romaji: 'kaizen', meaning: 'Improvement', example: 'データに基づいてUIを改善します。' },
      { kanji: '目標', reading: 'もくひょう', romaji: 'mokuhyou', meaning: 'Goal/Target', example: 'コンバージョン率の目標を設定します。' }
    ],
    dialogue: [
      { speaker: 'PM', japanese: '新機能の利用状況はどうですか？', meaning: 'How is the usage of the new function?' },
      { speaker: 'Dev', japanese: 'アナリティクスで確認したところ、想定より低いようです。', meaning: 'When I checked with analytics, it seems lower than expected.' }
    ]
  },
  {
    id: 'ml-6',
    slug: 'recommender-systems-basics',
    title: 'Recommender Systems Basics',
    category: 'AI / Machine Learning',
    difficulty: 'Intermediate',
    description: 'Talking about collaborative filtering and personalization.',
    isFree: true,
    learningObjective: 'Learn to discuss recommendation algorithms.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '推薦', reading: 'すいせん', romaji: 'suisen', meaning: 'Recommendation', example: 'ユーザーに最適な商品を推薦します。' },
      { kanji: '傾向', reading: 'けいこう', romaji: 'keikou', meaning: 'Tendency/Trend', example: '購入傾向を分析します。' },
      { kanji: '類似', reading: 'るいじ', romaji: 'ruiji', meaning: 'Similarity', example: '類似したユーザーの行動を参考にします。' },
      { kanji: '協調', reading: 'きょうちょう', romaji: 'kyouchou', meaning: 'Collaboration/Collaborative', example: '協調フィルタリングを使用します。' },
      { kanji: '個人', reading: 'こじん', romaji: 'kojin', meaning: 'Individual/Personal', example: 'パーソナライズされた体験を提供します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'おすすめ機能を追加したいです。', meaning: 'I want to add a recommendation function.' },
      { speaker: 'AI Expert', japanese: 'まずはユーザーの閲覧履歴から類似性を計算しましょう。', meaning: 'First, let\'s calculate similarity from the user\'s browsing history.' }
    ]
  },
  {
    id: 'scrum-6',
    slug: 'backlog-refinement-sessions',
    title: 'Backlog Refinement Sessions',
    category: 'Agile / Scrum',
    difficulty: 'Intermediate',
    description: 'How to keep the product backlog healthy and ready.',
    isFree: true,
    learningObjective: 'Learn to discuss backlog grooming.',
    aiPracticeTopicKey: 'free-2',
    vocabulary: [
      { kanji: '整理', reading: 'せいり', romaji: 'seiri', meaning: 'Refinement/Grooming', example: 'バックログの整理を行います。' },
      { kanji: '詳細', reading: 'しょうさい', romaji: 'shousai', meaning: 'Detail', example: 'ストーリーの詳細を詰めます。' },
      { kanji: '見積もり', reading: 'みつもり', romaji: 'mitsumori', meaning: 'Estimation', example: '工数の再見積もりを行います。' },
      { kanji: '優先', reading: 'ゆうせん', romaji: 'yuusen', meaning: 'Priority', example: '優先順位を最新の状態に保ちます。' },
      { kanji: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: 'Preparation/Ready', example: '次のスプリントの準備を整えます。' }
    ],
    dialogue: [
      { speaker: 'PO', japanese: 'バックログリファインメントを始めましょう。', meaning: 'Let\'s start the backlog refinement.' },
      { speaker: 'Dev', japanese: 'このストーリー、まだ要件が曖昧なので詳細を詰めたいです。', meaning: 'The requirements for this story are still ambiguous, so I want to flesh out the details.' }
    ]
  }
];
