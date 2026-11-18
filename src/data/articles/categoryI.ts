import { Article } from '../../types';

export const CATEGORY_I_ARTICLES: Article[] = [
  {
    id: 'I1',
    categoryId: 'cat-i',
    categoryName: 'Limitations & Research Gaps',
    title: 'Data Limitations & Inventory Completeness',
    subtitle: 'Point vs polygon geometry, road-cut bias, and missing 1:50k vector geology',
    authorNote: 'In this chapter, I document the fundamental data limitations encountered in our study area, explaining how they constrain our modeling confidence.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'AUDIT_FLAG',
    abstract: 'Provides a critical forensic examination of the data limitations governing this research. Analyzes point versus polygon inventory geometry, infrastructure accessibility bias, canopy concealment of small scars, and the critical absence of continuous 1:50,000 vector lithology across Kerala (Issue U08).',
    keyTakeaways: [
      'Point Geometry Censoring: Collapsing 3D hillslope failures into single $X, Y$ coordinates obscures the difference between initiation scarps, transport tracks, and deposition fans.',
      'Accessibility & Reporting Bias: Post-disaster mapping concentrated along roads and populated valleys, leaving failures in interior primary forests under-reported.',
      'Missing 1:50,000 Vector Geology (Issue U08): Without continuous spatial lithology, lithological variables are limited to documentary observation sites and regional shear lines.',
      'Quarantined Geotechnical Data (Issue U01): 18.5 MPa UCS for laterite caprock cannot be used in quantitative stability modeling.'
    ],
    sections: [
      {
        id: 'sec-i1-1',
        title: '1. The Point Geometry Dilemma',
        content: `A fundamental data constraint in this project is that the primary statewide inventory (\`Kerela landslide.shp\`) consists of **PointZ features**, rather than full polygon delineations:
- A real debris flow in Wayanad or Idukki may initiate at an elevation of $1,400\text{ m}$ on a $34^\circ$ slope, travel through a $1.8\text{ km}$ channel, and deposit debris across an alluvial fan at $600\text{ m}$ elevation on a $6^\circ$ slope.
- When this entire geomorphic process is compressed into a single $(X, Y)$ point coordinate, any positional offset can cause the GIS to extract attributes from the deposition zone (gentle slope, low hazard) rather than the initiation scarp (steep slope, high hazard).
- *Research Mitigation:* We cross-referenced all training points against high-resolution DEM slope gradients, buffering points to ensure that sampled terrain values reflect the steepest initiation envelope within a 50m radius.`
      }
    ],
    relatedArticleIds: ['C11', 'C12', 'E2', 'E5', 'H3'],
    sources: [
      { citation: 'Guzzetti, F., et al. (2012). Landslide inventory maps: New tools for an old problem. Earth-Science Reviews, 112, 42–66.', verified: true }
    ]
  },
  {
    id: 'I2',
    categoryId: 'cat-i',
    categoryName: 'Limitations & Research Gaps',
    title: 'Methodological & Absence Sampling Constraints',
    subtitle: 'The challenge of generating defensible non-landslide pseudo-absences',
    authorNote: 'In Stage 3, we flagged Issue U11 as Critical. Here, I analyze the methodological perils of generating pseudo-absences for binary classification.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'AUDIT_FLAG',
    abstract: 'Examines the methodological challenge of generating defensible non-landslide pseudo-absences for binary machine learning classifiers (Issue U11). Analyzes the contamination risk of false negatives, evaluates environmental dissimilarity versus spatial buffering, and details our sensitivity auditing framework.',
    keyTakeaways: [
      'The Fundamental Absence Dilemma: Geologists map landslides (presences), but nobody maps "guaranteed non-landslides" (absences).',
      'The False-Negative Trap: Sampling absence points randomly across unmapped forested slopes risks picking locations that are physically unstable or contain unmapped historic scars.',
      'The Trivial Separation Trap: Sampling absences exclusively on flat coastal plains ($< 5^\circ$) allows models to achieve 99% accuracy simply by learning that flat ground does not slide, teaching the model nothing about steep hillslope stability.',
      'Solution for Stage 5: Target environmentally constrained pseudo-absences sampled from moderate-to-steep slopes ($15^\circ - 35^\circ$) with documented historical stability.'
    ],
    sections: [
      {
        id: 'sec-i2-1',
        title: '1. The Pseudo-Absence Dilemma (Issue U11)',
        content: `Supervised binary classification requires both positive instances ($y=1$) and negative instances ($y=0$). In landslide science, true confirmed absences do not exist:
- An unmapped slope may be completely stable, or it may be on the verge of catastrophic failure during the next cloudburst, or it may have failed 20 years ago with its scar healed by rapid tropical vegetation regrowth.
- If we sample pseudo-absences naively at random across Kerala, two fatal errors occur:
  1. **Contamination by False Negatives:** Points placed on steep, vulnerable slopes introduce contradictory training signals, confusing the classifier.
  2. **Trivial Flat-Terrain Separation:** If 90% of pseudo-absences fall on coastal plains (Alappuzha, Kochi), the algorithm learns only that flat coastal land is stable. When evaluated in highland taluks, the model fails completely.

*Controlling Guideline:* Under **Issue U11**, pseudo-absences in Stage 5 will be selected using **environmental dissimilarity sampling**, pairing landslide points with stable slopes of comparable topographic position.`
      }
    ],
    relatedArticleIds: ['F4', 'F10', 'G1', 'H3'],
    sources: [
      { citation: 'Barbet-Massin, M., et al. (2012). Selecting pseudo-absences for species distribution models: how, where and how many? Methods in Ecology and Evolution, 3(2), 327–338.', verified: true }
    ]
  },
  {
    id: 'I3',
    categoryId: 'cat-i',
    categoryName: 'Limitations & Research Gaps',
    title: 'Spatial Resolution Mismatches & Boundary Gaps',
    subtitle: 'Harmonizing 30m DEM, 10m LULC, 27km rainfall, and taluk polygons',
    authorNote: 'Scale harmonization involves compromises. Here, I analyze the resolution disparities between our satellite, meteorological, and administrative datasets.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'AUDIT_FLAG',
    abstract: 'Analyzes spatial resolution mismatches across the multi-source dataset suite. Compares 10m ESA WorldCover, 30m Copernicus DEM, 20m Sentinel-2 indices, 27.5 km IMD gridded rainfall, and broad taluka polygons, evaluating interpolation artifacts and boundary crosswalk uncertainties.',
    keyTakeaways: [
      'Multi-Scale Hierarchy: Spans over three orders of magnitude—from 10m satellite pixels to 27,500m meteorological grid cells and multi-hundred-square-kilometer taluk polygons.',
      'Rainfall Downscaling Limit: Bilinear resampling of 0.25° IMD rainfall to 30m creates smooth continuous contours, but cannot reproduce fine-scale orographic rain spikes on isolated mountain peaks.',
      'Taluka Crosswalk Ambiguity (Issue U10): Bifurcated taluks (e.g., Konni, Kattakkada) create boundary classification uncertainties documented with MEDIUM confidence scores.'
    ],
    sections: [
      {
        id: 'sec-i3-1',
        title: '1. Managing the Multi-Scale Spectrum',
        content: `| Data Layer | Native Resolution | Standardized Grid (30m) Operation | Potential Artifact / Scale Distortion |
|---|---|---|---|
| **ESA WorldCover 2021** | $10\text{ m} \times 10\text{ m}$ | Downsampled via nearest-neighbor to $30\text{ m}$. | Narrow linear features (streams, road cuts) may be partially thinned. |
| **Sentinel-2B L2A Indices** | $20\text{ m} \times 20\text{ m}$ | Resampled via bilinear interpolation to $30\text{ m}$. | Minimal distortion; smooth continuous biophysical gradient preserved. |
| **Copernicus DEM GLO-30** | $30\text{ m} \times 30\text{ m}$ | **Master Reference Grid (1:1 Native).** | Zero geometric resampling distortion; retains native morphometry. |
| **IMD Daily Rainfall** | $0.25^\circ \\approx 27.5\text{ km}$ | Resampled via bilinear interpolation to $30\text{ m}$. | Regional gradient preserved, but micro-valley cloudbursts cannot be resolved. |
| **WGEEP Taluk Polygons** | Multi-hundred $\text{km}^2$ | Rasterized to $30\text{ m}$ integer zone grid. | Step-function discontinuities at administrative borders. |`
      }
    ],
    relatedArticleIds: ['D3', 'D4', 'F6', 'H3'],
    sources: [
      { citation: 'Openshaw, S. (1984). The Modifiable Areal Unit Problem. Concepts and Techniques in Modern Geography, 38.', verified: true }
    ]
  },
  {
    id: 'I4',
    categoryId: 'cat-i',
    categoryName: 'Limitations & Research Gaps',
    title: 'Temporal Baseline Discrepancies',
    subtitle: '2018 disaster inventory vs 2021 WorldCover baseline vs 2024 S2 imagery',
    authorNote: 'Earth observation data are snapshots in time. Here, I document the temporal offsets between our landslide inventory and satellite image acquisitions.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'AUDIT_FLAG',
    abstract: 'Examines temporal baseline discrepancies across the research assets. Analyzes the chronological offset between the primary landslide inventory (August 2018), the elevation baseline (TanDEM-X 2011–2015), the land cover composite (2021), and multi-spectral vegetation indices (March 2024).',
    keyTakeaways: [
      'Temporal Inversion: The primary landslide scars occurred in August 2018, whereas ESA WorldCover reflects 2021 and Sentinel-2 reflects March 2024.',
      'Post-Disaster Scars: Large 2018 landslide scars appear in 2021 WorldCover as Bare Soil (Class 60) or regenerating Grassland (Class 30), rather than the pre-failure tree canopy.',
      'Research Mitigation: The 2021 WorldCover layer must be interpreted as a post-disaster landscape baseline; optical indices establish dry-season physiological vigor rather than event-coincident conditions.'
    ],
    sections: [
      {
        id: 'sec-i4-1',
        title: '1. Chronological Timeline and Impact',
        content: `In an ideal geohazard study, all environmental predictors would be captured on the exact day preceding slope failure. In reality, spaceborne datasets span a multi-year window:
- **2011–2015:** TanDEM-X radar acquisition (Copernicus DEM topography).
- **August 2018:** Extreme monsoon deluge; 4,728 mapped landslides initiate.
- **Calendar Year 2021:** ESA WorldCover 10m composite generated.
- **26 March 2024:** Sentinel-2B low-cloud dry-season surface reflectance acquired.

*Key Impact:* Because the 2021 land cover product post-dates the 2018 disaster, the bare rock and exposed subsoil of large scars were classified as Class 60 (Bare / sparse vegetation). Downstream models must account for this temporal post-conditioning effect.`
      }
    ],
    relatedArticleIds: ['A7', 'E7', 'E8', 'H3'],
    sources: [
      { citation: 'Stage 4.5 Kerala Land Cover Acquisition Report (Gadgill Project, 2026).', verified: true }
    ]
  },
  {
    id: 'I5',
    categoryId: 'cat-i',
    categoryName: 'Limitations & Research Gaps',
    title: 'Model Limitations & Simplifications',
    subtitle: 'Binary static classification vs dynamic hydrological trigger physics',
    authorNote: 'Machine learning is powerful, but it simplifies physical reality. Here, I review the inherent model limitations of static susceptibility classification.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'AUDIT_FLAG',
    abstract: 'Reviews the mathematical and conceptual simplifications inherent in static machine learning susceptibility models. Compares statistical pattern recognition against physically based transient hydrological models (TRIGRS), detailing why static models cannot predict dynamic failure timing.',
    keyTakeaways: [
      'Static vs Dynamic: Susceptibility models predict WHERE slopes are prone to failure, but cannot predict WHEN failure will initiate during a real-time storm.',
      'Absence of Subsurface Geotechnical Layers: Standard machine learning models lack 3D spatial grids of soil depth, bedrock permeability, and cohesion.',
      'Black-Box Vulnerability: Complex ensemble models can learn spurious statistical correlations if not constrained by explainable AI audits (SHAP).'
    ],
    sections: [
      {
        id: 'sec-i5-1',
        title: '1. Pattern Recognition vs Geotechnical Physics',
        content: `Machine learning susceptibility models operate on statistical pattern recognition:
- They identify correlations between past landslide locations and static terrain layers.
- They do **NOT solve the partial differential equations** of transient unsaturated infiltration (Richards equation) or limit equilibrium shear failure.
- If an unmapped slope has identical physical properties to a failed slope, machine learning will correctly flag it as high susceptibility. However, it cannot determine whether that slope requires $100\text{ mm}$ or $500\text{ mm}$ of rain to trigger failure. Static susceptibility must be viewed as an spatial planning baseline, not an early-warning forecasting tool.`
      }
    ],
    relatedArticleIds: ['C10', 'F10', 'G2'],
    sources: [
      { citation: 'Baum, R. L., et al. (2010). TRIGRS—A Fortran program for transient rainfall infiltration and grid-based regional slope-stability analysis. US Geological Survey Open-File Report 2008-1159.', verified: true }
    ]
  },
  {
    id: 'I6',
    categoryId: 'cat-i',
    categoryName: 'Limitations & Research Gaps',
    title: 'Interpretation Limitations & False Causation',
    subtitle: 'Spatial association != causation; tree cover != forest; NDVI != ESZ',
    authorNote: 'The most dangerous errors occur during data interpretation. Here, I document three primary cognitive fallacies that must be avoided in this research.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'AUDIT_FLAG',
    abstract: 'Synthesizes the core scientific interpretation traps identified across the project. Details why spatial overlap between landslides and tree cover must not be equated with causation, why satellite tree cover must not be reported as natural forest, and why optical greenness does not equal ecological sensitivity.',
    keyTakeaways: [
      'Fallacy 1 (Spatial Association != Causation): 88.29% of 2018 landslides occurred in Tree Cover because steep Ghats slopes are naturally tree-covered; tree cover is the environmental medium on steep terrain, not the cause of sliding.',
      'Fallacy 2 (Tree Cover != Natural Forest): Global satellite products bundle commercial rubber and tea monocultures into Class 10; reporting 85.89% tree cover as "natural forest" is scientifically false.',
      'Fallacy 3 (NDVI != Ecological Sensitivity): High NDVI measures chlorophyll absorption; commercial rubber monocultures frequently exhibit higher pre-monsoon NDVI than biodiverse native shola grasslands.'
    ],
    sections: [
      {
        id: 'sec-i6-1',
        title: '1. The Three Golden Interpretation Rules',
        content: `To ensure our findings withstand rigorous academic peer review, this research enforces three inviolable interpretation rules:

1. **Rule 1: Never Infer Causation from Spatial Overlap Alone**
   - In Stage 4.5, intersecting 4,756 landslides with WorldCover revealed that **$4,199$ scars ($88.29\%$) fell in Class 10 (Tree Cover)**.
   - An amateur researcher might conclude: *"Trees cause landslides!"* or conversely *"Forests failed completely!"*
   - Both conclusions are false. Slopes $> 20^\circ$ in Kerala are naturally covered by woody canopy. Landslides occur there because of steep slope angles and extreme groundwater saturation, not because trees caused failure.
2. **Rule 2: Never Conflate Tree Cover with Natural Primary Forest**
   - Commercial rubber, tea, coffee, cardamom, eucalyptus, and teak plantations are all classified as "Tree Cover" under international satellite standards. Plantations possess vastly modified root architecture, artificial drainage terracing, and reduced biodiversity compared to native rainforests.
3. **Rule 3: Never Treat Optical Vegetation Indices as Ecological Sensitivity**
   - NDVI and NDMI measure canopy greenness and water thickness. They cannot measure species endemism, ecological resilience, or the conservation priority defined by WGEEP.`
      }
    ],
    relatedArticleIds: ['A1', 'B8', 'D16', 'D18', 'E7'],
    sources: [
      { citation: 'Stage 4.5 Kerala Land Cover Acquisition Report (Gadgill Project, 2026).', verified: true }
    ]
  }
];
