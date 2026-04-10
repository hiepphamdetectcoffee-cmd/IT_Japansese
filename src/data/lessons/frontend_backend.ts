import { Lesson } from '../../types';

export const FRONTEND_BACKEND_LESSONS: Lesson[] = [
  {
    id: 'fe-1',
    slug: 'frontend-frameworks-and-ui',
    title: 'Frontend Frameworks & UI',
    category: 'UI/UX / Frontend',
    difficulty: 'Beginner',
    description: 'Discussing components, state, and styling.',
    isFree: true,
    learningObjective: 'Master frontend development terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '画面遷移', reading: 'がめんせんい', romaji: 'gamen sen\'i', meaning: 'Screen transition', example: '画面遷移のロジックを実装します。' },
      { kanji: '部品', reading: 'ぶひん', romaji: 'buhin', meaning: 'Component/Part', example: '共通部品を再利用します。' },
      { kanji: '状態管理', reading: 'じょうたいかんり', romaji: 'joutai kanri', meaning: 'State management', example: 'Reduxで状態管理を行います。' },
      { kanji: '描画', reading: 'びょうが', romaji: 'byouga', meaning: 'Rendering', example: '再描画の回数を減らします。' },
      { kanji: '同期', reading: 'どうき', romaji: 'douki', meaning: 'Sync', example: 'サーバーとデータを同期します。' },
      { kanji: '非同期', reading: 'ひどうき', romaji: 'hidouki', meaning: 'Async', example: '非同期でデータを取得します。' },
      { kanji: '検証', reading: 'けんしょう', romaji: 'kenshou', meaning: 'Validation', example: '入力値の検証を行います。' },
      { kanji: '装飾', reading: 'そうしょく', romaji: 'soushoku', meaning: 'Decoration/Styling', example: 'CSSで装飾を追加します。' },
      { kanji: '配置', reading: 'はいち', romaji: 'haichi', meaning: 'Layout/Placement', example: '要素の配置を調整します。' },
      { kanji: 'レスポンシブ', reading: 'れすぽんしぶ', romaji: 'resuponshibu', meaning: 'Responsive', example: 'レスポンシブ対応が必要です。' }
    ],
    dialogue: [
      { speaker: 'Dev', japanese: 'この画面の描画が少し遅いですね。', meaning: 'The rendering of this screen is a bit slow.' },
      { speaker: 'Lead', japanese: '不要な再描画が発生していないか、状態管理を見直しましょう。', meaning: 'Let\'s review the state management to see if unnecessary re-rendering is occurring.' },
      { speaker: 'Dev', japanese: 'はい、共通部品のメモ化も検討します。', meaning: 'Yes, I\'ll also consider memoizing common components.' }
    ]
  },
  {
    id: 'be-1',
    slug: 'backend-api-design',
    title: 'Backend & API Design',
    category: 'Backend / API',
    difficulty: 'Intermediate',
    description: 'Talking about REST APIs, endpoints, and server-side logic.',
    isFree: true,
    learningObjective: 'Learn to discuss backend architecture and APIs.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '端点', reading: 'たんてん', romaji: 'tanten', meaning: 'Endpoint', example: 'APIの端点を定義します。' },
      { kanji: '要求', reading: 'ようきゅう', romaji: 'youkyuu', meaning: 'Request', example: 'リクエストを送ります。' },
      { kanji: '応答', reading: 'おうとう', romaji: 'outou', meaning: 'Response', example: 'レスポンスを返します。' },
      { kanji: '認証', reading: 'にんしょう', romaji: 'ninshou', meaning: 'Authentication', example: 'トークン認証を実装します。' },
      { kanji: '認可', reading: 'にんか', romaji: 'ninka', meaning: 'Authorization', example: 'アクセス権限を確認します。' },
      { kanji: '負荷', reading: 'ふか', romaji: 'fuka', meaning: 'Load', example: 'サーバーの負荷を分散します。' },
      { kanji: '永続化', reading: 'えいぞくか', romaji: 'eizokuka', meaning: 'Persistence', example: 'データをデータベースに永続化します。' },
      { kanji: '直列化', reading: 'ちょくれつか', romaji: 'chokuretsuka', meaning: 'Serialization', example: 'オブジェクトをJSONに直列化します。' },
      { kanji: '逆直列化', reading: 'ぎゃくちょくれつか', romaji: 'gyaku chokuretsuka', meaning: 'Deserialization', example: 'JSONをオブジェクトに復元します。' },
      { kanji: '中継', reading: 'ちゅうけい', romaji: 'chuukei', meaning: 'Proxy/Relay', example: 'プロキシサーバーを経由します。' }
    ],
    dialogue: [
      { speaker: 'Frontend', japanese: 'APIのレスポンスにフィールドを追加してもらえますか？', meaning: 'Can you add a field to the API response?' },
      { speaker: 'Backend', japanese: 'はい、エンドポイントの仕様を更新します。', meaning: 'Sure, I\'ll update the endpoint specification.' },
      { speaker: 'Frontend', japanese: 'ありがとうございます。認証トークンの有効期限も教えてください。', meaning: 'Thank you. Please also tell me the expiration date of the authentication token.' }
    ]
  }
];
