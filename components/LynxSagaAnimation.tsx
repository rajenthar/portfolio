'use client';

/**
 * Self-contained saga animation for the Lynx project card / detail panel.
 * No dependencies beyond React. Uses the portfolio's CSS custom properties
 * (--accent, --accent2, --accent3, --text-primary, --text-muted2) so it
 * inherits the site theme automatically.
 *
 * Respects prefers-reduced-motion via the .lynx-packet / .lynx-pulse rules in
 * app/globals.css: the motion is dropped, the diagram stays legible.
 *
 * Usage:
 *   import LynxSagaAnimation from '@/components/LynxSagaAnimation';
 *   <LynxSagaAnimation />
 */

const STEPS = [
  { x: 70, label: 'HOLD', sub: 'source account', color: 'var(--accent)', delay: '0s' },
  { x: 320, label: 'FX LOCK', sub: 'quote + lock rate', color: 'var(--accent2)', delay: '1s' },
  { x: 570, label: 'SETTLE', sub: 'destination ledger', color: 'var(--accent3)', delay: '2s' },
];

export default function LynxSagaAnimation({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 640 200"
        className="w-full h-auto"
        role="img"
        aria-label="Lynx three-step saga: hold funds, lock the FX rate, settle — with compensating actions on failure"
      >
        <defs>
          <linearGradient id="lynx-wire" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.15" />
            <stop offset="1" stopColor="var(--accent3)" stopOpacity="0.35" />
          </linearGradient>
          <filter id="lynx-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <text
          x="320" y="24" textAnchor="middle" fontSize="10" letterSpacing="1.5"
          fill="var(--text-muted)" fontFamily="ui-monospace, Menlo, monospace"
        >
          LEDGER-FIRST SAGA · EACH STEP DURABLE
        </text>

        <path id="lynx-rail" d="M70 92 H570" stroke="url(#lynx-wire)" strokeWidth="2" fill="none" />

        <path
          d="M545 112 C 430 168, 210 168, 95 112"
          fill="none" stroke="var(--rose, #f43f5e)" strokeOpacity="0.28"
          strokeWidth="1.6" strokeDasharray="5 6"
        />
        <text
          x="320" y="160" textAnchor="middle" fontSize="10"
          fill="var(--rose, #f43f5e)" fillOpacity="0.75"
          fontFamily="ui-monospace, Menlo, monospace"
        >
          compensate on failure
        </text>

        {STEPS.map((s) => (
          <g key={s.label}>
            <circle cx={s.x} cy={92} r={11} fill="var(--bg)" stroke={s.color} strokeWidth={2} />
            <circle cx={s.x} cy={92} r={11} fill="none" stroke={s.color} strokeWidth={2} opacity={0} className="lynx-pulse">
              <animate attributeName="r" values="11;22" dur="3s" begin={s.delay} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0" dur="3s" begin={s.delay} repeatCount="indefinite" />
            </circle>
            <text x={s.x} y={60} textAnchor="middle" fontSize="13" fontWeight={700} fill="var(--text-primary)">
              {s.label}
            </text>
            <text x={s.x} y={126} textAnchor="middle" fontSize="10" fill="var(--text-muted2)">
              {s.sub}
            </text>
          </g>
        ))}

        <circle r="4.5" fill="var(--accent3)" filter="url(#lynx-glow)" className="lynx-packet">
          <animateMotion
            dur="3s" repeatCount="indefinite" calcMode="spline"
            keyPoints="0;1" keyTimes="0;1" keySplines="0.45 0 0.15 1"
          >
            <mpath href="#lynx-rail" />
          </animateMotion>
          <animate
            attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1"
            dur="3s" repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
