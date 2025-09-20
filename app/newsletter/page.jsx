export const metadata={title:"Newsletter"};
export default function Newsletter(){
  return (<section className="max-w-xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold">Join HealthyStep</h1>
    <p className="opacity-80 mt-2">One actionable tip every week. No spam.</p>
    <form action="https://buttondown.email/api/emails/embed-subscribe/your-list" method="post" className="mt-4 flex gap-2">
      <input name="email" type="email" required placeholder="you@email.com" className="w-full rounded-xl border px-3 py-2"/>
      <button className="rounded-xl px-4 py-2 bg-emerald-600 text-white">Subscribe</button>
    </form>
  </section>);
}
