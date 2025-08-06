import { Card } from "@/components/ui/card";
import { Calendar, Play } from "lucide-react";

export const CurriculumSection = () => {
  const curriculum = [
    { day: "Dia 1", content: "Postura, pegada e coordenação" },
    { day: "Dia 2", content: "Ritmo básico de samba" },
    { day: "Dia 3", content: "Técnicas de alternância e subdivisão" },
    { day: "Dia 4", content: "Padrões rítmicos para samba de roda" },
    { day: "Dia 5", content: "Estudo com metrônomo e Ganza" },
    { day: "Dia 6", content: "Aplicação prática com músicas" },
    { day: "Dia 7", content: "Tocar seu primeiro samba completo" }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            📅 O Que Você Vai Aprender em 7 Dias
          </h2>
        </div>

        <div className="grid gap-4">
          {curriculum.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-smooth bg-card/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{item.day}</h3>
                    <p className="text-lg text-muted-foreground">{item.content}</p>
                  </div>
                </div>
                <div className="bg-primary/5 p-2 rounded-full">
                  <Play className="w-5 h-5 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};