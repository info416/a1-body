// 全ての宝物庫コンテンツをこの配列で管理する
// 新しいコンテンツを追加する場合は、この配列に新しいオブジェクトを追加するだけ
export const treasures = [
  {
    id: 'prompt-collection-1',
    title: '【プロンプト集】SNS投稿アイデア量産',
    description: 'X(Twitter)やInstagramの投稿ネタに困ったときに使える、アイデアを無限に生成するためのプロンプトセットです。',
    href: '/treasury/prompt-collection-1', // このコンテンツの詳細ページへのリンク
    category: 'プロンプト',
  },
  {
    id: 'tool-manual-1',
    title: '【ツール解説】AIブレインSNS半自動化',
    description: '当プロジェクトの基幹ツール『AIブレインSNS投稿半自動化ツール』の導入から応用までを解説した公式マニュアルです。',
    href: '/treasury/tool-manual-1',
    category: 'ツール',
  },
  {
    id: 'advanced-technique-1',
    title: '【応用テクニック】Gemini API活用術',
    description: 'スプレッドシートやGASと連携し、単純作業を完全自動化するためのGemini API活用テクニックを解説します。',
    href: '/treasury/advanced-technique-1',
    category: '応用技術',
  },
  // --- ここに新しいコンテンツをオブジェクトとして追加していく ---
  // 例：
  // {
  //   id: 'unique-id-for-content',
  //   title: '新しいコンテンツのタイトル',
  //   description: '新しいコンテンツの分かりやすい説明文。',
  //   href: '/treasury/new-content-link',
  //   category: 'カテゴリ名',
  // },
];