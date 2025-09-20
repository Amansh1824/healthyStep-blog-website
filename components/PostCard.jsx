import { Trash2 } from "lucide-react";

const ADMIN = process.env.NEXT_PUBLIC_ADMIN_MODE === 'true';
const REPO_URL = process.env.NEXT_PUBLIC_REPO_URL || ""; // e.g. https://github.com/youruser/yourrepo

export default function PostCard({ post }){
  const deleteHref = REPO_URL
    ? `${REPO_URL}/issues/new?template=delete_post.yml&title=${encodeURIComponent('[Delete]:'+post.slug)}`
    : null;
  return (
    <article className="group rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 hover:shadow-md transition">
      {post.cover && <div className="h-40 w-full bg-slate-100 dark:bg-slate-800" style={{backgroundImage:`url(${post.cover})`,backgroundSize:'cover',backgroundPosition:'center'}}/>}
      <div className="p-5 relative">
        {ADMIN && deleteHref && (
          <a href={deleteHref} title="Delete post" className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-2 border bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:bg-white dark:hover:bg-slate-700">
            <Trash2 className="w-4 h-4 opacity-80" />
          </a>
        )}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide opacity-70">
          <span>{new Date(post.date).toLocaleDateString()}</span><span>•</span><span>{post.readingTime.text}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold group-hover:underline decoration-2 underline-offset-4"><a href={`/blog/${post.slug}`}>{post.title}</a></h3>
        <p className="mt-2 text-sm opacity-80 line-clamp-3">{post.description}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-75">{post.tags?.map(t=><a key={t} href={`/tags/${t}`} className="rounded-full border px-2 py-0.5">#{t}</a>)}</div>
      </div>
    </article>
  );
}
