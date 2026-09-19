'use client';

import { projects } from '@/lib/data';
import { useScrollReveal } from '@/lib/useScrollReveal';
import LynxSagaAnimation from './LynxSagaAnimation';

const linkClass =
  'text-sm font-medium text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]';

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

              return (
              <div
                key={project.id}
                className={`group bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[rgba(91,127,255,0.2)] transition-all hover:-translate-y-1 flex flex-col scroll-reveal${
                  hasDiagram ? ' md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="text-xs font-semibold uppercase px-2 py-1 rounded w-fit bg-[rgba(91,127,255,0.1)] text-[var(--accent)]">
                    ● {project.category}
                  </div>
                  {project.liveUrl ? (
                    <div className="text-xs font-semibold uppercase px-2 py-1 rounded w-fit bg-[rgba(45,226,196,0.1)] text-[var(--accent3)]">
                      ● Live
                    </div>
                  ) : (
                    project.status === 'in-progress' && (
                      <div className="text-xs font-semibold uppercase px-2 py-1 rounded w-fit bg-white/5 border border-[var(--border2)] text-[var(--text-muted2)]">
                        In progress
                      </div>
                    )
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

                {hasDiagram && <LynxSagaAnimation className="hidden md:block mb-4 -mx-1 opacity-80" />}

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

                {(project.liveUrl || project.repoUrl) && (
                  <div className="flex flex-wrap gap-5 mt-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        Live demo ↗
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        Source ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
