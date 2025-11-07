"use client";

import { getExamData, CourseData } from "@/lib/getExamData";
import { useParams } from "next/navigation";

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = getExamData(slug);

  if (!data) {
    return (
      <div className="text-center py-20 text-gray-500">
        Course details not found.
      </div>
    );
  }

  const schedule = data.schedule;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Title & Description */}
      <h1 className="text-3xl md:text-4xl font-bold ">{data.title}</h1>
      <p className="text-gray-700 mt-3">{data.description}</p>

      {/* Exams Covered */}
      <div className="mt-8">
        <h3 className="font-semibold text-lg text-gray-800">Exams Covered</h3>
        <ul className="list-disc ml-6 text-[#5696F6]">
          {data.exams.map((exam, i) => (
            <li key={i}>{exam}</li>
          ))}
        </ul>
      </div>

      {/* ====================== Schedule Section ====================== */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold  mb-4">{schedule.title}</h2>

        {schedule.type === "upcoming" ? (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-gray-700">
            <p>{schedule.message}</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm md:text-base">
                <thead className="bg-blue-50 ">
                  <tr>
                    <th className="px-4 py-2 border">Time Slot</th>
                    <th className="px-4 py-2 border">Activity Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {schedule.sessions.map((s, i) => (
                    <tr key={i}>
                      <td className="border px-4 py-2 w-1/3 text-center">{s.time}</td>
                      <td className="border px-4 py-2">{s.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Weekly Test Plan */}
            {"weeklyTest" in schedule && schedule.weeklyTest && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold  mb-3">
                  {schedule.weeklyTest.title}
                </h2>
                <div className="text-gray-700 space-y-4">
                  {schedule.weeklyTest.engineering && (
                    <div>
                      <p className="font-medium text-gray-800">
                        Engineering Aspirants (PCM):{" "}
                        <span className="text-[#5696F6]">
                          {schedule.weeklyTest.engineering.marks}
                        </span>
                      </p>
                      <p>{schedule.weeklyTest.engineering.description}</p>
                    </div>
                  )}

                  {schedule.weeklyTest.medical && (
                    <div>
                      <p className="font-medium text-gray-800">
                        Medical Aspirants (PCB):{" "}
                        <span className="text-[#5696F6]">
                          {schedule.weeklyTest.medical.marks}
                        </span>
                      </p>
                      <p>{schedule.weeklyTest.medical.description}</p>
                    </div>
                  )}

                  {schedule.weeklyTest.description && (
                    <div>
                      <p>{schedule.weeklyTest.description}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>

     
    </section>
  );
}
