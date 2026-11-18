import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Bookmark, FileText, ChevronRight, Hash } from 'lucide-react';
import { searchArticles } from '../data/articles';
import { GLOSSARY_TERMS } from '../data/glossary';
import { REFERENCES_DATABASE } from '../data/references';
import { Article, GlossaryTerm, ReferenceItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (id: string) => void;
  onSelectGlossaryTerm?: (term: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  onSelectGlossaryTerm
}) => {
  const [query, setQuery] = useState('');
  const [matchedArticles, setMatchedArticles] = useState<Article[]>([]);
  const [matchedTerms, setMatchedTerms] = useState<GlossaryTerm[]>([]);
  const [matchedRefs, setMatchedRefs] = useState<ReferenceItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setMatchedArticles([]);
      setMatchedTerms([]);
      setMatchedRefs([]);
      return;
    }
    const q = query.toLowerCase();
    setMatchedArticles(searchArticles(q).slice(0, 8));
    setMatchedTerms(
      GLOSSARY_TERMS.filter(
        t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      ).slice(0, 5)
    );
    setMatchedRefs(
      REFERENCES_DATABASE.filter(
        r => r.title.toLowerCase().includes(q) || r.citationKey.toLowerCase().includes(q) || r.authors.some(a => a.toLowerCase().includes(q))
      ).slice(0, 4)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#faf8f2] w-full max-w-2xl rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-zinc-200 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all research articles, WGEEP zonation, geology, DEM derivatives..."
            className="w-full text-base bg-transparent border-none outline-none text-zinc-900 placeholder-zinc-400 font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-6">
          {!query.trim() && (
            <div className="text-center py-10 text-zinc-400 text-sm">
              <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50 text-emerald-800" />
              <p>Type keywords to search across 80+ articles, 12 unresolved issues, and literature.</p>
              <div className="flex justify-center gap-2 mt-4 text-xs">
                <span className="px-2 py-1 bg-zinc-100 rounded-md">WGEEP ESZ-1</span>
                <span className="px-2 py-1 bg-zinc-100 rounded-md">Copernicus DSM</span>
                <span className="px-2 py-1 bg-zinc-100 rounded-md">Pore Pressure</span>
                <span className="px-2 py-1 bg-zinc-100 rounded-md">TreeSHAP</span>
              </div>
            </div>
          )}

          {query.trim() && matchedArticles.length === 0 && matchedTerms.length === 0 && (
            <div className="text-center py-8 text-zinc-400 text-sm">
              No direct matches found for "{query}". Try adjusting your keywords.
            </div>
          )}

          {/* Matched Articles */}
          {matchedArticles.length > 0 && (
            <div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#163323]" />
                <span>Research Articles ({matchedArticles.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onSelectArticle(art.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all flex items-start justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded-md bg-[#163323]/10 text-[#163323]">
                          {art.id}
                        </span>
                        <span className="font-serif font-bold text-sm text-zinc-900 group-hover:text-[#163323]">
                          {art.title}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1 line-clamp-1">{art.subtitle}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#163323] transition-colors mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Glossary Terms */}
          {matchedTerms.length > 0 && (
            <div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-amber-700" />
                <span>Glossary Definitions ({matchedTerms.length})</span>
              </div>
              <div className="space-y-2">
                {matchedTerms.map((term) => (
                  <div key={term.slug} className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200 text-xs">
                    <div className="font-bold text-amber-950 flex items-center justify-between">
                      <span>{term.term}</span>
                      <span className="text-[10px] font-mono text-amber-700 uppercase">{term.category}</span>
                    </div>
                    <p className="text-zinc-600 mt-1 leading-relaxed line-clamp-2">{term.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched References */}
          {matchedRefs.length > 0 && (
            <div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-blue-700" />
                <span>Academic Citations ({matchedRefs.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedRefs.map((ref) => (
                  <div key={ref.id} className="p-2 rounded-lg bg-blue-50/40 border border-blue-100 text-xs">
                    <span className="font-semibold text-blue-950 font-serif">{ref.citationKey}</span> —{' '}
                    <span className="text-zinc-700 italic">{ref.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-2.5 bg-zinc-100/80 border-t border-zinc-200 text-right text-[11px] text-zinc-500 flex justify-between items-center px-4">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-zinc-300 rounded shadow-2xs font-mono">ESC</kbd> to close</span>
          <span>Navigation: <kbd className="px-1.5 py-0.5 bg-white border border-zinc-300 rounded shadow-2xs font-mono">Ctrl+K</kbd></span>
        </div>
      </div>
    </div>
  );
};
