import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* AI-Hospital connection illustration using layered gradients */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-xl">
            <div className="pointer-events-none absolute inset-0">
              <svg className="h-full w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8AB6FF" />
                    <stop offset="100%" stopColor="#0066FF" />
                  </linearGradient>
                </defs>
                <g opacity="0.22">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <path key={i} d={`M0 ${20 + i * 30} C 150 ${10 + i * 25}, 300 ${30 + i * 25}, 600 ${20 + i * 30}`} stroke="url(#grad)" strokeWidth="2" fill="none" />
                  ))}
                </g>
                <g>
                  <circle cx="110" cy="290" r="52" fill="#ffffff" stroke="#0066FF" strokeWidth="3" />
                  <rect x="85" y="270" width="50" height="25" rx="4" fill="#0066FF" opacity="0.15" />
                  <text x="80" y="295" fontSize="12" fill="#1e3a8a">Hospital</text>

                  <circle cx="470" cy="120" r="52" fill="#ffffff" stroke="#0066FF" strokeWidth="3" />
                  <text x="445" y="125" fontSize="12" fill="#1e3a8a">AI Brain</text>

                  <path d="M162 268 C 250 220, 360 170, 418 150" stroke="#0066FF" strokeWidth="3" fill="none" markerEnd="url(#arrow)" />
                  <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,6 L9,3 z" fill="#0066FF" />
                    </marker>
                  </defs>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">About KavachAI</h2>
          <p className="text-blue-800/80">
            KavachAI represents the next era of hospital automation — blending artificial intelligence, data precision, and visual sophistication to redefine how hospitals manage claims, documents, and operations.
          </p>
          <p className="text-blue-800/80">
            We modernize hospital administration through intelligent workflows: automating claim pre-validation, digitizing documents, and surfacing real-time insights so your teams can focus on patient care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
