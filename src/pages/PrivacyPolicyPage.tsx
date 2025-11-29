import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">Privacy Policy</h1>
          <p className="text-sm text-stone-500 mb-12">Last Updated: November 29, 2025</p>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-brand-gold mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our services, or communicate with us. This may include your name, email address, 
                payment information, and search history within the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-gold mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                to process your transactions, and to communicate with you. We do not sell your 
                personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-gold mb-4">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security 
                of your personal information. However, please note that no method of transmission over 
                the Internet is 100% secure.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
