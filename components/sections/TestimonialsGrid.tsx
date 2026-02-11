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
    name: "Milind Mali",
    role: "student",
    collegeOrProfession: "SPIT, Mumbai",
    message:
      "Inspire Academy is an excellent choice for JEE ,NEET and CET preparation. The teachers explain concepts clearly and focus strongly on fundamentals and problem-solving. Regular tests, good study material, and proper guidance helped me improve consistently. The faculty is supportive and always ready to clear doubts. Overall, my experience at Inspire Academy for JEE preparation was very positive and truly motivating.",
    rating: 5,
  },
  {
    name: "Viraj Killedar",
    role: "student",
    collegeOrProfession: "VIT, Pune",
    message:
      "Inspire academy really help me score well in my JEE and MHT CET exam. Their end to end system with learning materials, mock tests & focus batches is a testimonial to the result they achieve each year.",
    rating: 5,
  },
  {
    name: "Jayantrao Thorat",
    role: "student",
    collegeOrProfession: "",
    message:
      "I had an excellent experience preparing for my JEE exam at Inspire Academy. The quality of teaching is truly impressive. The faculty are experienced, patient, and very knowledgeable, and they are always ready to clear doubts and explain even difficult concepts in a simple and understandable way. I am genuinely grateful to the entire team for their constant guidance, support, and motivation throughout my preparation.",
    rating: 5,
  },
  {
    name: "Sumeet Chougale",
    role: "student",
    collegeOrProfession: "PCCOE, Pune",
    message:
      "Great institute for 11th & 12th IIT-NEET prep. The teachers are supportive and provide excellent 1-to-1 guidance. Overall, a positive learning environment that really helps students stay focused and confident.",
    rating: 5,
  },
  {
    name: "Yash Kagi",
    role: "student",
    collegeOrProfession: "",
    message:
      "A great institute for preparing for JEE and NEET, you should definitely join this academy if you want to achieve success in your life, without inspire you'll never be inspired in life. You will have a great time here make lots of friends and memories. They prepare you for life and not just an exam.",
    rating: 5,
  },
  {
    name: "Manjiri Deshpande",
    role: "parent",
    collegeOrProfession: "House wife",
    message:
      "Teacher are best",
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
      <div ref={headingRef} className="max-w-4xl mx-auto  px-6">
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
              className="border border-gray-200 sm:h-auto overflow-hidden bg-white  transition-transform duration-500 hover:-translate-y-2 "
            >
              {/* Placeholder Space (Image Area) */}
              

              {/* Testimonial Content */}
              <div className="p-6 flex flex-col h-full">
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
