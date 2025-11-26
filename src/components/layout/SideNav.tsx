import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../ui/Button';

export const SideNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Search', path: '/search' },
    { label: 'Ask AI', path: '/chat' },
    { label: 'Library', path: '/library' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-white/10 bg-brand-dark h-[calc(100vh-4rem)] sticky top-16">
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center px-4 py-3 text-sm font-mono uppercase tracking-wider transition-all relative group',
                isActive
                  ? 'text-brand-gold bg-brand-surface/5'
                  : 'text-stone-500 hover:text-stone-300 hover:bg-white/5'
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              )}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
