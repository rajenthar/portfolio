'use client';

import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const c0Ref = useRef<HTMLCanvasElement>(null);
  const c1Ref = useRef<HTMLCanvasElement>(null);
  const c2Ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;

    // Layer 0: Nebula + Stars
    const initLayer0 = () => {
      const cv = c0Ref.current;
      if (!cv) return;
      const cx = cv.getContext('2d');
      if (!cx) return;

      let W = window.innerWidth;
      let H = window.innerHeight;

      const resize = () => {
        W = cv.width = window.innerWidth;
        H = cv.height = window.innerHeight;
      };
      resize();

      const nebulas = [
        { ox: 0.13, oy: 0.2, rx: 0.52, ry: 0.38, h: 228, s: 0.00015, ph: 0.0 },
        { ox: 0.82, oy: 0.16, rx: 0.44, ry: 0.32, h: 258, s: 0.00012, ph: 1.8 },
        { ox: 0.5, oy: 0.78, rx: 0.4, ry: 0.28, h: 192, s: 0.00017, ph: 3.5 },
        { ox: 0.88, oy: 0.68, rx: 0.34, ry: 0.25, h: 248, s: 0.00013, ph: 2.2 },
        { ox: 0.22, oy: 0.82, rx: 0.3, ry: 0.22, h: 210, s: 0.00019, ph: 4.1 },
        { ox: 0.6, oy: 0.42, rx: 0.26, ry: 0.19, h: 272, s: 0.0001, ph: 5.7 },
      ];

      const mkStar = (bright: boolean) => ({
        x: Math.random(),
        y: Math.random(),
        r: bright ? Math.random() * 1.1 + 0.3 : Math.random() * 0.6 + 0.1,
        a: bright ? Math.random() * 0.38 + 0.1 : Math.random() * 0.18 + 0.03,
        tw: Math.random() * Math.PI * 2,
        ts: Math.random() * 0.012 + 0.003,
        layer: Math.random() * 0.8 + (bright ? 0.3 : 0),
        col: Math.random() > 0.85 ? [220, 200, 255] : [200, 215, 255],
      });

      const stars = [
        ...Array.from({ length: 280 }, () => mkStar(false)),
        ...Array.from({ length: 75 }, () => mkStar(true)),
      ];

      let t = 0,
        smx = 0.5,
        smy = 0.5,
        tmx = 0.5,
        tmy = 0.5;

      if (!isTouch) {
        window.addEventListener('mousemove', (e) => {
          tmx = e.clientX / W;
          tmy = e.clientY / H;
        });
      }

      const frame = () => {
        cx.clearRect(0, 0, W, H);
        smx += (tmx - smx) * 0.018;
        smy += (tmy - smy) * 0.018;
        const mdx = smx - 0.5,
          mdy = smy - 0.5;

        nebulas.forEach((n) => {
          const ph = t * n.s * Math.PI * 2;
          const breathe = 1 + 0.1 * Math.sin(ph * 1.3 + n.ph);
          const nx = (n.ox + Math.sin(ph * 0.7 + n.ph) * 0.04 + mdx * 0.03) * W;
          const ny = (n.oy + Math.cos(ph * 0.5 + n.ph) * 0.03 + mdy * 0.022) * H;
          const rw = n.rx * W * breathe,
            rh = n.ry * H * breathe;

          cx.save();
          cx.translate(nx, ny);
          cx.scale(1, rh / rw);

          const g = cx.createRadialGradient(0, 0, 0, 0, 0, rw);
          g.addColorStop(0, `hsla(${n.h},68%,52%,.06)`);
          g.addColorStop(0.4, `hsla(${n.h + 18},55%,44%,.028)`);
          g.addColorStop(0.75, `hsla(${n.h + 35},40%,35%,.01)`);
          g.addColorStop(1, 'transparent');

          cx.fillStyle = g;
          cx.beginPath();
          cx.arc(0, 0, rw, 0, Math.PI * 2);
          cx.fill();
          cx.restore();
        });

        stars.forEach((s: any) => {
          s.tw += s.ts;
          const twink = 0.55 + 0.45 * Math.sin(s.tw);
          const px = (s.x + mdx * s.layer * 0.02) * W;
          const py = (s.y + mdy * s.layer * 0.014) * H;

          cx.beginPath();
          cx.arc(px, py, s.r, 0, Math.PI * 2);
          cx.fillStyle = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${s.a * twink})`;
          cx.fill();
        });

        t++;
        requestAnimationFrame(frame);
      };

      window.addEventListener('resize', resize);
      frame();
    };

    // Layer 1: Shooting Stars
    const initLayer1 = () => {
      if (isTouch) return;

      const cv = c1Ref.current;
      if (!cv) return;
      const cx = cv.getContext('2d');
      if (!cx) return;

      let W = window.innerWidth;
      let H = window.innerHeight;

      const resize = () => {
        W = cv.width = window.innerWidth;
        H = cv.height = window.innerHeight;
      };
      resize();

      const shooters: any[] = [];
      let timer = 0,
        next = 200;

      const spawn = () => {
        const spd = 6 + Math.random() * 8;
        const angle = Math.PI * (0.52 + Math.random() * 0.16);
        shooters.push({
          x: W * (0.3 + Math.random() * 0.7),
          y: H * (Math.random() * 0.4),
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          len: 80 + Math.random() * 140,
          life: 1,
          decay: 0.018 + Math.random() * 0.012,
          w: 0.6 + Math.random() * 0.8,
        });
      };

      const frame = () => {
        cx.clearRect(0, 0, W, H);

        if (++timer >= next) {
          spawn();
          timer = 0;
          next = 180 + Math.random() * 300;
        }

        for (let i = shooters.length - 1; i >= 0; i--) {
          const s = shooters[i];
          s.x += s.vx;
          s.y += s.vy;
          s.life -= s.decay;

          if (s.life <= 0) {
            shooters.splice(i, 1);
            continue;
          }

          const mag = Math.hypot(s.vx, s.vy);
          const tx = s.x - (s.vx / mag) * s.len;
          const ty = s.y - (s.vy / mag) * s.len;

          const g = cx.createLinearGradient(s.x, s.y, tx, ty);
          g.addColorStop(0, `rgba(210,225,255,${s.life * 0.9})`);
          g.addColorStop(0.4, `rgba(140,170,255,${s.life * 0.4})`);
          g.addColorStop(1, 'transparent');

          cx.beginPath();
          cx.moveTo(s.x, s.y);
          cx.lineTo(tx, ty);
          cx.strokeStyle = g;
          cx.lineWidth = s.w * s.life;
          cx.lineCap = 'round';
          cx.stroke();

          const hg = cx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 4);
          hg.addColorStop(0, `rgba(220,235,255,${s.life * 0.8})`);
          hg.addColorStop(1, 'transparent');
          cx.fillStyle = hg;
          cx.beginPath();
          cx.arc(s.x, s.y, 4, 0, Math.PI * 2);
          cx.fill();
        }

        requestAnimationFrame(frame);
      };

      window.addEventListener('resize', resize);
      frame();
    };

    // Layer 2: Particle Network
    const initLayer2 = () => {
      const cv = c2Ref.current;
      if (!cv) return;
      const cx = cv.getContext('2d');
      if (!cx) return;

      let W = window.innerWidth;
      let H = window.innerHeight;

      const resize = () => {
        W = cv.width = window.innerWidth;
        H = cv.height = window.innerHeight;
      };
      resize();

      const COUNT = isTouch ? 60 : 140;
      const REACH = isTouch ? 100 : 140;

      let mx = -9999,
        my = -9999;

      if (!isTouch) {
        window.addEventListener('mousemove', (e) => {
          mx = e.clientX;
          my = e.clientY;
        });
      }

      let driftX = 0,
        driftY = 0;

      class Node {
        x: number;
        y: number;
        z: number;
        vx: number;
        vy: number;
        r: number;
        baseA: number;
        hue: number;
        ctx: CanvasRenderingContext2D;

        constructor(ctx: CanvasRenderingContext2D) {
          this.ctx = ctx;
          this.x = Math.random() * W;
          this.y = Math.random() * H;
          this.z = Math.random() * 2.2 + 0.3;
          this.vx = (Math.random() - 0.5) * 0.22;
          this.vy = (Math.random() - 0.5) * 0.22;
          this.r = Math.random() * 1.3 + 0.25;
          this.baseA = Math.random() * 0.38 + 0.07;
          this.hue = 220 + Math.random() * 50;
        }

        tick() {
          this.x += this.vx * this.z * 0.55 + driftX * this.z * 0.4;
          this.y += this.vy * this.z * 0.55 + driftY * this.z * 0.3;

          if (!isTouch) {
            const dx = this.x - mx,
              dy = this.y - my;
            const d = Math.hypot(dx, dy);
            if (d < 100 && d > 0) {
              const f = ((100 - d) / 100) * 0.38;
              this.x += (dx / d) * f;
              this.y += (dy / d) * f;
            }
          }

          if (this.x < -8) this.x = W + 8;
          if (this.x > W + 8) this.x = -8;
          if (this.y < -8) this.y = H + 8;
          if (this.y > H + 8) this.y = -8;
        }

        draw() {
          const sz = this.r * Math.min(this.z * 0.55, 1.2);
          const a = this.baseA * Math.min(this.z / 1.6, 1);
          this.ctx.beginPath();
          this.ctx.arc(this.x, this.y, sz, 0, Math.PI * 2);
          this.ctx.fillStyle = `hsla(${this.hue},72%,72%,${a})`;
          this.ctx.fill();
        }
      }

      const nodes = Array.from({ length: COUNT }, () => new Node(cx));

      const drawNet = () => {
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);

            if (d < REACH) {
              const dz = 1 - Math.abs(a.z - b.z) / 2.8;
              cx.beginPath();
              cx.moveTo(a.x, a.y);
              cx.lineTo(b.x, b.y);
              cx.strokeStyle = `rgba(91,127,255,${((1 - d / REACH) * 0.1) * dz})`;
              cx.lineWidth = 0.5;
              cx.stroke();
            }
          }
        }

        if (!isTouch && mx > 0) {
          nodes.forEach((n) => {
            const d = Math.hypot(n.x - mx, n.y - my);
            if (d < 150) {
              cx.beginPath();
              cx.moveTo(n.x, n.y);
              cx.lineTo(mx, my);
              cx.strokeStyle = `rgba(139,109,255,${(1 - d / 150) * 0.14})`;
              cx.lineWidth = 0.45;
              cx.stroke();
            }
          });

          const g = cx.createRadialGradient(mx, my, 0, mx, my, 80);
          g.addColorStop(0, 'rgba(91,127,255,.06)');
          g.addColorStop(1, 'transparent');
          cx.fillStyle = g;
          cx.beginPath();
          cx.arc(mx, my, 80, 0, Math.PI * 2);
          cx.fill();
        }
      };

      const loop = () => {
        cx.clearRect(0, 0, W, H);

        if (!isTouch) {
          const tdx = mx > 0 ? (mx / W - 0.5) * 0.003 : 0;
          const tdy = my > 0 ? (my / H - 0.5) * 0.003 : 0;
          driftX += (tdx - driftX) * 0.05;
          driftY += (tdy - driftY) * 0.05;
        }

        drawNet();
        nodes.forEach((n) => {
          n.tick();
          n.draw();
        });

        requestAnimationFrame(loop);
      };

      window.addEventListener('resize', resize);
      loop();
    };

    initLayer0();
    initLayer1();
    initLayer2();
  }, []);

  return (
    <>
      <canvas ref={c0Ref} className="fixed inset-0 z-0 pointer-events-none" />
      <canvas ref={c1Ref} className="fixed inset-0 z-[1] pointer-events-none" />
      <canvas ref={c2Ref} className="fixed inset-0 z-[2] pointer-events-none" />
      <div className="fixed inset-0 z-[3] pointer-events-none bg-radial-gradient from-transparent via-transparent to-[rgba(2,3,11,0.7)]" />
    </>
  );
}
