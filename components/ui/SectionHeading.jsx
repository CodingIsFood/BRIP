import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

/**
 * Shared section header: optional eyebrow, title, subtitle and a
 * right-aligned "view all" link that collapses under the title on mobile.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  linkLabel,
  linkHref = '#',
}) {
  return (
    <Reveal className="mb-10 sm:mb-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="eyebrow mb-3 text-emerald-600">{eyebrow}</p>
          )}
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {subtitle}
            </p>
          )}
        </div>

        {linkLabel && (
          <Link
            href={linkHref}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
