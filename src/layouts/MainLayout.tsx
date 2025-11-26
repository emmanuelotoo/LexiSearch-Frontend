import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';

interface MainLayoutProps {
  children: React.ReactNode;
  showSideNav?: boolean; // Placeholder for future use
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col text-slate-50 font-sans selection:bg-sky-500/30">
      <Header />
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};
