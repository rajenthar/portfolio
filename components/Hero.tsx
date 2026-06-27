'use client';

import { completedProjects } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 md:py-32"
    >
      {/* Background canvas will go here */}
      <div className="absolute inset-0 -z-10">
        <canvas id="c0" className="absolute inset-0"></canvas>
        <canvas id="c1" className="absolute inset-0"></canvas>
        <canvas id="c2" className="absolute inset-0"></canvas>
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      </div>

      {/* Ghost text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-transparent pointer-events-none select-none opacity-5">
        RAJENTHAR
      </div>

      {/* Tag - removed relocation text */}
      <div className="inline-flex items-center gap-2 bg-[rgba(91,127,255,0.08)] border border-[rgba(91,127,255,0.16)] rounded-full px-4 py-2 mb-6 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider animate-in fade-in duration-900">
        <div className="w-2 h-2 bg-[var(--accent3)] rounded-full animate-pulse"></div>
        Available for opportunities
      </div>

      {/* Main heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans leading-tight mb-6 text-[var(--text-primary)] max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-900 delay-100">
        Rajenthar
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
          Jeganathan
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-[var(--text-muted2)] max-w-2xl mb-8 leading-relaxed animate-in fade-in duration-900 delay-200">
        <strong className="text-[var(--text-primary)]">Software Engineer</strong> building distributed systems at scale.
        Java · Kafka · Kubernetes · 6+ years at Rakuten, Singapore.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-3 flex-wrap justify-center mb-12 animate-in fade-in duration-900 delay-300">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Explore Projects ↓
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white/5 border border-[var(--border)] text-[var(--text-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur"
        >
          Get in Touch
        </a>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl border border-[var(--border)] rounded-2xl overflow-hidden backdrop-blur bg-[rgba(2,3,11,0.5)] animate-in fade-in duration-900 delay-400">
        <div className="p-4 text-center border-r border-b md:border-b-0 border-[var(--border)]">
          <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
            6<span className="text-[var(--accent)]">+</span>
          </div>
          <div className="text-xs text-[var(--text-muted)] mt-1">Years Exp.</div>
        </div>
        <div className="p-4 text-center md:border-r border-b md:border-b-0 border-[var(--border)]">
          <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
            {completedProjects.length}
          </div>
          <div className="text-xs text-[var(--text-muted)] mt-1">Projects</div>
        </div>
        <div className="p-4 text-center border-r border-[var(--border)]">
          <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
            10k<span className="text-xs text-[var(--accent)]">/s</span>
          </div>
          <div className="text-xs text-[var(--text-muted)] mt-1">Spans</div>
        </div>
        <div className="p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
            {'<'}10<span className="text-xs text-[var(--accent)]">ms</span>
          </div>
          <div className="text-xs text-[var(--text-muted)] mt-1">Latency</div>
        </div>
      </div>

    </section>
  );
}
