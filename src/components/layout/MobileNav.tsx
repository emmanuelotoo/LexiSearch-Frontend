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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-brand-dark/95 backdrop-blur-md pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full space-y-1 relative',
              location.pathname === item.path
                ? 'text-brand-gold'
                : 'text-stone-500 hover:text-stone-300'
            )}
          >
            {location.pathname === item.path && (
              <span className="absolute top-0 w-full h-0.5 bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            )}
            <span className="text-xl filter grayscale opacity-80">{item.icon}</span>
            <span className="text-[10px] font-mono uppercase tracking-wider">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
