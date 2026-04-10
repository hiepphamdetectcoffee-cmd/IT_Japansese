import { Lesson } from '../../types';

export const TESTING_LESSONS: Lesson[] = [
  {
    id: 'test-1',
    slug: 'testing-types-and-levels',
    title: 'Testing Types & Levels',
    category: 'Testing / QA',
    difficulty: 'Beginner',
    description: 'Introduction to unit tests, integration tests, and system tests.',
    isFree: true,
    learningObjective: 'Understand the hierarchy and types of software testing.',
    aiPracticeTopicKey: 'tester',
    vocabulary: [
      { kanji: '単体テスト', reading: 'たんたいてすと', romaji: 'tantai tesuto', meaning: 'Unit test', example: '単体テストを実施します。' },
      { kanji: '結合テスト', reading: 'けつごうてすと', romaji: 'ketsugou tesuto', meaning: 'Integration test', example: '結合テストのシナリオを作成します。' },
      { kanji: 'システムテスト', reading: 'しすてむてすと', romaji: 'shisutemu tesuto', meaning: 'System test', example: 'システムテストで全機能を確認します。' },
      { kanji: '受入テスト', reading: 'うけいれてすと', romaji: 'ukeire tesuto', meaning: 'Acceptance test', example: 'ユーザーによる受入テストが行われます。' },
      { kanji: '回帰テスト', reading: 'かいきてすと', romaji: 'kaiki tesuto', meaning: 'Regression test', example: '修正後に回帰テストを実行します。' },
      { kanji: '正常系', reading: 'せいじょうけい', romaji: 'seijoukei', meaning: 'Normal case/Happy path', example: 'まずは正常系のテストを終わらせます。' },
      { kanji: '異常系', reading: 'いじょうけい', romaji: 'ijoukei', meaning: 'Abnormal case/Error path', example: '異常系のテストケースが不足しています。' },
      { kanji: '境界値', reading: 'きょうかいち', romaji: 'kyoukaichi', meaning: 'Boundary value', example: '境界値テストを重点的に行います。' },
      { kanji: '網羅率', reading: 'もうらりつ', romaji: 'mouraritsu', meaning: 'Coverage', example: 'テストの網羅率を上げてください。' },
      { kanji: '品質', reading: 'ひんしつ', romaji: 'hinshitsu', meaning: 'Quality', example: '品質管理を徹底します。' }
    ],
    dialogue: [
      { speaker: 'QA Lead', japanese: '単体テストの網羅率はどのくらいですか？', meaning: 'What is the coverage of the unit tests?' },
      { speaker: 'Dev', japanese: '現在は80%です。正常系はすべて完了しています。', meaning: 'It\'s currently 80%. All normal cases are completed.' },
      { speaker: 'QA Lead', japanese: '異常系のテストケースも追加して、90%を目指しましょう。', meaning: 'Let\'s add abnormal test cases and aim for 90%.' }
    ]
  },
  {
    id: 'test-2',
    slug: 'bug-reporting-and-tracking',
    title: 'Bug Reporting & Tracking',
    category: 'Testing / QA',
    difficulty: 'Beginner',
    description: 'How to report bugs and track their status.',
    isFree: true,
    learningObjective: 'Learn to write clear bug reports in Japanese.',
    aiPracticeTopicKey: 'tester',
    vocabulary: [
      { kanji: '起票', reading: 'きひょう', romaji: 'kihyou', meaning: 'Ticketing/Raising a bug', example: '不具合を起票しました。' },
      { kanji: '再現手順', reading: 'さいげんてじゅん', romaji: 'saigen tejun', meaning: 'Reproduction steps', example: '再現手順を詳しく書いてください。' },
      { kanji: '期待値', reading: 'きたいち', romaji: 'kitaichi', meaning: 'Expected value', example: '期待値と実際の動作が異なります。' },
      { kanji: '実測値', reading: 'じっそくち', romaji: 'jissokuchi', meaning: 'Actual value', example: '実測値を報告書に記載します。' },
      { kanji: '重要度', reading: 'じゅうようど', romaji: 'juuyoudo', meaning: 'Severity', example: 'このバグの重要度は「高」です。' },
      { kanji: '優先度', reading: 'ゆうせんど', romaji: 'yuusendo', meaning: 'Priority', example: '優先度を上げて対応してください。' },
      { kanji: 'ステータス', reading: 'すてーたす', romaji: 'suteetasu', meaning: 'Status', example: 'ステータスを「解決済み」に変更します。' },
      { kanji: '担当者', reading: 'たんとうしゃ', romaji: 'tantousha', meaning: 'Assignee', example: '担当者を決定してください。' },
      { kanji: '添付', reading: 'てんぷ', romaji: 'tenpu', meaning: 'Attachment', example: 'スクリーンショットを添付します。' },
      { kanji: '却下', reading: 'きゃっか', romaji: 'kyakka', meaning: 'Reject', example: '仕様通りのため、バグを却下しました。' }
    ],
    dialogue: [
      { speaker: 'Tester', japanese: 'ログイン画面でエラーが出るので、不具合を起票しました。', meaning: 'I raised a bug because an error occurs on the login screen.' },
      { speaker: 'Dev', japanese: '再現手順を教えてもらえますか？', meaning: 'Can you tell me the reproduction steps?' },
      { speaker: 'Tester', japanese: 'はい、チケットに期待値と実測値、スクリーンショットを添付しています。', meaning: 'Yes, I have attached the expected value, actual value, and screenshots to the ticket.' }
    ]
  },
  {
    id: 'test-3',
    slug: 'test-automation',
    title: 'Test Automation',
    category: 'Testing / QA',
    difficulty: 'Intermediate',
    description: 'Discussing automated testing tools and scripts.',
    isFree: true,
    learningObjective: 'Master terms for CI/CD and automated test suites.',
    aiPracticeTopicKey: 'tester',
    vocabulary: [
      { kanji: '自動化', reading: 'じどうか', romaji: 'jidouka', meaning: 'Automation', example: 'テストの自動化を推進します。' },
      { kanji: 'スクリプト', reading: 'すくりぷと', romaji: 'sukuriputo', meaning: 'Script', example: 'テストスクリプトを作成します。' },
      { kanji: '保守', reading: 'ほしゅ', romaji: 'hoshu', meaning: 'Maintenance', example: '自動テストの保守が必要です。' },
      { kanji: '実行', reading: 'じっこう', romaji: 'jikkou', meaning: 'Execution', example: 'テストを定期的に実行します。' },
      { kanji: '結果', reading: 'けっか', romaji: 'kekka', meaning: 'Result', example: 'テスト結果を確認してください。' },
      { kanji: '失敗', reading: 'しっぱい', romaji: 'shippai', meaning: 'Failure', example: 'テストが失敗しました。' },
      { kanji: '成功', reading: 'せいこう', romaji: 'seikou', meaning: 'Success', example: 'すべてのテストが成功しました。' },
      { kanji: '環境', reading: 'かんきょう', romaji: 'kankyou', meaning: 'Environment', example: 'テスト環境を構築します。' },
      { kanji: 'ツール', reading: 'つーる', romaji: 'tsuuru', meaning: 'Tool', example: '自動化ツールを選定します。' },
      { kanji: '連携', reading: 'れんけい', romaji: 'renkei', meaning: 'Integration/Link', example: 'CIツールと連携させます。' }
    ],
    dialogue: [
      { speaker: 'Manager', japanese: 'テストの自動化はどのくらい進んでいますか？', meaning: 'How much progress has been made on test automation?' },
      { speaker: 'Engineer', japanese: '主要な機能のテストスクリプト作成は完了しました。', meaning: 'The creation of test scripts for the main functions is completed.' },
      { speaker: 'Manager', japanese: 'CI環境との連携もお願いします。', meaning: 'Please also integrate it with the CI environment.' }
    ]
  },
  {
    id: 'test-4',
    slug: 'performance-testing',
    title: 'Performance Testing',
    category: 'Testing / QA',
    difficulty: 'Advanced',
    description: 'Talking about load testing, stress testing, and scalability.',
    isFree: true,
    learningObjective: 'Learn to discuss system limits and performance metrics.',
    aiPracticeTopicKey: 'tester',
    vocabulary: [
      { kanji: '負荷テスト', reading: 'ふかてすと', romaji: 'fuka tesuto', meaning: 'Load test', example: '高負荷時の動作を確認します。' },
      { kanji: 'ストレステスト', reading: 'すとれすてすと', romaji: 'sutoresu tesuto', meaning: 'Stress test', example: 'システムの限界を調査します。' },
      { kanji: '応答時間', reading: 'おうとうじかん', romaji: 'outou jikan', meaning: 'Response time', example: '応答時間が遅延しています。' },
      { kanji: 'スループット', reading: 'するーぷっと', romaji: 'suruuputto', meaning: 'Throughput', example: 'スループットを計測します。' },
      { kanji: '同時接続', reading: 'どうじせつぞく', romaji: 'douji setsuzoku', meaning: 'Simultaneous connections', example: '最大同時接続数を確認してください。' },
      { kanji: 'ボトルネック', reading: 'ぼとるねっく', romaji: 'botorunekku', meaning: 'Bottleneck', example: 'パフォーマンスのボトルネックを特定します。' },
      { kanji: '最適化', reading: 'さいてきか', romaji: 'saitekika', meaning: 'Optimization', example: 'クエリの最適化が必要です。' },
      { kanji: '計測', reading: 'けいそく', romaji: 'keisoku', meaning: 'Measurement', example: 'メモリ使用量を計測します。' },
      { kanji: '遅延', reading: 'ちえん', romaji: 'chien', meaning: 'Latency/Delay', example: 'ネットワーク遅延が発生しています。' },
      { kanji: '限界', reading: 'げんかい', romaji: 'genkai', meaning: 'Limit', example: 'システムの限界値を超えました。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: '負荷テストの結果はどうでしたか？', meaning: 'What were the results of the load test?' },
      { speaker: 'Tester', japanese: '同時接続数が1000を超えると、応答時間が急激に悪化します。', meaning: 'When the number of simultaneous connections exceeds 1000, the response time deteriorates rapidly.' },
      { speaker: 'Lead', japanese: 'データベースのクエリがボトルネックになっている可能性が高いですね。', meaning: 'It\'s highly likely that the database queries are the bottleneck.' }
    ]
  },
  {
    id: 'test-5',
    slug: 'security-testing-basics',
    title: 'Security Testing Basics',
    category: 'Testing / QA',
    difficulty: 'Advanced',
    description: 'Introduction to vulnerability scanning and penetration testing.',
    isFree: true,
    learningObjective: 'Understand basic security testing terminology.',
    aiPracticeTopicKey: 'tester',
    vocabulary: [
      { kanji: '脆弱性', reading: 'ぜいじゃくせい', romaji: 'zeijakusei', meaning: 'Vulnerability', example: '脆弱性診断を実施します。' },
      { kanji: '診断', reading: 'しんだん', romaji: 'shindan', meaning: 'Diagnosis/Scan', example: 'セキュリティ診断の結果を確認してください。' },
      { kanji: '侵入テスト', reading: 'しんにゅうてすと', romaji: 'shinnyuu tesuto', meaning: 'Penetration test', example: '外部から侵入テストを行います。' },
      { kanji: '認証', reading: 'にんしょう', romaji: 'ninshou', meaning: 'Authentication', example: '認証機能の不備を修正します。' },
      { kanji: '認可', reading: 'にんか', romaji: 'ninka', meaning: 'Authorization', example: '適切な認可制御が必要です。' },
      { kanji: '暗号化', reading: 'あんごうか', romaji: 'angouka', meaning: 'Encryption', example: '通信を暗号化してください。' },
      { kanji: '改ざん', reading: 'かいざん', romaji: 'kaizan', meaning: 'Tampering', example: 'データの改ざんを防止します。' },
      { kanji: '漏洩', reading: 'ろうえい', romaji: 'rouei', meaning: 'Leakage', example: '情報の漏洩を防ぎます。' },
      { kanji: '対策', reading: 'たいさく', romaji: 'taisaku', meaning: 'Countermeasure', example: 'セキュリティ対策を強化します。' },
      { kanji: 'リスク', reading: 'りすく', romaji: 'risuku', meaning: 'Risk', example: 'リスクアセスメントを行います。' }
    ],
    dialogue: [
      { speaker: 'Security Officer', japanese: '脆弱性診断で、SQLインジェクションのリスクが見つかりました。', meaning: 'In the vulnerability scan, a risk of SQL injection was found.' },
      { speaker: 'Dev', japanese: 'すぐに対策を講じます。パラメータのサニタイズを徹底します。', meaning: 'We will take countermeasures immediately. We will ensure thorough parameter sanitization.' },
      { speaker: 'Security Officer', japanese: '修正後、再診断をお願いします。', meaning: 'Please perform a re-scan after the fix.' }
    ]
  }
];
