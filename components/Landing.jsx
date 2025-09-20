import { ArrowUpRight, Mail } from "lucide-react";
export default function Landing(){
  return (<section className="relative overflow-hidden">
    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-emerald-600 via-sky-500 to-amber-400"/>
    <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-amber-500 via-rose-400 to-emerald-500"/>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Healthy<span className="text-emerald-600">Step</span></h1>
      <p className="mt-4 text-lg md:text-xl opacity-80 max-w-2xl">Small steps. Stronger you. Beginner home workouts, healthy Indian recipes, and habits that stick.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/blog" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg">Browse posts <ArrowUpRight className="size-4"/></a>
        <a href="/newsletter" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-emerald-600 to-amber-500 text-white shadow-lg">Subscribe free</a>
      </div>
      <div className="mt-16 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/60">
        <div className="flex items-start gap-6">
          <div className="h-14 w-14 rounded-2xl grid place-items-center bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow"><Mail className="size-6"/></div>
          <div><h3 className="text-2xl font-bold">Get one actionable tip every week</h3><p className="mt-1 opacity-80">Join readers moving 1% better. No spam.</p><a href="/newsletter" className="inline-block mt-3 underline">Join the newsletter</a></div>
        </div>
      </div>
    </div>
  </section>);
}
