import Link from 'next/link';
import { Linkedin, Youtube, Twitter } from 'lucide-react';
import Logo from './ui/Logo';

const FOOTER_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Help', href: '/knowledge' },
  { label: 'Contact', href: '/contact' },
];

const PLATFORM_LINKS = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Tools & Models', href: '/tools' },
  { label: 'Knowledge Hub', href: '/knowledge' },
  { label: 'Pricing', href: '/pricing' },
];

const SOCIALS = [
  { label: 'LinkedIn', href: '#linkedin', icon: Linkedin },
  { label: 'X', href: '#x', icon: Twitter },
  { label: 'YouTube', href: '#youtube', icon: Youtube },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-navy-950 text-white"
    >
      <div className="container-page py-12 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo variant="dark" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Nigeria&apos;s integrated business recovery and insolvency platform —
              helping professionals and institutions diagnose, restructure, recover
              and report with confidence.
            </p>
          </div>

          {/* Links + socials */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Platform">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                Platform
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3 sm:flex-col sm:gap-y-3">
                {PLATFORM_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                Company
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3 sm:flex-col sm:gap-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                Follow
              </p>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 transition-colors hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/50">
            © 2026 BRIP360. All rights reserved. Supporting BRIPAN Members. Enabling
            a Stronger Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}

