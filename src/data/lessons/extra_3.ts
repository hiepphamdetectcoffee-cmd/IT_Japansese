import { Lesson } from '../../types';

export const EXTRA_LESSONS_3: Lesson[] = [
  {
    id: 'prog-7',
    slug: 'typescript-and-type-safety',
    title: 'TypeScript & Type Safety',
    category: 'Programming',
    difficulty: 'Intermediate',
    description: 'Discussing interfaces, types, and why type safety matters.',
    isFree: true,
    learningObjective: 'Master TypeScript terminology in Japanese.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '型定義', reading: 'かたていぎ', romaji: 'katateigi', meaning: 'Type definition', example: 'インターフェースで型定義を行います。' },
      { kanji: '推論', reading: 'すいろん', romaji: 'suiron', meaning: 'Inference', example: '型推論を利用してコードを簡潔にします。' },
      { kanji: '安全性', reading: 'あんぜんせい', romaji: 'anzensei', meaning: 'Safety', example: '型安全性によってバグを未然に防ぎます。' },
      { kanji: '互換', reading: 'ごかん', romaji: 'gokan', meaning: 'Compatibility', example: '型の互換性を確認してください。' },
      { kanji: '変換', reading: 'へんかん', romaji: 'henkan', meaning: 'Conversion/Casting', example: '型変換が必要な場合があります。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'TypeScriptを導入してから、実行時のエラーが減りました。', meaning: 'Since introducing TypeScript, runtime errors have decreased.' },
      { speaker: 'Lead', japanese: '型定義をしっかり行うことで、ドキュメント代わりにもなりますね。', meaning: 'By defining types properly, it also serves as documentation.' }
    ]
  },
  {
    id: 'be-2',
    slug: 'microservices-architecture',
    title: 'Microservices Architecture',
    category: 'Backend / API',
    difficulty: 'Advanced',
    description: 'Talking about distributed systems and service communication.',
    isFree: true,
    learningObjective: 'Learn to discuss microservices concepts.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '分割', reading: 'ぶんかい', romaji: 'bunkai', meaning: 'Division/Split', example: 'サービスを機能ごとに分割します。' },
      { kanji: '疎結合', reading: 'そけつごう', romaji: 'soketsugou', meaning: 'Loose coupling', example: '疎結合な設計を意識してください。' },
      { kanji: '連携', reading: 'れんけい', romaji: 'renkei', meaning: 'Coordination/Link', example: 'サービス間の連携にメッセージキューを使います。' },
      { kanji: '障害', reading: 'しょうがい', romaji: 'shougai', meaning: 'Failure', example: '障害の連鎖を防ぐための対策が必要です。' },
      { kanji: '独立', reading: 'どくりつ', romaji: 'dokuritsu', meaning: 'Independent', example: '各サービスを独立してデプロイできます。' }
    ],
    dialogue: [
      { speaker: 'Architect', japanese: 'モノリスからマイクロサービスへの移行を検討しています。', meaning: 'We are considering migrating from a monolith to microservices.' },
      { speaker: 'Dev', japanese: '運用の複雑さは増しますが、スケーラビリティは向上しますね。', meaning: 'Operational complexity will increase, but scalability will improve.' }
    ]
  },
  {
    id: 'infra-3',
    slug: 'kubernetes-and-orchestration',
    title: 'Kubernetes & Orchestration',
    category: 'Infrastructure / DevOps',
    difficulty: 'Advanced',
    description: 'Discussing clusters, pods, and scaling.',
    isFree: true,
    learningObjective: 'Master Kubernetes terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '管理', reading: 'かんり', romaji: 'kanri', meaning: 'Management/Orchestration', example: 'コンテナのオーケストレーションを行います。' },
      { kanji: '配置', reading: 'はいち', romaji: 'haichi', meaning: 'Deployment/Placement', example: 'ポッドをノードに配置します。' },
      { kanji: '自動', reading: 'じどう', romaji: 'jidou', meaning: 'Automatic', example: 'オートスケーリングで負荷に対応します。' },
      { kanji: '監視', reading: 'かんし', romaji: 'kanshi', meaning: 'Monitoring', example: 'クラスターの状態を監視します。' },
      { kanji: '自己修復', reading: 'じこしゅうふく', romaji: 'jikoshuufuku', meaning: 'Self-healing', example: '異常なコンテナを自動で再起動します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'トラフィックが急増しましたが、システムは安定しています。', meaning: 'Traffic surged, but the system is stable.' },
      { speaker: 'Infra', japanese: 'Kubernetesのオートスケーリングがうまく機能していますね。', meaning: 'Kubernetes autoscaling is working well.' }
    ]
  },
  {
    id: 'sec-4',
    slug: 'sql-injection-prevention',
    title: 'SQL Injection Prevention',
    category: 'Security',
    difficulty: 'Intermediate',
    description: 'How to protect your database from malicious queries.',
    isFree: true,
    learningObjective: 'Learn to talk about SQL injection countermeasures.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '攻撃', reading: 'こうげき', romaji: 'kougeki', meaning: 'Attack', example: 'SQLインジェクション攻撃を防ぎます。' },
      { kanji: '無害化', reading: 'むがいか', romaji: 'mugaika', meaning: 'Sanitization', example: '入力値を無害化してください。' },
      { kanji: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: 'Preparation/Prepared statement', example: 'プレースホルダを使用してクエリを準備します。' },
      { kanji: '脆弱', reading: 'ぜいじゃく', romaji: 'zeijaku', meaning: 'Vulnerable', example: 'このコードは脆弱性が残っています。' },
      { kanji: '対策', reading: 'たいさく', romaji: 'taisaku', meaning: 'Countermeasure', example: '適切なセキュリティ対策を講じます。' }
    ],
    dialogue: [
      { speaker: 'Security', japanese: 'この検索機能、SQLインジェクションの脆弱性があります。', meaning: 'This search function has an SQL injection vulnerability.' },
      { speaker: 'Dev', japanese: '申し訳ありません。すぐにプリペアドステートメントに修正します。', meaning: 'I\'m sorry. I\'ll fix it to use prepared statements immediately.' }
    ]
  },
  {
    id: 'cld-4',
    slug: 'identity-and-access-management-iam',
    title: 'Identity & Access Management (IAM)',
    category: 'Cloud / AWS / Azure',
    difficulty: 'Intermediate',
    description: 'Discussing users, roles, and permissions in the cloud.',
    isFree: true,
    learningObjective: 'Master IAM terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '権限', reading: 'けんげん', romaji: 'kengen', meaning: 'Permission/Authority', example: '最小権限の原則に従います。' },
      { kanji: '役割', reading: 'やくわり', romaji: 'yakuwari', meaning: 'Role', example: 'IAMロールを付与します。' },
      { kanji: '許可', reading: 'きょか', romaji: 'kyoka', meaning: 'Allow', example: 'S3へのアクセスを許可します。' },
      { kanji: '拒否', reading: 'きょひ', romaji: 'kyohi', meaning: 'Deny', example: 'デフォルトで全てのアクセスを拒否します。' },
      { kanji: '認証', reading: 'にんしょう', romaji: 'ninshou', meaning: 'Authentication', example: '多要素認証を有効にしてください。' }
    ],
    dialogue: [
      { speaker: 'Admin', japanese: '新しい開発者にどのような権限を与えればいいですか？', meaning: 'What permissions should I give to the new developer?' },
      { speaker: 'Lead', japanese: '開発に必要な最小限の権限だけをIAMロールで設定してください。', meaning: 'Please set only the minimum permissions necessary for development using an IAM role.' }
    ]
  },
  {
    id: 'ux-4',
    slug: 'design-systems-and-style-guides',
    title: 'Design Systems & Style Guides',
    category: 'UI/UX / Frontend',
    difficulty: 'Intermediate',
    description: 'Talking about consistency and reusable design patterns.',
    isFree: true,
    learningObjective: 'Learn to discuss design systems.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '一貫性', reading: 'いっかんせい', romaji: 'ikkansei', meaning: 'Consistency', example: 'デザインの一貫性を保つためにデザインシステムを導入します。' },
      { kanji: '再利用', reading: 'さいりよう', romaji: 'sairiyou', meaning: 'Reuse', example: 'コンポーネントを再利用可能にします。' },
      { kanji: '指針', reading: 'ししん', romaji: 'shishin', meaning: 'Guideline', example: 'スタイルガイドに従ってコーディングします。' },
      { kanji: '定義', reading: 'ていぎ', romaji: 'teigi', meaning: 'Definition', example: 'カラーパレットを定義します。' },
      { kanji: '共有', reading: 'きょうゆう', romaji: 'kyouyuu', meaning: 'Sharing', example: 'デザイナーとエンジニアで共通言語を持ちます。' }
    ],
    dialogue: [
      { speaker: 'Designer', japanese: '新しいボタンを追加しましたが、既存のデザインシステムに合っていますか？', meaning: 'I added a new button, but does it fit the existing design system?' },
      { speaker: 'Dev', japanese: 'はい。定義済みの色と余白を使っているので、一貫性は保たれています。', meaning: 'Yes. Since you used the defined colors and spacing, consistency is maintained.' }
    ]
  },
  {
    id: 'api-4',
    slug: 'oauth2-and-open-id-connect',
    title: 'OAuth2 & OpenID Connect',
    category: 'Backend / API',
    difficulty: 'Advanced',
    description: 'Discussing third-party authentication and authorization.',
    isFree: true,
    learningObjective: 'Master OAuth-related terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '認可', reading: 'にんか', romaji: 'ninka', meaning: 'Authorization', example: 'OAuth2で認可フローを実装します。' },
      { kanji: '認証', reading: 'にんしょう', romaji: 'ninshou', meaning: 'Authentication', example: 'OpenID Connectでユーザー認証を行います。' },
      { kanji: '連携', reading: 'れんけい', romaji: 'renkei', meaning: 'Integration/Link', example: 'Googleアカウントと連携させます。' },
      { kanji: '有効期限', reading: 'ゆうこうきげん', romaji: 'yuukou kigen', meaning: 'Expiration date', example: 'アクセストークンの有効期限を確認してください。' },
      { kanji: '更新', reading: 'こうしん', romaji: 'koushin', meaning: 'Refresh/Update', example: 'リフレッシュトークンで新しいトークンを取得します。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'ソーシャルログイン機能を実装したいです。', meaning: 'I want to implement a social login function.' },
      { speaker: 'Lead', japanese: 'OAuth2を使って、安全に認可情報を取得するようにしましょう。', meaning: 'Let\'s use OAuth2 to securely obtain authorization information.' }
    ]
  },
  {
    id: 'mob-4',
    slug: 'mobile-app-performance-optimization',
    title: 'Mobile App Performance Optimization',
    category: 'Mobile Development',
    difficulty: 'Advanced',
    description: 'Talking about memory leaks, frame rates, and network efficiency.',
    isFree: true,
    learningObjective: 'Learn to discuss mobile performance tuning.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '最適化', reading: 'さいてきか', romaji: 'saitekika', meaning: 'Optimization', example: '画像の読み込みを最適化します。' },
      { kanji: '漏れ', reading: 'もれ', romaji: 'more', meaning: 'Leak', example: 'メモリ漏れ（メモリリーク）を調査します。' },
      { kanji: '滑らか', reading: 'なめらか', romaji: 'nameraka', meaning: 'Smooth', example: 'アニメーションを滑らかにします。' },
      { kanji: '削減', reading: 'さくげん', romaji: 'sakugen', meaning: 'Reduction', example: '通信量を削減してください。' },
      { kanji: '計測', reading: 'けいそく', romaji: 'keisoku', meaning: 'Measurement', example: '起動時間を計測します。' }
    ],
    dialogue: [
      { speaker: 'QA', japanese: 'アプリの動作が少し重い気がします。', meaning: 'I feel the app operation is a bit heavy.' },
      { speaker: 'Dev', japanese: 'メモリ使用量を確認して、ボトルネックを特定します。', meaning: 'I\'ll check the memory usage and identify the bottleneck.' }
    ]
  },
  {
    id: 'ml-4',
    slug: 'ai-ethics-and-bias',
    title: 'AI Ethics & Bias',
    category: 'AI / Machine Learning',
    difficulty: 'Intermediate',
    description: 'Discussing fairness, transparency, and responsibility in AI.',
    isFree: true,
    learningObjective: 'Understand ethical considerations in AI.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '倫理', reading: 'りんり', romaji: 'rinri', meaning: 'Ethics', example: 'AIの倫理指針を策定します。' },
      { kanji: '偏り', reading: 'かたより', romaji: 'katayori', meaning: 'Bias', example: 'データの偏りを修正します。' },
      { kanji: '公平', reading: 'こうへい', romaji: 'kouhei', meaning: 'Fairness', example: '公平なアルゴリズムを目指します。' },
      { kanji: '透明性', reading: 'とうめいせい', romaji: 'toumeisei', meaning: 'Transparency', example: 'AIの判断プロセスの透明性を確保します。' },
      { kanji: '責任', reading: 'せきにん', romaji: 'sekinin', meaning: 'Responsibility', example: '開発者の責任を明確にします。' }
    ],
    dialogue: [
      { speaker: 'Researcher', japanese: 'このモデル、特定のグループに対して偏った結果を出しています。', meaning: 'This model is producing biased results for a specific group.' },
      { speaker: 'Lead', japanese: '倫理的な問題になる前に、データの公平性を再確認しましょう。', meaning: 'Let\'s re-confirm the data fairness before it becomes an ethical issue.' }
    ]
  },
  {
    id: 'scrum-4',
    slug: 'kanban-vs-scrum',
    title: 'Kanban vs Scrum',
    category: 'Agile / Scrum',
    difficulty: 'Intermediate',
    description: 'Comparing different agile methodologies.',
    isFree: true,
    learningObjective: 'Learn to discuss agile process choices.',
    aiPracticeTopicKey: 'free-2',
    vocabulary: [
      { kanji: '可視化', reading: 'かしか', romaji: 'kashika', meaning: 'Visualization', example: 'タスクの状況をカンバンで可視化します。' },
      { kanji: '制限', reading: 'せいげん', romaji: 'seigen', meaning: 'Limit', example: '仕掛品（WIP）の数を制限します。' },
      { kanji: '周期', reading: 'しゅうき', romaji: 'shuuki', meaning: 'Cycle/Period', example: '一定の周期でスプリントを回します。' },
      { kanji: '継続', reading: 'けいぞく', romaji: 'keizoku', meaning: 'Continuous', example: '継続的な改善を行います。' },
      { kanji: '適応', reading: 'てきおう', romaji: 'tekiou', meaning: 'Adaptation', example: '状況に合わせてプロセスを適応させます。' }
    ],
    dialogue: [
      { speaker: 'Manager', japanese: '私たちのチームには、スクラムとカンバン、どちらが合っているでしょうか？', meaning: 'Which one, Scrum or Kanban, fits our team better?' },
      { speaker: 'Agile Coach', japanese: '納期が明確ならスクラム、継続的なフローならカンバンが良いでしょう。', meaning: 'If the deadline is clear, Scrum; if it\'s a continuous flow, Kanban would be good.' }
    ]
  },
  {
    id: 'pm-4',
    slug: 'change-request-management',
    title: 'Change Request Management',
    category: 'Project Management',
    difficulty: 'Advanced',
    description: 'How to handle and document changes in project scope.',
    isFree: true,
    learningObjective: 'Learn to manage change requests.',
    aiPracticeTopicKey: 'simulation',
    vocabulary: [
      { kanji: '変更要求', reading: 'へんこうようきゅう', romaji: 'henkou youkyuu', meaning: 'Change request', example: '変更要求書を提出してください。' },
      { kanji: '影響', reading: 'えいきょう', romaji: 'eikyou', meaning: 'Impact', example: 'スコープへの影響を調査します。' },
      { kanji: '承認', reading: 'しょうにん', romaji: 'shounin', meaning: 'Approval', example: '変更が承認されました。' },
      { kanji: '履歴', reading: 'りれき', romaji: 'rireki', meaning: 'History/Log', example: '変更履歴を管理します。' },
      { kanji: '調整', reading: 'ちょうせい', romaji: 'chousei', meaning: 'Adjustment', example: '予算とスケジュールの調整を行います。' }
    ],
    dialogue: [
      { speaker: 'Client', japanese: '新しい機能を追加したいのですが、可能ですか？', meaning: 'I want to add a new function, is it possible?' },
      { speaker: 'PM', japanese: '変更要求として承ります。まずは影響範囲と工数を調査させてください。', meaning: 'I\'ll accept it as a change request. First, let me investigate the impact range and man-hours.' }
    ]
  },
  {
    id: 'client-3',
    slug: 'presenting-technical-solutions-to-non-tech-clients',
    title: 'Presenting Technical Solutions to Non-Tech Clients',
    category: 'Client Communication',
    difficulty: 'Advanced',
    description: 'How to explain complex tech concepts simply.',
    isFree: true,
    learningObjective: 'Learn to simplify technical jargon.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '平易', reading: 'へいい', romaji: 'heii', meaning: 'Simple/Easy', example: '平易な言葉で説明します。' },
      { kanji: '例え話', reading: 'たとえばなし', romaji: 'tatoebanashi', meaning: 'Analogy/Metaphor', example: '例え話を使って分かりやすく伝えます。' },
      { kanji: '利点', reading: 'りてん', romaji: 'riten', meaning: 'Advantage/Benefit', example: '技術的な利点を強調します。' },
      { kanji: '図解', reading: 'ずかい', romaji: 'zukai', meaning: 'Illustration/Diagram', example: '図解を用いて説明を補足します。' },
      { kanji: '納得', reading: 'なっとく', romaji: 'nattoku', meaning: 'Understanding/Agreement', example: '顧客に納得してもらうことがゴールです。' }
    ],
    dialogue: [
      { speaker: 'Staff', japanese: 'この技術を導入するメリットを、専門用語を使わずに説明してもらえますか？', meaning: 'Can you explain the benefits of introducing this technology without using technical terms?' },
      { speaker: 'Engineer', japanese: 'はい。家を建てる時の土台に例えて説明してみます。', meaning: 'Yes. I\'ll try to explain it by comparing it to the foundation when building a house.' }
    ]
  },
  {
    id: 'team-3',
    slug: 'conflict-resolution-in-dev-teams',
    title: 'Conflict Resolution in Dev Teams',
    category: 'Team Communication',
    difficulty: 'Advanced',
    description: 'Handling disagreements over architecture or code style.',
    isFree: true,
    learningObjective: 'Learn to mediate technical disagreements.',
    aiPracticeTopicKey: 'free-4',
    vocabulary: [
      { kanji: '対立', reading: 'たいりつ', romaji: 'tairitsu', meaning: 'Conflict/Opposition', example: '意見の対立を解消します。' },
      { kanji: '妥協', reading: 'だきょう', romaji: 'dakyou', meaning: 'Compromise', example: 'お互いの妥協点を探ります。' },
      { kanji: '尊重', reading: 'そんちょう', romaji: 'sonchou', meaning: 'Respect', example: '相手の意見を尊重しましょう。' },
      { kanji: '建設的', reading: 'けんせつてき', romaji: 'kensetsuteki', meaning: 'Constructive', example: '建設的な議論を心がけます。' },
      { kanji: '合意', reading: 'ごうい', romaji: 'gouii', meaning: 'Agreement/Consensus', example: '最終的な合意形成を目指します。' }
    ],
    dialogue: [
      { speaker: 'Dev A', japanese: 'この設計の方が拡張性が高いと思います。', meaning: 'I think this design has higher scalability.' },
      { speaker: 'Dev B', japanese: 'でも、実装が複雑になりすぎませんか？', meaning: 'But won\'t the implementation become too complex?' },
      { speaker: 'Lead', japanese: '二人とも、まずはプロジェクトの納期と保守性のバランスを考えましょう。', meaning: 'Both of you, first let\'s consider the balance between the project deadline and maintainability.' }
    ]
  },
  {
    id: 'int-2',
    slug: 'it-interview-behavioral-questions',
    title: 'IT Interview: Behavioral Questions',
    category: 'Interview Preparation',
    difficulty: 'Intermediate',
    description: 'How to answer questions about teamwork and challenges.',
    isFree: true,
    learningObjective: 'Learn to talk about soft skills in an interview.',
    aiPracticeTopicKey: 'free-1',
    vocabulary: [
      { kanji: '協力', reading: 'きょうりょく', romaji: 'kyouryoku', meaning: 'Cooperation', example: 'チームメンバーと協力して課題を解決しました。' },
      { kanji: '主体性', reading: 'しゅたいせい', romaji: 'shutaisei', meaning: 'Initiative', example: '主体的に動くことを意識しています。' },
      { kanji: '柔軟', reading: 'じゅうなん', romaji: 'juunan', meaning: 'Flexible', example: '状況に合わせて柔軟に対応できます。' },
      { kanji: '意欲', reading: 'いよく', romaji: 'iyoku', meaning: 'Motivation/Will', example: '新しい技術を学ぶ意欲があります。' },
      { kanji: '目標', reading: 'もくひょう', romaji: 'mokuhyou', meaning: 'Goal', example: '将来の目標を教えてください。' }
    ],
    dialogue: [
      { speaker: 'Interviewer', japanese: 'チーム内で意見が分かれた時、どう対応しますか？', meaning: 'How do you respond when opinions are divided within the team?' },
      { speaker: 'Candidate', japanese: 'まずは相手の意見をしっかり聞き、客観的なデータに基づいて話し合うようにしています。', meaning: 'First, I listen to the other person\'s opinion carefully and try to discuss based on objective data.' }
    ]
  },
  {
    id: 'keigo-3',
    slug: 'polite-refusals-and-negations',
    title: 'Polite Refusals & Negations',
    category: 'Business Japanese / Keigo',
    difficulty: 'Advanced',
    description: 'How to say "no" politely in a business context.',
    isFree: true,
    learningObjective: 'Master the art of polite refusal.',
    aiPracticeTopicKey: 'brse',
    vocabulary: [
      { kanji: '致しかねます', reading: 'いたしかねます', romaji: 'itashikanemasu', meaning: 'Cannot do/Unable to do (polite)', example: 'そのご要望にはお応え致しかねます。' },
      { kanji: '見送る', reading: 'みおくる', romaji: 'miokuru', meaning: 'To pass/To defer', example: '今回は導入を見送らせていただきます。' },
      { kanji: 'お断り', reading: 'おことわり', romaji: 'okotowari', meaning: 'Refusal/Decline', example: 'せっかくですが、お断り申し上げます。' },
      { kanji: '添う', reading: 'そう', romaji: 'sou', meaning: 'To meet/To comply', example: 'ご期待に沿えず、申し訳ございません。' },
      { kanji: '事情', reading: 'じじょう', romaji: 'jijou', meaning: 'Circumstances', example: '諸般の事情により、お引き受けできません。' }
    ],
    dialogue: [
      { speaker: 'Client', japanese: 'この機能を明日までに追加してもらえませんか？', meaning: 'Can you add this function by tomorrow?' },
      { speaker: 'Staff', japanese: '誠に申し訳ございませんが、スケジュールの都合上、対応致しかねます。', meaning: 'I am very sorry, but due to schedule constraints, we are unable to accommodate that.' }
    ]
  }
];
