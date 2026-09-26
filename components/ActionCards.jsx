import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { actionCards } from './data/content';

export default function ActionCards() {
  return (
    <section id="tools" className="bg-surface-subtle py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Quick Start"
          title="What would you like to do?"
          subtitle="Jump straight into the task at hand — every tool feeds directly into your cases, models and reports."
          linkLabel="View All Tools"
          linkHref="#all-tools"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {actionCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={Math.min(i * 0.05, 0.3)} y={20}>
                <Link
                  href="#tool"
                  className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-card sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${card.accent}1A`,
                        color: card.accent,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/10 text-ink-soft transition-colors duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {card.description}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
