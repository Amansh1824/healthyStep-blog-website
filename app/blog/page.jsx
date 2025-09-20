import SearchBox from "@/components/SearchBox";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
export const metadata = { title: "Blog" };
export default async function BlogIndex({ searchParams }){
  const q=(searchParams?.q||"").toLowerCase().trim(); const page=Number(searchParams?.page||1); const perPage=9;
  const all=await getAllPosts();
  const filtered=all.filter(p=>!q || `${p.title} ${p.description} ${(p.tags||[]).join(' ')}`.toLowerCase().includes(q));
  const totalPages=Math.ceil(filtered.length/perPage)||1;
  const posts=filtered.slice((page-1)*perPage,page*perPage);
  return (<main className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-6"><SearchBox initialQuery={q} /></div>
    <h1 className="text-3xl font-bold tracking-tight">Latest Posts</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {posts.map(p=><PostCard key={p.slug} post={p}/>)}
    </div>
    <div className="flex items-center justify-center gap-2 mt-10">
      {Array.from({length: totalPages},(_,i)=>i+1).map(n=>(
        <a key={n} href={`/blog?q=${encodeURIComponent(q)}&page=${n}`}
           className={`px-3 py-1 rounded-md border ${n===page? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900':'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{n}</a>
      ))}
    </div>
  </main>);
}
