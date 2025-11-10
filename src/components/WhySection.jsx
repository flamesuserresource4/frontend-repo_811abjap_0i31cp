import React from 'react';
import { motion } from 'framer-motion';

const WhySection = () => {
  return (
    <section id="why" className="relative w-full bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Why KavachAI</h2>
          <p className="mt-3 text-blue-800/80">From manual complexity to AI-automated clarity.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Before card - manual operations graphic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-900">Before</h3>
            <p className="mt-2 text-sm text-blue-800/80">Manual claim checks, fragmented documents, and slow TAT.</p>

            {/* SVG Illustration: Stacks of documents, stamps, clocks (manual chaos) */}
            <div className="mt-6 w-full overflow-hidden rounded-xl border border-blue-100 bg-blue-50/40">
              <svg className="h-56 w-full" viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#eef4ff" />
                  </linearGradient>
                  <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8AB6FF" />
                    <stop offset="100%" stopColor="#0066FF" />
                  </linearGradient>
                </defs>
                {/* scattered papers */}
                {[
                  { x: 60, y: 150, r: 6, w: 120, h: 70, rot: -8 },
                  { x: 180, y: 130, r: 6, w: 120, h: 70, rot: 6 },
                  { x: 120, y: 95, r: 6, w: 120, h: 70, rot: -2 },
                  { x: 250, y: 160, r: 6, w: 120, h: 70, rot: -5 },
                ].map((p, i) => (
                  <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.rot})`} opacity="0.95">
                    <rect x="0" y="0" rx={p.r} ry={p.r} width={p.w} height={p.h} fill="url(#paper)" stroke="#c7dbff" />
                    <line x1="12" y1="18" x2={p.w - 12} y2="18" stroke="#cfe0ff" strokeWidth="3" />
                    <line x1="12" y1="34" x2={p.w - 30} y2="34" stroke="#cfe0ff" strokeWidth="3" />
                    <line x1="12" y1="50" x2={p.w - 70} y2="50" stroke="#cfe0ff" strokeWidth="3" />
                  </g>
                ))}
                {/* stamp "Pending" */}
                <g transform="translate(330 65) rotate(-12)" opacity="0.9">
                  <rect x="0" y="0" width="120" height="36" rx="6" fill="#ffefef" stroke="#ff9a9a" />
                  <text x="60" y="23" textAnchor="middle" fontSize="14" fontWeight="700" fill="#e53939">PENDING</text>
                </g>
                {/* clocks */}
                <g transform="translate(470 40)">
                  <circle cx="0" cy="0" r="26" fill="#ffffff" stroke="#bcd3ff" />
                  <line x1="0" y1="0" x2="0" y2="-16" stroke="#1e3a8a" strokeWidth="2" />
                  <line x1="0" y1="0" x2="12" y2="8" stroke="#1e3a8a" strokeWidth="2" />
                </g>
                <g transform="translate(530 120)">
                  <circle cx="0" cy="0" r="22" fill="#ffffff" stroke="#bcd3ff" />
                  <line x1="0" y1="0" x2="0" y2="-12" stroke="#1e3a8a" strokeWidth="2" />
                  <line x1="0" y1="0" x2="10" y2="6" stroke="#1e3a8a" strokeWidth="2" />
                </g>
                {/* messy connectors */}
                <path d="M20 210 C 120 190, 200 230, 300 210 S 520 180, 590 205" fill="none" stroke="url(#accent)" strokeWidth="2" opacity="0.6" />
              </svg>
            </div>
          </motion.div>

          {/* After card - automated pipeline graphic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-900">After</h3>
            <p className="mt-2 text-sm text-blue-800/80">Automated validation, digitized docs, and real-time visibility.</p>

            {/* SVG Illustration: clean pipeline, checks, dashboard (AI clarity) */}
            <div className="mt-6 w-full overflow-hidden rounded-xl border border-blue-100 bg-white">
              <svg className="h-56 w-full" viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="pipe" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8AB6FF" />
                    <stop offset="100%" stopColor="#0066FF" />
                  </linearGradient>
                </defs>
                {/* pipeline */}
                <rect x="40" y="110" width="520" height="20" rx="10" fill="#e9f1ff" />
                {[
                  { cx: 120, label: 'OCR' },
                  { cx: 240, label: 'Validate' },
                  { cx: 360, label: 'Enrich' },
                  { cx: 480, label: 'Approve' },
                ].map((n, i) => (
                  <g key={i}>
                    <circle cx={n.cx} cy="120" r="22" fill="#ffffff" stroke="#bcd3ff" />
                    <path d="M111 120 l6 7 l14 -14" transform={`translate(${n.cx - 120} 0)`} fill="none" stroke="#0066FF" strokeWidth="3" />
                    <text x={n.cx} y="155" textAnchor="middle" fontSize="11" fill="#1e3a8a">{n.label}</text>
                  </g>
                ))}
                <rect x="80" y="80" width="160" height="16" rx="8" fill="url(#pipe)" />
                <rect x="280" y="80" width="100" height="16" rx="8" fill="url(#pipe)" opacity="0.6" />
                {/* dashboard */}
                <g transform="translate(400 30)">
                  <rect x="0" y="0" width="180" height="70" rx="10" fill="#f6f9ff" stroke="#d7e6ff" />
                  <text x="12" y="18" fontSize="12" fill="#1e3a8a">Claims Dashboard</text>
                  <polyline points="10,50 40,46 70,42 100,36 130,30 160,26" fill="none" stroke="#0066FF" strokeWidth="2" />
                </g>
              </svg>
            </div>

            {/* Animated line to show improvement */}
            <svg className="mt-6 h-16 w-full" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="improve" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8AB6FF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
              </defs>
              <polyline points="10,80 80,70 150,60 220,50 290,40 360,30" fill="none" stroke="url(#improve)" strokeWidth="3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
