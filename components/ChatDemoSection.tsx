"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatDemoSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hola, soy Can.IA. Hazme una pregunta sobre cómo podemos automatizar tu negocio.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const chatUrl = useMemo(() => {
    return process.env.NEXT_PUBLIC_N8N_CHAT_URL || "";
  }, []);

  const sessionIdRef = useRef<string>("");
  useEffect(() => {
    if (!sessionIdRef.current) {
      try {
        // Prefer Web Crypto if available
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const maybeCrypto: any = (globalThis as unknown as { crypto?: Crypto }).crypto;
        sessionIdRef.current = maybeCrypto?.randomUUID
          ? maybeCrypto.randomUUID()
          : `session_${Math.random().toString(36).slice(2)}`;
      } catch {
        sessionIdRef.current = `session_${Math.random().toString(36).slice(2)}`;
      }
    }
  }, []);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages.length]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isSending) return;
    setInput("");

    const nextMessages = [...messages, { role: "user", content: trimmed } as ChatMessage];
    setMessages(nextMessages);
    setIsSending(true);

    let assistantText = "";
    try {
      if (!chatUrl) throw new Error("Falta configurar NEXT_PUBLIC_N8N_CHAT_URL");

      const res = await fetch(chatUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          chatInput: trimmed,
        }),
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }

      const raw = await res.text();
      try {
        const data = JSON.parse(raw);
        assistantText =
          data.output ||
          data.answer ||
          data.response ||
          data.chatInput ||
          data.text ||
          data.data ||
          String(raw);
      } catch {
        assistantText = raw;
      }
    } catch {
      assistantText =
        "Hubo un problema contactando el chat de demostración. Intenta nuevamente en un momento.";
    } finally {
      setIsSending(false);
    }

    setMessages((prev) => [...prev, { role: "assistant", content: assistantText }]);
  }

  return (
    <section id="chat-demo" aria-labelledby="chat-demo-title" className="py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 id="chat-demo-title" className="text-2xl md:text-3xl font-extrabold text-foreground">
            Prueba el chat en vivo
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            Habla con nuestro asistente. Esta demo usa un flujo conectado a n8n.
          </p>
          {!chatUrl && (
            <p className="mt-3 text-xs text-amber-500">
              Configura la variable de entorno NEXT_PUBLIC_N8N_CHAT_URL para habilitar la demo.
            </p>
          )}
        </div>

        <div className="bg-card border border-border rounded-[10px] shadow-card p-4 md:p-6">
          <div
            className="h-[420px] overflow-y-auto rounded-[10px] border border-border p-4 bg-background/60"
            aria-live="polite"
            ref={messagesContainerRef}
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-[10px] px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="mt-4 flex items-end gap-2">
            <label htmlFor="chat-input" className="sr-only">
              Escribe tu mensaje
            </label>
            <textarea
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 min-h-[44px] max-h-[160px] resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              disabled={isSending || !chatUrl}
              className="inline-flex items-center justify-center h-11 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 transition-opacity duration-200"
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


