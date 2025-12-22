import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

const chapters = [
  { id: "intro", title: "引言", path: "/" },
  { id: "chapter1", title: "第一章 纯爱", path: "/chapter1" },
  { id: "chapter2", title: "第二章 转向", path: "/chapter2" },
  { id: "chapter3", title: "第三章 隐形", path: "/chapter3" },
  { id: "chapter4", title: "第四章 成本", path: "/chapter4" },
  { id: "epilogue", title: "尾声", path: "/epilogue" },
];

export function ChapterNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold text-primary-foreground hover:text-secondary transition-colors">
          "无碍"才能爱
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          {chapters.map((chapter) => (
            <Link key={chapter.id} href={chapter.path}>
              <div
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                  location === chapter.path
                    ? "bg-secondary text-secondary-foreground shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {chapter.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Placeholder - In a real app, implement a drawer here */}
        <div className="md:hidden text-sm text-muted-foreground">
          {chapters.find(c => c.path === location)?.title || "目录"}
        </div>
      </div>
    </nav>
  );
}
