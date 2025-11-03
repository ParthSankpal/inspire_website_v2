"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            toggleActions: 'play none none none',
          },
        }
      );

      // Adding animations for each section
      gsap.utils.toArray('.footer-section').forEach((section) => {
        // Explicitly casting to HTMLElement
        const elem = section as HTMLElement;
        gsap.fromTo(
          elem,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top bottom-=50',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }, []);

  return (
    <footer ref={footerRef} className=" montserrat-500  bg-white px-6 py-12 md:px-16 md:py-20">
      {/* Top CTA Row */}
      <div className="footer-section flex flex-col md:flex-row justify-between items-center mb-14 border-b border-white/10 pb-10">
        <div className="text-sm text-white/70 mb-4 md:mb-0">HEARD ENOUGH? →</div>
        <div className="flex items-center gap-4">
          <h2 className="text-xl sm:text-3xl font-semibold">
            Contact <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-[#1a1c4a]">us</span>
          </h2>
          <div className="w-8 h-8 rounded-full bg-[#1a1c4a] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
            <FaArrowRight className="text-white w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Branding */}
        <div className="footer-section font-bold leading-snug text-2xl sm:text-4xl md:col-span-1 text-gray-800">
          Kolhapur <br /> Inspire <br /> Academy<br />
          {/* For Bright Futures<br /><span className="font-medium text-gray-500">Empowering Students for IIT-JEE & NEET</span> */}
        </div>

        {/* Kolhapur Office */}
        <div className="footer-section">
          <h4 className="font-semibold mb-5 uppercase">Kolhapur</h4>
          {/* <p className="mb-1">
            <a href="mailto:newbusiness@weareimpero.com" className="underline hover:text-gray-300 transition">newbusiness@weareimpero.com</a>
          </p> */}
          <div className="font-semibold mb-2 uppercase">

            <p>Phone :  7020525430</p>
            <p>Phone :  7972961299</p>
          </div>

          <p className="mb-2">FOLLOW US</p>
          <div className="flex gap-4">
            <a href="#"><img src="https://simpleicons.org/icons/behance.svg" alt="Behance" className="w-5 h-5" /></a>
            <a href="#"><img src="https://simpleicons.org/icons/dribbble.svg" alt="Dribbble" className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/inspire.academy.kolhapur/?hl=en" target='blank'><img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" /></a>
          </div>
          
        </div>

        {/* Newsletter & Social */}
        <div className="footer-section">
          <h4 className="font-semibold mb-5 uppercase">Address</h4>

          <p>Upper Ground Floor, Jaduban Plaza, <br /> A wing, and, near Panch Bunglow, <br /> opposite to HDFC Bank, E Ward, Shahupuri, Kolhapur, Maharashtra 416001</p>
          <a href="https://maps.app.goo.gl/2AAnH46DKFvLHsdV7" target='_blank' className="underline mt-2 inline-block hover:text-gray-300 transition">SEE ON MAP →</a>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
