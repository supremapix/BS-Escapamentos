export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  description: string;
  answerFirst: string;
  details: string[];
  faq: { question: string; answer: string }[];
  iconName: string;
  priority: number;
}

export interface LocationData {
  slug: string;
  name: string;
  type: 'neighborhood' | 'city';
}

export interface MetaData {
  title: string;
  description: string;
  canonical: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  date: string;
  datePublished?: string;
  dateModified?: string;
  category?: string;
  image: string;
  content: string;
  faq?: { question: string; answer: string }[];
  keywords?: string[];
  readingTime?: string;
  readTime?: string;
  author?: string;
}
