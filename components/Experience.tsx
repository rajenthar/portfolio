'use client';

import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-4">Timeline</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-10 leading-tight">
          Work experience
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex gap-4 pb-6 border-l border-[rgba(91,127,255,0.2)] pl-5 relative"
              style={{
                borderLeftColor: exp.isPersonal ? 'rgba(45,226,196,0.25)' : 'rgba(91,127,255,0.2)',
              }}
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-2.5 top-2 w-2 h-2 rounded-full"
                style={{
                  backgroundColor: exp.isPersonal ? 'var(--accent3)' : 'var(--accent)',
                  boxShadow: exp.isPersonal ? '0 0 10px var(--accent3)' : '0 0 10px var(--accent)',
                }}
              />

              <div className="flex-1 min-w-0">
                {/* Period & Location */}
                <div className="text-xs text-[var(--text-muted)] leading-relaxed mb-1">
                  <strong className={exp.isPersonal ? 'text-[var(--accent3)]' : 'text-[var(--accent)]'}>{exp.period}</strong>
                  {exp.location && <span className="ml-2">{exp.location}</span>}
                </div>

                {/* Role & Company */}
                <div className="mb-2">
                  <div className="font-bold text-[var(--text-primary)]">{exp.role}</div>
                  <div className={`text-sm font-semibold ${exp.isPersonal ? 'text-[var(--accent3)]' : 'text-[var(--accent2)]'}`}>
                    {exp.company}
                  </div>
                </div>

                {/* Company Info */}
                {exp.companyInfo && (
                  <p className="text-xs text-[var(--text-muted)] italic mb-3">{exp.companyInfo}</p>
                )}

                {/* Highlights as bullet points */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-xs text-[var(--text-muted2)] leading-relaxed flex gap-2"
                      >
                        <span className="text-[var(--accent)] flex-shrink-0 mt-1">▪</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
