

import CoursesBentoGrid from "@/components/sections/CoursesBentoGrid";
import Header from "@/components/sections/Header";
import PressureSection from "@/components/sections/PressureSection";
import ResultsBentoGrid from "@/components/sections/ResultCardWithBlocks";
import StatsGrid from "@/components/sections/StatsGrid";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import WhyChoose from "@/components/sections/WhyChoose";
import HomeNotification from "@/components/ui/HomeNotification";
import { useNotify } from "@/components/ui/NotificationProvider";
import StickyInstagramImage from "@/components/ui/StickyInstagram";
import StickyInstagramEmbed from "@/components/ui/StickyInstagram";
import StickyInstagram from "@/components/ui/StickyInstagram";
import { seoConfig } from "@/data/seo/metadata";
import Script from "next/script";
import gudhipadwapost from "@/public/gudhipadwapost.jpeg"

export const metadata = seoConfig.home;

export default function Home() {


  return (
    <>
      <Script
        id="schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Inspire Academy Kolhapur",
            "url": "https://inspireacademykolhapur.com",
            "logo": "https://inspireacademykolhapur.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress":
                "Upper Ground Floor, Jaduban Plaza, A wing, near Panch Bunglow",
              "addressLocality": "Shahupuri",
              "addressRegion": "Kolhapur",
              "postalCode": "416008",
              "addressCountry": "IN",
            },
            "telephone": "+917972961299",
            "sameAs": [
              "https://www.instagram.com/inspire.academy.kolhapur/",
              "https://www.facebook.com/inspireacademy99/",
              "https://www.linkedin.com/company/inspire-academy-kolhapur"
            ]
          })
        }}
      />
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-50">
        <div>
          <StickyInstagramImage
            imageSrc={gudhipadwapost}
            postUrl="https://www.instagram.com/p/DVsK_qlkndz/"
          />
          <HomeNotification />
          <Header />
          <ResultsBentoGrid />
          <StatsGrid />
          <WhyChoose />
          {/* <PressureSection/> */}
          <CoursesBentoGrid />
          <TestimonialsGrid />
        </div>
      </div>
    </>
  );
}
