import React, { useState } from 'react';
import { Workflow, Layers, ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, Compass, Mountain, Trees, BarChart2, Database } from 'lucide-react';
import { ConceptualFrameworkDiagram } from '../components/VisualDiagrams';

export const MethodologyPage: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'A' | 'B' | 'C'>('C');

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono uppercase tracking-widest mb-3">
          <Workflow className="w-3.5 h-3.5" />
          Experimental Protocol
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#163323]">
          Methodology & Comparative Modeling Framework
        </h1>
        <p className="mt-2 text-base text-zinc-600 max-w-3xl leading-relaxed">
          The complete end-to-end experimental design testing whether WGEEP ecological sensitivity classifications provide statistically measurable predictive gains over conventional physical geohazard predictors.
        </p>
      </div>

      {/* Conceptual Framework Embedded */}
      <ConceptualFrameworkDiagram />

      {/* Comparative Tri-Model Architecture Section */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-purple-800 font-semibold">
            Experimental Benchmark
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#163323] mt-1">
            Tri-Model Comparative Architecture: Models A, B, and C
          </h2>
          <p className="text-sm text-zinc-600 mt-1 max-w-3xl leading-relaxed">
            Rather than training an unconstrained machine learning model on all available variables simultaneously, the research isolates the marginal contribution of WGEEP information through a controlled tri-model benchmark.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-zinc-200 gap-4 text-sm font-serif">
          <button
            onClick={() => setActiveModel('A')}
            className={`pb-3 font-bold transition-all cursor-pointer border-b-2 ${
              activeModel === 'A' ? 'border-amber-800 text-amber-900' : 'border-transparent text-zinc-400 hover:text-zinc-600'
            }`}
          >
            Model A: Conventional Physical Suite
          </button>
          <button
            onClick={() => setActiveModel('B')}
            className={`pb-3 font-bold transition-all cursor-pointer border-b-2 ${
              activeModel === 'B' ? 'border-emerald-800 text-emerald-900' : 'border-transparent text-zinc-400 hover:text-zinc-600'
            }`}
          >
            Model B: Gadgil Ecological Suite
          </button>
          <button
            onClick={() => setActiveModel('C')}
            className={`pb-3 font-bold transition-all cursor-pointer border-b-2 ${
              activeModel === 'C' ? 'border-[#163323] text-[#163323]' : 'border-transparent text-zinc-400 hover:text-zinc-600'
            }`}
          >
            Model C: Integrated Synthesis Suite
          </button>
        </div>

        {/* Model Card Content */}
        {activeModel === 'A' && (
          <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-200/80 text-amber-900">
                10 Conditioning Factors
              </span>
              <span className="text-xs text-zinc-500 font-mono">Baseline Physical Benchmark</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-amber-950">
              Model A: The Classical Geotechnical / Geomorphic Paradigm
            </h3>
            <p className="text-xs text-zinc-700 leading-relaxed">
              Represents standard international landslide susceptibility modeling. Relies entirely on abiotic terrain morphometry, structural lineaments, gridded monsoon precipitation, and basic land-cover classification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs font-mono pt-2">
              <span className="p-2 bg-white rounded border border-amber-200">1. Elevation (GLO-30)</span>
              <span className="p-2 bg-white rounded border border-amber-200">2. Slope Gradient (deg)</span>
              <span className="p-2 bg-white rounded border border-amber-200">3. Aspect (Sin/Cos)</span>
              <span className="p-2 bg-white rounded border border-amber-200">4. Plan Curvature</span>
              <span className="p-2 bg-white rounded border border-amber-200">5. Profile Curvature</span>
              <span className="p-2 bg-white rounded border border-amber-200">6. Terrain Ruggedness (TRI)</span>
              <span className="p-2 bg-white rounded border border-amber-200">7. Topographic Position (TPI)</span>
              <span className="p-2 bg-white rounded border border-amber-200">8. Topographic Wetness (TWI)</span>
              <span className="p-2 bg-white rounded border border-amber-200">9. Distance to Shear Faults</span>
              <span className="p-2 bg-white rounded border border-amber-200">10. ESA WorldCover LULC</span>
            </div>
          </div>
        )}

        {activeModel === 'B' && (
          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-200/80 text-emerald-900">
                5 Ecological Factors
              </span>
              <span className="text-xs text-zinc-500 font-mono">Isolated Ecological Benchmark</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-emerald-950">
              Model B: The WGEEP Ecological Policy Paradigm
            </h3>
            <p className="text-xs text-zinc-700 leading-relaxed">
              Evaluates whether ecological zonation and biophysical canopy indices possess independent discriminatory power. Tests whether policy-level conservation tiers (ESZ-1, ESZ-2, ESZ-3) correlate directly with slope failure locations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs font-mono pt-2">
              <span className="p-2 bg-white rounded border border-emerald-200">1. WGEEP ESZ Class (1, 2, 3)</span>
              <span className="p-2 bg-white rounded border border-emerald-200">2. Ordinal Sensitivity (3, 2, 1, 0)</span>
              <span className="p-2 bg-white rounded border border-emerald-200">3. Distance to ESZ-1 Boundary</span>
              <span className="p-2 bg-white rounded border border-emerald-200">4. Sentinel-2 NDVI (20m)</span>
              <span className="p-2 bg-white rounded border border-emerald-200">5. Sentinel-2 NDMI (20m)</span>
            </div>
          </div>
        )}

        {activeModel === 'C' && (
          <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-purple-200/80 text-purple-900">
                18 Integrated Factors
              </span>
              <span className="text-xs text-zinc-500 font-mono">Full Synthesis Architecture</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-purple-950">
              Model C: The Integrated Physical-Ecological Hypothesis
            </h3>
            <p className="text-xs text-zinc-700 leading-relaxed">
              The primary experimental model. Combines the complete suite of physical terrain, structural geology, and monsoon climatology predictors with WGEEP ecological zoning and satellite biophysical canopy metrics.
            </p>
            <p className="text-xs text-purple-900 italic font-serif">
              "Hypothesis H1 asserts that Model C will achieve statistically superior AUC-ROC and lower spatial transfer error compared to Model A, while Hypothesis H3 predicts that physical factors will dominate &gt; 70% of cumulative SHAP importance."
            </p>
          </div>
        )}
      </section>

      {/* Methodology Phases Stepper */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
            Execution Pipeline
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#163323] mt-1">
            End-to-End Workflow Phases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 'Phase 1',
              title: 'Data Ingestion & QC',
              desc: 'Streaming COGs from AWS S3, independent SHA-256 verification, and strict quarantine of unverified data (Stages 4.1–4.5 completed).',
              icon: <Database className="w-5 h-5 text-emerald-700" />
            },
            {
              step: 'Phase 2',
              title: '30m Grid Alignment',
              desc: 'Reprojection to UTM Zone 43N (EPSG:32643), bilinear/nearest-neighbor resampling, and grid snapping across 18 candidate variables.',
              icon: <Layers className="w-5 h-5 text-blue-700" />
            },
            {
              step: 'Phase 3',
              title: 'Spatial Block CV',
              desc: 'Partitioning Kerala into 50 km geographic blocks to prevent spatial data leakage and evaluate true spatial generalizability.',
              icon: <Workflow className="w-5 h-5 text-purple-700" />
            },
            {
              step: 'Phase 4',
              title: 'TreeSHAP Attribution',
              desc: 'Computing exact polynomial-time game-theoretic Shapley values to isolate the marginal information added by WGEEP variables.',
              icon: <BarChart2 className="w-5 h-5 text-amber-700" />
            }
          ].map((phase, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#163323] px-2 py-0.5 rounded bg-[#163323]/10">
                    {phase.step}
                  </span>
                  {phase.icon}
                </div>
                <h4 className="font-serif font-bold text-base text-zinc-900 mb-2">{phase.title}</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
