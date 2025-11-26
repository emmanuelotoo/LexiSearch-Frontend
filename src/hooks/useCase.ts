import { useState, useEffect } from 'react';
import { Case, Citation } from '../types/case';
import { MOCK_CASE, MOCK_CITATIONS } from '../mocks/cases';

export const useCase = (caseId: string | undefined) => {
  const [caseData, setCaseData] = useState<Case | null>(null);
  const [citations, setCitations] = useState<Citation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCase = async () => {
      if (!caseId) return;

      setIsLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        
        // For MVP, always return the mock case regardless of ID
        setCaseData({ ...MOCK_CASE, id: caseId });
        setCitations(MOCK_CITATIONS);
      } catch (err) {
        setError('Failed to load case details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCase();
  }, [caseId]);

  return { caseData, citations, isLoading, error };
};
