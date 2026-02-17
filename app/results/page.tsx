"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  iitSelections,
  medicalSelections,
  jeeMainPerformances,
  cetResults,
} from "@/data/resultsData";

import { ResultCard } from "@/components/sections/ResultCard";
import StatsAchievementsGrid from "@/components/sections/StatsGrid";
import ResultsBentoGrid from "@/components/sections/ResultCardWithBlocks";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref) => {
      if (!ref) return;

      gsap.fromTo(
        ref.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="pb-14">

          <ResultsBentoGrid/>

      <StatsAchievementsGrid/>

      {/* ================= HERO SECTION ================= */}
      <section className="mb-20 bg-linear-to-r from-pink-600 to-purple-600 text-white py-16 ">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Inspire Academy – Results Showcase
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Celebrating the achievements of our outstanding students ✨
          </p>
        </div>
      </section>

      {/* ================= IIT SELECTIONS ================= */}
      <Section
        title="IIT College Selections"
        color="text-pink-600"
        data={iitSelections}
        sectionRefs={sectionRefs}
        offset={0}
      />

      {/* ================= MEDICAL SELECTIONS ================= */}
      <Section
        title="Medical College Selections"
        color="text-green-600"
        data={medicalSelections}
        sectionRefs={sectionRefs}
        offset={10}
      />

      {/* ================= JEE-Main RESULTS ================= */}
      <Section
        title="JEE-Main Results"
        color="text-blue-600"
        data={jeeMainPerformances}
        isExam={true}
        sectionRefs={sectionRefs}
        offset={20}
      />

      {/* ================= CET RESULTS ================= */}
      <Section
        title="MHT-CET Results"
        color="text-purple-600"
        data={cetResults}
        isExam={true}
        sectionRefs={sectionRefs}
        offset={30}
      />
    </div>
  );
}

// ================= REUSABLE SECTION COMPONENT =================

function Section({ title, color, data, sectionRefs, offset, isExam = false }: any) {
  return (
    <div className="mb-20">
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 `}>
        {title}
      </h2>

      {data.map((block: any, i: number) => (
        <div key={i} className="mb-14">
          <h3 className="text-2xl px-6 md:px-12 font-semibold mb-5 ">
            {block.exam ? `${block.exam} ${block.year}` : `Year ${block.year}`}
          </h3>

          <div
            ref={(el) => {sectionRefs.current[i + offset] = el}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {block.entries.map((s: any, j: number) => (
              <ResultCard
                key={j}
                photo={s.photo}
                name={s.name}
                subtitle={s.college}
                percentile={s.percentile}
                score={s.score}
                rank={s.rank}
                position={j < 3 ? j + 1 : undefined} // Top 3 medals
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
