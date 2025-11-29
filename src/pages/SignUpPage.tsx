import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      
      {/* Minimal Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 font-serif font-bold text-xl tracking-tight text-stone-100 group">
          <div className="h-8 w-8 rounded-sm bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/20">
            <span className="text-lg text-brand-dark font-bold">L</span>
          </div>
          <span>Lexi<span className="text-brand-gold">Search</span></span>
        </Link>
        <Link to="/signin" className="text-sm font-mono text-stone-400 hover:text-brand-gold transition-colors">
          Sign in to existing account
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          {/* Auth Card */}
          <div className="bg-brand-surface/5 border border-white/10 p-8 backdrop-blur-md relative group">
            {/* Decorative Corners */}
            <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-brand-gold/30" />
            <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-brand-gold/30" />
            
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/5 border border-brand-gold/10 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest">Join LexiSearch</span>
              </div>
              <h1 className="text-2xl font-serif text-stone-100 mb-2">Create Account</h1>
              <p className="text-stone-500 text-sm">Start your legal research journey today.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  placeholder="Jane"
                  required
                  className="bg-brand-dark/50"
                />
                <Input
                  label="Last Name"
                  placeholder="Doe"
                  required
                  className="bg-brand-dark/50"
                />
              </div>
              
              <Input
                label="Work Email"
                type="email"
                placeholder="name@company.com"
                required
                className="bg-brand-dark/50"
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="••••••••••••"
                required
                className="bg-brand-dark/50"
              />

              <Button 
                type="submit" 
                className="w-full bg-brand-gold text-brand-dark hover:bg-white font-mono uppercase tracking-wider h-11"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                    Creating account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-stone-500 font-mono">
                Already have an account? <Link to="/signin" className="text-brand-gold hover:underline">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
