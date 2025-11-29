import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">About LexiSearch</h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              LexiSearch is redefining legal research through advanced artificial intelligence. 
              Our mission is to empower legal professionals with tools that understand the nuance 
              of law, not just keywords.
            </p>
            
            <h2 className="text-2xl font-serif text-brand-gold mt-12 mb-4">Our Mission</h2>
            <p>
              We believe that justice should be accessible and efficient. By reducing the time 
              spent on manual research, we enable lawyers to focus on what matters most: 
              advocating for their clients.
            </p>

            <h2 className="text-2xl font-serif text-brand-gold mt-12 mb-4">The Technology</h2>
            <p>
              Built on state-of-the-art transformer models, LexiSearch goes beyond simple 
              text matching. It understands legal concepts, procedural history, and jurisdictional 
              context to deliver results that are legally significant.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
