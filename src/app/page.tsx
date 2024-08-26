import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Chart1 } from "@/components/Chart1";
import { Chart2 } from "@/components/Chart2";

export default function Home() {
  return (
    <div className="font-bold min-h-screen text-2xl bg-black">
      <Navbar />
      <div className="text-white min-h-screen p-4 m-4  pt-0  grid grid-flow-col gap-3 p-4 m-4 grid-rows-2 ">
        <div className="bg-white text-black rounded-lg order-1"><Chart1 /></div>
        <div className="bg-white text-black rounded-lg order-3"><Chart2 /></div>
        <div className="bg-white text-black rounded-lg order-2">No data available!</div>
        <div className="bg-white text-black rounded-lg order-4">No data available!</div>
      </div>
    </div>
  );
}
