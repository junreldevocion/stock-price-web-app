import { finnhubClient } from 'react-finnhub';

// initialize finnhubClient and use client anywhere in the application to retrieve finhub api
export const client = finnhubClient(process.env.NEXT_PUBLIC_FINHUB_KEY ?? '');
