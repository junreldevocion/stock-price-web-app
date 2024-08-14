import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { StockPricesType } from '@/types/global';
import { QouteResponse } from '@/types/finhub';
import { ERROR_DESCRIPTION_RESULT, ERROR_TITLE_RESULT } from '@/lib/constant/error';
import { StocksPrice } from './stocksPrice';
import { CustomAlert } from '../customAlert';

type SearchListProps = {
  result: QouteResponse,
};

export function SearchList({ result }: SearchListProps) {
  // list of stock prices
  const stockPrices: StockPricesType[] = [
    {
      title: 'Current Price',
      value: result?.c,
    },
    {
      title: 'Current Price',
      value: result?.c,
    },
    {
      title: 'Change',
      value: result?.d,
    },
    {
      title: 'Percent change',
      value: result?.dp,
    },
    {
      title: 'High price of the day',
      value: result?.h,
    },
    {
      title: 'Low price of the day',
      value: result?.l,
    },
    {
      title: 'Open price of the day',
      value: result?.o,
    },
    {
      title: 'Previous close price',
      value: result?.pc,
    },
  ];

  // This is to check if the qoute result is a valid number,
  // but the idea on this is to make sure we return all Qoute result with number else it's not a valid symbol or it's not available
  // because I don't have any idea how to check if the symbol is valid or not.
  // I just did like this, it's not a great solution but I tried my best :)
  const checkIfSymbolIsValid = stockPrices.every((stock) => typeof stock.value === 'number');

  // return error component if symbol is not valid or Change and Percent change is null
  if (!checkIfSymbolIsValid) return <CustomAlert title={ERROR_TITLE_RESULT} description={ERROR_DESCRIPTION_RESULT} />;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Results
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {stockPrices.map((item) => {
            return (
              <StocksPrice {...item} />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
