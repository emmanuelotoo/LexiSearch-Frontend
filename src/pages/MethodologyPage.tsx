import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export const MethodologyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">Research Methodology</h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              LexiSearch employs a hybrid retrieval system combining dense vector search with 
              traditional keyword-based filtering (BM25) to ensure both semantic understanding 
              and precise term matching.
            </p>
            
            <h2 className="text-2xl font-serif text-brand-gold mt-12 mb-4">Data Ingestion</h2>
            <p>
              Our legal corpus is updated daily from official court repositories. Each case is 
              processed through our NLP pipeline to extract:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-gold">
              <li>Key legal principles and holdings</li>
              <li>Citation networks and relationships</li>
              <li>Procedural posture and disposition</li>
              <li>Judge and counsel metadata</li>
            </ul>

            <h2 className="text-2xl font-serif text-brand-gold mt-12 mb-4">Verification</h2>
            <p>
              While our AI assists in discovery, we prioritize accuracy. All AI-generated summaries 
              include direct citations to the source text, allowing legal professionals to verify 
              every claim against the primary authority.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
