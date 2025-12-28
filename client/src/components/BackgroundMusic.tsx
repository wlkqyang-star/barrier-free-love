import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Try auto-play when component mounts
    if (audioRef.current) {
        audioRef.current.volume = 0.5; // Set a reasonable default volume
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsPlaying(true);
            }).catch(error => {
                // Auto-play was prevented
                console.log("Auto-play prevented:", error);
                setIsPlaying(false);
            });
        }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.error("Play failed:", err));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 md:top-24 md:right-8">
      <audio ref={audioRef} loop src="/music/bgm.mp3" />
      <button
        type="button"
        onClick={togglePlay}
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none",
          // isPlaying ? "animate-[spin_4s_linear_infinite]" : ""
        )}
        title={isPlaying ? "关闭音乐" : "播放音乐"}
      >
        <img 
            src="/images/music-icon.png" 
            alt="Music Toggle" 
            className="w-full h-full object-contain drop-shadow-lg"
        />
      </button>
    </div>
  );
}
