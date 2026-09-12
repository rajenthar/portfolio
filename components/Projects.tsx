'use client';

import { projects } from '@/lib/data';
import { useScrollReveal } from '@/lib/useScrollReveal';
import LynxSagaAnimation from './LynxSagaAnimation';

export default function Projects() {
  useScrollReveal();

  return (
    <section id="projects" className="relative z-10 py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-4 scroll-reveal">Work</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-10 leading-tight scroll-reveal">
          Personal projects
        </h2>

        {projects.length === 0 ? (
          <div className="text-center py-24 text-[var(--text-muted2)]">
            <p className="text-lg mb-2">No projects yet</p>
            <p className="text-sm">Projects will appear here as you build them. Update lib/data.ts to add them.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => {
              const hasDiagram = project.id === 'lynx';
              // Only render as a link when there is a real destination.
              const Card = project.url ? 'a' : 'div';
              const linkProps = project.url
                ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' as const }
                : {};

              return (
              <Card
                key={project.id}
                {...linkProps}
                className={`group bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[rgba(91,127,255,0.2)] transition-all hover:-translate-y-1 flex flex-col scroll-reveal${
                  hasDiagram ? ' md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="text-xs font-semibold uppercase px-2 py-1 rounded w-fit bg-[rgba(91,127,255,0.1)] text-[var(--accent)]">
                    ● {project.category}
                  </div>
                  {project.status === 'in-progress' && (
                    <div className="text-xs font-semibold uppercase px-2 py-1 rounded w-fit bg-white/5 border border-[var(--border2)] text-[var(--text-muted2)]">
                      In progress
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{project.name}</h3>
                <p
                  className={`text-sm text-[var(--text-muted2)] mb-4 flex-grow${
                    hasDiagram ? ' md:max-w-2xl' : ''
                  }`}
                >
                  {project.description}
                </p>

                {hasDiagram && <LynxSagaAnimation className="mb-4 -mx-1 opacity-80" />}

                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex gap-6 mb-4 text-sm">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="font-bold text-[var(--text-primary)]">{metric.value}</div>
                        <div className="text-xs text-[var(--text-muted)]">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {project.url && (
                  <div className="inline-flex items-center gap-2 text-xs text-[var(--text-muted2)] group-hover:text-[var(--text-primary)] transition-colors mb-4">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3 24 5.7 18.6.3 12 .3z" />
                    </svg>
                    View repository
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-[var(--text-muted)] bg-white/5 border border-white/10 rounded px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
