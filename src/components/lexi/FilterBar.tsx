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
    <div className="space-y-6 p-4 bg-slate-900/30 rounded-xl border border-slate-800">
      <div>
        <h3 className="text-sm font-semibold text-slate-300 mb-3">Jurisdiction</h3>
        <Select
          value={filters.jurisdiction || ''}
          onChange={(e) => handleChange('jurisdiction', e.target.value)}
          options={[
            { label: 'All Jurisdictions', value: '' },
            { label: 'Federal', value: 'federal' },
            { label: 'California', value: 'california' },
            { label: 'New York', value: 'new_york' },
          ]}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-300 mb-3">Date Range</h3>
        <div className="space-y-2">
          <Input
            type="date"
            label="From"
            value={filters.dateFrom || ''}
            onChange={(e) => handleChange('dateFrom', e.target.value)}
          />
          <Input
            type="date"
            label="To"
            value={filters.dateTo || ''}
            onChange={(e) => handleChange('dateTo', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-300 mb-3">Document Type</h3>
        <div className="space-y-2">
          {['all', 'case', 'statute', 'regulation'].map((type) => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="docType"
                checked={(filters.documentType || 'all') === type}
                onChange={() => handleChange('documentType', type)}
                className="text-sky-500 focus:ring-sky-500 bg-slate-900 border-slate-700"
              />
              <span className="text-sm text-slate-400 capitalize">{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
