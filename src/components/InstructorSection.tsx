import { Card } from "@/components/ui/card";
import { Award, Users, Music } from "lucide-react";

export const InstructorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              🎓 Aprenda com Carlos Café
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Reconhecido como um dos grandes mestres do pandeiro no Brasil, Carlos Café 
              desenvolveu um método direto, eficaz e acolhedor.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Com ele, milhares de pessoas aprenderam a tocar pandeiro com alegria e confiança, 
              sem precisar de conhecimento musical prévio.
            </p>
          </div>

          <Card className="p-8 bg-accent/50 border-primary/20">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Mestre Reconhecido</h3>
                  <p className="text-muted-foreground">Grande referência no pandeiro brasileiro</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Milhares de Alunos</h3>
                  <p className="text-muted-foreground">Experiência comprovada no ensino</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Music className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Método Único</h3>
                  <p className="text-muted-foreground">Direto, eficaz e acolhedor</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};