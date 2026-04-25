"use client";
import { useEffect, useRef } from "react";

const solutions = [
  {
    icon: "🎓",
    title: "University-Backed Programs",
    desc: "Access 200+ programs co-created with IITs, IIMs, and top global universities — rigorously structured for real-world applicability.",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics Dashboard",
    desc: "Track completion rates, engagement scores, and ROI reporting all in one command center. Live data for smarter L&D decisions.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    icon: "🧑‍💼",
    title: "Live Expert Mentorship",
    desc: "1:1 live sessions with 500+ industry practitioners across AI/ML, Data Science, Product, and Leadership domains.",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100",
  },
  {
    icon: "🤝",
    title: "Cohort-Based Learning",
    desc: "Structured cohorts drive collaboration, accountability, and peer learning — pushing completion rates above 94%.",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    icon: "⚙️",
    title: "Custom Curriculum Design",
    desc: "Tailor programs to your org's specific tech stack, skill gaps, industry context, and strategic business goals.",
    color: "from-red-50 to-pink-50",
    border: "border-red-100",
  },
  {
    icon: "🤖",
    title: "AI-Powered Learning Paths",
    desc: "Adaptive AI paths that adjust to each learner's pace, baseline, and goals — maximizing individual impact at scale.",
    color: "from-cyan-50 to-sky-50",
    border: "border-cyan-100",
  },
];

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Solutions
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 font-display">
            Everything L&D Teams Need
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From curriculum design to analytics — Accredian Enterprise is the complete operating system for ambitious learning organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className={`animate-on-scroll card-hover bg-gradient-to-br ${s.color} border ${s.border} rounded-2xl p-6 cursor-default`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 font-display">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
