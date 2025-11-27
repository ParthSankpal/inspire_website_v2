import type { Metadata } from "next";
import "./globals.css";
import { montserrat, fustat } from "./fonts";
import Footer from "@/components/common/Footer";
import ClientNavbarWrapper from "@/components/ClientNavbarWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://inspireacademykolhapur.com"),

  title: {
    default:
      "Inspire Academy Kolhapur – Best IIT JEE, NEET, MHT-CET & Foundation Coaching",
    template: "%s | Inspire Academy Kolhapur",
  },

  description:
    "Inspire Academy Kolhapur offers the best IIT-JEE, NEET, MHT-CET & Foundation coaching with expert faculty, advanced study pattern, and excellent results.",

  keywords: [
    "Inspire Academy Kolhapur",
    "IIT JEE coaching Kolhapur",
    "NEET coaching Kolhapur",
    "MHT-CET coaching Kolhapur",
    "best coaching institute Kolhapur",
    "foundation courses Kolhapur",
    "school coaching Kolhapur",
    "science coaching Kolhapur",
    "JEE classes Kolhapur",
    "NEET classes Kolhapur",
  ],

  alternates: {
    canonical: "https://inspireacademykolhapur.com",
  },

  openGraph: {
    title:
      "Inspire Academy Kolhapur – Best IIT JEE, NEET, MHT-CET & Foundation Coaching",
    description:
      "Kolhapur’s top coaching for IIT-JEE, NEET & MHT-CET with expert faculty and consistent top results.",
    url: "https://inspireacademykolhapur.com",
    siteName: "Inspire Academy Kolhapur",
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Inspire Academy Kolhapur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Inspire Academy Kolhapur – Best IIT JEE, NEET, MHT-CET Coaching",
    description:
      "Join the most trusted institute in Kolhapur for IIT-JEE, NEET & MHT-CET.",
    images: ["/og-banner.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="montserrat-500 antialiased">
        <ClientNavbarWrapper />
        <div className="flex min-h-svh flex-col">
          <div className="grid flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
