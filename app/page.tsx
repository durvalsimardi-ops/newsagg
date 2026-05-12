import { fetchNoticias, Noticia } from "@/lib/fetchNews";
import NoticiaCard from "@/components/NoticiaCard";
import Filtro from "@/components/Filtro";

export const revalidate = 3600;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria = "todas" } = await searchParams;
  const noticias = await fetchNoticias(categoria);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 py-8 px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Painel de Notícias</h1>
        <p className="text-zinc-400 mt-1 text-sm">Política e Tecnologia · Atualizado a cada hora</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Filtro categoriaAtual={categoria} />

        {noticias.length === 0 ? (
          <p className="text-center text-zinc-500 mt-16">Nenhuma notícia encontrada.</p>
        ) : (
          <div className="mt-6 flex flex-col gap-4">
            {noticias.map((n: Noticia, i: number) => (
              <NoticiaCard key={i} noticia={n} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
