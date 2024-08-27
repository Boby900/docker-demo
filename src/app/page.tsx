import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Chart1 } from "@/components/Chart1";
import { Chart2 } from "@/components/Chart2";

export default function Home() {
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
      </div>
    </div>
  );
}
