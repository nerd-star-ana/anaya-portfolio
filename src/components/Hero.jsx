// portfolio/src/components/Hero.jsx
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Profile Image Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full border-2 border-cyan-400 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
           
            <img
  src="/images/anaya.jpeg"
  alt="Anaya Awais"
  className="w-full h-full object-cover rotate-[10deg]"
/>
        </div>
</div>
        {/* Main Headline */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Welcome to my portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Anaya Awais</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leadership advocate • MUN director • Graphic designer • Web developer • Basketball player
          </p>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Combining technology, advocacy, and leadership to create meaningful impact while inspiring the next generation
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2">
            View My Work
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
            Get in Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
