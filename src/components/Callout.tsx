import React from 'react';
import { AlertTriangle, Info, CheckCircle2, AlertOctagon, ShieldAlert, BookOpen } from 'lucide-react';

interface CalloutProps {
  type?: 'note' | 'important' | 'warning' | 'rule' | 'audit' | 'quote';
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ type = 'note', title, children }) => {
  const styles = {
    note: {
      bg: 'bg-emerald-50/80 border-emerald-300 text-emerald-950',
      icon: <Info className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />,
      defaultTitle: 'Research Note'
    },
    important: {
      bg: 'bg-amber-50/90 border-amber-300 text-amber-950',
      icon: <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />,
      defaultTitle: 'Critical Requirement'
    },
    warning: {
      bg: 'bg-rose-50/80 border-rose-300 text-rose-950',
      icon: <AlertOctagon className="w-5 h-5 text-rose-700 flex-shrink-0 mt-0.5" />,
      defaultTitle: 'Methodological Warning'
    },
    rule: {
      bg: 'bg-[#183925]/5 border-[#183925]/30 text-[#122c1d]',
      icon: <ShieldAlert className="w-5 h-5 text-[#183925] flex-shrink-0 mt-0.5" />,
      defaultTitle: 'Strict Scientific Rule'
    },
    audit: {
      bg: 'bg-purple-50/80 border-purple-300 text-purple-950',
      icon: <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0 mt-0.5" />,
      defaultTitle: 'Forensic Audit Finding'
    },
    quote: {
      bg: 'bg-stone-50 border-stone-300 text-stone-900 italic font-serif',
      icon: <BookOpen className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5 not-italic" />,
      defaultTitle: 'Primary Source Excerpt'
    }
  };

  const current = styles[type];

  return (
    <div className={`my-6 p-4 rounded-xl border ${current.bg} shadow-xs transition-all`}>
      <div className="flex items-start gap-3">
        {current.icon}
        <div className="flex-1 text-sm leading-relaxed">
          {title || current.defaultTitle ? (
            <h5 className="font-semibold text-xs uppercase tracking-wider mb-1.5 opacity-90 not-italic font-sans">
              {title || current.defaultTitle}
            </h5>
          ) : null}
          <div className="space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
