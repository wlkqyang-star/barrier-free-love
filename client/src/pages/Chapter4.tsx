import { ChapterNav } from "@/components/ChapterNav";
import { DATA_VISUALIZATIONS } from "@/lib/visualizations";
import { motion } from "framer-motion";

export default function Chapter4() {
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
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-accent">第四章 成本</h1>
            <p className="text-lg text-muted-foreground font-light text-left indent-[2em]">
              爱情或许是无价的，但婚姻和家庭生活却有着实实在在的成本。
              对于残疾人家庭来说，这个成本往往更加沉重。
            </p>
          </motion.div>

          {/* Visualization: Income Comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 bg-card/50 p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center text-secondary">残疾人家庭与全国居民家庭收入对比</h3>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20 mb-4">
              <img 
                src={DATA_VISUALIZATIONS['income-comparison'].image} 
                alt="Income Comparison Chart" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              数据来源：{DATA_VISUALIZATIONS['income-comparison'].source}
            </p>
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20">
            <p>
              数据显示，残疾人家庭的人均可支配收入显著低于全国平均水平。
              这意味着他们在面对婚姻、育儿等重大人生决策时，需要承担更大的经济压力。
            </p>
          </div>

          {/* Visualization: Expense Comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 bg-card/50 p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center text-secondary">残疾人家庭与全国居民消费支出对比</h3>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20 mb-4">
              <img 
                src={DATA_VISUALIZATIONS['expense-comparison'].image} 
                alt="Expense Comparison Chart" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              数据来源：{DATA_VISUALIZATIONS['expense-comparison'].source}
            </p>
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20 [&_p]:text-left [&_p]:indent-[2em]">
            <p className="leading-relaxed">
              在医疗保健、康复护理等方面的刚性支出，进一步挤压了残疾人家庭在其他方面的消费能力。
              这种"生存成本"的高企，直接影响了他们追求"生活质量"和"情感满足"的能力。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
