import NavigationBar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProjectCarousel from "@/components/ProjectCarousel"
import ServicesSection from "@/components/ServicesSection"
import ServiceAreasSection from "@/components/ServiceAreasSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

// Main homepage component
export default function Home() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Navigation bar */}
      <NavigationBar />

      <main id="main-content">
        {/* Hero section with background image */}
        <HeroSection />

        {/* Project carousel */}
        <ProjectCarousel />

        {/* Services section */}
        <ServicesSection />

        {/* Service areas section */}
        <ServiceAreasSection />

        {/* Contact section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
