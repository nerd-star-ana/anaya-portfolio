// portfolio/src/components/Skills.jsx
import React from 'react';
import { Code, Palette, Users, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technical',
      skills: ['HTML & CSS', 'JavaScript', 'React', 'Responsive Design', 'WordPress', 'UI/UX'],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative',
      skills: ['Photoshop', 'Illustrator', 'Canva', 'Branding', 'Graphic Design', 'Social Media Design'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Leadership',
      skills: ['Public Speaking', 'Negotiation', 'Team Coordination', 'Decision Making', 'Project Management', 'Conflict Resolution'],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Expertise',
      skills: ['Research & Analysis', 'Documentation', 'Critical Thinking', 'Event Management', 'Sports Leadership', 'Advocacy'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg">A blend of technical, creative, and leadership abilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-400/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-cyan-400 mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                    <span className="text-slate-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interest Areas */}
        <div className="mt-16 p-8 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
          <h3 className="text-2xl font-bold text-white mb-6">Areas of Interest</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Leadership',
              'Public Speaking',
              'Model United Nations',
              'Web Development',
              'UI/UX Design',
              'Graphic Design',
              'Youth Advocacy',
              'Social Media',
              'Entrepreneurship',
              'Basketball',
            ].map((interest, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-lg bg-slate-800/50 border border-cyan-400/20 text-center text-slate-300 hover:border-cyan-400/50 transition-all text-sm font-medium"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
