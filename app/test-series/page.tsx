"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function TestSeries() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const headerEl = headerRef.current;
        const descEl = descRef.current;
        const cardsEl = cardsRef.current;

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        // Fade in entire section
        tl.fromTo(sectionEl, { opacity: 0 }, { opacity: 1, duration: 0.5 });

        // Header from left
        if (headerEl) {
            tl.fromTo(headerEl, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.2");
        }

        // Description fades up
        if (descEl) {
            tl.fromTo(descEl, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
        }

        // Cards slide in staggered
        if (cardsEl) {
            tl.fromTo(
                cardsEl.querySelectorAll(".fade-card"),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
                "-=0.3"
            );
        }

        // ✅ Correct cleanup
        return () => {
            tl.kill();
        };
    }, []);


    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center bg-white px-6 py-16"
        >
            <div className="max-w-6xl mx-auto text-center space-y-10">
                {/* Header */}
                <h1
                    ref={headerRef}
                    className="text-5xl md:text-6xl font-bold tracking-wide uppercase"
                >
                    Test Series
                </h1>

                {/* Description */}
                <p
                    ref={descRef}
                    className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg"
                >
                    Practice makes perfect! Our test series are designed to simulate real exam conditions
                    and help students identify strengths and weaknesses. Get a glimpse of what our
                    <span className="font-semibold"> JEE </span> and
                    <span className="font-semibold"> NEET </span> aspirants experience through these sample tests.
                </p>

                {/* Download Blocks */}
                <div
                    ref={cardsRef}
                    className="grid md:grid-cols-2  mt-10 max-w-4xl mx-auto"
                >
                 
                    {/* JEE Block */}
                    <div className="fade-card border border-gray-200  transition p-8">
                        <h2 className="text-2xl font-semibold mb-3">JEE Test Series Sample</h2>
                        <p className="text-gray-600 mb-6">
                            Download a sample of our JEE Advanced and Main pattern tests curated by expert faculty.
                        </p>
                        <Link
                            //   href="/pdfs/JEE_Test_Series_Sample.pdf" 
                            // or use Google Drive link like below 👇
                            href="https://drive.google.com/file/d/yourfileid/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#1a1c4a] text-white px-6 py-3 rounded-md font-medium hover:bg-[#14163b] transition"
                        >
                            Download JEE Sample
                        </Link>
                    </div>

                    {/* NEET Block */}
                    <div className="fade-card border border-gray-200  transition p-8">
                        <h2 className="text-2xl font-semibold mb-3">NEET Test Series Sample</h2>
                        <p className="text-gray-600 mb-6">
                            Explore a NEET test paper sample including detailed subject-wise question patterns.
                        </p>
                        <Link
                            //   href="/pdfs/NEET_Test_Series_Sample.pdf" 
                            // or Drive link:
                            href="https://drive.google.com/file/d/anotherfileid/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#ea018c] text-white px-6 py-3 rounded-md font-medium hover:bg-[#c70074] transition"
                        >
                            Download NEET Sample
                        </Link>
                    </div>
                </div>

                {/* Contact Button */}
                <div className="pt-12">
                    <Link
                        href="/contact"
                        className="inline-block  px-8 py-3 rounded-md font-semibold transition"
                    >
                        Contact for More Information →
                    </Link>
                </div>
            </div>
        </section>
    );
}
