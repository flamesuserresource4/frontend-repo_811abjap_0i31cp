import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck2, FileDigit, Cog, LayoutDashboard, Search } from 'lucide-react';

const features = [
  {
    icon: FileCheck2,
    title: 'Claim Pre-Validation',
    desc: 'Detects errors before submission to reduce rejections and speed approvals.'
  },
  {
    icon: FileDigit,
    title: 'Document Digitization',
    desc: 'Extracts and validates information from medical records with high accuracy.'
  },
  {
    icon: Cog,
    title: 'Workflow Automation',
    desc: 'Configurable automations that reduce manual effort for admin teams.'
  },
  {
    icon: LayoutDashboard,
    title: 'Real-time Claim Dashboard',
    desc: 'Track every claim instantly with live status, SLAs, and alerts.'
  },
  {
    icon: Search,
    title: 'Data Insights',
    desc: 'AI analytics to improve claim success rate and reduce TAT.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Key Features</h2>
          <p className="mt-3 text-blue-800/80">Interactive, AI-powered modules designed for hospitals and claim teams.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-2xl transition group-hover:opacity-70" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF] shadow-inner">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
              <p className="mt-2 text-sm text-blue-800/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
