"use client";
import { gsap } from "gsap";

export const fadeInUp = (target: string | Element) => {
  gsap.fromTo(
    target,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
  );
};
