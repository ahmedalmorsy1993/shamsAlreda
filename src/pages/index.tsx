import AboutUs from "@/components/Home/AboutUs";
import ContactUs from "@/components/Home/ContactUs";
import HeroSection from "@/components/Home/HeroSection";
import OutServices from "@/components/Home/OurServices";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OutServices />
      <AboutUs />
      <ContactUs />
    </>
  )
}
