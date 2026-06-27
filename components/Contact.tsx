'use client';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-16 md:py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-4">Contact</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8">
          Let's build<br />
          something real.
        </h2>

        <a
          href="mailto:rajentharj95@outlook.com"
          className="text-2xl md:text-4xl font-bold text-[var(--accent)] hover:opacity-65 transition-opacity block mb-12"
        >
          rajentharj95@outlook.com
        </a>

        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://github.com/rajenthar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-[var(--border)] text-[var(--text-muted2)] px-4 py-2 rounded-lg hover:bg-[rgba(91,127,255,0.09)] hover:border-[rgba(91,127,255,0.22)] hover:text-[var(--text-primary)] transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3 24 5.7 18.6.3 12 .3z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rajenthar-jeganathan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-[var(--border)] text-[var(--text-muted2)] px-4 py-2 rounded-lg hover:bg-[rgba(91,127,255,0.09)] hover:border-[rgba(91,127,255,0.22)] hover:text-[var(--text-primary)] transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="/resume/RAJENTHAR_JEGANATHAN_RESUME.pdf"
            download
            className="inline-flex items-center gap-2 bg-white/5 border border-[var(--border)] text-[var(--text-muted2)] px-4 py-2 rounded-lg hover:bg-[rgba(91,127,255,0.09)] hover:border-[rgba(91,127,255,0.22)] hover:text-[var(--text-primary)] transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
