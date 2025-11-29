import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export const SecurityPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">Security & Compliance</h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              At LexiSearch, protecting your data and your clients' confidentiality is our top priority. 
              We employ enterprise-grade security measures to ensure the integrity of our platform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-brand-surface/5 p-6 border border-white/10 rounded-sm">
                <h3 className="text-xl font-bold text-brand-gold mb-2">Data Encryption</h3>
                <p className="text-sm text-stone-400">
                  All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.
                </p>
              </div>
              <div className="bg-brand-surface/5 p-6 border border-white/10 rounded-sm">
                <h3 className="text-xl font-bold text-brand-gold mb-2">Access Control</h3>
                <p className="text-sm text-stone-400">
                  Strict role-based access controls (RBAC) and multi-factor authentication (MFA) ensure only authorized personnel access sensitive data.
                </p>
              </div>
              <div className="bg-brand-surface/5 p-6 border border-white/10 rounded-sm">
                <h3 className="text-xl font-bold text-brand-gold mb-2">Compliance</h3>
                <p className="text-sm text-stone-400">
                  We are compliant with GDPR and are currently in the process of SOC 2 Type II certification.
                </p>
              </div>
              <div className="bg-brand-surface/5 p-6 border border-white/10 rounded-sm">
                <h3 className="text-xl font-bold text-brand-gold mb-2">Regular Audits</h3>
                <p className="text-sm text-stone-400">
                  We conduct regular third-party penetration testing and security audits to identify and remediate vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
