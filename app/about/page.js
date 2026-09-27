import Link from 'next/link';
import { ArrowRight, Target, Heart, Users } from 'lucide-react';
import SiteLayout from '@/components/ui/SiteLayout';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Section, { SectionIntro } from '@/components/ui/Section';
import StatBand from '@/components/ui/StatBand';
import CTABand from '@/components/ui/CTABand';
import {
  aboutValues,
  aboutMilestones,
  aboutStats,
  aboutTeam,
} from '@/components/data/pages';

export const metadata = {
  title: 'About — BRIP360',
  description:
    'BRIP360 is Nigeria\u2019s integrated business recovery and insolvency platform, built with BRIPAN members to enable a stronger Nigeria.',
};

const missions = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To give every recovery and insolvency professional in Nigeria the tools, data and structure to deliver work that stands up to scrutiny.',
  },
  {
    icon: Heart,
    title: 'Our Vision',
    desc: 'A stronger Nigeria where distressed but viable businesses are restored, value is preserved and stakeholders are treated fairly.',
  },
  {
    icon: Users,
    title: 'Who We Build For',
    desc: 'Practitioners, firms, lenders, lawyers, regulators, academics and every stakeholder who makes recovery work.',
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About BRIP360"
        title="Building the operating system for Nigerian"
        highlight="business recovery."
        subtitle="Born from a simple idea — that the profession deserves one integrated, standards-based platform to diagnose, restructure, administer and recover."
        breadcrumb={[{ label: 'About' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary px-6 py-3.5 text-base">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/solutions" className="btn-outline-white px-6 py-3.5 text-base">
            See Our Solutions
          </Link>
        </div>
      </PageHero>

      {/* Mission / Vision */}
      <Section tone="white">
        <div className="grid gap-4 sm:grid-cols-3">
          {missions.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.title} delay={Math.min(i * 0.06, 0.3)} y={20}>
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-soft sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Stats */}
      <Section tone="subtle" className="py-0 lg:py-0">
        <div className="pb-16 lg:pb-24">
          <StatBand stats={aboutStats} />
        </div>
      </Section>

      {/* Story / milestones */}
      <Section tone="white" className="pt-0 lg:pt-0">
        <SectionIntro
          eyebrow="Our Story"
          title="From an idea to a"
          highlight="national platform."
          subtitle="A short history of how BRIP360 came to life, shaped alongside the profession."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutMilestones.map((m, i) => (
            <Reveal key={m.year} delay={Math.min(i * 0.07, 0.3)} y={20}>
              <div className="relative h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
                <span className="text-3xl font-extrabold tracking-tight text-emerald-500">
                  {m.year}
                </span>
                <h3 className="mt-3 text-sm font-bold text-navy">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="subtle">
        <SectionIntro
          eyebrow="What We Stand For"
          title="Values that shape"
          highlight="the platform."
          subtitle="The principles that guide every feature we build and every decision we make."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={Math.min(i * 0.05, 0.3)} y={18}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-soft sm:p-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${v.accent}1A`, color: v.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{v.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Team */}
      <Section tone="white">
        <SectionIntro
          eyebrow="Leadership"
          title="A team drawn from"
          highlight="the profession."
          subtitle="Practitioners, product builders and compliance specialists working together."
          align="center"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutTeam.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i * 0.06, 0.3)} y={18}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-soft">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white"
                  style={{ backgroundColor: t.accent }}
                >
                  {t.initials}
                </span>
                <h3 className="mt-4 text-sm font-bold text-navy">{t.name}</h3>
                <p className="mt-1 text-xs text-ink-soft">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Join us in enabling a stronger Nigeria."
        subtitle="Whether you practise, advise, lend or regulate — BRIP360 is built for you."
      />
    </SiteLayout>
  );
}
