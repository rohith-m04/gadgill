import React from 'react';
import { History, ShieldCheck, AlertTriangle, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { UnresolvedIssuesInteractiveTracker } from '../components/VisualDiagrams';

export const DecisionsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-12">
      {/* Page Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono uppercase tracking-widest mb-3">
          <History className="w-3.5 h-3.5" />
          Research Governance & Audit Archive
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#163323]">
          Research Decisions & Master Unresolved Issues
        </h1>
        <p className="mt-2 text-base text-zinc-600 max-w-3xl leading-relaxed">
          Full auditable documentation of major methodological choices, principled data exclusions, chronological stage history, and the controlling 12-issue governance register.
        </p>
      </div>

      {/* Interactive Unresolved Issues Tracker Embedded */}
      <UnresolvedIssuesInteractiveTracker />

      {/* Chronological Stage History Timeline */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
            Chronological Archive
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#163323] mt-1">
            Project Stage Progression & Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-800/30 pl-6 ml-3 space-y-8">
          {[
            {
              stage: 'Stage 1: Reconnaissance & Conception',
              status: 'Completed',
              desc: 'Identified the persistent scientific gap between WGEEP ecological zoning and geotechnical landslide modeling; established PRISMA review protocol across 150+ papers; formulated the tri-model comparative framework (Models A, B, C).'
            },
            {
              stage: 'Stage 2: Source Extraction & Database Ingestion',
              status: 'Completed',
              desc: 'Extracted raw GIS layers, the GSI 2018 shapefile (4,728 point scars), curated 23 disaster records, and rock mass geotechnical measurements from SRO-16991.'
            },
            {
              stage: 'Stage 3: Forensic Audit & Stage 4 Preparation',
              status: 'Completed & Controlling',
              desc: 'Discovered synthetic terrain rasters and unverified geotechnical numbers; quarantined row 021 (18.5 MPa laterite caprock UCS); codified the 12-issue Unresolved-Issues Register (U01–U12) to govern all downstream work.'
            },
            {
              stage: 'Stage 4.1: Kerala DEM Acquisition & QC',
              status: 'Completed (GLO-30 Acquired)',
              desc: 'Acquired 8 tiles of authentic Copernicus DEM GLO-30 (30m DSM); verified checksums; derived slope, aspect, curvature, TRI, and TPI; audited edge artifacts in Stage 4.1.1; documented DSM canopy top limitation.'
            },
            {
              stage: 'Stage 4.2 & 4.2.1: Kerala Administrative Boundaries & Crosswalk',
              status: 'Completed (Reconciled)',
              desc: 'Acquired 61 historical taluk boundary polygons; reconciled 41 WGEEP Kerala taluka entries into 34 High, 6 Medium, and 1 Low confidence matches.'
            },
            {
              stage: 'Stage 4.3: Kerala Geological & Structural Framework',
              status: 'Completed (Documentary)',
              desc: 'Audited 6 GSI field sites and 7 regional shear zones (Palghat Gap, Moyar, Achankovil, Bavali); formally recorded the continuous 1:50k vector geology data gap under Issue U08.'
            },
            {
              stage: 'Stage 4.4: Kerala Rainfall & Climatology',
              status: 'Completed (IMD Acquired)',
              desc: 'Acquired IMD daily gridded precipitation (0.25° NetCDF4) from 2018–2024; audited the August 2018 storm anomaly; quarantined 14 unverified rainfall records; resolved Issue U03 for regional climatology.'
            },
            {
              stage: 'Stage 4.5: Kerala Land Cover & Vegetation',
              status: 'Completed & Validated',
              desc: 'Downloaded 4 tiles of 10m ESA WorldCover 2021 (229.2 MB); mosaicked and masked to Kerala; processed cloud-masked 20m Sentinel-2B L2A NDVI and NDMI; established that 88.29% of landslides fall in Tree Cover (Class 10) due to steep slope medium rather than causation.'
            },
            {
              stage: 'Stage 5+: Machine Learning & Spatial Block CV',
              status: 'Upcoming Horizon',
              desc: 'Mandatory Hold Condition honored. Pending authorization to construct standardized 30m feature matrices, generate environmentally constrained pseudo-absences (U11), and execute comparative modeling.'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-700 ring-4 ring-white" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif font-bold text-base text-zinc-900">{item.stage}</h4>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {item.status}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed max-w-3xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
