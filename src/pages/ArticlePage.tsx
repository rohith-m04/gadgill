import React, { useState } from 'react';
import { 
  Clock, Calendar, ShieldCheck, AlertTriangle, Bookmark, 
  ExternalLink, Maximize2, Share2, BookOpen, Layers, CheckCircle2 
} from 'lucide-react';
import { Article } from '../types';
import { TableOfContents } from '../components/TableOfContents';
import { ArticleNavigator } from '../components/ArticleNavigator';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapPreviewModal } from '../components/MapPreviewModal';
import { Callout } from '../components/Callout';
import { 
  ConceptualFrameworkDiagram, 
  LandslideMechanismsExplorer, 
  UnresolvedIssuesInteractiveTracker 
} from '../components/VisualDiagrams';

interface ArticlePageProps {
  article: Article;
  prevArticle?: Article;
  nextArticle?: Article;
  onSelectArticle: (id: string) => void;
  onNavigateHome: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  article,
  prevArticle,
  nextArticle,
  onSelectArticle,
  onNavigateHome
}) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const getStatusBadge = (status: Article['status']) => {
    switch (status) {
      case 'AUDIT_FLAG':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-800 border border-rose-200">
            <AlertTriangle className="w-3.5 h-3.5" />
            Audit Flag & Limitation
          </span>
        );
      case 'HYPOTHESIS':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-800 border border-amber-200">
            <Clock className="w-3.5 h-3.5" />
            Testable Hypothesis
          </span>
        );
      case 'PROPOSED_METHOD':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-purple-100 text-purple-800 border border-purple-200">
            <Layers className="w-3.5 h-3.5" />
            Proposed Methodology
          </span>
        );
      case 'SOURCE_DERIVED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-blue-100 text-blue-800 border border-blue-200">
            <Bookmark className="w-3.5 h-3.5" />
            Source-Derived Record
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            Established Knowledge
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        categoryName={article.categoryName}
        articleTitle={article.title}
        onNavigateHome={onNavigateHome}
      />

      {/* Main Grid: Content (Left) + Table of Contents (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Content Area */}
        <article className="lg:col-span-8 xl:col-span-9 bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200/90 shadow-xs">
          {/* Article Header */}
          <header className="pb-8 mb-8 border-b border-zinc-200">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-[#163323] text-white font-mono font-bold text-xs tracking-wider">
                  {article.id}
                </span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800">
                  {article.categoryName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(article.status)}
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#163323] tracking-tight leading-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="mt-2 text-base sm:text-lg text-zinc-600 font-sans font-light">
                {article.subtitle}
              </p>
            )}

            {/* Author Perspective Note */}
            {article.authorNote && (
              <div className="mt-5 p-4 rounded-xl bg-[#f7f5ed] border-l-4 border-[#163323] text-xs text-zinc-700 leading-relaxed italic font-serif">
                <span className="font-sans font-bold text-[#163323] not-italic block mb-0.5">
                  Researcher Perspective:
                </span>
                "{article.authorNote}"
              </div>
            )}

            {/* Metadata Bar */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime} read
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Verified: {article.lastUpdated}
              </span>
            </div>
          </header>

          {/* Abstract Box */}
          <div className="p-5 rounded-2xl bg-[#faf8f2] border border-zinc-200/80 mb-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 mb-2">
              Executive Abstract
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed font-sans">
              {article.abstract}
            </p>
          </div>

          {/* Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="mb-8 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-950 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Key Scientific Takeaways
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-emerald-700 font-bold mt-0.5">&bull;</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Embedded Interactive Diagram if applicable */}
          {article.diagramType === 'conceptual-framework' && <ConceptualFrameworkDiagram />}
          {article.diagramType === 'landslide-mechanisms' && <LandslideMechanismsExplorer />}
          {article.diagramType === 'unresolved-register' && <UnresolvedIssuesInteractiveTracker />}

          {/* Embedded Preview Image if applicable */}
          {article.previewImage && (
            <div className="my-8 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-xs">
              <div className="relative group cursor-pointer" onClick={() => setModalImage(article.previewImage!.src)}>
                <img
                  src={article.previewImage.src}
                  alt={article.previewImage.caption}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to expand high-resolution map</span>
                </div>
              </div>
              <div className="p-3.5 bg-white border-t border-zinc-200 text-xs text-zinc-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <p className="italic">{article.previewImage.caption}</p>
                <span className="font-mono text-[10px] text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">
                  {article.previewImage.sourceDataset}
                </span>
              </div>
            </div>
          )}

          {/* Article Sections */}
          <div className="space-y-10 text-zinc-800">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#163323] pb-2 border-b border-zinc-100 mb-4">
                  {section.title}
                </h2>
                <div className="text-sm sm:text-base leading-relaxed text-zinc-700 space-y-4 whitespace-pre-line font-sans">
                  {section.content}
                </div>

                {/* Subsections if present */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="mt-6 space-y-6 pl-4 border-l-2 border-emerald-800/30">
                    {section.subsections.map((sub) => (
                      <div key={sub.id} id={sub.id}>
                        <h3 className="text-base sm:text-lg font-serif font-semibold text-zinc-900 mb-2">
                          {sub.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600 whitespace-pre-line">
                          {sub.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Academic References & Citations */}
          {article.sources && article.sources.length > 0 && (
            <div className="mt-12 p-6 rounded-2xl bg-[#faf8f2] border border-zinc-200">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-800" />
                Verified Academic Sources & Citations
              </h4>
              <ul className="space-y-2 text-xs text-zinc-700">
                {article.sources.map((src, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 py-1 border-b border-zinc-200/50 last:border-none">
                    <span className="font-serif leading-relaxed">{src.citation}</span>
                    {src.pageOrSection && (
                      <span className="font-mono text-[11px] text-zinc-400 whitespace-nowrap">
                        {src.pageOrSection}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Articles Strip */}
          {article.relatedArticleIds && article.relatedArticleIds.length > 0 && (
            <div className="mt-8 pt-6 border-t border-zinc-200">
              <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-3">
                Related Research Topics
              </h5>
              <div className="flex flex-wrap gap-2">
                {article.relatedArticleIds.map((relId) => (
                  <button
                    key={relId}
                    onClick={() => onSelectArticle(relId)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-[#163323] hover:text-white transition-all text-xs font-mono font-medium text-zinc-700 cursor-pointer"
                  >
                    Article {relId} &rarr;
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Previous / Next Navigator */}
          <ArticleNavigator
            prevArticle={prevArticle}
            nextArticle={nextArticle}
            onSelectArticle={onSelectArticle}
          />
        </article>

        {/* Floating Table of Contents (Right) */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <TableOfContents sections={article.sections} />
        </aside>
      </div>

      {/* Lightbox Modal */}
      {modalImage && (
        <MapPreviewModal
          isOpen={true}
          onClose={() => setModalImage(null)}
          imageSrc={modalImage}
          title={article.title}
          caption={article.previewImage?.caption}
          sourceDataset={article.previewImage?.sourceDataset}
        />
      )}
    </div>
  );
};
