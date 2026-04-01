import { Post, FeaturedArticle } from './types';

export const POSTS: Post[] = [
  {
    id: '1',
    title: '关于本站',
    summary: '欢迎光临！这里是晓林的个人博客，记录我的证券投资心得、编程技术探索、建模实践以及生活中的各种兴趣爱好。',
    date: '2022-07-26',
    author: '晓林',
    category: '关于本站',
    imageUrl: 'https://picsum.photos/seed/city/800/450',
    content: '欢迎来到我的个人博客！在这里，我会分享我在证券市场的分析、编程开发的经验、数学建模的挑战以及生活中的点点滴滴。希望你能在这里找到有用的信息，或者仅仅是享受阅读的乐趣。'
  },
  {
    id: '2',
    title: '关于博主',
    summary: '你好，我是晓林，很高兴认识你👋。一名热爱技术的程序猿，自由职业者，博主，英语爱好者，健身达人。',
    date: '2024-05-30',
    author: '晓林',
    category: '关于本站',
    imageUrl: 'https://picsum.photos/seed/anime/800/450',
    content: '我是一名全栈开发工程师，对新技术充满好奇。除了写代码，我也喜欢研究证券市场，尝试用数学模型来分析趋势。生活中，我坚持健身，学习英语，并在这里记录我的成长历程。'
  },
  {
    id: '3',
    title: '2026年证券市场趋势分析：量化建模的应用',
    summary: '在当前复杂多变的全球金融环境下，传统的定性分析已难以捕捉瞬息万变的市场机会。本文将探讨如何利用量化建模技术，结合宏观经济指标，对2026年的证券市场进行深度剖析。',
    date: '2026-03-25',
    author: '晓林',
    category: '证券',
    imageUrl: 'https://picsum.photos/seed/finance/800/450',
    content: '量化交易通过数学模型替代人为的主观判断，利用计算机技术从庞大的历史数据中海选能带来超额收益的多种“大概率”事件以制定策略。'
  },
  {
    id: '4',
    title: 'React 19 新特性深度解析：从 Actions 到 Server Components',
    summary: 'React 19 带来了许多令人兴奋的新特性，极大地提升了开发体验和应用性能。本文将重点介绍 Actions API、新的 Hooks 以及 Server Components 的最佳实践。',
    date: '2026-03-15',
    author: '晓林',
    category: '编程',
    imageUrl: 'https://picsum.photos/seed/coding/800/450',
    content: 'React 19 的发布标志着前端开发进入了一个新的阶段。通过引入 Actions，我们可以更自然地处理异步操作和状态更新。'
  },
  {
    id: '5',
    title: '数学建模在城市交通优化中的实践',
    summary: '城市拥堵是现代都市的通病。通过建立复杂的数学模型，我们可以模拟交通流，优化信号灯配时，从而有效缓解交通压力。本文分享了一个基于图论和动态规划的优化案例。',
    date: '2026-02-20',
    author: '晓林',
    category: '建模',
    imageUrl: 'https://picsum.photos/seed/math/800/450',
    content: '数学建模不仅是理论研究，更是解决实际问题的有力工具。在交通优化中，我们可以利用微分方程和随机过程来描述车辆的运动规律。'
  },
  {
    id: '6',
    title: '我的摄影之旅：捕捉生活中的微光',
    summary: '摄影是我最大的兴趣爱好之一。它让我学会了停下脚步，去观察那些被忽略的美好。本文分享了我近期的一些摄影作品，以及我对光影处理的一些感悟。',
    date: '2026-01-10',
    author: '晓林',
    category: '兴趣',
    imageUrl: 'https://picsum.photos/seed/photography/800/450',
    content: '摄影不仅仅是按下快门，更是一种表达情感的方式。通过镜头，我可以看到一个完全不同的世界。'
  }
];

export const FEATURED_ARTICLES: FeaturedArticle[] = [
  { id: '1', title: 'Listary：革命性的搜索和应用启动软件', date: '2025-06-26 12:00:09' },
  { id: '2', title: '这才是「文件夹」该有的样子', date: '2025-06-19 12:00:09' },
  { id: '3', title: 'Quicker：我唯一愿意称之为神器的工具', date: '2025-06-18 12:00:09' },
  { id: '4', title: '一文搞懂五险一金！', date: '2025-06-13 14:19:50' }
];
