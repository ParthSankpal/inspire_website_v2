"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { jeeMain2026Session1 } from "@/data/resultsJee2026session01";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsBentoGrid() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Cards stagger animation
    gsap.fromTo(
      cardRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white flex flex-col items-center justify-center py-16 text-center"
    >
      {/* ===== Heading ===== */}
      <div ref={headingRef} className="px-6">
        <h4 className="text-[#ea018c] font-semibold text-sm uppercase tracking-wide">
          JEE Main 2026
        </h4>
        <h2 className="text-3xl md:text-[40px] font-semibold mt-3 max-w-5xl mx-auto">
          Session – 1 Outstanding Results
        </h2>
      </div>

      {/* ===== Student Cards ===== */}
      <div className="mt-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
          {jeeMain2026Session1.entries.map((student, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="border py-4 flex flex-col justify-center border-gray-200 overflow-hidden  hover:shadow-xl transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Photo */}
              {student.photo && (
                <div className="w-full h-40 flex justify-center overflow-hidden">
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${student.photo}`}
                    alt={student.name}
                    width={400}
                    height={400}
                    className="w-40 h-40 object-cover rounded-full object-top"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold opacity-90 uppercase">
                  {student.name}
                </h3>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Total Percentile
                  </p>
                  <p className="text-3xl font-bold text-[#ea018c] mt-1">
                    {student.percentile?.toFixed(2)}
                  </p>
                </div>

                {/* 99+ Highlight */}
                {student.percentile && student.percentile >= 99 && (
                  <div className="mt-3 text-xs font-semibold text-green-600">
                    ⭐ 99+ Achiever
                  </div>
                )}
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
}
