import { MessageCircle } from "lucide-react";

const glowKeyframes = `
  @keyframes glow {
    from {
      box-shadow: 0 0 20px rgba(34, 197, 94, 0.7), 0 0 40px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3);
    }
    to {
      box-shadow: 0 0 30px rgba(34, 197, 94, 0.9), 0 0 60px rgba(34, 197, 94, 0.7), 0 0 90px rgba(34, 197, 94, 0.5);
    }
  }
`;

export const WhatsAppFloat = () => {
  return (
    <>
      <style>{glowKeyframes}</style>
    <a
      href="https://n8nwebhook.edilsonmorais.com.br/webhook/ea61cd7c-02a9-4af4-a54a-74b2a0d734d6/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      style={{
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.7), 0 0 40px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3)',
        animation: 'pulse 2s infinite, glow 2s ease-in-out infinite alternate'
      }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
    </>
  );
};