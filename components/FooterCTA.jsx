import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';

/* A lightweight, hand-drawn SVG skyline — no external image asset needed. */
function Skyline() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-white/[0.07] sm:h-52"
      viewBox="0 0 1200 240"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="20" y="140" width="60" height="100" rx="3" />
        <rect x="90" y="100" width="46" height="140" rx="3" />
        <rect x="146" y="160" width="70" height="80" rx="3" />
        <rect x="226" y="70" width="54" height="170" rx="3" />
        <rect x="290" y="130" width="40" height="110" rx="3" />
        <rect x="340" y="110" width="64" height="130" rx="3" />
        <rect x="414" y="150" width="48" height="90" rx="3" />
        <rect x="472" y="60" width="58" height="180" rx="3" />
        <rect x="540" y="120" width="44" height="120" rx="3" />
        <rect x="594" y="90" width="66" height="150" rx="3" />
        <rect x="670" y="165" width="50" height="75" rx="3" />
        <rect x="730" y="110" width="56" height="130" rx="3" />
        <rect x="796" y="140" width="42" height="100" rx="3" />
        <rect x="848" y="80" width="62" height="160" rx="3" />
        <rect x="920" y="150" width="48" height="90" rx="3" />
        <rect x="978" y="120" width="60" height="120" rx="3" />
        <rect x="1048" y="160" width="52" height="80" rx="3" />
        <rect x="1110" y="100" width="64" height="140" rx="3" />
      </g>
    </svg>
  );
}

export default function FooterCTA() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-navy py-20 lg:py-28"
    >
      {/* Background gradient + glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <Skyline />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Transform How You Deliver Business Recovery &amp; Insolvency Services.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Join practitioners, firms, lenders and regulators building a stronger
            Nigeria with one integrated platform.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#create" className="btn-primary w-full px-6 py-3.5 text-base sm:w-auto">
              Create Your Free Account
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#demo"
              className="btn-outline-white w-full px-6 py-3.5 text-base sm:w-auto"
            >
              Request a Demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
