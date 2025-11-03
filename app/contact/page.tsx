"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function ContactUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const navItemsRef1 = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({ email: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // GSAP Animations
    useEffect(() => {
        if (containerRef.current) {
            gsap.from(containerRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power2.out",
            });
        }

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
                    ease: "power2.out",
                }
            );
        }
    }, []);

    // Handle Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Message sent successfully!");
                setFormData({ email: "", phone: "" });
            } else {
                setMessage("❌ " + data.message);
            }
        } catch (error) {
            setMessage("⚠️ Something went wrong. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            ref={containerRef}
            className="min-h-screen flex flex-col justify-center bg-white px-6 py-10"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Info */}
                <div ref={navItemsRef1} className="space-y-6">
                    <div className="space-y-2 text-sm ">
                        <h1 className="text-6xl md:text-7xl font-bold tracking-wide uppercase mb-10">Contact</h1>
                        <p className="uppercase font-bold">Address</p>
                        <p>Upper Ground Floor, Jaduban Plaza, <br /> A wing, and, near Panch Bunglow, <br /> opposite to HDFC Bank, E Ward, Shahupuri, Kolhapur, Maharashtra 416001</p>
                        <a href="https://maps.app.goo.gl/2AAnH46DKFvLHsdV7" target='_blank' className="underline mt-2 inline-block hover:text-gray-300 transition">SEE ON MAP →</a>


                        <p className="uppercase  font-bold pt-4">Phone</p>
                        <p>+91 7972961299</p>

                        <p className="uppercase  font-bold pt-4">Email</p>
                        <p>info@inspireacademy.in</p>

                        <p className="uppercase  font-bold pt-4">Business Hours</p>
                        <p>All 7 days : 9 AM – 8 PM</p>
                    </div>
                </div>

                {/* Right - Form */}
                <div className="space-y-6">
                    <p className=" leading-relaxed">
                        We’re dedicated to providing outstanding customer service. Please
                        don’t hesitate to contact us if you have any questions or inquiries.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="email"
                                required
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                            <input
                                type="tel"
                                required
                                placeholder="Mobile Number"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </div>

                        <label className="flex items-center gap-2 text-sm ">
                            <input type="checkbox" required className="accent-gray-700" />
                            I agree with the <a href="#" className="underline">Privacy Policy</a>
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {message && (
                            <p className="text-center text-sm  pt-2">{message}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
