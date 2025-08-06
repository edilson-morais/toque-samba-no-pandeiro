import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso já saber tocar algum instrumento?",
      answer: "Não! O desafio é feito para quem está começando do zero."
    },
    {
      question: "Preciso ter um pandeiro?",
      answer: "Ter um pandeiro é o ideal, mas não é obrigatório. Você pode acompanhar os primeiros exercícios usando um objeto simples, como um livro de capa dura. O mais importante é sentir o ritmo e praticar os movimentos com o que tiver em mãos."
    },
    {
      question: "As aulas são ao vivo?",
      answer: "As aulas são gravadas, com excelente qualidade de som e imagem, e ficam disponíveis para você assistir quando quiser."
    },
    {
      question: "Por quanto tempo terei acesso ao conteúdo?",
      answer: "Você terá acesso ao curso por 30 dias, podendo rever as aulas quantas vezes quiser dentro desse período."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Com apenas 15 a 20 minutos por dia, você já vai perceber um progresso real."
    },
    {
      question: "E se eu não conseguir acompanhar?",
      answer: "Você pode seguir no seu ritmo. O curso é leve, prático e totalmente adaptável à sua rotina."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, é só pedir reembolso."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            🛠️ FAQ – Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg border px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};