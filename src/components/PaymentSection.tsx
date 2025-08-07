import { Card } from "@/components/ui/card";
import { CreditCard, Smartphone, FileText, CheckCircle, Clock } from "lucide-react";

export const PaymentSection = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Cartão de Crédito",
      subtitle: "Parcele em até 12x",
      description: "Acesso liberado imediatamente após aprovação"
    },
    {
      icon: Smartphone,
      title: "Pix",
      subtitle: "Pagamento à vista",
      description: "Liberação rápida em poucos minutos"
    },
    {
      icon: FileText,
      title: "Boleto Bancário",
      subtitle: "Pagamento à vista",
      description: "Liberação em até 2 dias úteis após o pagamento"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            💳 Formas de Pagamento
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-elegant transition-smooth">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <method.icon className="w-8 h-8 text-secondary" />
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                <h3 className="text-xl font-bold text-foreground">{method.title}</h3>
              </div>
              
              <p className="text-lg font-semibold text-secondary mb-4">{method.subtitle}</p>
              
              <div className="flex items-start space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-sm">{method.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};