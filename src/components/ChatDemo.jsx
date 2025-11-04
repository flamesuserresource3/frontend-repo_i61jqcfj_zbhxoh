import { useEffect, useRef, useState } from "react";
import { Send, Bot, User } from "lucide-react";

function Message({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-600 text-white grid place-items-center flex-shrink-0">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow ${
          isUser
            ? "bg-purple-600 text-white rounded-br-sm"
            : "bg-white/80 dark:bg-neutral-900/60 backdrop-blur border border-black/10 dark:border-white/10 rounded-bl-sm"
        }`}
      >
        {content}
      </div>
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-black/10 dark:bg-white/10 grid place-items-center flex-shrink-0">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}

export default function ChatDemo() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi, I’m Asep! Ask me anything you’re learning today." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const onSend = () => {
    const text = input.trim();
    if (!text || loading) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");

    setLoading(true);
    // Simulated assistant reply to keep demo fully client-side
    setTimeout(() => {
      const reply =
        "Here’s a quick explanation: break concepts into steps, test with examples, and summarize in your own words. Want me to create a slide outline for this?";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 900);
  };

  return (
    <section id="chat" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold">Try a quick chat</h3>
          <p className="text-black/70 dark:text-white/70 mt-1">
            This is a lightweight demo. The full app connects to powerful models and tools.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-b from-white/70 to-white/40 dark:from-neutral-900/60 dark:to-neutral-900/40 backdrop-blur p-4">
          <div ref={listRef} className="h-72 overflow-y-auto space-y-4 pr-1">
            {messages.map((m, i) => (
              <Message key={i} role={m.role} content={m.content} />
            ))}
            {loading && (
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-600 text-white grid place-items-center flex-shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-white/80 dark:bg-neutral-900/60 border border-black/10 dark:border-white/10 rounded-2xl rounded-bl-sm px-4 py-2 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 bg-black/40 dark:bg-white/50 rounded-full animate-bounce [animation-delay:-0.2s]" />
                    <span className="w-1.5 h-1.5 bg-black/40 dark:bg-white/50 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-black/40 dark:bg-white/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend()}
              placeholder="Ask Asep anything…"
              className="flex-1 px-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 backdrop-blur outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={onSend}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 disabled:opacity-50"
              disabled={loading}
            >
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
        </div>
        <div id="pricing" className="text-center mt-8">
          <p className="text-sm text-black/70 dark:text-white/70">
            Upgrade to Premium for animated slide templates, brand kits, and export to PowerPoint.
          </p>
        </div>
      </div>
    </section>
  );
}
