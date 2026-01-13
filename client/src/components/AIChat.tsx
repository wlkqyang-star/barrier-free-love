import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const API_KEY = "sk-BbGdInGTyIZPJEGuL4Cxmnliz9kLyCKOKkjNTnKIUYsyxjRX";
const BASE_URL = "https://apidekey.xyz";
const MODEL_NAME = "gemini-3-pro-preview";

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: `你现在扮演晓雨。
人设：晓雨，一名患有小儿麻痹症的残疾女性，性格温柔但内心坚韧，渴望爱情但对现实有清醒的认知，有些自卑但又渴望被理解。
用户扮演李明，一名同样有视力障碍的男性。
场景：这是在一个残疾人婚恋APP上的对话。你们刚刚聊了一些关于“转向”的话题，关于是否应该在普通人的世界里寻找爱情，还是在残疾人的圈子里抱团取暖。
请保持对话自然、真实，不要太书面化，要符合晓雨的人设。每次回复简短一些，像微信聊天一样。`
    },
    {
      role: 'assistant',
      content: '其实有时候我也在想，我们这样“转向”彼此，是不是也是一种逃避呢？'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          temperature: 0.7,
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]?.message) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.choices[0].message.content 
        }]);
      } else {
        console.error('API Error:', data);
      }
    } catch (error) {
      console.error('Network Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-slate-900/90 rounded-xl border border-slate-700 overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Background Image Removed as requested (was potentially inherited or not present, ensuring clean dark bg) */}
      
      {/* Header */}
      <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/50">
          <img src="/images/xiaoyu.png" className="w-full h-full object-cover rounded-full" alt="晓雨" onError={(e) => e.currentTarget.src = "https://github.com/shadcn.png"} />
        </div>
        <div>
          <h3 className="text-white font-bold">晓雨</h3>
          <p className="text-xs text-slate-400">在线</p>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.filter(m => m.role !== 'system').map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-pink-600'}`}>
                 {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
              </div>
              <div className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-slate-700 text-slate-100 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
               <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-white" />
               </div>
               <div className="bg-slate-700 px-4 py-2 rounded-2xl rounded-tl-none">
                 <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
               </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <form 
          onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
          className="flex gap-2"
        >
          <Input 
            value={input} 
            onChange={e => setInput(e.target.value)}
            placeholder="回复晓雨..." 
            className="bg-slate-900 border-slate-600 text-white focus-visible:ring-blue-500"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}