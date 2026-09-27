'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import SiteLayout from '@/components/ui/SiteLayout';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Section, { SectionIntro } from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';
import CTABand from '@/components/ui/CTABand';
import { pricingPlans, pricingFaqs } from '@/components/data/pages';

export default function PricingContent() {
  const [annual, setAnnual] = useState(false);

  const priceFor = (plan) => {
    if (plan.price === 'Free' || plan.price === 'Custom') return plan.price;
    if (!annual) return plan.price;
    const numeric = Number(plan.price.replace(/[^\d]/g, ''));
    if (!numeric) return plan.price;
    const discounted = Math.round((numeric * 0.8) / 500) * 500;
    return `\u20a6${discounted.toLocaleString('en-NG')}`;
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing for"
        highlight="every stage of your practice."
        subtitle="Start free, scale as you grow. Plans are built for individuals, firms and institutions across Nigeria."
        breadcrumb={[{ label: 'Pricing' }]}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              !annual ? 'bg-emerald-500 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              annual ? 'bg-emerald-500 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Annual
            <span className="ml-2 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
              -20%
            </span>
          </button>
        </div>
      </PageHero>

      <Section tone="white">
        <div className="grid gap-5 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={Math.min(i * 0.06, 0.3)} y={22}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7 ${
                  plan.highlight
                    ? 'border-emerald-500/40 bg-navy text-white'
                    : 'border-navy/10 bg-white'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </span>
                )}
                <h3
                  className={`text-base font-bold ${
                    plan.highlight ? 'text-white' : 'text-navy'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-end gap-1">
                  <span
                    className={`text-3xl font-extrabold tracking-tight ${
                      plan.highlight ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {priceFor(plan)}
                  </span>
                  {plan.cadence && (
                    <span
                      className={`pb-1 text-xs font-medium ${
                        plan.highlight ? 'text-white/60' : 'text-ink-soft'
                      }`}
                    >
                      {plan.cadence}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-3 text-xs leading-relaxed ${
                    plan.highlight ? 'text-white/70' : 'text-ink-muted'
                  }`}
                >
                  {plan.tagline}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.highlight
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-emerald-50 text-emerald-600'
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.highlight ? 'text-white/80' : 'text-ink-muted'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === 'Enterprise' ? '/contact' : '/pricing'}
                  className={`mt-7 w-full ${
                    plan.highlight ? 'btn-primary' : 'btn-outline-navy'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-ink-soft">
            All plans include secure data handling, role-based access and a full
            audit trail. Prices in Nigerian Naira, exclusive of VAT.
          </p>
        </Reveal>
      </Section>

      <Section tone="subtle">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Security by design', desc: 'Encryption, access controls and audit trails on every action.' },
            { icon: Building2, title: 'Built to scale', desc: 'From sole practitioners to national institutions and regulators.' },
            { icon: Sparkles, title: 'AI included', desc: 'BRIP AI Copilot available across Professional, Firm and Enterprise.' },
          ].map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={Math.min(i * 0.06, 0.3)} y={18}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{v.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Pricing"
            highlight="questions."
            subtitle="Common questions about plans, billing and security."
            align="center"
          />
          <Reveal>
            <Accordion items={pricingFaqs} />
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Not sure which plan fits?"
        subtitle="Talk to our team and we'll recommend the right plan for your practice."
        primaryLabel="Request a Demo"
        primaryHref="/contact"
        secondaryLabel="Compare Tools"
        secondaryHref="/tools"
      />
    </SiteLayout>
  );
}
