'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { lifecycleSteps } from './data/content';

/**
 * Horizontal, scrollable chevron stepper.
 * Each step is a clipped chevron whose fill colour comes from the data so the
 * whole row reads as one blue -> green -> orange gradient.
 */
export default function LifecycleStepper() {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section
      id="lifecycle"
      className="relative overflow-hidden bg-navy py-16 lg:py-24"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"
      />

      <div className="container-page relative">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-3 text-emerald-400">The Lifecycle</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              End-to-End Recovery &amp; Insolvency Lifecycle
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              From first assessment to final closure — all in one platform.
            </p>
          </Reveal>

          {/* Scroll controls */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10"
              aria-label="Scroll lifecycle steps left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10"
              aria-label="Scroll lifecycle steps right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stepper rail */}
        <Reveal y={28}>
          <div
            ref={scrollRef}
            className="stepper-scroll -mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-5"
          >
            {lifecycleSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="snap-start"
                  style={{ width: 'clamp(190px, 24vw, 248px)', flex: '0 0 auto' }}
                >
                  <div
                    className="group relative h-full min-h-[168px] p-5 transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: s.color,
                      clipPath:
                        'polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%)',
                    }}
                    title={`Module context: ${s.title}`}
                  >
                    <div className="flex h-full flex-col justify-between pl-3">
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <Icon className="h-4 w-4 text-white" />
                        </span>
                        <span className="text-2xl font-extrabold text-white/40">
                          {String(s.step).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="mt-4 text-sm font-bold leading-snug text-white">
                        {s.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Progress meter reflecting the linear journey */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-orange-500" />
            </div>
            <span className="text-xs font-semibold text-white/60">
              10 steps · 18 modules
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
