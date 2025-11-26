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
    <aside className="hidden lg:flex flex-col w-64 border-r border-slate-800 bg-slate-950 h-[calc(100vh-4rem)] sticky top-16">
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
              location.pathname === item.path
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
