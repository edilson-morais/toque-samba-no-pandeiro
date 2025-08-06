import { Card } from "@/components/ui/card";
import { Heart, Music, Smile } from "lucide-react";

export const ConnectSection = () => {
  const benefits = [
    {
      icon: Heart,
      text: "se conectar com o ritmo da música brasileira"
    },
    {
      icon: Smile,
      text: "se divertir, se expressar"
    },
    {
      icon: Music,
      text: "descobrir que você é capaz de fazer música com as próprias mãos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          🙌 Não é Só Sobre Tocar…
        </h2>
        
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-4">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
                <p className="text-xl text-primary-foreground">É sobre {benefit.text}.</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};