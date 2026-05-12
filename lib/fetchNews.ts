import Parser from "rss-parser";
import { FEEDS } from "./feeds";

export type Noticia = {
  titulo: string;
  link: string;
  data: string;
  fonte: string;
  categoria: string;
  resumo: string;
};

const parser = new Parser();

async function fetchFeed(feed: (typeof FEEDS)[number]): Promise<Noticia[]> {
  try {
    const result = await parser.parseURL(feed.url);
    return (result.items || []).slice(0, 10).map((item) => ({
      titulo: item.title || "",
      link: item.link || "",
      data: item.pubDate || item.isoDate || "",
      fonte: feed.fonte,
      categoria: feed.categoria,
      resumo: item.contentSnippet || item.summary || "",
    }));
  } catch {
    return [];
  }
}

export async function fetchNoticias(categoria?: string): Promise<Noticia[]> {
  const feeds = categoria && categoria !== "todas"
    ? FEEDS.filter((f) => f.categoria === categoria)
    : FEEDS;

  const results = await Promise.allSettled(feeds.map(fetchFeed));

  const noticias = results
    .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
    .filter((n) => n.titulo && n.link)
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  return noticias;
}
