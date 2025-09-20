import fs from "node:fs"; import path from "node:path"; import matter from "gray-matter"; import readingTime from "reading-time";
const postsDir = path.join(process.cwd(),"content","posts");
export async function getAllPosts(){
  if(!fs.existsSync(postsDir)) return [];
  const files=fs.readdirSync(postsDir).filter(f=>f.endsWith(".md")||f.endsWith(".mdx"));
  const posts=files.map(filename=>{
    const slug=filename.replace(/\.mdx?$/, ""); const file=fs.readFileSync(path.join(postsDir,filename),"utf8"); const {data,content}=matter(file);
    const headings = content.split("\n").filter(l=>/^#{1,3} /.test(l)).map(line=>{ const level=line.match(/^#+/)[0].length; const text=line.replace(/^#{1,3} /,'').trim(); const id=text.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'-'); return {level,text,id}; });
    return { slug, ...data, content, headings, readingTime: readingTime(content) };
  }).sort((a,b)=> new Date(b.date)-new Date(a.date));
  return posts;
}
export async function getPostBySlug(slug){
  const full=path.join(postsDir,`${slug}.mdx`); const fallback=path.join(postsDir,`${slug}.md`);
  const filepath=fs.existsSync(full)?full:fs.existsSync(fallback)?fallback:null; if(!filepath) return null;
  const raw=fs.readFileSync(filepath,"utf8"); const {data,content}=matter(raw);
  const headings = content.split("\n").filter(l=>/^#{1,3} /.test(l)).map(line=>{ const level=line.match(/^#+/)[0].length; const text=line.replace(/^#{1,3} /,'').trim(); const id=text.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'-'); return {level,text,id}; });
  return { slug, ...data, content, headings, readingTime: readingTime(content) };
}
export function getRelatedPosts(all, post, limit=3){
  const pool=all.filter(p=>p.slug!==post.slug);
  const score=p=>(p.category===post.category?2:0) + ((p.tags?.filter(t=>post.tags?.includes(t)).length)||0);
  return pool.map(p=>({p,s:score(p)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,limit).map(x=>x.p);
}
