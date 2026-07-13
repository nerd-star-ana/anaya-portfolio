  // portfolio/src/components/Projects.jsx
  import React from 'react';
  import { ExternalLink, Code2 } from 'lucide-react';

  export default function Projects() {
    const projects = [
    
    {
    title: 'Web Development Portfolio',
    category: 'Web Development',
    description:
      'A collection of responsive and business-focused web applications showcasing modern UI/UX and real-world solutions.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    amanat: 'https://amanatpos.vercel.app/login',
    lovemystyle: 'https://lovemystyle.com.pk/?srsltid=AfmBOop9gnNw7tESLk8DbWv-JcVSYEGobsIrEauuDs4V1P30hMpjW5x1',
    twincolony: 'https://twincolony.vercel.app/',
    image: '/images/amanat.png'

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
      'Visual Storytelling'
    ],
    link: '/pdfs/Photography Portfolio.pdf',
    image: '/images/nature.png'
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
      'Mentorship'
    ],
    instagram: 'https://www.instagram.com/ams._fort/',
    image:'/images/ams.jpg'
  }

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
                {/* Image Placeholder */}
                <div className="aspect-video overflow-hidden border-b border-cyan-400/10 bg-slate-800">
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
      <Code2 className="w-12 h-12 text-slate-500" />
    </div>
  )}
</div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
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

                {/* Links */}

  {project.amanat ? (
    <div className="flex gap-6 flex-wrap">
      <a
        href={project.amanat}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
      >
        AmanatPOS
        <ExternalLink className="w-4 h-4" />
      </a>

      <a
        href={project.lovemystyle}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
      >
        LoveMyStyle
        <ExternalLink className="w-4 h-4" />
      </a>
      <a href={project.twincolony}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
  >
    Twin Colony
    <ExternalLink className="w-4 h-4" />
  </a>
    </div>
  ) : project.article ? (
    <div className="flex gap-6 flex-wrap">
      <a
        href={project.article}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
      >
        Read Article
        <ExternalLink className="w-4 h-4" />
      </a>

      <a
        href={project.campaign}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
      >
        View Campaign
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
    ) : project.instagram ? (
    <a
      href={project.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
    >
      View Society
      <ExternalLink className="w-4 h-4" />
    </a>
  ) : (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }