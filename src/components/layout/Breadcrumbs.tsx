import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-xs font-mono text-stone-500 mb-4 uppercase tracking-wider">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="mx-2 text-brand-gold/50">/</span>}
          {item.href ? (
            <Link to={item.href} className="hover:text-brand-gold transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-stone-300">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
