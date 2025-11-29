import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSearchPage = location.pathname === '/search';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-brand-dark/80 backdrop-blur-xl supports-[backdrop-filter]:bg-brand-dark/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-[1800px] mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 font-serif font-bold text-xl tracking-tight text-stone-100 group">
            <div className="h-8 w-8 rounded-sm bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/20 group-hover:shadow-brand-gold/40 transition-all">
              <span className="text-lg text-brand-dark font-bold">L</span>
            </div>
            <span>Lexi<span className="text-brand-gold">Search</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {['Search', 'Ask AI', 'Library'].map((item) => (
              <Link 
                key={item}
                to={item === 'Ask AI' ? '/chat' : `/${item.toLowerCase()}`} 
                className="px-4 py-2 text-sm font-medium text-stone-400 hover:text-brand-gold hover:bg-brand-gold/5 rounded-sm transition-all uppercase tracking-wide"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {!isSearchPage && (
            <div className="hidden md:block w-64">
              <Input 
                placeholder="Search cases..." 
                className="h-9 bg-brand-surface/50 border-white/5 focus:bg-brand-surface"
              />
            </div>
          )}
          <div className="h-6 w-px bg-white/10 mx-2 hidden md:block" />
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-stone-400 hover:text-stone-100"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="shadow-brand-gold/20"
            onClick={() => navigate('/signup')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
