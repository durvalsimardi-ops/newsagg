import { Noticia } from "@/lib/fetchNews";

function formatarData(data: string) {
  if (!data) return "";
  try {
    return new Date(data).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function NoticiaCard({ noticia }: { noticia: Noticia }) {
  return (
    <a
      href={noticia.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-zinc-800 bg-zinc-900 p-5 hover:border-zinc-600 transition-colors"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
            noticia.categoria === "política"
              ? "bg-blue-900 text-blue-300"
              : "bg-emerald-900 text-emerald-300"
          }`}
        >
          {noticia.categoria}
        </span>
        <span className="text-xs text-zinc-500 truncate max-w-[140px]">{noticia.fonte}</span>
        <span className="text-xs text-zinc-600 ml-auto shrink-0">{formatarData(noticia.data)}</span>
      </div>
      <h2 className="font-semibold text-zinc-100 leading-snug">{noticia.titulo}</h2>
      {noticia.resumo && (
        <p className="text-sm text-zinc-400 mt-2 line-clamp-2">{noticia.resumo}</p>
      )}
    </a>
  );
}
