import { finnhubClient } from 'react-finnhub'


export const client = finnhubClient(process.env.NEXT_PUBLIC_FINHUB_KEY ?? '')