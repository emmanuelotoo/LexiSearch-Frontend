import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-brand-dark">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-sm bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/20 mb-4">
              <span className="text-2xl text-brand-dark font-bold font-serif">L</span>
            </div>
            <h2 className="text-3xl font-serif font-bold tracking-tight text-stone-100">
              Reset your password
            </h2>
            <p className="mt-2 text-sm text-stone-400">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-brand-surface/10 border border-green-500/20 rounded-sm p-6 text-center animate-in fade-in duration-500">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500/10 mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-medium text-stone-200 mb-2">Check your email</h3>
              <p className="text-sm text-stone-400 mb-6">
                We've sent a password reset link to <span className="text-stone-200 font-medium">{email}</span>.
              </p>
              <Button
                variant="outline"
                className="w-full border-white/10 hover:border-brand-gold/50 text-stone-300 hover:text-brand-gold"
                onClick={() => setIsSubmitted(false)}
              >
                Try another email
              </Button>
            </div>
          ) : (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4 rounded-md shadow-sm">
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-brand-surface/5 border-white/10 text-stone-200 placeholder:text-stone-600 focus:border-brand-gold/50 focus:ring-brand-gold/20"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  isLoading={isLoading}
                  className="w-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90 font-bold tracking-wide"
                >
                  Send Reset Link
                </Button>
              </div>

              <div className="text-center">
                <Link to="/signin" className="font-medium text-brand-gold hover:text-brand-gold/80 text-sm transition-colors">
                  Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
