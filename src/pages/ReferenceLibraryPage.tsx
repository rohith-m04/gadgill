import React, { useState } from 'react';
import { Bookmark, Search, ExternalLink, ShieldCheck, Filter, BookOpen } from 'lucide-react';
import { REFERENCES_DATABASE } from '../data/references';
import { ReferenceItem } from '../types';

export const ReferenceLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filtered = REFERENCES_DATABASE.filter(ref => {
    const matchesCategory = selectedCategory === 'ALL' || ref.category === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch = !searchTerm || (
      ref.title.toLowerCase().includes(q) ||
      ref.citationKey.toLowerCase().includes(q) ||
      ref.authors.some(a => a.toLowerCase().includes(q)) ||
      ref.source.toLowerCase().includes(q) ||
      ref.relevanceToProject.toLowerCase().includes(q)
    );
    return matchesCategory && matchesSearch;
  });

  const categories = ['ALL', 'WGEEP', 'GSI', 'LANDSLIDE_SCIENCE', 'REMOTE_SENSING', 'MACHINE_LEARNING', 'METEOROLOGY'];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono uppercase tracking-widest mb-3">
          <Bookmark className="w-3.5 h-3.5" />
          Academic Library
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#163323]">
          Research Reference Library & Bibliography
        </h1>
        <p className="mt-2 text-base text-zinc-600 max-w-3xl leading-relaxed">
          Searchable catalog of peer-reviewed literature, government panel monographs, geological surveys, and remote sensing standards grounding this research.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by author, title, citation key, or keyword..."
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

      {/* References Grid */}
      <div className="space-y-4">
        {filtered.map(ref => (
          <div
            key={ref.id}
            className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-[#163323]/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                  {ref.citationKey}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                  {ref.category} &bull; {ref.year}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base text-zinc-900 leading-snug">
                {ref.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-600">
                {ref.authors.join(', ')} ({ref.year}). <em>{ref.source}</em>
                {ref.volumeIssuePages ? `, ${ref.volumeIssuePages}` : ''}.
              </p>

              {/* Relevance Annotation */}
              <div className="mt-3 p-3 rounded-xl bg-[#faf8f2] border border-zinc-200/80 text-xs text-zinc-700 leading-relaxed">
                <span className="font-bold text-[#163323] block mb-0.5">Project Relevance:</span>
                {ref.relevanceToProject}
              </div>
            </div>

            {/* Links and Verification Badge */}
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-emerald-800 font-mono text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Bibliographic Record
              </span>

              {ref.doi && (
                <a
                  href={`https://doi.org/${ref.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-700 hover:underline font-mono text-xs"
                >
                  <span>DOI: {ref.doi}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {ref.url && !ref.doi && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-700 hover:underline font-mono text-xs"
                >
                  <span>Official Document Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
