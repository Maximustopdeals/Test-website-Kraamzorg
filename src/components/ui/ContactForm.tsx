"use client";

import { useState } from "react";
import { formspreeEndpoint } from "@/lib/config";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formspreeEndpoint) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <p className="font-serif text-2xl lg:text-3xl font-light text-charcoal leading-snug">
          Dank u voor uw vertrouwen.
        </p>
        <p className="mt-4 text-muted font-light">
          Wij nemen binnen 24 uur discreet contact met u op.
        </p>
      </div>
    );
  }

  const field =
    "w-full bg-transparent border-0 border-b border-charcoal/15 py-3.5 text-[0.95rem] text-charcoal placeholder:text-subtle/70 focus:outline-none focus:border-charcoal/40 transition-colors duration-400 font-light";

  const label =
    "block text-[0.65rem] font-medium tracking-[0.16em] uppercase text-muted mb-2";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="aura-name" className={label}>
            Volledige naam
          </label>
          <input
            id="aura-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={field}
            placeholder=" "
          />
        </div>
        <div>
          <label htmlFor="aura-email" className={label}>
            E-mailadres
          </label>
          <input
            id="aura-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder=" "
          />
        </div>
      </div>

      <div>
        <label htmlFor="aura-due" className={label}>
          Vermoedelijke bevallingsdatum
        </label>
        <input
          id="aura-due"
          name="due_date"
          type="date"
          className={`${field} text-muted`}
        />
      </div>

      <div>
        <label htmlFor="aura-message" className={label}>
          Wensen & privacy-behoeften
        </label>
        <textarea
          id="aura-message"
          name="message"
          rows={4}
          className={`${field} resize-none`}
          placeholder="Deel wat voor u belangrijk is — wij luisteren met discretie."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-muted">
          Er ging iets mis. Mail ons direct via{" "}
          <a
            href="mailto:concierge@auraboutique.nl"
            className="underline underline-offset-4"
          >
            concierge@auraboutique.nl
          </a>
          .
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center bg-charcoal text-alabaster text-[0.7rem] font-medium tracking-[0.14em] uppercase px-10 py-4 hover:bg-ink transition-colors duration-500 disabled:opacity-50"
        >
          {status === "sending" ? "Verzenden…" : "Vraag private consult aan"}
        </button>
      </div>
    </form>
  );
}
