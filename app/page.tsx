import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Programs from "@/components/Programs";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Solutions />
      <Features />
      <HowItWorks />
      <Programs />
      <Partners />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}
