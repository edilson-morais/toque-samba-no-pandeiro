import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          🚀 Pronto Pra Começar?
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
          Entre agora no desafio "7 Dias para Tocar Samba no Pandeiro"
        </p>
        
        <p className="text-lg mb-12 text-primary-foreground/80">
          Ganhe confiança, ritmo e alegria — tudo com acompanhamento de um mestre reconhecido.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xl px-12 py-8 h-auto font-bold shadow-glow"
        >
          👉 QUERO COMEÇAR AGORA
          <ArrowRight className="ml-2 w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};