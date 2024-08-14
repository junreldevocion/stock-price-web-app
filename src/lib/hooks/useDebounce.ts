import { useEffect, useState } from 'react';

/**
 * A custom hook to delay an input in quering a result from api and
 * to minimize the calling of api everytime the user input
 * @param value
 * @param delay
 * @returns
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler as any);
    };
  }, [delay, value]);

  return debounceValue;
}
