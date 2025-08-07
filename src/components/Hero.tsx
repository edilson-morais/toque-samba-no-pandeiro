
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-primary-foreground/5"></div>
      
      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-primary-foreground/20 p-4 rounded-full backdrop-blur-sm">
            <Music className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
          Toque Seu Primeiro Samba no Pandeiro em apenas{" "}
          <span className="text-burnt-orange font-semibold">7 Dias</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Aprenda os fundamentos do samba no pandeiro com uma metodologia prática, 
          divertida e acessível — mesmo que você nunca tenha tocado antes.
        </p>
        
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-elegant">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ryskM4LGrtk"
              title="Pandeiro Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
        
        <a href="https://sun.eduzz.com/R9JJ12VE9X?utm_source=seu-primeiro-samba-pv&utm_id=samba_pv" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto font-medium shadow-soft hover:shadow-elegant transition-all duration-300"
          >
            👉 QUERO COMEÇAR AGORA
          </Button>
        </a>
      </div>
    </section>
  );
};
