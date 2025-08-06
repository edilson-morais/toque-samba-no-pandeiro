import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-card py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A Comunidade Pandeirando com Carlos Café não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso.
          </div>
          
          <div className="text-sm text-muted-foreground">
            Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com os nossos Termos de Uso e Política de Privacidade.
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-foreground font-semibold">Pandeirando com Carlos Café</span>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Todos os direitos reservados – Edilson Morais 2025
          </div>
          
          <div className="text-sm">
            <span className="text-muted-foreground">Contato: </span>
            <a href="mailto:edilsomdil@gmail.com" className="text-primary hover:text-primary-glow transition-colors">
              edilsomdil@gmail.com
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Desenvolvido por Edilson Morais
          </div>
        </div>
      </div>
    </footer>
  );
};