import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { useUIStore } from "../store/useStore";

const contactLinks = [
  { icon: Mail, label: "axror6495@gmail.com", href: "mailto:axror6495@gmail.com" },
  { icon: Send, label: "@Murodov_777", href: "https://t.me/Murodov_777" },
  { icon: GithubIcon, label: "murodovaxror9-coder", href: "https://github.com/murodovaxror9-coder" },
];

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-surface2 px-4 py-3.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-cyan focus:outline-none";

export default function Contact() {
  const submitted = useUIStore((s) => s.contactSubmitted);
  const setSubmitted = useUIStore((s) => s.setContactSubmitted);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error("send-telegram failed:", res.status, body);
        throw new Error(body);
      }
      setSubmitted(true);
      setForm(initialForm);
      setStatus("idle");
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Aloqa"
      title="Loyihangizni muhokama qilaylik"
      description="Savolingiz bormi yoki loyiha boshlashni xohlaysizmi? Quyidagi forma yoki to'g'ridan-to'g'ri kanallar orqali yozing."
    >
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="space-y-4">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center gap-4 p-4 transition-colors hover:border-violet/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 text-cyan">
                  <c.icon size={18} />
                </span>
                <span className="text-sm text-ink">{c.label}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card relative overflow-hidden p-7 md:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative flex flex-col items-center justify-center gap-3 py-16 text-center"
              >
                <CheckCircle2 size={40} className="text-cyan" />
                <p className="text-ink">Xabaringiz uchun rahmat!</p>
                <p className="text-sm text-muted">Tez orada siz bilan bog'lanaman.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost mt-2 !py-2 !px-4 text-xs"
                >
                  Yana xabar yuborish
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div>
                  <h3 className="section-title text-2xl">Xabar yuboring</h3>
                  <p className="mt-2 text-sm text-muted">
                    Formani to'ldiring — 24 soat ichida javob beraman.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Ismingiz">
                    <input
                      required
                      placeholder="Akmal Murodov"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      placeholder="siz@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Raqam">
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder="+998 90 123 45 67"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Mavzu">
                    <input
                      required
                      placeholder="Loyiha, taklif, hamkorlik..."
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Xabar">
                  <textarea
                    required
                    rows={6}
                    placeholder="Loyihangiz haqida yozing — maqsad, muddat, byudjet..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-cyan-soft py-4 text-sm font-semibold text-base shadow-glow-cyan transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === "loading" ? (
                    "Yuborilmoqda..."
                  ) : (
                    <>
                      <Send size={16} /> Yuborish
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Xabar yuborilmadi. Birozdan so'ng qayta urinib ko'ring yoki to'g'ridan-to'g'ri
                    Telegram orqali yozing.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
