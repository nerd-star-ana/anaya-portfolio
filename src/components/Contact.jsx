import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { 
      icon: '📧',
      label: 'Email', 
      href: 'mailto:anayawais@gmail.com' 
    },
    { 
      icon: '💼',
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/anaya-awais-6667191a7/' 
    },
    { 
      icon: '📸',
      label: 'Instagram', 
      href: 'https://instagram.com/anaya.awais_' 
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">I'd love to hear from you. Let's connect!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="anayawais@gmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-cyan-400/20">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-slate-400">anayawais@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-cyan-400/20">
              <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-slate-700 border border-cyan-400/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all text-lg"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/20">
              <p className="text-slate-300 text-sm leading-relaxed">
                I'm always interested in new opportunities, collaborations, and conversations about technology, advocacy, and leadership. Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
