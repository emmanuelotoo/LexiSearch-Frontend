import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-stone-200 px-4 text-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="font-mono text-red-500/20 text-[12rem] leading-none font-bold select-none">
          404
        </div>
        
        <div className="space-y-6 -mt-12">
          <div className="flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <h2 className="text-xl font-mono text-red-400 uppercase tracking-widest">
              System_Error: Path_Not_Found
            </h2>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </div>

          <h1 className="text-4xl font-serif text-brand-gold">
            Jurisdiction Unknown
          </h1>
          
          <p className="text-stone-400 max-w-md mx-auto leading-relaxed">
            The requested resource is outside the known legal index. It may have been expunged, relocated, or never existed within this jurisdiction.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-brand-gold text-brand-dark hover:bg-white"
            >
              Return to Headquarters
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="border-stone-700 text-stone-400 hover:text-brand-gold hover:border-brand-gold"
            >
              Trace Back
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="absolute bottom-8 text-xs font-mono text-stone-600">
        ERROR_CODE: 0x404_RESOURCE_MISSING
      </div>
    </div>
  );
};
