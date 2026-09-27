import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

/**
 * Shared hero used at the top of every subpage.
 * `breadcrumb` is an array of { label, href } with the last item being current.
 */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  breadcrumb = [],
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="container-page relative py-12 lg:py-16">
        {breadcrumb.length > 0 && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/50">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                {breadcrumb.map((crumb, i) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-white/30" />
                    {crumb.href && i < breadcrumb.length - 1 ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-white"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-emerald-400">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <p className="eyebrow mb-4 text-emerald-400">{eyebrow}</p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}{' '}
              {highlight && <span className="text-emerald-400">{highlight}</span>}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                {subtitle}
              </p>
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.15}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
