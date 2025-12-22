import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Intro() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            "无碍"才能爱
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 leading-relaxed">
            一项关于残疾人婚恋困境的数据调查
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="space-y-8"
        >
          <div className="prose prose-invert mx-auto text-lg text-gray-300">
            <p>
              有这样一个庞大而沉默的群体。他们的人数接近<span className="text-secondary font-bold text-2xl mx-1">九千万</span>，占总人口的百分之六到七。
            </p>
            <p>
              当公众的目光投向他们时，焦点往往落在"生存"、"保障"、"福利"这些沉甸甸的词汇上。
              他们的情感世界，尤其是那份对爱情与家庭的普遍渴望，却长期被置于聚光灯之外，成为一片被"隐形"的角落。
            </p>
          </div>

          <div className="pt-12">
            <Link href="/chapter1">
              <Button size="lg" className="group text-lg px-8 py-6 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                开始阅读
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles Effect (Simplified CSS implementation) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
