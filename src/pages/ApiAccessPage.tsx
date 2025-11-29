import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/Button';

export const ApiAccessPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">API Access</h1>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Integrate LexiSearch's powerful legal intelligence directly into your practice management software, 
              internal tools, or client-facing applications.
            </p>
            
            <div className="bg-brand-surface/5 border border-white/10 p-8 rounded-sm my-8">
              <h3 className="text-xl font-bold text-stone-100 mb-4">Developer API</h3>
              <ul className="space-y-3 mb-8 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Semantic Case Search
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Citation Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Automated Summarization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 99.9% Uptime SLA
                </li>
              </ul>
              <Button className="bg-brand-gold text-brand-dark hover:bg-white font-bold">
                Request API Key
              </Button>
            </div>

            <h2 className="text-2xl font-serif text-brand-gold mt-12 mb-4">Documentation</h2>
            <p>
              Comprehensive documentation is available for REST and GraphQL endpoints. 
              SDKs are available for Python, Node.js, and .NET.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
