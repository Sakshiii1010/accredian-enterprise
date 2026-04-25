"use client";
import { useState, useEffect, useRef } from "react";

const tabs = [
  {
    id: "analytics",
    label: "Analytics",
    icon: "📈",
    title: "Real-Time Learning Analytics",
    desc: "Track every learner's journey with precision. Monitor completion rates, quiz scores, time-on-task, and engagement metrics from one powerful dashboard.",
    points: ["Live completion & dropout tracking", "Individual learner progress reports", "ROI measurement & business impact", "Exportable reports for leadership"],
  },
  {
    id: "mentorship",
    label: "Mentorship",
    icon: "🎯",
    title: "500+ Industry Mentors",
    desc: "Connect your teams with practitioners from Google, Microsoft, Amazon, and top startups. Structured 1:1 sessions mapped to learning outcomes.",
    points: ["Domain experts across 20+ tech fields", "Scheduled live sessions & recordings", "Mentor matching based on goals", "Capstone project guidance"],
  },
  {
    id: "cohorts",
    label: "Cohorts",
    icon: "👥",
    title: "Cohort-Based Collaboration",
    desc: "Learning is better together. Synchronized cohorts across geographies keep teams aligned, accountable, and engaged throughout the journey.",
    points: ["Cross-timezone cohort management", "Peer discussions & group projects", "Leaderboards & gamification", "94%+ completion rates achieved"],
  },
  {
    id: "custom",
    label: "Custom",
    icon: "🔧",
    title: "Fully Custom Curriculum",
    desc: "Your tech stack, your industry, your goals. Our curriculum architects design programs that map directly to your org's strategic objectives.",
    points: ["Needs assessment & skill gap analysis", "Role-specific learning paths", "Integration with existing HRMS/LMS", "Quarterly curriculum refresh"],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const feature = tabs[active];

  return (
    <section id="features" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Platform Features</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 font-display">Built for Enterprise Scale</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Every feature is designed for L&D teams managing large, distributed workforces.</p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all ${
                active === i
                  ? "bg-blue-700 text-white shadow-lg shadow-blue-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        {/* Feature panel */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100 animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4 font-display">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{feature.desc}</p>
              <ul className="space-y-3">
                {feature.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400 font-mono">Accredian Dashboard</span>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-gray-100 rounded-full w-3/4" />
                <div className="grid grid-cols-3 gap-2">
                  {[85, 92, 78].map((v, k) => (
                    <div key={k} className="bg-blue-50 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-blue-700 font-display">{v}%</div>
                      <div className="text-xs text-gray-500 mt-1">{["Completion", "Engagement", "Score"][k]}</div>
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full">
                        <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: v + "%" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-gray-100 rounded-full" />
                <div className="h-2 bg-gray-100 rounded-full w-5/6" />
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-emerald-50 rounded-xl p-3">
                    <div className="text-xl font-bold text-emerald-600 font-display">↑ 40%</div>
                    <div className="text-xs text-gray-500">Team Velocity</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3">
                    <div className="text-xl font-bold text-amber-600 font-display">3.2x</div>
                    <div className="text-xs text-gray-500">ROI Reported</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
