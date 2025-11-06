"use client"
import CoursesBentoGrid from "@/components/sections/CoursesBentoGrid";
import Header from "@/components/sections/Header";
import PressureSection from "@/components/sections/PressureSection";
import StatsGrid from "@/components/sections/StatsGrid";
import WhyChoose from "@/components/sections/WhyChoose";
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
        <StatsGrid/>
        <WhyChoose/>
        {/* <PressureSection/> */}
        <CoursesBentoGrid/>
      </div>
    </div>
  );
}
