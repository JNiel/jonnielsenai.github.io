import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "Hi! I'm Jon's AI assistant. Ask me anything about his experience in Data & AI leadership, his hands-on approach, or his mentorship philosophy." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are a professional AI assistant representing Jon Nielsen, a Head of Data & Analytics candidate. 
            Base your answers on the following CV information:
            - Name: Jon Nielsen
            - Location: Based in Auckland, available globally.
            - Experience: Leapwork (Head of Data), Olio (Head of BI), Elder (Head of BI & DS), Klarna (Data Scientist).
            - Expertise: Microsoft Fabric, GCP, Python, R, SQL, Predictive Modeling, AI Strategy.
            - Philosophy: Combines high-level strategy with a hands-on technical approach. Passionate about mentoring and educating teams.
            
            User Question: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "You are a helpful, professional, and concise career assistant for Jon Nielsen. Highlight his unique blend of leadership, mentorship, and hands-on technical expertise.",
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having some trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-stone-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-emerald-600 transition-all z-50"
      >
        <MessageSquare size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 w-[400px] max-w-[calc(100vw-4rem)] h-[600px] bg-white rounded-[32px] shadow-2xl border border-stone-100 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-8 bg-stone-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center">
                  <Bot size={28} />
                </div>
                <div>
                  <div className="font-bold serif">Jon's Assistant</div>
                  <div className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    AI Active
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#FDFCFB]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      msg.role === 'user' ? 'bg-stone-100 text-stone-500' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-5 rounded-2xl text-sm leading-relaxed serif ${
                      msg.role === 'user' ? 'bg-stone-900 text-white rounded-tr-none' : 'bg-white border border-stone-100 text-stone-700 rounded-tl-none shadow-sm italic'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="p-5 rounded-2xl bg-white border border-stone-100 text-stone-300 rounded-tl-none shadow-sm">
                      <Loader2 size={16} className="animate-spin" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-stone-50 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Jon's AI expertise..."
                  className="w-full pl-5 pr-14 py-4 bg-stone-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 transition-all serif"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-stone-900 text-white rounded-xl flex items-center justify-center hover:bg-emerald-600 disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
