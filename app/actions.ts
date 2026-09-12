"use server";

import { PROFILE } from "@/content/site";

export type ContactState = {
  status: "idle" | "sent" | "fallback" | "error";
  message?: string;
  /** Populated when no mail provider is configured, so the client can hand off. */
  mailto?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; message: string };
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildMailto(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
  return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const values = { name, email, message };

  // Honeypot: bots fill hidden fields, humans never see this one.
  if (String(formData.get("company") ?? "")) {
    return { status: "sent", values: { name: "", email: "", message: "" } };
  }

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!EMAIL.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? PROFILE.email;

  // With no provider configured the message must not vanish: tell the client
  // to open the visitor's mail app with everything already filled in.
  if (!apiKey) {
    return { status: "fallback", mailto: buildMailto(name, email, message), values };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `${message}\n\n—\n${name}\n${email}`,
      }),
    });

    if (!res.ok) throw new Error(`Resend responded ${res.status}`);

    return { status: "sent", values: { name: "", email: "", message: "" } };
  } catch {
    return {
      status: "fallback",
      message: "Could not reach the mail service.",
      mailto: buildMailto(name, email, message),
      values,
    };
  }
}
