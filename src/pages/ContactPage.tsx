import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';

export const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-brand-dark min-h-screen text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-8">
                Have questions about LexiSearch? Our team is here to help. 
                Reach out to us for support, sales inquiries, or partnership opportunities.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-stone-100 mb-1">General Inquiries</h3>
                  <a href="mailto:hello@lexisearch.com" className="text-brand-gold hover:underline">hello@lexisearch.com</a>
                </div>
                <div>
                  <h3 className="font-bold text-stone-100 mb-1">Support</h3>
                  <a href="mailto:support@lexisearch.com" className="text-brand-gold hover:underline">support@lexisearch.com</a>
                </div>
                <div>
                  <h3 className="font-bold text-stone-100 mb-1">Office</h3>
                  <p className="text-stone-400">
                    123 Independence Avenue<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface/5 p-8 border border-white/10 rounded-sm">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-1">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-1">Email</label>
                  <Input type="email" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-1">Message</label>
                  <TextArea placeholder="How can we help?" className="h-32" />
                </div>
                <Button className="w-full bg-brand-gold text-brand-dark hover:bg-white font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
