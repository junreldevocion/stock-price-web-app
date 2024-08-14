'use client';

import { CustomAlert } from '@/components/customAlert';
import { ModeToggle } from '@/components/modalToggle';
import { Search } from '@/components/search';
import { SearchList } from '@/components/search/searchList';
import { ERROR_DESCRIPTION_RESULT, ERROR_TITLE_RESULT } from '@/lib/constant/error';
import { useSearchStockPrice } from '@/lib/hooks/useSearchStockPrice';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState<string>('');

  const { result, loading, error } = useSearchStockPrice(search);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-5 md:mx-0 flex flex-col items-center gap-x-72 mt-10">
        <div className="w-full flex justify-end lg:pr-40 md:pr-20 items-center gap-4">
          <ModeToggle />
          <Link href="https://github.com/junreldevocion/stock-price-web-app" target="_blank">
            <GitHubLogoIcon height={24} width={24} />
          </Link>
        </div>
        <div className="md:w-[600px] flex flex-col gap-5">
          <h1 className="text-xl mt-40 text-center">
            Search current stock price using symbol (
            <span className="text-sm text-muted text-slate-600">AAPL, MSFT and etc.</span>
            )
          </h1>
          <Search onChange={(e) => setSearch(e)} />
          {error && search && <CustomAlert title={ERROR_TITLE_RESULT} description={ERROR_DESCRIPTION_RESULT} />}
          {loading && <h1>Fetching...</h1>}
          {search && !loading && result && <SearchList result={result} />}
        </div>
      </div>

    </main>
  );
}
