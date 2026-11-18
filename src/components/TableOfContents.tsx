import React, { useEffect, useState } from 'react';
import { AlignLeft, Hash } from 'lucide-react';
import { ArticleSection } from '../types';

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%' }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  return (
    <div className="bg-[#f4f2ea]/70 rounded-xl p-4 border border-zinc-200/80 sticky top-20 shadow-xs">
      <div className="flex items-center gap-2 pb-2 mb-3 border-b border-zinc-200/80 text-xs font-semibold text-[#163323] uppercase tracking-wider">
        <AlignLeft className="w-3.5 h-3.5" />
        <span>On This Page</span>
      </div>
      <nav className="space-y-1 text-xs">
        {sections.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`w-full text-left py-1.5 px-2 rounded-md transition-all flex items-start gap-1.5 cursor-pointer leading-tight ${
                isActive
                  ? 'bg-[#163323] text-white font-medium shadow-xs'
                  : 'text-zinc-600 hover:text-[#163323] hover:bg-zinc-200/50'
              }`}
            >
              <Hash className={`w-3 h-3 flex-shrink-0 mt-0.5 ${isActive ? 'text-emerald-300' : 'text-zinc-400'}`} />
              <span className="truncate">{sec.title}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
