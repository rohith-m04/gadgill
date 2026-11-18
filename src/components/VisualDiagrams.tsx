import React, { useState } from 'react';
import { Layers, ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, Activity, Sliders, Droplets, Mountain, Trees, Compass } from 'lucide-react';
import { UNRESOLVED_ISSUES } from '../data/unresolvedIssues';

export const ConceptualFrameworkDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'physical' | 'ecological' | 'models'>('all');

  return (
    <div className="my-8 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 mb-6 border-b border-zinc-200 gap-3">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            Interactive Research Architecture
          </span>
          <h4 className="text-lg font-serif font-bold text-[#163323] mt-1">
            Integration of WGEEP Ecological Framework with Landslide Mechanics
          </h4>
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-zinc-100 rounded-lg text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'all' ? 'bg-[#163323] text-white font-medium shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            All Streams
          </button>
          <button
            onClick={() => setActiveTab('physical')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'physical' ? 'bg-amber-800 text-white font-medium shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Physical Stream
          </button>
          <button
            onClick={() => setActiveTab('ecological')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'ecological' ? 'bg-emerald-800 text-white font-medium shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Ecological Stream
          </button>
        </div>
      </div>

      {/* Architecture Graphic */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {/* Stream 1: Physical Slope Mechanics */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            activeTab === 'ecological' ? 'opacity-40 scale-98' : 'opacity-100'
          } bg-amber-50/60 border-amber-200`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Mountain className="w-5 h-5 text-amber-800" />
            <h5 className="font-bold text-sm text-amber-950 font-serif">1. Physical Slope Mechanics</h5>
          </div>
          <p className="text-xs text-zinc-600 mb-3 leading-relaxed">
            Geomorphological, geological, and hydrologic conditioning factors governing shear stress vs strength.
          </p>
          <div className="space-y-1.5 text-xs">
            <div className="p-2 bg-white rounded border border-amber-200/80 font-mono text-[11px] text-zinc-700 flex justify-between">
              <span>Copernicus DEM (30m)</span>
              <span className="text-amber-800 font-semibold">Slope, Aspect, TRI, TPI</span>
            </div>
            <div className="p-2 bg-white rounded border border-amber-200/80 font-mono text-[11px] text-zinc-700 flex justify-between">
              <span>GSI Structural Faults</span>
              <span className="text-amber-800 font-semibold">Shear Zones, Lineaments</span>
            </div>
            <div className="p-2 bg-white rounded border border-amber-200/80 font-mono text-[11px] text-zinc-700 flex justify-between">
              <span>IMD Daily Gridded</span>
              <span className="text-amber-800 font-semibold">Antecedent 2018 Deluge</span>
            </div>
            <div className="p-2 bg-white rounded border border-amber-200/80 font-mono text-[11px] text-zinc-700 flex justify-between">
              <span>ESA WorldCover (10m)</span>
              <span className="text-amber-800 font-semibold">11 Standardized Classes</span>
            </div>
          </div>
        </div>

        {/* Stream 2: Ecological Sensitivity Framework */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            activeTab === 'physical' ? 'opacity-40 scale-98' : 'opacity-100'
          } bg-emerald-50/70 border-emerald-200`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Trees className="w-5 h-5 text-emerald-800" />
            <h5 className="font-bold text-sm text-emerald-950 font-serif">2. Ecological Sensitivity Framework</h5>
          </div>
          <p className="text-xs text-zinc-600 mb-3 leading-relaxed">
            WGEEP policy recommendations, socio-ecological zonation, and biophysical canopy indices.
          </p>
          <div className="space-y-1.5 text-xs">
            <div className="p-2 bg-white rounded border border-emerald-200/80 font-mono text-[11px] text-zinc-700 flex justify-between">
              <span>WGEEP Zonation</span>
              <span className="text-emerald-800 font-semibold">ESZ-1, ESZ-2, ESZ-3</span>
            </div>
            <div className="p-2 bg-white rounded border border-emerald-200/80 font-mono text-[11px] text-zinc-700 flex justify-between">
              <span>Taluk Crosswalk</span>
              <span className="text-emerald-800 font-semibold">61 Historical Polygons</span>
            </div>
            <div className="p-2 bg-white rounded border border-emerald-200/80 font-mono text-[11px] text-zinc-700 flex justify-between">
              <span>Sentinel-2 NDVI (20m)</span>
              <span className="text-emerald-800 font-semibold">Canopy Chlorophyll Vigor</span>
            </div>
            <div className="p-2 bg-white rounded border border-emerald-200/80 font-mono text-[11px] text-zinc-700 flex justify-between">
              <span>Sentinel-2 NDMI (20m)</span>
              <span className="text-emerald-800 font-semibold">Canopy Liquid Moisture</span>
            </div>
          </div>
        </div>

        {/* Stream 3: Comparative Machine Learning Engine */}
        <div className="p-4 rounded-xl border bg-slate-50 border-slate-300">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5 text-[#163323]" />
            <h5 className="font-bold text-sm text-zinc-900 font-serif">3. Tri-Model Comparative Engine</h5>
          </div>
          <p className="text-xs text-zinc-600 mb-3 leading-relaxed">
            Parallel training under identical Spatial Block Cross-Validation and TreeSHAP attribution.
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded bg-[#163323]/5 border border-[#163323]/20">
              <span className="font-bold text-[#163323] block mb-0.5">Model A (Conventional):</span>
              <span className="text-zinc-600 text-[11px]">Terrain + Geology + Rainfall + LULC only</span>
            </div>
            <div className="p-2.5 rounded bg-emerald-800/5 border border-emerald-800/20">
              <span className="font-bold text-emerald-900 block mb-0.5">Model B (Ecological):</span>
              <span className="text-zinc-600 text-[11px]">WGEEP ESZ + Distance to ESZ-1 + NDVI + NDMI</span>
            </div>
            <div className="p-2.5 rounded bg-purple-900/5 border border-purple-900/20">
              <span className="font-bold text-purple-950 block mb-0.5">Model C (Integrated):</span>
              <span className="text-zinc-600 text-[11px]">All Model A + Model B candidate factors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation Output Bar */}
      <div className="mt-6 p-4 rounded-xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between text-xs gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span><strong>Rigorous Evaluation Protocol:</strong> Spatial Block CV (No Leakage) + TreeSHAP Game-Theoretic Attribution</span>
        </div>
        <span className="font-mono text-[11px] text-emerald-300">
          DeLong AUC Test (p &lt; 0.05) &bull; Net Reclassification Index &bull; Brier Score
        </span>
      </div>
    </div>
  );
};

export const LandslideMechanismsExplorer: React.FC = () => {
  const [selectedMechanism, setSelectedMechanism] = useState<'translational' | 'rotational' | 'debris-flow' | 'rockfall'>('translational');
  const [saturation, setSaturation] = useState<number>(75);

  const mechanisms = {
    translational: {
      name: 'Translational Planar Debris Slide',
      kinematics: 'Planar shear failure along pre-existing structural weakness parallel to slope face.',
      westernGhatsRole: 'Dominant initiation mode (> 80% of 2018 scars). Occurs at saprolite-bedrock contact at 1.5–3.0m depth.',
      slopeWindow: '22° to 38°',
      material: 'Coarse tropical saprolite / colluvium',
      trigger: 'Positive pore-water pressure spike destroying effective normal stress.'
    },
    'debris-flow': {
      name: 'Channelized Debris Flow ("Urulpottal")',
      kinematics: 'Rapid downslope surge of saturated, non-Newtonian viscoplastic mud and boulders.',
      westernGhatsRole: 'Responsible for > 95% of fatalities (Pettimudi 2020, Kavalappara 2019, Meppadi 2024). Surges down headwater streams for kilometers.',
      slopeWindow: 'Initiates at > 28°; flows across < 8° valley floors',
      material: 'Water-lubricated slurry with multi-ton corestone boulders',
      trigger: 'Liquefaction of translational slide mass into drainage channels.'
    },
    rotational: {
      name: 'Rotational Slump',
      kinematics: 'Curved, concave-upward slip surface producing backward tilt of the displaced block.',
      westernGhatsRole: 'Rare in undisturbed natural slopes; common in unengineered road cuts, highway embankments, and deep agricultural terrace cuts.',
      slopeWindow: '18° to 30°',
      material: 'Homogeneous thick lithomargic clay / deep fill',
      trigger: 'Toe excavation removing passive lateral earth resistance.'
    },
    rockfall: {
      name: 'Structurally Controlled Rockfall',
      kinematics: 'Free-fall, bouncing, and rolling of detached rock blocks along daylighting joints.',
      westernGhatsRole: 'Occurs along sheer charnockite cliff faces (Silent Valley, Ponmudi) and active quarry scarps.',
      slopeWindow: '> 50° precipitous escarpments',
      material: 'Hard, unweathered crystalline charnockite bedrock',
      trigger: 'Hydrostatic joint water wedging and root penetration.'
    }
  };

  const current = mechanisms[selectedMechanism];
  const factorOfSafety = Math.max(0.65, (1.6 - (saturation / 100) * 0.95)).toFixed(2);

  return (
    <div className="my-8 p-6 rounded-2xl bg-[#faf9f4] border border-zinc-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 mb-4 border-b border-zinc-200 gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold flex items-center gap-1.5">
            <Activity className="w-4 h-4" />
            Interactive Geomechanics Simulator
          </span>
          <h4 className="text-lg font-serif font-bold text-[#163323] mt-1">
            Western Ghats Failure Kinematics & Pore-Pressure Simulator
          </h4>
        </div>
      </div>

      {/* Mechanism Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {(Object.keys(mechanisms) as Array<keyof typeof mechanisms>).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedMechanism(key)}
            className={`p-2.5 rounded-xl border text-xs font-serif font-bold text-center transition-all cursor-pointer ${
              selectedMechanism === key
                ? 'bg-[#163323] text-white border-[#163323] shadow-xs'
                : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100'
            }`}
          >
            {mechanisms[key].name}
          </button>
        ))}
      </div>

      {/* Mechanism Detail Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 rounded-xl border border-zinc-200">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold block mb-1">
            Kinematic Profile
          </span>
          <h5 className="font-serif font-bold text-base text-[#163323] mb-2">{current.name}</h5>
          <p className="text-xs text-zinc-600 mb-3 leading-relaxed">{current.kinematics}</p>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500 font-medium">Western Ghats Frequency:</span>
              <span className="font-semibold text-zinc-800 text-right max-w-[200px]">{current.westernGhatsRole}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500 font-medium">Critical Slope Window:</span>
              <span className="font-mono font-semibold text-amber-800">{current.slopeWindow}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500 font-medium">Primary Trigger:</span>
              <span className="text-zinc-800 text-right">{current.trigger}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Pore-Pressure Slider Simulation */}
        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#163323] flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-blue-600" />
                Transient Saturation Level ({saturation}%)
              </span>
              <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                parseFloat(factorOfSafety) < 1.0 ? 'bg-rose-600 text-white animate-pulse' : 'bg-emerald-700 text-white'
              }`}>
                FS = {factorOfSafety} ({parseFloat(factorOfSafety) < 1.0 ? 'FAILURE' : 'STABLE'})
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={(e) => setSaturation(parseInt(e.target.value))}
              className="w-full accent-[#163323] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
              <span>0% (Dry Season)</span>
              <span>50% (Field Capacity)</span>
              <span>100% (Full Liquefaction)</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded-lg border border-emerald-200/80 text-xs">
            <span className="font-semibold text-zinc-800 block mb-1">Infinite Slope Physics:</span>
            <p className="text-zinc-600 leading-relaxed text-[11px]">
              As saturation rises from 0% to 100%, matric suction vanishes and buoyant pore-water pressure ($u = \gamma_w h_w \cos^2\beta$) directly counteracts effective normal stress, collapsing shear strength:
              <br />
              <code className="font-mono text-amber-900 mt-1 block">
                $\tau_f = c' + (\sigma_n - u)\tan\phi'$
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UnresolvedIssuesInteractiveTracker: React.FC = () => {
  const [filterSeverity, setFilterSeverity] = useState<'ALL' | 'Critical' | 'High' | 'Medium'>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'OPEN' | 'RESOLVED'>('ALL');

  const filtered = UNRESOLVED_ISSUES.filter(issue => {
    if (filterSeverity !== 'ALL' && issue.severity !== filterSeverity) return false;
    if (filterStatus !== 'ALL' && issue.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="my-8 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 mb-4 border-b border-zinc-200 gap-3">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-rose-800 font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            Controlling Governance Matrix
          </span>
          <h4 className="text-lg font-serif font-bold text-[#163323] mt-1">
            Master Unresolved-Issues Register (U01–U12)
          </h4>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg text-xs">
            {(['ALL', 'Critical', 'High', 'Medium'] as const).map(sev => (
              <button
                key={sev}
                onClick={() => setFilterSeverity(sev)}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  filterSeverity === sev ? 'bg-[#163323] text-white font-medium' : 'text-zinc-600'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg text-xs">
            {(['ALL', 'OPEN', 'RESOLVED'] as const).map(stat => (
              <button
                key={stat}
                onClick={() => setFilterStatus(stat)}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  filterStatus === stat ? 'bg-emerald-800 text-white font-medium' : 'text-zinc-600'
                }`}
              >
                {stat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Issues Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 text-zinc-500 font-mono uppercase text-[11px]">
              <th className="p-2.5">ID</th>
              <th className="p-2.5">Issue Title & Description</th>
              <th className="p-2.5">Severity</th>
              <th className="p-2.5">Status</th>
              <th className="p-2.5">Treatment in Stage 4</th>
              <th className="p-2.5">Condition for Resolution</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {filtered.map(issue => (
              <tr key={issue.id} className="hover:bg-zinc-50/80 transition-colors">
                <td className="p-2.5 font-mono font-bold text-[#163323]">{issue.id}</td>
                <td className="p-2.5 max-w-xs">
                  <span className="font-semibold text-zinc-900 block">{issue.title}</span>
                  <span className="text-[11px] text-zinc-500 font-mono">{issue.domain}</span>
                </td>
                <td className="p-2.5">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${
                    issue.severity === 'Critical' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                    issue.severity === 'High' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                    'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    {issue.severity}
                  </span>
                </td>
                <td className="p-2.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                    issue.status === 'RESOLVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-200 text-zinc-700'
                  }`}>
                    {issue.status}
                  </span>
                </td>
                <td className="p-2.5 text-zinc-600 max-w-xs text-[11px]">{issue.currentTreatment}</td>
                <td className="p-2.5 text-zinc-600 max-w-xs text-[11px] italic">{issue.resolutionCondition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
