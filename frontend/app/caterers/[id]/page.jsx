import FourthLanding from "@/components/catererDetails/FourthLanding";
import CatererInformation from "@/components/catererDetails/CatererInformation";
import QuickStats from "@/components/catererDetails/QuickStats";
import AboutSection from "@/components/catererDetails/AboutSection";
import MenuSection from "@/components/catererDetails/MenuSection";
import ServicesSection from "@/components/catererDetails/ServicesSection";
import MenuItemsSection from "@/components/catererDetails/MenuItemsSection";
import AIAssistant from "@/components/catererDetails/AIAssistant";

export default function CatererDetailsPage() {
  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7]
        pr-0
        lg:pr-[380px]
      "
    >
      <FourthLanding />

      <CatererInformation />

      <MenuItemsSection />

      <MenuSection />

      <ServicesSection />

      <AboutSection />

      <QuickStats />

      <AIAssistant />
    </main>
  );
}