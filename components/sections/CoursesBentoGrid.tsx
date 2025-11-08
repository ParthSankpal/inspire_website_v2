"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

type CourseCard = {
  className: string;
  course: string;
  subtitle: string;
  description: string;
  image: string;
  colspan?:string;
  slug: string;
};

const mainCourses: CourseCard[] = [
  {
    className: "11–12th",
    course: "JEE Main",
    subtitle: "Target + Foundation",
    description: "Rigorous training for JEE Mains with advanced fundamentals.",
    image: "/images/class11.jpg",
    slug: "pcm",
  },
  {
    className: "11–12th",
    course: "JEE Advanced",
    subtitle: "IIT Preparation",
    description: "Master problem-solving and advanced JEE concepts.",
    image: "/images/class11.jpg",
    slug: "pcm",
  },
  {
    className: "11–12th",
    course: "NEET",
    subtitle: "Medical Entrance",
    description: "Concept clarity and MCQ practice for top NEET ranks.",
    image: "/images/class11.jpg",
    slug: "pcb",
  },
  {
    className: "11–12th",
    course: "MHT-CET",
    subtitle: "State Board + CET Focused",
    description: "Balanced approach for board exams and CET success.",
    image: "/images/class11.jpg",
    slug: "pcm",
  },
];

const foundationCourses: CourseCard[] = [
  {
    className: "8th Class",
    course: "Foundation",
    subtitle: "NTSE & Olympiad Track",
    description: "Strengthen basics & build curiosity for science & math.",
    image: "/images/class8.jpg",
    slug: "foundation",
  },
  {
    className: "9th Class",
    course: "Foundation",
    subtitle: "Target NTSE & Olympiads",
    description: "Early exposure to conceptual and competitive preparation.",
    image: "/images/class9.jpg",
    slug: "foundation",
  },
  {
    className: "10th Class",
    course: "Foundation",
    subtitle: "Boards + Competitive Readiness",
    description: "Prepare for boards while developing problem-solving habits.",
    image: "/images/class10.jpg",
    colspan:"sm:col-span-2 lg:col-span-1",
    slug: "foundation",
  },
  
];

export default function CoursesBentoGrid() {
  const router = useRouter();

  // Refs
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mainHeadingRef = useRef<HTMLDivElement | null>(null);
  const foundationHeadingRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate Main Heading
    if (mainHeadingRef.current) {
      gsap.fromTo(
        mainHeadingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainHeadingRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Animate Foundation Heading
    if (foundationHeadingRef.current) {
      gsap.fromTo(
        foundationHeadingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: foundationHeadingRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Animate all Course Cards (staggered)
    // Animate all Course Cards (staggered one by one)
    gsap.fromTo(
      cardRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.5, // 👈 Each card animates with a 0.2s delay after the previous one
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

  }, []);

  const handleRedirect = (slug: string) => {
    router.push(`/courses/${slug}`);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white flex flex-col items-center justify-center py-12 md:py-20  text-center"
    >
      {/* ===== Main Courses Section ===== */}
      <div ref={mainHeadingRef}>
        <h4 className="text-[#ea018c] font-semibold text-sm uppercase tracking-wide">
          Our Programs
        </h4>
        <h2 className="text-3xl md:text-[40px] font-semibold  mt-3 max-w-5xl mx-auto">
          Empowering aspirants to crack JEE, NEET, and CET with expert guidance
        </h2>
      </div>

      {/* Main Course Cards */}
      <div className="mt-16 w-full ">
        <div className="grid text-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mt-8">
          {mainCourses.map((course, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleRedirect(course.slug)}
              className="cursor-pointer border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold opacity-90">{course.className}</h3>
                  <h2 className="text-3xl md:text-[42px] font-bold mt-1">{course.course}</h2>
                  <p className="text-sm mt-1 opacity-90">{course.subtitle}</p>
                </div>
                <p className="text-xs mt-4 opacity-80">{course.description}</p>
              </div>
              <Image
                src={course.image}
                alt={course.className}
                width={400}
                height={250}
                className="w-full hidden md:block md:h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ===== Foundation Courses Section ===== */}
      <div className="mt-24 w-full max-w-6xl">
        <div ref={foundationHeadingRef}>
          <h4 className="text-[#ea018c] font-semibold text-sm uppercase tracking-wide">
            Foundation Courses
          </h4>
          <h2 className="text-3xl md:text-[40px] font-semibold  mt-3 max-w-5xl mx-auto">
            Build a strong foundation early — for NTSE, Olympiads & future success
          </h2>
        </div>

        {/* Foundation Course Cards */}
        <div className="mt-16 grid text-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {foundationCourses.map((course, index) => (
            <div
              key={index + mainCourses.length}
              ref={(el) => {
                cardRefs.current[index + mainCourses.length] = el;
              }}
              onClick={() => handleRedirect(course.slug)}
              className={` cursor-pointer border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-transform duration-500 hover:-translate-y-2 ${course.colspan}`}
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold opacity-90">{course.className}</h3>
                  <h2 className="text-2xl md:text-[32px] font-bold mt-1">{course.course}</h2>
                  <p className="text-sm mt-1 opacity-90">{course.subtitle}</p>
                </div>
                <p className="text-xs mt-4 opacity-80">{course.description}</p>
              </div>
              <Image
                src={course.image}
                alt={course.className}
                width={400}
                height={250}
                className="w-full hidden md:block md:h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
