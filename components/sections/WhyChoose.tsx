"use client";

import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    step: "01",
    title: "IIT-Qualified Faculty",
    description:
      "Learn from accomplished IIT alumni with expertise and proven strategies for success.",
  },
  {
    step: "02",
    title: "Personalized Attention",
    description:
      "Small batches ensure clarity, focus, and individual growth for every student.",
  },
  {
    step: "03",
    title: "Extended Learning Hours",
    description:
      "Enhanced classroom time for focused practice and quick doubt resolution.",
  },
  {
    step: "04",
    title: "Integrated Curriculum",
    description:
      "Comprehensive preparation for Boards, JEE, NEET, and CET – all under one roof.",
  },
  {
    step: "05",
    title: "Consistent Excellence",
    description:
      "A distinguished record of outstanding academic results and district toppers every year.",
  },
];

const WhyChoose: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // === Heading Animation
      gsap.fromTo(
        ".why-heading, .why-subtitle",
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

      // === Cards Animation (Staggered)
      const validCards = cardRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );

      gsap.fromTo(
        validCards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // === CTA Animation (Fade + Scale)
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.95, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-linear-to-br from-[#0f103e] to-[#343896] text-white px-6 py-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <p className="why-subtitle text-sm uppercase tracking-wider text-blue-300 mb-2">
          Powerful Reasons
        </p>
        <h2 className="why-heading text-3xl md:text-[40px] font-bold mb-10">
          Why Students & Parents Choose Inspire Academy
        </h2>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className="bg-[#2a2d7c] p-6  transition duration-300"
            >
              <p className="text-lg font-semibold mb-2">
                {reason.step}. {reason.title}
              </p>
              <p className="text-sm text-blue-100">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className="mt-10 text-center md:bg-[#1a1c4a] rounded-full p-3 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm px-5">
            Join 1000+ students who trust Inspire Academy for their future
            success.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#0f103e] px-4 py-2 rounded-full text-sm font-semibold transition hover:bg-gray-200"
          >
            Start Your Journey <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
