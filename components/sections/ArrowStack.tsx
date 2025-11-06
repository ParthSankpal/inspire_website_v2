'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ArrowStack() {
    const arrowsRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        arrowsRef.current.forEach((arrow, index) => {
            if (arrow) {
                gsap.fromTo(
                    arrow,
                    {
                        opacity: 0,
                        y: -10,
                    },
                    {
                        opacity: 0,
                        y: 24,
                        duration: 1.5,
                        ease: 'none',
                        repeat: -1,
                        delay: index * 0.4,
                        keyframes: [
                            { opacity: 0, y: -10 },
                            { opacity: 1, y: 0 },
                            { opacity: 0.6, y: 12 },
                            { opacity: 0.2, y: 24 },
                            { opacity: 0, y: 32 },
                        ],
                    }
                );
            }
        });
    }, []);

    return (
        <div className="relative h-12 w-4 flex flex-col items-center justify-center">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    ref={(el) => {
                        arrowsRef.current[i] = el;
                    }}
                    className="w-7 h-7 border-b-5 border-r-5 rotate-45 border-[#ea018c] absolute"
                />
            ))}
        </div>
    );
}
