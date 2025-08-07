import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Eu nunca tinha tocado um instrumento na vida. Com o método do Café, em poucos dias, já estava acompanhando sambas com os amigos!",
      author: "Marcos L.",
      subtitle: "aluno da primeira turma"
    },
    {
      text: "Didática simples, gostosa de seguir. Me apaixonei de verdade pelo pandeiro!",
      author: "Luciana T.",
      subtitle: ""
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            💬 Depoimentos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-accent/30 border-primary/20 hover:shadow-elegant transition-smooth">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-lg text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">— {testimonial.author}</p>
                  {testimonial.subtitle && (
                    <p className="text-sm text-muted-foreground">{testimonial.subtitle}</p>
                  )}
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};