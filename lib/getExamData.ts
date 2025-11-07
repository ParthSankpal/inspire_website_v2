import examDetails from "@/data/examDetails.json";

export function getExamData(slug: string) {
  const key = slug.toLowerCase();
  return (examDetails as Record<string, any>)[key] || null;
}
