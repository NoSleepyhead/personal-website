export type Tab = '首页' | '证券' | '编程' | '建模' | '兴趣' | '关于我';

export interface Post {
  id: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  content: string;
}

export interface FeaturedArticle {
  id: string;
  title: string;
  date: string;
}
