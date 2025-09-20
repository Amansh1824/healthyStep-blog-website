import { getAllPosts } from "@/lib/posts";
export async function GET(){
  const base="https://healthystep.in";
  const posts=await getAllPosts();
  const urls=posts.map(p=>`<url><loc>${base}/blog/${p.slug}</loc><lastmod>${new Date(p.date).toISOString()}</lastmod></url>`).join("\n");
  const xml=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}/</loc></url>
  <url><loc>${base}/blog</loc></url>
  ${urls}
</urlset>`;
  return new Response(xml,{headers:{"Content-Type":"application/xml"}});
}
