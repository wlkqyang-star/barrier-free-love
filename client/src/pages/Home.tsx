import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FlourishEmbed } from "@/components/FlourishEmbed";
import { CHARACTERS } from "@/lib/constants";
import { DIALOGUE_DATA } from "@/lib/dialogueData";
import { DialogueNode, Option } from "@/lib/types";
import { DATA_VISUALIZATIONS } from "@/lib/visualizations";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// 封面
const CoverSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden snap-start bg-[#0B1120]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 tracking-tight">
            "无碍" 才能爱
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-slate-400 font-light mb-16 tracking-widest">
            一项关于残疾人婚恋困境的数据调查
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="space-y-8"
        >
          <div className="prose prose-invert mx-auto text-lg md:text-xl leading-loose text-slate-300 max-w-3xl [&_p]:text-left [&_p]:indent-[2em]">
            <p>
              有这样一个庞大而沉默的群体。他们的人数接近<span className="text-amber-500 font-bold text-2xl mx-1">九千万</span>，占总人口的百分之六到七。
            </p>
            <p>
              当公众的目光投向他们时，焦点往往落在“生存”、“保障”、“福利”这些沉甸甸的词汇上。他们的情感世界，尤其是那份对爱情与家庭的普遍渴望，却长期被置于聚光灯之外，成为一片被“隐形”的角落。
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm tracking-widest">下滑阅读</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 引言：被“隐形”的婚恋需求
const IntroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden snap-start bg-[#112030]">
      <div className="container mx-auto px-4 z-10 text-center max-w-4xl py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-12 text-white">
            引言：被“隐形”的婚恋需求
          </h1>
        </motion.div>

        {/* Visualization: Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-12"
        >
          <FlourishEmbed 
            title="残疾人（含残疾人证件）分地区统计图"
            src="https://public.flourish.studio/visualisation/26731074/embed"
            aspectRatioPadding="75%"
            sourceNote="中国残疾人联合会官网，2023年《全国残疾人人口基础库数据》"
            crawlDate="2025年11月"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-8 text-lg md:text-xl leading-loose text-gray-300 text-left [&>p]:indent-[2em]"
        >
          <p>
            在他们这群人里，最多的是肢体残疾，轮椅、拐杖是他们的依靠；抑或是丢了眼睛、耳朵，看不见光明、听不见温暖；抑或是长期被贴上“疯子”“危险”“不可控”的精神残疾。
          </p>
        </motion.div>

        {/* Visualization: Trends */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-12"
        >
          <FlourishEmbed 
            title="2018-2024年各类残疾人数量变化趋势"
            src="https://public.flourish.studio/visualisation/26773584/embed"
            aspectRatioPadding="56.25%"
            sourceNote="国家统计局、中国残疾人联合会《全国残疾人人口基础库数据》"
            crawlDate="2025年11月"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="space-y-8 text-lg md:text-xl leading-loose text-gray-300 mb-20 text-left [&>p]:indent-[2em]"
        >
          <p>
            当公众的目光投向他们时，焦点往往落在“生存”、“保障”、“福利”这些沉甸甸的词汇上。他们的情感世界，尤其是那份对爱情与家庭的普遍渴望，却长期被置于聚光灯之外，成为一片被“隐形”的角落。
          </p>
          <p>
            这份需求并非不存在，它只是缺少一个被看见、被听见的机会。当我们将那些散落各处、看似冰冷的数据拼接在一起时，一个被长久忽略的事实浮出水面：在生存的刚需之上，爱与被爱的渴望，同样是他们生命中不可或缺的篇章。
          </p>
          <p>
            拨开数据的迷雾，让我们一同走近这九千万分之一的真心，倾听他们关于婚恋的“无声”呐喊。
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">下滑阅读</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 第一章 纯爱
const Chapter1Section = () => {
  return (
    <section className="min-h-screen py-20 relative snap-start bg-[#112030]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-blue-400 tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4">
            第一章
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">纯爱</h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <p className="text-xl leading-relaxed">
            在大众的想象中，残疾人的爱情故事常常被赋予一层“纯爱”的滤镜。这样的爱，是体谅、信任、承诺......多元且具体。
          </p>
        </div>

        {/* Chart 1: Love Needs (Sankey) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <FlourishEmbed 
            title="残疾人在社媒平台上“爱的需求”"
            src="https://public.flourish.studio/visualisation/26834611/embed"
            aspectRatioPadding="62%"
            sourceNote="以“残疾婚恋”“残疾恋爱”“残疾征婚”为关键词爬取抖音、小红书、微博、快手的2015年至2025年相关评论，经数据清洗后，共得到“爱的需求”的有效数据2272条。"
            crawlDate="2025年11月17日"
          />
        </motion.div>

        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <blockquote className="px-6 py-2 my-8 italic text-xl md:text-2xl text-white font-serif bg-slate-800/20 rounded-lg">
            “爱可抵万难，山海皆可平”。
          </blockquote>
          <p>
            但是，这样的山、这样的海，并不是一个小数目，而是从残疾发生的那一刻，就从心里生下根来。
          </p>
        </div>

        {/* Chart 2: Difficulties (Bubble) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <FlourishEmbed 
            title="残疾人在社媒平台上困难相关发言"
            src="https://public.flourish.studio/visualisation/26834595/embed"
            fixedHeight="600px" 
            sourceNote="以“残疾婚恋”“残疾恋爱”“残疾征婚”为关键词爬取抖音、小红书、微博、快手的2015年至2025年相关评论，经数据清洗后，共得到“爱的需求”的有效数据3822条。"
            crawlDate="2025年11月17日"
          />
        </motion.div>

        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <p>
            重峦叠嶂的困难，意味着他们不得不面对冰冷的现实。
          </p>
        </div>
        
        {/* Chart 3: Demographics (Treemap) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <FlourishEmbed 
            title="需求"
            src="https://plotdb.io/v/chart/38204"
            fixedHeight="600px"
            sourceNote="爬取“站长之家”TOP 5的残疾人征婚平台中截止2025年11月的相关数据，经清洗，搜集9903条有效用户信息"
            crawlDate="2025年11月"
          />
        </motion.div>

        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <div className="bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-loose text-slate-200">
              他们比任何人都渴望一份纯粹的感情，但也比任何人都更明白，稳固的物质基础是维系这份感情、组建一个家庭不可或缺的基石。这种看似矛盾的择偶标准，恰恰是他们内心世界最真实的写照：
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-accent font-serif mt-8 text-center italic">
              一半是火焰，一半是海水；<br />
              一半是对美好爱情的憧憬，一半是对残酷现实的敬畏。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 第二章 转向
const Chapter2Section = () => {
  const [currentChapter, setCurrentChapter] = useState('chapter1');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDataModal, setShowDataModal] = useState<string | null>(null);

  const topicDialogues = new Set(['ageDialogue', 'educationDialogue', 'disabilityDialogue']);
  
  const currentNodes = DIALOGUE_DATA[currentChapter] || [];
  const currentNode: DialogueNode | undefined = currentNodes[currentIndex];
  
  const activeCharacterId = currentNode?.character;

  const handleNext = () => {
    if (!currentNode) return;
    if (currentIndex < currentNodes.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      if (currentChapter === 'chapter1') {
        setCurrentChapter('chapter2');
        setCurrentIndex(0);
      } else if (topicDialogues.has(currentChapter)) {
        setCurrentChapter('fertilityDialogue');
        setCurrentIndex(0);
      } else if (currentChapter === 'fertilityDialogue') {
        requestAnimationFrame(() => {
          document.getElementById('home-chapter3')?.scrollIntoView({ behavior: 'smooth' });
        });
      } else if (currentChapter !== 'chapter2') {
        setCurrentChapter('chapter2');
        setCurrentIndex(2);
      }
    }
  };

  const handleChoice = (option: Option) => {
    if (option.data) {
      setShowDataModal(option.data);
    } else if (option.dialogue) {
      setCurrentChapter(option.dialogue);
      setCurrentIndex(0);
    } else {
      handleNext();
    }
  };

  const handleReturnToTopics = () => {
    setShowDataModal(null);
    setCurrentChapter('chapter2');
    setCurrentIndex(2);
  };

  const handleContinueFromDataModal = () => {
    setShowDataModal(null);

    if (currentNode?.type === 'data' && currentIndex < currentNodes.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    handleNext();
  };

  // Auto-show data modal if current node is data type
  if (currentNode?.type === 'data' && currentNode.dataType && !showDataModal) {
    setShowDataModal(currentNode.dataType);
  }
  
  const dataVisualization = showDataModal ? DATA_VISUALIZATIONS[showDataModal] : undefined;
  const dataTitle = currentNode?.title || dataVisualization?.description || '数据详情';
  const embed = dataVisualization?.embed;

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col snap-start bg-[#112030]">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-80" />
      
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10 text-center">
        <h2 className="text-blue-400 tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4">
          第二章
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">转向</h1>
      </div>

      {/* Characters Layer */}
      <div className="flex-grow relative z-10 flex items-end justify-between gap-10 px-[10%] pb-32 md:pb-40">
        {CHARACTERS.map((char) => (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: activeCharacterId === char.id ? 1 : 0.4,
              scale: activeCharacterId === char.id ? 1.05 : 0.95,
              filter: activeCharacterId === char.id ? 'none' : 'grayscale(50%) brightness(50%)'
            }}
            transition={{ duration: 0.5 }}
            className="relative w-[35%] max-w-[420px] h-[60vh] flex items-end justify-center"
          >
            <img 
              src={char.standingImg} 
              alt={char.name}
              className="w-full h-full object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Dialogue Layer */}
      <div className="absolute bottom-0 left-0 w-full z-20 p-4 md:p-8 pb-12 bg-gradient-to-t from-black/90 via-black/70 to-transparent min-h-[30vh] flex items-center justify-center">
        <div className="container mx-auto max-w-4xl w-full">
          <AnimatePresence mode="wait">
            {currentNode?.type === 'text' && (
              <motion.div
                key={`text-${currentChapter}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-6 md:p-8 shadow-2xl cursor-pointer w-full"
                onClick={handleNext}
              >
                {currentNode.speaker && currentNode.speaker !== 'narrator' && (
                  <div className="text-secondary font-bold text-lg mb-2 font-serif">
                    {currentNode.speaker}
                  </div>
                )}
                <div className="text-xl md:text-2xl leading-relaxed font-light text-left indent-[2em]">
                  {currentNode.text}
                </div>
                <div className="mt-4 text-right text-sm text-muted-foreground animate-pulse">
                  点击继续...
                </div>
              </motion.div>
            )}

            {currentNode?.type === 'choice' && (
              <motion.div
                key={`choice-${currentChapter}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-6 md:p-8 shadow-2xl w-full"
              >
                <div className="text-xl md:text-2xl font-bold mb-6 text-center font-serif text-accent">
                  {currentNode.question}
                </div>
                <div className="grid gap-4">
                  {currentNode.options?.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      size="lg"
                      className="w-full text-lg justify-start h-auto py-4 hover:bg-secondary hover:text-secondary-foreground transition-all border-muted-foreground/30 whitespace-normal text-left"
                      onClick={() => handleChoice(option)}
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Data Modal */}
      <Dialog open={!!showDataModal} onOpenChange={(open) => !open && handleReturnToTopics()}>
        <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-secondary text-center w-full">
              {dataTitle}
            </DialogTitle>
          </DialogHeader>
          
          {dataVisualization && (
            <div className="mt-4">
              {embed ? (
                <div
                  className={
                    embed.layout === 'row'
                      ? 'flex flex-wrap gap-5'
                      : embed.layout === 'column'
                        ? 'flex flex-col gap-6'
                        : undefined
                  }
                >
                  {embed.frames.map((frame) => (
                    <div
                      key={frame.src}
                      className={embed.layout === 'single' ? undefined : 'flex-1'}
                      style={embed.layout === 'single' ? undefined : { minWidth: embed.minWidth ? `${embed.minWidth}px` : undefined }}
                    >
                      {frame.title ? (
                        <h3 className="text-white text-center font-semibold mb-3">{frame.title}</h3>
                      ) : null}
                      <div
                        className="relative w-full overflow-hidden rounded-xl bg-black/20 mb-4 border border-border/30"
                        style={
                          frame.aspectRatioPadding
                            ? { paddingTop: frame.aspectRatioPadding }
                            : { height: frame.height || '600px' }
                        }
                      >
                        <iframe
                          src={frame.src}
                          title={frame.title ? `${dataTitle} - ${frame.title}` : dataTitle}
                          className="absolute top-0 left-0 w-full h-full border-none"
                          loading="lazy"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20 mb-4 border border-border/30">
                  <img
                    src={dataVisualization.image}
                    alt={dataVisualization.description}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <p className="text-sm text-muted-foreground text-center">
                数据来源：{dataVisualization.source}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-left indent-[2em]">
                {dataVisualization.description}
              </p>
            </div>
          )}
          
          <div className="mt-6 flex justify-between gap-3">
            <Button variant="outline" onClick={handleReturnToTopics}>返回</Button>
            <Button onClick={handleContinueFromDataModal}>继续</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

// 第三章 成本
const Chapter3Section = () => {
  return (
    <section id="home-chapter3" className="min-h-screen py-20 relative snap-start bg-[#112030]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-blue-400 tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4">
            第三章
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">成本</h1>
        </motion.div>

        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <p className="text-xl leading-relaxed">
            爱情是风花雪月，但婚姻却是柴米油盐。
          </p>
          <p className="text-xl leading-relaxed">
            当我们将目光从情感的维度转向经济的现实，会发现压在残疾人婚恋天平另一端的，是沉重的经济成本。
          </p>
        </div>

        {/* Visualization: Income Comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <FlourishEmbed 
            title="2023年全国残疾人家庭与全国居民家庭收入分项比较"
            src="https://public.flourish.studio/visualisation/26809042/embed"
            fixedHeight="600px"
            sourceNote="《2024年全国残疾人家庭收入状况调查报告》"
            crawlDate="2025年11月"
          />
        </motion.div>

        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <p>
            数据显示，残疾人家庭的收入结构与全国平均水平存在显著差异。能够真正体现个人价值和社会融入度的“工资性收入”，占比仅为36.6%，其绝对金额更是只有全国居民平均水平的39%。
          </p>
          <p>
            而他们高度依赖“转移性收入”，如政府资助，这部分收入占比高达51.5%，是全国居民平均水平的近三倍。
          </p>
        </div>

        {/* Visualization: Heatmap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <FlourishEmbed 
            title="政策焦点与发布主体的关联分析"
            src="https://public.flourish.studio/visualisation/26834608/embed"
            aspectRatioPadding="80%"
            sourceNote="以“残疾”为关键词爬取中华人民共和国中央人民政府网站2015年至2024年相关数据，经数据清洗后，共得到有效数据18条。"
            crawlDate="2025年11月29日"
          />
        </motion.div>

        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <p>
            与收入形成鲜明对比的，是他们远低于全国平均水平的消费支出。2023年，全国残疾人家庭人均年消费支出仅为全国居民的52.4%。尤其是在城镇，这一差距更为悬殊。这不是节俭，而是面对生活压力时，一种被动的、无奈的选择。
          </p>
        </div>

        {/* Visualization: Expenditure Comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <FlourishEmbed 
            title="2023年全国残疾人家庭与全国居民消费支出分项比较"
            src="https://public.flourish.studio/visualisation/26815550/embed"
            aspectRatioPadding="75%"
            sourceNote="《2024年全国残疾人家庭收入状况调查报告》"
            crawlDate="2025年11月"
          />
        </motion.div>
        
        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <p>
            从医疗康复的额外开销，到日常生活的诸多不便，再到为了融入社会而付出的隐性成本，每一项都在不断挤压着他们本就有限的生存空间，也让婚恋与家庭的梦想变得更加遥远和奢侈。
          </p>
        </div>
      </div>
    </section>
  );
};

// 尾声
const EpilogueSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        const p = video.play();
        if (p) p.catch(() => undefined);
      },
      { threshold: 0.6 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden snap-start bg-[#FFFFFE] text-slate-900">
      <div className="flex-1 w-full flex items-center justify-center py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <Heart className="w-24 h-24 text-red-500 mx-auto mb-8 animate-pulse" fill="currentColor" />
            <h2 className="text-slate-500 tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4">
              尾声
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-slate-900">
              真正的“无碍”
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-lg mx-auto mb-16 text-slate-700"
          >
            <p>
              将残疾人的婚恋问题，仅仅视为他们个人的“私事”，是一种短视。
            </p>
            <p>
              当一个近九千万人的庞大群体在追求人类最基本的情感需求时步履维艰，这便不再是个体的问题，而是整个社会需要共同面对的课题。
            </p>
            <div className="my-10">
              <video
                ref={videoRef}
                className="w-full rounded-xl border border-slate-200 shadow-sm"
                controls
                muted
                playsInline
                autoPlay
                preload="metadata"
              >
                <source src="/弹幕.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="prose prose-lg mx-auto mb-16 text-slate-700">
              真正的“无碍”<br/>
              不仅仅是物理环境的畅通无阻<br/>
              更是制度上的保障<br/>
              更是经济上的扶持<br/>
              更是文化上的包容和情感上的理解<br/>
              让爱，不再有“障碍”<br/>
              这不仅是对他们的承诺<br/>
              更是对我们共同的、更文明、更温暖的未来的期许
            </p>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-auto w-full py-8 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p>© 2025 “无碍”才能爱项目组. All rights reserved.</p>
          <p className="mt-2">本项目仅供学术研究和公益传播使用。</p>
        </div>
      </footer>
    </section>
  );
};

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50"
        style={{ scaleX }}
      />

      <main ref={scrollRef} className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <CoverSection />
        <IntroSection />
        <Chapter1Section />
        <Chapter2Section />
        <Chapter3Section />
        <EpilogueSection />
      </main>
    </div>
  );
}
