import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import HamburgNav from "@/components/HamburgNav";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <HamburgNav />
      <Hero />
      <Project />
      <Experience />
      <About />
      <Certificates />
      <Contact />
      <Marquee />
      <Footer />
    </div>
  );
}
