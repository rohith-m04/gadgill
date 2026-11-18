import React from 'react';
import { 
  Compass, Trees, Mountain, Database, Workflow, BarChart3, 
  History, AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2, 
  ExternalLink, Layers, BookOpen, Droplets, Activity 
} from 'lucide-react';
import { ConceptualFrameworkDiagram, LandslideMechanismsExplorer } from '../components/VisualDiagrams';
import { CATEGORIES } from '../data/categories';

interface HomePageProps {
  onNavigateArticle: (id: string) => void;
  onNavigateView: (view: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateArticle, onNavigateView }) => {
  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative rounded-3xl bg-gradient-to-br from-[#12281c] via-[#1a3827] to-[#0c1811] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-emerald-900/60">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Academic Research Portal &bull; Stage 4.5 Validated
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Integration of WGEEP Ecological Sensitivity with Landslide Susceptibility Assessment
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-sans font-light">
            An empirical, data-grounded investigation operationalizing the landmark Western Ghats Ecology Expert Panel (Gadgil) conservation framework alongside conventional geomechanical, geological, and hydrometeorological predictors across Kerala.
          </p>

          {/* Central Research Question Callout */}
          <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-sm text-emerald-200 leading-relaxed">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
              Central Research Question:
            </span>
            <p className="italic font-serif text-white text-base">
              "Can ecological sensitivity information derived from the WGEEP/Gadgil framework be operationalized and empirically evaluated alongside conventional geomorphological, geological, climatic and land-cover predictors to improve spatial landslide susceptibility assessment, interpretability and transferability?"
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateArticle('A1')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 text-[#0c1811] font-semibold text-sm hover:bg-emerald-300 transition-all shadow-md cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Knowledge Base (A1)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => onNavigateView('methodology')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
            >
              <Workflow className="w-4 h-4" />
              <span>Comparative Model Framework</span>
            </button>
            <button
              onClick={() => onNavigateView('data-catalog')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/60 text-emerald-200 font-medium text-sm hover:bg-emerald-900/60 transition-all border border-emerald-800/80 cursor-pointer"
            >
              <Database className="w-4 h-4" />
              <span>Spatial Data Catalogue</span>
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics Strip */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Mapped Point Scars', value: '4,728', sub: '2018 Disaster Inventory', icon: <Mountain className="w-4 h-4 text-amber-700" /> },
          { label: 'Study Area Coverage', value: '38,863 km²', sub: '14 Kerala Districts', icon: <Compass className="w-4 h-4 text-emerald-700" /> },
          { label: 'Unresolved Issues', value: '12 Tracked', sub: 'Governing U01–U12 Register', icon: <AlertTriangle className="w-4 h-4 text-rose-700" /> },
          { label: 'Candidate Variables', value: '18 Factors', sub: 'Physical & Ecological', icon: <Layers className="w-4 h-4 text-blue-700" /> },
          { label: 'Land Cover Baseline', value: '10m Res', sub: 'ESA WorldCover 2021', icon: <Trees className="w-4 h-4 text-emerald-800" /> },
          { label: 'Comparative Models', value: '3 Suites', sub: 'Models A, B, and C', icon: <Workflow className="w-4 h-4 text-purple-700" /> }
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono uppercase">{stat.label}</span>
              {stat.icon}
            </div>
            <div>
              <span className="font-serif font-bold text-2xl text-zinc-900 block">{stat.value}</span>
              <span className="text-[11px] text-zinc-500 font-mono">{stat.sub}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Conceptual Architecture */}
      <section>
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
            Conceptual Core
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#163323] mt-1">
            Bridging Ecological Governance with Geohazard Mechanics
          </h2>
          <p className="text-sm text-zinc-600 mt-1 max-w-3xl">
            The research directly addresses the historical disconnect between policy-level conservation frameworks and geotechnical slope stability.
          </p>
        </div>

        <ConceptualFrameworkDiagram />
      </section>

      {/* The Two Perspectives Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-emerald-950 text-white border border-emerald-900 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-800/50 text-emerald-300">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white">The Ecological Perspective</h3>
          </div>
          <p className="text-sm text-emerald-100/80 leading-relaxed mb-6 font-light">
            Originating from the 2011 Western Ghats Ecology Expert Panel (WGEEP) led by Prof. Madhav Gadgil. Evaluates landscape sensitivity based on species richness, forest continuity, endemic habitats, elevation thresholds, and participatory decentralized governance.
          </p>
          <ul className="space-y-2.5 text-xs text-emerald-200">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>174 formal taluka assignments across 4 core states (166 core assignments + 8 peripheral).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Hierarchical zonation: ESZ-1 (highest conservation), ESZ-2 (regulated), ESZ-3 (sustainable).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Reconciled 41 Kerala taluka entries against 61 historical GIS boundary polygons.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-[#1f2421] text-white border border-zinc-700 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-zinc-800 text-amber-400">
              <Mountain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white">The Physical Landslide Perspective</h3>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
            Grounded in engineering geology, geomorphometry, and unsaturated soil mechanics. Evaluates hillslope stability through gravitational driving stress versus Mohr-Coulomb shear resistance under monsoonal groundwater saturation.
          </p>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>4,728 mapped point scars from the August 2018 catastrophic deluge.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>Copernicus DEM GLO-30 morphometry (slope, aspect, curvature, TRI, TPI, TWI).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>Precambrian crystalline basement (charnockites, gneisses) and tropical saprolitic regolith.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Interactive Geomechanics Simulation */}
      <section>
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
            Geomechanical Physics
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#163323] mt-1">
            Landslide Failure Kinematics & Pore-Pressure Triggering
          </h2>
          <p className="text-sm text-zinc-600 mt-1 max-w-3xl">
            Simulate how monsoon water table rise collapses effective shear strength in tropical saprolite, transforming shallow planar slides into channelized debris flows.
          </p>
        </div>

        <LandslideMechanismsExplorer />
      </section>

      {/* Knowledge Base Categories Directory */}
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
              Curated Curriculum
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#163323] mt-1">
              Explore the Knowledge Base Categories
            </h2>
            <p className="text-sm text-zinc-600 mt-1">
              Eighty comprehensive academic articles documenting every facet of the project.
            </p>
          </div>
          <button
            onClick={() => onNavigateArticle('A1')}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#163323] hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <span>View All Topics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-[#163323]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#163323]/10 text-[#163323]">
                    Category {cat.code}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 font-medium">
                    {cat.articles.length} Articles
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-zinc-900 group-hover:text-[#163323] transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2 mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-zinc-100">
                {cat.articles.slice(0, 3).map((art) => (
                  <button
                    key={art.id}
                    onClick={() => onNavigateArticle(art.id)}
                    className="w-full text-left py-1 text-xs text-zinc-600 hover:text-[#163323] flex items-center justify-between group/art cursor-pointer"
                  >
                    <span className="truncate max-w-[220px]">
                      <strong className="font-mono text-[10px] text-zinc-400 mr-1.5">{art.id}</strong>
                      {art.title}
                    </span>
                    <ArrowRight className="w-3 h-3 text-zinc-300 group-hover/art:translate-x-1 group-hover/art:text-[#163323] transition-all" />
                  </button>
                ))}
                {cat.articles.length > 3 && (
                  <button
                    onClick={() => onNavigateArticle(cat.articles[0].id)}
                    className="text-[11px] font-semibold text-emerald-800 hover:underline pt-1 block cursor-pointer"
                  >
                    + {cat.articles.length - 3} more articles in Category {cat.code} &rarr;
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
