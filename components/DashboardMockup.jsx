import {
  Briefcase,
  Wallet,
  Scale,
  TrendingUp,
  ListChecks,
  Sparkles,
  Send,
} from 'lucide-react';

const METRICS = [
  {
    label: 'Active Cases',
    value: '26',
    delta: '+18%',
    icon: Briefcase,
    color: '#2563EB',
  },
  {
    label: 'Assets Under Mgmt',
    value: '₦4.8B',
    delta: '+22%',
    icon: Wallet,
    color: '#10B981',
  },
  {
    label: 'Creditor Claims',
    value: '₦2.1B',
    delta: '+12%',
    icon: Scale,
    color: '#0EA5E9',
  },
  {
    label: 'Recoveries Achieved',
    value: '₦620M',
    delta: '+35%',
    icon: TrendingUp,
    color: '#8B5CF6',
  },
  {
    label: 'Pending Tasks',
    value: '14',
    delta: null,
    icon: ListChecks,
    color: '#F59E0B',
  },
];

/**
 * Floating dashboard mockup used in the hero's right column.
 * Purely presentational — safe to keep as a server component.
 */
export default function DashboardMockup() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-emerald-500/10 via-sky-400/10 to-transparent blur-2xl"
      />

      <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-float">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-navy/10 bg-surface-subtle px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
              OA
            </div>
            <div>
              <p className="text-sm font-semibold text-navy">
                Welcome back, Olumide
              </p>
              <p className="text-[11px] text-ink-soft">
                Practitioner Workspace · Live
              </p>
            </div>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 sm:inline-flex">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-500" />
            Synced
          </span>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:gap-3.5 sm:p-5">
          {METRICS.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="rounded-2xl border border-navy/10 bg-white p-3.5 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${m.color}1A`, color: m.color }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {m.delta && (
                    <span className="text-[11px] font-bold text-emerald-600">
                      {m.delta}
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-lg font-extrabold tracking-tight text-navy">
                  {m.value}
                </p>
                <p className="text-[11px] font-medium text-ink-soft">
                  {m.label}
                </p>
              </div>
            );
          })}

          {/* Navy tile completes the 6-cell grid */}
          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-800 p-3.5 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
              Portfolio Health
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-300" />
            </div>
            <p className="mt-2 text-xs font-semibold">72% cases on track</p>
          </div>
        </div>

        {/* AI Copilot mockup */}
        <div className="border-t border-navy/10 bg-surface-subtle p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-navy text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <p className="text-xs font-bold text-navy">Ask BRIP AI Copilot</p>
          </div>

          <div className="space-y-2.5">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-navy px-3.5 py-2.5 text-xs text-white">
              Run a solvency test on the Acme Ltd case.
            </div>
            <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-navy/10 bg-white px-3.5 py-2.5 text-xs text-ink-muted shadow-soft">
              Balance-sheet solvency <span className="font-semibold text-navy">fails</span>;
              cash-flow solvency <span className="font-semibold text-navy">passes for 6 weeks</span>.
              I&apos;ve drafted a 13-week cash flow and flagged 2 restructuring options.
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-xl border border-navy/10 bg-white px-3 py-2.5 shadow-soft">
            <input
              disabled
              placeholder="Ask about any case, model or report…"
              className="w-full bg-transparent text-xs text-ink-soft placeholder:text-ink-soft focus:outline-none"
              aria-label="Ask BRIP AI Copilot"
            />
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white">
              <Send className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
