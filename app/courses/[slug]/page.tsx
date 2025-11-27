import type { Metadata } from "next";
import { seoConfig } from "@/data/seo/metadata";
import type { SeoKey } from "@/data/seo/types";

import CourseDetailClient from "./CourseDetailClient";

type Props = {
  params: {
    slug: SeoKey;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return (
    seoConfig[params.slug] || {
      title: "Inspire Academy Kolhapur",
      description: "Best coaching for IIT-JEE & NEET",
    }
  );
}

export default function CourseDetailPage({ params }: Props) {
  return <CourseDetailClient slug={params.slug} />;
}
