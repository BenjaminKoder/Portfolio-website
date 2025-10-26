import { useState, useEffect } from "react";
import { Bot, X } from "lucide-react";

const AIAssistantToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Hide toast after 8 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-card border-2 border-primary/30 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground mb-1">
              Hei! 👋
            </p>
            <p className="text-sm text-muted-foreground">
              Visste du at jeg har en AI-assistent? Klikk på chat-ikonet nede til høyre!
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Lukk"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantToast;
