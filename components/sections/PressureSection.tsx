'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowTrendingDownIcon, Cog8ToothIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { FiShield } from 'react-icons/fi';
import ArrowStack from './ArrowStack';

const points = [
    {
        icon: <ArrowTrendingDownIcon className=' h-8 w-8 text-[#081D25]' />,
        top: 'Institutes that make ambitious promises but fail to deliver structured mentorship',
        bottom: 'Confidence begins to erode, and motivation slowly declines',
    },
    {
        icon: <Cog8ToothIcon className=' h-8 w-8 text-[#081D25]' />,
        top: 'Endless studying without true conceptual clarity or strategic direction',
        bottom: 'Hard work fails to translate into measurable progress',
    },
    {
        icon: <ExclamationCircleIcon className=' h-8 w-8 text-[#081D25]' />,
        top: 'The mounting pressure of vast syllabi, board exams, and competitive benchmarks',
        bottom: 'Stress replaces curiosity, and learning feels overwhelming',
    },
    {
        icon: <FiShield className=' h-8 w-8 text-[#081D25]' />,
        top: 'Uncertainty about whether truly aligned with national-level standards',
        bottom: 'Valuable time and effort are spent without achieving meaningful results',
    },
];

export default function PressureSection() {
    const sectionRef = useRef(null);
    const pointRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        gsap.fromTo(
            pointRefs.current,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className=" bg-white flex items-center justify-center py-16 px-6 text-center min-h-svh ">
            <div className=''>
                <div ref={headingRef}>

                    <h4 className="text-[#ea018c] font-semibold text-base uppercase tracking-wide">WE UNDERSTAND</h4>
                    <h2 className="text-3xl md:text-[40px] font-semibold  text-[#081D25] mt-3 max-w-5xl mx-auto">
                        The journey to cracking JEE, NEET, and CET
                        can test the resilience of even the most determined students.
                    </h2>
                </div>

                <div className="grid grid-cols-1 items-start justify-center  sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 sm:max-w-6xl mx-auto">
                    {points.map((point, colIndex) => (
                        <div ref={(el) => {
                            pointRefs.current[colIndex] = el;
                        }}
                            key={colIndex} className=" max-w-2/3 mx-auto sm:max-w-full flex flex-col items-center text-[#081D25]">
                            <div className="text-[#ea018c] mb-3 text-base">{point.icon}</div>
                            <p className="text-lg font-medium mb-4 text-center px-2 ">{point.top}</p>

                            <div className=' h-20'>
                                <ArrowStack />
                            </div>

                            <p className="text-lg text-center px-2">{point.bottom}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
