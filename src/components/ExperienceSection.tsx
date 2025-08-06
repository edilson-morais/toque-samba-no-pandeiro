import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, BookOpen, Users } from "lucide-react";

export const ExperienceSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Rápido",
      description: "Apenas 15 a 20 minutos por dia."
    },
    {
      icon: BookOpen,
      title: "Prático",
      description: "Aulas curtas, objetivas e progressivas."
    },
    {
      icon: Users,
      title: "Para todos",
      description: "Ideal para iniciantes de todas as idades."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            🥁 Uma Experiência Musical Transformadora
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Você ama samba, sente o ritmo na alma, mas nunca soube por onde começar a aprender?
            <br />
            Em apenas 7 dias, você vai sair do zero e conquistar a batida do samba no pandeiro 
            com segurança e prazer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-elegant transition-smooth">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-success mr-2" />
                <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
              </div>
              <p className="text-lg text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};