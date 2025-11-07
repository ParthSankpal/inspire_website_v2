"use client";

import { getExamData } from "@/lib/getExamData";
import { useParams } from "next/navigation";

export default function CourseDetailPage() {
  const { slug } = useParams();
  const data = getExamData(slug as string);

  if (!data) {
    return <div className="text-center py-12 md:py-20 text-gray-500">Exam details not found.</div>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{data.title}</h1>
      <p className="text-gray-700 mt-2">{data.syllabus}</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Tentative Month</h3>
          <p>{data.month}</p>

          <h3 className="font-semibold text-lg text-gray-800 mt-4">Top Colleges</h3>
          <ul className="list-disc ml-6 text-blue-600">
            {data.topColleges.map((c: string, i: number) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <h3 className="font-semibold text-lg text-gray-800 mt-4">Attempts</h3>
          <p>{data.attempts}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">Exam Pattern</h3>
          <ul className="list-disc ml-6">
            {Object.entries(data.examPattern).map(([k, v]) => (
              <li key={k}>
                <span className="font-medium capitalize">{k.replace(/([A-Z])/g, " $1")}:</span> 
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-lg text-gray-800">Qualifying Criteria</h3>
        <ul className="list-disc ml-6">
          {Object.entries(data.qualifyingCriteria).map(([k, v]) => (
            <li key={k}>
              <span className="font-medium capitalize">{k}:</span> 
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
