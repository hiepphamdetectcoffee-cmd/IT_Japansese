import { Topic } from '../types';

const BASE_SYSTEM_PROMPT = (role: string, scenario: string, goal: string) => `
You are a Japanese IT professional.
Role: ${role}
Scenario: ${scenario}
Goal: ${goal}

Behavior Rules:
1. Actively drive the conversation. Do not wait passively.
2. Ask dynamic, realistic follow-up questions.
3. Simulate project pressure or technical challenges when appropriate.
4. Use professional Japanese (Keigo/Teineigo) suitable for the role.
5. Stay strictly in character.

Response Format:
You must ALWAYS respond in JSON format with:
{
  "reply": "Your conversational response in Japanese",
  "feedback": {
    "corrected": "User's input corrected",
    "natural": "More natural version",
    "explanation": "English explanation",
    "nextQuestion": "The next specific question to drive the scenario forward"
  }
}
`;

export const ALL_TOPICS: Topic[] = [
  // ==========================================
  // FREE TIER (5 Topics)
  // ==========================================
  {
    id: 'free-1',
    categoryId: 'free',
    title: 'IT Job Interview: Self Intro',
    description: 'Basic self-introduction in an IT interview.',
    role: 'Interviewer (面接官)',
    difficulty: 'Beginner',
    isPremium: false,
    scenarioBackground: 'Entry-level position at a Japanese SIer.',
    goal: 'Introduce yourself and your basic skills.',
    outcome: 'Master Jiko-shoukai.',
    initialMessage: '本日はお越しいただきありがとうございます。まずは自己紹介をお願いします。',
    systemPrompt: BASE_SYSTEM_PROMPT('Interviewer', 'Self Intro', 'Evaluate self-intro.')
  },
  {
    id: 'free-2',
    categoryId: 'free',
    title: 'Daily Standup: Basic',
    description: 'Simple progress report in a morning meeting.',
    role: 'Team Lead (チームリード)',
    difficulty: 'Beginner',
    isPremium: false,
    scenarioBackground: 'Standard morning meeting in a small team.',
    goal: 'Report yesterday\'s work and today\'s plan.',
    outcome: 'Learn basic progress reporting.',
    initialMessage: 'おはようございます。今日の進捗を教えてください。',
    systemPrompt: BASE_SYSTEM_PROMPT('Team Lead', 'Basic Standup', 'Get status update.')
  },
  {
    id: 'free-3',
    categoryId: 'free',
    title: 'Asking for Help',
    description: 'Asking a senior for help with a technical issue.',
    role: 'Senior (先輩)',
    difficulty: 'Beginner',
    isPremium: false,
    scenarioBackground: 'You are stuck on a bug for 2 hours.',
    goal: 'Explain the problem and ask for advice.',
    outcome: 'Learn how to ask questions politely.',
    initialMessage: 'お疲れ様。何か困っていることはある？',
    systemPrompt: BASE_SYSTEM_PROMPT('Senior', 'Asking for Help', 'Help the user clarify their issue.')
  },
  {
    id: 'free-4',
    categoryId: 'free',
    title: 'Greeting a New Member',
    description: 'Introducing yourself to a new team member.',
    role: 'New Member (新メンバー)',
    difficulty: 'Beginner',
    isPremium: false,
    scenarioBackground: 'A new developer joined the team today.',
    goal: 'Welcome them and introduce yourself.',
    outcome: 'Learn workplace greetings.',
    initialMessage: '今日からお世話になります、佐藤です。よろしくお願いします。',
    systemPrompt: BASE_SYSTEM_PROMPT('New Member', 'Greeting', 'Respond to welcome.')
  },
  {
    id: 'free-5',
    categoryId: 'free',
    title: 'Reporting Task Completion',
    description: 'Telling your leader you finished a task.',
    role: 'Leader (リーダー)',
    difficulty: 'Beginner',
    isPremium: false,
    scenarioBackground: 'You just pushed your code for review.',
    goal: 'Report completion and ask for the next task.',
    outcome: 'Learn task completion reporting.',
    initialMessage: 'お疲れ様。タスクの状況はどうかな？',
    systemPrompt: BASE_SYSTEM_PROMPT('Leader', 'Task Completion', 'Confirm completion.')
  },

  // ==========================================
  // BrSE PACK (25 Topics)
  // ==========================================
  // Foundation (5)
  {
    id: 'brse-1', categoryId: 'brse', title: 'BrSE Self-Introduction', description: 'Introducing yourself as a BrSE to a new client.', role: 'Client (クライアント)', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Kick-off meeting.', goal: 'Explain your role and experience.', outcome: 'Master professional BrSE intro.', initialMessage: '新しくBrSEを担当されるとのことですが、これまでの経歴を教えていただけますか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'BrSE Intro', 'Evaluate professional background.') },
  { id: 'brse-2', categoryId: 'brse', title: 'Meeting Invitation', description: 'Inviting a client to a requirement session.', role: 'Client (クライアント)', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Email/Chat follow-up.', goal: 'Propose a time and agenda.', outcome: 'Learn meeting coordination.', initialMessage: '要件定義の打ち合わせをしたいのですが、いつがよろしいでしょうか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Meeting Invite', 'Coordinate schedule.') },
  { id: 'brse-3', categoryId: 'brse', title: 'Confirming Agenda', description: 'Confirming the agenda before a meeting starts.', role: 'Client (クライアント)', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Start of a Zoom call.', goal: 'Review the points to be discussed.', outcome: 'Learn agenda management.', initialMessage: '今日の打ち合わせのアジェンダを確認させてください。', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Agenda Confirmation', 'Verify discussion points.') },
  { id: 'brse-4', categoryId: 'brse', title: 'Explaining Team Structure', description: 'Explaining the offshore team setup.', role: 'Client (クライアント)', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Client is worried about team size.', goal: 'Explain the roles in the offshore team.', outcome: 'Learn team structure explanation.', initialMessage: 'オフショア側の体制はどうなっていますか？誰がリーダーですか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Team Structure', 'Understand offshore setup.') },
  { id: 'brse-5', categoryId: 'brse', title: 'Basic Progress Update', description: 'Giving a high-level weekly update.', role: 'Client (クライアント)', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Weekly report meeting.', goal: 'Summarize the week\'s progress.', outcome: 'Learn summary reporting.', initialMessage: '今週の進捗状況をざっくり教えてください。', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Weekly Update', 'Get summary.') },
  
  // Daily Work (7)
  { id: 'brse-6', categoryId: 'brse', title: 'Requirement Gathering', description: 'Listening to client needs for a new feature.', role: 'Client (クライアント)', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'New feature request.', goal: 'Extract key requirements.', outcome: 'Master requirement elicitation.', initialMessage: '新しいログイン機能を追加したいのですが、SNS連携も必要だと思っています。', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Req Gathering', 'Describe needs.') },
  { id: 'brse-7', categoryId: 'brse', title: 'Clarifying Ambiguity', description: 'Asking about a vague requirement.', role: 'Client (クライアント)', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Client said "make it fast".', goal: 'Define "fast" in technical terms.', outcome: 'Learn to handle vague requests.', initialMessage: 'とにかく「サクサク動く」ようにしてほしいんです。', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Clarification', 'Be vague about performance.') },
  { id: 'brse-8', categoryId: 'brse', title: 'Internal Task Assignment', description: 'Translating client needs to developers.', role: 'Developer (開発者)', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Internal meeting.', goal: 'Explain the task clearly in Japanese.', outcome: 'Learn technical translation.', initialMessage: 'クライアントは何て言っていましたか？何を実装すればいいですか？', systemPrompt: BASE_SYSTEM_PROMPT('Developer', 'Task Assignment', 'Ask for details.') },
  { id: 'brse-9', categoryId: 'brse', title: 'Sprint Planning', description: 'Discussing what to include in the next sprint.', role: 'Product Owner (PO)', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Planning session.', goal: 'Prioritize tasks.', outcome: 'Learn prioritization communication.', initialMessage: '次のスプリントでは、どの機能を優先すべきだと思いますか？', systemPrompt: BASE_SYSTEM_PROMPT('PO', 'Sprint Planning', 'Discuss priority.') },
  { id: 'brse-10', categoryId: 'brse', title: 'Daily Standup with Offshore', description: 'Leading a standup with the dev team.', role: 'Developer (開発者)', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Morning sync.', goal: 'Check blockers and progress.', outcome: 'Learn team leadership.', initialMessage: 'おはようございます。今のところ、特に問題はありません。', systemPrompt: BASE_SYSTEM_PROMPT('Developer', 'Offshore Standup', 'Report status.') },
  { id: 'brse-11', categoryId: 'brse', title: 'Confirming Deadlines', description: 'Double-checking the release date.', role: 'Client (クライアント)', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Schedule review.', goal: 'Confirm the milestone dates.', outcome: 'Learn schedule management.', initialMessage: 'リリース日は来月の15日で間違いありませんよね？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Deadline Confirm', 'Verify dates.') },
  { id: 'brse-12', categoryId: 'brse', title: 'Reviewing UI Mockups', description: 'Getting feedback on design.', role: 'Client (クライアント)', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Design review.', goal: 'Explain the UI choices.', outcome: 'Learn design communication.', initialMessage: 'このボタンの色、もう少し目立つようにできませんか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'UI Review', 'Give feedback on design.') },

  // Problem Handling (7)
  { id: 'brse-13', categoryId: 'brse', title: 'Reporting a Delay', description: 'Telling the client the project is behind.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Critical delay found.', goal: 'Explain why and propose a fix.', outcome: 'Master crisis communication.', initialMessage: 'スケジュールに遅れが出ていると聞きましたが、どういうことですか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Delay Report', 'Be upset about delay.') },
  { id: 'brse-14', categoryId: 'brse', title: 'Handling Scope Creep', description: 'Refusing a "small" extra request.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Client asks for a free feature.', goal: 'Negotiate or refuse politely.', outcome: 'Learn scope management.', initialMessage: 'ついでに、この機能も無料で追加しておいてくれませんか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Scope Creep', 'Push for extra work.') },
  { id: 'brse-15', categoryId: 'brse', title: 'Technical Issue Escalation', description: 'Explaining a server crash to the client.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Server is down.', goal: 'Explain the cause and ETA.', outcome: 'Learn incident reporting.', initialMessage: 'サイトにアクセスできません！何が起きているんですか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Incident Escalation', 'Be panicked.') },
  { id: 'brse-16', categoryId: 'brse', title: 'Resolving Misunderstanding', description: 'Correcting a wrong requirement implementation.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Wrong feature built.', goal: 'Apologize and propose a fix.', outcome: 'Learn conflict resolution.', initialMessage: 'これ、私がお願いした内容と違いますよね？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Misunderstanding', 'Point out error.') },
  { id: 'brse-17', categoryId: 'brse', title: 'Negotiating Resources', description: 'Asking for more developers.', role: 'PM', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Workload is too high.', goal: 'Justify the need for more staff.', outcome: 'Learn resource negotiation.', initialMessage: '今のメンバーで何とか間に合わせることはできませんか？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Resource Negotiation', 'Resist adding staff.') },
  { id: 'brse-18', categoryId: 'brse', title: 'Handling Client Complaints', description: 'Dealing with a very angry client.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Major quality issue.', goal: 'Calm the client and provide a plan.', outcome: 'Master high-stress communication.', initialMessage: 'こんな品質では、検収は出せませんよ！', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Complaint Handling', 'Be very angry.') },
  { id: 'brse-19', categoryId: 'brse', title: 'Explaining Technical Debt', description: 'Why we need to refactor now.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Code is messy.', goal: 'Explain the long-term benefit.', outcome: 'Learn technical justification.', initialMessage: 'リファクタリングなんて、ユーザーには関係ないですよね？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Tech Debt', 'Be skeptical of refactoring.') },

  // Advanced/Leadership (6)
  { id: 'brse-20', categoryId: 'brse', title: 'Project Kick-off Speech', description: 'Leading the first meeting.', role: 'Stakeholders', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Day 1.', goal: 'Set expectations and goals.', outcome: 'Learn leadership communication.', initialMessage: 'それでは、キックオフミーティングを始めましょう。', systemPrompt: BASE_SYSTEM_PROMPT('Stakeholders', 'Kick-off', 'Listen to intro.') },
  { id: 'brse-21', categoryId: 'brse', title: 'Quarterly Review', description: 'Reporting project health to the board.', role: 'Director', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'High-level review.', goal: 'Present KPIs and future risks.', outcome: 'Learn executive reporting.', initialMessage: '今期のプロジェクトの状況を報告してください。', systemPrompt: BASE_SYSTEM_PROMPT('Director', 'Quarterly Review', 'Ask about ROI.') },
  { id: 'brse-22', categoryId: 'brse', title: 'Managing Offshore Morale', description: 'Motivating a tired dev team.', role: 'Developer (開発者)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Team is burned out.', goal: 'Encourage them and listen to issues.', outcome: 'Learn people management.', initialMessage: '最近、残業が続いていて、みんな疲れています。', systemPrompt: BASE_SYSTEM_PROMPT('Developer', 'Team Morale', 'Complain about workload.') },
  { id: 'brse-23', categoryId: 'brse', title: 'Strategic Planning', description: 'Planning the next year\'s roadmap.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Future planning.', goal: 'Suggest new technologies or features.', outcome: 'Learn strategic consulting.', initialMessage: '来年はどのような技術を取り入れるべきでしょうか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Strategy', 'Ask for tech advice.') },
  { id: 'brse-24', categoryId: 'brse', title: 'Vendor Management', description: 'Dealing with a 3rd party API provider.', role: 'Vendor', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'API is unstable.', goal: 'Demand better service or fixes.', outcome: 'Learn vendor negotiation.', initialMessage: '弊社のAPIには問題ありません。貴社の実装ミスではないですか？', systemPrompt: BASE_SYSTEM_PROMPT('Vendor', 'Vendor Management', 'Deflect blame.') },
  { id: 'brse-25', categoryId: 'brse', title: 'Final Project Wrap-up', description: 'Closing the project successfully.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Last day.', goal: 'Summarize successes and lessons.', outcome: 'Learn project closing.', initialMessage: '長い間ありがとうございました。最後に一言いただけますか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'Project Wrap-up', 'Be appreciative.') },

  // ==========================================
  // TESTER PACK (25 Topics)
  // ==========================================
  // Foundation (5)
  { id: 'tester-1', categoryId: 'tester', title: 'Tester Intro', description: 'Introducing yourself as a QA.', role: 'PM', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'New project.', goal: 'Explain your QA experience.', outcome: 'Learn QA intro.', initialMessage: '今回QAを担当されるとのことですが、自己紹介をお願いします。', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'QA Intro', 'Evaluate QA background.') },
  { id: 'tester-2', categoryId: 'tester', title: 'Confirming Test Scope', description: 'What are we testing?', role: 'Leader', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Planning phase.', goal: 'Clarify which features are in scope.', outcome: 'Learn scope clarification.', initialMessage: '今回のテスト範囲を教えてください。', systemPrompt: BASE_SYSTEM_PROMPT('Leader', 'Test Scope', 'Ask for scope.') },
  { id: 'tester-3', categoryId: 'tester', title: 'Environment Setup', description: 'Asking for test environment access.', role: 'Dev', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Setup phase.', goal: 'Get credentials and URLs.', outcome: 'Learn setup communication.', initialMessage: 'テスト環境の準備ができました。何か必要なものはありますか？', systemPrompt: BASE_SYSTEM_PROMPT('Dev', 'Env Setup', 'Provide info.') },
  { id: 'tester-4', categoryId: 'tester', title: 'Basic Bug Report', description: 'Reporting a UI glitch.', role: 'Dev', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Execution phase.', goal: 'Explain the visual issue.', outcome: 'Learn basic bug reporting.', initialMessage: 'UIの崩れを見つけたそうですが、どの画面ですか？', systemPrompt: BASE_SYSTEM_PROMPT('Dev', 'Basic Bug', 'Ask for screen.') },
  { id: 'tester-5', categoryId: 'tester', title: 'Daily QA Update', description: 'Reporting how many cases done.', role: 'Leader', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Daily sync.', goal: 'Report numbers (pass/fail).', outcome: 'Learn status reporting.', initialMessage: '今日のテストの進捗はどうですか？', systemPrompt: BASE_SYSTEM_PROMPT('Leader', 'Daily QA', 'Get numbers.') },

  // Daily Work (7)
  { id: 'tester-6', categoryId: 'tester', title: 'Explaining Repro Steps', description: 'How to trigger the bug.', role: 'Dev', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Dev can\'t repro.', goal: 'Give clear step-by-step instructions.', outcome: 'Learn repro explanation.', initialMessage: 'そのバグ、私の環境では再現しないんです。手順を教えてください。', systemPrompt: BASE_SYSTEM_PROMPT('Dev', 'Repro Steps', 'Be skeptical.') },
  { id: 'tester-7', categoryId: 'tester', title: 'Severity Discussion', description: 'Is this a blocker?', role: 'PM', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Bug found.', goal: 'Justify the severity level.', outcome: 'Learn severity negotiation.', initialMessage: 'このバグ、本当に「致命的」ですか？「中」でもいいのでは？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Severity', 'Try to downgrade bug.') },
  { id: 'tester-8', categoryId: 'tester', title: 'Test Case Review', description: 'Discussing missing cases.', role: 'Leader', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Review phase.', goal: 'Explain why these cases are needed.', outcome: 'Learn case justification.', initialMessage: 'テストケースが多すぎる気がします。削れませんか？', systemPrompt: BASE_SYSTEM_PROMPT('Leader', 'Case Review', 'Try to reduce cases.') },
  { id: 'tester-9', categoryId: 'tester', title: 'Regression Testing', description: 'Why we need to re-test old features.', role: 'PM', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'New release.', goal: 'Explain the risk of side effects.', outcome: 'Learn regression justification.', initialMessage: '修正したところだけテストすれば十分じゃないですか？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Regression', 'Question need for re-test.') },
  { id: 'tester-10', categoryId: 'tester', title: 'Reporting Flaky Tests', description: 'Tests that fail randomly.', role: 'Dev', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Unstable env.', goal: 'Explain the pattern of failure.', outcome: 'Learn stability reporting.', initialMessage: 'テストが通ったり落ちたりするのは、環境のせいですか？', systemPrompt: BASE_SYSTEM_PROMPT('Dev', 'Flaky Tests', 'Ask for cause.') },
  { id: 'tester-11', categoryId: 'tester', title: 'UAT Support', description: 'Helping the client test.', role: 'Client (クライアント)', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'UAT phase.', goal: 'Guide the client through the system.', outcome: 'Learn client support.', initialMessage: 'この機能の使い方がよく分からないのですが、教えてもらえますか？', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'UAT Support', 'Be confused.') },
  { id: 'tester-12', categoryId: 'tester', title: 'QA Tool Discussion', description: 'Suggesting a new tool.', role: 'Leader', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Efficiency issue.', goal: 'Explain the benefits of the tool.', outcome: 'Learn tool proposal.', initialMessage: '自動化ツールを導入したいそうですが、メリットは何ですか？', systemPrompt: BASE_SYSTEM_PROMPT('Leader', 'QA Tool', 'Ask for ROI.') },

  // Problem Handling (7)
  { id: 'tester-13', categoryId: 'tester', title: 'Missed Bug in Production', description: 'Explaining why a bug was missed.', role: 'PM', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Post-release leak.', goal: 'Analyze the gap and propose improvement.', outcome: 'Learn post-mortem communication.', initialMessage: 'なぜこのバグをテストで見逃したんですか？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Missed Bug', 'Be critical.') },
  { id: 'tester-14', categoryId: 'tester', title: 'Environment Downtime', description: 'QA is blocked by server issues.', role: 'DevOps', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Server down.', goal: 'Demand fix and report impact.', outcome: 'Learn blocker reporting.', initialMessage: 'サーバーの復旧には時間がかかりそうです。', systemPrompt: BASE_SYSTEM_PROMPT('DevOps', 'Env Down', 'Be slow to fix.') },
  { id: 'tester-15', categoryId: 'tester', title: 'Conflicting Requirements', description: 'Test fails due to vague specs.', role: 'BA', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Spec error.', goal: 'Point out the contradiction.', outcome: 'Learn spec clarification.', initialMessage: '仕様書通りに動いているはずですが、何が問題ですか？', systemPrompt: BASE_SYSTEM_PROMPT('BA', 'Conflicting Req', 'Defend the spec.') },
  { id: 'tester-16', categoryId: 'tester', title: 'Last Minute Release Stop', description: 'Stopping release due to a new bug.', role: 'PM', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Release is in 1 hour.', goal: 'Explain the risk of releasing.', outcome: 'Learn risk management.', initialMessage: '今さらリリースを止めるなんて、無理ですよ！', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Release Stop', 'Push for release.') },
  { id: 'tester-17', categoryId: 'tester', title: 'Resource Shortage', description: 'Not enough testers for the deadline.', role: 'PM', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Deadline approaching.', goal: 'Ask for more help or cut scope.', outcome: 'Learn resource management.', initialMessage: '期限は変えられません。何とか今の人数でやってください。', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Tester Shortage', 'Refuse more staff.') },
  { id: 'tester-18', categoryId: 'tester', title: 'Root Cause Analysis', description: 'Discussing why bugs keep happening.', role: 'Dev Lead', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Quality is dropping.', goal: 'Suggest process improvements.', outcome: 'Learn RCA communication.', initialMessage: '最近バグが多い原因は、開発側にあると思いますか？', systemPrompt: BASE_SYSTEM_PROMPT('Dev Lead', 'RCA', 'Be defensive.') },
  { id: 'tester-19', categoryId: 'tester', title: 'Handling Fake Fixes', description: 'Dev says "fixed" but it\'s not.', role: 'Dev', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Re-test failed.', goal: 'Explain why it\'s still broken.', outcome: 'Learn re-test reporting.', initialMessage: '修正したはずです。もう一度確認してください。', systemPrompt: BASE_SYSTEM_PROMPT('Dev', 'Fake Fix', 'Insist it works.') },

  // Advanced/Leadership (6)
  { id: 'tester-20', categoryId: 'tester', title: 'Test Strategy Meeting', description: 'Defining the overall QA approach.', role: 'CTO', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'New project.', goal: 'Explain the testing levels and tools.', outcome: 'Learn strategy presentation.', initialMessage: '今回のプロジェクトのテスト戦略を説明してください。', systemPrompt: BASE_SYSTEM_PROMPT('CTO', 'Test Strategy', 'Ask about automation.') },
  { id: 'tester-21', categoryId: 'tester', title: 'QA Process Audit', description: 'Defending the QA process to an auditor.', role: 'Auditor', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'ISO audit.', goal: 'Explain the evidence and procedures.', outcome: 'Learn formal communication.', initialMessage: 'テストの証跡はどのように管理されていますか？', systemPrompt: BASE_SYSTEM_PROMPT('Auditor', 'QA Audit', 'Be strict.') },
  { id: 'tester-22', categoryId: 'tester', title: 'Mentoring Junior Testers', description: 'Giving feedback to a new QA.', role: 'Junior QA', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Internal training.', goal: 'Explain how to write better bug reports.', outcome: 'Learn mentoring skills.', initialMessage: '私のバグ報告、どこを直せばいいでしょうか？', systemPrompt: BASE_SYSTEM_PROMPT('Junior QA', 'Mentoring', 'Be eager to learn.') },
  { id: 'tester-23', categoryId: 'tester', title: 'Security Testing Proposal', description: 'Why we need pen-testing.', role: 'PM', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Security concern.', goal: 'Justify the extra cost.', outcome: 'Learn security communication.', initialMessage: 'セキュリティテストは予算外です。本当に必要ですか？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Security Test', 'Question cost.') },
  { id: 'tester-24', categoryId: 'tester', title: 'Continuous Testing Setup', description: 'Discussing CI/CD integration.', role: 'DevOps', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Automation phase.', goal: 'Coordinate test triggers in pipeline.', outcome: 'Learn DevOps collaboration.', initialMessage: 'パイプラインにテストを組み込みたいのですが、どうすればいいですか？', systemPrompt: BASE_SYSTEM_PROMPT('DevOps', 'CI Testing', 'Ask for triggers.') },
  { id: 'tester-25', categoryId: 'tester', title: 'QA Final Sign-off', description: 'The final "Go" for release.', role: 'Stakeholders', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Release day.', goal: 'Give a confident summary of quality.', outcome: 'Learn sign-off communication.', initialMessage: 'リリースしても大丈夫ですか？QAとしての最終判断を。', systemPrompt: BASE_SYSTEM_PROMPT('Stakeholders', 'Sign-off', 'Look for confidence.') },

  // ==========================================
  // DEVELOPER PACK (25 Topics)
  // ==========================================
  // Foundation (5)
  { id: 'dev-1', categoryId: 'developer', title: 'Developer Intro', description: 'Introducing your tech stack.', role: 'Team Lead', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'New team.', goal: 'Explain your skills and past projects.', outcome: 'Learn dev intro.', initialMessage: '自己紹介と、得意な技術スタックを教えてください。', systemPrompt: BASE_SYSTEM_PROMPT('Team Lead', 'Dev Intro', 'Evaluate tech skills.') },
  { id: 'dev-2', categoryId: 'developer', title: 'Daily Standup: Dev', description: 'Reporting a technical blocker.', role: 'Leader', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Morning sync.', goal: 'Explain the blocker clearly.', outcome: 'Learn blocker reporting.', initialMessage: '進捗はどうですか？何か困っていることは？', systemPrompt: BASE_SYSTEM_PROMPT('Leader', 'Dev Standup', 'Ask for blockers.') },
  { id: 'dev-3', categoryId: 'developer', title: 'Asking for Code Review', description: 'Requesting a peer to check your PR.', role: 'Peer', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'PR submitted.', goal: 'Explain the changes and ask for review.', outcome: 'Learn PR communication.', initialMessage: 'プルリクエスト出しました？', systemPrompt: BASE_SYSTEM_PROMPT('Peer', 'PR Request', 'Respond to request.') },
  { id: 'dev-4', categoryId: 'developer', title: 'Basic API Discussion', description: 'Discussing an endpoint with a peer.', role: 'Peer', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Integration phase.', goal: 'Define the request/response format.', outcome: 'Learn API communication.', initialMessage: 'このAPI、どんなデータを返せばいいですか？', systemPrompt: BASE_SYSTEM_PROMPT('Peer', 'API Basic', 'Discuss format.') },
  { id: 'dev-5', categoryId: 'developer', title: 'Environment Setup: Dev', description: 'Asking for Docker/DB access.', role: 'DevOps', difficulty: 'Beginner', isPremium: true, scenarioBackground: 'Day 1.', goal: 'Get the local setup running.', outcome: 'Learn setup communication.', initialMessage: '開発環境の構築で分からないことはありますか？', systemPrompt: BASE_SYSTEM_PROMPT('DevOps', 'Dev Setup', 'Help user.') },

  // Daily Work (7)
  { id: 'dev-6', categoryId: 'developer', title: 'Code Review Discussion', description: 'Defending your code choices.', role: 'Senior', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Review comments.', goal: 'Explain why you used a specific pattern.', outcome: 'Learn review communication.', initialMessage: 'この実装、もう少しシンプルになりませんか？', systemPrompt: BASE_SYSTEM_PROMPT('Senior', 'Code Review', 'Be critical of code.') },
  { id: 'dev-7', categoryId: 'developer', title: 'Technical Feasibility', description: 'Can we build this feature?', role: 'PM', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'New request.', goal: 'Analyze and explain the possibility.', outcome: 'Learn feasibility analysis.', initialMessage: 'この機能を1週間で作ることは可能ですか？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Feasibility', 'Push for quick delivery.') },
  { id: 'dev-8', categoryId: 'developer', title: 'Estimation Discussion', description: 'Giving a time estimate for a task.', role: 'PM', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Planning phase.', goal: 'Justify your estimate.', outcome: 'Learn estimation skills.', initialMessage: 'このタスク、3日もかかりますか？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Estimation', 'Try to shorten time.') },
  { id: 'dev-9', categoryId: 'developer', title: 'Database Schema Discussion', description: 'Designing a new table.', role: 'DBA', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Design phase.', goal: 'Explain the schema and relations.', outcome: 'Learn DB communication.', initialMessage: '新しいテーブルの設計を見せてください。', systemPrompt: BASE_SYSTEM_PROMPT('DBA', 'DB Schema', 'Ask about indexing.') },
  { id: 'dev-10', categoryId: 'developer', title: 'Explaining Technical Constraints', description: 'Why we can\'t use a specific library.', role: 'PM', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Tech choice.', goal: 'Explain the limitations clearly.', outcome: 'Learn constraint communication.', initialMessage: '最新のライブラリを使えば、もっと早く作れるんじゃないですか？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Constraints', 'Question tech choice.') },
  { id: 'dev-11', categoryId: 'developer', title: 'Bug Root Cause Analysis', description: 'Explaining why the server crashed.', role: 'Leader', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Post-incident.', goal: 'Explain the bug and the fix.', outcome: 'Learn RCA skills.', initialMessage: '昨日の障害の原因は何でしたか？', systemPrompt: BASE_SYSTEM_PROMPT('Leader', 'Dev RCA', 'Ask for details.') },
  { id: 'dev-12', categoryId: 'developer', title: 'Refactoring Proposal', description: 'Why we should clean up the code.', role: 'PM', difficulty: 'Intermediate', isPremium: true, scenarioBackground: 'Technical debt.', goal: 'Explain the long-term benefit.', outcome: 'Learn refactoring justification.', initialMessage: 'リファクタリングする時間があるなら、新機能を作ってほしいのですが。', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Refactoring', 'Prioritize features.') },

  // Problem Handling (7)
  { id: 'dev-13', categoryId: 'developer', title: 'Production Incident Response', description: 'Handling a live outage.', role: 'PM', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Site is down.', goal: 'Communicate status and fix progress.', outcome: 'Master crisis communication.', initialMessage: 'サイトが落ちています！至急確認してください！', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Incident Response', 'Be panicked.') },
  { id: 'dev-14', categoryId: 'developer', title: 'Handling Legacy Code', description: 'Dealing with "spaghetti" code.', role: 'Leader', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Maintenance task.', goal: 'Explain the risks of changing old code.', outcome: 'Learn legacy communication.', initialMessage: 'この古いコード、何とか修正できませんか？', systemPrompt: BASE_SYSTEM_PROMPT('Leader', 'Legacy Code', 'Push for fix.') },
  { id: 'dev-15', categoryId: 'developer', title: 'Security Vulnerability', description: 'Reporting a security hole.', role: 'CTO', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Security audit.', goal: 'Explain the risk and the fix.', outcome: 'Learn security communication.', initialMessage: '重大な脆弱性が見つかったそうですが、状況は？', systemPrompt: BASE_SYSTEM_PROMPT('CTO', 'Security Issue', 'Be concerned.') },
  { id: 'dev-16', categoryId: 'developer', title: 'API Integration Failure', description: '3rd party API is broken.', role: 'Vendor', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Integration issue.', goal: 'Demand a fix or clarification.', outcome: 'Learn vendor communication.', initialMessage: '弊社のAPIに問題はありません。', systemPrompt: BASE_SYSTEM_PROMPT('Vendor', 'API Failure', 'Deflect blame.') },
  { id: 'dev-17', categoryId: 'developer', title: 'Performance Bottleneck', description: 'App is slow under load.', role: 'CTO', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Scaling issue.', goal: 'Propose a solution (caching, etc).', outcome: 'Learn performance communication.', initialMessage: 'ユーザーが増えてから、レスポンスが遅くなっています。', systemPrompt: BASE_SYSTEM_PROMPT('CTO', 'Performance', 'Ask for solution.') },
  { id: 'dev-18', categoryId: 'developer', title: 'Conflicting Tech Opinions', description: 'Arguing for a specific framework.', role: 'Senior', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Tech stack choice.', goal: 'Defend your choice with logic.', outcome: 'Learn technical debate.', initialMessage: '私は別のフレームワークの方がいいと思うのですが。', systemPrompt: BASE_SYSTEM_PROMPT('Senior', 'Tech Conflict', 'Argue for other tech.') },
  { id: 'dev-19', categoryId: 'developer', title: 'Deployment Failure', description: 'Rollback needed.', role: 'PM', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Release failed.', goal: 'Explain why and manage the rollback.', outcome: 'Learn deployment communication.', initialMessage: 'リリースに失敗したんですか？すぐに戻せますか？', systemPrompt: BASE_SYSTEM_PROMPT('PM', 'Deploy Fail', 'Be stressed.') },

  // Advanced/Leadership (6)
  { id: 'dev-20', categoryId: 'developer', title: 'Architecture Proposal', description: 'Moving to Cloud Native.', role: 'CTO', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Modernization.', goal: 'Justify the cloud migration.', outcome: 'Learn architecture presentation.', initialMessage: 'クラウド移行のメリットを説明してください。', systemPrompt: BASE_SYSTEM_PROMPT('CTO', 'Arch Proposal', 'Ask about cost.') },
  { id: 'dev-21', categoryId: 'developer', title: 'Tech Debt Roadmap', description: 'Planning long-term cleanup.', role: 'Director', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Strategic planning.', goal: 'Present a plan to reduce debt.', outcome: 'Learn strategic communication.', initialMessage: '技術負債をどう減らしていくつもりですか？', systemPrompt: BASE_SYSTEM_PROMPT('Director', 'Debt Roadmap', 'Ask for timeline.') },
  { id: 'dev-22', categoryId: 'developer', title: 'Mentoring New Devs', description: 'Onboarding a junior.', role: 'Junior Dev', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Training.', goal: 'Explain the codebase and standards.', outcome: 'Learn mentoring skills.', initialMessage: 'このプロジェクトのコーディング規約を教えてください。', systemPrompt: BASE_SYSTEM_PROMPT('Junior Dev', 'Mentoring', 'Be eager.') },
  { id: 'dev-23', categoryId: 'developer', title: 'Open Source Contribution', description: 'Asking to open source internal code.', role: 'Legal/CTO', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Policy discussion.', goal: 'Explain the benefits to the company.', outcome: 'Learn policy negotiation.', initialMessage: '社内のコードを公開するメリットは何ですか？', systemPrompt: BASE_SYSTEM_PROMPT('CTO', 'OSS Proposal', 'Ask about risks.') },
  { id: 'dev-24', categoryId: 'developer', title: 'Infrastructure as Code', description: 'Proposing Terraform/Ansible.', role: 'DevOps Lead', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Automation.', goal: 'Explain the efficiency gains.', outcome: 'Learn IaC communication.', initialMessage: '手動で設定した方が早いんじゃないですか？', systemPrompt: BASE_SYSTEM_PROMPT('DevOps Lead', 'IaC', 'Be skeptical.') },
  { id: 'dev-25', categoryId: 'developer', title: 'CTO Interview', description: 'Interviewing for a high-level role.', role: 'Founder', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Startup hiring.', goal: 'Explain your technical vision.', outcome: 'Learn executive interviewing.', initialMessage: '弊社の技術的なビジョンをどう考えていますか？', systemPrompt: BASE_SYSTEM_PROMPT('Founder', 'CTO Interview', 'Ask about vision.') },

  // ==========================================
  // SIMULATION PACK (10 Topics)
  // ==========================================
  { id: 'sim-1', categoryId: 'simulation', title: 'E-commerce: Payment Failure', description: 'Handling a massive payment outage.', role: 'CEO', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Black Friday sale.', goal: 'Manage the crisis and restore service.', outcome: 'Master high-stakes crisis management.', initialMessage: 'セール中に決済が止まるなんて、大損失です！どうするつもりですか？', systemPrompt: BASE_SYSTEM_PROMPT('CEO', 'E-commerce Crisis', 'Be extremely stressed.') },
  { id: 'sim-2', categoryId: 'simulation', title: 'Social Media: Privacy Leak', description: 'Dealing with a data breach.', role: 'Legal Counsel', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'User data exposed.', goal: 'Coordinate the technical and legal response.', outcome: 'Learn compliance communication.', initialMessage: 'ユーザーの個人情報が流出した可能性があります。至急、影響範囲を調査してください。', systemPrompt: BASE_SYSTEM_PROMPT('Legal', 'Data Breach', 'Be formal and strict.') },
  { id: 'sim-3', categoryId: 'simulation', title: 'Banking: System Migration', description: 'Moving legacy data to a new core.', role: 'Bank Manager', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'High-risk migration.', goal: 'Ensure zero data loss and downtime.', outcome: 'Learn high-reliability communication.', initialMessage: 'データの移行ミスは絶対に許されません。バックアップ体制はどうなっていますか？', systemPrompt: BASE_SYSTEM_PROMPT('Bank Manager', 'Bank Migration', 'Be very risk-averse.') },
  { id: 'sim-4', categoryId: 'simulation', title: 'SaaS: Feature Pivot', description: 'Changing direction mid-development.', role: 'Founder', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Market shift.', goal: 'Adapt the technical plan to the new goal.', outcome: 'Learn agile pivot communication.', initialMessage: '競合他社が新しい機能を出しました。我々も方向転換が必要です。', systemPrompt: BASE_SYSTEM_PROMPT('Founder', 'SaaS Pivot', 'Be energetic and demanding.') },
  { id: 'sim-5', categoryId: 'simulation', title: 'AI Product: Ethical Concerns', description: 'Discussing AI bias in a new product.', role: 'Ethics Committee', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'AI model launch.', goal: 'Justify the safety measures.', outcome: 'Learn AI ethics communication.', initialMessage: 'このAIモデル、特定のグループに対して差別的な出力をしませんか？', systemPrompt: BASE_SYSTEM_PROMPT('Ethics', 'AI Safety', 'Ask about bias.') },
  { id: 'sim-6', categoryId: 'simulation', title: 'ERP: Customization Conflict', description: 'Client wants too many custom features.', role: 'Client (クライアント)', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Standard vs Custom.', goal: 'Persuade the client to use standard features.', outcome: 'Learn product management.', initialMessage: 'パッケージの標準機能ではなく、弊社の業務に合わせて全てカスタマイズしてください。', systemPrompt: BASE_SYSTEM_PROMPT('Client', 'ERP Custom', 'Be stubborn.') },
  { id: 'sim-7', categoryId: 'simulation', title: 'Startup: MVP Launch', description: 'Launching in 2 weeks with bugs.', role: 'Investor', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Funding round.', goal: 'Balance speed and quality.', outcome: 'Learn startup communication.', initialMessage: 'バグがあってもリリースすべきだと思いますか？それとも延期すべきですか？', systemPrompt: BASE_SYSTEM_PROMPT('Investor', 'MVP Launch', 'Ask for ROI.') },
  { id: 'sim-8', categoryId: 'simulation', title: 'HealthTech: Compliance', description: 'Handling medical data security.', role: 'Compliance Officer', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'HIPAA/GDPR.', goal: 'Explain the security architecture.', outcome: 'Learn healthcare IT communication.', initialMessage: '医療データの取り扱いについて、セキュリティ対策を説明してください。', systemPrompt: BASE_SYSTEM_PROMPT('Compliance', 'HealthTech', 'Be thorough.') },
  { id: 'sim-9', categoryId: 'simulation', title: 'GameDev: Crunch Time', description: 'Managing the final month of dev.', role: 'Producer', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Release deadline.', goal: 'Prioritize polish vs features.', outcome: 'Learn game dev communication.', initialMessage: '発売まであと1ヶ月です。どの機能を削りますか？', systemPrompt: BASE_SYSTEM_PROMPT('Producer', 'Game Crunch', 'Be stressed.') },
  { id: 'sim-10', categoryId: 'simulation', title: 'IoT: Hardware Integration', description: 'Software failing to talk to hardware.', role: 'Hardware Lead', difficulty: 'Advanced', isPremium: true, scenarioBackground: 'Embedded system.', goal: 'Debug the communication protocol.', outcome: 'Learn hardware/software collaboration.', initialMessage: 'ファームウェア側には問題ありません。アプリ側の不具合ではないですか？', systemPrompt: BASE_SYSTEM_PROMPT('Hardware Lead', 'IoT Integration', 'Be defensive.') }
];
