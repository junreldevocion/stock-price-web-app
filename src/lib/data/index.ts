import { client } from '../config';

/**
 * Function for getting custom search for stock price
 * @param symbol - string
 * @returns Promise<Quote | null>
 */
export async function searchStockPrice(symbol: string) {
  return client.quote(symbol).then(({ data }) => data).catch((err) => {
    console.log(err);
    return null;
  });
}
