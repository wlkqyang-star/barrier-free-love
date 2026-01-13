import { ChapterNav } from "@/components/ChapterNav";
import { DATA_VISUALIZATIONS } from "@/lib/visualizations";
import { motion } from "framer-motion";

export default function Chapter1() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      <ChapterNav />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-accent">第一章 纯爱</h1>
            <p className="text-xl text-muted-foreground font-light">
              在大众的想象中，残疾人的爱情故事常常被赋予一层<span className="text-highlight">"纯爱"的滤镜</span>。
            </p>
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20 [&_p]:text-left [&_p]:indent-[2em]">
            <p>
              这样的爱，是体谅、信任、承诺......多元且具体。
              "爱可抵万难，山海皆可平"。
            </p>
            <p>
              但是，这样的山、这样的海，并不是一个小数目，而是从残疾发生的那一刻，就从心里生下根来。
            </p>
          </div>

          {/* Visualization: Love Needs Wordcloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 bg-card/50 p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center text-secondary">残疾人在社媒平台上"爱的需求"</h3>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20 mb-4">
              <img 
                src={DATA_VISUALIZATIONS['love-needs-wordcloud'].image} 
                alt="Love Needs Wordcloud" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              数据来源：{DATA_VISUALIZATIONS['love-needs-wordcloud'].source}
            </p>
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20 [&_p]:text-left [&_p]:indent-[2em]">
            <p>
              重峦叠嶂的困难，意味着他们不得不面对<span className="text-highlight">冰冷的现实</span>。
              他们比任何人都渴望一份纯粹的感情，但也比任何人都更明白，稳固的物质基础是维系这份感情、组建一个家庭不可或缺的基石。
            </p>
          </div>

          {/* Visualization: Difficulties Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 bg-card/50 p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center text-secondary">残疾人在社媒平台上困难相关发言</h3>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20 mb-4">
              <img 
                src={DATA_VISUALIZATIONS['difficulties-bubble'].image} 
                alt="Difficulties Bubble Chart" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              数据来源：{DATA_VISUALIZATIONS['difficulties-bubble'].source}
            </p>
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20 [&_p]:text-left [&_p]:indent-[2em]">
            <p>
              这种看似矛盾的择偶标准，恰恰是他们内心世界最真实的写照：一半是火焰,一半是海水；
              一半是对美好爱情的憧憬，一半是对残酷现实的敬畏。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
