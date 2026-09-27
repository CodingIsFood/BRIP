import Link from 'next/link';
import { ArrowRight, ArrowUpRight, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import SiteLayout from '@/components/ui/SiteLayout';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Section, { SectionIntro } from '@/components/ui/Section';
import StatBand from '@/components/ui/StatBand';
import Accordion from '@/components/ui/Accordion';
import CTABand from '@/components/ui/CTABand';
import {
  knowledgeResources,
  insightStats,
  knowledgeFaqs,
} from '@/components/data/pages';

export const metadata = {
  title: 'Knowledge Hub — BRIP360',
  description:
    'Guides, models, templates, webinars, courses and industry intelligence for business recovery and insolvency professionals.',
};

const sectorTrends = [
  { sector: 'Manufacturing', distress: 72, color: '#2563EB' },
  { sector: 'Retail & Consumer', distress: 64, color: '#0EA5E9' },
  { sector: 'Construction', distress: 58, color: '#14B8A6' },
  { sector: 'Energy & Power', distress: 49, color: '#F59E0B' },
  { sector: 'Agriculture', distress: 41, color: '#8B5CF6' },
];

export default function KnowledgePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Insight, models and guidance —"
        highlight="all in one place."
        subtitle="Stay current with practitioner guides, ready-to-use models, on-demand learning and anonymised industry intelligence."
        breadcrumb={[{ label: 'Knowledge Hub' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/pricing" className="btn-primary px-6 py-3.5 text-base">
            Browse the Hub
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/tools" className="btn-outline-white px-6 py-3.5 text-base">
            Go to Tools & Models
          </Link>
        </div>
      </PageHero>

      {/* Stats */}
      <Section tone="white" className="pb-0 lg:pb-0">
        <StatBand stats={insightStats} />
      </Section>

      {/* Resources grid */}
      <Section tone="white">
        <SectionIntro
          eyebrow="Featured Resources"
          title="Learn, download and"
          highlight="put it to work."
          subtitle="A living library that grows with the profession — curated for practitioners, firms, associates and students."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeResources.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={Math.min(i * 0.05, 0.3)} y={20}>
                <Link
                  href="/pricing"
                  className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
                      style={{ backgroundColor: `${r.accent}1A`, color: r.accent }}
                    >
                      {r.type}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/10 text-ink-soft transition-colors group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <span
                    className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${r.accent}1A`, color: r.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {r.desc}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Industry intelligence */}
      <Section tone="subtle">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro
              eyebrow="Industry Intelligence"
              title="Anonymised data,"
              highlight="real benchmarks."
              subtitle="Understand where distress is rising and how recoveries are trending across Nigerian sectors — drawn from aggregated, anonymised platform activity."
            />
            <ul className="space-y-4">
              {[
                { icon: TrendingUp, label: 'Sector distress trends' },
                { icon: BarChart3, label: 'Recovery benchmarks' },
                { icon: PieChart, label: 'Anonymised industry data' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={Math.min(i * 0.06, 0.3)}>
                    <li className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-navy">
                        {item.label}
                      </span>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <Reveal y={28}>
            <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-soft sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-navy">
                  Sector Distress Index
                </p>
                <span className="text-[11px] font-semibold text-ink-soft">
                  H1 2026
                </span>
              </div>
              <div className="mt-6 space-y-5">
                {sectorTrends.map((s) => (
                  <div key={s.sector}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-xs font-medium text-ink-muted">
                        {s.sector}
                      </span>
                      <span className="text-xs font-bold text-navy">
                        {s.distress}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-navy/10">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${s.distress}%`, backgroundColor: s.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] leading-relaxed text-ink-soft">
                Illustrative index based on aggregated, anonymised platform data.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Frequently asked"
            highlight="questions."
            subtitle="Everything you need to know about the BRIP360 Knowledge Hub."
            align="center"
          />
          <Reveal>
            <Accordion items={knowledgeFaqs} />
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Learn, apply and grow with BRIP360."
        subtitle="Create a free account to download models, follow guides and access industry intelligence."
      />
    </SiteLayout>
  );
}
