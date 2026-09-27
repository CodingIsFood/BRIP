import SiteLayout from '@/components/ui/SiteLayout';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export const metadata = {
  title: 'Privacy Policy — BRIP360',
  description: 'How BRIP360 collects, uses and protects your data.',
};

const sections = [
  { heading: '1. Information We Collect', body: 'We collect information you provide directly, such as account details, case information and communications, as well as technical data generated through your use of the platform.' },
  { heading: '2. How We Use Information', body: 'Your information is used to operate and improve the platform, provide support, ensure security and comply with legal and regulatory obligations.' },
  { heading: '3. Data Security', body: 'We apply encryption, role-based access controls and audit trails to protect data. Access to client data is restricted to authorised users in line with your organisation settings.' },
  { heading: '4. Data Sharing', body: 'We do not sell personal data. Aggregated, anonymised data may be used to produce industry intelligence. Data is shared with third parties only as required to deliver the service or by law.' },
  { heading: '5. Data Retention', body: 'We retain information for as long as necessary to provide the service and meet legal obligations, after which it is securely deleted or anonymised.' },
  { heading: '6. Your Rights', body: 'You may request access to, correction of, or deletion of your personal data, subject to applicable law and professional retention requirements.' },
];

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        highlight="Policy"
        subtitle="Last updated: January 2026. Your privacy and data security are fundamental to how BRIP360 is built."
        breadcrumb={[{ label: 'Privacy' }]}
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
