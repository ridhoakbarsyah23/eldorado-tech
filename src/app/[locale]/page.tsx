import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/layout/Footer";
import WhatsAppCta from "@/components/ui/WhatsAppCta";
import MarketingMotion from "@/components/ui/MarketingMotion";

export default function Home() {
  return (
    <main data-marketing-page className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#172033]">
      <MarketingMotion />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
      <WhatsAppCta />
    </main>
  );
}
