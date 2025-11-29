import React from 'react';
import { SearchFilters } from '../../types/search';
import { Select } from '../ui/Select';
import { Input } from '../ui/Input';

interface FilterBarProps {
  filters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
  isCollapsed?: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onChange,
  isCollapsed,
}) => {
  const handleChange = (key: keyof SearchFilters, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  if (isCollapsed) return null;

  return (
    <div className="space-y-8 pr-6 border-r border-white/5 h-full">
      <div className="pb-4 border-b border-white/5">
        <h2 className="font-mono text-xs text-brand-gold uppercase tracking-widest mb-1">Filters</h2>
        <p className="text-xs text-stone-500">Refine your search</p>
      </div>

      <div>
        <h3 className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-4">Jurisdiction</h3>
        <Select
          value={filters.jurisdiction || ''}
          onChange={(e) => handleChange('jurisdiction', e.target.value)}
          options={[
            { label: 'All Jurisdictions', value: '' },
            { label: 'Federal', value: 'federal' },
            { label: 'California', value: 'california' },
            { label: 'New York', value: 'new_york' },
          ]}
          className="bg-brand-dark border-white/10 text-stone-300 focus:border-brand-gold/50"
        />
      </div>

      <div>
        <h3 className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-4">Date Range</h3>
        <div className="space-y-3">
          <Input
            type="date"
            label="From"
            value={filters.dateFrom || ''}
            onChange={(e) => handleChange('dateFrom', e.target.value)}
            className="bg-brand-dark border-white/10 text-stone-300"
          />
          <Input
            type="date"
            label="To"
            value={filters.dateTo || ''}
            onChange={(e) => handleChange('dateTo', e.target.value)}
            className="bg-brand-dark border-white/10 text-stone-300"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-4">Document Type</h3>
        <div className="space-y-3">
          {['all', 'case', 'statute', 'regulation'].map((type) => (
            <label key={type} className="flex items-center space-x-3 cursor-pointer group">
              <div className={`w-3 h-3 border ${
                (filters.documentType || 'all') === type 
                  ? 'bg-brand-gold border-brand-gold' 
                  : 'border-stone-600 group-hover:border-stone-400'
              } transition-colors`} />
              <input
                type="radio"
                name="docType"
                checked={(filters.documentType || 'all') === type}
                onChange={() => handleChange('documentType', type as any)}
                className="hidden"
              />
              <span className={`text-sm font-sans ${
                (filters.documentType || 'all') === type 
                  ? 'text-stone-200' 
                  : 'text-stone-500 group-hover:text-stone-400'
              } capitalize transition-colors`}>{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
