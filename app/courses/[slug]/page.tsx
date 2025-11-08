"use client";

import { getExamData } from "@/lib/getExamData";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = getExamData(slug);

  const sectionRef = useRef<HTMLDivElement>(null);
  const accordionRefs = useRef<HTMLDivElement[]>([]);
  const scheduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // === Title & Description Animation
      gsap.fromTo(
        ".course-title, .course-desc",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // === Accordion Items (staggered)
      const validAccordions = accordionRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );

      gsap.fromTo(
        validAccordions,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // === Schedule Section
      if (scheduleRef.current) {
        gsap.fromTo(
          scheduleRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scheduleRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!data) {
    return (
      <div className="text-center py-20 text-gray-500">
        Course details not found.
      </div>
    );
  }

  const schedule = data.schedule;

  return (
    <section ref={sectionRef} className="max-w-5xl mx-auto px-6 py-16 overflow-hidden">
      {/* ===== Title & Description ===== */}
      <h1 className="course-title text-3xl md:text-4xl font-bold">
        {data.title}
      </h1>
      <p className="course-desc text-gray-700 mt-3">{data.description}</p>

      {/* ===== Exams Covered (Accordion) ===== */}
      <div className="mt-10">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">
          Exams Covered
        </h3>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {data.exams.map((exam, i) => (
            <AccordionItem
              key={i}
              value={`exam-${i}`}
              className="group"
              ref={(el) => {
                if (el) accordionRefs.current[i] = el;
              }}
            >
              <AccordionTrigger className="text-lg font-semibold no-underline text-[#5696F6]">
                {exam.title}
              </AccordionTrigger>
              <AccordionContent className="relative text-gray-700 space-y-3 leading-relaxed overflow-hidden">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-data-[state=open]:opacity-10 transition-opacity duration-700 ease-in-out pointer-events-none select-none">
                  <span className="text-6xl md:text-8xl font-bold text-gray-400 whitespace-nowrap">
                    Inspire Academy
                  </span>
                </div>

                {/* Actual Accordion Content */}
                <div className="relative z-10 space-y-3">
                  <p>
                    <strong>Syllabus:</strong> {exam.syllabus}
                  </p>
                  <p>
                    <strong>Tentative Month:</strong> {exam.month}
                  </p>

                  <div>
                    <strong>Exam Pattern:</strong>
                    <ul className="list-disc ml-6">
                      {Object.entries(exam.examPattern).map(([k, v]) => (
                        <li key={k}>
                          <span className="font-medium">{k}:</span> {v}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong>Top Colleges:</strong>
                    <ul className="list-disc ml-6">
                      {exam.topColleges.map((c, j) => (
                        <li key={j}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    <strong>Attempts:</strong> {exam.attempts}
                  </p>

                  <div>
                    <strong>Qualifying Criteria:</strong>
                    <ul className="list-disc ml-6">
                      {Object.entries(exam.qualifyingCriteria).map(([k, v]) => (
                        <li key={k}>
                          <span className="font-medium">{k}:</span> {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="italic mt-4 text-sm md:text-base text-gray-500">
          *Please note that the number of colleges and specific details may
          vary each year. It's advisable to check the official websites of the
          respective exams for the most accurate and updated information.
        </p>
      </div>

      {/* ===== Schedule Section ===== */}
      <div ref={scheduleRef} className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">{schedule.title}</h2>

        {schedule.type === "upcoming" ? (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-gray-700">
            <p>{schedule.message}</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm md:text-base">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 border">Time Slot</th>
                    <th className="px-4 py-2 border">Activity Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {schedule.sessions.map((s, i) => (
                    <tr key={i}>
                      <td className="border px-4 py-2 w-1/3 text-center">
                        {s.time}
                      </td>
                      <td className="border px-4 py-2">{s.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {"weeklyTest" in schedule && schedule.weeklyTest && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-3">
                  {schedule.weeklyTest.title}
                </h2>
                <div className="text-gray-700 space-y-4">
                  {schedule.weeklyTest.engineering && (
                    <div>
                      <p className="font-medium text-gray-800">
                        Engineering Aspirants (PCM):{" "}
                        <span className="text-[#5696F6]">
                          {schedule.weeklyTest.engineering.marks}
                        </span>
                      </p>
                      <p>{schedule.weeklyTest.engineering.description}</p>
                    </div>
                  )}

                  {schedule.weeklyTest.medical && (
                    <div>
                      <p className="font-medium text-gray-800">
                        Medical Aspirants (PCB):{" "}
                        <span className="text-[#5696F6]">
                          {schedule.weeklyTest.medical.marks}
                        </span>
                      </p>
                      <p>{schedule.weeklyTest.medical.description}</p>
                    </div>
                  )}

                  {schedule.weeklyTest.description && (
                    <p>{schedule.weeklyTest.description}</p>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
