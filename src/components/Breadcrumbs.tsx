import React from 'react';
import { ChevronRight, Home, BookOpen } from 'lucide-react';

interface BreadcrumbsProps {
  categoryName?: string;
  articleTitle?: string;
  onNavigateHome: () => void;
  onNavigateCategory?: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  categoryName,
  articleTitle,
  onNavigateHome,
  onNavigateCategory
}) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4 overflow-x-auto py-1">
      <button
        onClick={onNavigateHome}
        className="flex items-center gap-1 hover:text-[#163323] transition-colors cursor-pointer"
        title="Go to Homepage"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Portal</span>
      </button>

      {categoryName && (
        <>
          <ChevronRight className="w-3 h-3 text-zinc-400 flex-shrink-0" />
          <button
            onClick={onNavigateCategory}
            className="flex items-center gap-1 hover:text-[#163323] transition-colors font-medium text-zinc-600 truncate cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{categoryName}</span>
          </button>
        </>
      )}

      {articleTitle && (
        <>
          <ChevronRight className="w-3 h-3 text-zinc-400 flex-shrink-0" />
          <span className="text-[#163323] font-semibold truncate max-w-[280px]">
            {articleTitle}
          </span>
        </>
      )}
    </nav>
  );
};
