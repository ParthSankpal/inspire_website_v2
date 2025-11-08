"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, StarHalf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    platform: "Google",
    rating: 5,
    date: "as of 1/2025",
  },
  {
    platform: "JustDial",
    rating: 4.6,
    date: "as of 1/2025",
  },
];

// Helper to generate stars dynamically
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} fill="#1a1c4a" stroke="none" size={20} />
      ))}
      {halfStar && <StarHalf fill="#1a1c4a" stroke="none" size={20} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={20} className="" />
      ))}
      <span className="ml-2 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const ReviewsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".review-text", {
        opacity: 0,
        x: -30,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".review-card", {
        opacity: 0,
        x: 30,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
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
        {/* LEFT SIDE */}
        <div className="review-text space-y-4">
          <h2 className="text-3xl md:text-[42px] font-extrabold tracking-tight">Reviews</h2>
          <p className=" text-lg max-w-md">
            See what our students and parents think about Inspire.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="review-card border-b border-gray-300 pb-8">
              <h3 className="text-base lg:text-2xl font-bold underline underline-offset-4  mb-2">
                {r.platform}
              </h3>
              <div className="flex items-center mb-2">{renderStars(r.rating)}</div>
              <p className=" text-sm">{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
