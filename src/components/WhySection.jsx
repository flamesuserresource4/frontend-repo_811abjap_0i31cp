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
          {/* Before card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-900">Before</h3>
            <p className="mt-2 text-sm text-blue-800/80">Manual claim checks, fragmented documents, and slow TAT.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-20 rounded-lg bg-blue-50 shadow-inner" />
              ))}
            </div>
          </motion.div>

          {/* After card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-900">After</h3>
            <p className="mt-2 text-sm text-blue-800/80">Automated validation, digitized docs, and real-time visibility.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-20 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 shadow" />
              ))}
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
