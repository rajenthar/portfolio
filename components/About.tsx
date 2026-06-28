'use client';

import { skills } from '@/lib/data';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="relative z-10 py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-4 scroll-reveal">About</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 leading-tight scroll-reveal">
          Building systems<br />
          <span className="text-[var(--text-muted)]">that don't</span>
          <br />
          break at 3am.
        </h2>

        <div className="space-y-4 text-[var(--text-muted2)] leading-relaxed mb-8 max-w-2xl scroll-reveal">
          <p>
            I'm a <strong className="text-[var(--text-primary)]">Software Engineer</strong> at{' '}
            <strong className="text-[var(--text-primary)]">Rakuten, Singapore</strong>, building large-scale event-driven
            platforms handling millions of transactions daily.
          </p>
          <p>
            Previously built production financial systems at <strong className="text-[var(--text-primary)]">ZeroBeta</strong> and
            custom DSL compilers at ISA using ANTLR. I think in latency percentiles and failure modes.
          </p>
        </div>

        {/* Skills pills */}
        <div className="flex flex-wrap gap-2 scroll-reveal">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-2 text-xs font-medium text-[var(--text-muted2)] bg-white/4 border border-[var(--border)] rounded-full hover:text-[var(--text-primary)] hover:bg-[rgba(91,127,255,0.1)] hover:border-[rgba(91,127,255,0.25)] transition-all cursor-default hover:-translate-y-0.5"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
