import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Zn7XRxnnbSat5OJG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm"
          >
            KavachAI — AI-driven Hospital Automation & Claims Intelligence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-balance text-4xl font-extrabold leading-tight text-blue-900 sm:text-5xl md:text-6xl"
          >
            Automating Hospital Workflows with AI Precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-pretty text-base text-blue-700/80 sm:text-lg"
          >
            Streamline admin tasks, accelerate claim approvals, and enhance hospital efficiency with KavachAI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              <Play className="h-4 w-4" /> Watch Overview
            </a>
          </motion.div>
        </motion.div>

        {/* Subtle AI particles lines using decorative elements */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <div className="h-px w-64 animate-pulse bg-gradient-to-r from-transparent via-[#0066FF] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
