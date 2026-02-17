import AboutHeader from "@/components/sections/AboutHeader";
import ReviewsSection from "@/components/sections/ReviewsSection";
import VisionSection from "@/components/sections/VisionSection";
import AboutStatsSection from "@/components/sections/AboutStatsSection";
import PressSection from "@/components/sections/PressSection";

import type { Metadata } from "next";
import { seoConfig } from "@/data/seo/metadata";

export const metadata: Metadata = seoConfig.about;

export default function ContactUs() {
  return (
    <section className=" bg-white ">
      <AboutHeader />
      <VisionSection />
      {/* <PressSection /> */}
      <ReviewsSection />
      <AboutStatsSection />
    </section>
  );
}
