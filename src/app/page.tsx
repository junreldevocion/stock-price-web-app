
'use client'
import { useEffect } from "react";
import { client } from "./lib/finhub/config";


export default function Home() {


  useEffect(() => {
    client.quote( 'AAPL', ).then((res) => console.log(res.data, 'res'))
  },[])

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>stock price here!</h1>
    </main>
  );
}
