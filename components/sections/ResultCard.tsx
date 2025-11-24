"use client";

import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  subtitle?: string;
  percentile?: number | string;
  score?: number | string;
  rank?: number | string;
  photo?: string;   // ⭐ Added
  position?: number; // ⭐ 1, 2, 3 for medals
};

export const ResultCard = ({
  name,
  subtitle,
  percentile,
  score,
  rank,
  photo,
  position,
}: Props) => {


  return (
    <div className="border relative transition-all duration-300 p-5 text-center ">

      {/* Photo */}
      {photo && (
        <div className="flex justify-center mb-4">
          <Image
            src={`https://drive.google.com/uc?export=view&id=${photo}`}
            alt={name}
            width={200}
            height={200}
            className="w-40 h-40 object-cover object-center rounded-full border shadow"
          />
        </div>
      )}


      {/* Name */}
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>

      {/* Subtitle (college) */}
      {subtitle && (
        <p className="text-sm text-pink-600 font-medium mt-1">{subtitle}</p>
      )}

      {/* Percentile / Score / Rank */}
      {(percentile || score || rank) && (
        <div className="mt-3 text-sm text-gray-700">
          {percentile && (
            <p>
              Percentile: <b>{percentile}</b>
            </p>
          )}
          {score && (
            <p>
              Score: <b>{score}</b>
            </p>
          )}
          {rank && (
            <p>
              Rank: <b>{rank}</b>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
