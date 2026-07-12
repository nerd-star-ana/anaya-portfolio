import React from 'react';
import { Target, Users } from 'lucide-react';

export default function Leadership() {
  
const roles = [
  {
    title: 'Founder & Executive Director',
    org: 'Male Harassment Awareness Initiative (MHA)',
    description:
      'Founded a youth-led advocacy initiative dedicated to raising awareness about male harassment through research, public education, graphic design, and digital campaigns. Leading strategic planning while preparing the initiative for TEDx Youth and future community outreach.',
    icon: <Target className="w-8 h-8" />,
    achievements: [
      'Founded the initiative',
      'Designed awareness campaigns',
      'Published research articles',
      'Built the initiative website'
    ],
  },

  {
    title: 'Director',
    org: 'APSIS MUN Society',
    description:
      'Lead delegate training sessions, mentor new and experienced delegates, manage society operations, oversee social media, and contribute to conference planning. Several delegates I mentored have earned Best Delegate and other awards.',
    icon: <Users className="w-8 h-8" />,
    achievements: [
      'Delegate coaching',
      'Conference organization',
      'Social media management',
      'Award-winning delegate mentorship'
    ],
  },

  {
    title: 'Photographer',
    org: 'Independent Photography',
    description:
      'Capture portraits, landscapes, architecture, and event photography with a focus on composition, storytelling, and visual aesthetics. Developed a portfolio showcasing creative and technical photography skills.',
    icon: <Target className="w-8 h-8" />,
    achievements: [
      'Photography portfolio',
      'Photo editing',
      'Creative composition',
      'Visual storytelling'
    ],
  },

  {
    title: 'Captain',
    org: 'School Basketball Team',
    description:
      'Lead the school basketball team by organizing practices, motivating teammates, and maintaining teamwork during competitions while balancing academics and extracurricular commitments.',
    icon: <Users className="w-8 h-8" />,
    achievements: [
      'Team leadership',
      'Practice coordination',
      'Competitive tournaments',
      'Mentored younger players'
    ],
  },

  {
    title: 'Freelance Web Developer',
    org: 'Self-Employed (2023 – Present)',
    description:
      'Design and develop websites for clients, creating responsive, modern, and user-focused digital experiences. Worked with businesses on branding, UI/UX, and complete website development.',
    icon: <Target className="w-8 h-8" />,
    achievements: [
      'Client projects since 2023',
      'Responsive web development',
      'UI/UX design',
      'Business websites'
    ],
  },

  {
    title: 'Social Media Manager',
    org: 'Creative & Brand Management',
    description:
      'Manage social media content, branding strategies, and digital campaigns for organizations and businesses, creating engaging visuals while maintaining a consistent brand identity.',
    icon: <Users className="w-8 h-8" />,
    achievements: [
      'Content strategy',
      'Brand identity',
      'Graphic design',
      'Audience engagement'
    ],
  },
];

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leadership Journey</span>
          </h2>
          <p className="text-slate-400 text-lg">Founding initiatives and guiding others towards excellence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-400/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-cyan-400 mb-4">{role.icon}</div>

              <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
              <p className="text-cyan-300 text-sm font-semibold mb-4">{role.org}</p>

              <p className="text-slate-300 mb-6 leading-relaxed">{role.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-400">Key Achievements:</p>
                {role.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
