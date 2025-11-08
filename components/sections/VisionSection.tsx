"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vision-text", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".core-section", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" py-24 px-6 md:px-16 border-t border-gray-300"
    >
      {/* Vision Section */}
      <div className="max-w-7xl mx-auto vision-text mb-16">
        <p className="text-[#ea018c] uppercase text-sm mb-4 tracking-wide">
          Vision
        </p>
        <h2 className="text-3xl md:text-[42px] md:text-5xl font-extrabold leading-tight ">
          Our vision is to build the world’s most powerful website experience
          platform.
        </h2>
      </div>

      {/* Core Values Section */}
      <div className="core-section max-w-7xl mx-auto border-t border-gray-300 pt-10 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div>
          <h3 className="text-3xl md:text-[42px] font-extrabold mb-4">
            Core <span className="line-through text-[#ea018c]">values</span>{" "}
            behaviors
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-sm">
            We see every day as an opportunity to turn values into action
            through our 4 core behaviors.
          </p>
        </div>

        {/* Right */}
        <div>
          <ol className="space-y-3 text-base lg:text-2xl font-semibold">
            <li>1. Build lasting customer trust</li>
            <li>2. Win together</li>
            <li>3. Reinvent ourselves</li>
            <li>4. Deliver with speed, quality, and craft</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
