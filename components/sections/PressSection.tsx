"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type PressArticle = {
    source: string;
    title: string;
    url: string;
};

const pressArticles: PressArticle[] = [
    {
        source: "AXIOS PRO",
        title: "Webflow acquires JavaScript library GSAP",
        url: "https://axios.com/webflow-acquires-gsap",
    },
    {
        source: "PRWeb",
        title: "Craig Mestel joins Webflow as first Chief Financial Officer",
        url: "https://www.prweb.com/releases/webflow-cfo-announcement",
    },
    {
        source: "techradar",
        title:
            "Webflow announces acquisition of Intellimize – expanding beyond visual development to become an integrated Website Experience Platform",
        url: "https://www.techradar.com/news/webflow-intellimize-acquisition",
    },
    {
        source: "Martech",
        title:
            "Webflow adds AI-driven personalization with Intellimize acquisition",
        url: "https://martech.org/webflow-adds-ai-driven-personalization",
    },
    {
        source: "CMS Critic",
        title: "Webflow Buys Intellimize: Why It’s An Intelligent Buy",
        url: "https://www.cmscritic.com/webflow-buys-intellimize",
    },
    {
        source: "TechCrunch",
        title:
            "Webflow acquires Intellimize to add AI-powered webpage personalization",
        url: "https://techcrunch.com/webflow-intellimize-acquisition",
    },
];

const PressSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLAnchorElement[]>([]); // ✅ fixed type

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Filter valid refs
            const validCards = cardRefs.current.filter(
                (el): el is HTMLAnchorElement => el !== null
            );

            gsap.fromTo(
                validCards,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.4,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 border-t border-gray-300 bg-white overflow-hidden"
        >


            <div className="">
                <div className="max-w-7xl mx-auto flex items-center justify-between mb-10  px-6">
                    <h2 className="press-title text-3xl md:text-[42px] font-extrabold text-gray-900">
                        In The Press
                    </h2>

                    <Link
                        href="/news"
                        className="press-link text-[#ea018c] flex items-center gap-1 transition-all duration-300 text-sm font-medium hover:gap-2"
                    >
                        Press page <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                    {pressArticles.map((article, index) => (
                        <a
                            ref={(el) => {
                                if (el) cardRefs.current[index] = el;
                            }}
                            key={index}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="press-card block group border border-gray-300 p-6 transition-all duration-300 cursor-pointer hover:bg-gray-50"
                        >
                            <p className="text-gray-500 uppercase text-sm font-semibold mb-2">
                                {article.source}
                            </p>
                            <h3 className="text-lg font-semibold leading-snug group-hover:text-[#ea018c] transition-colors">
                                {article.title}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default PressSection;
