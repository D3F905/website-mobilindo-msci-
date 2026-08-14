import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import Hero from "@/components/sections/Hero";
import FleetSection from "@/components/sections/FleetSection";
import PriceComparison from "@/components/sections/PriceComparison";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CustomerGallery from "@/components/sections/CustomerGallery";
import Testimonials from "@/components/sections/Testimonials";
import HowToRent from "@/components/sections/HowToRent";
import TermsAndConditions from "@/components/sections/TermsAndConditions";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FleetSection />
        <PriceComparison />
        <WhyChooseUs />
        <CustomerGallery />
        <Testimonials />
        <HowToRent />
        <TermsAndConditions />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
