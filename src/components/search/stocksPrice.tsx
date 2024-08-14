import { StockPricesType } from '@/types/global';

export function StocksPrice({ title, value }: StockPricesType) {
  return (
    <div
      className="mb-4 grid grid-cols-[1fr_150px] items-center pb-4 last:mb-0 last:pb-0"
    >
      <span>{title}</span>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">
          {value}
        </p>
      </div>
    </div>
  );
}
