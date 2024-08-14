import { useEffect, useState } from 'react';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { Input } from '../ui/input';

type SearchProps = {
  onChange: (e: string) => void
};

export function Search({ onChange }: SearchProps) {
  const [search, setSearch] = useState<string>('');
  const debounce = useDebounce(search);

  useEffect(() => {
    // set onChange callback
    onChange(debounce);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  return <Input type="text" onChange={(e) => setSearch(e.target.value)} className="w-full p-5" placeholder="Typing stock symbol..." />;
}
