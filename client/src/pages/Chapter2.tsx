import { ChapterNav } from "@/components/ChapterNav";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CHARACTERS } from "@/lib/constants";
import { DIALOGUE_DATA } from "@/lib/dialogueData";
import { DialogueNode, Option } from "@/lib/types";
import { DATA_VISUALIZATIONS } from "@/lib/visualizations";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Chapter2() {
  const [, setLocation] = useLocation();
  const [currentChapter, setCurrentChapter] = useState('chapter1');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDataModal, setShowDataModal] = useState<string | null>(null);

  const topicDialogues = new Set(['ageDialogue', 'educationDialogue', 'disabilityDialogue']);
  
  const currentNodes = DIALOGUE_DATA[currentChapter] || [];
  const currentNode: DialogueNode | undefined = currentNodes[currentIndex];
  
  const activeCharacterId = currentNode?.character;
  const activeCharacter = CHARACTERS.find(c => c.id === activeCharacterId);

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
        setLocation('/chapter3');
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
    <div className="h-screen w-screen overflow-hidden bg-background relative flex flex-col">
      <ChapterNav />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-80" />
      {/* <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.05] pointer-events-none" /> */}

      {/* Characters Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-end justify-between px-[10%] pb-0">
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
            className="relative w-[30%] max-w-[500px] h-[80%] flex items-end justify-center"
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
      <div className="absolute bottom-0 left-0 w-full z-20 p-4 md:p-8 pb-12 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            {currentNode?.type === 'text' && (
              <motion.div
                key={`text-${currentChapter}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-6 md:p-8 shadow-2xl cursor-pointer"
                onClick={handleNext}
              >
                {currentNode.speaker && currentNode.speaker !== 'narrator' && (
                  <div className="text-secondary font-bold text-lg mb-2 font-serif">
                    {currentNode.speaker}
                  </div>
                )}
                <div className="text-xl md:text-2xl leading-relaxed font-light text-left indent-[2em]" dangerouslySetInnerHTML={{ __html: currentNode.text || '' }}>
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
                className="bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-6 md:p-8 shadow-2xl"
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
    </div>
  );
}
