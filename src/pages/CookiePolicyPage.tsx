import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export const CookiePolicyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">Cookie Policy</h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              LexiSearch uses cookies to improve your experience on our platform. This policy explains 
              what cookies are, how we use them, and how you can manage them.
            </p>
            
            <section>
              <h2 className="text-2xl font-serif text-brand-gold mb-4">What are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help the website remember your preferences and login status.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-gold mb-4">How We Use Cookies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., authentication).</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our service.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings (e.g., jurisdiction preferences).</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
