import { ChapterNav } from "@/components/ChapterNav";
import { DATA_VISUALIZATIONS } from "@/lib/visualizations";
import { motion } from "framer-motion";

export default function Chapter3() {
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
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-accent">第三章 被"隐形"的婚恋需求</h1>
            <p className="text-xl text-muted-foreground font-light text-left indent-[2em]">
              在主流婚恋市场上，残疾人的需求往往被忽视，甚至被刻意"隐形"。
            </p>
          </motion.div>

          {/* Visualization: Needs Sankey */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 bg-card/50 p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center text-secondary">残疾人婚恋需求流向</h3>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20 mb-4">
              <img 
                src={DATA_VISUALIZATIONS['needs-sankey'].image} 
                alt="Needs Sankey Diagram" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              数据来源：{DATA_VISUALIZATIONS['needs-sankey'].source}
            </p>
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20 [&_p]:text-left [&_p]:indent-[2em]">
            <p>
              从桑基图中我们可以看到，残疾人的婚恋需求并非单一指向"结婚"，而是包含了情感交流、陪伴、甚至仅仅是被理解的渴望。
              然而，现有的婚恋服务往往只关注"匹配成功率"，而忽视了这些深层次的情感需求。
            </p>
          </div>

          {/* Visualization: Location Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 bg-card/50 p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center text-secondary">征婚需求地域分布</h3>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20 mb-4">
              <img 
                src={DATA_VISUALIZATIONS['location-map'].image} 
                alt="Location Map" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              数据来源：{DATA_VISUALIZATIONS['location-map'].source}
            </p>
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20 [&_p]:text-left [&_p]:indent-[2em]">
            <p className="leading-relaxed">
              地域分布的不均衡也加剧了这种"隐形"。在经济发达地区，残疾人的婚恋需求更容易被表达和被看见；
              而在欠发达地区，这些需求往往被生存压力所掩盖。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
