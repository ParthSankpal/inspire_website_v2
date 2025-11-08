"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 17, suffix: "+", label: "Team members" },
  { number: 2018, suffix: "", label: "Year Founded" },
  { number: 1, suffix: "K+", label: "Students" },
  { number: 335, suffix: "M", label: "In total funding" },
];

const AboutStatsSection = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title
      gsap.from(".stats-title", {
        opacity: 0,
        x: -40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });

      // Animate each stat card with bounce effect
      stats.forEach((stat, index) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.number,
              duration: 2,
              ease: "bounce.out",
              onUpdate: () => {
                setCounts((prev) => {
                  const updated = [...prev];
                  if (stat.number >= 1000) {
                    updated[index] = Math.floor(obj.val);
                  } else {
                    updated[index] = parseFloat(obj.val.toFixed(1));
                  }
                  return updated;
                });
              },
            });
          },
        });
      });

      // Fade in cards with stagger
      gsap.from(".stat-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Section — Title */}
        <div className=" mb-12 md:mb-0">
          <h2 className="stats-title text-3xl md:text-[42px] font-extrabold">
            By the numbers
          </h2>
        </div>

        {/* Right Section — Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-10 md:gap-x-20 md:w-2/3">
          {stats.map((item, index) => (
            <div key={index} className="stat-card">
              <p className="text-3xl md:text-[42px] font-bold">
                {counts[index] ? `${counts[index]}${item.suffix}` : `0${item.suffix}`}
              </p>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
