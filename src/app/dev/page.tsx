import React from "react";
import { action, back } from "./action";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <div className="text-white text-center bg-slate-600">
      <form action={back}>
        
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
