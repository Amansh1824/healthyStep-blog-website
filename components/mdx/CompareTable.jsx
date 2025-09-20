export default function CompareTable({ items=[] }){
  return (<div className="not-prose overflow-x-auto">
    <table className="min-w-[720px] text-sm border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="px-3 py-2 text-left">Product</th><th className="px-3 py-2 text-left">Pros</th><th className="px-3 py-2 text-left">Cons</th><th className="px-3 py-2 text-left">Link</th></tr></thead>
      <tbody>{items.map(it=>(<tr key={it.name} className="border-t border-slate-200 dark:border-slate-700"><td className="px-3 py-2 font-medium">{it.name}</td><td className="px-3 py-2">{it.pros}</td><td className="px-3 py-2">{it.cons}</td><td className="px-3 py-2"><a href={it.href} rel="sponsored nofollow" className="underline">View</a></td></tr>))}</tbody>
    </table>
  </div>);
}
