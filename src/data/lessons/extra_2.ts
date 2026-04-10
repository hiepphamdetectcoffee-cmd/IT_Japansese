import { Lesson } from '../../types';

export const EXTRA_LESSONS_2: Lesson[] = [
  {
    id: 'prog-6',
    slug: 'version-control-git',
    title: 'Version Control (Git)',
    category: 'Programming',
    difficulty: 'Beginner',
    description: 'Discussing commits, branches, and merge requests.',
    isFree: true,
    learningObjective: 'Master Git terminology in Japanese.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '履歴', reading: 'りれき', romaji: 'rireki', meaning: 'History', example: 'コミット履歴を確認します。' },
      { kanji: '分岐', reading: 'ぶんき', romaji: 'bunki', meaning: 'Branch', example: '新しいブランチを切ります。' },
      { kanji: '統合', reading: 'とうごう', romaji: 'tougou', meaning: 'Merge/Integration', example: 'コードをマージします。' },
      { kanji: '衝突', reading: 'しょうとつ', romaji: 'shoutotsu', meaning: 'Conflict', example: 'コンフリクトを解消してください。' },
      { kanji: '反映', reading: 'はんえい', romaji: 'han\'ei', meaning: 'Reflection/Apply', example: '変更をリモートに反映させます。' }
    ],
    dialogue: [
      { speaker: 'Dev A', japanese: 'プルリクエストを作成しました。レビューをお願いします。', meaning: 'I created a pull request. Please review it.' },
      { speaker: 'Dev B', japanese: '了解です。コンフリクトは起きていませんか？', meaning: 'Roger. Are there any conflicts?' }
    ]
  },
  {
    id: 'test-6',
    slug: 'unit-testing-frameworks',
    title: 'Unit Testing Frameworks',
    category: 'Testing / QA',
    difficulty: 'Intermediate',
    description: 'Talking about Jest, JUnit, and test suites.',
    isFree: true,
    learningObjective: 'Learn to talk about unit testing tools.',
    aiPracticeTopicKey: 'tester',
    vocabulary: [
      { kanji: '検証', reading: 'けんしょう', romaji: 'kenshou', meaning: 'Assertion/Verification', example: '期待値と一致するか検証します。' },
      { kanji: '模擬', reading: 'もぎ', romaji: 'mogi', meaning: 'Mock', example: '外部APIをモック化します。' },
      { kanji: '網羅', reading: 'もうら', romaji: 'moura', meaning: 'Coverage', example: 'テストの網羅性を高めます。' },
      { kanji: '実行', reading: 'じっこう', romaji: 'jikkou', meaning: 'Execution', example: 'テストスイートを実行します。' },
      { kanji: '結果', reading: 'けっか', romaji: 'kekka', meaning: 'Result', example: 'テスト結果をレポートにまとめます。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: 'この関数のテスト、モックを使っていますか？', meaning: 'Are you using mocks for this function\'s test?' },
      { speaker: 'Dev', japanese: 'はい、データベースへの接続をモックにしています。', meaning: 'Yes, I am mocking the connection to the database.' }
    ]
  },
  {
    id: 'db-4',
    slug: 'database-migration-and-seeding',
    title: 'Database Migration & Seeding',
    category: 'Database',
    difficulty: 'Intermediate',
    description: 'Discussing schema changes and initial data setup.',
    isFree: true,
    learningObjective: 'Master terms for database management.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '移行', reading: 'いこう', romaji: 'ikou', meaning: 'Migration', example: 'マイグレーションファイルを作成します。' },
      { kanji: '初期', reading: 'しょき', romaji: 'shoki', meaning: 'Initial', example: '初期データを投入します。' },
      { kanji: '反映', reading: 'はんえい', romaji: 'han\'ei', meaning: 'Reflection/Apply', example: 'スキーマの変更を反映させます。' },
      { kanji: '戻す', reading: 'もどす', romaji: 'modosu', meaning: 'Rollback', example: 'マイグレーションをロールバックします。' },
      { kanji: '整合', reading: 'せいごう', romaji: 'seigou', meaning: 'Consistency/Alignment', example: 'データの整合性を確認してください。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: '新しいカラムを追加したので、マイグレーションを実行してください。', meaning: 'I added a new column, so please run the migration.' },
      { speaker: 'Lead', japanese: '了解です。シードデータも更新されていますか？', meaning: 'Roger. Is the seed data also updated?' }
    ]
  },
  {
    id: 'net-3',
    slug: 'api-security-and-cors',
    title: 'API Security & CORS',
    category: 'Network',
    difficulty: 'Advanced',
    description: 'Talking about cross-origin requests and API protection.',
    isFree: true,
    learningObjective: 'Learn to discuss web security concepts.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '許可', reading: 'きょか', romaji: 'kyoka', meaning: 'Permission/Allow', example: '特定のドメインからのアクセスを許可します。' },
      { kanji: '制限', reading: 'せいげん', romaji: 'seigen', meaning: 'Restriction', example: 'APIの利用回数を制限します。' },
      { kanji: '拒否', reading: 'きょひ', romaji: 'kyohi', meaning: 'Deny/Reject', example: '不正なリクエストを拒否します。' },
      { kanji: '設定', reading: 'せってい', romaji: 'settei', meaning: 'Configuration', example: 'CORSの設定を確認してください。' },
      { kanji: '保護', reading: 'ほご', romaji: 'hogo', meaning: 'Protection', example: 'APIエンドポイントを保護します。' }
    ],
    dialogue: [
      { speaker: 'Frontend', japanese: 'CORSエラーが出て、APIを叩けません。', meaning: 'I\'m getting a CORS error and can\'t call the API.' },
      { speaker: 'Backend', japanese: '開発環境のドメインを許可リストに追加し忘れていました。', meaning: 'I forgot to add the development environment domain to the allowlist.' }
    ]
  },
  {
    id: 'infra-2',
    slug: 'containerization-with-docker',
    title: 'Containerization with Docker',
    category: 'Infrastructure / DevOps',
    difficulty: 'Intermediate',
    description: 'Discussing images, containers, and orchestration.',
    isFree: true,
    learningObjective: 'Master container-related terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '仮想', reading: 'かそう', romaji: 'kasou', meaning: 'Virtual', example: 'コンテナ仮想化技術を利用します。' },
      { kanji: '構築', reading: 'こうちく', romaji: 'kouchiku', meaning: 'Construction/Build', example: 'Dockerイメージをビルドします。' },
      { kanji: '起動', reading: 'きどう', romaji: 'kidou', meaning: 'Startup/Run', example: 'コンテナを起動してください。' },
      { kanji: '停止', reading: 'ていし', romaji: 'teishi', meaning: 'Stop', example: '不要なコンテナを停止します。' },
      { kanji: '共有', reading: 'きょうゆう', romaji: 'kyouyuu', meaning: 'Sharing', example: '開発環境をチームで共有します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: '環境構築がうまくいきません。', meaning: 'The environment setup is not going well.' },
      { speaker: 'Lead', japanese: 'Dockerを使えば、誰でも同じ環境をすぐに構築できますよ。', meaning: 'If you use Docker, anyone can build the same environment immediately.' }
    ]
  },
  {
    id: 'sec-3',
    slug: 'phishing-and-social-engineering',
    title: 'Phishing & Social Engineering',
    category: 'Security',
    difficulty: 'Beginner',
    description: 'Learning about common security threats and how to prevent them.',
    isFree: true,
    learningObjective: 'Understand basic security awareness terms.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '詐欺', reading: 'さぎ', romaji: 'sagi', meaning: 'Fraud/Scam', example: 'フィッシング詐欺に注意してください。' },
      { kanji: '偽装', reading: 'ぎそう', romaji: 'gisou', meaning: 'Disguise/Spoofing', example: 'メールの送信元が偽装されています。' },
      { kanji: '誘導', reading: 'ゆうどう', romaji: 'yuudou', meaning: 'Guidance/Leading', example: '偽のサイトに誘導されます。' },
      { kanji: '盗む', reading: 'ぬすむ', romaji: 'nusumu', meaning: 'To steal', example: '個人情報を盗まれないようにしましょう。' },
      { kanji: '警戒', reading: 'けいかい', romaji: 'keikai', meaning: 'Vigilance/Caution', example: '不審なリンクには警戒が必要です。' }
    ],
    dialogue: [
      { speaker: 'Staff', japanese: '怪しいメールが届きました。リンクをクリックしてもいいですか？', meaning: 'I received a suspicious email. Can I click the link?' },
      { speaker: 'Security', japanese: '絶対にクリックしないでください。フィッシング詐欺の可能性があります。', meaning: 'Absolutely do not click it. It could be a phishing scam.' }
    ]
  },
  {
    id: 'cld-3',
    slug: 'cloud-storage-and-cdn',
    title: 'Cloud Storage & CDN',
    category: 'Cloud / AWS / Azure',
    difficulty: 'Intermediate',
    description: 'Discussing object storage and content delivery.',
    isFree: true,
    learningObjective: 'Learn to talk about cloud data management.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '保存', reading: 'ほぞん', romaji: 'hozon', meaning: 'Storage/Save', example: '静的ファイルをクラウドに保存します。' },
      { kanji: '配信', reading: 'はいしん', romaji: 'haishin', meaning: 'Distribution/Delivery', example: '世界中にコンテンツを高速で配信します。' },
      { kanji: '公開', reading: 'こうかい', romaji: 'koukai', meaning: 'Public/Publish', example: 'バケットの公開設定を確認してください。' },
      { kanji: '制限', reading: 'せいげん', romaji: 'seigen', meaning: 'Restriction', example: 'アクセス制限をかけます。' },
      { kanji: '同期', reading: 'どうき', romaji: 'douki', meaning: 'Sync', example: 'ローカルとクラウドのデータを同期します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: '画像の読み込みが遅いです。', meaning: 'The image loading is slow.' },
      { speaker: 'Lead', japanese: 'CDNを導入して、キャッシュから配信するようにしましょう。', meaning: 'Let\'s introduce a CDN and deliver from the cache.' }
    ]
  },
  {
    id: 'ux-3',
    slug: 'user-testing-and-feedback',
    title: 'User Testing & Feedback',
    category: 'UI/UX / Frontend',
    difficulty: 'Intermediate',
    description: 'How to gather and incorporate user feedback.',
    isFree: true,
    learningObjective: 'Master terms for user research.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '調査', reading: 'ちょうさ', romaji: 'chousa', meaning: 'Investigation/Research', example: 'ユーザー調査を実施します。' },
      { kanji: '意見', reading: 'いけん', romaji: 'iken', meaning: 'Opinion/Feedback', example: 'ユーザーの意見を反映させます。' },
      { kanji: '改善', reading: 'かいぜん', romaji: 'kaizen', meaning: 'Improvement', example: 'UIの改善案を検討します。' },
      { kanji: '満足', reading: 'まんぞく', romaji: 'manzoku', meaning: 'Satisfaction', example: 'ユーザー満足度を計測します。' },
      { kanji: '課題', reading: 'かだい', romaji: 'kadai', meaning: 'Issue/Problem', example: '使い勝手の課題を特定します。' }
    ],
    dialogue: [
      { speaker: 'Designer', japanese: 'ユーザーテストの結果、ナビゲーションが分かりにくいという意見が多かったです。', meaning: 'As a result of user testing, there were many opinions that the navigation is difficult to understand.' },
      { speaker: 'PM', japanese: 'なるほど。次のスプリントで改善しましょう。', meaning: 'I see. Let\'s improve it in the next sprint.' }
    ]
  },
  {
    id: 'api-3',
    slug: 'api-documentation-with-swagger',
    title: 'API Documentation (Swagger)',
    category: 'Backend / API',
    difficulty: 'Beginner',
    description: 'Discussing API specs and documentation tools.',
    isFree: true,
    learningObjective: 'Learn to talk about API documentation.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '仕様', reading: 'しよう', romaji: 'shiyou', meaning: 'Specification', example: 'APIの仕様書を作成します。' },
      { kanji: '自動', reading: 'じどう', romaji: 'jidou', meaning: 'Automatic', example: 'ドキュメントを自動生成します。' },
      { kanji: '定義', reading: 'ていぎ', romaji: 'teigi', meaning: 'Definition', example: 'エンドポイントを定義します。' },
      { kanji: '確認', reading: 'かくにん', romaji: 'kakunin', meaning: 'Confirmation', example: 'ブラウザでAPIの動作を確認できます。' },
      { kanji: '共有', reading: 'きょうゆう', romaji: 'kyouyuu', meaning: 'Sharing', example: '最新の仕様をチームで共有します。' }
    ],
    dialogue: [
      { speaker: 'Frontend', japanese: 'APIの仕様はどこで確認できますか？', meaning: 'Where can I check the API specifications?' },
      { speaker: 'Backend', japanese: 'Swaggerで公開しているので、そちらを見てください。', meaning: 'It\'s published on Swagger, so please look there.' }
    ]
  },
  {
    id: 'mob-3',
    slug: 'app-store-submission-process',
    title: 'App Store Submission Process',
    category: 'Mobile Development',
    difficulty: 'Intermediate',
    description: 'Talking about certificates, provisioning profiles, and review.',
    isFree: true,
    learningObjective: 'Master terms for releasing mobile apps.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '申請', reading: 'しんせい', romaji: 'shinsei', meaning: 'Application/Submission', example: 'ストアにアプリを申請します。' },
      { kanji: '審査', reading: 'しんさ', romaji: 'shinsa', meaning: 'Review', example: '審査に数日かかります。' },
      { kanji: '却下', reading: 'きゃっか', romaji: 'kyakka', meaning: 'Rejection', example: 'ガイドライン違反で却下されました。' },
      { kanji: '公開', reading: 'こうかい', romaji: 'koukai', meaning: 'Release/Public', example: '審査が通れば自動で公開されます。' },
      { kanji: '証明', reading: 'しょうめい', romaji: 'shoumei', meaning: 'Certificate', example: '配布用証明書を更新します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'アプリの申請準備が整いました。', meaning: 'The preparation for the app submission is ready.' },
      { speaker: 'Manager', japanese: '審査にはどのくらい時間がかかりそうですか？', meaning: 'How long do you think the review will take?' }
    ]
  },
  {
    id: 'ml-3',
    slug: 'data-preprocessing-and-cleaning',
    title: 'Data Preprocessing & Cleaning',
    category: 'AI / Machine Learning',
    difficulty: 'Intermediate',
    description: 'Discussing data quality and preparation for ML.',
    isFree: true,
    learningObjective: 'Learn to talk about data preparation.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '前処理', reading: 'ぜんしょり', romaji: 'zenshori', meaning: 'Preprocessing', example: 'データの欠損値を補完します。' },
      { kanji: '整形', reading: 'せいけい', romaji: 'seikei', meaning: 'Formatting/Shaping', example: 'データを学習に適した形式に整形します。' },
      { kanji: '除去', reading: 'じょきょ', romaji: 'jokyo', meaning: 'Removal', example: '外れ値を除去します。' },
      { kanji: '正規化', reading: 'せいきか', romaji: 'seikika', meaning: 'Normalization', example: 'データのスケールを正規化します。' },
      { kanji: '変換', reading: 'へんかん', romaji: 'henkan', meaning: 'Transformation', example: 'カテゴリ変数を数値に変換します。' }
    ],
    dialogue: [
      { speaker: 'Data Scientist', japanese: '学習を始める前に、データの前処理が必要です。', meaning: 'Before starting training, data preprocessing is necessary.' },
      { speaker: 'Engineer', japanese: '欠損値の扱いはどうしますか？', meaning: 'How should we handle missing values?' }
    ]
  },
  {
    id: 'scrum-3',
    slug: 'daily-standup-best-practices',
    title: 'Daily Standup Best Practices',
    category: 'Agile / Scrum',
    difficulty: 'Beginner',
    description: 'How to give effective daily updates.',
    isFree: true,
    learningObjective: 'Learn to report progress concisely.',
    aiPracticeTopicKey: 'free-2',
    vocabulary: [
      { kanji: '簡潔', reading: 'かんけつ', romaji: 'kanketsu', meaning: 'Concise', example: '進捗を簡潔に報告してください。' },
      { kanji: '共有', reading: 'きょうゆう', romaji: 'kyouyuu', meaning: 'Sharing', example: '困っていることをチームで共有します。' },
      { kanji: '相談', reading: 'そうだん', romaji: 'soudan', meaning: 'Consultation', example: '後で個別に相談させてください。' },
      { kanji: '予定', reading: 'よてい', romaji: 'yotei', meaning: 'Plan', example: '今日の予定を話します。' },
      { kanji: '完了', reading: 'かんりょう', romaji: 'kanryou', meaning: 'Completion', example: '昨日のタスクは完了しました。' }
    ],
    dialogue: [
      { speaker: 'Scrum Master', japanese: '今日の朝会を始めます。一人ずつ簡潔にお願いします。', meaning: 'Let\'s start today\'s standup. Everyone, please be concise.' },
      { speaker: 'Dev', japanese: '昨日はバグ修正を完了しました。今日は新機能の実装に入ります。', meaning: 'Yesterday I finished the bug fix. Today I will start implementing the new feature.' }
    ]
  },
  {
    id: 'pm-3',
    slug: 'stakeholder-management',
    title: 'Stakeholder Management',
    category: 'Project Management',
    difficulty: 'Advanced',
    description: 'Communicating with sponsors, users, and other stakeholders.',
    isFree: true,
    learningObjective: 'Learn to manage expectations.',
    aiPracticeTopicKey: 'simulation',
    vocabulary: [
      { kanji: '期待', reading: 'きたい', romaji: 'kitai', meaning: 'Expectation', example: 'ステークホルダーの期待値を管理します。' },
      { kanji: '報告', reading: 'ほうこく', romaji: 'houkoku', meaning: 'Report', example: '定期的に進捗報告会を開きます。' },
      { kanji: '調整', reading: 'ちょうせい', romaji: 'chousei', meaning: 'Adjustment/Coordination', example: '利害関係者との調整が必要です。' },
      { kanji: '合意', reading: 'ごうい', romaji: 'gouii', meaning: 'Agreement', example: '最終的な合意を得ます。' },
      { kanji: '満足', reading: 'まんぞく', romaji: 'manzoku', meaning: 'Satisfaction', example: '顧客満足度を高める努力をします。' }
    ],
    dialogue: [
      { speaker: 'PM', japanese: 'ステークホルダーへの報告資料は準備できましたか？', meaning: 'Is the report material for the stakeholders ready?' },
      { speaker: 'Staff', japanese: 'はい。現在の進捗と今後のリスクについてまとめてあります。', meaning: 'Yes. It summarizes the current progress and future risks.' }
    ]
  },
  {
    id: 'client-2',
    slug: 'negotiating-deadlines-with-clients',
    title: 'Negotiating Deadlines with Clients',
    category: 'Client Communication',
    difficulty: 'Advanced',
    description: 'How to politely ask for more time or adjust schedules.',
    isFree: true,
    learningObjective: 'Master negotiation phrases.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '延長', reading: 'えんちょう', romaji: 'enchou', meaning: 'Extension', example: '納期の延長をお願いしたいです。' },
      { kanji: '調整', reading: 'ちょうせい', romaji: 'chousei', meaning: 'Adjustment', example: 'スケジュールを調整させてください。' },
      { kanji: '理由', reading: 'りゆう', romaji: 'riyuu', meaning: 'Reason', example: '遅延の理由を説明します。' },
      { kanji: '誠に', reading: 'まことに', romaji: 'makoto ni', meaning: 'Truly/Sincerely', example: '誠に申し訳ございません。' },
      { kanji: '代替', reading: 'だいたい', romaji: 'daitai', meaning: 'Alternative', example: '代替案を提示します。' }
    ],
    dialogue: [
      { speaker: 'Staff', japanese: '誠に恐縮ですが、納期を1週間ほど延長させていただけないでしょうか？', meaning: 'I am very sorry, but could we extend the deadline by about a week?' },
      { speaker: 'Client', japanese: '理由を伺えますか？', meaning: 'Can I ask the reason?' }
    ]
  },
  {
    id: 'team-2',
    slug: 'giving-and-receiving-feedback',
    title: 'Giving & Receiving Feedback',
    category: 'Team Communication',
    difficulty: 'Intermediate',
    description: 'Constructive criticism and positive reinforcement.',
    isFree: true,
    learningObjective: 'Learn to give feedback politely.',
    aiPracticeTopicKey: 'free-4',
    vocabulary: [
      { kanji: '指摘', reading: 'してき', romaji: 'shiteki', meaning: 'Indication/Pointing out', example: 'コードレビューで指摘をします。' },
      { kanji: '改善', reading: 'かいぜん', romaji: 'kaizen', meaning: 'Improvement', example: '改善点があれば教えてください。' },
      { kanji: '称賛', reading: 'しょうさん', romaji: 'shousan', meaning: 'Praise', example: '良い仕事には称賛を送りましょう。' },
      { kanji: '成長', reading: 'せいちょう', romaji: 'seichou', meaning: 'Growth', example: 'フィードバックを成長に繋げます。' },
      { kanji: '率直', reading: 'そっちょく', romaji: 'sotchoku', meaning: 'Frank/Direct', example: '率直な意見を聞かせてください。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: 'このコード、もう少し読みやすく改善できると思います。', meaning: 'I think this code can be improved to be a bit more readable.' },
      { speaker: 'Dev', japanese: 'ご指摘ありがとうございます。修正します。', meaning: 'Thank you for pointing it out. I\'ll fix it.' }
    ]
  }
];
