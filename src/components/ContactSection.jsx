import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Let’s build the future of hospital automation together.</h2>
          <p className="mt-3 text-blue-800/80">Currently operational in Bengaluru with Tier 2 hospitals — expanding to Tier 1 hospitals.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-900">
                <Mail className="h-5 w-5 text-[#0066FF]" />
                <a href="mailto:contacts@kavachai.com" className="hover:underline">contacts@kavachai.com</a>
              </div>
              <div className="flex items-center gap-3 text-blue-900">
                <MapPin className="h-5 w-5 text-[#0066FF]" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>

            <a
              href="#schedule"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
            >
              <Calendar className="h-4 w-4" /> Schedule a Call
            </a>

            {/* Decorative mini graph to hint reduced TAT */}
            <div className="mt-8">
              <svg className="h-24 w-full" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8AB6FF" />
                    <stop offset="100%" stopColor="#0066FF" />
                  </linearGradient>
                </defs>
                <polyline points="0,80 40,75 80,70 120,60 160,48 200,35 240,25 280,20" fill="none" stroke="url(#line)" strokeWidth="3" />
                <g fill="#0066FF">
                  <circle cx="0" cy="80" r="3" />
                  <circle cx="80" cy="70" r="3" />
                  <circle cx="160" cy="48" r="3" />
                  <circle cx="240" cy="25" r="3" />
                  <circle cx="280" cy="20" r="3" />
                </g>
                <text x="5" y="15" fontSize="10" fill="#1e3a8a">Reduced TAT</text>
              </svg>
            </div>
          </motion.div>

          {/* Map / Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-blue-100" />
            <div className="relative p-6">
              <div className="mb-4 flex items-center gap-2 text-blue-900">
                <MapPin className="h-5 w-5 text-[#0066FF]" />
                <span className="font-medium">Bengaluru, Karnataka</span>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-blue-100 bg-white">
                <svg className="h-full w-full" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e5efff" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                  <rect width="600" height="350" fill="url(#grid)" />
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="350" stroke="#e6eeff" strokeWidth="1" />
                  ))}
                  {Array.from({ length: 7 }).map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="#e6eeff" strokeWidth="1" />
                  ))}
                  <circle cx="380" cy="220" r="18" fill="#0066FF" opacity="0.9" />
                  <text x="405" y="225" fontSize="12" fill="#1e3a8a">Bengaluru</text>
                  <path d="M140 90 C 220 100, 300 160, 380 220" stroke="#0066FF" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-blue-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-blue-800/80">
          <span>© 2025 KavachAI — All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-16 animate-pulse rounded-full bg-[#0066FF]" />
            <span className="h-0.5 w-4 animate-pulse rounded-full bg-[#0066FF]" />
            <span className="h-0.5 w-2 animate-pulse rounded-full bg-[#0066FF]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
