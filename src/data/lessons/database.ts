import { Lesson } from '../../types';

export const DATABASE_LESSONS: Lesson[] = [
  {
    id: 'db-1',
    slug: 'relational-database-basics',
    title: 'Relational Database Basics',
    category: 'Database',
    difficulty: 'Beginner',
    description: 'Learn terms for tables, columns, and basic SQL operations.',
    isFree: true,
    learningObjective: 'Master basic RDBMS terminology.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '表', reading: 'ひょう', romaji: 'hyou', meaning: 'Table', example: '新しい表を作成します。' },
      { kanji: '列', reading: 'れつ', romaji: 'retsu', meaning: 'Column', example: '列を追加してください。' },
      { kanji: '行', reading: 'ぎょう', romaji: 'gyou', meaning: 'Row', example: '行を削除します。' },
      { kanji: '主キー', reading: 'しゅきー', romaji: 'shukii', meaning: 'Primary key', example: '主キーを設定します。' },
      { kanji: '外部キー', reading: 'がいぶきー', romaji: 'gaibukii', meaning: 'Foreign key', example: '外部キー制約を追加します。' },
      { kanji: '制約', reading: 'せいやく', romaji: 'seiyaku', meaning: 'Constraint', example: 'NOT NULL制約を確認してください。' },
      { kanji: '索引', reading: 'さくいん', romaji: 'sakuin', meaning: 'Index', example: 'インデックスを貼って高速化します。' },
      { kanji: '正規化', reading: 'せいきか', romaji: 'seikika', meaning: 'Normalization', example: 'データの正規化を行います。' },
      { kanji: '結合', reading: 'けつごう', romaji: 'ketsugou', meaning: 'Join', example: 'テーブルを結合してデータを取得します。' },
      { kanji: '抽出', reading: 'ちゅうしゅつ', romaji: 'chuushutsu', meaning: 'Extraction/Select', example: '必要なデータを抽出します。' }
    ],
    dialogue: [
      { speaker: 'Dev A', japanese: 'このテーブル、正規化が不十分じゃないですか？', meaning: 'Isn\'t the normalization of this table insufficient?' },
      { speaker: 'Dev B', japanese: 'はい、冗長なデータが多いので修正が必要です。', meaning: 'Yes, there is a lot of redundant data, so it needs to be fixed.' },
      { speaker: 'Dev A', japanese: '主キーと外部キーの設定も見直しましょう。', meaning: 'Let\'s also review the primary and foreign key settings.' }
    ]
  },
  {
    id: 'db-2',
    slug: 'sql-queries-and-optimization',
    title: 'SQL Queries & Optimization',
    category: 'Database',
    difficulty: 'Intermediate',
    description: 'Discussing complex queries and performance tuning.',
    isFree: true,
    learningObjective: 'Learn to talk about query performance and tuning.',
    aiPracticeTopicKey: 'developer',
    vocabulary: [
      { kanji: '問い合わせ', reading: 'といあわせ', romaji: 'toiawase', meaning: 'Query', example: '複雑な問い合わせを実行します。' },
      { kanji: '実行計画', reading: 'じっこうけいかく', romaji: 'jikkou keikaku', meaning: 'Execution plan', example: '実行計画を確認してボトルネックを探します。' },
      { kanji: '走査', reading: 'そうさ', romaji: 'sousa', meaning: 'Scan', example: 'フルテーブルスキャンが発生しています。' },
      { kanji: '絞り込み', reading: 'しぼりこみ', romaji: 'shiborikomi', meaning: 'Filtering', example: '条件でデータを絞り込みます。' },
      { kanji: '並べ替え', reading: 'ならべかえ', romaji: 'narabekae', meaning: 'Sorting', example: '結果を日付順に並べ替えます。' },
      { kanji: '集計', reading: 'しゅうけい', romaji: 'shuukei', meaning: 'Aggregation', example: '売上データを集計します。' },
      { kanji: '副問合せ', reading: 'ふくといあわせ', romaji: 'fukutoiawase', meaning: 'Subquery', example: '副問合せを使用してデータを取得します。' },
      { kanji: '一貫性', reading: 'いっかんせい', romaji: 'ikkansei', meaning: 'Consistency', example: 'データの一貫性を保ちます。' },
      { kanji: '排他制御', reading: 'はいたせいぎょ', romaji: 'haita seigyo', meaning: 'Exclusive control/Locking', example: '排他制御でデッドロックを防ぎます。' },
      { kanji: '更新', reading: 'こうしん', romaji: 'koushin', meaning: 'Update', example: 'レコードを更新します。' }
    ],
    dialogue: [
      { speaker: 'DBA', japanese: 'このクエリ、実行時間が長すぎますね。', meaning: 'This query takes too long to execute.' },
      { speaker: 'Dev', japanese: '実行計画を確認したところ、フルスキャンになっていました。', meaning: 'When I checked the execution plan, it was doing a full scan.' },
      { speaker: 'DBA', japanese: '適切なインデックスを追加して、走査範囲を絞り込みましょう。', meaning: 'Let\'s add an appropriate index and narrow down the scan range.' }
    ]
  }
];
