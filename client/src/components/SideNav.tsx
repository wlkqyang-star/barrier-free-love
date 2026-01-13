import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const sections = [
  { id: 'intro', title: '引言' },
  { id: 'chapter1', title: '第一章' },
  { id: 'chapter2', title: '第二章' },
  { id: 'chapter3', title: '第三章' },
  { id: 'epilogue', title: '尾声' },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState('cover');

  useEffect(() => {
    // Ensure we are selecting the main scroll container
    // Since SideNav is rendered inside Home, we can try to find the 'main' element
    const scrollContainer = document.querySelector('main');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.1, // Trigger when 10% of the section is visible
        root: scrollContainer // Use the scroll container as root
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={cn(
        "fixed top-24 left-8 z-[100] hidden md:flex flex-col gap-6 transition-opacity duration-300",
        "opacity-100"
      )}
    >
      {/* Axis Line */}
      <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-white/10 -z-10 rounded-full" />

      {sections.map((section) => (
        <div key={section.id} className="group flex items-center gap-4 relative">
          <button
            onClick={() => scrollTo(section.id)}
            className={cn(
              "w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-background z-10",
              activeSection === section.id 
                ? "border-accent bg-accent scale-125 shadow-[0_0_10px_rgba(236,72,153,0.5)]" 
                : "border-muted-foreground/30 hover:border-accent hover:scale-125 hover:bg-accent/20"
            )}
            aria-label={`Scroll to ${section.title}`}
          >
            {activeSection === section.id && (
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            )}
          </button>
          
          <span 
            className={cn(
              "text-sm tracking-widest transition-all duration-300 cursor-pointer font-serif whitespace-nowrap origin-left",
              activeSection === section.id 
                ? "text-accent font-bold opacity-100 translate-x-0 scale-110" 
                : "text-muted-foreground/50 opacity-40 -translate-x-2 scale-90 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
            )}
            onClick={() => scrollTo(section.id)}
          >
            {section.title}
          </span>
        </div>
      ))}
    </div>
  );
}
