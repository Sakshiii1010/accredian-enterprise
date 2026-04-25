"use client";
import { useState, useEffect, useRef } from "react";

const categories = ["All", "Data & AI", "Product", "Leadership", "Engineering", "Analytics"];

const programs = [
  { cat: "Data & AI", title: "Executive Program in Data Science & AI", partner: "IIT Delhi", duration: "11 months", level: "Advanced", tag: "🔥 Most Popular" },
  { cat: "Product", title: "Product Management Certification", partner: "IIM Bangalore", duration: "8 months", level: "Intermediate", tag: "⭐ Top Rated" },
  { cat: "Leadership", title: "General Management Program", partner: "IIM Calcutta", duration: "12 months", level: "Senior", tag: "🏆 Executive" },
  { cat: "Engineering", title: "Full Stack Engineering Bootcamp", partner: "IIT Bombay", duration: "6 months", level: "Intermediate", tag: "💻 Technical" },
  { cat: "Analytics", title: "Business Analytics & Intelligence", partner: "SP Jain", duration: "9 months", level: "Advanced", tag: "📊 Analytics" },
  { cat: "Data & AI", title: "Machine Learning Engineering", partner: "IIT Madras", duration: "10 months", level: "Advanced", tag: "🤖 AI/ML" },
  { cat: "Leadership", title: "HR Leadership & People Analytics", partner: "XLRI", duration: "7 months", level: "Senior", tag: "👥 HR" },
  { cat: "Engineering", title: "Cloud Architecture & DevOps", partner: "IIT Kharagpur", duration: "8 months", level: "Advanced", tag: "☁️ Cloud" },
];

const levelColors: Record<string, string> = {
  Advanced: "bg-red-100 text-red-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Senior: "bg-purple-100 text-purple-700",
};

export default function Programs() {
  const [activecat, setActivecat] = useState("All");
  const ref = useRef<HTMLDivElement>(null);

  const filtered = activecat === "All" ? programs : programs.filter((p) => p.cat === activecat);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Program Catalog</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 font-display">200+ Enterprise Programs</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Co-designed with India's most prestigious institutions. Every program carries a top-tier credential.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {categories.map((c) => (
            <button key={c} onClick={() => setActivecat(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activecat === c ? "bg-blue-700 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-on-scroll">
          {filtered.map((p, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{p.partner}</span>
                <span className="text-xs text-gray-500">{p.tag}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 leading-snug font-display">{p.title}</h3>
              <div className="flex items-center gap-2 mt-auto">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColors[p.level]}`}>{p.level}</span>
                <span className="text-xs text-gray-500">⏱ {p.duration}</span>
              </div>
              <a href="#contact" className="mt-4 block text-center text-sm font-semibold text-blue-600 border border-blue-200 rounded-full py-2 hover:bg-blue-600 hover:text-white transition-all">
                Learn More
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-700 text-white font-bold hover:bg-blue-800 transition-all shadow-lg">
            View All 200+ Programs →
          </a>
        </div>
      </div>
    </section>
  );
}
