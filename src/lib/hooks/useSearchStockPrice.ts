import { useState, useEffect } from 'react';
import { QouteResponse } from '@/types/finhub';
import { searchStockPrice } from '../data';

/**
 * A custom hook that search a specific stock price using symbol, it includes loading and error
 * @param search - string
 * @returns an object with result and loading properties
 */
export const useSearchStockPrice = (search: string) => {
  const [result, setResult] = useState<QouteResponse>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // if empty search no action needed
    if (!search) return;

    setLoading(true);
    setError(false);

    const getSearch = async () => {
      const response = await searchStockPrice(search);
      if (!response) setError(true);
      setResult(response);
      setLoading(false);
    };

    getSearch();
  }, [search]);

  return { result, loading, error };
};
