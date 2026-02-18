"use client";

import Image from "next/image";
import { jeeMain2026Session1 } from "@/data/resultsJee2026session01";
import nintynineplus from "@/public/nintynineplus.png";

type TopResultBlockProps = {
    index: number;
};

export default function TopResultBlock({ index }: TopResultBlockProps) {
    const student = jeeMain2026Session1.entries[index];

    if (!student) return null;

    return (
        <div
            className="text-center py-4 flex flex-col justify-center 
      overflow-hidden hover:shadow-xl transition-transform 
      duration-500 hover:-translate-y-2"
        >
            {/* Photo */}
            {student.photo && (
                <div className=" relative w-full h-32 flex justify-center ">
                    {/* {student.percentile && student.percentile >= 99 && (
                        <div className=" absolute top-4 right-5">

                            <Image
                                src={nintynineplus}
                                alt="Inspire Academy"
                                width={400}
                                height={400}
                                className="object-cover rotate-45 h-10 w-full"
                            />
                        </div>
                    )} */}
                    <Image
                        src={`https://drive.google.com/uc?export=view&id=${student.photo}`}
                        alt={student.name}
                        width={400}
                        height={400}
                        className="w-32 h-32 object-cover rounded-full object-top"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-6">
                <h3 className="text-md font-semibold uppercase">
                    {student.name}
                </h3>

                {student.percentile && (
                    <p className={` text-xl font-bold text-[#ea018c] mt-2 ${student.percentile && student.percentile >= 99 ? " bg-white/30 backdrop-blur-none ":""}`}>
                        {student.percentile.toFixed(2)}
                    </p>
                )}


            </div>
        </div>
    );
}
