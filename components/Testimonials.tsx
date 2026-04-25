"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team velocity improved by 40%. The ROI is undeniable.",
    name: "Arjun Sharma",
    title: "CHRO, FinTech Unicorn",
    company: "Series B Startup",
    rating: 5,
  },
  {
    quote: "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers now lead ML projects independently.",
    name: "Priya Nair",
    title: "VP Engineering, E-commerce Giant",
    company: "Top 5 E-commerce",
    rating: 5,
  },
  {
    quote: "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96%.",
    name: "Rahul Mehta",
    title: "Head of L&D, Global BFSI Firm",
    company: "Fortune 500",
    rating: 5,
  },
  {
    quote: "The AI-powered learning paths adapted to each team member's pace. We saw measurable skill improvements within the first month of the program.",
    name: "Sneha Patel",
    title: "Chief People Officer, SaaS Company",
    company: "B2B SaaS",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 hero-gradient" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/20">
            Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">Hear from L&D Leaders</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">CHROs and L&D heads who transformed their organizations.</p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="flex mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-amber-400 text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 font-display">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold font-display">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-blue-200 text-sm">{t.title}</p>
                  <p className="text-blue-300 text-xs">{t.company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? "bg-white w-8" : "bg-white/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
