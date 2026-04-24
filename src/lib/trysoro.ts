// Lightweight client for the Trysoro embed/articles API.
// The embed script bundles the article list inline; we parse it once to get
// metadata, then fetch each article's HTML body on demand.

const TRYSORO_TOKEN = "07804d90-9cab-4971-b047-4f28ca7e483f";
const TRYSORO_BASE = "https://app.trysoro.com";

export type TrysoroArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: string | null;
  content: string | null;
};

let listCache: Promise<TrysoroArticle[]> | null = null;

export const getArticles = (): Promise<TrysoroArticle[]> => {
  if (listCache) return listCache;
  listCache = (async () => {
    const res = await fetch(`${TRYSORO_BASE}/api/embed/${TRYSORO_TOKEN}`);
    const text = await res.text();
    // Embed inlines: var SORO_ARTICLES = [ ... ];
    const match = text.match(/var\s+SORO_ARTICLES\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) return [];
    try {
      return JSON.parse(match[1]) as TrysoroArticle[];
    } catch {
      return [];
    }
  })();
  return listCache;
};

export const getArticleBySlug = async (
  slug: string
): Promise<{ article: TrysoroArticle; html: string } | null> => {
  const articles = await getArticles();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;
  if (article.content) return { article, html: article.content };
  const res = await fetch(
    `${TRYSORO_BASE}/api/embed/${TRYSORO_TOKEN}/article/${article.id}`
  );
  if (!res.ok) return { article, html: "" };
  const data = (await res.json()) as { content?: string };
  return { article, html: data.content ?? "" };
};
