'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone } from 'lucide-react';
import SiteLayout from '@/components/ui/SiteLayout';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Section, { SectionIntro } from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';
import { contactChannels, contactFaqs } from '@/components/data/pages';

const INTERESTS = [
  'Create an account',
  'Book a demo',
  'Firm / team plan',
  'Enterprise / institution',
  'Partnership',
  'Support',
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    interest: INTERESTS[0],
    message: '',
  });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Talk to the"
        highlight="BRIP360 team."
        subtitle="Whether you want a demo, a question answered or a partnership explored, we'd love to hear from you."
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* Channels */}
      <Section tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={Math.min(i * 0.05, 0.3)} y={18}>
                <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-soft sm:p-6">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${c.accent}1A`, color: c.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-navy">{c.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                    {c.desc}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-emerald-600">
                    {c.value}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Form + info */}
      <Section tone="subtle">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-soft sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 text-xl font-extrabold text-navy">
                      Thank you, {form.name || 'there'}!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
                      Your message has been received. A member of the BRIP360 team
                      will be in touch within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-navy mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Full name"
                        id="name"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Olumide Adeyemi"
                        required
                      />
                      <Field
                        label="Email address"
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@firm.com"
                        required
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Organisation"
                        id="organisation"
                        value={form.organisation}
                        onChange={update('organisation')}
                        placeholder="Firm or institution"
                      />
                      <div>
                        <label
                          htmlFor="interest"
                          className="mb-1.5 block text-xs font-semibold text-navy"
                        >
                          I&apos;m interested in
                        </label>
                        <select
                          id="interest"
                          value={form.interest}
                          onChange={update('interest')}
                          className="w-full rounded-xl border border-navy/15 bg-white px-3.5 py-3 text-sm text-navy transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        >
                          {INTERESTS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs font-semibold text-navy"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell us a little about what you need…"
                        className="w-full resize-none rounded-xl border border-navy/15 bg-white px-3.5 py-3 text-sm text-navy transition-colors placeholder:text-ink-soft focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full py-3.5">
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                    <p className="text-center text-[11px] text-ink-soft">
                      By submitting, you agree to our Terms and Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Side info */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-navy p-6 text-white shadow-float sm:p-8">
                <h3 className="text-lg font-extrabold">Why teams choose BRIP360</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  One platform to diagnose, restructure, administer and recover —
                  built with the profession, for the profession.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    '18 integrated core modules',
                    'Standards-based, audit-ready workflows',
                    'AI Copilot for analysis and drafting',
                    'Secure client & creditor collaboration',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-sm text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  <a
                    href="mailto:sales@brip360.ng"
                    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-emerald-400" />
                    sales@brip360.ng
                  </a>
                  <a
                    href="tel:+2347000003600"
                    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-emerald-400" />
                    +234 (0) 700 000 3600
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Quick"
            highlight="answers."
            subtitle="A few common questions before you reach out."
            align="center"
          />
          <Reveal>
            <Accordion items={contactFaqs} />
          </Reveal>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, id, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-navy/15 bg-white px-3.5 py-3 text-sm text-navy transition-colors placeholder:text-ink-soft focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
      />
    </div>
  );
}
