"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InspireAcademyImage from "@/public/InspireAcademyImage.jpg";
import gsap from "gsap";

// ----------------- DATA -----------------

type CourseCard = {
  className: string;
  course: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
};

const courses: CourseCard[] = [
  {
    className: "11–12th",
    course: "PCM",
    subtitle: "Engineering Entrance",
    description:
      "Comprehensive JEE (Main + Advanced), MHT-CET, BITSAT & VITEEE preparation.",
    image: "/images/class11.jpg",
    slug: "pcm",
  },
  {
    className: "11–12th",
    course: "PCB",
    subtitle: "Medical Entrance",
    description:
      "Target NEET-UG & IISER with conceptual clarity and intensive MCQ practice.",
    image: "/images/class11.jpg",
    slug: "pcb",
  },
  {
    className: "8th–10th",
    course: "Foundation",
    subtitle: "NTSE & Olympiad Track",
    description:
      "Strong fundamentals for NTSE, Olympiads, and Homi Bhabha exams.",
    image: "/images/class8.jpg",
    slug: "foundation",
  },
  {
    className: "8th–10th (CBSE)",
    course: "Academics CBSE",
    subtitle: "Coming Soon",
    description:
      "CBSE-aligned foundation course for early conceptual development.",
    image: "/images/class8.jpg",
    slug: "foundation-cbse",
  },
];

const results = [
  { title: "NEET", href: "/results/neet" },
  { title: "JEE", href: "/results/jee" },
  {
    title: "Class 8 to 10",
    children: [
      { title: "Class 8", href: "/results/class8" },
      { title: "Class 9", href: "/results/class9" },
      { title: "Class 10", href: "/results/class10" },
    ],
  },
];

const more = [
  { title: "Blogs", href: "/blogs" },
  { title: "News", href: "/news" },
  { title: "Careers", href: "/careers" },
];

// ----------------- COMPONENT -----------------
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [accordionValue, setAccordionValue] = React.useState<string | undefined>();
  const navRef = React.useRef<HTMLElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  // Animate navbar on mount
  React.useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  // Animate mobile menu open/close
  React.useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          y: -30,
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
      }
    }
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
    setAccordionValue(undefined);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur supports-backdrop-filter:bg-white/80"
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-10 py-3">
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick} className="flex items-center space-x-2">
          <Image
            src={InspireAcademyImage}
            alt="Inspire Academy"
            width={45}
            height={45}
            className="object-cover h-10 w-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
              {/* Courses */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 md:w-[600px] md:grid-cols-2">
                    {courses.map((c) => (
                      <ListItem
                        key={c.slug}
                        title={`${c.className} – ${c.course}`}
                        href={`/courses/${c.slug}`}
                        onClick={handleLinkClick}
                        className=" hover:text-[#5696F6] bg-none"
                      >
                        {c.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Test Series */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/test-series" onClick={handleLinkClick}>
                    Test Series
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Results */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Results</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
                    {results.map((r) =>
                      r.children ? (
                        <li key={r.title}>
                          <div className="mb-1 text-sm font-semibold text-gray-900">
                            {r.title}
                          </div>
                          <div className="flex flex-col space-y-1">
                            {r.children.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                onClick={handleLinkClick}
                                className="text-sm text-gray-600 hover:text-[#5696F6] transition"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ) : (
                        <ListItem
                          key={r.title}
                          title={r.title}
                          href={r.href}
                          onClick={handleLinkClick}
                        >
                          Academic results of Inspire Academy students.
                        </ListItem>
                      )
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* More */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    {more.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        onClick={handleLinkClick}
                      >
                        Explore {item.title.toLowerCase()} and more updates.
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex gap-5 items-center">
          <Link href="/about" onClick={handleLinkClick} className="hover:text-[#5696F6]">
            About
          </Link>
          <Link href="/contact" onClick={handleLinkClick} className="hover:text-[#5696F6]">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t border-gray-200 shadow-inner fixed top-16 left-0 w-full h-[calc(100vh-64px)] overflow-y-auto"
        >
          <Accordion
            type="single"
            collapsible
            value={accordionValue}
            onValueChange={setAccordionValue}
            className="w-full p-4"
          >
            {/* Courses */}
            <AccordionItem value="courses">
              <AccordionTrigger>Courses</AccordionTrigger>
              <AccordionContent className="pl-3 space-y-3">
                {courses.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    onClick={handleLinkClick}
                    className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1"
                  >
                    {c.className} – {c.course}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Results */}
            <AccordionItem value="results">
              <AccordionTrigger>Results</AccordionTrigger>
              <AccordionContent className="pl-3 space-y-2">
                {results.map((r) =>
                  r.children ? (
                    <div key={r.title}>
                      <p className="text-sm font-semibold text-gray-700">{r.title}</p>
                      {r.children.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={handleLinkClick}
                          className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={r.title}
                      href={r.href}
                      onClick={handleLinkClick}
                      className="block text-sm text-gray-600 hover:text-blue-600 pl-2 py-1"
                    >
                      {r.title}
                    </Link>
                  )
                )}
              </AccordionContent>
            </AccordionItem>

            {/* More */}
            <AccordionItem value="more">
              <AccordionTrigger>More</AccordionTrigger>
              <AccordionContent className="pl-3">
                {more.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block text-sm text-gray-600 hover:text-blue-600 pl-2 py-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* About */}
            <AccordionItem value="about">
              <AccordionTrigger>About</AccordionTrigger>
              <AccordionContent>
                <Link
                  href="/about"
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1"
                >
                  About Inspire Academy
                </Link>
              </AccordionContent>
            </AccordionItem>

            {/* Contact */}
            <AccordionItem value="contact">
              <AccordionTrigger>Contact</AccordionTrigger>
              <AccordionContent>
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1"
                >
                  Get in Touch
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </nav>
  );
}

/* Helper ListItem */
function ListItem({
  title,
  children,
  href,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; onClick?: () => void }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          onClick={onClick}
          className="block select-none rounded-md p-3 no-underline outline-none transition-all duration-200 hover:bg-gray-50 hover:text-blue-600 focus:bg-gray-50"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
