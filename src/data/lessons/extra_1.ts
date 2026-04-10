import { Lesson } from '../../types';

export const EXTRA_LESSONS_1: Lesson[] = [
  {
    id: 'db-3',
    slug: 'nosql-and-document-databases',
    title: 'NoSQL & Document Databases',
    category: 'Database',
    difficulty: 'Intermediate',
    description: 'Discussing non-relational databases like MongoDB and DynamoDB.',
    isFree: true,
    learningObjective: 'Learn to talk about NoSQL concepts.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '非関係型', reading: 'ひかんけいがた', romaji: 'hikankeigata', meaning: 'Non-relational', example: '非関係型データベースを採用します。' },
      { kanji: '階層', reading: 'かいそう', romaji: 'kaisou', meaning: 'Hierarchy', example: 'ドキュメントの階層構造を設計します。' },
      { kanji: '柔軟性', reading: 'じゅうなんせい', romaji: 'juunansei', meaning: 'Flexibility', example: 'スキーマの柔軟性が高いです。' },
      { kanji: '分散', reading: 'ぶんさん', romaji: 'bunsan', meaning: 'Distributed', example: 'データを複数のノードに分散させます。' },
      { kanji: '整合性', reading: 'せいごうせい', romaji: 'seigousei', meaning: 'Consistency', example: '結果整合性を許容します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: '今回のプロジェクトではNoSQLを使いたいと考えています。', meaning: 'I am thinking of using NoSQL for this project.' },
      { speaker: 'Lead', japanese: 'スキーマの柔軟性は魅力ですが、整合性の面で問題はありませんか？', meaning: 'The schema flexibility is attractive, but are there any issues with consistency?' }
    ]
  },
  {
    id: 'net-2',
    slug: 'dns-and-domain-management',
    title: 'DNS & Domain Management',
    category: 'Network',
    difficulty: 'Intermediate',
    description: 'Talking about domain names, name servers, and records.',
    isFree: true,
    learningObjective: 'Master DNS-related terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '名前解決', reading: 'なまえかいけつ', romaji: 'namae kaiketsu', meaning: 'Name resolution', example: 'DNSで名前解決を行います。' },
      { kanji: '正引き', reading: 'せいびき', romaji: 'seibiki', meaning: 'Forward lookup', example: 'ドメイン名からIPアドレスを引きます。' },
      { kanji: '逆引き', reading: 'ぎゃくびき', romaji: 'gyakubiki', meaning: 'Reverse lookup', example: 'IPアドレスからドメイン名を特定します。' },
      { kanji: '転送', reading: 'てんそう', romaji: 'tensou', meaning: 'Transfer/Forwarding', example: 'ゾーン転送の設定を確認してください。' },
      { kanji: '浸透', reading: 'しんとう', romaji: 'shintou', meaning: 'Propagation', example: 'DNSの変更が浸透するまで待ちます。' }
    ],
    dialogue: [
      { speaker: 'Admin', japanese: 'ドメインの切り替えを行いましたが、まだ反映されていません。', meaning: 'I switched the domain, but it hasn\'t been reflected yet.' },
      { speaker: 'Support', japanese: 'DNSの浸透には最大で72時間かかる場合があります。', meaning: 'DNS propagation can take up to 72 hours.' }
    ]
  },
  {
    id: 'sec-2',
    slug: 'encryption-and-cryptography',
    title: 'Encryption & Cryptography',
    category: 'Security',
    difficulty: 'Advanced',
    description: 'Discussing public keys, private keys, and hashing.',
    isFree: true,
    learningObjective: 'Learn to talk about data protection techniques.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '公開鍵', reading: 'こうかいかぎ', romaji: 'koukaikagi', meaning: 'Public key', example: '公開鍵をサーバーに登録します。' },
      { kanji: '秘密鍵', reading: 'ひみつかぎ', romaji: 'himitsukagi', meaning: 'Private key', example: '秘密鍵は厳重に管理してください。' },
      { kanji: '共通鍵', reading: 'きょうつうかぎ', romaji: 'kyoutsuukagi', meaning: 'Common key/Symmetric key', example: '共通鍵暗号方式を使用します。' },
      { kanji: '署名', reading: 'しょめい', romaji: 'shomei', meaning: 'Signature', example: 'デジタル署名で改ざんを検知します。' },
      { kanji: 'ハッシュ化', reading: 'はっしゅか', romaji: 'hasshuka', meaning: 'Hashing', example: 'パスワードをハッシュ化して保存します。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: '通信の安全性を高めるために、公開鍵暗号を導入しましょう。', meaning: 'Let\'s introduce public key cryptography to increase communication safety.' },
      { speaker: 'Dev', japanese: 'はい。秘密鍵の漏洩には細心の注意を払います。', meaning: 'Yes. I will pay the utmost attention to prevent the leakage of the private key.' }
    ]
  },
  {
    id: 'cld-2',
    slug: 'serverless-architecture',
    title: 'Serverless Architecture',
    category: 'Cloud / AWS / Azure',
    difficulty: 'Advanced',
    description: 'Talking about Lambda, Functions, and event-driven design.',
    isFree: true,
    learningObjective: 'Master serverless computing terms.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '関数', reading: 'かんすう', romaji: 'kansuu', meaning: 'Function', example: 'サーバーレス関数を実装します。' },
      { kanji: '起動', reading: 'きどう', romaji: 'kidou', meaning: 'Invocation/Startup', example: 'イベントをトリガーに関数を起動します。' },
      { kanji: '待機', reading: 'たいき', romaji: 'taiki', meaning: 'Idle/Wait', example: 'コールドスタートによる待機時間が発生します。' },
      { kanji: '実行', reading: 'じっこう', romaji: 'jikkou', meaning: 'Execution', example: '実行時間に応じて課金されます。' },
      { kanji: '連携', reading: 'れんけい', romaji: 'renkei', meaning: 'Integration', example: '他のクラウドサービスと連携させます。' }
    ],
    dialogue: [
      { speaker: 'Architect', japanese: 'このバッチ処理、サーバーレスで実装しませんか？', meaning: 'Why don\'t we implement this batch processing with serverless?' },
      { speaker: 'Dev', japanese: 'いいですね。管理の手間が省けますし、コストも抑えられそうです。', meaning: 'Sounds good. It saves management effort and seems likely to reduce costs.' }
    ]
  },
  {
    id: 'ux-2',
    slug: 'accessibility-and-inclusive-design',
    title: 'Accessibility & Inclusive Design',
    category: 'UI/UX / Frontend',
    difficulty: 'Intermediate',
    description: 'Discussing screen readers, contrast, and keyboard navigation.',
    isFree: true,
    learningObjective: 'Learn to talk about inclusive web design.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '補助', reading: 'ほじょ', romaji: 'hojo', meaning: 'Assistance/Aid', example: '音声読み上げの補助機能を追加します。' },
      { kanji: '対比', reading: 'たいひ', romaji: 'taihi', meaning: 'Contrast', example: '色の対比を調整して視認性を高めます。' },
      { kanji: '準拠', reading: 'じゅんきょ', romaji: 'junkyo', meaning: 'Compliance/Conformity', example: 'アクセシビリティ指針に準拠します。' },
      { kanji: '操作', reading: 'そうさ', romaji: 'sousa', meaning: 'Operation', example: 'キーボードのみでの操作を可能にします。' },
      { kanji: '配慮', reading: 'はいりょ', romaji: 'hairyo', meaning: 'Consideration', example: '色覚多様性に配慮したデザインにします。' }
    ],
    dialogue: [
      { speaker: 'Designer', japanese: 'このサイト、アクセシビリティの面で課題があります。', meaning: 'This site has issues in terms of accessibility.' },
      { speaker: 'Dev', japanese: '具体的にはどこを修正すべきでしょうか？', meaning: 'Specifically, where should we fix?' }
    ]
  },
  {
    id: 'api-2',
    slug: 'rest-vs-graphql',
    title: 'REST vs GraphQL',
    category: 'Backend / API',
    difficulty: 'Advanced',
    description: 'Comparing different API architectures.',
    isFree: true,
    learningObjective: 'Learn to discuss API design choices.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '要求', reading: 'ようきゅう', romaji: 'youkyuu', meaning: 'Request', example: '必要なデータのみを要求します。' },
      { kanji: '柔軟', reading: 'じゅうなん', romaji: 'juunan', meaning: 'Flexible', example: 'GraphQLはクエリが柔軟です。' },
      { kanji: '過剰', reading: 'かじょう', romaji: 'kajou', meaning: 'Excessive/Over-fetching', example: 'データの過剰な取得を防ぎます。' },
      { kanji: '不足', reading: 'ふそく', romaji: 'fusoku', meaning: 'Insufficiency/Under-fetching', example: '情報の不足を解消します。' },
      { kanji: '型', reading: 'かた', romaji: 'kata', meaning: 'Type', example: 'スキーマで型を定義します。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: '新しいAPIはGraphQLで実装しようと思っています。', meaning: 'I\'m thinking of implementing the new API with GraphQL.' },
      { speaker: 'Dev', japanese: 'フロントエンド側で必要なデータを自由に選べるので、効率が良さそうですね。', meaning: 'Since the frontend can freely choose the necessary data, it seems efficient.' }
    ]
  },
  {
    id: 'mob-2',
    slug: 'cross-platform-development',
    title: 'Cross-Platform Development',
    category: 'Mobile Development',
    difficulty: 'Intermediate',
    description: 'Discussing Flutter, React Native, and code sharing.',
    isFree: true,
    learningObjective: 'Master terms for cross-platform mobile apps.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '共通化', reading: 'きょうつうか', romaji: 'kyoutsuuka', meaning: 'Commonization/Sharing', example: 'コードの共通化率を高めます。' },
      { kanji: '固有', reading: 'こゆう', romaji: 'koyuu', meaning: 'Specific/Unique', example: 'OS固有の機能を呼び出します。' },
      { kanji: '効率', reading: 'こうりつ', romaji: 'kouritsu', meaning: 'Efficiency', example: '開発効率を重視します。' },
      { kanji: '再現', reading: 'さいげん', romaji: 'saigen', meaning: 'Reproduction/Rendering', example: 'UIの再現性が高いです。' },
      { kanji: '更新', reading: 'こうしん', romaji: 'koushin', meaning: 'Update', example: 'ホットリロードで即座に更新を反映します。' }
    ],
    dialogue: [
      { speaker: 'Manager', japanese: 'iOSとAndroidの両方に対応する必要があります。', meaning: 'We need to support both iOS and Android.' },
      { speaker: 'Lead', japanese: 'Flutterを使えば、一つのコードベースで開発可能です。', meaning: 'If we use Flutter, we can develop with a single codebase.' }
    ]
  },
  {
    id: 'ml-2',
    slug: 'natural-language-processing',
    title: 'Natural Language Processing',
    category: 'AI / Machine Learning',
    difficulty: 'Advanced',
    description: 'Talking about LLMs, tokenization, and sentiment analysis.',
    isFree: true,
    learningObjective: 'Learn NLP terminology in Japanese.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '解析', reading: 'かいせき', romaji: 'kaiseki', meaning: 'Analysis/Parsing', example: '構文解析を行います。' },
      { kanji: '抽出', reading: 'ちゅうしゅつ', romaji: 'chuushutsu', meaning: 'Extraction', example: 'キーワードを抽出します。' },
      { kanji: '要約', reading: 'ようやく', romaji: 'youyaku', meaning: 'Summarization', example: '文章を自動で要約します。' },
      { kanji: '感情', reading: 'かんじょう', romaji: 'kanjou', meaning: 'Sentiment/Emotion', example: '感情分析を実装します。' },
      { kanji: '生成', reading: 'せいせい', romaji: 'seisei', meaning: 'Generation', example: '自然な文章を生成します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'このチャットボット、もう少し自然な回答ができませんか？', meaning: 'Can\'t this chatbot give more natural answers?' },
      { speaker: 'AI Engineer', japanese: '最新のLLMモデルを導入して、プロンプトを調整してみます。', meaning: 'I\'ll try introducing the latest LLM model and adjusting the prompts.' }
    ]
  },
  {
    id: 'scrum-2',
    slug: 'sprint-planning-and-backlog',
    title: 'Sprint Planning & Backlog',
    category: 'Agile / Scrum',
    difficulty: 'Intermediate',
    description: 'Discussing task breakdown and sprint goals.',
    isFree: true,
    learningObjective: 'Master terms for sprint planning.',
    aiPracticeTopicKey: 'free-2',
    vocabulary: [
      { kanji: '優先順位', reading: 'ゆうせんじゅんい', romaji: 'yuusen jun\'i', meaning: 'Priority', example: 'バックログの優先順位を整理します。' },
      { kanji: '見積もり', reading: 'みつもり', romaji: 'mitsumori', meaning: 'Estimation', example: 'ストーリーポイントで見積もります。' },
      { kanji: '分解', reading: 'ぶんかい', romaji: 'bunkai', meaning: 'Breakdown', example: 'タスクを細かく分解します。' },
      { kanji: '目標', reading: 'もくひょう', romaji: 'mokuhyou', meaning: 'Goal', example: 'スプリント目標を設定します。' },
      { kanji: '確定', reading: 'かくてい', romaji: 'kakutei', meaning: 'Confirmation/Finalization', example: 'スプリントの内容を確定させます。' }
    ],
    dialogue: [
      { speaker: 'PO', japanese: '次のスプリントで優先すべき機能は何ですか？', meaning: 'What features should be prioritized in the next sprint?' },
      { speaker: 'Dev', japanese: 'ユーザー認証の強化を最優先にすべきだと思います。', meaning: 'I think strengthening user authentication should be the top priority.' }
    ]
  },
  {
    id: 'pm-2',
    slug: 'risk-management-and-mitigation',
    title: 'Risk Management & Mitigation',
    category: 'Project Management',
    difficulty: 'Advanced',
    description: 'Identifying and addressing project risks.',
    isFree: true,
    learningObjective: 'Learn to talk about project risks.',
    aiPracticeTopicKey: 'simulation',
    vocabulary: [
      { kanji: '特定', reading: 'とくてい', romaji: 'tokutei', meaning: 'Identification', example: '潜在的なリスクを特定します。' },
      { kanji: '評価', reading: 'ひょうか', romaji: 'hyouka', meaning: 'Evaluation', example: 'リスクの影響度を評価します。' },
      { kanji: '回避', reading: 'かいひ', romaji: 'kaihi', meaning: 'Avoidance', example: 'リスクを回避するための策を講じます。' },
      { kanji: '軽減', reading: 'けいげん', romaji: 'keigen', meaning: 'Mitigation', example: '影響を最小限に軽減します。' },
      { kanji: '受容', reading: 'じゅよう', romaji: 'juyou', meaning: 'Acceptance', example: '一部のリスクは受容します。' }
    ],
    dialogue: [
      { speaker: 'PM', japanese: 'スケジュールの遅延リスクについて、どう考えていますか？', meaning: 'What do you think about the risk of schedule delay?' },
      { speaker: 'Leader', japanese: '追加のリソースを確保することで、リスクを軽減できると考えています。', meaning: 'I think we can mitigate the risk by securing additional resources.' }
    ]
  },
  {
    id: 'client-1',
    slug: 'client-meeting-etiquette',
    title: 'Client Meeting Etiquette',
    category: 'Client Communication',
    difficulty: 'Intermediate',
    description: 'Standard phrases and manners for meetings with Japanese clients.',
    isFree: true,
    learningObjective: 'Master polite phrases for client interactions.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '同席', reading: 'どうせき', romaji: 'douseki', meaning: 'Presence/Being present', example: '会議にエンジニアも同席させます。' },
      { kanji: '議事録', reading: 'ぎじろく', romaji: 'gijiroku', meaning: 'Minutes of meeting', example: '議事録を作成して共有します。' },
      { kanji: '検討', reading: 'けんとう', romaji: 'kentou', meaning: 'Consideration', example: '持ち帰って検討させていただきます。' },
      { kanji: '提案', reading: 'ていあん', romaji: 'teian', meaning: 'Proposal', example: '改善案を提案します。' },
      { kanji: '合意', reading: 'ごうい', romaji: 'gouii', meaning: 'Agreement', example: '内容について合意を得ました。' }
    ],
    dialogue: [
      { speaker: 'Staff', japanese: '本日はお忙しい中、お時間をいただきありがとうございます。', meaning: 'Thank you for taking the time out of your busy schedule today.' },
      { speaker: 'Client', japanese: 'いえいえ。早速ですが、進捗について伺えますか？', meaning: 'Not at all. Can I ask about the progress right away?' }
    ]
  },
  {
    id: 'team-1',
    slug: 'internal-team-collaboration',
    title: 'Internal Team Collaboration',
    category: 'Team Communication',
    difficulty: 'Beginner',
    description: 'Communicating with colleagues on Slack or in person.',
    isFree: true,
    learningObjective: 'Learn casual but professional team communication.',
    aiPracticeTopicKey: 'free-4',
    vocabulary: [
      { kanji: '共有', reading: 'きょうゆう', romaji: 'kyouyuu', meaning: 'Sharing', example: '情報をチーム内で共有します。' },
      { kanji: '相談', reading: 'そうだん', romaji: 'soudan', meaning: 'Consultation', example: '困ったときはすぐに相談してください。' },
      { kanji: '連携', reading: 'れんけい', romaji: 'renkei', meaning: 'Coordination/Link', example: '他部署と連携して進めます。' },
      { kanji: '確認', reading: 'かくにん', romaji: 'kakunin', meaning: 'Confirmation', example: '仕様の確認をお願いします。' },
      { kanji: '報告', reading: 'ほうこく', romaji: 'houkoku', meaning: 'Report', example: '進捗をチャットで報告します。' }
    ],
    dialogue: [
      { speaker: 'Dev A', japanese: 'このタスク、少し手伝ってもらえませんか？', meaning: 'Can you help me a bit with this task?' },
      { speaker: 'Dev B', japanese: 'いいですよ。今の作業が終わったら確認しますね。', meaning: 'Sure. I\'ll check it once I finish my current work.' }
    ]
  },
  {
    id: 'int-1',
    slug: 'it-interview-technical-background',
    title: 'IT Interview: Technical Background',
    category: 'Interview Preparation',
    difficulty: 'Intermediate',
    description: 'How to explain your past projects and skills in an interview.',
    isFree: true,
    learningObjective: 'Learn to describe your technical experience.',
    aiPracticeTopicKey: 'free-1',
    vocabulary: [
      { kanji: '経験', reading: 'けいけん', romaji: 'keiken', meaning: 'Experience', example: 'Javaでの開発経験が3年あります。' },
      { kanji: '担当', reading: 'たんとう', romaji: 'tantou', meaning: 'In charge of', example: '主にバックエンドを担当していました。' },
      { kanji: '実績', reading: 'じっせき', romaji: 'jisseki', meaning: 'Track record/Achievement', example: '大規模システムの構築実績があります。' },
      { kanji: '強み', reading: 'つよみ', romaji: 'tsuymi', meaning: 'Strength', example: '私の強みは学習意欲が高いことです。' },
      { kanji: '貢献', reading: 'こうけん', romaji: 'kouken', meaning: 'Contribution', example: '貴社の成長に貢献したいです。' }
    ],
    dialogue: [
      { speaker: 'Interviewer', japanese: 'これまでの経験で、一番苦労したことは何ですか？', meaning: 'What was the thing you struggled with the most in your experience so far?' },
      { speaker: 'Candidate', japanese: '納期が厳しい中での不具合対応です。チームで協力して乗り越えました。', meaning: 'It was dealing with bugs under a tight deadline. We cooperated as a team to overcome it.' }
    ]
  },
  {
    id: 'keigo-2',
    slug: 'honorifics-in-emails',
    title: 'Honorifics in Emails',
    category: 'Business Japanese / Keigo',
    difficulty: 'Intermediate',
    description: 'Writing professional emails using Sonkeigo and Kenjougo.',
    isFree: true,
    learningObjective: 'Master polite email expressions.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '拝啓', reading: 'はいけい', romaji: 'haikei', meaning: 'Dear (formal)', example: '拝啓 時下ますますご清栄のこととお慶び申し上げます。' },
      { kanji: '敬具', reading: 'けいぐ', romaji: 'keigu', meaning: 'Sincerely (formal)', example: '敬具' },
      { kanji: 'ご査収', reading: 'ごさしゅう', romaji: 'gosashuu', meaning: 'Please check/inspect', example: '添付資料をご査収ください。' },
      { kanji: 'ご教示', reading: 'ごきょうじ', romaji: 'gokyouji', meaning: 'Please teach/inform', example: '詳細をご教示いただけますでしょうか。' },
      { kanji: 'ご多忙', reading: 'ごたぼう', romaji: 'gotabou', meaning: 'Busy (polite)', example: 'ご多忙の折、恐縮ですが。' }
    ],
    dialogue: [
      { speaker: 'Staff', japanese: '資料を送りましたので、ご査収ください。', meaning: 'I have sent the documents, so please check them.' },
      { speaker: 'Client', japanese: 'ありがとうございます。確認させていただきます。', meaning: 'Thank you. I will check them.' }
    ]
  },
  {
    id: 'brse-2',
    slug: 'brse-quality-assurance-bridge',
    title: 'BrSE: Quality Assurance Bridge',
    category: 'BrSE Communication',
    difficulty: 'Advanced',
    description: 'Managing quality expectations between client and offshore.',
    isFree: true,
    learningObjective: 'Learn to negotiate quality standards.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '品質基準', reading: 'ひんしつきじゅん', romaji: 'hinshitsu kijun', meaning: 'Quality standard', example: '日本の品質基準は非常に高いです。' },
      { kanji: '指摘', reading: 'してき', romaji: 'shiteki', meaning: 'Indication/Pointing out', example: '顧客からの指摘事項を修正します。' },
      { kanji: '納得', reading: 'なっとく', romaji: 'nattoku', meaning: 'Understanding/Agreement', example: '品質について納得してもらう必要があります。' },
      { kanji: '説明', reading: 'せつめい', romaji: 'setsumei', meaning: 'Explanation', example: '不具合の原因を詳しく説明します。' },
      { kanji: '改善', reading: 'かいぜん', romaji: 'kaizen', meaning: 'Improvement', example: 'プロセスの改善を提案します。' }
    ],
    dialogue: [
      { speaker: 'Client', japanese: 'このバグ、なぜ発生したのか説明してください。', meaning: 'Please explain why this bug occurred.' },
      { speaker: 'BrSE', japanese: '申し訳ございません。原因を調査し、再発防止策と共にご報告します。', meaning: 'I am sorry. We will investigate the cause and report it along with recurrence prevention measures.' }
    ]
  }
];
