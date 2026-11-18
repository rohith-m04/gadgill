import React, { useState } from 'react';
import { Hash, Search, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossary';
import { GlossaryTerm } from '../types';

interface GlossaryPageProps {
  onSelectArticle: (id: string) => void;
}

export const GlossaryPage: React.FC<GlossaryPageProps> = ({ onSelectArticle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Ecological Policy', 'Landslide Science', 'Remote Sensing', 'Terrain Analysis', 'Geology', 'Meteorology', 'Spatial Statistics', 'Machine Learning'];

  const filtered = GLOSSARY_TERMS.filter(term => {
    const matchesCategory = selectedCategory === 'ALL' || term.category === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch = !searchTerm || (
      term.term.toLowerCase().includes(q) ||
      term.definition.toLowerCase().includes(q) ||
      term.contextInProject.toLowerCase().includes(q)
    );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono uppercase tracking-widest mb-3">
          <Hash className="w-3.5 h-3.5" />
          Technical Lexicon
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#163323]">
          Scientific Research Glossary
        </h1>
        <p className="mt-2 text-base text-zinc-600 max-w-3xl leading-relaxed">
          Authoritative definitions, mathematical formulations, and project-specific contextual applications for key ecological, geomorphological, remote sensing, and statistical concepts.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search terminology (e.g. WGEEP, Saprolite, TWI, SHAP)..."
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white shadow-2xs outline-none text-zinc-800 placeholder-zinc-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#163323] text-white font-semibold shadow-xs'
                    : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(term => (
          <div
            key={term.slug}
            className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-[#163323]/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 font-bold">
                  {term.category}
                </span>
              </div>

              <h3 className="font-serif font-bold text-lg text-[#163323] leading-snug">
                {term.term}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                {term.definition}
              </p>

              {/* Project Context Callout */}
              <div className="mt-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-zinc-700 leading-relaxed">
                <span className="font-bold text-emerald-950 block mb-0.5">Application in this Research:</span>
                {term.contextInProject}
              </div>
            </div>

            {/* Related Terms */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center gap-1 text-[11px] text-zinc-500 font-mono">
                <span>Related:</span>
                {term.relatedTerms.map((rel, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-zinc-100 rounded text-zinc-700">
                    {rel}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
