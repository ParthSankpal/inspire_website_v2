// src/seo/types.ts
import type { Metadata } from "next";

export type SeoKey =
  | "home"
  | "about"
  | "courses"
  | (string & {}); // allows dynamic slugs

export type SeoConfig = Record<SeoKey, Metadata>;
