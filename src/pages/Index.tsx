import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { InstructorSection } from "@/components/InstructorSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ConnectSection } from "@/components/ConnectSection";
import { FAQSection } from "@/components/FAQSection";
import { PaymentSection } from "@/components/PaymentSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExperienceSection />
      <InstructorSection />
      <CurriculumSection />
      <TestimonialsSection />
      <ConnectSection />
      <FAQSection />
      <PaymentSection />
      <CTASection />
    </div>
  );
};

export default Index;
