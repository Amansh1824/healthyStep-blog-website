import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import components from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import TableOfContents from "@/components/TableOfContents";
import GiscusComments from "@/components/GiscusComments";
import Image from "next/image";

export async function generateStaticParams(){ const posts=await getAllPosts(); return posts.map(p=>({slug:p.slug})); }
export async function generateMetadata({params}){ const post=await getPostBySlug(params.slug); if(!post) return {}; return { title: post.title, description: post.description, openGraph:{ images: post.cover ? [post.cover] : [] } }; }

export default async function PostPage({ params }){
  const post=await getPostBySlug(params.slug); if(!post) return <div className="mx-auto max-w-3xl p-6">Post not found.</div>;
  const all=await getAllPosts(); const related=getRelatedPosts(all, post);

  return (<article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
      <div>
        <header>
          <p className="text-sm opacity-70">{new Date(post.date).toLocaleDateString()} • {post.readingTime.text}</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">{post.title}</h1>
          {post.description && <p className="mt-2 opacity-80">{post.description}</p>}
          {post.cover && <Image src={post.cover} alt="" width={1200} height={630} className="mt-6 rounded-2xl w-full h-auto"/>}
        </header>
        <div className="prose dark:prose-invert prose-emerald max-w-none mt-8">
          {/* @ts-expect-error Async MDX */}
          <MDXRemote source={post.content} components={components} options={{ mdxOptions:{ remarkPlugins:[remarkGfm], rehypePlugins:[rehypeSlug,[rehypeAutolinkHeadings,{behavior:'wrap'}]] }}}/>
        </div>
        <section className="mt-12"><h2 className="text-xl font-bold">Related</h2>
          <ul className="mt-3 grid sm:grid-cols-2 gap-4">
            {related.map(r=>(<li key={r.slug} className="border rounded-xl p-4"><a className="font-semibold underline" href={`/blog/${r.slug}`}>{r.title}</a><p className="text-sm opacity-80">{r.description}</p></li>))}
          </ul>
        </section>
        <section className="mt-12"><h2 className="text-xl font-bold">Disclaimer</h2><p>General wellness information only, not medical advice. Consult a professional before starting any program.</p></section>
        <section className="mt-12"><GiscusComments/></section>
      </div>
      <aside>
        <TableOfContents items={post.headings}/>
        <div className="text-sm opacity-75 mt-6">Tags:{post.tags?.map(t=><a key={t} href={`/tags/${t}`} className="underline ml-2">#{t}</a>)}</div>
        <div className="text-sm opacity-75 mt-2">Category: <a className="underline" href={`/categories/${post.category}`}>{post.category}</a></div>
      </aside>
    </div>
  </article>);
}
