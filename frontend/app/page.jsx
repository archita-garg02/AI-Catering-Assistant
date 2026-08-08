import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import WelcomeBubble from "@/components/common/Welcomebubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <WelcomeBubble />
    </>
  );
}
