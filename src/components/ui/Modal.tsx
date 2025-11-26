import React from 'react';
import { cn } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-brand-dark border border-brand-gold/20 rounded-none shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200 relative">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-gold/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-gold/40" />

        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-surface/5">
          <h3 className="text-lg font-serif text-brand-gold tracking-wide">{title}</h3>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-brand-gold transition-colors font-mono"
          >
            [CLOSE]
          </button>
        </div>
        <div className="p-6 text-stone-300">{children}</div>
      </div>
    </div>
  );
};
