"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BsArrowUpRight } from "react-icons/bs";

export default function Header() {
    // Refs for each animated image block
    const block1 = useRef(null);
    const block2 = useRef(null);
    const block3 = useRef(null);
    const block4 = useRef(null);
    const block5 = useRef(null);
    const block6 = useRef(null);

    // Independent image arrays for each block
    const block1Images = [
        "/images/inspire1.jpg",
        "/images/inspire2.jpg",
        "/images/inspire3.jpg",
    ];
    const block2Images = [
        "/images/inspire4.jpg",
        "/images/inspire5.jpg",
        "/images/inspire6.jpg",
    ];
    const block3Images = [
        "/images/inspire7.jpg",
        "/images/inspire8.jpg",
        "/images/inspire9.jpg",
    ];
    const block4Images = [
        "/images/inspire10.jpg",
        "/images/inspire11.jpg",
        "/images/inspire12.jpg",
    ];
    const block5Images = [
        "/images/inspire13.jpg",
        "/images/inspire14.jpg",
        "/images/inspire15.jpg",
    ];
    const block6Images = [
        "/images/inspire16.jpg",
        "/images/inspire17.jpg",
        "/images/inspire18.jpg",
    ];

    // Utility for cycling images inside each block
    const cycleImages = (ref: any, images: any) => {
        if (!ref.current) return;
        const img = ref.current.querySelector("img");
        let i = 0;
        setInterval(() => {
            i = (i + 1) % images.length;
            gsap.to(img, {
                opacity: 0,
                duration: 0.8,
                onComplete: () => {
                    img.src = images[i];
                    gsap.to(img, { opacity: 1, duration: 0.8 });
                },
            });
        }, 4000);
    };

    // Hover effects
    const handleHover = (ref: any) => {
        if (!ref.current) return;
        gsap.to(ref.current.querySelector("img"), {
            scale: 1.1,
            duration: 0.8,
            ease: "power3.out",
        });
    };

    const handleLeave = (ref: any) => {
        if (!ref.current) return;
        gsap.to(ref.current.querySelector("img"), {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
        });
    };

    useEffect(() => {
        // Initial fade-in
        gsap.fromTo(
            ".fade-section",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );

        // Start independent loops
        cycleImages(block1, block1Images);
        cycleImages(block2, block2Images);
        cycleImages(block3, block3Images);
        cycleImages(block4, block4Images);
        cycleImages(block5, block5Images);
        cycleImages(block6, block6Images);
    }, []);

    return (
        <div className="min-h-[calc(100svh-40px)] bg-white grid grid-cols-2 md:grid-cols-5 grid-rows-3 mb-20">
            {/* Date Block */}
            <div className="fade-section flex flex-col justify-start items-start p-4 md:p-8 border border-gray-300 border-px">
                <div className="">
                        <span className="bg-[#ea018c] text-white px-3 py-1 rounded-full font-semibold text-4xl">2026</span>
                    <h3 className="text-base md:text-2xl font-semibold space-y-2 tracking-wide">
                        <br />
                        Admission Open
                    </h3>
                   
                </div>
                <h3>
                    For IIT-JEE, NEET, MHT-CET, Foundation
                </h3>
            </div>

            {/* Image Block 1 */}
            <div
                ref={block1}
                onMouseEnter={() => handleHover(block1)}
                onMouseLeave={() => handleLeave(block1)}
                className="fade-section relative overflow-hidden border border-gray-300 border-px backdrop-blur-md"
            >
                <img
                    src={block1Images[0]}
                    alt="Inspire event"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                />
            </div>

            {/* Image Block 2 */}
            <div
                ref={block2}
                onMouseEnter={() => handleHover(block2)}
                onMouseLeave={() => handleLeave(block2)}
                className="fade-section relative overflow-hidden border border-gray-300 border-px backdrop-blur-md hidden md:block"
            >
                <img
                    src={block2Images[0]}
                    alt="Inspire gallery"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                />
            </div>

            {/* Image Block 3 */}
            <div
                ref={block3}
                onMouseEnter={() => handleHover(block3)}
                onMouseLeave={() => handleLeave(block3)}
                className="fade-section relative overflow-hidden border border-gray-300 border-px backdrop-blur-md hidden md:block"
            >
                <img
                    src={block3Images[0]}
                    alt="Inspire students"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                />
            </div>

            {/* Image Block 4 */}
            <div
                ref={block4}
                onMouseEnter={() => handleHover(block4)}
                onMouseLeave={() => handleLeave(block4)}
                className="fade-section relative overflow-hidden border border-gray-300 border-px backdrop-blur-md"
            >
                <img
                    src={block4Images[0]}
                    alt="Inspire campus"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                />
            </div>

            {/* Main Text Section */}
            <div className="fade-section col-span-2 md:col-span-3 row-span-2 flex flex-col justify-end border border-gray-300 border-px backdrop-blur-lg p-4 md:p-8">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                    Discover the <br /> future of the web
                </h1>
                <p className="text-base md:text-lg text-gray-700 max-w-xl">
                    Join us at{" "}
                    <span className="font-semibold">Inspire Academy</span> and
                    explore how the learning, and creativity are evolving in the AI
                    age — helping students and innovators adapt faster and smarter.
                </p>
            </div>

            {/* Image Block 5 */}
            <div
                ref={block5}
                onMouseEnter={() => handleHover(block5)}
                onMouseLeave={() => handleLeave(block5)}
                className="fade-section relative overflow-hidden border border-gray-300 border-px backdrop-blur-md hidden md:block"
            >
                <img
                    src={block5Images[0]}
                    alt="Inspire gallery"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                />
            </div>

            {/* Image Block 6 */}
            <div
                ref={block6}
                onMouseEnter={() => handleHover(block6)}
                onMouseLeave={() => handleLeave(block6)}
                className="fade-section relative overflow-hidden border border-gray-300 border-px backdrop-blur-md hidden md:block"
            >
                <img
                    src={block6Images[0]}
                    alt="Inspire students"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                />
            </div>

            {/* Watch Recordings CTA */}


            {/* Watch Recordings CTA */}
            <div className="fade-section col-span-2 row-span-1 border border-gray-300 border-px p-4 md:p-6 transition-all hover:p-0 duration-700 ease-in-out 
      transform  relative overflow-hidden group">
                <div
                    className="
      bg-yellow-400 flex justify-between items-center h-full 
      p-6 md:p-8
      shadow-xl cursor-pointer 
      
      group-hover:brightness-105
      relative overflow-hidden
    "
                >
                    {/* Text */}
                    <span className="text-black text-lg md:text-xl montserrat-500 font-semibold z-10">
                        Watch recordings
                    </span>

                    {/* Lucide Icon (Top-right corner, rotated 45° → 90° on hover) */}
                    <BsArrowUpRight
                        className="
        absolute top-5 right-5 
        w-6 h-6 md:w-7 md:h-7 
        text-black 
        bg-white rounded-full p-1.5
        transform rotate-0
        transition-transform duration-700 ease-in-out
        group-hover:rotate-45
        shadow-md
      "
                    />

                    {/* Optional Animated Overlay */}
                    <div
                        className="
        absolute inset-0 
        from-yellow-200/0 via-yellow-300/10 to-yellow-100/0 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-700 ease-in-out
      "
                    ></div>
                </div>
            </div>


        </div>
    );
}
