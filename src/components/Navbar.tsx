import React, { useState, useEffect } from 'react';
import { Search, Menu, BookOpen, Database, Workflow, History, Bookmark, Hash, Home, Shield, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenSearch: () => void;
  onToggleMobileSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onToggleMobileSidebar
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'article', label: 'Knowledge Base', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'data-catalog', label: 'Data Catalogue', icon: <Database className="w-4 h-4" /> },
    { id: 'methodology', label: 'Models & Workflow', icon: <Workflow className="w-4 h-4" /> },
    { id: 'decisions', label: 'Decisions & Timeline', icon: <History className="w-4 h-4" /> },
    { id: 'references', label: 'Reading Library', icon: <Bookmark className="w-4 h-4" /> },
    { id: 'glossary', label: 'Glossary', icon: <Hash className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#163323] text-white border-b border-emerald-900/60 shadow-md">
      {/* Scroll Progress Indicator */}
      <div
        className="h-0.5 bg-emerald-400 fixed top-0 left-0 transition-all z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800/60 transition-colors"
            title="Open Knowledge Base Index"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-950 flex items-center justify-center shadow-inner border border-emerald-500/30 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <span className="font-serif font-bold text-sm tracking-wide text-white block leading-tight">
                WESTERN GHATS RESEARCH PORTAL
              </span>
              <span className="text-[10px] text-emerald-300 font-mono tracking-wider block opacity-90">
                WGEEP &bull; Landslide Susceptibility Integration
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-xs">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800/80 text-white shadow-xs border border-emerald-700/50'
                    : 'text-emerald-100/80 hover:text-white hover:bg-emerald-900/40'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Search Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-800/80 text-xs text-emerald-200 hover:text-white hover:bg-emerald-900/60 transition-all shadow-inner cursor-pointer"
            title="Open global search (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-emerald-300" />
            <span className="hidden sm:inline">Search portal...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-emerald-900/80 rounded border border-emerald-700 text-emerald-300">
              Ctrl+K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
