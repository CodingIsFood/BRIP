import Link from 'next/link';
import { ArrowRight, Check, Layers, Workflow, ShieldCheck } from 'lucide-react';
import SiteLayout from '@/components/ui/SiteLayout';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Section, { SectionIntro } from '@/components/ui/Section';
import StatBand from '@/components/ui/StatBand';
import CTABand from '@/components/ui/CTABand';
import {
  solutionPillars,
  audienceDetail,
} from '@/components/data/pages';
import { lifecycleSteps, coreModules } from '@/components/data/content';

export const metadata = {
  title: 'Solutions — BRIP360',
  description:
    'End-to-end solutions for business recovery and insolvency: diagnose, restructure, administer, recover, report and collaborate.',
};

const differentiators = [
  'One integrated platform across the full lifecycle',
  'Standards-based workflows with full audit trails',
  'AI-enabled decision support at every stage',
  'Secure collaboration with clients and creditors',
];

export default function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Solutions"
        title="Every stage of recovery &"
        highlight="insolvency, solved."
        subtitle="BRIP360 brings diagnosis, restructuring, insolvency administration, asset recovery and reporting into a single, intelligent and compliant platform."
        breadcrumb={[{ label: 'Solutions' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/pricing" className="btn-primary px-6 py-3.5 text-base">
            Create Free Account
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-outline-white px-6 py-3.5 text-base">
            Request a Demo
          </Link>
        </div>
      </PageHero>

      {/* Pillars */}
      <Section tone="white">
        <SectionIntro
          eyebrow="What We Solve"
          title="Six solution pillars,"
          highlight="one platform."
          subtitle="Each pillar maps directly to the modules and lifecycle stages of the platform, so work flows seamlessly from first assessment to final closure."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={Math.min(i * 0.05, 0.3)} y={20}>
                <article className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${p.accent}1A`, color: p.accent }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 border-t border-navy/5 pt-4">
                    <Layers className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-xs font-semibold text-ink-soft">
                      {p.module}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Lifecycle recap */}
      <Section tone="navy">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-3 text-emerald-400">The Journey</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            From first assessment to final closure.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            Ten connected stages, with every action captured and reported automatically.
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {lifecycleSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.step} delay={Math.min(i * 0.04, 0.3)} y={16}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${s.color}33`, color: s.color }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold text-white/40">
                      STEP {String(s.step).padStart(2, '0')}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold leading-snug text-white">
                      {s.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Who benefits */}
      <Section tone="subtle">
        <SectionIntro
          eyebrow="Who Benefits"
          title="Built for every"
          highlight="stakeholder."
          subtitle="Bank-grade tooling for practitioners and firms, with tailored value for the institutions that surround them."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audienceDetail.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.role} delay={Math.min(i * 0.05, 0.3)} y={18}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{a.role}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      {a.benefit}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Why BRIP360 */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro
              eyebrow="Why BRIP360"
              title="One source of truth for"
              highlight="the whole profession."
              subtitle="Replace scattered spreadsheets and documents with structured, compliant and collaborative workflows."
            />
            <ul className="space-y-4">
              {differentiators.map((d, i) => (
                <Reveal key={d} delay={Math.min(i * 0.06, 0.3)}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-ink-muted">
                      {d}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal y={28}>
            <div className="rounded-3xl border border-navy/10 bg-surface-subtle p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                  <Workflow className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">18 core modules</p>
                  <p className="text-xs text-ink-soft">
                    From workspace to ecosystem
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {coreModules.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2 rounded-xl border border-navy/10 bg-white px-3 py-2.5"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span className="text-xs font-medium text-navy">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <Section tone="subtle" className="pt-0 lg:pt-0">
        <StatBand
          stats={[
            { value: '18', label: 'Integrated modules' },
            { value: '10', label: 'Lifecycle stages' },
            { value: '100%', label: 'Audit-trailed actions' },
            { value: '24/7', label: 'Secure access' },
          ]}
        />
      </Section>

      <CTABand />
    </SiteLayout>
  );
}
