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
  colspan?: string;
  slug: string;
};

const mainCourses: CourseCard[] = [
  {
    className: "11–12th",
    course: "JEE Main",
    subtitle: "Target + Foundation",
    description: "Rigorous training for JEE Mains with advanced fundamentals.",
    image: "/images/class11.jpg",
    slug: "jee",
  },
  {
    className: "11–12th",
    course: "JEE Advanced",
    subtitle: "IIT Preparation",
    description: "Master problem-solving and advanced JEE concepts.",
    image: "/images/class11.jpg",
    slug: "jee-advanced",
  },
  {
    className: "11–12th",
    course: "NEET",
    subtitle: "Medical Entrance",
    description: "Concept clarity and MCQ practice for top NEET ranks.",
    image: "/images/class11.jpg",
    slug: "neet",
  },
  {
    className: "11–12th",
    course: "MHT-CET",
    subtitle: "State Board + CET Focused",
    description: "Balanced approach for board exams and CET success.",
    image: "/images/class11.jpg",
    slug: "mht-cet",
  },
];

const foundationCourses: CourseCard[] = [
  {
    className: "8th Class",
    course: "Foundation",
    subtitle: "NTSE & Olympiad Track",
    description: "Strengthen basics & build curiosity for science & math.",
    image: "/images/class8.jpg",
    slug: "foundation-8",
  },
  {
    className: "9th Class",
    course: "Foundation",
    subtitle: "Target NTSE & Olympiads",
    description: "Early exposure to conceptual and competitive preparation.",
    image: "/images/class9.jpg",
    slug: "foundation-9",
  },
  {
    className: "10th Class",
    course: "Foundation",
    subtitle: "Boards + Competitive Readiness",
    description: "Prepare for boards while developing problem-solving habits.",
    image: "/images/class10.jpg",
    slug: "foundation-10",
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

  // Closes mobile + accordion when link is clicked
  const handleLinkClick = () => {
    setMobileOpen(false);
    setAccordionValue(undefined);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
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
                  <div className="grid gap-6 p-4 md:w-[700px] md:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">Main Courses</h3>
                      <ul className="space-y-2">
                        {mainCourses.map((c) => (
                          <ListItem
                            key={c.slug}
                            title={c.course}
                            href={`/courses/${c.slug}`}
                            onClick={handleLinkClick}
                          >
                            {c.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                        Foundation (8th–10th)
                      </h3>
                      <ul className="space-y-2">
                        {foundationCourses.map((c) => (
                          <ListItem
                            key={c.slug}
                            title={c.className}
                            href={`/courses/${c.slug}`}
                            onClick={handleLinkClick}
                          >
                            {c.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/test-series" onClick={handleLinkClick}>
                    Test Series
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

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
                                className="text-sm text-gray-600 hover:text-blue-600 transition"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ) : (
                        <ListItem key={r.title} title={r.title} href={r.href} onClick={handleLinkClick}>
                          Academic results of Inspire Academy students.
                        </ListItem>
                      )
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

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
          <Link href="/about" onClick={handleLinkClick} className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" onClick={handleLinkClick} className="hover:text-blue-600">
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
          className="md:hidden bg-white border-t border-gray-200 shadow-inner fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] overflow-y-auto"
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
                <div>
                  <p className="text-sm font-semibold text-gray-700">Main Courses</p>
                  {mainCourses.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/courses/${c.slug}`}
                      onClick={handleLinkClick}
                      className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1"
                    >
                      {c.course}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Foundation (8th–10th)</p>
                  {foundationCourses.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/courses/${c.slug}`}
                      onClick={handleLinkClick}
                      className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1"
                    >
                      {c.className}
                    </Link>
                  ))}
                </div>
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
