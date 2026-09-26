import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'BRIP360 — Nigeria\u2019s Integrated Business Recovery & Insolvency Platform',
  description:
    'Manage cases, diagnose financial distress, evaluate recovery options, restructure viable businesses, administer insolvency, recover assets and generate professional reports from one intelligent platform.',
  keywords: [
    'BRIP360',
    'business recovery',
    'insolvency',
    'Nigeria',
    'BRIPAN',
    'restructuring',
    'financial distress',
  ],
  openGraph: {
    title: 'BRIP360 — One Platform. Every Stage of Business Recovery & Insolvency.',
    description:
      'Nigeria\u2019s integrated business recovery and insolvency platform for practitioners, firms, lenders, lawyers and regulators.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
