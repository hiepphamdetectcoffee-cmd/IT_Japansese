import { Lesson } from '../../types';

export const PROGRAMMING_LESSONS: Lesson[] = [
  {
    id: 'prog-1',
    slug: 'basic-syntax-and-variables',
    title: 'Basic Syntax & Variables',
    category: 'Programming',
    difficulty: 'Beginner',
    description: 'Learn how to discuss basic code structure and variable declarations in Japanese.',
    isFree: true,
    learningObjective: 'Master terms for variables, constants, and basic syntax rules.',
    aiPracticeTopicKey: 'free-3',
    vocabulary: [
      { kanji: '変数', reading: 'へんすう', romaji: 'hensuu', meaning: 'Variable', example: 'この変数を定義してください。' },
      { kanji: '定数', reading: 'ていすう', romaji: 'teisuu', meaning: 'Constant', example: '定数は大文字で書くのが一般的です。' },
      { kanji: '代入', reading: 'だいにゅう', romaji: 'dainyuu', meaning: 'Assignment', example: '変数に値を代入します。' },
      { kanji: '初期化', reading: 'しょきか', romaji: 'shokika', meaning: 'Initialization', example: '変数の初期化を忘れないでください。' },
      { kanji: '型', reading: 'かた', romaji: 'kata', meaning: 'Type', example: 'この変数の型は何ですか？' },
      { kanji: '宣言', reading: 'せんげん', romaji: 'sengen', meaning: 'Declaration', example: 'グローバル変数の宣言を避けます。' },
      { kanji: '構文', reading: 'こうぶん', romaji: 'koubun', meaning: 'Syntax', example: '構文エラーが発生しました。' },
      { kanji: 'コメント', reading: 'こめんと', romaji: 'komento', meaning: 'Comment', example: 'コードにコメントを追加してください。' },
      { kanji: '演算子', reading: 'えんざんし', romaji: 'enzanshi', meaning: 'Operator', example: '比較演算子を使用します。' },
      { kanji: '式', reading: 'しき', romaji: 'shiki', meaning: 'Expression', example: '条件式を修正してください。' }
    ],
    dialogue: [
      { speaker: 'Senior', japanese: 'この変数の初期化はどこでやっていますか？', meaning: 'Where are you initializing this variable?' },
      { speaker: 'Junior', japanese: 'コンストラクタの中で代入しています。', meaning: 'I am assigning it inside the constructor.' },
      { speaker: 'Senior', japanese: '型が合っていないので、構文エラーになりますよ。', meaning: 'The types don\'t match, so it will cause a syntax error.' }
    ]
  },
  {
    id: 'prog-2',
    slug: 'control-flow-and-loops',
    title: 'Control Flow & Loops',
    category: 'Programming',
    difficulty: 'Beginner',
    description: 'Discussing conditional branches and iterative processing.',
    isFree: true,
    learningObjective: 'Learn to explain if-statements, switch cases, and loops.',
    aiPracticeTopicKey: 'free-3',
    vocabulary: [
      { kanji: '条件分岐', reading: 'じょうけんぶんき', romaji: 'jouken bunki', meaning: 'Conditional branching', example: 'if文で条件分岐を行います。' },
      { kanji: '繰り返し', reading: 'くりかえし', romaji: 'kurikaeshi', meaning: 'Repetition/Loop', example: '繰り返し処理を実装します。' },
      { kanji: '分岐', reading: 'ぶんき', romaji: 'bunki', meaning: 'Branch', example: '処理がここで分岐します。' },
      { kanji: '反復', reading: 'はんぷく', romaji: 'hanpuku', meaning: 'Iteration', example: '反復処理の回数を指定します。' },
      { kanji: '無限ループ', reading: 'むげんるーぷ', romaji: 'mugen ruupu', meaning: 'Infinite loop', example: '無限ループに陥っています。' },
      { kanji: '終了条件', reading: 'しゅうりょうじょうけん', romaji: 'shuuryou jouken', meaning: 'Termination condition', example: 'ループの終了条件を確認してください。' },
      { kanji: '例外', reading: 'れいがい', romaji: 'reigai', meaning: 'Exception', example: '例外処理を追加しましょう。' },
      { kanji: 'ネスト', reading: 'ねすと', romaji: 'nesuto', meaning: 'Nest', example: 'if文のネストが深すぎます。' },
      { kanji: '制御', reading: 'せいぎょ', romaji: 'seigyo', meaning: 'Control', example: 'フロー制御を最適化します。' },
      { kanji: '判定', reading: 'はんてい', romaji: 'hantei', meaning: 'Judgment/Check', example: 'null判定を忘れないでください。' }
    ],
    dialogue: [
      { speaker: 'Dev A', japanese: 'ここの条件分岐、もう少しシンプルになりませんか？', meaning: 'Can this conditional branch be a bit simpler?' },
      { speaker: 'Dev B', japanese: 'switch文を使えばネストを浅くできると思います。', meaning: 'I think we can make the nesting shallower by using a switch statement.' },
      { speaker: 'Dev A', japanese: 'そうですね。無限ループの可能性もないか確認しましょう。', meaning: 'Right. Let\'s also check if there\'s any possibility of an infinite loop.' }
    ]
  },
  {
    id: 'prog-3',
    slug: 'functions-and-methods',
    title: 'Functions & Methods',
    category: 'Programming',
    difficulty: 'Intermediate',
    description: 'Talking about function definitions, arguments, and return values.',
    isFree: true,
    learningObjective: 'Master terminology for modularizing code.',
    aiPracticeTopicKey: 'free-3',
    vocabulary: [
      { kanji: '関数', reading: 'かんすう', romaji: 'kansuu', meaning: 'Function', example: '新しい関数を作成しました。' },
      { kanji: 'メソッド', reading: 'めそっど', romaji: 'mesoddo', meaning: 'Method', example: 'このメソッドを呼び出します。' },
      { kanji: '引数', reading: 'ひきすう', romaji: 'hikisuu', meaning: 'Argument', example: '引数にユーザーIDを渡します。' },
      { kanji: '戻り値', reading: 'もどりち', romaji: 'modorichi', meaning: 'Return value', example: '戻り値はboolean型です。' },
      { kanji: '返り値', reading: 'かえりち', romaji: 'kaerichi', meaning: 'Return value', example: '返り値を確認してください。' },
      { kanji: '呼び出し', reading: 'よびだし', romaji: 'yobidashi', meaning: 'Call', example: 'APIの呼び出しに失敗しました。' },
      { kanji: '定義', reading: 'ていぎ', romaji: 'teigi', meaning: 'Definition', example: '関数の定義を移動しました。' },
      { kanji: '再帰', reading: 'さいき', romaji: 'saiki', meaning: 'Recursion', example: '再帰関数を使用しています。' },
      { kanji: 'オーバーロード', reading: 'おーばーろーど', romaji: 'oobaaroodo', meaning: 'Overload', example: 'メソッドをオーバーロードします。' },
      { kanji: 'スコープ', reading: 'すこーぷ', romaji: 'sukoopu', meaning: 'Scope', example: '変数のスコープを制限します。' }
    ],
    dialogue: [
      { speaker: 'Lead', japanese: 'この関数の引数は何を想定していますか？', meaning: 'What are the expected arguments for this function?' },
      { speaker: 'Dev', japanese: '文字列のリストを想定しています。戻り値は処理結果の数です。', meaning: 'It expects a list of strings. The return value is the count of processed results.' },
      { speaker: 'Lead', japanese: 'スコープが広すぎるので、プライベートメソッドにしましょう。', meaning: 'The scope is too wide, so let\'s make it a private method.' }
    ]
  },
  {
    id: 'prog-4',
    slug: 'object-oriented-programming',
    title: 'Object-Oriented Programming',
    category: 'Programming',
    difficulty: 'Intermediate',
    description: 'Discussing classes, objects, and inheritance.',
    isFree: true,
    learningObjective: 'Learn OOP concepts in Japanese.',
    aiPracticeTopicKey: 'free-3',
    vocabulary: [
      { kanji: 'クラス', reading: 'くらす', romaji: 'kurasu', meaning: 'Class', example: '基底クラスを作成します。' },
      { kanji: 'オブジェクト', reading: 'おぶじぇくと', romaji: 'obujekuto', meaning: 'Object', example: 'オブジェクトを生成します。' },
      { kanji: 'インスタンス', reading: 'いんすたんす', romaji: 'insutansu', meaning: 'Instance', example: 'インスタンス化を行います。' },
      { kanji: '継承', reading: 'けいしょう', romaji: 'keishou', meaning: 'Inheritance', example: 'このクラスを継承します。' },
      { kanji: 'カプセル化', reading: 'かぷせるか', romaji: 'kapuseruka', meaning: 'Encapsulation', example: 'カプセル化を意識してください。' },
      { kanji: 'ポリモーフィズム', reading: 'ぽりもーふぃずむ', romaji: 'porimoofizumu', meaning: 'Polymorphism', example: 'ポリモーフィズムを利用します。' },
      { kanji: '抽象クラス', reading: 'ちゅうしょうくらす', romaji: 'chuushou kurasu', meaning: 'Abstract class', example: '抽象クラスを定義します。' },
      { kanji: 'インターフェース', reading: 'いんたーふぇーす', romaji: 'intaafeesu', meaning: 'Interface', example: 'インターフェースを実装します。' },
      { kanji: 'プロパティ', reading: 'ぷろぱてぃ', romaji: 'puropati', meaning: 'Property', example: 'プロパティにアクセスします。' },
      { kanji: 'コンストラクタ', reading: 'こんすとらくた', romaji: 'konsutorakuta', meaning: 'Constructor', example: 'コンストラクタで初期設定を行います。' }
    ],
    dialogue: [
      { speaker: 'Senior', japanese: 'このクラス、継承関係が複雑すぎませんか？', meaning: 'Isn\'t the inheritance relationship of this class too complex?' },
      { speaker: 'Junior', japanese: 'はい、インターフェースを使ってリファクタリングする予定です。', meaning: 'Yes, I plan to refactor it using an interface.' },
      { speaker: 'Senior', japanese: 'いいですね。カプセル化も徹底してください。', meaning: 'Good. Please also ensure thorough encapsulation.' }
    ]
  },
  {
    id: 'prog-5',
    slug: 'error-handling-and-debugging',
    title: 'Error Handling & Debugging',
    category: 'Programming',
    difficulty: 'Intermediate',
    description: 'How to talk about bugs, errors, and fixing them.',
    isFree: true,
    learningObjective: 'Master terms for troubleshooting and error management.',
    aiPracticeTopicKey: 'free-3',
    vocabulary: [
      { kanji: '例外処理', reading: 'れいがいしょり', romaji: 'reigai shori', meaning: 'Exception handling', example: 'try-catchで例外処理を行います。' },
      { kanji: 'デバッグ', reading: 'でばっぐ', romaji: 'debaggu', meaning: 'Debugging', example: 'バグの原因をデバッグします。' },
      { kanji: '不具合', reading: 'ふぐあい', romaji: 'fuguai', meaning: 'Bug/Defect', example: '重大な不具合が見つかりました。' },
      { kanji: '修正', reading: 'しゅうせい', romaji: 'shuusei', meaning: 'Fix', example: 'コードを修正しました。' },
      { kanji: '検証', reading: 'けんしょう', romaji: 'kenshou', meaning: 'Verification', example: '修正内容を検証します。' },
      { kanji: '再現', reading: 'さいげん', romaji: 'saigen', meaning: 'Reproduction', example: 'エラーが再現しません。' },
      { kanji: 'ログ', reading: 'ろぐ', romaji: 'rogu', meaning: 'Log', example: 'エラーログを確認してください。' },
      { kanji: 'スタックトレース', reading: 'すたっくとれーす', romaji: 'sutakku toreesu', meaning: 'Stack trace', example: 'スタックトレースを解析します。' },
      { kanji: 'ブレークポイント', reading: 'ぶれーくぽいんと', romaji: 'bureeku pointo', meaning: 'Breakpoint', example: 'ブレークポイントを設定します。' },
      { kanji: '原因', reading: 'げんいん', romaji: 'genin', meaning: 'Cause', example: '原因を特定しました。' }
    ],
    dialogue: [
      { speaker: 'Dev A', japanese: '本番環境で不具合が発生しました。', meaning: 'A bug occurred in the production environment.' },
      { speaker: 'Dev B', japanese: 'ログを確認して、エラーを再現できますか？', meaning: 'Can you check the logs and reproduce the error?' },
      { speaker: 'Dev A', japanese: 'はい、スタックトレースから原因を特定中です。', meaning: 'Yes, I am identifying the cause from the stack trace.' }
    ]
  }
];
