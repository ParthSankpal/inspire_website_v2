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
import InspireAcademyImage from "@/public/InspireAcademyImage.jpg";
import { useIsMobile } from "@/lib/use-mobile";
import gsap from "gsap";


const courses = [
    {
        title: "NEET",
        href: "/courses/neet",
        description:
            "Medical entrance exam preparation with expert faculty and test series.",
    },
    {
        title: "JEE",
        href: "/courses/jee",
        description:
            "Engineering entrance exam coaching for JEE Main and Advanced.",
    },
    {
        title: "Class 8 to 10",
        description: "Foundation programs designed to build strong academic skills.",
        children: [
            { title: "Class 8", href: "/courses/class8" },
            { title: "Class 9", href: "/courses/class9" },
            { title: "Class 10", href: "/courses/class10" },
        ],
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

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isMobile = useIsMobile();

    const navRef = React.useRef<HTMLElement>(null)
    const announcementRef = React.useRef<HTMLDivElement>(null)
    const navItemsRef1 = React.useRef<HTMLUListElement | null>(null);
    const navItemsRef2 = React.useRef<HTMLDivElement>(null)


    React.useEffect(() => {
        // Animate navbar itself
        if (navRef.current) {
            gsap.fromTo(
                navRef.current,
                { y: -60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        }

        // Animate announcement banner
        if (announcementRef.current) {
            gsap.fromTo(
                announcementRef.current,
                { y: -20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.5,
                    duration: 0.8,
                    ease: 'power2.out',
                }
            );
        }

        // Animate nav items (optional)
        if (navItemsRef1.current) {
            gsap.fromTo(
                navItemsRef1.current.children,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    delay: 0.6,
                    duration: 0.6,
                    ease: 'power2.out'
                }
            );
        }

        if (navItemsRef2.current) {
            gsap.fromTo(
                navItemsRef2.current.children,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    delay: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                }
            );
        }

        // const onScroll = () => {
        //     const triggerHeight = window.innerHeight * 0.75;
        //     setScrolled(window.scrollY > triggerHeight);
        // };

        // window.addEventListener('scroll', onScroll)
        // return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <nav ref={navRef} className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto flex items-center justify-between  gap-5 px-6 lg:px-10 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={InspireAcademyImage}
                        alt="Inspire Academy"
                        width={45}
                        height={45}
                        className=" object-cover h-10 w-full"
                    />

                </Link>

                {/* Desktop Menu */}
                <div  className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList  ref={navItemsRef1} className="flex items-center gap-4">

                            {/* Courses */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {courses.map((course) =>
                                            course.children ? (
                                                <li key={course.title}>
                                                    <div className="mb-1 text-sm font-semibold text-gray-900">
                                                        {course.title}
                                                    </div>
                                                    <div className="flex flex-col space-y-1">
                                                        {course.children.map((sub) => (
                                                            <Link
                                                                key={sub.title}
                                                                href={sub.href}
                                                                className="text-sm text-gray-600 hover:text-blue-600 transition"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </li>
                                            ) : (
                                                <ListItem
                                                    key={course.title}
                                                    title={course.title}
                                                    href={course.href}
                                                >
                                                    {course.description}
                                                </ListItem>
                                            )
                                        )}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Test Series */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link href="/test-series">Test Series</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Results */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Results</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
                                        {results.map((result) =>
                                            result.children ? (
                                                <li key={result.title}>
                                                    <div className="mb-1 text-sm font-semibold text-gray-900">
                                                        {result.title}
                                                    </div>
                                                    <div className="flex flex-col space-y-1">
                                                        {result.children.map((sub) => (
                                                            <Link
                                                                key={sub.title}
                                                                href={sub.href}
                                                                className="text-sm text-gray-600 hover:text-blue-600 transition"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </li>
                                            ) : (
                                                <ListItem
                                                    key={result.title}
                                                    title={result.title}
                                                    href={result.href}
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
                                            <ListItem key={item.title} title={item.title} href={item.href}>
                                                Explore {item.title.toLowerCase()} and more updates.
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div ref={navItemsRef2} className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center gap-4">
                            {/* About */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link href="/about">About</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>


                            {/* Contact */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link href="/contact">Contact</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-inner animate-slide-down">
                    <div className="flex flex-col p-4 space-y-4">
                        {/* Courses */}
                        <div>
                            <p className="font-semibold text-gray-800">Courses</p>
                            {courses.map((item) =>
                                item.children ? (
                                    <div key={item.title} className="pl-2 mt-1">
                                        <p className="text-sm font-medium text-gray-600">
                                            {item.title}
                                        </p>
                                        {item.children.map((sub) => (
                                            <Link
                                                key={sub.title}
                                                href={sub.href}
                                                className="block text-sm pl-4 py-1 text-gray-600 hover:text-blue-600"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="block py-1 pl-2 text-gray-600 hover:text-blue-600"
                                    >
                                        {item.title}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* Test Series */}
                        <Link
                            href="/test-series"
                            className="font-semibold text-gray-800 hover:text-blue-600"
                        >
                            Test Series
                        </Link>

                        {/* Results */}
                        <div>
                            <p className="font-semibold text-gray-800">Results</p>
                            {results.map((item) =>
                                item.children ? (
                                    <div key={item.title} className="pl-2 mt-1">
                                        <p className="text-sm font-medium text-gray-600">
                                            {item.title}
                                        </p>
                                        {item.children.map((sub) => (
                                            <Link
                                                key={sub.title}
                                                href={sub.href}
                                                className="block text-sm pl-4 py-1 text-gray-600 hover:text-blue-600"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="block py-1 pl-2 text-gray-600 hover:text-blue-600"
                                    >
                                        {item.title}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* About */}
                        <Link
                            href="/about"
                            className="font-semibold text-gray-800 hover:text-blue-600"
                        >
                            About
                        </Link>

                        {/* More */}
                        <div>
                            <p className="font-semibold text-gray-800">More</p>
                            {more.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="block py-1 pl-2 text-gray-600 hover:text-blue-600"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

/* Helper for dropdown items */
function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none rounded-md p-3 no-underline outline-none transition-all duration-200 hover:bg-gray-50 hover:text-blue-600 focus:bg-gray-50"
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}
