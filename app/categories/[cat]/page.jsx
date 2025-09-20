import { getAllPosts } from "@/lib/posts";
export async function generateStaticParams(){ const posts=await getAllPosts(); const cats=[...new Set(posts.map(p=>p.category).filter(Boolean))]; return cats.map(cat=>({cat})); }
export default async function CategoryPage({params}){
  const { cat }=params; const posts=(await getAllPosts()).filter(p=>p.category===cat);
  return (<main className="max-w-6xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold capitalize">{cat}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {posts.map(p=>(<article key={p.slug} className="border rounded-xl p-4"><a href={`/blog/${p.slug}`} className="font-semibold underline">{p.title}</a><p className="opacity-80 text-sm mt-1">{p.description}</p></article>))}
    </div>
  </main>);
}
