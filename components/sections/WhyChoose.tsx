import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

const reasons = [
  // {
  //   step: "01",
  //   title: "Outstanding Results",
  //   description:
  //     "Every year, Inspire students top the charts in JEE, NEET, and MHT-CET exams.",
  // },

  // //  ➡ Consistent toppers from Kolhapur district *ONLY*.
  // //  ➡ We focus on concept clarity, not just rote learning.
  // //   ➡ Every student matters.
  // //    ➡ Smart planning. Consistent effort. Visible progress.
  // {
  //   step: "02",
  //   title: "Top-Class Educators",
  //   description:
  //     "Learn from accomplished IIT, NIT, and Gov. Medical Alumni with experties and proven stratergies. ",
  // },
  // {
  //   step: "03",
  //   title: "Student-First Approach",
  //   description:
  //     "We offer 1-on-1 mentorship, regular PTMs, and doubt-solving sessions.",
  // },
  // {
  //   step: "04",
  //   title: "Discipline + Planning",
  //   description:
  //     "From attendance to weekly tests – our system keeps students on track.",
  // },

  {
    step: "01",
    title: "IIT-Qualified Faculty",
    description:
      "Learn from accomplished IIT alumni with expertise and proven strategies for success.",
  },
  {
    step: "02",
    title: "Personalized Attention",
    description:
      "Small batches ensure clarity, focus, and individual growth for every student.",
  },
  {
    step: "03",
    title: "Extended Learning Hours",
    description:
      "Enhanced classroom time for focused practice and quick doubt resolution.",
  },
  {
    step: "04",
    title: "Integrated Curriculum",
    description:
      "Comprehensive preparation for Boards, JEE, NEET, and CET – all under one roof.",
  },
  {
    step: "05",
    title: "Consistent Excellence",
    description:
      "A distinguished record of outstanding academic results and district toppers every year.",
  }
];

const WhyChoose: React.FC = () => {
  return (
    <section className="bg-linear-to-br from-[#0f103e] to-[#343896] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-blue-300 mb-2">
          Powerful Reasons 
        </p>
        <h2 className="text-3xl font-bold mb-10">
          Why Students & Parents Choose Inspire Academy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-[#2a2d7c] p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <p className="text-lg font-semibold mb-2">{reason.step}. {reason.title}</p>
              <p className="text-sm text-blue-100">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#1a1c4a] rounded-full p-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm px-5">
            Join 1000+ students who trust Inspire Academy for their future success.
          </p>
          <Link href="/contact" className="flex items-center gap-2 bg-white text-[#0f103e] px-4 py-2 rounded-full text-sm font-semibold transition hover:bg-gray-200">
            Start Your Journey <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
