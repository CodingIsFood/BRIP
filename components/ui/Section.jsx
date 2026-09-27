import Reveal from './Reveal';

const toneClasses = {
  white: 'bg-white',
  subtle: 'bg-surface-subtle',
  navy: 'bg-navy',
};

/**
 * Generic content section with a consistent container and vertical rhythm.
 */
export default function Section({
  id,
  tone = 'white',
  className = '',
  containerClassName = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${toneClasses[tone]} ${className}`}
    >
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </section>
  );
}

/** Small reusable intro block (eyebrow + title + subtitle). */
export function SectionIntro({ eyebrow, title, highlight, subtitle, align = 'left' }) {
  const isCenter = align === 'center';
  return (
    <Reveal
      className={`mb-10 sm:mb-12 ${
        isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      }`}
    >
      {eyebrow && <p className="eyebrow mb-3 text-emerald-600">{eyebrow}</p>}
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
        {title} {highlight && <span className="text-emerald-500">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-ink-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}
