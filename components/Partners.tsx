"use client";
import { useEffect, useRef } from "react";

const institutions = [
  { name: "IIT Delhi", type: "Technology" },
  { name: "IIM Bangalore", type: "Management" },
  { name: "IIT Bombay", type: "Technology" },
  { name: "IIM Calcutta", type: "Management" },
  { name: "IIT Madras", type: "Technology" },
  { name: "SP Jain", type: "Business" },
  { name: "XLRI", type: "HR & Leadership" },
  { name: "IIT Kharagpur", type: "Technology" },
  { name: "IIM Visakhapatnam", type: "Management" },
  { name: "Great Lakes", type: "Business" },
];

const companies = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Paytm", "Razorpay", "Zomato", "HDFC", "TCS", "Infosys",
];

export default function Partners() {
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
    <section id="partners" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Academic Partners</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 font-display">World-Class University Network</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Every program is co-designed and certified by India's most prestigious institutions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 animate-on-scroll">
          {institutions.map((inst, i) => (
            <div key={i} className="card-hover bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-center">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold font-display">{inst.name.slice(0,2)}</span>
              </div>
              <p className="font-bold text-blue-900 text-sm font-display">{inst.name}</p>
              <p className="text-gray-500 text-xs mt-1">{inst.type}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-12 animate-on-scroll">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-8">Trusted by employees from</p>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((c) => (
              <span key={c} className="bg-gray-50 border border-gray-200 text-gray-700 font-bold px-5 py-2.5 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all text-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
