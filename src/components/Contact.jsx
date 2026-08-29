import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, Loader2, AlertCircle } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { PROFILE, SOCIALS } from "../constants";

/* Set VITE_FORMSPREE_ID in .env to post messages to a real inbox.
   Without it the form falls back to opening the visitor's mail client with
   everything pre-filled — which still works, and never silently drops a message. */
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const EMPTY = { name: "", email: "", message: "" };

const Contact = () => {
    const [form, setForm] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [copied, setCopied] = useState(false);

    const update = (field) => (e) => {
        setForm((f) => ({ ...f, [field]: e.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            next.email = "Please enter a valid email address.";
        if (form.message.trim().length < 10)
            next.message = "Please write at least 10 characters.";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const openMailClient = () => {
        const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
        const body = encodeURIComponent(
            `${form.message}\n\n—\n${form.name}\n${form.email}`
        );
        window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        if (!FORMSPREE_ID) {
            openMailClient();
            setStatus("sent");
            setForm(EMPTY);
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            setForm(EMPTY);
        } catch {
            setStatus("error");
        }
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(PROFILE.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* Clipboard blocked — the address is visible next to the button anyway. */
        }
    };

    const field =
        "w-full rounded-xl border bg-[#0a0618] px-4 py-3 text-white placeholder:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/40";

    return (
        <Section id="contact">
            <SectionHeading
                eyebrow="Contact"
                title="Let's"
                accent="Connect"
                subtitle="Open to AI/ML roles, research collaborations and consulting work. I reply to everything."
            />

            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-4 lg:col-span-2"
                >
                    <div className="card p-6">
                        <h3 className="text-sm font-semibold text-white">Email</h3>
                        <div className="mt-3 flex items-center gap-2">
                            <a
                                href={`mailto:${PROFILE.email}`}
                                className="min-w-0 flex-1 truncate text-sm text-purple-300 hover:text-purple-200"
                            >
                                {PROFILE.email}
                            </a>
                            <button
                                type="button"
                                onClick={copyEmail}
                                aria-label="Copy email address"
                                className="shrink-0 rounded-lg border border-white/10 p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                            >
                                {copied ? (
                                    <Check size={15} className="text-emerald-400" aria-hidden="true" />
                                ) : (
                                    <Copy size={15} aria-hidden="true" />
                                )}
                            </button>
                        </div>

                        <h3 className="mt-6 text-sm font-semibold text-white">Phone</h3>
                        <a
                            href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                            className="mt-2 block text-sm text-gray-400 hover:text-white"
                        >
                            {PROFILE.phone}
                        </a>
                    </div>

                    <div className="card p-6">
                        <h3 className="mb-4 text-sm font-semibold text-white">Elsewhere</h3>
                        <div className="flex flex-wrap gap-2">
                            {SOCIALS.map(({ name, href, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target={href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    title={name}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition-colors hover:border-purple-500/40 hover:text-white"
                                >
                                    <Icon size={18} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="card space-y-5 p-6 md:p-8 lg:col-span-3"
                >
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="contact-name"
                                className="mb-1.5 block text-sm font-medium text-gray-400"
                            >
                                Name
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={form.name}
                                onChange={update("name")}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "err-name" : undefined}
                                placeholder="Your name"
                                className={`${field} ${
                                    errors.name ? "border-red-500/60" : "border-white/10"
                                }`}
                            />
                            {errors.name && (
                                <p id="err-name" className="mt-1.5 text-xs text-red-400">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="contact-email"
                                className="mb-1.5 block text-sm font-medium text-gray-400"
                            >
                                Email
                            </label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={form.email}
                                onChange={update("email")}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "err-email" : undefined}
                                placeholder="you@company.com"
                                className={`${field} ${
                                    errors.email ? "border-red-500/60" : "border-white/10"
                                }`}
                            />
                            {errors.email && (
                                <p id="err-email" className="mt-1.5 text-xs text-red-400">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="contact-message"
                            className="mb-1.5 block text-sm font-medium text-gray-400"
                        >
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={update("message")}
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "err-message" : undefined}
                            placeholder="Tell me about the role or project…"
                            className={`${field} resize-none ${
                                errors.message ? "border-red-500/60" : "border-white/10"
                            }`}
                        />
                        {errors.message && (
                            <p id="err-message" className="mt-1.5 text-xs text-red-400">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary w-full py-3.5 text-sm"
                    >
                        {status === "sending" ? (
                            <>
                                <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                                Sending…
                            </>
                        ) : (
                            <>
                                Send message
                                <Send size={16} aria-hidden="true" />
                            </>
                        )}
                    </button>

                    <div aria-live="polite" className="min-h-[1.25rem]">
                        {status === "sent" && (
                            <p className="flex items-center gap-2 text-sm text-emerald-400">
                                <Check size={15} aria-hidden="true" />
                                {FORMSPREE_ID
                                    ? "Thanks — your message is on its way."
                                    : "Your mail app should now be open with the message ready to send."}
                            </p>
                        )}
                        {status === "error" && (
                            <p className="flex items-center gap-2 text-sm text-red-400">
                                <AlertCircle size={15} aria-hidden="true" />
                                Something went wrong.{" "}
                                <a
                                    href={`mailto:${PROFILE.email}`}
                                    className="underline hover:text-red-300"
                                >
                                    Email me directly
                                </a>
                                .
                            </p>
                        )}
                    </div>
                </motion.form>
            </div>
        </Section>
    );
};

export default Contact;
