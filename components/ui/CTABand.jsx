import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

/**
 * Compact closing CTA band reused on subpages.
 */
export default function CTABand({
  eyebrow,
  title = 'Ready to get started with BRIP360?',
  subtitle = 'Create a free account and experience the full recovery and insolvency lifecycle in one platform.',
  primaryLabel = 'Create Free Account',
  primaryHref = '/pricing',
  secondaryLabel = 'Talk to Our Team',
  secondaryHref = '/contact',
}) {
  return (
    <section className="bg-white">
      <div className="container-page pb-16 lg:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 sm:px-12 lg:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl"
          />
          <Reveal className="relative mx-auto max-w-2xl text-center">
            {eyebrow && (
              <p className="eyebrow mb-4 text-emerald-400">{eyebrow}</p>
            )}
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="btn-primary w-full px-6 py-3.5 text-base sm:w-auto"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryHref}
                className="btn-outline-white w-full px-6 py-3.5 text-base sm:w-auto"
              >
                {secondaryLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
