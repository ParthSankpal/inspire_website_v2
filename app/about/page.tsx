"use client";

import AboutHeader from "@/components/sections/AboutHeader";
import ReviewsSection from "@/components/sections/ReviewsSection";
import VisionSection from "@/components/sections/VisionSection";
import AboutStatsSection from "@/components/sections/AboutStatsSection";
import PressSection from "@/components/sections/PressSection";


export default function ContactUs() {
  


  return (
    <section
      className=" bg-white "
    >
      <AboutHeader/>
      <VisionSection/>
      <PressSection/>
      <ReviewsSection/>
      <AboutStatsSection/>
    </section>
  );
}
