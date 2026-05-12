import { NextRequest, NextResponse } from "next/server";
import { fetchNoticias } from "@/lib/fetchNews";

export const revalidate = 3600; // cache de 1 hora

export async function GET(req: NextRequest) {
  const categoria = req.nextUrl.searchParams.get("categoria") || "todas";
  const noticias = await fetchNoticias(categoria);
  return NextResponse.json(noticias);
}
