import { ChapterNav } from "@/components/ChapterNav";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "wouter";

export default function Epilogue() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
      <ChapterNav />
      
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background" />
        
        <div className="container mx-auto px-4 max-w-3xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <Heart className="w-24 h-24 text-accent mx-auto mb-8 animate-pulse" fill="currentColor" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              真正的"无碍"
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-invert prose-lg mx-auto mb-16 [&_p]:text-left [&_p]:indent-[2em]"
          >
            <p className="leading-relaxed">
              "无碍"不仅仅是指物理环境的无障碍，更是指心灵的无障碍、社会的无障碍。
            </p>
            <p className="leading-relaxed">
              当我们在谈论残疾人的婚恋时，我们谈论的不仅仅是两个人的结合，更是一个社会如何接纳差异、如何尊重每一个生命追求幸福的权利。
            </p>
            <p className="leading-relaxed">
              让爱，不再有"障碍"。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
                重新开始
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      
      <footer className="py-8 border-t border-border/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 "无碍"才能爱项目组. All rights reserved.</p>
          <p className="mt-2">本项目仅供学术研究和公益传播使用。</p>
        </div>
      </footer>
    </div>
  );
}
