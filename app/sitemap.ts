import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://inspireacademykolhapur.com",
      lastModified: new Date(),
    },
    {
      url: "https://inspireacademykolhapur.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://inspireacademykolhapur.com/courses",
      lastModified: new Date(),
    },
    {
      url: "https://inspireacademykolhapur.com/contact",
      lastModified: new Date(),
    },
  ];
}
