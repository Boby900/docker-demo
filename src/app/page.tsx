'use client';
import {useEffect, useState} from 'react';
import { Navbar } from "@/components/Navbar";
import { Chart1 } from "@/components/Chart1";
import { Chart2 } from "@/components/Chart2";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API route
    async function fetchData() {
      try {
        const response = await fetch('/api/twitter');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <div className="text-center m-2 text-2xl font-bold font-mono md:p-6 md:m-6 ">
        <Navbar />
      </div>
      <div  className="font-bold m-4 p-4 gap-3 grid grid-cols-1 md:grid-cols-2 text-2xl bg-black pt-8 mt-8">
        <div className="flex items-center justify-center bg-white text-black rounded-lg p-4">
          <Chart1 />
        </div>
        <div className="flex items-center justify-center bg-white text-black rounded-lg p-4">
          <Chart2 />
        </div>
        <div className='text-white'>
      <h1>Twitter Search Results</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      </div>
    </div>
  );
}
