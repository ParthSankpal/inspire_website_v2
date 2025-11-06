'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowTrendingDownIcon, Cog8ToothIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { FiShield } from 'react-icons/fi';
import ArrowStack from './ArrowStack';

const points = [
    {
        icon: <ArrowTrendingDownIcon className=' h-8 w-8 text-[#081D25]' />,
        top: 'Vendors who over promise but miss deadlines and fail projects',
        bottom: 'Break down critical communications and collaboration',
    },
    {
        icon: <Cog8ToothIcon className=' h-8 w-8 text-[#081D25]' />,
        top: 'Complex systems that disappoint users and frustrate teams',
        bottom: 'Instantly lose user adoption, confidence and most importantly, trust',
    },
    {
        icon: <ExclamationCircleIcon className=' h-8 w-8 text-[#081D25]' />,
        top: 'Pressure to keep up with changing tech, fearing costly mistakes',
        bottom: 'Stall progress or trigger costly escalations without any ROI',
    },
    {
        icon: <FiShield className=' h-8 w-8 text-[#081D25]' />,
        top: 'Doubts about your tech partners’ trustworthiness and support',
        bottom: 'Drain time and resources on fixes instead of focus on innovation and growth',
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

                    <h4 className="text-[#ea018c] font-semibold text-base uppercase tracking-wide">We get it</h4>
                    <h2 className="text-3xl md:text-[40px] font-semibold  text-[#081D25] mt-3 max-w-5xl mx-auto">
                        The pressure to deliver flawless technology solutions can wear down even the most seasoned professionals.
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
