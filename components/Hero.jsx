import Link from 'next/link';
import {
  MapPin,
  Lock,
  BadgeCheck,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  PlayCircle,
} from 'lucide-react';
import Reveal from './ui/Reveal';
import DashboardMockup from './DashboardMockup';

const TRUST_ITEMS = [
  { icon: MapPin, label: 'Built for Nigeria' },
  { icon: Lock, label: 'Secure & Private' },
  { icon: BadgeCheck, label: 'Professional & Trusted' },
  { icon: Sparkles, label: 'AI-Enabled Decision Support' },
  { icon: ShieldCheck, label: 'Standards-Based & Compliance Ready' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-surface-subtle"
    >
      {/* Soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      </div>

      <div className="container-page py-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="eyebrow text-emerald-700">
                  Nigeria&apos;s Integrated Business Recovery &amp; Insolvency Platform
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
                One Platform. Every Stage of{' '}
                <span className="text-emerald-500">Recovery &amp; Insolvency</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                Manage cases, diagnose financial distress, evaluate recovery options,
                restructure viable businesses, administer insolvency, recover assets and
                generate professional reports from one intelligent platform.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/pricing" className="btn-primary px-6 py-3.5 text-base">
                  Create Free Account
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="btn-outline-navy px-6 py-3.5 text-base"
                >
                  <PlayCircle className="h-4 w-4" />
                  Explore Platform
                </Link>
              </div>
            </Reveal>

            {/* Trust bar */}
            <Reveal delay={0.2}>
              <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-navy/10 pt-6 sm:grid-cols-3 lg:grid-cols-5">
                {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-xs font-medium leading-snug text-ink-muted">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right column — floating dashboard */}
          <Reveal delay={0.15} y={32} className="lg:pl-4">
            <DashboardMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
