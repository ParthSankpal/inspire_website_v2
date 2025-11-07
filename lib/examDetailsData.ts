// lib/examDetailsData.ts

export interface ExamDetail {
  title: string;
  syllabus: string;
  month: string;
  examPattern: Record<string, string>;
  topColleges: string[];
  attempts: string;
  qualifyingCriteria: Record<string, string>;
}

export const examDetails: Record<string, ExamDetail> = {
  "JEE Main": {
    title: "JEE Main",
    syllabus:
      "Physics, Chemistry, and Mathematics from Class 11 and 12 NCERT curriculum.",
    month: "Two sessions — January and April.",
    examPattern: {
      Mode: "Computer-Based Test (CBT)",
      Duration: "3 hours",
      Questions: "75 questions (25 each in Physics, Chemistry, Mathematics)",
      "Marking Scheme":
        "300 Marks (100 each subject), +4 for correct answer, -1 for incorrect answer, no negative for numerical type (20 MCQs, 5 Numerical).",
    },
    topColleges: ["NITs", "IIITs", "CFTIs"],
    attempts: "Twice a year; no restriction on number of attempts.",
    qualifyingCriteria: {
      Academic: "10+2 with PCM",
      Marks:
        "Minimum 75% aggregate (65% for SC/ST) or Top 20 percentile in board.",
      "Subject-wise":
        "No official subject-wise cutoff, overall PCM performance matters.",
    },
    
  },

  "JEE Advanced": {
    title: "JEE Advanced",
    syllabus:
      "Advanced topics in Physics, Chemistry, and Mathematics beyond JEE Main level.",
    month: "May",
    examPattern: {
      Mode: "Computer-Based Test",
      Papers:
        "Two mandatory papers (Paper 1 & 2), each with Physics, Chemistry & Math.",
      "Question Types": "MCQs, numerical answer, and matching type.",
      "Marking Scheme":
        "Varies; includes negative marking (-1 or -2) for incorrect answers.",
    },
    topColleges: ["23 IITs across India"],
    attempts: "Maximum of two attempts in two consecutive years.",
    qualifyingCriteria: {
      Academic: "Top 2.5 lakh JEE Main rankers",
      Marks:
        "75% in 12th PCM (65% SC/ST/PwD) or top 20 percentile in board.",
    },
    
  },

  "MHT-CET": {
    title: "MHT CET (PCM)",
    syllabus:
      "Physics, Chemistry, and Mathematics from Maharashtra Board Class 11 (20%) and Class 12 (80%) syllabus.",
    month: "April or May",
    examPattern: {
      Mode: "Computer-Based Test",
      Questions: "150 (50 each in Physics, Chemistry, Mathematics)",
      "Marking Scheme":
        "+2 for Mathematics, +1 for Physics & Chemistry; No negative marking.",
    },
    topColleges: ["COEP Pune", "VJTI Mumbai", "ICT Mumbai"],
    attempts: "Once a year.",
    qualifyingCriteria: {
      Academic: "10+2 with PCM",
      Marks:
        "Minimum 50% in 12th PCM (40% for SC/ST/PwD).",
    },
    
  },

  BITSAT: {
    title: "BITSAT",
    syllabus:
      "Physics, Chemistry, Mathematics/Biology, English, and Logical Reasoning (Class 11 & 12 NCERT).",
    month: "May–June",
    examPattern: {
      Mode: "Computer-Based Test",
      Questions: "130",
      "Marking Scheme":
        "390 Marks; +3 for correct, -1 for incorrect (Physics & Chemistry 90 each, Maths/Bio 120, English 30, LR 60).",
    },
    topColleges: [
      "BITS Pilani",
      "BITS Goa",
      "BITS Hyderabad",
      "BITS Dubai",
    ],
    attempts: "Max 2 attempts per year.",
    qualifyingCriteria: {
      Academic: "10+2 with PCM & English",
      Marks: "75% in PCM, 60% individually in each subject.",
    },
    
  },

  VITEEE: {
    title: "VITEEE",
    syllabus:
      "Physics, Chemistry, Mathematics/Biology, English, and Aptitude (Class 11 & 12).",
    month: "April",
    examPattern: {
      Mode: "Computer-Based Test",
      Questions: "125 MCQs",
      "Marking Scheme": "+1 for correct; no negative marking.",
    },
    topColleges: [
      "VIT Vellore",
      "VIT Chennai",
      "VIT Bhopal",
      "VIT-AP",
    ],
    attempts: "Once a year.",
    qualifyingCriteria: {
      Academic: "10+2 with PCM/PCB",
      Marks: "Minimum 60% (65% for SC/ST/PwD).",
    },
    
  },
};
