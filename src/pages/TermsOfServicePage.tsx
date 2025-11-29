import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export const TermsOfServicePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">Terms of Service</h1>
          <p className="text-sm text-stone-500 mb-12">Last Updated: November 29, 2025</p>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-brand-gold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using LexiSearch, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-gold mb-4">2. Use of Service</h2>
              <p>
                LexiSearch is a legal research tool. It is not a substitute for professional legal advice. 
                You agree to use the service only for lawful purposes and in accordance with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-gold mb-4">3. Intellectual Property</h2>
              <p>
                The content, features, and functionality of LexiSearch are owned by us and are protected 
                by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
