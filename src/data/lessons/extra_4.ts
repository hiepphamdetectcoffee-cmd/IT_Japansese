import { Lesson } from '../../types';

export const EXTRA_LESSONS_4: Lesson[] = [
  {
    id: 'prog-8',
    slug: 'functional-programming-concepts',
    title: 'Functional Programming Concepts',
    category: 'Programming',
    difficulty: 'Advanced',
    description: 'Discussing pure functions, immutability, and higher-order functions.',
    isFree: true,
    learningObjective: 'Learn functional programming terms in Japanese.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '純粋関数', reading: 'じゅんすいかんすう', romaji: 'junsui kansuu', meaning: 'Pure function', example: '副作用のない純粋関数を推奨します。' },
      { kanji: '不変性', reading: 'ふへんせい', romaji: 'fuhensei', meaning: 'Immutability', example: 'データの不変性を保つことが重要です。' },
      { kanji: '高階関数', reading: 'こうかいかんすう', romaji: 'koukai kansuu', meaning: 'Higher-order function', example: 'mapやfilterは高階関数です。' },
      { kanji: '副作用', reading: 'ふくさよう', romaji: 'fukusayou', meaning: 'Side effect', example: '副作用を最小限に抑えます。' },
      { kanji: '宣言的', reading: 'せんげんてき', romaji: 'sengenteki', meaning: 'Declarative', example: '宣言的なコードは読みやすいです。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'このループ処理、map関数を使って書き換えられませんか？', meaning: 'Can\'t this loop processing be rewritten using the map function?' },
      { speaker: 'Lead', japanese: 'そうですね。宣言的に書いた方が意図が伝わりやすくなります。', meaning: 'That\'s right. Writing it declaratively makes the intention easier to convey.' }
    ]
  },
  {
    id: 'test-7',
    slug: 'test-driven-development-tdd',
    title: 'Test-Driven Development (TDD)',
    category: 'Testing / QA',
    difficulty: 'Intermediate',
    description: 'Discussing the Red-Green-Refactor cycle.',
    isFree: true,
    learningObjective: 'Master TDD terminology.',
    aiPracticeTopicKey: 'tester',
    vocabulary: [
      { kanji: '先行', reading: 'せんこう', romaji: 'senkou', meaning: 'Preceding/First', example: 'テストを先行して作成します。' },
      { kanji: '失敗', reading: 'しっぱい', romaji: 'shippai', meaning: 'Failure', example: 'まずはテストを失敗させます（Red）。' },
      { kanji: '成功', reading: 'せいこう', romaji: 'seikou', meaning: 'Success', example: '最小限の実装でテストを成功させます（Green）。' },
      { kanji: '整理', reading: 'せいり', romaji: 'seiri', meaning: 'Refactor/Organize', example: 'コードをきれいに整理します（Refactor）。' },
      { kanji: '品質', reading: 'ひんしつ', romaji: 'hinshitsu', meaning: 'Quality', example: 'TDDで設計の品質を高めます。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: 'この機能、TDDで進めてもらえますか？', meaning: 'Can you proceed with this function using TDD?' },
      { speaker: 'Dev', japanese: 'はい。まずはテストケースを書き出してみます。', meaning: 'Yes. First, I\'ll try writing out the test cases.' }
    ]
  },
  {
    id: 'db-5',
    slug: 'database-sharding-and-partitioning',
    title: 'Database Sharding & Partitioning',
    category: 'Database',
    difficulty: 'Advanced',
    description: 'Talking about horizontal scaling for large datasets.',
    isFree: true,
    learningObjective: 'Learn to discuss database scaling techniques.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '分散', reading: 'ぶんさん', romaji: 'bunsan', meaning: 'Distribution', example: 'データを複数のサーバーに分散させます。' },
      { kanji: '分割', reading: 'ぶんかつ', romaji: 'bunkatsu', meaning: 'Partitioning/Splitting', example: 'テーブルを月ごとに分割します。' },
      { kanji: '負荷', reading: 'ふか', romaji: 'fuka', meaning: 'Load', example: 'データベースの負荷を軽減します。' },
      { kanji: '水平', reading: 'すいへい', romaji: 'suihei', meaning: 'Horizontal', example: '水平スケーリングを検討します。' },
      { kanji: '管理', reading: 'かんり', romaji: 'kanri', meaning: 'Management', example: 'シャーディングの管理コストを考慮してください。' }
    ],
    dialogue: [
      { speaker: 'Architect', japanese: 'データ量が膨大になってきたので、シャーディングを導入しましょう。', meaning: 'The data volume has become huge, so let\'s introduce sharding.' },
      { speaker: 'DBA', japanese: 'アプリケーション側の修正も必要になりますね。', meaning: 'Modifications on the application side will also be necessary.' }
    ]
  },
  {
    id: 'net-4',
    slug: 'load-balancing-strategies',
    title: 'Load Balancing Strategies',
    category: 'Network',
    difficulty: 'Intermediate',
    description: 'Discussing Round Robin, Least Connections, and health checks.',
    isFree: true,
    learningObjective: 'Master load balancing terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '振り分け', reading: 'ふりわけ', romaji: 'furiwake', meaning: 'Distribution/Allocation', example: 'リクエストを各サーバーに振り分けます。' },
      { kanji: '順次', reading: 'じゅんじ', romaji: 'junji', meaning: 'Sequential/Round Robin', example: 'サーバーに順次リクエストを送ります。' },
      { kanji: '死活監視', reading: 'しかつかんし', romaji: 'shikatsukanshi', meaning: 'Health check', example: '死活監視で異常なサーバーを切り離します。' },
      { kanji: '偏り', reading: 'かたより', romaji: 'katalyori', meaning: 'Bias/Imbalance', example: '負荷の偏りを防ぎます。' },
      { kanji: '維持', reading: 'いじ', romaji: 'iji', meaning: 'Maintenance/Persistence', example: 'セッションの維持（スティッキーセッション）を設定します。' }
    ],
    dialogue: [
      { speaker: 'Infra', japanese: '特定のサーバーに負荷が集中しています。', meaning: 'The load is concentrated on a specific server.' },
      { speaker: 'Lead', japanese: 'ロードバランサーの振り分けアルゴリズムを見直しましょう。', meaning: 'Let\'s review the load balancer\'s distribution algorithm.' }
    ]
  },
  {
    id: 'infra-4',
    slug: 'infrastructure-as-code-iac',
    title: 'Infrastructure as Code (IaC)',
    category: 'Infrastructure / DevOps',
    difficulty: 'Intermediate',
    description: 'Talking about Terraform, CloudFormation, and automation.',
    isFree: true,
    learningObjective: 'Learn to discuss infrastructure automation.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '定義', reading: 'ていぎ', romaji: 'teigi', meaning: 'Definition', example: 'インフラをコードで定義します。' },
      { kanji: '自動', reading: 'じどう', romaji: 'jidou', meaning: 'Automatic', example: '環境構築を自動化します。' },
      { kanji: '管理', reading: 'かんり', romaji: 'kanri', meaning: 'Management', example: 'バージョン管理システムでインフラを管理します。' },
      { kanji: '再現', reading: 'さいげん', romaji: 'saigen', meaning: 'Reproduction', example: '同じ環境を何度でも再現できます。' },
      { kanji: '変更', reading: 'へんこう', romaji: 'henkou', meaning: 'Change', example: 'インフラの変更をレビューします。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'テスト環境をもう一つ作ってもらえますか？', meaning: 'Can you make one more test environment?' },
      { speaker: 'Infra', japanese: 'はい。IaCを使っているので、すぐに作成可能です。', meaning: 'Yes. Since we use IaC, it can be created immediately.' }
    ]
  },
  {
    id: 'sec-5',
    slug: 'zero-trust-security-model',
    title: 'Zero Trust Security Model',
    category: 'Security',
    difficulty: 'Advanced',
    description: 'Discussing the "never trust, always verify" approach.',
    isFree: true,
    learningObjective: 'Understand modern security architectures.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '境界', reading: 'きょうかい', romaji: 'kyoukai', meaning: 'Boundary/Perimeter', example: '境界型セキュリティの限界を理解します。' },
      { kanji: '検証', reading: 'けんしょう', romaji: 'kenshou', meaning: 'Verification', example: '全てのアクセスを常に検証します。' },
      { kanji: '最小', reading: 'さいしょう', romaji: 'saishou', meaning: 'Minimum', example: '最小権限の原則を適用します。' },
      { kanji: '可視化', reading: 'かしか', romaji: 'kashika', meaning: 'Visualization', example: 'ネットワーク内の動きを可視化します。' },
      { kanji: '信頼', reading: 'しんらい', romaji: 'shinrai', meaning: 'Trust', example: '「何も信頼しない」という考え方です。' }
    ],
    dialogue: [
      { speaker: 'CISO', japanese: '社内ネットワークだからといって、安全とは限りません。', meaning: 'Just because it\'s an internal network doesn\'t mean it\'s safe.' },
      { speaker: 'Engineer', japanese: 'ゼロトラストモデルを導入して、全てのアクセスを検証するようにしましょう。', meaning: 'Let\'s introduce a zero-trust model and verify all access.' }
    ]
  },
  {
    id: 'cld-5',
    slug: 'cost-optimization-in-the-cloud',
    title: 'Cost Optimization in the Cloud',
    category: 'Cloud / AWS / Azure',
    difficulty: 'Intermediate',
    description: 'How to monitor and reduce cloud spending.',
    isFree: true,
    learningObjective: 'Learn to talk about cloud cost management.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '削減', reading: 'さくげん', romaji: 'sakugen', meaning: 'Reduction', example: '不要なリソースを削除してコストを削減します。' },
      { kanji: '監視', reading: 'かんし', romaji: 'kanshi', meaning: 'Monitoring', example: '利用料金を毎日監視します。' },
      { kanji: '予約', reading: 'よやく', romaji: 'yoyaku', meaning: 'Reservation/Reserved instance', example: 'リザーブドインスタンスで費用を抑えます。' },
      { kanji: '最適', reading: 'さいてき', romaji: 'saiteki', meaning: 'Optimal', example: 'インスタンスのサイズを最適化します。' },
      { kanji: '通知', reading: 'つうち', romaji: 'tsuuchi', meaning: 'Notification/Alert', example: '予算を超えたら通知が来るようにします。' }
    ],
    dialogue: [
      { speaker: 'Manager', japanese: '先月のクラウド利用料が予算を超えてしまいました。', meaning: 'Last month\'s cloud usage fee exceeded the budget.' },
      { speaker: 'Dev', japanese: '未使用のインスタンスが残っていたのが原因です。すぐに削除します。', meaning: 'The cause was unused instances that were left. I\'ll delete them immediately.' }
    ]
  },
  {
    id: 'ux-5',
    slug: 'mobile-first-design-strategy',
    title: 'Mobile-First Design Strategy',
    category: 'UI/UX / Frontend',
    difficulty: 'Beginner',
    description: 'Prioritizing the mobile experience in web development.',
    isFree: true,
    learningObjective: 'Learn to discuss mobile-first approaches.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '優先', reading: 'ゆうせん', romaji: 'yuusen', meaning: 'Priority', example: 'モバイルでの表示を最優先に考えます。' },
      { kanji: '制限', reading: 'せいげん', romaji: 'seigen', meaning: 'Restriction/Limit', example: '画面サイズが小さいので、情報を制限します。' },
      { kanji: '操作', reading: 'そうさ', romaji: 'sousa', meaning: 'Operation', example: '親指で操作しやすい配置にします。' },
      { kanji: '軽量', reading: 'けいりょう', romaji: 'keiryou', meaning: 'Lightweight', example: 'モバイル向けに画像を軽量化します。' },
      { kanji: '体験', reading: 'たいけん', romaji: 'taiken', meaning: 'Experience', example: 'モバイルユーザーの体験を重視します。' }
    ],
    dialogue: [
      { speaker: 'Designer', japanese: 'このサイト、モバイルファーストで設計しましょう。', meaning: 'Let\'s design this site with a mobile-first approach.' },
      { speaker: 'Dev', japanese: '賛成です。まずはスマホ版のワイヤーフレームから作りましょう。', meaning: 'I agree. Let\'s start by making the wireframe for the smartphone version.' }
    ]
  },
  {
    id: 'api-5',
    slug: 'webhook-integration-and-events',
    title: 'Webhook Integration & Events',
    category: 'Backend / API',
    difficulty: 'Intermediate',
    description: 'Talking about real-time notifications between systems.',
    isFree: true,
    learningObjective: 'Master Webhook terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '通知', reading: 'つうち', romaji: 'tsuuchi', meaning: 'Notification', example: '決済完了をWebhookで通知します。' },
      { kanji: '受信', reading: 'じゅしん', romaji: 'jushin', meaning: 'Reception', example: 'リクエストを正常に受信しました。' },
      { kanji: '連携', reading: 'れんけい', romaji: 'renkei', meaning: 'Integration', example: '外部サービスとリアルタイムで連携します。' },
      { kanji: '再送', reading: 'さいそう', romaji: 'saisou', meaning: 'Resend/Retry', example: '失敗した場合は自動で再送されます。' },
      { kanji: '検証', reading: 'けんしょう', romaji: 'kenshou', meaning: 'Verification/Signature check', example: '署名を検証して、正当なリクエストか確認します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: '外部サービスからの通知をどう受け取りますか？', meaning: 'How do we receive notifications from external services?' },
      { speaker: 'Lead', japanese: 'Webhook用のエンドポイントを用意して、POSTリクエストを待ち受けましょう。', meaning: 'Let\'s prepare an endpoint for Webhooks and wait for POST requests.' }
    ]
  },
  {
    id: 'mob-5',
    slug: 'progressive-web-apps-pwa',
    title: 'Progressive Web Apps (PWA)',
    category: 'Mobile Development',
    difficulty: 'Intermediate',
    description: 'Discussing web apps that feel like native apps.',
    isFree: true,
    learningObjective: 'Learn to talk about PWA features.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '追加', reading: 'ついか', romaji: 'tsuika', meaning: 'Addition', example: 'ホーム画面に追加できるようにします。' },
      { kanji: '動作', reading: 'どうさ', romaji: 'dousa', meaning: 'Operation/Action', example: 'オフラインでも一部の機能が動作します。' },
      { kanji: '高速', reading: 'こうそく', romaji: 'kousoku', meaning: 'High speed', example: 'キャッシュを利用して高速に表示します。' },
      { kanji: '通知', reading: 'つうち', romaji: 'tsuuchi', meaning: 'Notification', example: 'ブラウザからプッシュ通知を送ります。' },
      { kanji: '体験', reading: 'たいけん', romaji: 'taiken', meaning: 'Experience', example: 'ネイティブアプリに近い体験を提供します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'このウェブサイトをPWA化しませんか？', meaning: 'Why don\'t we turn this website into a PWA?' },
      { speaker: 'Manager', japanese: 'アプリストアを通さずにインストールできるのはメリットですね。', meaning: 'Being able to install without going through the app store is a benefit.' }
    ]
  },
  {
    id: 'ml-5',
    slug: 'computer-vision-basics',
    title: 'Computer Vision Basics',
    category: 'AI / Machine Learning',
    difficulty: 'Advanced',
    description: 'Talking about image recognition and object detection.',
    isFree: true,
    learningObjective: 'Master computer vision terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '認識', reading: 'にんしき', romaji: 'ninshiki', meaning: 'Recognition', example: '画像内の物体を認識します。' },
      { kanji: '検出', reading: 'けんしゅつ', romaji: 'kenshutsu', meaning: 'Detection', example: '顔の表情を検出します。' },
      { kanji: '抽出', reading: 'ちゅうしゅつ', romaji: 'chuushutsu', meaning: 'Extraction', example: '画像から特徴を抽出します。' },
      { kanji: '分類', reading: 'ぶんるい', romaji: 'bunrui', meaning: 'Classification', example: '画像をカテゴリごとに分類します。' },
      { kanji: '追跡', reading: 'ついせき', romaji: 'tsuiseki', meaning: 'Tracking', example: '動いている物体を追跡します。' }
    ],
    dialogue: [
      { speaker: 'Engineer', japanese: 'カメラ映像から不審者を自動で検出したいです。', meaning: 'I want to automatically detect suspicious persons from camera footage.' },
      { speaker: 'AI Expert', japanese: '物体検出のモデルを使って、リアルタイムで解析しましょう。', meaning: 'Let\'s use an object detection model and analyze it in real-time.' }
    ]
  },
  {
    id: 'scrum-5',
    slug: 'sprint-retrospective-techniques',
    title: 'Sprint Retrospective Techniques',
    category: 'Agile / Scrum',
    difficulty: 'Intermediate',
    description: 'Discussing KPT (Keep, Problem, Try) and other methods.',
    isFree: true,
    learningObjective: 'Learn to facilitate retrospectives.',
    aiPracticeTopicKey: 'free-2',
    vocabulary: [
      { kanji: '継続', reading: 'けいぞく', romaji: 'keizoku', meaning: 'Keep/Continue', example: '良かった点は継続しましょう。' },
      { kanji: '課題', reading: 'かだい', romaji: 'kadai', meaning: 'Problem/Issue', example: '発生した課題を洗い出します。' },
      { kanji: '挑戦', reading: 'ちょうせん', romaji: 'chousen', meaning: 'Try/Challenge', example: '次回のスプリントで挑戦することを決めます。' },
      { kanji: '意見', reading: 'いけん', romaji: 'iken', meaning: 'Opinion', example: '全員が意見を出しやすい雰囲気を作ります。' },
      { kanji: '改善', reading: 'かいぜん', romaji: 'kaizen', meaning: 'Improvement', example: '具体的な改善アクションを決めます。' }
    ],
    dialogue: [
      { speaker: 'Scrum Master', japanese: '今回のスプリントの振り返りを始めます。まずはKPTで出しましょう。', meaning: 'Let\'s start the retrospective for this sprint. First, let\'s use KPT.' },
      { speaker: 'Dev', japanese: 'Keepとしては、ペアプロがうまくいったと思います。', meaning: 'As a Keep, I think pair programming went well.' }
    ]
  },
  {
    id: 'pm-5',
    slug: 'resource-allocation-and-levelling',
    title: 'Resource Allocation & Levelling',
    category: 'Project Management',
    difficulty: 'Advanced',
    description: 'Managing team workload and preventing burnout.',
    isFree: true,
    learningObjective: 'Learn to discuss resource management.',
    aiPracticeTopicKey: 'simulation',
    vocabulary: [
      { kanji: '割り当て', reading: 'わりあて', romaji: 'wariate', meaning: 'Allocation/Assignment', example: '各メンバーにタスクを割り当てます。' },
      { kanji: '負荷', reading: 'ふか', romaji: 'fuka', meaning: 'Load/Workload', example: '特定の人の負荷が高くならないようにします。' },
      { kanji: '平準化', reading: 'へいじゅんか', romaji: 'heijunka', meaning: 'Levelling/Smoothing', example: 'リソースの平準化を行います。' },
      { kanji: '稼働', reading: 'かどう', romaji: 'kadou', meaning: 'Operation/Utilization', example: '稼働率を確認してください。' },
      { kanji: '調整', reading: 'ちょうせい', romaji: 'chousei', meaning: 'Adjustment', example: '無理のないスケジュールに調整します。' }
    ],
    dialogue: [
      { speaker: 'PM', japanese: 'Aさんの稼働率が120%を超えています。', meaning: 'Person A\'s utilization rate exceeds 120%.' },
      { speaker: 'Leader', japanese: 'タスクを他のメンバーに割り当て直して、負荷を平準化しましょう。', meaning: 'Let\'s re-assign tasks to other members and level the load.' }
    ]
  },
  {
    id: 'req-2',
    slug: 'user-stories-and-acceptance-criteria',
    title: 'User Stories & Acceptance Criteria',
    category: 'Requirement Analysis',
    difficulty: 'Intermediate',
    description: 'How to write and discuss user-centric requirements.',
    isFree: true,
    learningObjective: 'Master user story terminology.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '視点', reading: 'してん', romaji: 'shiten', meaning: 'Perspective/Viewpoint', example: 'ユーザーの視点でストーリーを書きます。' },
      { kanji: '価値', reading: 'かち', romaji: 'kachi', meaning: 'Value', example: 'この機能が提供する価値は何ですか？' },
      { kanji: '基準', reading: 'きじゅん', romaji: 'kijun', meaning: 'Criteria', example: '受け入れ基準を明確にします。' },
      { kanji: '詳細', reading: 'しょうさい', romaji: 'shousai', meaning: 'Detail', example: '要件の詳細を詰めます。' },
      { kanji: '合意', reading: 'ごうい', romaji: 'gouii', meaning: 'Agreement', example: '基準についてチームで合意します。' }
    ],
    dialogue: [
      { speaker: 'PO', japanese: 'このユーザーストーリーの受け入れ基準は何ですか？', meaning: 'What are the acceptance criteria for this user story?' },
      { speaker: 'Dev', japanese: '「ログイン後にダッシュボードが表示されること」など、3点あります。', meaning: 'There are three points, such as "the dashboard is displayed after logging in".' }
    ]
  },
  {
    id: 'client-4',
    slug: 'handling-unrealistic-client-expectations',
    title: 'Handling Unrealistic Client Expectations',
    category: 'Client Communication',
    difficulty: 'Advanced',
    description: 'How to say "no" or suggest alternatives to difficult requests.',
    isFree: true,
    learningObjective: 'Learn to manage difficult client conversations.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '困難', reading: 'こんなん', romaji: 'konnan', meaning: 'Difficult/Impossible', example: 'そのスケジュールでの実装は困難です。' },
      { kanji: '代替', reading: 'だいたい', romaji: 'daitai', meaning: 'Alternative', example: '代替案として、機能を縮小してリリースすることを提案します。' },
      { kanji: '段階', reading: 'だんかい', romaji: 'dankai', meaning: 'Stage/Phase', example: '段階的に機能をリリースしましょう。' },
      { kanji: '納得', reading: 'なっとく', romaji: 'nattoku', meaning: 'Understanding/Agreement', example: '理由を説明して、納得してもらう必要があります。' },
      { kanji: '誠に', reading: 'まことに', romaji: 'makoto ni', meaning: 'Truly/Sincerely', example: '誠に心苦しいのですが。' }
    ],
    dialogue: [
      { speaker: 'Client', japanese: '来週までに全ての機能を完成させてください。', meaning: 'Please complete all functions by next week.' },
      { speaker: 'Staff', japanese: '誠に心苦しいのですが、品質を担保するためには、段階的なリリースをご検討いただけないでしょうか？', meaning: 'I am truly sorry, but to ensure quality, could you consider a phased release?' }
    ]
  },
  {
    id: 'team-4',
    slug: 'onboarding-new-team-members',
    title: 'Onboarding New Team Members',
    category: 'Team Communication',
    difficulty: 'Beginner',
    description: 'How to welcome and guide new developers.',
    isFree: true,
    learningObjective: 'Learn to explain project basics to newcomers.',
    aiPracticeTopicKey: 'free-4',
    vocabulary: [
      { kanji: '歓迎', reading: 'かんげい', romaji: 'kangei', meaning: 'Welcome', example: '新しいメンバーを歓迎します。' },
      { kanji: '手順', reading: 'てじゅん', romaji: 'tejun', meaning: 'Procedure/Steps', example: '開発環境の構築手順を教えます。' },
      { kanji: '案内', reading: 'あんない', romaji: 'annai', meaning: 'Guide/Introduction', example: '社内ツールを案内します。' },
      { kanji: '不明', reading: 'ふめい', romaji: 'fumei', meaning: 'Unclear/Unknown', example: '不明点があればいつでも聞いてください。' },
      { kanji: '慣れる', reading: 'なれる', romaji: 'nareru', meaning: 'To get used to', example: '早くチームに慣れてくださいね。' }
    ],
    dialogue: [
      { speaker: 'Senior', japanese: '今日から参加する田中さんです。', meaning: 'This is Mr. Tanaka, who is joining us from today.' },
      { speaker: 'New Member', japanese: '田中です。よろしくお願いします。', meaning: 'I\'m Tanaka. Nice to meet you.' },
      { speaker: 'Senior', japanese: 'まずはドキュメントを読んで、環境構築から始めてください。', meaning: 'First, please read the documents and start with the environment setup.' }
    ]
  },
  {
    id: 'int-3',
    slug: 'it-interview-salary-and-benefits-negotiation',
    title: 'IT Interview: Salary & Benefits Negotiation',
    category: 'Interview Preparation',
    difficulty: 'Advanced',
    description: 'How to discuss compensation and work conditions.',
    isFree: true,
    learningObjective: 'Learn to negotiate work conditions.',
    aiPracticeTopicKey: 'free-1',
    vocabulary: [
      { kanji: '希望', reading: 'きぼう', romaji: 'kibou', meaning: 'Hope/Desired', example: '希望年収を教えてください。' },
      { kanji: '待遇', reading: 'たいぐう', romaji: 'taiguu', meaning: 'Treatment/Benefits', example: '福利厚生などの待遇を確認します。' },
      { kanji: '条件', reading: 'じょうけん', romaji: 'jouken', meaning: 'Condition', example: '勤務条件について相談させてください。' },
      { kanji: '提示', reading: 'ていじ', romaji: 'teiji', meaning: 'Presentation/Offer', example: '内定通知書で条件を提示します。' },
      { kanji: '検討', reading: 'けんとう', romaji: 'kentou', meaning: 'Consideration', example: '提示された条件を検討します。' }
    ],
    dialogue: [
      { speaker: 'Interviewer', japanese: 'ご希望の年収はどのくらいですか？', meaning: 'What is your desired annual salary?' },
      { speaker: 'Candidate', japanese: 'これまでの経験を考慮して、600万円程度を希望しております。', meaning: 'Considering my experience so far, I am hoping for around 6 million yen.' }
    ]
  },
  {
    id: 'keigo-4',
    slug: 'polite-requests-and-favors',
    title: 'Polite Requests & Favors',
    category: 'Business Japanese / Keigo',
    difficulty: 'Intermediate',
    description: 'How to ask for help or information politely.',
    isFree: true,
    learningObjective: 'Master the art of polite requests.',
    aiPracticeTopicKey: 'free-3',
    vocabulary: [
      { kanji: '依頼', reading: 'いらい', romaji: 'irai', meaning: 'Request', example: '作業の依頼をさせていただきます。' },
      { kanji: '教授', reading: 'きょうじゅ', romaji: 'kyouju', meaning: 'Teaching/Instruction', example: 'やり方をご教授いただけますでしょうか。' },
      { kanji: '幸い', reading: 'さいわい', romaji: 'saiwai', meaning: 'Appreciate/Happy', example: 'ご確認いただければ幸いです。' },
      { kanji: '恐縮', reading: 'きょうしゅく', romaji: 'kyoushuku', meaning: 'Sorry to trouble', example: 'お忙しいところ恐縮ですが。' },
      { kanji: '何卒', reading: 'なにとぞ', romaji: 'nanitozo', meaning: 'Kindly/Please', example: '何卒よろしくお願いいたします。' }
    ],
    dialogue: [
      { speaker: 'Staff', japanese: 'お忙しいところ恐縮ですが、この資料を確認いただけますでしょうか？', meaning: 'I am sorry to trouble you while you are busy, but could you check this document?' },
      { speaker: 'Senior', japanese: 'はい、後で見ておきますね。', meaning: 'Yes, I\'ll take a look later.' }
    ]
  },
  {
    id: 'brse-3',
    slug: 'brse-cultural-bridge-and-misunderstandings',
    title: 'BrSE: Cultural Bridge & Misunderstandings',
    category: 'BrSE Communication',
    difficulty: 'Advanced',
    description: 'Handling cultural differences in communication styles.',
    isFree: true,
    learningObjective: 'Learn to bridge cultural gaps.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '背景', reading: 'はいけい', romaji: 'haikei', meaning: 'Background/Context', example: '文化的な背景を理解することが重要です。' },
      { kanji: '直接', reading: 'ちょくせつ', romaji: 'chokusetsu', meaning: 'Direct', example: '日本人は直接的な表現を避ける傾向があります。' },
      { kanji: '意図', reading: 'いと', romaji: 'ito', meaning: 'Intention', example: '発言の真の意図を汲み取ります。' },
      { kanji: '誤解', reading: 'ごかい', romaji: 'gokai', meaning: 'Misunderstanding', example: '言葉の壁による誤解を防ぎます。' },
      { kanji: '橋渡し', reading: 'はしわたし', romaji: 'hashiwatashi', meaning: 'Bridging', example: '両チームの橋渡し役を務めます。' }
    ],
    dialogue: [
      { speaker: 'BrSE', japanese: '日本側の「検討します」は、必ずしも「やる」という意味ではありません。', meaning: 'The Japanese side\'s "we will consider it" doesn\'t necessarily mean "we will do it".' },
      { speaker: 'Offshore Dev', japanese: 'なるほど。文脈を読み取ることが大切なんですね。', meaning: 'I see. Reading the context is important, then.' }
    ]
  },
  {
    id: 'real-3',
    slug: 'handling-sudden-resignations',
    title: 'Handling Sudden Resignations',
    category: 'Real Project Situations',
    difficulty: 'Advanced',
    description: 'Managing team morale and knowledge transfer when someone leaves.',
    isFree: true,
    learningObjective: 'Learn to handle team transitions.',
    aiPracticeTopicKey: 'simulation',
    vocabulary: [
      { kanji: '退職', reading: 'たいしょく', romaji: 'taishoku', meaning: 'Resignation', example: '主要メンバーが急に退職することになりました。' },
      { kanji: '引継ぎ', reading: 'ひきつぎ', romaji: 'hikitsugi', meaning: 'Handover', example: '業務の引継ぎを急ぎます。' },
      { kanji: '補充', reading: 'ほじゅう', romaji: 'hojuu', meaning: 'Replacement/Supplement', example: '新しいメンバーを補充する必要があります。' },
      { kanji: '影響', reading: 'えいきょう', romaji: 'eikyou', meaning: 'Impact', example: 'プロジェクトへの影響を最小限に抑えます。' },
      { kanji: '士気', reading: 'しき', romaji: 'shiki', meaning: 'Morale', example: 'チームの士気が下がらないように配慮します。' }
    ],
    dialogue: [
      { speaker: 'Manager', japanese: '田中さんが来月末で退職することになりました。', meaning: 'Mr. Tanaka will be resigning at the end of next month.' },
      { speaker: 'Leader', japanese: 'それは大変ですね。すぐに引継ぎ計画を立てましょう。', meaning: 'That\'s a big problem. Let\'s make a handover plan immediately.' }
    ]
  }
];
