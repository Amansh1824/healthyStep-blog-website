'use client'
import { useEffect, useRef, useState } from 'react';

export default function SearchBox({ initialQuery = '' }){
  const [q, setQ] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);
  const boxRef = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => { if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const fetchResults = async (value) => {
    if (!value.trim()) { setItems([]); setOpen(false); return; }
    const res = await fetch(`/api/search?q=${encodeURIComponent(value)}`);
    const data = await res.json();
    setItems(data.results || []);
    setOpen(true);
    setActive(0);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setQ(value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => fetchResults(value), 180);
  };

  const onKeyDown = (e) => {
    if (!open) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, items.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
    if (e.key === 'Enter')     { e.preventDefault(); const item = items[active]; if (item) window.location.href = `/blog/${item.slug}`; else window.location.href = `/blog?q=${encodeURIComponent(q)}`; }
    if (e.key === 'Escape')    { setOpen(false); }
  };

  return (
    <div ref={boxRef} className="relative w-full">
      <input
        value={q}
        onChange={onChange}
        onFocus={() => { if (items.length) setOpen(true); }}
        onKeyDown={onKeyDown}
        placeholder="Search workouts, recipes, habits…"
        className="w-full rounded-xl border px-3 py-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
      />
      {open && items.length > 0 && (
        <div className="absolute z-30 mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
          <ul className="max-h-80 overflow-auto">
            {items.map((it, i) => (
              <li key={it.slug}>
                <a
                  href={`/blog/${it.slug}`}
                  className={`block px-3 py-2 ${i===active ? 'bg-emerald-600/10 dark:bg-emerald-500/10' : ''}`}
                  onMouseEnter={() => setActive(i)}
                >
                  <div className="font-medium">{it.title}</div>
                  <div className="text-xs opacity-70">{new Date(it.date).toLocaleDateString()} • {it.category} • {it.tags?.join(', ')}</div>
                </a>
              </li>
            ))}
            <li className="border-t border-slate-200 dark:border-slate-700">
              <a href={`/blog?q=${encodeURIComponent(q)}`} className="block px-3 py-2 text-sm opacity-80">See all results</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
