import { Article } from '../../types';

export const CATEGORY_H_ARTICLES: Article[] = [
  {
    id: 'H1',
    categoryId: 'cat-h',
    categoryName: 'Research Progress & Decisions',
    title: 'Stage-by-Stage Chronological History',
    subtitle: 'Reconnaissance, extraction, forensic audits, and Stage 4 spatial acquisition',
    authorNote: 'In this chapter, I document the complete evolutionary history of our project across Stages 1, 2, 3, and 4, detailing each milestone achieved.',
    readingTime: '11 min',
    lastUpdated: 'November 2026',
    status: 'SOURCE_DERIVED',
    abstract: 'Provides a comprehensive chronological account of project execution from initial reconnaissance through data extraction, forensic reconciliation, and Stage 4 authentic spatial data acquisition. Details the forensic audit that uncovered unverified synthetic rasters in Stage 3, and the rigorous recovery across Stages 4.1 to 4.5.',
    diagramType: 'unresolved-register',
    keyTakeaways: [
      'Stage 1 (Reconnaissance): Scoped research literature, identified the WGEEP integration gap, and formulated primary research questions.',
      'Stage 2 (Source Extraction): Extracted raw data assets, shapefiles, tabular disaster reports, and initial geotechnical tables.',
      'Stage 3 (Forensic Audit & Reconciliation): Conducted a comprehensive audit that revealed synthetic terrain rasters, unverified geotechnical numbers, and missing taluka polygons; established the controlling 12-issue Unresolved-Issues Register (U01–U12).',
      'Stage 4 (Spatial Acquisition): Successfully acquired and validated authentic Copernicus DEM GLO-30 (4.1), Kerala administrative boundaries (4.2), structural geology (4.3), IMD gridded rainfall (4.4), and ESA WorldCover 2021 (4.5).'
    ],
    sections: [
      {
        id: 'sec-h1-1',
        title: '1. Chronological Stage Progression',
        content: `### Stage 1: Reconnaissance and Research Inception (Early 2026)
- Evaluated the international geohazard literature and the Indian public policy debate regarding the Gadgil Report.
- Formulated the central research question and established the comparative three-model framework (Model A: Conventional, Model B: Ecological, Model C: Integrated).

### Stage 2: Source Extraction and Database Ingestion
- Harvested raw spatial datasets, including the Geological Survey of India 2018 landslide point shapefile (\`Kerela landslide.shp\`), modern curated disaster event tables, and geotechnical reports (\`SRO-16991.pdf\`).

### Stage 3: Forensic Audit, Verification & Reconciliation
- Conducted a forensic audit of all extracted files. 
- **The Critical Audit Discovery:** Discovered that earlier terrain and DEM rasters were unverified and potentially synthetic; uncovered that geotechnical record 021 (18.5 MPa UCS for laterite caprock) lacked source evidence; identified that taluk administrative polygons were missing for spatial joins.
- **Formal Stage 3 Closure:** Formally created the **Master Unresolved-Issues Register (U01–U12)** to govern all future research, mandating that no synthetic data or unverified claims may enter downstream models.

### Stage 4: Authentic Spatial Data Acquisition Pipeline (Completed Stages 4.1–4.5)
- **Stage 4.1 (Kerala DEM):** Acquired 8 tiles of authentic Copernicus DEM GLO-30 (30m DSM); mosaicked, derived terrain morphometry, and audited edge artifacts (Stage 4.1.1).
- **Stage 4.2 & 4.2.1 (Administrative Boundaries):** Acquired 61 historical taluk polygons; reconciled 41 WGEEP Kerala taluka entries into 34 High, 6 Medium, and 1 Low confidence matches.
- **Stage 4.3 (Geological Framework):** Cataloged 6 GSI observation sites, audited 7 regional shear zones, and documented lithological GIS data gaps (Issue U08).
- **Stage 4.4 (Rainfall & Climatology):** Acquired IMD daily gridded precipitation (0.25° NetCDF4) from 2018 to 2024; audited the August 2018 deluge; quarantined 14 unverified station records.
- **Stage 4.5 (Land Cover & Vegetation):** Downloaded 4 tiles of 10m ESA WorldCover 2021 (229.2 MB); mosaicked and clipped to Kerala ($54,285 \times 30,836$ pixels); processed cloud-masked 20m Sentinel-2B L2A NDVI and NDMI; conducted multi-tier landslide inventory overlays.`
      }
    ],
    relatedArticleIds: ['A1', 'H2', 'H3', 'H4'],
    sources: [
      { citation: 'Stage 3 Final Report & Reconciliation Registers (Gadgill Project, 2026).', verified: true },
      { citation: 'Stage 4.1 to 4.5 Spatial Data Acquisition Reports (Gadgill Project, 2026).', verified: true }
    ]
  },
  {
    id: 'H2',
    categoryId: 'cat-h',
    categoryName: 'Research Progress & Decisions',
    title: 'Major Scientific Decisions Log',
    subtitle: 'Justifications for rejecting synthetic DEMs, naive absences, and interpolation',
    authorNote: 'Good science is defined by what you choose NOT to do. In this log, I record the major methodological decisions and principled rejections that preserve our scientific integrity.',
    readingTime: '10 min',
    lastUpdated: 'November 2026',
    status: 'SOURCE_DERIVED',
    abstract: 'Catalogs the pivotal scientific decisions made throughout the project. Documents explicit justifications for rejecting synthetic elevation data, prohibiting spatial interpolation of sparse rain gauges, separating point scars from disaster records, and mandating spatial block cross-validation.',
    keyTakeaways: [
      'Decision 1: Rejection of Synthetic DEMs — Excluded all unverified interpolated terrain rasters in favor of authentic Copernicus DEM GLO-30.',
      'Decision 2: Prohibition of Gauge Interpolation — Banned regional kriging/IDW from 11 sparse rainfall points lacking verified coordinates (Issue U03); acquired continuous IMD 0.25° gridded data instead.',
      'Decision 3: Inventory Layer Segregation — Separated 4,728 mapped point scars from 23 settlement disaster records to avoid training bias (Issue U12).',
      'Decision 4: Rejection of Naive Negative Sampling — Refused to treat unmapped forest areas as confirmed non-landslides without environmental constraints (Issue U11).',
      'Decision 5: Mandating Spatial Cross-Validation — Rejected random k-fold cross-validation to prevent spatial data leakage.'
    ],
    sections: [
      {
        id: 'sec-h2-1',
        title: '1. Master Decisions Register',
        content: `| Decision ID | Core Methodological Decision | Alternatives Considered | Primary Scientific Justification | Stage Recorded |
|---|---|---|---|---|
| **DEC-01** | **Total Rejection of Synthetic Elevation Rasters** | Interpolating coarse SRTM or using synthetic fractal terrain. | Synthetic DEMs introduce artificial slope gradients that do not exist on the ground, fatally corrupting geotechnical failure models. Authentic Copernicus GLO-30 acquired instead. | Stage 3 / 4.1 |
| **DEC-02** | **Prohibition of Rainfall Station Interpolation** | Spline / Kriging interpolation across Kerala using 11 historical gauge observations. | The 11 observations lacked verified geographical coordinates and continuous time series. Interpolating 11 points over $38,863\\text{ km}^2$ produces severe false spatial gradients. Acquired authentic IMD 0.25° gridded arrays instead. | Stage 3 / 4.4 |
| **DEC-03** | **Segregation of Inventory Tiers** | Merging 2018 mapped scar points with settlement disaster records into a single training set. | 2018 mapped points represent physical initiation scars on steep slopes ($25^\circ - 40^\circ$), whereas modern disaster records represent community centroids in valley bottoms ($5^\circ - 15^\circ$). Merging them introduces fatal training label noise. | Stage 3 / 4.2 |
| **DEC-04** | **Rejection of Random Pseudo-Absence Sampling** | Randomly sampling absence points across any unmapped pixel. | In steep forested Ghats terrain, an unmapped pixel is not an absence—it may be a real landslide obscured by dense canopy. Naive sampling introduces false-negative label noise. | Stage 3 / 5 Prep |
| **DEC-05** | **Rejection of Random Cross-Validation** | Standard 5-fold or 10-fold random cross-validation. | Spatial autocorrelation causes random cross-validation to leak information between training and testing folds, reporting deceptively inflated AUCs ($> 0.95$). Spatial block CV enforced. | Stage 1 / 5 Prep |`
      }
    ],
    relatedArticleIds: ['A1', 'F11', 'H3', 'I2'],
    sources: [
      { citation: 'Stage 3 Closure and Stage 4 Preparation Master Instruction (Gadgill Project, 2026).', verified: true }
    ]
  },
  {
    id: 'H3',
    categoryId: 'cat-h',
    categoryName: 'Research Progress & Decisions',
    title: 'Master Unresolved Issues Register (U01–U12)',
    subtitle: 'The 12 scientific, spatial, and data limitations controlling project governance',
    authorNote: 'This register is the conscience of our research. It tracks the 12 core limitations identified in Stage 3, recording their severity, current treatment, resolution conditions, and live status.',
    readingTime: '12 min',
    lastUpdated: 'November 2026',
    status: 'AUDIT_FLAG',
    abstract: 'Presents the complete controlling Master Unresolved-Issues Register (U01 through U12). Details each issue\'s description, severity profile (3 Critical, 7 High, 2 Medium), current containment treatment, mandatory condition for resolution, and progress updates achieved through Stage 4.',
    diagramType: 'unresolved-register',
    keyTakeaways: [
      'The register acts as the controlling governance document; no issue may be marked resolved without verifiable primary evidence.',
      '3 Critical Issues: U06 (DEM absence - RESOLVED via Copernicus GLO-30); U07 (Taluka polygons - RESOLVED via 61 historical polygons); U11 (Absence sampling - OPEN).',
      '7 High Severity Issues: U01 (Laterite UCS - OPEN/Quarantined); U03 (Rainfall coordinates - RESOLVED via IMD 0.25°); U04 (Landslide event grouping - OPEN); U05 (Disaster centroids - OPEN/Segregated); U08 (Continuous geology GIS - OPEN); U09 (Goa grid method - OPEN/Segregated); U10 (Historical taluk crosswalk - RESOLVED via Stage 4.2.1).',
      '2 Medium Severity Issues: U02 (Sandstone strength - OPEN); U12 (Inventory heterogeneity - OPEN/Segregated).'
    ],
    sections: [
      {
        id: 'sec-h3-1',
        title: '1. The Master U01–U12 Controlling Matrix',
        content: `| Issue ID | Issue Description | Severity | Current Research Treatment | Condition for Resolution | Live Status | Progress Update (Stage 4) |
|---|---|---|---|---|---|---|
| **U01** | Geotechnical record 021: reported 18.5 MPa laterite caprock UCS unestablished by source. | **High** | Quarantined from verified database. Preserved in audit records. | Verify exact source passage, test method, and core geometry. | **OPEN** | Retained in quarantine. Downstream models will NOT use 18.5 MPa laterite strength. |
| **U02** | Geotechnical record 022: reported 2.4 MPa sandstone strength has no established test method. | **Medium** | Retained as source-reported; test method marked unestablished. | Obtain explicit source documentation of testing standard. | **OPEN** | Retained as documentary only. |
| **U03** | Rainfall observations lack verified station coordinates and continuous series. | **High** | Retained 11 observations as documentary event evidence; no regional interpolation. | Acquire continuous, spatially referenced gridded rainfall data. | **RESOLVED** | **Resolved via Stage 4.4:** Acquired IMD daily gridded rainfall (0.25° NetCDF4, 2018–2024). |
| **U04** | 2018 Landslide inventory contains 4,728 mapped point scars; event aggregation unknown. | **High** | Treat as mapped scar initiation features, not 4,728 independent geomorphic events. | Obtain defensible event clustering or scar polygon delineations. | **OPEN** | Spatial clustering protocols will be implemented during Stage 5 cross-validation. |
| **U05** | Modern disaster records are community/settlement centroids, not scar slip surfaces. | **High** | Keep 23 modern records strictly separate from point scar training layers. | Verify individual scars using high-res imagery and field PDNA reports. | **OPEN** | Maintained as an independent validation tier; excluded from training matrices. |
| **U06** | Authentic continuous DEM missing; previous terrain rasters were unverified. | **Critical** | Exclude synthetic terrain rasters. | Acquire authentic continuous DEM; derive morphometric terrain layers. | **RESOLVED** | **Resolved via Stage 4.1:** Acquired Copernicus DEM GLO-30 (8 DGED tiles, 30m DSM). |
| **U07** | Official taluka boundary polygons missing for WGEEP spatial overlay. | **Critical** | Do not perform spatial joins using estimated points. | Acquire authoritative taluk boundary polygons with documented vintage. | **RESOLVED** | **Resolved via Stage 4.2:** Acquired 61 historical taluk polygons from KSREC/Census. |
| **U08** | Continuous regional geological/lithological GIS layers missing or incomplete. | **High** | Use existing reports as documentary evidence only. Do not extrapolate site points. | Acquire continuous 1:50,000 Bhukosh vector lithology and fault layers. | **OPEN** | Documented 6 GSI observation sites and 7 shear zones in Stage 4.3; continuous vector layer remains pending. |
| **U09** | Goa WGEEP assessment is grid-based (1'x1'), not represented by formal taluka appendix entries. | **High** | Keep Goa strictly separate from 166 formal taluka assignments. | Reconstruct original 1'x1' grid assessment where source maps permit. | **OPEN** | Maintained as distinct methodology; Goa excluded from taluka crosswalk tables. |
| **U10** | Historical WGEEP taluka assignments do not match modern administrative reorganizations. | **High** | Preserve original names; do not assume modern boundary equivalence. | Create a documented historical-to-current administrative crosswalk. | **RESOLVED** | **Resolved via Stage 4.2.1:** Established crosswalk with 34 High, 6 Medium, 1 Low confidence matches. |
| **U11** | Defensible negative/absence labels for machine learning are not established. | **Critical** | Do not treat unmapped areas, low-slope buffers, or random points as confirmed absences. | Develop a defensible environmental dissimilarity pseudo-absence sampling strategy. | **OPEN** | Controlling guideline for Stage 5 feature matrix construction. |
| **U12** | Inventory heterogeneity across modern disaster records and 2018 mapped points. | **Medium** | Maintain separate source classes; do not combine into homogeneous training set. | Establish source-specific inclusion criteria and geometry standards. | **OPEN** | Enforced across all Stage 4 spatial overlays and Stage 5 model design. |`
      }
    ],
    relatedArticleIds: ['A1', 'H1', 'H2', 'H4', 'I1'],
    sources: [
      { citation: 'STAGE_3_UNRESOLVED_ISSUES_REGISTER.md (Gadgill Project, 2026).', verified: true }
    ]
  },
  {
    id: 'H4',
    categoryId: 'cat-h',
    categoryName: 'Research Progress & Decisions',
    title: 'Research Roadmap & Stage 5+ Horizons',
    subtitle: 'Transition from verified spatial assets to empirical machine learning models',
    authorNote: 'With Stage 4 data acquisition successfully closed, we stand at the threshold of Stage 5 modeling. Here, I outline the technical roadmap ahead.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Outlines the forward-looking research roadmap transitioning from Stage 4 spatial data acquisition into Stage 5 machine learning modeling, spatial block validation, SHAP explainability, and final thesis synthesis.',
    keyTakeaways: [
      'Stage 4 Successfully Completed: All primary spatial layers (DEM, boundaries, geology, rainfall, land cover) acquired, validated, and checksum-verified.',
      'Mandatory Hold Condition Honored: No machine learning or model training has been initiated prior to formal authorization.',
      'Stage 5 Horizon: (1) Standardized 30m raster matrix extraction; (2) Environmentally constrained pseudo-absence sampling (addressing U11); (3) Parallel training of Models A, B, and C; (4) Spatial Block Cross-Validation; (5) TreeSHAP feature attribution.',
      'Thesis Horizons: Academic publication and policy-oriented risk governance recommendations.'
    ],
    sections: [
      {
        id: 'sec-h4-1',
        title: '1. Phase-Gate Progression to Stage 5 and Beyond',
        content: `The project progresses through strict phase-gated milestones:
1. **Milestone 1 (Completed):** Forensic audit of historical research files; creation of the Master Unresolved-Issues Register (Stages 1–3).
2. **Milestone 2 (Completed):** Authentic spatial data acquisition, boundary crosswalk reconciliation, and cryptographic validation (Stages 4.1–4.5).
3. **Milestone 3 (Knowledge Base Deployment - Current):** Authoring this comprehensive research portal to establish the central knowledge foundation.
4. **Milestone 4 (Stage 5 - Upcoming Modeling):**
   - Extracting standardized $30\text{ m}$ feature matrices across all 18 candidate variables.
   - Solving Issue U11 via environmentally constrained pseudo-absence generation.
   - Training Logistic Regression, Random Forest, XGBoost, and SVM across Models A, B, and C.
5. **Milestone 5 (Stage 6 - Validation & Interpretability):**
   - Evaluating Spatial Block Cross-Validation generalization errors.
   - Computing TreeSHAP values to test Hypotheses H1, H2, and H3.
6. **Milestone 6 (Thesis Synthesis):**
   - Final academic dissertation and open-source code/data release.`
      }
    ],
    relatedArticleIds: ['A5', 'F10', 'F14', 'J1', 'J3'],
    sources: [
      { citation: 'Stage 4 Master Research Readiness Report (Gadgill Project, 2026).', verified: true }
    ]
  }
];
