import React, { useState } from 'react';
import { Database, ShieldCheck, AlertTriangle, Maximize2, ExternalLink, HardDrive, Filter, CheckCircle2 } from 'lucide-react';
import { SPATIAL_DATASETS } from '../data/dataCatalog';
import { MapPreviewModal } from '../components/MapPreviewModal';
import { SpatialDatasetSpec } from '../types';

export const DataCataloguePage: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [selectedPreview, setSelectedPreview] = useState<SpatialDatasetSpec | null>(null);

  const filtered = SPATIAL_DATASETS.filter(ds => {
    if (filterStatus === 'ALL') return true;
    return ds.dataQualityStatus === filterStatus;
  });

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-10">
      {/* Page Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono uppercase tracking-widest mb-3">
          <Database className="w-3.5 h-3.5" />
          Spatial Data Repository
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#163323]">
          Research Spatial Data Catalogue
        </h1>
        <p className="mt-2 text-base text-zinc-600 max-w-3xl leading-relaxed">
          Comprehensive technical documentation, cryptographic hashes, and known scientific limitations for all verified elevation, administrative, geological, meteorological, and land-cover datasets.
        </p>

        {/* Filter Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter Quality Status:
          </span>
          {['ALL', 'VALIDATED', 'PROVISIONALLY_ACCEPTED'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                filterStatus === status
                  ? 'bg-[#163323] text-white shadow-xs'
                  : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Dataset Cards Grid */}
      <div className="space-y-8">
        {filtered.map(ds => (
          <div
            key={ds.id}
            className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:border-[#163323]/30 transition-all"
          >
            {/* Left Preview Image if available */}
            {ds.previewImage && (
              <div
                className="lg:w-80 xl:w-96 bg-zinc-900 relative group cursor-pointer flex-shrink-0 flex items-center justify-center overflow-hidden min-h-[220px]"
                onClick={() => setSelectedPreview(ds)}
              >
                <img
                  src={ds.previewImage}
                  alt={ds.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to expand preview</span>
                </div>
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white font-mono text-[10px]">
                  {ds.stage}
                </span>
              </div>
            )}

            {/* Right Metadata Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-800">
                    {ds.authority}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                    ds.dataQualityStatus === 'VALIDATED'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {ds.dataQualityStatus}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#163323] leading-snug">
                  {ds.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {ds.description}
                </p>

                {/* Technical Specs Table */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-zinc-100 text-xs font-mono">
                  <div>
                    <span className="text-zinc-400 block text-[10px]">RESOLUTION</span>
                    <span className="font-semibold text-zinc-800">{ds.nativeResolution}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px]">COORDINATE REF</span>
                    <span className="font-semibold text-zinc-800">{ds.crs}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px]">FORMAT</span>
                    <span className="font-semibold text-zinc-800">{ds.format}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px]">VOLUME</span>
                    <span className="font-semibold text-zinc-800">{ds.downloadSize || 'N/A'}</span>
                  </div>
                </div>

                {/* Known Limitations Box */}
                {ds.knownLimitations && ds.knownLimitations.length > 0 && (
                  <div className="mt-4 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                    <span className="text-[11px] font-mono font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                      Known Scientific Limitations
                    </span>
                    <ul className="space-y-1 text-xs text-zinc-700">
                      {ds.knownLimitations.map((lim, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-700 font-mono">&bull;</span>
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer Checksum */}
              {ds.checksum && (
                <div className="pt-3 border-t border-zinc-100 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span className="truncate max-w-md">SHA-256: {ds.checksum}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Bitwise Verified
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Map Preview */}
      {selectedPreview && (
        <MapPreviewModal
          isOpen={true}
          onClose={() => setSelectedPreview(null)}
          imageSrc={selectedPreview.previewImage!}
          title={selectedPreview.name}
          caption={selectedPreview.description}
          sourceDataset={selectedPreview.stage}
        />
      )}
    </div>
  );
};
