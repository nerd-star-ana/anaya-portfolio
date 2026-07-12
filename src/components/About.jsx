// portfolio/src/components/About.jsx
import React from 'react';
import { Award, BookOpen, Code, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Award className="w-6 h-6" />, label: 'MUN Awards', value: '4+ Major Awards' },
    { icon: <Users className="w-6 h-6" />, label: 'Leadership', value: 'Founder & Director' },
    { icon: <Code className="w-6 h-6" />, label: 'Web Dev', value: '3+ Projects' },
    { icon: <BookOpen className="w-6 h-6" />, label: 'Passion', value: 'Advocacy & Tech' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <div>
            <div className="aspect-square rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              {/* Replace with actual image: <img src="/about-image.jpg" alt="About" /> */}
              <div className="aspect-square rounded-2xl border-2 border-cyan-400/30 overflow-hidden">
  <img
    src="/images/anaya2.jpeg"
    alt="About Anaya"
    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
  />
</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Who I Am</span>
            </h2>

            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              I'm an A-Level student from APSACS Fort Road with a passion for combining technology, advocacy, and leadership to create meaningful change. My journey spans to founding youth-led initiatives that challenge social stigmas.
            </p>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              What drives me is the belief that every voice matters, that technology can amplify important conversations, and that young people have the power to reshape conversations on critical issues.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-slate-800/50 border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:bg-slate-800"
                >
                  <div className="text-cyan-400 mb-2">{item.icon}</div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <div className="text-white font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
