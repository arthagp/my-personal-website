import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Project";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <About />
      <Certificates />
    </div>
  );
}
