import Link from "next/link";

const opcoes = [
  { label: "Todas", value: "todas" },
  { label: "Política", value: "política" },
  { label: "Tecnologia", value: "tecnologia" },
];

export default function Filtro({ categoriaAtual }: { categoriaAtual: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {opcoes.map((op) => (
        <Link
          key={op.value}
          href={op.value === "todas" ? "/" : `/?categoria=${op.value}`}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            categoriaAtual === op.value
              ? "bg-zinc-100 text-zinc-900"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          {op.label}
        </Link>
      ))}
    </div>
  );
}
