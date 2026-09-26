import { Globe2 } from 'lucide-react';

/**
 * BRIP360 wordmark: a leaf/globe emerald icon + typographic logo.
 * `variant` toggles colour for use on light vs. dark backgrounds.
 */
export default function Logo({ variant = 'light', className = '' }) {
  const isDark = variant === 'dark';
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="BRIP360 home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 shadow-soft">
        <Globe2 className="h-5 w-5 text-white" strokeWidth={2.2} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-white ring-2 ring-emerald-500" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-navy'
          }`}
        >
          BRIP
          <span className="text-emerald-500">360</span>
        </span>
        <span
          className={`mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] ${
            isDark ? 'text-white/60' : 'text-ink-soft'
          }`}
        >
          Recovery &amp; Insolvency
        </span>
      </span>
    </a>
  );
}
