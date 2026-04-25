"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Discovery & Needs Assessment",
    desc: "Our consultants map your skill gaps, business objectives, and team structure in a comprehensive 45-minute session.",
  },
  {
    num: "02",
    icon: "📐",
    title: "Custom Program Design",
    desc: "We co-design a curriculum with your chosen academic partner — tailored to your industry, stack, and goals.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Launch & Onboard",
    desc: "Seamlessly onboard your team with a dedicated success manager. Get everyone up and running in days, not months.",
  },
  {
    num: "04",
    icon: "📊",
    title: "Track & Optimize",
    desc: "Monitor progress with live dashboards, get weekly reports, and optimize with AI-driven insights to maximize ROI.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">How It Works</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 font-display">From Onboarding to ROI in 4 Steps</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">A proven process trusted by 500+ enterprise learning teams.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -translate-y-1/2 mx-24" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="animate-on-scroll relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 text-center hover:border-blue-400 hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{step.num}</span>
                  <h3 className="text-lg font-bold text-blue-900 mt-2 mb-3 font-display">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
