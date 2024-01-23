import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Project";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
    </div>
  );
}
