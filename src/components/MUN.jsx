import React, { useState } from 'react';
import { Award, BookOpen } from 'lucide-react';

export default function MUN() {
  const [activeTab, setActiveTab] = useState('awards');

  const awards = [
    { title: 'MUN Count', count: 5, color: 'from-orange-400 to-red-400' },
    { title: 'Best Delegate', count: 2, color: 'from-yellow-400 to-orange-400' },
    { title: 'High Commendation', count: 1, color: 'from-slate-300 to-slate-200' },
    { title: 'Special Mention', count: 2, color: 'from-orange-400 to-red-400' }
    
  ];

 const skills = [
  'Position Papers',
  'Draft Resolutions',
  'Working Papers',
  'Crisis Management',
  'Public Speaking',
  'Research & Analysis',
  'Negotiation',
  'Conflict Resolution',
];

  return (
    <section id="mun" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Model United Nations</span>
        </h2>
        <p className="text-slate-400 text-lg text-center mb-12 max-w-2xl mx-auto">
          Developing leadership, research, and diplomatic skills through numerous conferences
        </p>

        {/* Tabs */}
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('awards')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'awards'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-400/50'
            }`}
          >
            Awards & Recognition
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'skills'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-400/50'
            }`}
          >
            Expertise
          </button>
        </div>

        {/* Awards Content */}
        {activeTab === 'awards' && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border-2 border-cyan-400/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-center hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Award className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${award.color} bg-clip-text text-transparent`} />
                <h3 className="text-2xl font-bold text-white mb-2">{award.title}</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {award.count}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Skills Content */}
        {activeTab === 'skills' && (
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-slate-800/50 border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:bg-slate-800 flex items-center gap-3"
              >
                <BookOpen className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
