import { finnhubClient } from 'react-finnhub';

// initial finnhubClient and use client anywhere in the application to use the api
export const client = finnhubClient(process.env.NEXT_PUBLIC_FINHUB_KEY ?? '');
