import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    // Simulate brief delay before nav
    setTimeout(() => {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }, 300);
  };

  return (
    <MainLayout>
      <div className="flex-1 flex flex-col">
        {/* Hero Section - The "Command Center" */}
        <section className="relative border-b border-white/10 bg-brand-dark min-h-[85vh] flex flex-col justify-center">
          <div className="flex-1 max-w-7xl mx-auto w-full flex items-center justify-center">
            
            {/* Main Content */}
            <div className="relative p-8 md:p-16 flex flex-col items-center text-center max-w-4xl mx-auto group/hero">
               {/* Decorative Top Line */}
               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
               
               <div className="mb-12">
                 <span className="font-mono text-brand-gold text-xs tracking-widest uppercase opacity-70">LexiSearch Intelligence</span>
               </div>
               
               <h1 className="text-5xl md:text-9xl font-serif font-bold text-stone-100 leading-[0.9] mb-10 tracking-tight">
                 Legal <br/>
                 <span className="text-stone-700 group-hover/hero:text-stone-500 transition-colors duration-700">Intelligence.</span>
               </h1>
               
               <p className="text-xl text-stone-400 max-w-2xl font-sans leading-relaxed mb-12">
                 Navigate the complexities of case law with semantic precision. 
                 The new standard for legal research is here.
               </p>

               <div className="flex gap-6 items-center">
                  <Button 
                    size="lg" 
                    className="bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark transition-all duration-300 font-bold tracking-wide px-12 py-4 text-lg"
                    onClick={() => navigate('/search')}
                  >
                    Start Research
                  </Button>
                  <button 
                    onClick={() => navigate('/chat')}
                    className="text-stone-500 hover:text-brand-gold transition-colors font-mono text-sm uppercase tracking-wider flex items-center gap-2"
                  >
                    <span>Ask AI Assistant</span>
                    <span>→</span>
                  </button>
               </div>
            </div>
          </div>
        </section>

        {/* Features Section - The "Insight Stream" */}
        <section className="py-32 bg-brand-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-100 leading-tight">
                The new standard <br/>
                <span className="text-stone-600">for legal intelligence.</span>
              </h2>
            </div>
            
            <div className="group/list flex flex-col">
              {[
                { 
                  id: '01',
                  title: 'Semantic Search', 
                  desc: 'Our transformer models understand legal concepts, analogies, and procedural context—going far beyond simple keyword matching.',
                  link: '/search'
                },
                { 
                  id: '02',
                  title: 'Predictive Analysis', 
                  desc: 'Instantaneously extract holdings, dicta, and procedural posture from thousands of pages to predict case outcomes.',
                  link: '/methodology'
                },
                { 
                  id: '03',
                  title: 'Authority Graph', 
                  desc: 'Visual citation networks help you identify good law, spot implicit overrulings, and strengthen your arguments.',
                  link: '/methodology'
                },
              ].map((feature) => (
                <div 
                  key={feature.id} 
                  onClick={() => navigate(feature.link)}
                  className="group/item relative border-t border-white/10 py-12 md:py-16 transition-all duration-500 hover:border-white/20 cursor-pointer"
                >
                  {/* Hover Background Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/[0.03] to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 ease-out" />
                  
                  {/* The "Laser" Line */}
                  <div className="absolute top-0 left-0 w-0 h-[1px] bg-brand-gold group-hover/item:w-full transition-all duration-700 ease-in-out" />

                  <div className="relative z-10 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-baseline">
                    {/* Column 1: ID & Icon */}
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-mono text-brand-gold/50 group-hover/item:text-brand-gold transition-colors duration-300">
                        {feature.id}
                      </span>
                      <span className="text-2xl opacity-50 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300 filter grayscale group-hover/item:grayscale-0">
                        {feature.icon}
                      </span>
                    </div>

                    {/* Column 2: Title */}
                    <div>
                      <h3 className="text-3xl md:text-5xl font-serif font-medium text-stone-400 group-hover/item:text-stone-100 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Column 3: Description (Reveals on hover) */}
                    <div className="md:opacity-0 md:-translate-x-4 md:group-hover/item:opacity-100 md:group-hover/item:translate-x-0 transition-all duration-500 ease-out">
                      <p className="text-stone-500 text-sm leading-relaxed font-sans max-w-xs">
                        {feature.desc}
                      </p>
                      <div className="mt-4 text-brand-gold text-xs uppercase tracking-widest font-bold opacity-0 group-hover/item:opacity-100 transition-opacity delay-100">
                        Explore Feature &rarr;
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Closing Border */}
              <div className="border-t border-white/10" />
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section className="relative py-32 border-t border-white/10 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
          
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-surface/50 border border-white/10 rounded-full mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                <span className="text-xs font-mono text-stone-300 uppercase tracking-widest">
                  Batch #01: <span className="text-brand-gold">Open</span>
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-100 mb-6 tracking-tight">
                Join the Waitlist
              </h2>
              
              <p className="text-lg text-stone-400 mb-12 max-w-xl leading-relaxed">
                Experience the next generation of legal research. 
                Reserve your spot in line for early access to the LexiSearch platform.
              </p>

              {/* The Input Area */}
              <div className="w-full max-w-md relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 via-stone-500/20 to-brand-gold/20 rounded-lg blur opacity-25 group-hover:opacity-50 group-focus-within:opacity-100 group-focus-within:duration-200 transition duration-1000"></div>
                <form className="relative flex bg-brand-dark border border-white/10 focus-within:border-brand-gold/50 rounded-lg p-1.5 shadow-2xl transition-colors duration-300" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="name@lawfirm.com" 
                    className="flex-1 bg-transparent border-none text-stone-200 placeholder-stone-600 focus:ring-0 focus:outline-none px-4 py-3 font-mono text-sm"
                  />
                  <Button className="bg-stone-100 text-brand-dark hover:bg-brand-gold hover:text-brand-dark font-bold px-6 rounded-md transition-all duration-300">
                    Join
                  </Button>
                </form>
              </div>

              {/* Social Proof / Scarcity */}
              <div className="mt-10 flex items-center gap-8 text-xs font-mono text-stone-600 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">2,104</span>
                  <span>On Waitlist</span>
                </div>
                <div className="w-1 h-1 bg-stone-800 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">~14 Days</span>
                  <span>Est. Wait</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
