import Reveal from './Reveal';

/**
 * Row of headline statistics used across marketing / about pages.
 */
export default function StatBand({ stats = [], dark = false }) {
  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border lg:grid-cols-4 ${
        dark ? 'border-white/10 bg-white/10' : 'border-navy/10 bg-navy/10'
      }`}
    >
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={Math.min(i * 0.06, 0.3)}
          className={`p-6 ${dark ? 'bg-navy' : 'bg-white'}`}
        >
          <p
            className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${
              dark ? 'text-white' : 'text-navy'
            }`}
          >
            {stat.value}
          </p>
          <p
            className={`mt-1.5 text-xs font-medium leading-snug ${
              dark ? 'text-white/60' : 'text-ink-muted'
            }`}
          >
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
