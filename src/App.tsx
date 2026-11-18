import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { DataCataloguePage } from './pages/DataCataloguePage';
import { MethodologyPage } from './pages/MethodologyPage';
import { DecisionsPage } from './pages/DecisionsPage';
import { ReferenceLibraryPage } from './pages/ReferenceLibraryPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { getArticleById, getNextArticle, getPrevArticle } from './data/articles';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentArticleId, setCurrentArticleId] = useState<string>('A1');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Scroll to top whenever view or article changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, currentArticleId]);

  const handleSelectArticle = (id: string) => {
    setCurrentArticleId(id);
    setCurrentView('article');
  };

  const handleNavigateView = (view: string) => {
    setCurrentView(view);
  };

  const currentArticle = getArticleById(currentArticleId) || getArticleById('A1')!;
  const prevArticle = getPrevArticle(currentArticle.id);
  const nextArticle = getNextArticle(currentArticle.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8f4] text-zinc-800 antialiased font-sans selection:bg-[#163323] selection:text-white">
      {/* Top Persistent Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigateView}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
      />

      {/* Global Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
      />

      {/* Main Content Router */}
      <div className="flex-1 flex">
        {/* Knowledge Base Sidebar (Visible on Article Page) */}
        {currentView === 'article' && (
          <Sidebar
            currentArticleId={currentArticleId}
            onSelectArticle={handleSelectArticle}
            isOpenMobile={isMobileSidebarOpen}
            onCloseMobile={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* View Switcher */}
        <main className="flex-1 min-w-0">
          {currentView === 'home' && (
            <HomePage
              onNavigateArticle={handleSelectArticle}
              onNavigateView={handleNavigateView}
            />
          )}

          {currentView === 'article' && (
            <ArticlePage
              article={currentArticle}
              prevArticle={prevArticle}
              nextArticle={nextArticle}
              onSelectArticle={handleSelectArticle}
              onNavigateHome={() => setCurrentView('home')}
            />
          )}

          {currentView === 'data-catalog' && <DataCataloguePage />}

          {currentView === 'methodology' && <MethodologyPage />}

          {currentView === 'decisions' && <DecisionsPage />}

          {currentView === 'references' && <ReferenceLibraryPage />}

          {currentView === 'glossary' && (
            <GlossaryPage onSelectArticle={handleSelectArticle} />
          )}
        </main>
      </div>

      {/* Persistent Academic Footer */}
      <footer className="bg-[#12281c] text-emerald-100/80 border-t border-emerald-900/60 py-12 px-4 sm:px-6 mt-16 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-serif font-bold text-sm text-white tracking-wide block">
              Western Ghats Research Knowledge Base &bull; Academic Portal
            </span>
            <p className="text-zinc-400 max-w-xl">
              Integration of the Western Ghats Ecology Expert Panel (WGEEP/Gadgil) Ecological Sensitivity Framework with Landslide Susceptibility Assessment.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <button onClick={() => setCurrentView('home')} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <span>&bull;</span>
            <button onClick={() => setCurrentView('article')} className="hover:text-white transition-colors cursor-pointer">
              Knowledge Base
            </button>
            <span>&bull;</span>
            <button onClick={() => setCurrentView('data-catalog')} className="hover:text-white transition-colors cursor-pointer">
              Data Catalogue
            </button>
            <span>&bull;</span>
            <button onClick={() => setCurrentView('methodology')} className="hover:text-white transition-colors cursor-pointer">
              Methodology
            </button>
            <span>&bull;</span>
            <button onClick={() => setCurrentView('decisions')} className="hover:text-white transition-colors cursor-pointer">
              Decisions
            </button>
            <span>&bull;</span>
            <button onClick={() => setCurrentView('references')} className="hover:text-white transition-colors cursor-pointer">
              Library
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-2">
          <span>&copy; 2026 Academic Research Project. All data derived from verified authentic public repositories.</span>
          <span className="font-mono text-emerald-400">Stages 1–4.5 Verified &bull; Stage 5 In Progress</span>
        </div>
      </footer>
    </div>
  );
}
