import React from 'react';
import { ExternalLink, FileText, Lock } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Twin Colony Community Platform',
      category: 'Web Development',
      description:
        'A community-focused web platform featuring skilled-person and professional directories alongside a local marketplace, designed to connect residents with services, opportunities, and one another.',
      tech: [
        'React',
        'Tailwind CSS',
        'JavaScript',
        'UI/UX Design',
        'Community Platform',
        'Marketplace',
      ],
      link: 'https://twincolony.vercel.app/',
      image: '/images/amanat.png',
    },

    {
      title: 'Scalefire.io',
      category: 'AI SaaS & Web Development',
      description:
        'An AI-powered ecommerce optimization platform designed to help online businesses improve profitability through intelligent pricing, advertising, traffic, conversion, and margin analysis.',
      tech: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'AI SaaS',
        'Dashboard UI',
        'Data Visualization',
        'Ecommerce',
      ],
      link: 'https://scalefire.io/',
      privateAccess: true,
      image: '/images/scalefire.png',
    },

    {
      title: 'Store Engine',
      category: 'Headless CMS',
      description:
        'A headless content management and ecommerce platform that separates content management from the frontend, allowing structured data and products to be managed through a centralized backend.',
      tech: [
        'React',
        'Next.js',
        'Headless CMS',
        'JavaScript',
        'Ecommerce',
        'API Integration',
        'Dashboard UI',
      ],
      link: 'https://store-engine-blush.vercel.app/login?callbackUrl=%2F',
      privateAccess: true,
      image: '/images/store-engine.png',
    },

    {
      title: 'MSEC – Renewables First',
      category: 'Education & Web Development',
      description:
        'A digital platform developed for the Margalla School on Energy & Climate, supporting an educational and professional development program focused on energy transition, climate, leadership, and practical learning.',
      tech: [
        'Web Development',
        'UI/UX Design',
        'Education Platform',
        'Responsive Design',
        'Forms',
        'User Management',
      ],
      link: 'https://msec.renewablesfirst.org/',
      privateAccess: true,
      image: '/images/msec.png',
    },

    {
      title: 'ST EAGLE',
      category: 'Industrial & B2B Web Development',
      description:
        'A modern corporate website for an industrial manufacturing business, designed to present its products, capabilities, and services through a professional B2B-focused digital experience.',
      tech: [
        'Web Development',
        'UI/UX Design',
        'B2B',
        'Responsive Design',
        'Corporate Website',
      ],
      link: 'https://www.steagle.pk/',
      image: '/images/steagle.png',
    },

    {
      title: 'Web Development Portfolio',
      category: 'Web Development',
      description:
        'A collection of responsive and business-focused web applications showcasing modern UI/UX, frontend development, and real-world digital solutions.',
      tech: [
        'React',
        'Tailwind CSS',
        'JavaScript',
        'Responsive Design',
        'UI/UX',
      ],
      lovemystyle: 'https://lovemystyle.com.pk/',
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
        'Designed visual identity and promotional graphics for BookStork reading platform, including social media content and promotional materials.',
      tech: ['Photoshop', 'Canva', 'Branding', 'Social Media Design'],
      image: '/images/book.jpg',
      link: 'https://www.instagram.com/bookstroks.pk/',
    },

    {
      title: 'Fashion Brand Graphics',
      category: 'Social Media Design',
      description:
        'Created promotional and marketing graphics for LoveMyStyle fashion brand, maintaining brand consistency across digital platforms.',
      tech: ['Canva', 'Photoshop', 'Branding', 'Marketing Design'],
      link: 'https://lovemystyle.com.pk/',
      image: '/images/fashion.jpg',
    },

    {
      title: 'Photography Portfolio',
      category: 'Photography & Visual Arts',
      description:
        'A curated collection of photographs capturing landscapes, architecture, nature, and everyday moments, showcasing composition, lighting, and visual storytelling.',
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
        'Serving as a Director at APSIS MUN Society, mentoring delegates, conducting training sessions, managing social media, and helping students develop public speaking, diplomacy, and research skills.',
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

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <p className="text-slate-400 text-lg">
            Web development, SaaS, UI/UX, design, and real-world digital solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 overflow-hidden hover:border-cyan-400/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >

              {/* Project Image */}
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

              {/* Project Content */}
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

                {/* Technologies */}
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

                {/* Private Access Notice */}
                {project.privateAccess && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    <span>Private demo access available</span>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-4">

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