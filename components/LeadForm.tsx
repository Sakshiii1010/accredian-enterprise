"use client";
import { useState, useRef, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  interest: string;
  message: string;
}

const teamSizes = ["1-50", "51-200", "201-500", "500-1000", "1000+"];
const interests = ["Data Science & AI", "Product Management", "Leadership Development", "Engineering", "Custom Program", "Other"];

export default function LeadForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", phone: "", teamSize: "", interest: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", teamSize: "", interest: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div className="animate-on-scroll">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Get Started</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 font-display">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our enterprise consultants will map your skill gaps, business goals, and design a custom learning roadmap — at no cost.
            </p>

            <div className="space-y-5">
              {[
                { icon: "🎯", title: "Free Skill Gap Analysis", desc: "45-minute session with our L&D consultants" },
                { icon: "📋", title: "Custom Program Design", desc: "Tailored to your org's tech stack and goals" },
                { icon: "📊", title: "ROI Projection Report", desc: "Data-backed business case for your leadership" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 text-xl">{item.icon}</div>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 font-display">Schedule a Free Demo</h3>

              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold text-green-700 mb-2">Request Received!</h4>
                  <p className="text-gray-600">Our enterprise team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="Arjun Sharma"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Work Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="arjun@company.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Company *</label>
                      <input name="company" value={form.company} onChange={handleChange} required
                        placeholder="Acme Corp"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Team Size</label>
                      <select name="teamSize" value={form.teamSize} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                        <option value="">Select size</option>
                        {teamSizes.map((s) => <option key={s} value={s}>{s} employees</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Area of Interest</label>
                      <select name="interest" value={form.interest} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                        <option value="">Select topic</option>
                        {interests.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">How can we help?</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="Tell us about your learning goals and team challenges..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <button type="submit" disabled={status === "loading"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg disabled:opacity-60">
                    {status === "loading" ? "Submitting..." : "Schedule My Free Demo →"}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    🔒 No spam. Our team responds within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
