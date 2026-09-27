import Link from 'next/link';
import { ArrowRight, Sparkles, Check, Wand2, Download } from 'lucide-react';
import SiteLayout from '@/components/ui/SiteLayout';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Section, { SectionIntro } from '@/components/ui/Section';
import CTABand from '@/components/ui/CTABand';
import { toolCategories, modelLibrary } from '@/components/data/pages';
import { actionCards, copilotBullets } from '@/components/data/content';

export const metadata = {
  title: 'Tools & Models — BRIP360',
  description:
    'A professional-grade suite of diagnostics, models, templates and AI tooling for business recovery and insolvency.',
};

export default function ToolsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tools & Models"
        title="The tools to do the work,"
        highlight="properly."
        subtitle="From diagnostics and solvency testing to restructuring models and statutory reports — everything is structured, reusable and audit-ready."
        breadcrumb={[{ label: 'Tools & Models' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/pricing" className="btn-primary px-6 py-3.5 text-base">
            Create Free Account
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/knowledge" className="btn-outline-white px-6 py-3.5 text-base">
            Explore the Library
          </Link>
        </div>
      </PageHero>

      {/* Quick start tools */}
      <Section tone="white">
        <SectionIntro
          eyebrow="Quick Start"
          title="What would you like to do?"
          subtitle="Launch a focused task in a click — every tool writes straight back to the relevant case."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {actionCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={Math.min(i * 0.05, 0.3)} y={20}>
                <Link
                  href="/pricing"
                  className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-card sm:p-6"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${card.accent}1A`, color: card.accent }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                    Open tool
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Tool categories */}
      <Section tone="subtle">
        <SectionIntro
          eyebrow="Toolkit"
          title="Organised around"
          highlight="the way you work."
          subtitle="Four families of tools covering the entire recovery and insolvency lifecycle."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {toolCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.category} delay={Math.min(i * 0.06, 0.3)} y={22}>
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-soft sm:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${cat.accent}1A`, color: cat.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold text-navy">
                      {cat.category}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {cat.tools.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-ink-muted">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* AI copilot highlight */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3 text-emerald-400">AI-Enabled</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              BRIP AI Copilot works alongside you.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Describe what you need in plain language and the Copilot analyses
              financials, surfaces risks and drafts the documents — always with you
              in control.
            </p>
            <ul className="mt-6 space-y-3">
              {copilotBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-white/80">{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="btn-primary mt-8 px-6 py-3.5 text-base">
              Try the AI Copilot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal y={28} delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-950/60 p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                ASK BRIP AI COPILOT
              </div>
              <div className="mt-5 space-y-3">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-emerald-500 px-4 py-3 text-sm text-white">
                  Draft a 13-week cash flow for the Vertex case.
                </div>
                <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                  Done. The model projects a funding gap of &#8358;82M in week 5.
                  I&#8217;ve highlighted two mitigation options and added a
                  sensitivity summary.
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-emerald-500 px-4 py-3 text-sm text-white">
                  Which creditors are secured?
                </div>
                <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                  4 secured creditors totalling &#8358;1.4B. Full schedule attached,
                  with priority ranking applied.
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <Wand2 className="h-4 w-4 text-emerald-400" />
                <span className="text-xs text-white/50">
                  Describe a task in plain language&hellip;
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Model library */}
      <Section tone="white">
        <SectionIntro
          eyebrow="Models & Templates Library"
          title="Start from a"
          highlight="proven foundation."
          subtitle="A deep library of models, templates and letters — ready to adapt to any case."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modelLibrary.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.name} delay={Math.min(i * 0.05, 0.3)} y={18}>
                <div className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-navy">{m.name}</h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink-muted">
                    {m.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <Download className="h-3.5 w-3.5" />
                    Available in-app
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CTABand
        title="Put every tool to work on your next case."
        subtitle="Create a free account and start with diagnostics, models and AI-powered drafting today."
      />
    </SiteLayout>
  );
}
