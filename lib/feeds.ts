export const FEEDS = [
  // Política
  { url: "https://feeds.folha.uol.com.br/poder/rss091.xml", categoria: "política", fonte: "Folha de S.Paulo" },
  { url: "https://www.estadao.com.br/rss/politica.xml", categoria: "política", fonte: "Estadão" },
  { url: "https://oglobo.globo.com/rss.xml?editorias=12", categoria: "política", fonte: "O Globo" },
  { url: "https://g1.globo.com/rss/g1/politica/feed.xml", categoria: "política", fonte: "G1" },
  { url: "https://www.uol.com.br/esporte/futebol/campeonatos-brasileiros/serie-a/rss.xml", categoria: "política", fonte: "UOL Política" },
  // Tecnologia
  { url: "https://feeds.folha.uol.com.br/tec/rss091.xml", categoria: "tecnologia", fonte: "Folha Tec" },
  { url: "https://tecnoblog.net/feed/", categoria: "tecnologia", fonte: "Tecnoblog" },
  { url: "https://www.canaltech.com.br/rss/", categoria: "tecnologia", fonte: "Canaltech" },
  { url: "https://olhardigital.com.br/feed/", categoria: "tecnologia", fonte: "Olhar Digital" },
];

export type Categoria = "política" | "tecnologia" | "todas";
