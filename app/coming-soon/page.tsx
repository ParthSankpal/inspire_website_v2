"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ComingSoon() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f103e] to-[#343896] text-white text-center px-6"
    >
      <div className="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Coming <span className="text-blue-300">Soon</span>
        </h1>
        <p className="text-blue-100 text-sm md:text-base max-w-md mx-auto mb-8">
          This page is under construction. Our team is working hard to bring you
          something amazing! Stay tuned for updates.
        </p>

        {/* Countdown Animation */}
        <div className="fade-up flex items-center justify-center gap-4 mb-10">
          <div className="w-20 h-20 bg-white/10 rounded-lg flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">10</span>
            <span className="text-xs text-blue-300 uppercase">Days</span>
          </div>
          <div className="w-20 h-20 bg-white/10 rounded-lg flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">23</span>
            <span className="text-xs text-blue-300 uppercase">Hours</span>
          </div>
          <div className="w-20 h-20 bg-white/10 rounded-lg flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">45</span>
            <span className="text-xs text-blue-300 uppercase">Minutes</span>
          </div>
        </div>

        <Link
          href="/"
          className="fade-up inline-flex items-center gap-2 bg-white text-[#0f103e] px-6 py-3 rounded-full font-semibold text-sm transition hover:bg-gray-200"
        >
          <FaArrowLeft size={14} /> Back to Home
        </Link>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-300/20 rounded-full blur-2xl animate-ping" />
    </section>
  );
}
