"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StatItem = {
  number: string;
  title: string;
  description: string;
  layout: "side" | "stack";
  colSpan: string;
  rowSpan?: string;
};

const statsData: StatItem[] = [
  {
    number: "40+",
    title: "IIT Admissions",
    description:
      "Students admitted to prestigious Indian Institute Of Technology",
    layout: "side",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    number: "500+",
    title: "Top College Placement",
    description:
      "Students placed in top NITs & Top State Government Engineering Colleges",
    layout: "stack",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    number: "17",
    title: "Highest Rank",
    description:
      "Achieved by our topper in JEE Advanced Highest in Kolhapur District",
    layout: "side",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    number: "59+",
    title: "MHT-CET Champions",
    description:
      "Students scored above 99 Percentile, 168+ students above 90%, securing top ranks.",
    layout: "stack",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    number: "85%",
    title: "More Than JEE Adv. Qualification",
    description: "Percentage of batch that qualified for JEE Advanced.",
    layout: "side",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    number: "680",
    title: "Highest Marks in NEET by a Fresher",
    description:
      "Scoring 170 in Physics, 165 in Chemistry, and 345 in Biology.",
    layout: "side",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
];

export default function StatsAchievementsGrid() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      cardRefs.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white  w-full flex flex-col items-center justify-center py-20 "
    >
      {/* ===== Heading ===== */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h4 className="text-[#ea018c] font-semibold text-sm uppercase tracking-wide">
          Our Achievements
        </h4>
        <h2 className="text-3xl md:text-[40px] font-semibold mt-3">
          Consistent Results and Record-Breaking Performances From Last 7 Years
        </h2>
      </div>

      {/* ===== Stats Grid ===== */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
      >
        {statsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`stat-card border border-gray-200 p-6 ${item.colSpan} ${item.rowSpan || ""}`}
          >
            {item.layout === "side" ? (
              <div className="grid md:grid-cols-2 gap-5 md:gap-14 items-center">
                <h2 className="text-5xl md:text-[140px] font-bold text-center ">
                  {item.number}
                </h2>
                <div className=" flex flex-col justify-center text-center md:text-start">
                  <h3 className="text-lg md:text-[32px] font-semibold  mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#5696F6] ">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full grid grid-rows-2 gap-5 md:gap-10">
                <h2 className="text-5xl md:text-[140px] font-bold text-center">
                  {item.number}
                </h2>
                <div className="flex flex-col text-center justify-start h-full">
                  <h3 className="text-lg md:text-[32px] font-semibold  mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base  text-[#5696F6] ">
                    {item.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
