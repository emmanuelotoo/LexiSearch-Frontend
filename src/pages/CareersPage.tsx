import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/Button';

export const CareersPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">Join Our Team</h1>
          
          <p className="text-lg mb-12">
            We are looking for brilliant minds at the intersection of law and technology. 
            Help us build the future of legal intelligence.
          </p>

          <div className="space-y-6">
            {[
              { title: 'Senior NLP Engineer', dept: 'Engineering', loc: 'Remote / Accra' },
              { title: 'Legal Research Analyst', dept: 'Legal Product', loc: 'Accra' },
              { title: 'Frontend Developer', dept: 'Engineering', loc: 'Remote' },
            ].map((job) => (
              <div key={job.title} className="border border-white/10 bg-brand-surface/5 p-6 rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-brand-gold/30 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-stone-100">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-stone-500 font-mono">
                    <span>{job.dept}</span>
                    <span>•</span>
                    <span>{job.loc}</span>
                  </div>
                </div>
                <Button variant="outline" className="border-white/20 hover:border-brand-gold text-stone-300 hover:text-brand-gold">
                  View Role
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-brand-surface/5 border border-white/10 text-center">
            <h3 className="text-xl font-bold text-stone-100 mb-4">Don't see the right fit?</h3>
            <p className="mb-6 text-stone-400">
              We are always looking for talent. Send your resume and a brief introduction to careers@lexisearch.com.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
