// components/NewsletterForm.jsx
"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const res = await fetch(
        " https://buttondown.com/as8947007", // <-- CHANGE THIS
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            email,
            tag: "website-newsletter-page",
          }),
        }
      );

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="w-full rounded-xl border px-3 py-2"
        />
        <button
          type="submit"
          className="rounded-xl px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          Subscribe
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-green-600">
          🎉 Thanks for subscribing! Please check your inbox to confirm.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-600">
          ❌ Oops! Something went wrong. Please try again later.
        </p>
      )}
    </>
  );
}
