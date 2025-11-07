// lib/getExamData.ts

type RegularSession = {
  time: string;
  activity: string;
};

type WeeklyTest = {
  title: string;
  engineering?: {
    marks: string;
    description: string;
  };
  medical?: {
    marks: string;
    description: string;
  };
  description?: string;
};

type Schedule =
  | {
      type: "regular" | "sunday";
      title: string;
      sessions: RegularSession[];
      weeklyTest?: WeeklyTest;
    }
  | {
      type: "upcoming";
      title: string;
      message: string;
    };

export interface CourseData {
  title: string;
  description: string;
  exams: string[];
  schedule: Schedule;
}

export const getExamData = (slug: string): CourseData | null => {
  const data: Record<string, CourseData> = {
    pcm: {
      title: "Engineering (PCM) Entrance Program (Class 11–12)",
      description:
        "A two-year intensive course for engineering aspirants preparing for JEE Main, JEE Advanced, MHT-CET, BITSAT, and VITEEE. The program focuses on deep conceptual understanding, analytical thinking, and exam-specific strategies in Physics, Chemistry, and Mathematics.",
      exams: ["JEE Main", "JEE Advanced", "MHT-CET", "BITSAT", "VITEEE"],
      schedule: {
        type: "regular",
        title: "Daily Lecture and Practice Schedule (Tuesday–Sunday)",
        sessions: [
          { time: "8:30 AM – 10:00 AM", activity: "Lecture 1 – Subject 1 (e.g., Physics)" },
          { time: "10:15 AM – 11:45 AM", activity: "Lecture 2 – Subject 2 (e.g., Chemistry)" },
          { time: "11:45 AM – 12:30 PM", activity: "Lunch Break" },
          { time: "12:30 PM – 2:00 PM", activity: "Lecture 3 – Subject 3 (e.g., Mathematics)" },
          { time: "2:15 PM – 3:45 PM", activity: "Lecture 4 – Additional Practice / Mixed Concepts" },
          {
            time: "3:45 PM – 5:30 PM",
            activity:
              "Conceptual Auditing & Practice Session — guided by IIT faculty with daily worksheets focused on accuracy, application, and conceptual clarity.",
          },
        ],
        weeklyTest: {
          title: "Weekly Test Plan (Every Monday)",
          engineering: {
            marks: "300 Marks",
            description:
              "Simulates JEE Main & Advanced difficulty with conceptual, tricky, and application-based problems aligned with the actual exam pattern.",
          },
        },
      },
    },

    pcb: {
      title: "Medical (PCB) Entrance Program (Class 11–12)",
      description:
        "Comprehensive preparation for NEET-UG and IISER exams focusing on strong conceptual understanding in Biology, Physics, and Chemistry. The course integrates NCERT theory, MCQ drills, and test simulation for top medical ranks.",
      exams: ["NEET-UG", "IISER Aptitude Test"],
      schedule: {
        type: "regular",
        title: "Daily Lecture and Practice Schedule (Tuesday–Sunday)",
        sessions: [
          { time: "8:30 AM – 10:00 AM", activity: "Lecture 1 – Biology (Core Topic)" },
          { time: "10:15 AM – 11:45 AM", activity: "Lecture 2 – Physics (Conceptual + Numerical)" },
          { time: "11:45 AM – 12:30 PM", activity: "Lunch Break" },
          { time: "12:30 PM – 2:00 PM", activity: "Lecture 3 – Chemistry (Organic/Inorganic Mix)" },
          { time: "2:15 PM – 3:45 PM", activity: "Lecture 4 – Biology/Revision/Practice" },
          {
            time: "3:45 PM – 5:30 PM",
            activity:
              "Conceptual Auditing & Practice Session — Focus on MCQ accuracy, time management, and strengthening weak areas under NEET-experienced faculty.",
          },
        ],
        weeklyTest: {
          title: "Weekly Test Plan (Every Monday)",
          medical: {
            marks: "720 Marks",
            description:
              "Weekly tests conducted exactly in NEET-UG pattern — 180 MCQs, negative marking, and 3-hour duration for real-exam familiarity.",
          },
        },
      },
    },

    foundation: {
      title: "Foundation Program (8th–10th)",
      description:
        "A specialized weekend program for school students aimed at building early aptitude for Olympiads, NTSE, and Homi Bhabha exams. Focuses on curiosity-driven learning and critical problem-solving in Physics, Chemistry, Biology, and Mathematics.",
      exams: ["Olympiad Exams", "NTSE", "Homi Bhabha"],
      schedule: {
        type: "sunday",
        title: "Sunday Exclusive Foundation Schedule",
        sessions: [
          { time: "8:30 AM – 10:00 AM", activity: "Concept Lecture 1 – Science/Mathematics" },
          { time: "10:15 AM – 11:45 AM", activity: "Concept Lecture 2 – Application & Practice" },
          { time: "11:45 AM – 12:15 PM", activity: "Short Break" },
          { time: "12:15 PM – 1:30 PM", activity: "Quiz/Test & Problem-Solving Workshop" },
          {
            time: "1:30 PM – 2:30 PM",
            activity:
              "Doubt Solving and Concept Reinforcement — personal mentoring and weekly recap activities.",
          },
        ],
        weeklyTest: {
          title: "Weekly Evaluation (Every Sunday)",
          description:
            "Short topic-wise tests to evaluate understanding and consistency. Includes NTSE-style reasoning and Olympiad pattern analytical questions.",
        },
      },
    },

    "foundation-cbse": {
      title: "Foundation (CBSE) – 8th to 10th (Coming Soon)",
      description:
        "This upcoming program focuses on strengthening school-level conceptual understanding in Science, Mathematics, English, and Social Science as per CBSE & NCERT guidelines — with added foundational exposure to aptitude and logical reasoning.",
      exams: ["CBSE School Curriculum", "NCERT-based Conceptual Learning"],
      schedule: {
        type: "upcoming",
        title: "Schedule Coming Soon",
        message:
          "Our CBSE Foundation Program is launching soon! Stay tuned for detailed lecture structure, subject modules, and assessment plans designed to align with NCERT standards.",
      },
    },
  };

  return data[slug] ?? null;
};
