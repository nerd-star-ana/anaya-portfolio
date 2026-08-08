import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Web Development Portfolio',
      category: 'Web Development',
      description:
        'A collection of responsive and business-focused web applications showcasing modern UI/UX and real-world solutions.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      lovemystyle: 'https://lovemystyle.com.pk/',
      twincolony: 'https://twincolony.vercel.app/',
      image: '/images/amanat.png',
    },

    {
      title: 'Physics With Asim',
      category: 'Web Development',
      description:
        'Designed and developed a modern educational website for Physics With Asim, focused on presenting physics resources, courses, and educational content through a clean and responsive interface.',
      tech: [
        'React',
        'Tailwind CSS',
        'JavaScript',
        'UI/UX Design',
        'Responsive Design',
      ],
      physicswithasim: 'https://physicswithasim.vercel.app/',
      image: '/images/physics.png',
    },

    {
      title: 'Male Harassment Awareness Initiative',
      category: 'Advocacy & Design',
      description:
        'A research-based advocacy initiative addressing male harassment through writing, graphic design, and public awareness campaigns.',
      tech: ['Research', 'Graphic Design', 'Writing', 'Advocacy'],
      image: '/images/mha.jpg',
      article: '/pdfs/Men dont Cry.pdf',
      campaign: 'https://www.instagram.com/mha.initiative_/',
    },

    {
      title: 'BookStork Branding',
      category: 'Graphic Design',
      description:
        'Designed visual identity and promotional graphics for BookStork reading platform including social media content.',
      tech: ['Photoshop', 'Canva', 'Branding', 'Social Media Design'],
      image: '/images/book.jpg',
      link: 'https://www.instagram.com/bookstroks.pk/',
    },

    {
      title: 'Fashion Brand Graphics',
      category: 'Social Media Design',
      description:
        'Created promotional and marketing graphics for LoveMyStyle fashion brand, maintaining brand consistency across platforms.',
      tech: ['Canva', 'Photoshop', 'Branding', 'Marketing Design'],
      link: 'https://lovemystyle.com.pk/',
      image: '/images/fashion.jpg',
    },

    {
      title: 'Photography Portfolio',
      category: 'Photography & Visual Arts',
      description:
        'A curated collection of photographs capturing landscapes, architecture, nature, and everyday moments, showcasing my eye for composition, lighting, and visual storytelling.',
      tech: [
        'Photography',
        'Composition',
        'Photo Editing',
        'Visual Storytelling',
      ],
      link: '/pdfs/Photography Portfolio.pdf',
      image: '/images/nature.png',
    },

    {
      title: 'APSIS MUN Society Leadership',
      category: 'Leadership & Public Speaking',
      description:
        'Serving as a Director at APSIS MUN Society, I mentor delegates, conduct training sessions, manage the society’s social media presence, and help students develop their public speaking, diplomacy, and research skills. Several delegates I coached have gone on to receive Best Delegate and other prestigious awards at MUN conferences.',
      tech: [
        'Leadership',
        'Public Speaking',
        'Delegate Training',
        'Social Media Management',
        'Mentorship',
      ],
      instagram: 'https://www.instagram.com/ams._fort/',
      image: '/images/ams.jpg',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <p className="text-slate-400 text-lg">
            Web development, design, and advocacy work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 overflow-hidden hover:border-cyan-400/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >

              <div className="aspect-video overflow-hidden border-b border-cyan-400/10 bg-slate-800">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500">
                    No Image Available
                  </div>
                )}
              </div>

              <div className="p-6">

                <p className="text-cyan-400 text-sm font-semibold mb-2">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">

                  {project.lovemystyle && (
                    <a
                      href={project.lovemystyle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      LoveMyStyle
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.twincolony && (
                    <a
                      href={project.twincolony}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Twin Colony
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.physicswithasim && (
                    <a
                      href={project.physicswithasim}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      View Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.campaign && (
                    <a
                      href={project.campaign}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      View Campaign
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.article && (
                    <a
                      href={project.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Read Article
                      <FileText className="w-4 h-4" />
                    </a>
                  )}

                  {project.instagram && (
                    <a
                      href={project.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      View Society
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}