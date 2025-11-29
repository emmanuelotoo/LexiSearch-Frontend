import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-dark border-t border-white/10 overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 font-serif font-bold text-2xl tracking-tight text-stone-100">
              <div className="h-8 w-8 rounded-sm bg-brand-gold flex items-center justify-center">
                <span className="text-lg text-brand-dark font-bold">L</span>
              </div>
              <span>Lexi<span className="text-brand-gold">Search</span></span>
            </div>
            <p className="text-stone-500 max-w-xs font-sans leading-relaxed">
              The new standard for legal intelligence. 
              Powered by advanced transformer models for semantic precision.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-gold/70 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              System Status: Operational
            </div>
          </div>

          {/* Navigation Columns */}
          {[
            {
              header: '/Platform',
              links: [
                { label: 'Search Engine', to: '/search' },
                { label: 'AI Assistant', to: '/chat' },
                { label: 'Case Library', to: '/library' },
                { label: 'API Access', to: '#' },
              ]
            },
            {
              header: '/Company',
              links: [
                { label: 'About Us', to: '#' },
                { label: 'Methodology', to: '#' },
                { label: 'Careers', to: '#' },
                { label: 'Contact', to: '#' },
              ]
            },
            {
              header: '/Legal',
              links: [
                { label: 'Privacy Policy', to: '#' },
                { label: 'Terms of Service', to: '#' },
                { label: 'Cookie Policy', to: '#' },
                { label: 'Security', to: '#' },
              ]
            }
          ].map((column) => (
            <div key={column.header} className="space-y-6">
              <h4 className="font-mono text-xs text-stone-600 uppercase tracking-widest">
                {column.header}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.to} 
                      className="text-stone-400 hover:text-brand-gold transition-colors text-sm font-sans block transform hover:translate-x-1 duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs font-mono">
            © 2025 LexiSearch. All rights reserved.
          </p>
          <div className="text-stone-700 text-xs font-mono uppercase tracking-widest">
            Accra • London • New York
          </div>
        </div>
      </div>
    </footer>
  );
};
