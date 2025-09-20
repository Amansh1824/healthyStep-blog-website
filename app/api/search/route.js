import { getAllPosts } from "@/lib/posts";

export async function GET(req) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") || "").toLowerCase().trim();
  const all = await getAllPosts();
  const scored = all.map(p => {
    const hay = `${p.title} ${p.description} ${(p.tags||[]).join(" ")}`.toLowerCase();
    const score = q ? (hay.includes(q) ? 2 : 0) + (p.title.toLowerCase().startsWith(q) ? 3 : 0) : 0;
    return { p, score };
  }).sort((a,b) => b.score - a.score || (new Date(b.p.date) - new Date(a.p.date)) );

  const results = (q ? scored.filter(s => s.score > 0).slice(0, 8) : scored.slice(0,8))
    .map(({p}) => ({ title: p.title, slug: p.slug, description: p.description, tags: p.tags || [], category: p.category, date: p.date }));

  return new Response(JSON.stringify({ results }), { headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}
