import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
