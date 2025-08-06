import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LearningSection } from "@/components/LearningSection";
import { InstructorSection } from "@/components/InstructorSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ConnectSection } from "@/components/ConnectSection";
import { FAQSection } from "@/components/FAQSection";
import { PaymentSection } from "@/components/PaymentSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExperienceSection />
      <LearningSection />
      <InstructorSection />
      <CurriculumSection />
      <TestimonialsSection />
      <ConnectSection />
      <FAQSection />
      <PaymentSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
