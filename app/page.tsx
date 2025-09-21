import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChatDemoSection from "@/components/ChatDemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <ChatDemoSection />
        <FeaturesSection />
        <StatsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
