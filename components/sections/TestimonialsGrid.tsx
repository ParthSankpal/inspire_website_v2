"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  name: string;
  role: string; // "student" | "parent"
  collegeOrProfession: string;
  message: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "student",
    collegeOrProfession: "IIT Bombay",
    message:
      "Inspire Academy guided me through every concept and mock test with precision. The mentors’ support was invaluable!",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "student",
    collegeOrProfession: "AIIMS Delhi",
    message:
      "Their approach to Biology and Chemistry was phenomenal. I gained immense confidence through consistent tests.",
    rating: 5,
  },
  {
    name: "Rohan Patil",
    role: "student",
    collegeOrProfession: "10th Foundation Student",
    message:
      "The Foundation course built my basics perfectly. I started loving math and science again thanks to the fun teaching style!",
    rating: 4,
  },
  {
    name: "Sneha Kulkarni",
    role: "student",
    collegeOrProfession: "VIT Pune",
    message:
      "Balanced preparation for CET and boards made all the difference. I cracked CET with flying colors!",
    rating: 5,
  },
  {
    name: "Sunita Joshi",
    role: "parent",
    collegeOrProfession: "Teacher, Kolhapur",
    message:
      "As a parent, I was amazed by the dedication and personal attention each student receives at Inspire Academy.",
    rating: 5,
  },
  {
    name: "Ramesh Patil",
    role: "parent",
    collegeOrProfession: "Business Owner",
    message:
      "My daughter’s confidence improved drastically. The consistent mentoring and communication from Inspire was exceptional!",
    rating: 5,
  },
];

export default function TestimonialsGrid() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate Heading
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
            start: "top 80%",
          },
        }
      );
    }

    // Animate Cards (staggered)
    gsap.fromTo(
      cardRefs.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white flex flex-col items-center justify-center py-12 md:py-20 text-center"
    >
      {/* ===== Section Heading ===== */}
      <div ref={headingRef} className="max-w-4xl mx-auto">
        <h4 className="text-[#ea018c] font-semibold text-sm uppercase tracking-wide">
          Student & Parent Voices
        </h4>
        <h2 className="text-3xl md:text-[40px] font-semibold mt-3">
          Inspiring success stories from students and parents
        </h2>
      </div>

      {/* ===== Testimonials Grid ===== */}
      <div className="mt-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-start">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="border border-gray-200 sm:h-68 overflow-hidden bg-white  transition-transform duration-500 hover:-translate-y-2 "
            >
              {/* Placeholder Space (Image Area) */}
              

              {/* Testimonial Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl md:text-[32px] font-bold my-1">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t.role === "student"
                      ? t.collegeOrProfession
                      : `${t.collegeOrProfession} (Parent)`}
                  </p>
                </div>

                <p className="text-sm mt-4 text-gray-700 leading-relaxed italic">
                  “{t.message}”
                </p>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
