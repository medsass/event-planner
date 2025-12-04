import Header from "@/components/header"
import ContactInfoHeader from "@/components/contact-info-header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section" 
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import CoveringAreaSection from "@/components/covering-area-section"
import TestimonialSection from "@/components/testimonial-section"
import RecentEventsSection from "@/components/recent-events-section"
import EventPackageSection from "@/components/event-package-section"
import FollowSection from "@/components/follow-section"
import CTASection from "@/components/cta-section"
import ServicesSection from "@/components/services-section"
import FAQSection from "@/components/faq-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-white">
      <ContactInfoHeader />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ExperienceSection />
      <CoveringAreaSection />
      <TestimonialSection />
      <ServicesSection />
      <RecentEventsSection />
      <EventPackageSection />
      <FAQSection />
      <FollowSection />
      <NewsletterSection />
      <CTASection />
      <Footer />
    </div>
  )
}
