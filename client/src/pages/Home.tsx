import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FlourishEmbed } from "@/components/FlourishEmbed";
import { CHARACTERS } from "@/lib/constants";
import { DIALOGUE_DATA } from "@/lib/dialogueData";
import { DialogueNode, Option } from "@/lib/types";
import { DATA_VISUALIZATIONS } from "@/lib/visualizations";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Heart, Stethoscope, Armchair, Coins, Home as HomeIcon, HeartCrack } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SideNav } from "@/components/SideNav";

import { AIChat } from "@/components/AIChat";

const highlightClass = "bg-[#F08080] text-white px-2 py-1 rounded-sm mx-1 shadow-sm font-normal box-decoration-clone leading-[4.5rem]";

// 封面
  const CoverSection = () => {
    const characters = [
      { src: "/images/cover/无2.png", alt: "无", delay: 0.5, yOffset: -70 },
      { src: "/images/cover/碍.png", alt: "碍", delay: 1.0, yOffset: -50 },
      { src: "/images/cover/才.png", alt: "才", delay: 1.5, yOffset: -10 },
      { src: "/images/cover/能.png", alt: "能", delay: 2.0, yOffset: -120 },
      { src: "/images/cover/爱.png", alt: "爱", delay: 2.5, yOffset: -160 },
    ];

    return (
      <section 
        id="cover" 
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden snap-start bg-[#1a2c42]"
        style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Background Image - Full screen cover */}
        <div className="absolute inset-0 w-full h-full">
          <motion.img 
            src="/images/cover/封面.png" 
            alt="Background" 
            className="w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        
        {/* Text Images - Centered and staggered */}
        <div className="absolute inset-0 flex items-center justify-center z-10 -space-x-0 md:-space-x-20 pointer-events-none">
          {characters.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: char.yOffset }}
              transition={{ 
                duration: 0.8, 
                delay: char.delay,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              <img
                src={char.src}
                alt={char.alt}
                className="w-48 md:w-20 lg:w-66 object-contain drop-shadow-2xl"
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm tracking-widest drop-shadow-md">下滑阅读</span>
            <ArrowDown className="w-5 h-5 drop-shadow-md" />
          </div>
        </motion.div>
      </section>
    );
  };

// 引言：被“隐形”的婚恋需求
const IntroSection = () => {
  const introSteps = [
    {
      id: "survival", 
      title: "生存",
      image: "/images/intro/survival.png",
      text: "当公众的目光投向他们时，\n焦点往往落在“生存”、“保障”、“福利”\n这些沉甸甸的词汇上。",
      beamColor: "from-amber-100/20"
    },
    {
      id: "guarantee",
      title: "保障", 
      image: "/images/intro/guarantee.png",
      text: "当公众的目光投向他们时，\n焦点往往落在“生存”、“保障”、“福利”\n这些沉甸甸的词汇上。",
      beamColor: "from-blue-100/20"
    },
    {
      id: "welfare",
      title: "福利",
      image: "/images/intro/welfare.png", 
      text: "当公众的目光投向他们时，\n焦点往往落在“生存”、“保障”、“福利”\n这些沉甸甸的词汇上。",
      beamColor: "from-emerald-100/20"
    }
  ];

  return (
    <>
      {/* 1. Cover Slide (Exact Match Image 1) */}
      <div id="intro" className="h-screen relative flex items-center justify-center snap-start overflow-hidden bg-[#112030]" style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Full Screen Intro Image */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full"
            >
               <img 
                 src="/images/intro/full_intro.png" 
                 alt="引言" 
                 className="w-full h-full object-cover object-center"
               />
            </motion.div>
        </div>
      </div>

      {/* 1.5 Data Visualization Section (Moved to Top) */}
      <div className="min-h-screen relative flex flex-col items-center justify-center snap-start overflow-hidden bg-[#112030] py-20" style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        {/* Intro Text 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 max-w-6xl text-center mb-12"
        >
           <p className="text-lg text-slate-300 leading-loose font-serif whitespace-nowrap">
             有这样一个庞大而沉默的群体。他们的人数接近<span className="text-highlight">九千万</span>，占总人口的百分之六到七。
           </p>
        </motion.div>

        {/* Visualization: Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-8 container mx-auto px-4 max-w-5xl"
        >
          <FlourishEmbed 
            title="《残疾人（含残疾人证件）分地区统计图》"
            src="https://public.flourish.studio/visualisation/26731074/embed"
            aspectRatioPadding="75%"
            sourceNote="中国残疾人联合会官网，2023年《全国残疾人人口基础库数据》"
            crawlDate="2025年11月"
          />
        </motion.div>

        {/* Intro Text 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 max-w-4xl text-center my-12"
        >
           <p className="text-lg text-slate-300 leading-loose font-serif text-left indent-[2em]">
             在他们这群人里，最多的是肢体残疾，轮椅、拐杖是他们的依靠；抑或是丢了眼睛、耳朵，看不见光明、听不见温暖；抑或是长期被贴上“疯子”“危险”“不可控”的精神残疾。
           </p>
        </motion.div>
        
        {/* Visualization: Trends */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-8 container mx-auto px-4 max-w-5xl"
        >
          <FlourishEmbed 
            title="《2018-2024年各类残疾人数量变化趋势》"
            src="https://public.flourish.studio/visualisation/26773584/embed"
            aspectRatioPadding="56.25%"
            sourceNote="国家统计局、中国残疾人联合会《全国残疾人人口基础库数据》"
            crawlDate="2025年11月"
          />
        </motion.div>
      </div>

      {/* 2. Spotlight Slides (Sticky Layout) */}
      <div className="relative h-[300vh]">
         {/* Sticky Background & Left Content */}
         <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#112030]" style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Beam Layer */}
            <div className="absolute inset-0 pointer-events-none z-0 flex justify-center">
               <motion.img 
                  src="/images/intro/beam.png"
                  initial={{ opacity: 0, scaleY: 0, originY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute top-0 w-full md:w-[80%] h-[150%] object-cover opacity-80 mix-blend-screen"
                  style={{ transformOrigin: 'top center' }}
               />
            </div>

            {/* Description Text (Static) */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="absolute left-[5%] md:left-[10%] top-[25%] max-w-[200px] text-slate-300 text-sm md:text-base leading-loose z-20 font-serif tracking-wide"
            >
               {introSteps[0].text.split('\n').map((line, i) => (
                 <p key={i} className="mb-4">{line}</p>
               ))}
            </motion.div>
         </div>

         {/* Scrolling Right Images */}
         <div className="absolute top-0 w-full z-20">
            {introSteps.map((step) => (
               <div key={step.id} className="h-screen relative flex items-center justify-center snap-start overflow-hidden">
                   {/* Image Layer */}
                   <motion.div 
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute right-[5%] md:right-[5%] top-[50%] -translate-y-1/2 w-[60%] md:w-[65%]"
                   >
                      <img 
                         src={step.image} 
                         alt={step.title}
                         className="w-full h-auto object-contain drop-shadow-2xl"
                      />
                   </motion.div>
               </div>
            ))}
         </div>
      </div>

      {/* 2.5 Portrait Slide (New Independent Slide) */}
      <div className="h-screen relative flex items-center justify-center snap-start overflow-hidden border-t border-white/5 bg-[#112030]" style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
         <div className="absolute inset-0 w-full h-full overflow-hidden">
             
             {/* Beam Layer Removed as requested */}

             <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 z-30 p-8">
                 {/* Image */}
                 <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                 >
                     <img 
                        src="/images/intro/portrait_group.png" 
                        alt="Portrait Group"
                        className="w-[80%] h-auto object-contain drop-shadow-2xl"
                     />
                 </motion.div>

                 {/* Text */}
                 <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-full md:w-1/2 text-left text-slate-300 text-base md:text-xl leading-loose font-serif"
                 >
                    <p>他们的情感世界，</p>
                    <p>尤其是那份对爱情与家庭的普遍渴望，</p>
                    <p>却长期被置于聚光灯之外，</p>
                    <p>成为一片被“隐形”的角落</p>
                 </motion.div>
             </div>
         </div>
      </div>

      {/* 3. Summary Slide (Clouds & Text) */}
      <div className="min-h-screen relative flex items-center justify-center snap-start overflow-hidden bg-[#112030]">
         {/* Cloud Background Layer */}
         <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent blur-3xl" />
             <motion.img 
               src="/images/intro/cloud1.png" 
               initial={{ x: 0, opacity: 0.8 }}
               whileInView={{ x: -100, opacity: 0.4 }}
               transition={{ duration: 8, ease: "easeOut" }}
               className="absolute top-[10%] left-[-10%] w-[60%] mix-blend-overlay" 
             />
             <motion.img 
               src="/images/intro/cloud2.png" 
               initial={{ x: 0, opacity: 0.8 }}
               whileInView={{ x: 100, opacity: 0.4 }}
               transition={{ duration: 8, ease: "easeOut" }}
               className="absolute bottom-[10%] right-[-10%] w-[60%] mix-blend-overlay" 
             />
         </div>

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4 max-w-6xl text-center relative z-20"
         >
            <div className="space-y-12">
              <p className="text-lg text-slate-300 leading-relaxed font-serif text-left indent-[2em]">
                这份需求并非不存在，它只是缺少一个被看见、被听见的机会。当我们将那些散落各处、看似冰冷的数据拼接在一起时，一个被长久忽略的事实浮出水面：
              </p>
              
              <p className="text-lg text-white leading-relaxed drop-shadow-lg text-left indent-[2em]">
                <span className={highlightClass}>在生存的刚需之上，爱与被爱的渴望，同样是他们生命中不可或缺的篇章。</span>
              </p>

              <p className="text-lg text-slate-300 leading-relaxed font-serif text-left indent-[2em]">
                 拨开数据的迷雾，让我们一同走近这<span className="text-highlight">九千万</span>分之一的真心，倾听他们关于婚恋的“无声”呐喊。
              </p>
            </div>
         </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground z-20"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">下滑阅读</span>
              <ArrowDown className="w-6 h-6" />
            </div>
          </motion.div>
      </div>
    </>
  );
};

// 第一章 纯爱
const Chapter1Section = () => {


  return (
    <>
      {/* Chapter 1 Cover */}
      <div id="chapter1" className="h-screen relative flex items-center justify-center snap-start overflow-hidden bg-[#112030]" style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 w-full h-full">
           <img 
             src="/images/chapter_covers/chapter1_cover_real.png" 
             alt="第一章 纯爱" 
             className="w-full h-full object-cover object-center"
           />
        </div>
      </div>

      <section className="min-h-screen py-20 relative snap-start bg-[#112030]" style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* 1. Pure Love Section (Heart) */}
          <div className="flex flex-col items-center mb-20 text-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="mb-6"
             >
                <img 
                  src="/images/chapter1/heart.png" 
                  alt="Pure Love" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" 
                />
             </motion.div>
             <div className="prose prose-invert prose-lg mx-auto text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
               <p className="leading-relaxed">
                 在大众的想象中，残疾人的爱情故事常常被赋予一层<span className="text-highlight">“纯爱”的滤镜</span>。这样的爱，是体谅、信任、承诺......多元且具体。
               </p>
             </div>
          </div>

          {/* Chart 1: Sankey (Restored) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 w-full"
          >
            <FlourishEmbed 
              title="残疾人在社媒平台上“爱的需求”"
              src="https://public.flourish.studio/visualisation/26834611/embed"
              fixedHeight="600px"
              sourceNote="以“残疾婚恋”“残疾恋爱”“残疾征婚”为关键词爬取抖音、小红书、微博、快手的2015年至2025年相关评论，经数据清洗后，共得到“爱的需求”的有效数据2272条。"
              crawlDate="2025年11月17日"
            />
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
            <p className="text-xl leading-relaxed">
              <span className="text-highlight">“爱可抵万难，山海皆可平”</span>。但是，这样的山、这样的海，并不是一个小数目，而是从残疾发生的那一刻，就从心里生下根来。
            </p>
          </div>
          
          {/* Chart 2: Difficulties (Bubble) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
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
            <p className="text-xl leading-relaxed">
              <span className="text-highlight">重峦叠嶂的困难，意味着他们不得不面对冰冷的现实。</span>
            </p>
          </div>

          {/* Chart 3: Voronoi (Moved here) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 w-full"
          >
             <img 
               src="/images/chapter1/needs_voronoi.png" 
               alt="征婚平台需求维诺图" 
               className="w-full h-auto object-contain"
             />
             <div className="text-sm text-gray-400 mt-4 text-left">
                <p>数据来源：爬取“站长之家”TOP 5的残疾人征婚平台中截止2025年11月的相关数据，经清洗，搜集9903条有效用户信息</p>
                <p>采集时间：2025年11月</p>
             </div>
          </motion.div>

          <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
            <p className="leading-relaxed">
              他们比任何人都渴望一份纯粹的感情，但也比任何人都要明白，稳固的物质基础是维系这份感情、组建一个家庭不可或缺的基石。这种看似矛盾的择偶标准，恰恰是他们内心世界最真实的写照：
            </p>
          </div>
          
          {/* 2. Fire/Water Section */}
          <div className="flex flex-col items-center mb-20 text-center">
             <div className="prose prose-invert prose-lg mx-auto text-gray-300 [&_p]:text-center mb-8">
               <p className="leading-relaxed">
                 一半是火焰，一半是海水；<br/>
                 一半是对美好爱情的憧憬，一半是对残酷现实的敬畏。
               </p>
             </div>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="w-full relative"
             >
                {/* Background Full Width Image */}
                <div className="absolute left-1/2 -translate-x-1/2 w-screen max-w-none">
                  <img 
                    src="/images/chapter1/fire_water.png" 
                    alt="Fire and Water" 
                    className="w-full h-auto object-cover opacity-80" 
                  />
                </div>
                {/* Placeholder to maintain height flow */}
                <div className="h-[20vh] md:h-[40vh] w-full"></div>
             </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

// 第二章 转向
const Chapter2Section = () => {
  const [currentChapter, setCurrentChapter] = useState('chapter1');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDataModal, setShowDataModal] = useState<string | null>(null);
  const [showDivorceDetails, setShowDivorceDetails] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  const topicDialogues = new Set(['ageDialogue', 'educationDialogue', 'disabilityDialogue']);
  
  const currentNodes = DIALOGUE_DATA[currentChapter] || [];
  const currentNode: DialogueNode | undefined = currentNodes[currentIndex];
  
  const activeCharacterId = currentNode?.character;

  const isEnding = currentChapter === 'fertilityDialogue' && currentIndex === currentNodes.length - 1;

  // Sound Effect Hook
  useEffect(() => {
    // Check if we are in a dialogue node (not narrator, not choice)
    if (currentNode?.type === 'text' && currentNode.speaker !== 'narrator' && currentIndex === 0) {
        // Play sound only on the first message of a dialogue sequence? 
        // User said: "2. First message appear have sound".
        // Let's assume this means when a new chat session starts.
        // Or if they mean "Every time a message appears"? 
        // "First message appear" is singular.
        const audio = new Audio('/audio/message.mp3');
        audio.play().catch(e => console.error("Audio play failed", e));
    }
  }, [currentChapter, currentIndex]);

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
        // End of fertility dialogue - stay here for the buttons, don't auto scroll
        // requestAnimationFrame(() => {
        //   document.getElementById('chapter3')?.scrollIntoView({ behavior: 'smooth' });
        // });
      } else if (currentChapter !== 'chapter2') {
        setCurrentChapter('chapter2');
        setCurrentIndex(2);
      }
    }
  };

  const handleEndConversation = () => {
    document.getElementById('chapter3')?.scrollIntoView({ behavior: 'smooth' });
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
    setShowDivorceDetails(false);
    if (currentNode?.type === 'data') {
      setCurrentChapter('chapter2');
      setCurrentIndex(2);
    }
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

  const bgImage = (currentChapter === 'fertilityDialogue' && currentIndex > 14) 
    ? "/images/chapter2/ending_bg_2.png" 
    : "/images/chapter2/bg_narrate.png";

  return (
    <>
      {/* Chapter 2 Cover */}
      <div id="chapter2" className="h-screen relative flex items-center justify-center snap-start overflow-hidden bg-[#112030]" style={{ backgroundImage: 'url("/images/bg_texture.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 w-full h-full">
           <img 
             src="/images/chapter_covers/chapter2_cover_real.png" 
             alt="第二章 转向" 
             className="w-full h-full object-cover object-center"
           />
        </div>
      </div>

      <section 
        className="min-h-screen relative overflow-hidden flex flex-col snap-start bg-[#0e1a24]"
        style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      {/* Background Image - Only visible for narration/choice or if we want it persistent */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url('${bgImage}')`,
          opacity: (currentNode?.speaker === 'narrator' || currentNode?.type === 'choice') ? 1 : 0 
        }}
      />
      {/* Removed dark overlay to show #112030 background color clearly */}
      
      {/* Unified Bubble Container - Renders ALL bubbles (History + Active) in a single flow to prevent overlap */}
      {(currentNode?.speaker !== 'narrator' && currentNode?.type !== 'choice') && (
        <div className="absolute bottom-[40%] left-0 right-0 px-4 md:px-[10%] flex flex-col items-center justify-end gap-2 pointer-events-none z-30 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {(() => {
                // Logic to get last 2 history + current
                const windowStart = Math.max(0, currentIndex - 2);
                const visibleNodes = currentNodes.slice(windowStart, currentIndex + 1);
                
                return visibleNodes.map((node, i) => {
                   const isXiaoyu = node.character === 'xiaoyu';
                   const isCurrent = node === currentNodes[currentIndex];
                   const uniqueKey = `bubble-${currentChapter}-${windowStart + i}`;
                   
                   return (
                     <motion.div
                        key={uniqueKey}
                        layout
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: isCurrent ? 1 : 0.8, scale: isCurrent ? 1 : 0.9, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`flex w-full ${isCurrent ? 'justify-center' : (isXiaoyu ? 'justify-start md:pl-[20%]' : 'justify-end md:pr-[20%]')}`}
                     >
                        <div className={`relative flex items-center justify-center ${isCurrent ? 'w-[340px] md:w-[500px] min-h-[160px] p-8 md:p-12' : 'w-[200px] min-h-[60px] p-4'}`}>
                            {/* Character Name Label */}
                            {isCurrent && (
                                <div 
                                    className={`absolute -top-10 ${isXiaoyu ? 'left-4' : 'right-4'} text-white text-2xl font-bold font-serif drop-shadow-lg tracking-widest`}
                                >
                                    {isXiaoyu ? '晓雨' : '李明'}
                                </div>
                            )}

                            <img 
                                src={
                                    isCurrent 
                                    ? (isXiaoyu ? "/images/chapter2/bubble_large_left.png" : "/images/chapter2/bubble_large_right.png")
                                    : (isXiaoyu ? "/images/chapter2/bubble_small_left.png" : "/images/chapter2/bubble_small_right.png")
                                }
                                className="absolute inset-0 w-full h-full object-contain"
                                alt="bubble"
                            />
                            <div 
                                className={`relative z-10 text-white leading-relaxed text-left ${isCurrent ? 'text-base md:text-lg font-bold max-w-[42%]' : 'text-xs md:text-sm font-medium max-w-[85%] line-clamp-2'}`}
                                dangerouslySetInnerHTML={{ __html: node.text || '' }}
                            />
                        </div>
                     </motion.div>
                   );
                });
            })()}
          </AnimatePresence>
        </div>
      )}

      {/* Characters Layer - Hide during narration/choice if desired, or dim */}
      {(currentNode?.speaker !== 'narrator' && currentNode?.type !== 'choice') && (
        <div className="flex-grow relative z-10 flex items-end justify-center gap-40 px-[5%] pb-32 md:pb-40">
          {/* Re-order to ensure Liming (Right) and Xiaoyu (Left) match new requirement */}
          {[
            CHARACTERS.find(c => c.id === 'xiaoyu'),
            CHARACTERS.find(c => c.id === 'liming')
          ].filter(Boolean).map((char, index) => {
            if (!char) return null;
            const isXiaoyu = char.id === 'xiaoyu';
            const isLiming = char.id === 'liming';
            
            // Image Logic
            const isFertility = currentChapter === 'fertilityDialogue' || currentChapter === 'chapter5';
            let charSrc = char.standingImg;
            if (isXiaoyu) {
              charSrc = isFertility ? '/images/chapter2/xiaoyu_new.png' : '/images/chapter2/xiaoyu_seated.png';
            } else if (isLiming) {
              charSrc = isFertility ? '/images/chapter2/liming_new.png' : '/images/chapter2/liming_standing.png';
            }

            return (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: activeCharacterId === char.id ? 1 : 0.8,
                  filter: activeCharacterId === char.id ? 'none' : 'brightness(0.8)'
                }}
                transition={{ duration: 0.5 }}
                className="relative w-[50%] max-w-[650px] h-[60vh] flex items-end justify-center"
              >
                {/* Character Image */}
                <img 
                  src={charSrc} 
                  alt={char.name}
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Dialogue/Content Layer - Only for Narrator or Choices now */}
      <div className={`absolute inset-0 z-20 transition-all duration-500`}>
        {/* Full screen click handler for ALL non-choice nodes to ensure navigation works everywhere */}
        {(currentNode?.type !== 'choice' && !isEnding) && (
          <div className="absolute inset-0 w-full h-full cursor-pointer z-0" onClick={handleNext} />
        )}

        <div className={`absolute ${currentNode?.speaker === 'narrator' ? 'inset-0 flex items-center justify-center' : 'bottom-20 left-0 w-full pb-12'} pointer-events-none p-4 md:p-8`}>
        {/* Remove max-w restriction for speaker to allow custom positioning, but keep for narrator */}
        <div className={`container mx-auto ${currentNode?.speaker === 'narrator' ? 'max-w-3xl' : 'max-w-4xl'} w-full pointer-events-auto relative z-10`}>
          <AnimatePresence mode="wait">
            {currentNode?.type === 'text' && currentNode.speaker === 'narrator' && (
              <motion.div
                key={`narrator-${currentChapter}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                 {/* Narrator History Style */}
                 <div className="flex flex-col items-center justify-center space-y-12 min-h-[300px]">
                    <AnimatePresence initial={false} mode="popLayout">
                    {(() => {
                      const history = [];
                      // Increase history to 3 for better ending context
                      let ptr = currentIndex - 1;
                      while (ptr >= 0 && history.length < 3) {
                        const node = currentNodes[ptr];
                        if (node.speaker === 'narrator') {
                          history.unshift({ ...node, originalIndex: ptr });
                        }
                        ptr--;
                      }
                      
                      const currentWithIndex = { ...currentNode, originalIndex: currentIndex };
                      const visibleNodes = [...history, currentWithIndex];

                      return visibleNodes.map((node, i) => {
                         const isLast = i === visibleNodes.length - 1;
                         return (
                          <motion.div 
                            layout
                            key={`${currentChapter}-${node.originalIndex}`}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ 
                              opacity: isLast ? 1 : 0.6, // Increased opacity for history
                              y: 0, 
                              scale: isLast ? 1 : 0.95,
                              filter: isLast ? 'blur(0px)' : 'blur(0.5px)'
                            }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                            className={cn(
                              "leading-[3.5rem] font-serif transition-all duration-500",
                              isLast ? "text-2xl md:text-4xl font-bold text-white drop-shadow-lg py-4" : "text-xl md:text-3xl text-slate-300"
                            )}
                            dangerouslySetInnerHTML={{ __html: node.text || '' }}
                          />
                        );
                      });
                    })()}
                    </AnimatePresence>
                    
                    {!isEnding && <div className="text-sm text-slate-500 animate-pulse mt-8">点击任意处继续</div>}

                    {isEnding && (
                      <div className="flex gap-8 mt-12 pointer-events-auto">
                        <Button 
                          size="lg" 
                          variant="secondary"
                          className="px-8 py-6 text-lg bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
                          onClick={handleEndConversation}
                        >
                          结束对话
                        </Button>
                        <Button 
                          size="lg" 
                          variant="secondary"
                          className="px-8 py-6 text-lg bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
                          onClick={() => setShowAIChat(true)}
                        >
                          继续对话
                        </Button>
                      </div>
                    )}
                  </div>
              </motion.div>
            )}

            {/* Render Character Dialogue with Chalk Circle Background - REMOVED as per user request to use Bubbles only */}
            {/* The Unified Bubble Container above now handles all character dialogue */}
            
            {currentNode?.type === 'choice' && (
              <motion.div
                key={`choice-${currentChapter}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-6 md:p-8 shadow-2xl w-full max-w-2xl mx-auto mt-20 pointer-events-auto"
              >
                <div className="text-xl md:text-2xl font-bold mb-6 text-center font-serif text-accent">
                  {currentNode.question}
                </div>
                <div className="grid gap-4">
                  {currentNode.options?.map((option, index) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      size="lg"
                      className="w-full text-lg justify-start h-auto py-4 hover:bg-secondary hover:text-white transition-all border-muted-foreground/30 whitespace-normal text-left"
                      onClick={() => handleChoice(option)}
                    >
                      {String.fromCharCode(65 + index)}. {option.text}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </div>
      
      {/* AI Chat Modal - WITHOUT Backdrop/Curtain */}
      <Dialog open={showAIChat} onOpenChange={setShowAIChat}>
        <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none">
          <AIChat />
        </DialogContent>
      </Dialog>

      {/* Data Modal */}
      <Dialog open={!!showDataModal} onOpenChange={(open) => !open && handleReturnToTopics()}>
        <DialogContent className="max-w-4xl sm:max-w-4xl max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-secondary text-center w-full">
                {showDataModal === 'marriage-status'
                  ? "《残疾人征婚平台用户群体的过往婚姻状况》" 
                  : dataTitle}
              </DialogTitle>
          </DialogHeader>
          
          {showDataModal === 'marriage-status' ? (
             <div className="mt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key="main-chart"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col md:flex-row gap-4 items-center justify-center relative"
                  >
                     {/* Left Chart: Marriage Status (Combined) */}
                     <div 
                       className="flex-1 relative z-10 cursor-pointer group"
                       onClick={() => setShowDivorceDetails(!showDivorceDetails)}
                     >
                       <h4 className="text-center text-white mb-2 group-hover:text-accent transition-colors">过往婚姻状况 <span className="text-xs font-normal opacity-70 ml-2">(点击查看详情)</span></h4>
                       <iframe src="https://public.flourish.studio/visualisation/26801382/embed" className="w-full h-[400px] border-none pointer-events-none" title="过往婚姻状况" />
                     </div>
                     
                     {/* Connection Line & Button (Visual only, triggers state) */}
                     <div className="flex flex-col items-center justify-center gap-2 z-20 md:-ml-8 md:-mr-8">
                        <div className="w-1 h-20 md:w-20 md:h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50"></div>
                        <Button 
                           size="sm" 
                           variant="secondary" 
                           className="animate-bounce shadow-lg whitespace-nowrap z-30"
                           onClick={() => setShowDivorceDetails(!showDivorceDetails)}
                        >
                           {showDivorceDetails ? "收起详情" : "查看离异详情"}
                        </Button>
                     </div>

                     {/* Right Chart: Children Status (Conditionally Visible or Placeholder for visual balance) */}
                     <div className="flex-1 relative z-10">
                       <AnimatePresence>
                         {showDivorceDetails ? (
                           <motion.div
                             initial={{ opacity: 0, width: 0 }}
                             animate={{ opacity: 1, width: '100%' }}
                             exit={{ opacity: 0, width: 0 }}
                             className="overflow-hidden"
                           >
                              <h4 className="text-center text-white mb-2">是否有子女</h4>
                              <iframe src="https://public.flourish.studio/visualisation/26801472/embed" className="w-full h-[400px] border-none" title="是否有子女" />
                           </motion.div>
                         ) : (
                           <div className="w-full h-[400px] flex items-center justify-center opacity-30">
                              <p className="text-slate-500 text-sm">点击按钮查看详情</p>
                           </div>
                         )}
                       </AnimatePresence>
                     </div>
                  </motion.div>
                </AnimatePresence>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  数据来源：残疾人征婚平台上的9903份数据
                </p>
             </div>
          ) : dataVisualization && (
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
            </div>
          )}
          
          <div className="mt-6 flex justify-between gap-3">
            <Button variant="outline" onClick={handleReturnToTopics}>返回</Button>
            <Button onClick={handleContinueFromDataModal}>继续</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
    </>
  );
};

// 第三章 成本
const Chapter3Section = () => {
  return (
    <>
      {/* Chapter 3 Cover */}
      <div id="chapter3" className="h-screen relative flex items-center justify-center snap-start overflow-hidden bg-[#112030]" style={{ backgroundImage: 'url("/images/bg_texture.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 w-full h-full">
           <img 
             src="/images/chapter_covers/chapter3_cover_real.png" 
             alt="第三章 成本" 
             className="w-full h-full object-cover object-center"
           />
        </div>
      </div>

      <section className="min-h-screen py-20 relative snap-start bg-[#112030]" style={{ backgroundImage: 'url("/images/chapter_covers/背景长图.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="prose prose-invert prose-lg mx-auto mb-20 text-gray-300 [&_p]:text-left [&_p]:indent-[2em]">
          <p className="leading-relaxed">
            爱情是风花雪月，但婚姻却是柴米油盐。
          </p>
          <p className="leading-relaxed">
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
            title="《2023年全国残疾人家庭与全国居民家庭收入分项比较》"
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
            title="《政策焦点与发布主体的关联分析》"
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
            title="《2023年全国残疾人家庭与全国居民消费支出分项比较》"
            src="https://public.flourish.studio/visualisation/26815550/embed"
            aspectRatioPadding="75%"
            sourceNote="《2024年全国残疾人家庭收入状况调查报告》"
            crawlDate="2025年11月"
          />
        </motion.div>

      </div>
        
        {/* Full Screen End Image for Chapter 3 */}
        <div className="relative w-full h-screen snap-start">
           <img 
             src="/images/chapter3/chapter3_end_full.png" 
             alt="Chapter 3 End" 
             className="w-full h-full object-cover"
           />
        </div>
    </section>
    </>
  );
};

// 尾声
const EpilogueSection = () => {
  return (
    <>
      {/* Epilogue Cover */}
      <div id="epilogue" className="h-screen relative flex items-center justify-center snap-start overflow-hidden bg-[#112030]">
        <div className="absolute inset-0 w-full h-full">
           <img 
             src="/images/chapter_covers/epilogue_cover_real.png" 
             alt="尾声" 
             className="w-full h-full object-cover object-center"
           />
        </div>
      </div>

      <section className="min-h-screen flex flex-col relative overflow-hidden snap-start bg-gradient-to-b from-white via-pink-50 to-[#cdaeb1] text-[#112030]">
        
        {/* Background Decoration (formerly at bottom) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-80">
           <img 
             src="/images/epilogue/ending.png" 
             alt="Background Decoration" 
             className="w-full h-full object-cover object-center mix-blend-multiply" 
           />
        </div>

      <div className="flex-1 w-full flex flex-col items-center justify-center py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl text-center z-10 space-y-12">
          
          {/* Top Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl font-serif leading-relaxed font-medium"
          >
            <p className="mb-4">将残疾人的婚恋问题，仅仅视为他们个人的“私事”，是一种短视。</p>
            <p>
              当一个近<span className="text-highlight">九千万</span>人的庞大群体在追求人类最基本的情感需求时步履维艰，<br/>
              这便不再是个体的问题，<br/>
              而是整个社会需要共同面对的课题。
            </p>
          </motion.div>

          {/* Danmaku GIF */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full max-w-2xl mx-auto"
          >
             <img src="/images/epilogue/danmaku.gif" alt="Danmaku" className="w-full h-auto object-contain mix-blend-multiply" />
             <div className="text-sm text-muted-foreground text-left mt-4">
                <p>数据来源：爬取纪录片《有光》、《看得见》、《满塘传奇》、《向阳而生》等七部纪录片，从中得到约3万字文本，经数据清洗和词频分析得到结果。</p>
                <p>数据时间：11月29日</p>
             </div>
          </motion.div>

          {/* Middle Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-serif leading-loose font-medium"
          >
            <p className="font-bold text-xl md:text-2xl mb-4">真正的“无碍”</p>
            <p>不仅仅是物理环境的畅通无阻</p>
            <p>更是制度上的保障</p>
            <p>更是经济上的扶持</p>
            <p>更是文化上的包容和情感上的理解</p>
            <p>让爱，不再有“障碍”</p>
            <p>这不仅是对他们的承诺</p>
            <p>更是对我们共同的、更文明、更温暖的未来的期许</p>
          </motion.div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg font-serif mt-16 space-y-8 font-medium"
          >
            <div>
              <p className="font-bold mb-2">制作团队</p>
              <p>湛嘉悦 颜煊琳</p>
            </div>
            <div>
              <p className="font-bold mb-2">指导老师</p>
              <p>向安玲</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
    </>
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
        <SideNav />
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
