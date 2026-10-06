import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hei! Jeg kan svare på spørsmål om Benjamin Engs utdanning, erfaring, tekniske ferdigheter, prosjekter og karrieremål. Hva lurer du på?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Hele samtalen sendes, så assistenten husker hva som er sagt. Serveren kutter den ned.
      const history = [...messages, { role: "user" as const, content: userMessage }];
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      // Serveren svarer med JSON, men ved krasj kan svaret være ren tekst
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.reply) throw new Error(data.error ?? "Failed to get response");

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      // Serveren sender en forklarende feilmelding, f.eks. ved for mange spørsmål
      const reason = error instanceof Error && error.message !== "Failed to get response" ? error.message : null;
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reason ?? "Assistenten svarer ikke akkurat nå. Send gjerne en e-post i stedet.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Lukk AI-assistenten" : "Åpne AI-assistenten"}
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full border-2 border-foreground bg-blue text-white shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:bg-periwinkle hover:text-foreground"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50 flex h-[480px] max-h-[calc(100vh-7rem)] w-96 max-w-[calc(100vw-2.5rem)] flex-col rounded-xl border-2 border-foreground bg-card shadow-[5px_5px_0_0_hsl(var(--foreground))] overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="border-b-2 border-foreground bg-periwinkle p-4">
            <h3 className="font-display text-lg font-bold">Spør om Benjamin</h3>
            <p className="mt-1 font-mono text-xs">AI-assistent</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg border-[1.5px] border-foreground px-3 py-2 ${
                    message.role === "user"
                      ? "bg-periwinkle"
                      : "bg-card"
                  }`}
                >
                  <p className="whitespace-pre-line text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-lg border-[1.5px] border-foreground px-3 py-2">
                  <p className="font-mono text-sm">skriver…</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t-2 border-foreground p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Skriv ditt spørsmål..."
                disabled={isLoading}
                className="flex-1 rounded-lg border-2 border-foreground"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="rounded-lg border-2 border-foreground bg-blue text-white hover:bg-periwinkle hover:text-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
