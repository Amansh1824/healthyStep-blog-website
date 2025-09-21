"use client"; // Required because we're using React state

import { useState } from "react";

export const metadata = { title: "Newsletter" };

export default function Newsletter() {
  const [status, setStatus] = useState(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    try {
      const response = await fetch(
        " https://buttondown.com/as8947007", // CHANGE THIS URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email: email,
            tag: "website-newsletter-page", // Optional: Helps you track source
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Join HealthyStep</h1>
      <p className="opacity-80 mt-2">
        One actionable tip every week. No spam.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col sm:flex-row gap-2"
      >
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

      {/* Success Message */}
      {status === "success" && (
        <p className="mt-3 text-green-600">
          🎉 Thank you for subscribing! Please check your inbox to confirm.
        </p>
      )}

      {/* Error Message */}
      {status === "error" && (
        <p className="mt-3 text-red-600">
          ❌ Oops! Something went wrong. Please try again later.
        </p>
      )}

      <p className="text-sm text-gray-500 mt-4">
        By subscribing, you agree to receive emails from HealthyStep. Unsubscribe anytime.
      </p>
    </section>
  );
}
