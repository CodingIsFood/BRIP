import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { audience } from './data/content';

export default function AudienceSection() {
  return (
    <section id="solutions" className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Who BRIP360 Serves"
          subtitle="A shared workspace for every professional and institution involved in business recovery, restructuring and insolvency across Nigeria."
          linkLabel="View All Members & Partners"
          linkHref="#members"
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {audience.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={Math.min(i * 0.04, 0.3)} y={20}>
                <article className="group h-full rounded-2xl border border-navy/10 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-card sm:p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
