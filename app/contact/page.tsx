"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function ContactUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const infoSectionRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

useEffect(() => {
  const sectionEl = sectionRef.current;
  const headerEl = headerRef.current;
  const infoEl = infoSectionRef.current;
  const formEl = formSectionRef.current;

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // Fade in entire section first
  tl.fromTo(
    sectionEl,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, clearProps: "all" }
  );

  // Header comes from left
  if (headerEl) {
    tl.fromTo(
      headerEl,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.2"
    );
  }

  // Info section fades up
  if (infoEl) {
    tl.fromTo(
      infoEl.querySelectorAll(".fade-up"),
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, delay: 0.1 },
      "-=0.4"
    );
  }

  // Form slides in from right
  if (formEl) {
    tl.fromTo(
      formEl,
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.2"
    );
  }

  // ✅ Correct cleanup
  return () => {
    tl.kill();
  };
}, []);

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
    } catch {
      setMessage("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center bg-white px-6 py-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
       
       <div ref={formSectionRef} className="space-y-6 block md:hidden">

        <h1
            ref={headerRef}
            className="text-6xl md:text-7xl font-bold tracking-wide uppercase mb-10"
          >
            Contact
          </h1>


          <p className="leading-relaxed">
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

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" required className="accent-gray-700" />
              I agree with the{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p className="text-center text-sm pt-2">{message}</p>
            )}
          </form>
        </div>
       
        {/* Left - Info */}
        <div className="space-y-6">
          <h1
            ref={headerRef}
            className="text-6xl hidden md:block md:text-7xl font-bold tracking-wide uppercase mb-10"
          >
            Contact
          </h1>

          <div ref={infoSectionRef} className="space-y-2 text-sm">
            <p className="fade-up uppercase font-bold">Address</p>
            <p className="fade-up">
              Upper Ground Floor, Jaduban Plaza, <br />
              A wing, and, near Panch Bunglow, <br />
              opposite to HDFC Bank, E Ward, Shahupuri, Kolhapur, Maharashtra
              416001
            </p>
            <a
              href="https://maps.app.goo.gl/2AAnH46DKFvLHsdV7"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up underline mt-2 inline-block hover:text-gray-500 transition"
            >
              SEE ON MAP →
            </a>

            <p className="fade-up uppercase font-bold pt-4">Phone</p>
            <p className="fade-up">+91 7972961299</p>

            <p className="fade-up uppercase font-bold pt-4">Email</p>
            <p className="fade-up">info@inspireacademy.in</p>

            <p className="fade-up uppercase font-bold pt-4">Business Hours</p>
            <p className="fade-up">All 7 days : 9 AM – 8 PM</p>
          </div>
        </div>

        {/* Right - Form */}
        <div ref={formSectionRef} className="space-y-6 hidden md:block">
          <p className="leading-relaxed">
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

            <label className="flex items-center gap-2 text-sm text-[#ea018c]">
              <input type="checkbox" required className="accent-gray-700" />
              I agree with the{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a1c4a] cursor-pointer text-white font-semibold py-3 rounded-md transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p className="text-center text-sm pt-2">{message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
