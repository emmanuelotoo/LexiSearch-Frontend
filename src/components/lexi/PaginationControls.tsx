import React from 'react';
import { Button } from '../ui/Button';

interface PaginationControlsProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  pageSize,
  total,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex items-center justify-between py-4 border-t border-slate-800">
      <div className="text-sm text-slate-400">
        Showing <span className="font-medium">{(page - 1) * pageSize + 1}</span> to{' '}
        <span className="font-medium">{Math.min(page * pageSize, total)}</span> of{' '}
        <span className="font-medium">{total}</span> results
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
