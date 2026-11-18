import React from 'react';
import { X, ExternalLink, Maximize2, ShieldCheck } from 'lucide-react';

interface MapPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  sourceDataset?: string;
}

export const MapPreviewModal: React.FC<MapPreviewModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  sourceDataset
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative bg-[#0c1811] text-zinc-100 max-w-5xl w-full rounded-2xl overflow-hidden border border-emerald-900/60 shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 border-b border-emerald-900/50 flex items-center justify-between bg-[#11241a]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-800/40 text-emerald-300 border border-emerald-700/50 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                Verified Research Asset
              </span>
              <span className="text-xs text-zinc-400 font-mono">{sourceDataset}</span>
            </div>
            <h3 className="text-base font-serif font-bold text-white mt-1">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-emerald-900/50 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Display */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/40">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg border border-zinc-800"
          />
        </div>

        {/* Caption Footer */}
        {caption && (
          <div className="p-3.5 bg-[#0e1e16] border-t border-emerald-900/50 text-xs text-zinc-300 leading-relaxed flex items-center justify-between">
            <p className="max-w-3xl italic">{caption}</p>
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium ml-4 flex-shrink-0"
            >
              <span>Open Raw</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
