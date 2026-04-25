"use client";
import { useEffect, useRef } from "react";

const partners = ["IIT Delhi", "IIM Bangalore", "IIT Bombay", "IIM Calcutta", "IIT Madras", "SP Jain", "XLRI", "IIT Kharagpur"];

export default function Hero() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const targets = [500, 94, 40, 50000];
    const labels = ["Enterprises", "% Completion", "% Avg ROI", "Learners"];

    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      let start = 0;
      const end = targets[i];
      const duration = 2000;
      const step = (end / duration) * 16;
      const timer = setInterval(() => {
        start += step;
        if (start >= end) { el.textContent = end + (i === 1 ? "%" : i === 2 ? "%" : "+"); clearInterval(timer); }
        else el.textContent = Math.floor(start) + (i === 1 ? "%" : i === 2 ? "%" : "+");
      }, 16);
    });
  }, []);

  return (
    <section className="relative min-h-screen hero-gradient flex flex-col items-center justify-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-indigo-500 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-400 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Trusted by 500+ Enterprises Across India</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Upskill Your<br />
          <span className="text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FCD34D, #F59E0B, #FB923C)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
            Workforce at Scale
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Partner with IITs, IIMs & global universities. Curated programs, live mentorship, and real-time analytics — delivering measurable ROI for L&D teams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#contact" className="group px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-lg hover:from-amber-500 hover:to-orange-600 transition-all shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1">
            Schedule a Demo
            <span className="ml-2 group-hover:ml-3 transition-all">→</span>
          </a>
          <a href="#features" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            Explore Features
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { label: "Enterprises", suffix: "+" },
            { label: "Completion Rate", suffix: "%" },
            { label: "Average ROI", suffix: "%" },
            { label: "Learners Trained", suffix: "+" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15 hover:bg-white/15 transition-all">
              <div className="stat-number text-4xl font-bold mb-1">
                <span ref={(el) => { counterRefs.current[i] = el; }}>0+</span>
              </div>
              <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scrolling partner logos */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-blue-300 text-sm mb-4 font-medium uppercase tracking-widest">Academic Partners</p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <span key={p} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full font-medium hover:bg-white/20 transition-all">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
