'use client'
import { Navbar } from "@/components/Navbar";
import { Chart1 } from "@/components/Chart1";
import { Chart2 } from "@/components/Chart2";
import { useQuery } from "@tanstack/react-query";
interface TwitterData {
  id: string;
  name: string;
  username: string;
  // Add other properties based on the API response
}


export default function Home() {
  const { isPending, isError, data, error } = useQuery<TwitterData[]>({
    queryKey: ["twitterData"],
    queryFn: async () => {
      const response = await fetch("/api/twitter");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(typeof data);
  return (
    <div>
      <div className="text-center m-2 text-2xl font-bold font-mono md:p-6 md:m-6 ">
        <Navbar />
      </div>
      <div className="font-bold m-4 p-4 gap-3 grid grid-cols-1 md:grid-cols-2 text-2xl bg-black pt-8 mt-8">
        <div className="flex items-center justify-center bg-white text-black rounded-lg p-4">
          <Chart1 />
        </div>
        <div className="flex items-center justify-center bg-white text-black rounded-lg p-4">
          <Chart2 />
        </div>
        <div className="text-white">
          <h1>Twitter Search Results</h1>
          <ul>
          {(
    Object.entries(data).map(([key, value]) => (
      console.log(value),
      <li key={key}>
        <ol>{value.id}</ol>
        <ol>{value.name}</ol>
        <ol>{value.username}</ol>
      </li>
    )))}
          </ul>
        </div>
      </div>
    </div>
  );
}
