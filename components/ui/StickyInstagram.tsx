"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

interface Props {
  imageSrc: StaticImageData | string; // local image
  postUrl: string;  // Instagram link
}

export default function StickyInstagramImage({
  imageSrc,
  postUrl,
}: Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.4 }}
        className="
          fixed
          bottom-6
          right-6
          md:right-6
          left-1/2 md:left-auto
          -translate-x-1/2 md:translate-x-0
          z-50
          w-[260px]
          max-w-[85vw]
        "
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setVisible(false);
            }}
            className="absolute top-2 right-2 bg-white/90 backdrop-blur rounded-full p-1 z-10 shadow"
          >
            <X size={16} />
          </button>

          {/* Instagram Image */}
          <a href={postUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageSrc}
              alt="Instagram Post"
              width={400}
              height={500}
              className="w-full h-auto object-cover transition group-hover:scale-105 duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition">
                View on Instagram
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}