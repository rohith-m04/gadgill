import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface ArticleNavigatorProps {
  prevArticle?: Article;
  nextArticle?: Article;
  onSelectArticle: (id: string) => void;
}

export const ArticleNavigator: React.FC<ArticleNavigatorProps> = ({
  prevArticle,
  nextArticle,
  onSelectArticle
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 pt-6 border-t border-zinc-200">
      {prevArticle ? (
        <button
          onClick={() => onSelectArticle(prevArticle.id)}
          className="group flex flex-col p-4 rounded-xl border border-zinc-200 bg-white/80 hover:bg-[#f2efe6] hover:border-[#163323]/30 transition-all text-left shadow-xs cursor-pointer"
        >
          <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Previous Article ({prevArticle.id})
          </span>
          <span className="font-serif font-bold text-sm text-[#163323] line-clamp-1">
            {prevArticle.title}
          </span>
          <span className="text-xs text-zinc-500 mt-1 line-clamp-1">
            {prevArticle.subtitle}
          </span>
        </button>
      ) : (
        <div />
      )}

      {nextArticle ? (
        <button
          onClick={() => onSelectArticle(nextArticle.id)}
          className="group flex flex-col p-4 rounded-xl border border-zinc-200 bg-white/80 hover:bg-[#f2efe6] hover:border-[#163323]/30 transition-all text-right md:items-end shadow-xs cursor-pointer"
        >
          <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
            Next Article ({nextArticle.id})
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="font-serif font-bold text-sm text-[#163323] line-clamp-1">
            {nextArticle.title}
          </span>
          <span className="text-xs text-zinc-500 mt-1 line-clamp-1">
            {nextArticle.subtitle}
          </span>
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
