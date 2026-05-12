export const FEEDS = [
  // Política — imprensa
  { url: "https://feeds.folha.uol.com.br/poder/rss091.xml", categoria: "política", fonte: "Folha de S.Paulo" },
  { url: "https://www.estadao.com.br/rss/politica.xml", categoria: "política", fonte: "Estadão" },
  { url: "https://oglobo.globo.com/rss.xml?editorias=12", categoria: "política", fonte: "O Globo" },
  { url: "https://g1.globo.com/rss/g1/politica/feed.xml", categoria: "política", fonte: "G1" },
  { url: "https://www.poder360.com.br/feed/", categoria: "política", fonte: "Poder360" },
  { url: "https://congressoemfoco.uol.com.br/feed/", categoria: "política", fonte: "Congresso em Foco" },
  { url: "https://www.correiobraziliense.com.br/rss/politica.xml", categoria: "política", fonte: "Correio Braziliense" },
  // Política — fontes oficiais
  { url: "https://www12.senado.leg.br/noticias/rss/noticias.xml", categoria: "política", fonte: "Agência Senado" },
  { url: "https://www.camara.leg.br/noticias/rss", categoria: "política", fonte: "Agência Câmara" },
  { url: "https://agenciabrasil.ebc.com.br/rss/politica/feed.xml", categoria: "política", fonte: "Agência Brasil" },
  { url: "https://agenciabrasil.ebc.com.br/rss/geral/feed.xml", categoria: "política", fonte: "Agência Brasil Geral" },
  // Tecnologia
  { url: "https://feeds.folha.uol.com.br/tec/rss091.xml", categoria: "tecnologia", fonte: "Folha Tec" },
  { url: "https://tecnoblog.net/feed/", categoria: "tecnologia", fonte: "Tecnoblog" },
  { url: "https://www.canaltech.com.br/rss/", categoria: "tecnologia", fonte: "Canaltech" },
  { url: "https://olhardigital.com.br/feed/", categoria: "tecnologia", fonte: "Olhar Digital" },
  { url: "https://www.tecmundo.com.br/rss", categoria: "tecnologia", fonte: "TecMundo" },
  { url: "https://agenciabrasil.ebc.com.br/rss/tecnologia/feed.xml", categoria: "tecnologia", fonte: "Agência Brasil Tec" },
];

export type Categoria = "política" | "tecnologia" | "todas";
