import { Card, CardContent } from "@/components/ui/card";
import { Music, Hand, FileText } from "lucide-react";

export const LearningSection = () => {
  const learningTopics = [
    {
      icon: Music,
      title: "Sons do Pandeiro",
      description: "Cada lugar do pandeiro é responsável por um som, um mais grave, um mais agudo, um abafado e tem toda a questão da afinação. Você precisa conhecer bem para que o som saia perfeito."
    },
    {
      icon: Hand,
      title: "Golpes no Pandeiro",
      description: "Para que o som saia, você precisa dar 'golpes' no pandeiro, você precisa dominar os movimentos para que o som saia cada vez mais limpo e de forma que agrade os ouvidos."
    },
    {
      icon: FileText,
      title: "Leitura de Partitura",
      description: "Saber o que você está fazendo é fundamental para que não fique tudo bagunçado. Saber ler cada nota e saber onde você deve fazer o movimento no pandeiro é o que vai te diferenciar dos outros."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Não é somente pegar o pandeiro e sair{" "}
              <span className="text-warning">"tocando"</span>...
            </h2>
            
            <div className="space-y-6">
              {learningTopics.map((topic, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <topic.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {topic.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/92298813-5269-452f-b272-7461646bc707.png"
              alt="Pessoa tocando pandeiro"
              className="w-full h-auto rounded-lg shadow-elegant"
            />
            <div className="absolute bottom-4 left-4 bg-warning text-warning-foreground px-6 py-3 rounded-lg font-bold text-lg">
              25
              <div className="text-sm font-normal">
                Anos de experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};