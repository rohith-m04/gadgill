import React, { useState } from 'react';
import { 
  Compass, Trees, Mountain, Layers, Database, Workflow, BarChart3, 
  History, AlertTriangle, GraduationCap, Bookmark, Hash, 
  ChevronDown, ChevronRight, X, FileText, CheckCircle2 
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { Category, ArticleSummary } from '../types';

interface SidebarProps {
  currentArticleId: string;
  onSelectArticle: (id: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onNavigateCategoryView?: (code: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-4 h-4" />,
  Trees: <Trees className="w-4 h-4" />,
  Mountain: <Mountain className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Workflow: <Workflow className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  History: <History className="w-4 h-4" />,
  AlertTriangle: <AlertTriangle className="w-4 h-4" />,
  GraduationCap: <GraduationCap className="w-4 h-4" />
};

export const Sidebar: React.FC<SidebarProps> = ({
  currentArticleId,
  onSelectArticle,
  isOpenMobile,
  onCloseMobile
}) => {
  // Find which category the current article belongs to, and keep that category open by default
  const activeCatCode = currentArticleId ? currentArticleId.charAt(0).toUpperCase() : 'A';
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    [activeCatCode]: true,
    A: true
  });
  const [filterText, setFilterText] = useState('');

  const toggleCategory = (code: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [code]: !prev[code]
    }));
  };

  const getStatusBadge = (status: ArticleSummary['status']) => {
    switch (status) {
      case 'AUDIT_FLAG':
        return <span className="w-1.5 h-1.5 rounded-full bg-rose-500" title="Forensic Audit Flag" />;
      case 'HYPOTHESIS':
        return <span className="w-1.5 h-1.5 rounded-full bg-amber-500" title="Hypothesis" />;
      case 'PROPOSED_METHOD':
        return <span className="w-1.5 h-1.5 rounded-full bg-purple-500" title="Proposed Methodology" />;
      default:
        return <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" title="Established Knowledge" />;
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-2xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-16 left-0 z-40 h-screen lg:h-[calc(100vh-4rem)] w-72 md:w-80 bg-[#f8f6f0] border-r border-zinc-200/80 flex flex-col transition-transform duration-200 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header / Filter */}
        <div className="p-3.5 border-b border-zinc-200/80 flex items-center justify-between bg-[#f2efe6]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm text-[#163323] tracking-wide">
              Knowledge Base
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#163323]/10 text-[#163323] font-semibold">
              80+ Topics
            </span>
          </div>
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1 rounded-md text-zinc-500 hover:text-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Bar */}
        <div className="p-2 border-b border-zinc-200/60 bg-white/40">
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filter categories or articles..."
            className="w-full text-xs px-2.5 py-1.5 rounded-md bg-white border border-zinc-200 outline-none text-zinc-800 placeholder-zinc-400"
          />
        </div>

        {/* Categorized List */}
        <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5">
          {CATEGORIES.map((cat: Category) => {
            const isExpanded = !!expandedCategories[cat.code] || filterText.length > 0;
            const filteredArticles = cat.articles.filter(
              a => a.title.toLowerCase().includes(filterText.toLowerCase()) || a.id.toLowerCase().includes(filterText.toLowerCase())
            );

            if (filterText.length > 0 && filteredArticles.length === 0) return null;

            return (
              <div key={cat.id} className="rounded-xl overflow-hidden border border-zinc-200/60 bg-white/60 shadow-2xs">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(cat.code)}
                  className="w-full p-2.5 flex items-center justify-between text-left hover:bg-zinc-100/70 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[#163323] group-hover:scale-110 transition-transform">
                      {CATEGORY_ICONS[cat.iconName] || <FileText className="w-4 h-4" />}
                    </span>
                    <span className="font-serif font-bold text-xs text-zinc-900 truncate">
                      {cat.code}. {cat.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <span className="text-[10px] font-mono font-medium px-1 bg-zinc-100 rounded text-zinc-500">
                      {cat.articles.length}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {/* Sub-Articles */}
                {isExpanded && (
                  <div className="border-t border-zinc-100/80 bg-zinc-50/50 p-1 space-y-0.5">
                    {filteredArticles.map((art) => {
                      const isSelected = currentArticleId === art.id;
                      return (
                        <button
                          key={art.id}
                          onClick={() => {
                            onSelectArticle(art.id);
                            onCloseMobile();
                          }}
                          className={`w-full text-left py-1.5 px-2 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#163323] text-white font-medium shadow-xs'
                              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-emerald-300' : 'text-zinc-400'}`}>
                              {art.id}
                            </span>
                            <span className="truncate">{art.title}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {getStatusBadge(art.status)}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Meta */}
        <div className="p-3 border-t border-zinc-200/80 bg-[#f4f1e8] text-[11px] text-zinc-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Stage 4.5 Verified
          </span>
          <span className="font-mono text-[10px] text-zinc-400">v2.4 Academic</span>
        </div>
      </aside>
    </>
  );
};
