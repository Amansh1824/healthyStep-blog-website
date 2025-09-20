import { getAllPosts } from "@/lib/posts"; import RSS from "rss";
export async function GET(){
  const site="https://healthystep.in";
  const feed=new RSS({title:"HealthyStep",site_url:site,feed_url:site+"/feed.xml"});
  const posts=await getAllPosts();
  posts.forEach(p=>feed.item({title:p.title,description:p.description,url:`${site}/blog/${p.slug}`,date:p.date}));
  return new Response(feed.xml({indent:true}),{headers:{"Content-Type":"application/xml"}});
}
