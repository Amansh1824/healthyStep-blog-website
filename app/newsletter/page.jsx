// app/newsletter/page.jsx  (SERVER component – no "use client")
export const metadata = { title: "Newsletter" };

import NewsletterForm from "@/components/NewsletterForm";

export default function NewsletterPage() {
  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Join HealthyStep</h1>
      <p className="opacity-80 mt-2">One actionable tip every week. No spam.</p>
      <NewsletterForm />
      <p className="text-sm text-gray-500 mt-4">
        By subscribing, you agree to receive emails from HealthyStep. Unsubscribe anytime.
      </p>
    </section>
  );
}
