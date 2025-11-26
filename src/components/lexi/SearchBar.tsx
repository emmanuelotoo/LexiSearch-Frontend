import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface SearchBarProps {
  initialQuery?: string;
  placeholder?: string;
  onSubmit: (query: string) => void;
  isLoading?: boolean;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialQuery = '',
  placeholder = 'Search cases, statutes, or ask a question...',
  onSubmit,
  isLoading,
  className,
}) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex gap-2 relative">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 h-12 text-base shadow-inner shadow-black/20"
          iconLeft={<span className="text-lg text-brand-gold">🔍</span>}
        />
        <Button type="submit" isLoading={isLoading} size="lg" className="shadow-lg shadow-brand-gold/20">
          Search
        </Button>
      </div>
    </form>
  );
};
