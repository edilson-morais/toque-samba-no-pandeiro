import { Card } from "@/components/ui/card";
import { Calendar, Play } from "lucide-react";

export const CurriculumSection = () => {
  const curriculum = [
    { day: "Dia 1", content: "Ferramentas para se tornar um pandeirista" },
    { day: "Dia 2", content: "Ritmo básico de samba - Base 1" },
    { day: "Dia 3", content: "Ritmo básico de samba - Base 2" },
    { day: "Dia 4", content: "Ritmo básico de samba - Base 3" },
    { day: "Dia 5", content: "Ritmo básico de samba - Base 4" },
    { day: "Dia 6", content: "Ritmo básico de samba - Base 5" },
    { day: "Dia 7", content: "Tocar seu primeiro samba completo" }
  ];

  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/lovable-uploads/5ca836ff-ce37-47c3-9f9d-ed762cca215b.png)' }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
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
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{item.day}</h3>
                    <p className="text-lg text-muted-foreground">{item.content}</p>
                  </div>
                </div>
                <div className="bg-primary/5 p-2 rounded-full">
                  <Play className="w-5 h-5 text-secondary" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};