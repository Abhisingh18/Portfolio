"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowUpRight, Check, Copy, Loader2 } from "lucide-react";
import { sendMessage, type ContactState } from "@/app/actions";
import { PROFILE, SOCIALS } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          Sending
        </>
      ) : (
        <>
          Send message
          <ArrowUpRight size={16} aria-hidden="true" />
        </>
      )}
    </button>
  );
}

const fieldBase =
  "w-full rounded-lg border bg-ink-sunken px-4 py-3 text-[15px] text-fg placeholder:text-fg-faint transition-colors focus:outline-none focus:border-accent";

export function Contact() {
  const [state, formAction] = useActionState(sendMessage, initialState);
  const [copied, setCopied] = useState(false);

  // No mail provider configured: hand the composed message to the mail client.
  useEffect(() => {
    if (state.status === "fallback" && state.mailto) {
      window.location.href = state.mailto;
    }
  }, [state]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard blocked; the address is visible right next to the button. */
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        index="06"
        title="Let's"
        accent="work together"
        lede="Open to AI/ML roles, research collaborations and consulting. I reply to everything."
      />

      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-underline font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-tight break-all text-fg"
          >
            {PROFILE.email}
          </a>

          <div className="mt-5 flex items-center gap-4">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 text-[13px] text-fg-muted transition-colors hover:text-fg"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-signal" aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={14} aria-hidden="true" />
                  Copy address
                </>
              )}
            </button>

            <span className="h-3.5 w-px bg-line" aria-hidden="true" />

            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              className="text-[13px] text-fg-muted transition-colors hover:text-fg"
            >
              {PROFILE.phone}
            </a>
          </div>

          <dl className="mt-12 border-t border-line">
            {SOCIALS.map((social) => (
              <div
                key={social.label}
                className="flex items-center justify-between border-b border-line py-4"
              >
                <dt className="meta">{social.label}</dt>
                <dd>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-[13px] text-fg-muted transition-colors hover:text-fg"
                  >
                    {social.handle}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          {/* Posts to a Server Action, so it still works with JavaScript off. */}
          <form action={formAction} className="panel space-y-5 p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="meta mb-2 block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  defaultValue={state.values?.name}
                  aria-invalid={!!state.errors?.name}
                  aria-describedby={state.errors?.name ? "name-error" : undefined}
                  placeholder="Your name"
                  className={`${fieldBase} ${
                    state.errors?.name ? "border-red-500/60" : "border-line"
                  }`}
                />
                {state.errors?.name && (
                  <p id="name-error" className="mt-2 text-xs text-red-400">
                    {state.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="meta mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={state.values?.email}
                  aria-invalid={!!state.errors?.email}
                  aria-describedby={state.errors?.email ? "email-error" : undefined}
                  placeholder="you@company.com"
                  className={`${fieldBase} ${
                    state.errors?.email ? "border-red-500/60" : "border-line"
                  }`}
                />
                {state.errors?.email && (
                  <p id="email-error" className="mt-2 text-xs text-red-400">
                    {state.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="meta mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                defaultValue={state.values?.message}
                aria-invalid={!!state.errors?.message}
                aria-describedby={state.errors?.message ? "message-error" : undefined}
                placeholder="Tell me about the role or project…"
                className={`${fieldBase} resize-none ${
                  state.errors?.message ? "border-red-500/60" : "border-line"
                }`}
              />
              {state.errors?.message && (
                <p id="message-error" className="mt-2 text-xs text-red-400">
                  {state.errors.message}
                </p>
              )}
            </div>

            {/* Honeypot — hidden from people, irresistible to bots. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <SubmitButton />

            <div aria-live="polite" className="min-h-5">
              {state.status === "sent" && (
                <p className="flex items-center gap-2 text-sm text-signal">
                  <Check size={15} aria-hidden="true" />
                  Thanks — your message is on its way.
                </p>
              )}
              {state.status === "fallback" && (
                <p className="text-sm text-fg-muted">
                  Opening your mail app with the message ready to send. If
                  nothing happens,{" "}
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-fg underline"
                  >
                    email me directly
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
