// portfolio/src/components/Footer.jsx
import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-1">
            Built with
            <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            by Anaya
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © 2026 Anaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
