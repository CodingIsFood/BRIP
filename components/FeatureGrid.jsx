import Link from 'next/link';
import { ArrowRight, Check, Sparkles, Library, TrendingUp } from 'lucide-react';
import Reveal from './ui/Reveal';
import { copilotBullets, libraryBullets, intelligenceBullets } from './data/content';

/* ------------------------------------------------------------------ */
/* Shared bullet row                                                   */
/* ------------------------------------------------------------------ */
function Bullet({ children, dark = false }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          dark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
        }`}
      >
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span
        className={`text-sm leading-relaxed ${
          dark ? 'text-white/75' : 'text-ink-muted'
        }`}
      >
        {children}
      </span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Futuristic AI graphic placeholder                                   */
/* ------------------------------------------------------------------ */
function CopilotGraphic() {
  return (
    <div className="relative mt-6 h-36 overflow-hidden rounded-2xl border border-white/10 bg-navy-950/60">
      {/* Orbiting rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-28 w-28 rounded-full border border-emerald-500/30" />
        <div className="absolute h-20 w-20 rounded-full border border-sky-400/30" />
        <div className="absolute h-12 w-12 rounded-full border border-emerald-400/40" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-float">
          <Sparkles className="h-6 w-6 text-white" />
        </span>
      </div>
      {/* Scanning line */}
      <div className="absolute inset-x-0 top-1/2 h-px animate-pulse-soft bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      {/* Corner ticks */}
      <div className="absolute left-3 top-3 h-3 w-3 rounded-tl border-l border-t border-white/20" />
      <div className="absolute right-3 top-3 h-3 w-3 rounded-tr border-r border-t border-white/20" />
      <div className="absolute bottom-3 left-3 h-3 w-3 rounded-bl border-b border-l border-white/20" />
      <div className="absolute bottom-3 right-3 h-3 w-3 rounded-br border-b border-r border-white/20" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Column 2 & 3 (light cards)                                          */
/* ------------------------------------------------------------------ */
function LightFeatureCard({ icon: Icon, title, bullets, cta, ctaHref = '#' }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy">
        {title}
      </h3>
      <ul className="mt-5 flex-1 space-y-3">
        {bullets.map((b) => (
          <Bullet key={b}>{b}</Bullet>
        ))}
      </ul>
      <Link href={ctaHref} className="btn-outline-navy mt-7 w-full">
        {cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export default function FeatureGrid() {
  return (
    <section id="knowledge" className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-3 text-emerald-600">Platform Capabilities</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
            Intelligence, Models &amp; Insight — Built In
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Everything you need to move from diagnosis to distribution, powered by AI
            and a deep library of professional-grade tools.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Column 1 — dark blue AI card */}
          <Reveal y={24}>
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy p-6 shadow-float sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-400 backdrop-blur-sm">
                <Sparkles className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-xl font-extrabold tracking-tight text-white">
                BRIP AI Copilot
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/70">
                Your always-on decision support partner across every stage of the
                recovery and insolvency lifecycle.
              </p>

              <CopilotGraphic />

              <ul className="relative mt-6 flex-1 space-y-3">
                {copilotBullets.map((b) => (
                  <Bullet key={b} dark>
                    {b}
                  </Bullet>
                ))}
              </ul>

              <Link
                href="#ai"
                className="btn-primary relative mt-7 w-full"
              >
                See BRIP AI in Action
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>

          {/* Column 2 — Models & Templates */}
          <Reveal y={24} delay={0.08}>
            <LightFeatureCard
              icon={Library}
              title="Models & Templates Library"
              bullets={libraryBullets}
              cta="Explore Library"
              ctaHref="#library"
            />
          </Reveal>

          {/* Column 3 — Industry Intelligence */}
          <Reveal y={24} delay={0.16}>
            <LightFeatureCard
              icon={TrendingUp}
              title="Industry Intelligence"
              bullets={intelligenceBullets}
              cta="View Insights"
              ctaHref="#insights"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
