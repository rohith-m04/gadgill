import { Article } from '../../types';
import { CATEGORY_A_ARTICLES } from './categoryA';
import { CATEGORY_B_ARTICLES } from './categoryB';
import { CATEGORY_C_ARTICLES } from './categoryC';
import { CATEGORY_D_ARTICLES } from './categoryD';
import { CATEGORY_E_ARTICLES } from './categoryE';
import { CATEGORY_F_ARTICLES } from './categoryF';
import { CATEGORY_G_ARTICLES } from './categoryG';
import { CATEGORY_H_ARTICLES } from './categoryH';
import { CATEGORY_I_ARTICLES } from './categoryI';
import { CATEGORY_J_ARTICLES } from './categoryJ';

export const ALL_ARTICLES: Article[] = [
  ...CATEGORY_A_ARTICLES,
  ...CATEGORY_B_ARTICLES,
  ...CATEGORY_C_ARTICLES,
  ...CATEGORY_D_ARTICLES,
  ...CATEGORY_E_ARTICLES,
  ...CATEGORY_F_ARTICLES,
  ...CATEGORY_G_ARTICLES,
  ...CATEGORY_H_ARTICLES,
  ...CATEGORY_I_ARTICLES,
  ...CATEGORY_J_ARTICLES
];

export const ARTICLES_MAP: Record<string, Article> = ALL_ARTICLES.reduce((acc, article) => {
  acc[article.id] = article;
  return acc;
}, {} as Record<string, Article>);

export function getArticleById(id: string): Article | undefined {
  return ARTICLES_MAP[id];
}

export function getArticlesByCategory(categoryId: string): Article[] {
  return ALL_ARTICLES.filter(a => a.categoryId === categoryId);
}

export function getNextArticle(currentId: string): Article | undefined {
  const index = ALL_ARTICLES.findIndex(a => a.id === currentId);
  if (index !== -1 && index < ALL_ARTICLES.length - 1) {
    return ALL_ARTICLES[index + 1];
  }
  return undefined;
}

export function getPrevArticle(currentId: string): Article | undefined {
  const index = ALL_ARTICLES.findIndex(a => a.id === currentId);
  if (index > 0) {
    return ALL_ARTICLES[index - 1];
  }
  return undefined;
}

export function searchArticles(query: string): Article[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase();
  return ALL_ARTICLES.filter(article => {
    return (
      article.id.toLowerCase().includes(q) ||
      article.title.toLowerCase().includes(q) ||
      (article.subtitle && article.subtitle.toLowerCase().includes(q)) ||
      article.abstract.toLowerCase().includes(q) ||
      article.sections.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)) ||
      article.keyTakeaways.some(t => t.toLowerCase().includes(q))
    );
  });
}
