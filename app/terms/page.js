import SiteLayout from '@/components/ui/SiteLayout';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export const metadata = {
  title: 'Terms of Use — BRIP360',
  description: 'The terms governing use of the BRIP360 platform.',
};

const sections = [
  { heading: '1. Acceptance of Terms', body: 'By accessing or using BRIP360 you agree to be bound by these Terms of Use and all applicable laws and regulations of the Federal Republic of Nigeria.' },
  { heading: '2. Use of the Platform', body: 'BRIP360 is provided to support professional business recovery and insolvency services. You agree to use it lawfully, keep your credentials secure and maintain the confidentiality of case information.' },
  { heading: '3. Accounts & Access', body: 'You are responsible for activity under your account. Access may be role-based and subject to the terms of your organisation\u2019s subscription.' },
  { heading: '4. Intellectual Property', body: 'All platform content, models, templates and software remain the intellectual property of BRIP360 or its licensors unless otherwise stated.' },
  { heading: '5. Limitation of Liability', body: 'BRIP360 provides tools and information to support professional judgement. It does not constitute legal, financial or insolvency advice, and liability is limited to the extent permitted by law.' },
  { heading: '6. Changes to Terms', body: 'We may update these terms from time to time. Continued use of the platform constitutes acceptance of the revised terms.' },
];

export default function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        highlight="Use"
        subtitle="Last updated: January 2026. Please read these terms carefully before using BRIP360."
        breadcrumb={[{ label: 'Terms' }]}
      />
      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={Math.min(i * 0.04, 0.24)}>
              <div>
                <h2 className="text-lg font-extrabold text-navy">{s.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
