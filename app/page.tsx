"use client"
import Header from "@/components/sections/Header";
import { fadeInUp } from "@/lib/gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) fadeInUp(ref.current);
  }, []);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-50">
      <div>
        <Header />
      </div>
    </div>
  );
}
