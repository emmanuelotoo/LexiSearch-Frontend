import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../ui/Button';

export const MobileNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'Search', path: '/search', icon: '🔍' },
    { label: 'Chat', path: '/chat', icon: '💬' },
    { label: 'Library', path: '/library', icon: '📚' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full space-y-1',
              location.pathname === item.path
                ? 'text-sky-500'
                : 'text-slate-500 hover:text-slate-300'
            )}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
