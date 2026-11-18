import { Article } from '../../types';

export const CATEGORY_F_ARTICLES: Article[] = [
  {
    id: 'F1',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Study Area Definition & Geographic Scope',
    subtitle: 'The Western Ghats mega-system and the Kerala high-hazard case study',
    authorNote: 'In this opening chapter of the methodology, I detail the geographical delineation of our study area, justifying why Kerala was selected as the empirical testing case.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Establishes the geographic delineation, spatial extent, and physiographic justification for the study area. Positions the State of Kerala (38,863 km²) within the broader 129,037 km² Western Ghats mountain system, analyzing the regional topography, administrative boundaries, and disaster vulnerability.',
    previewImage: {
      src: '/previews/kerala_state_and_districts_map.png',
      caption: 'The Kerala study area bounded by 14 revenue districts and the Western Ghats escarpment.',
      sourceDataset: 'KSREC / Survey of India (Stage 4.2)'
    },
    keyTakeaways: [
      'The Western Ghats spans ~129,037 km² across six states; Kerala occupies 38,863 km² along its steep southern escarpment.',
      'Kerala was chosen because it possesses the highest landslide density in peninsular India, a statewide audited 2018 scar inventory (4,728 points), and intense land-use debates regarding WGEEP zoning.',
      'The study area covers 14 revenue districts, 61 historical taluks, and elevations spanning 0 to 2,695 m MSL.'
    ],
    sections: [
      {
        id: 'sec-f1-1',
        title: '1. Regional Context & Empirical Case Justification',
        content: `While the Western Ghats mountain chain encompasses five major states—Maharashtra, Goa, Karnataka, Kerala, and Tamil Nadu—conducting high-resolution spatial modeling across the entire 1,600 km spine simultaneously would dilute scientific rigor. Data quality, inventory completeness, and administrative records vary widely between states.

Kerala was chosen as the **primary empirical modeling case** because:
1. **Unprecedented Inventory Density:** The August 2018 disaster resulted in the systematic mapping of over 4,700 landslide scars by the Geological Survey of India, creating an audited spatial ground-truth dataset unmatched elsewhere in peninsular India.
2. **Acute Socio-Ecological Conflicts:** Kerala has been the ground zero of public and political debates regarding the Gadgil Report, with intense controversy over quarrying, rubber plantations, and Ecologically Sensitive Zone (ESZ) declarations.
3. **Severe Topographic & Climatic Gradients:** The state drops from the highest peak in south Asia south of the Himalayas (Anamudi, $2,695\text{ m}$) to sea level within less than $60\text{ km}$, receiving over $3,000\text{ mm}$ of orographic precipitation annually.`
      }
    ],
    relatedArticleIds: ['A1', 'A7', 'B1', 'E4'],
    sources: [
      { citation: 'Gadgil, M., et al. (2011). Report of the Western Ghats Ecology Expert Panel. Vol. 1, Chapter 1.', verified: true },
      { citation: 'GSI. (2018). A Comprehensive Report on Landslide Incidences of Kerala Monsoon 2018.', verified: true }
    ]
  },
  {
    id: 'F2',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Systematic Literature Review Protocol',
    subtitle: 'Synthesis of 150+ peer-reviewed geohazard and ecological studies',
    authorNote: 'In Stage 1, we executed a systematic literature review following PRISMA guidelines. Here, I document our search strings, inclusion criteria, and thematic categorization.',
    readingTime: '7 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Details the systematic literature review methodology executed in Stage 1 following PRISMA standards. Synthesizes search strings across Web of Science, Scopus, and Google Scholar, documenting the screening of over 150 peer-reviewed articles spanning landslide susceptibility, WGEEP policy, and tropical hillslope geomechanics.',
    keyTakeaways: [
      'Search Strategy: Boolean combinations of ("landslide susceptibility" OR "slope stability") AND ("Western Ghats" OR "Kerala") AND ("WGEEP" OR "Gadgil" OR "ecological sensitivity").',
      'Inclusion Criteria: Peer-reviewed journal publications, official government panel reports (MoEF, GSI, KSDMA), and technical monographs with verified methodologies.',
      'Identified Knowledge Void: Zero published studies have tested WGEEP ecological zoning as an empirical conditioning factor in machine learning susceptibility models.'
    ],
    sections: [
      {
        id: 'sec-f2-1',
        title: '1. Review Protocol & Categorization Matrix',
        content: `Following the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) framework, literature was cataloged into four primary thematic clusters:
1. **Cluster 1: Geotechnical & Physical Modeling (45 studies):** Physical infinite-slope models, limit equilibrium, shear strength tests on saprolite, and rainfall threshold derivations.
2. **Cluster 2: Statistical & Machine Learning Susceptibility (52 studies):** Random Forests, Weight of Evidence (WoE), Analytical Hierarchy Process (AHP), and Support Vector Machines applied in Kerala.
3. **Cluster 3: WGEEP & Environmental Governance (38 studies):** Ecological assessments, biodiversity papers, and political-economic critiques of the Gadgil and Kasturirangan reports.
4. **Cluster 4: Remote Sensing & GIS Processing (25 studies):** DEM comparison, InSAR surface deformation, and optical vegetation index dynamics.`
      }
    ],
    relatedArticleIds: ['A3', 'A4', 'B8'],
    sources: [
      { citation: 'Page, M. J., et al. (2021). The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ, 372, n71.', verified: true }
    ]
  },
  {
    id: 'F3',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'WGEEP Indicator Harmonization',
    subtitle: 'Standardizing disparate administrative zonation scores into GIS rasters',
    authorNote: 'Transforming the 41 qualitative WGEEP taluk recommendations into spatially continuous and discrete GIS predictor layers required careful crosswalk engineering.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Details the spatial engineering protocol used to convert WGEEP taluk recommendations into GIS-compatible predictor variables. Explains polygon-to-raster conversion, categorical one-hot encoding, ordinal sensitivity ranking, and the derivation of continuous Euclidean distance buffers.',
    keyTakeaways: [
      'Input: 41 historical WGEEP taluk crosswalk records reconciled with 61 Kerala boundary polygons in Stage 4.2.1.',
      'Categorical Encoding: One-hot encoded binary rasters representing ESZ-1, ESZ-2, ESZ-3, and Non-ESZ.',
      'Ordinal Encoding: Numeric sensitivity index (ESZ-1: 3, ESZ-2: 2, ESZ-3: 1, Non-ESZ: 0).',
      'Continuous Buffers: Euclidean distance to nearest ESZ-1 boundary (meters), capturing proximity to high-conservation cores.'
    ],
    sections: [
      {
        id: 'sec-f3-1',
        title: '1. The Raster Harmonization Algorithm',
        content: `To ensure that WGEEP policy variables integrate seamlessly with 30m DEM terrain rasters:
1. The reconciled vector polygon layer (\`kerala_taluk_boundaries_epsg4326.gpkg\`) was joined with \`WGEEP_FINAL_TALUK_CROSSWALK.csv\`.
2. The polygon layer was projected to UTM Zone 43N (EPSG:32643).
3. Using GDAL/Rasterio, polygons were rasterized at $30\text{ m}$ pixel resolution snapped exactly to the Copernicus DEM bounding grid.
4. Four distinct raster channels were generated:
   - Channel 1: \`wgeep_esz_ordinal\` (Integer: 0, 1, 2, 3).
   - Channel 2: \`wgeep_esz1_binary\` (Binary: 0 or 1).
   - Channel 3: \`wgeep_esz2_binary\` (Binary: 0 or 1).
   - Channel 4: \`wgeep_dist_to_esz1\` (Float32 Euclidean distance in meters).`
      }
    ],
    relatedArticleIds: ['B5', 'B6', 'B7', 'E1', 'F6'],
    sources: [
      { citation: 'Stage 4.2.1 Final WGEEP Taluk Crosswalk Reconciliation Report (Gadgill Project, 2026).', verified: true }
    ]
  },
  {
    id: 'F4',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Landslide Inventory Preparation & Segregation',
    subtitle: 'Separating point initiation scars from settlement centroid records',
    authorNote: 'In Stage 3, we resolved Issue U12 by enforcing strict segregation between the 4,728 mapped scar points and the 23 settlement disaster records. Here, I detail the sampling protocol.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Explains the data preparation protocol for the primary modeling inventory. Outlines the spatial filtering, coordinate deduplication, attribute cleaning, and strict segregation separating mapped initiation points from community disaster records (Issues U04, U05, U12).',
    keyTakeaways: [
      'Input: 4,728 PointZ scars (\`Kerela landslide.shp\`), audited and standardized as 4,756 valid point features in GeoJSON.',
      'Coordinate Filtering: Verified that all points possess valid coordinates falling inside the terrestrial Kerala boundary (zero boundary dropouts confirmed in Stage 4.5).',
      'Segregation Protocol: Primary machine learning training uses ONLY the mapped scar points (Tier 1); curated settlement records (Tier 2) are reserved for independent disaster validation.'
    ],
    sections: [
      {
        id: 'sec-f4-1',
        title: '1. Standardization and Coordinate Cleaning',
        content: `During inventory preparation:
1. All 4,728 raw shapefile features were inspected for null geometries, corrupted $Z$-coordinates, and duplicate coordinate pairs.
2. 4,756 point geometries were validated and exported into standardized GeoJSON (\`landslide_features_kerala.geojson\`).
3. Each point was tagged with its corresponding district, historical taluk, WGEEP ESZ class, and underlying 10m ESA WorldCover class.
4. **Issue U04 Compliance:** The points are explicitly treated as *mapped scar initiation features*, not independent events. Spatial clustering methods are applied during cross-validation to prevent artificial variance deflation.`
      }
    ],
    relatedArticleIds: ['C11', 'C12', 'E2', 'H3'],
    sources: [
      { citation: 'Stage 3 Master Landslide Inventory Audit Report (Gadgill Project, 2026).', verified: true }
    ]
  },
  {
    id: 'F5',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Multi-Source Spatial Acquisition Architecture',
    subtitle: 'Automated retrieval, cryptographic verification, and format harmonization',
    authorNote: 'In Stage 4, we built automated Python pipelines to stream data directly from official space agency APIs. Here, I document our acquisition architecture.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Documents the end-to-end spatial data acquisition architecture executed during Stage 4. Covers AWS S3 bucket streaming, Open Data registry protocols, cryptographic SHA-256 verification pipelines, and immutable source file mirroring.',
    keyTakeaways: [
      'Zero Data Fabrication: Every byte of spatial data originated from verifiable, publicly accessible space agency repositories (Copernicus, ESA, USGS, IMD).',
      'Cryptographic Hashing: Every raw download was fingerprinted using SHA-256 before any GIS manipulation.',
      'Immutable Mirroring: Raw source files were duplicated into \`02_ORIGINAL_FILES\` folders and set to read-only status.'
    ],
    sections: [
      {
        id: 'sec-f5-1',
        title: '1. The Acquisition & Provenance Pipeline',
        content: `The acquisition architecture enforces strict data integrity:
1. **Automated API Streaming:** Python scripts (\`urllib\`, \`boto3\`, \`requests\`) query cloud-optimized endpoints:
   - AWS S3: ESA WorldCover 10m COGs (\`s3://esa-worldcover/v200/2021/\`).
   - AWS S2: Sentinel-2 Level-2A COGs (\`sentinel-s2-l2a-cogs\`).
   - Copernicus Data Space: GLO-30 30m DEM DGED tiles.
   - IMD Pune: Daily gridded NetCDF4 archives.
2. **Cryptographic Validation Gate:** Python computes the SHA-256 digest of every incoming file and validates it against published checksum manifests.
3. **Immutable Cold Storage:** Bitwise copies are deposited into \`02_ORIGINAL_FILES\` subdirectories with operating system write permissions revoked to prevent accidental corruption.`
      }
    ],
    relatedArticleIds: ['E3', 'E6', 'E7', 'E8', 'H1'],
    sources: [
      { citation: 'Stage 4 Spatial Data Acquisition Master Plan (Gadgill Project, 2026).', verified: true }
    ]
  },
  {
    id: 'F6',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Standardized GIS Preprocessing Pipeline',
    subtitle: 'Clipping, reprojection, co-registration, and resampling to 30m grid',
    authorNote: 'Raster co-registration must be exact down to the millimeter. Here, I detail the standardized 30m UTM grid pipeline.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Outlines the standardized GIS preprocessing pipeline. Details clipping to the authentic Kerala state boundary, reprojection to UTM Zone 43N (EPSG:32643), bilinear and nearest-neighbor resampling, grid snapping, and NoData handling.',
    keyTakeaways: [
      'Target Coordinate System: UTM Zone 43N (EPSG:32643) with WGS 84 datum.',
      'Master Grid Resolution: Exactly 30.0 m x 30.0 m pixel dimensions.',
      'Resampling Logic: Bilinear interpolation for continuous surfaces (DEM, rainfall, NDVI); Nearest Neighbor for categorical surfaces (LULC, ESZ zones) to prevent fractional class codes.',
      'Grid Snapping: All raster grids share identical bounding coordinates, rows, and columns, enabling direct row-major NumPy matrix stacking.'
    ],
    sections: [
      {
        id: 'sec-f6-1',
        title: '1. Resampling and Alignment Specifications',
        content: `All candidate predictor layers are transformed through a standardized GDAL/Rasterio pipeline:
- **Master Bounding Envelope (UTM Zone 43N):**
  - X Min (Easting): $480,000.0\text{ m}$ | X Max: $770,000.0\text{ m}$
  - Y Min (Northing): $915,000.0\text{ m}$ | Y Max: $1,420,000.0\text{ m}$
- **Cell Size:** $\Delta x = 30.0\text{ m}$, $\Delta y = 30.0\text{ m}$.
- **Grid Dimensions:** Exactly $16,833$ rows $\times 9,667$ columns.
- **Continuous Variables (Bilinear):** Elevation, Slope, Profile Curvature, Plan Curvature, TRI, TPI, TWI, IMD Rainfall, NDVI, NDMI, Distance to Faults, Distance to ESZ-1.
- **Categorical Variables (Nearest Neighbor):** ESA WorldCover 2021 Class, WGEEP ESZ Class.`
      }
    ],
    relatedArticleIds: ['D2', 'D3', 'D4', 'F7'],
    sources: [
      { citation: 'GDAL/OGR contributors. (2024). GDAL/OGR Geospatial Data Abstraction software Library. Open Source Geospatial Foundation.', verified: true }
    ]
  },
  {
    id: 'F7',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Candidate Predictor Variable Construction',
    subtitle: 'Deriving 18 physical and ecological conditioning factors',
    authorNote: 'Here, I present the complete master matrix of 18 candidate predictor variables engineered across our physical, climatic, and ecological data streams.',
    readingTime: '10 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Catalogs the 18 candidate spatial predictor variables constructed for comparative landslide susceptibility modeling. Provides exact mathematical definitions, physical units, data sources, and assignments to Model A, Model B, and Model C suites.',
    keyTakeaways: [
      '18 Predictor Variables: 10 Conventional Physical (Model A), 5 Gadgil Ecological (Model B), and 3 Hydrometeorological / Structural triggers.',
      'Model A Factors: Elevation, Slope, Aspect (Sin/Cos), Plan Curvature, Profile Curvature, TRI, TPI, TWI, Distance to Faults, WorldCover LULC.',
      'Model B Factors: WGEEP ESZ Class, Distance to ESZ-1, Sentinel-2 NDVI, Sentinel-2 NDMI, WGEEP Ordinal Rank.',
      'Model C Factors: Full combination of Model A + Model B variables.'
    ],
    sections: [
      {
        id: 'sec-f7-1',
        title: '1. Master Predictor Variable Matrix',
        content: `| Variable ID | Predictor Name | Thematic Domain | Data Type / Units | Source Dataset | Model Suite |
|---|---|---|---|---|---|
| \`VAR_01\` | **Elevation** | Geomorphometry | Continuous (meters MSL) | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_02\` | **Slope Gradient** | Geomorphometry | Continuous (degrees) | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_03\` | **Aspect (Eastness)** | Geomorphometry | Continuous: $\\sin(\\text{Aspect})$ | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_04\` | **Aspect (Northness)** | Geomorphometry | Continuous: $\\cos(\\text{Aspect})$ | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_05\` | **Planform Curvature** | Geomorphometry | Continuous ($1/\\text{m}$) | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_06\` | **Profile Curvature** | Geomorphometry | Continuous ($1/\\text{m}$) | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_07\` | **Terrain Ruggedness (TRI)** | Geomorphometry | Continuous (meters) | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_08\` | **Topographic Position (TPI)** | Geomorphometry | Continuous (meters) | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_09\` | **Topographic Wetness (TWI)** | Hydro-geomorphology | Continuous (unitless) | Copernicus DEM GLO-30 | Model A, C |
| \`VAR_10\` | **Distance to Shear Faults** | Structural Geology | Continuous (meters) | GSI Structural Faults (Stage 4.3) | Model A, C |
| \`VAR_11\` | **ESA Land Cover Class** | Land Cover | Categorical (11 codes) | ESA WorldCover 2021 (Stage 4.5) | Model A, C |
| \`VAR_12\` | **August 2018 Peak Storm** | Climatology | Continuous (mm/day) | IMD 0.25° Gridded (Stage 4.4) | Model A, C |
| \`VAR_13\` | **Mean Monsoon Rainfall** | Climatology | Continuous (mm/season) | IMD 0.25° Gridded (Stage 4.4) | Model A, C |
| \`VAR_14\` | **WGEEP ESZ Classification** | Ecological Policy | Categorical (ESZ 1, 2, 3, Non) | WGEEP Taluk Crosswalk (Stage 4.2.1) | Model B, C |
| \`VAR_15\` | **WGEEP Ordinal Sensitivity** | Ecological Policy | Ordinal (0, 1, 2, 3) | WGEEP Taluk Crosswalk (Stage 4.2.1) | Model B, C |
| \`VAR_16\` | **Distance to ESZ-1 Boundary** | Ecological Policy | Continuous (meters) | WGEEP Taluk Crosswalk (Stage 4.2.1) | Model B, C |
| \`VAR_17\` | **Vegetation Index (NDVI)** | Biophysical Canopy | Continuous ($-1.0$ to $+1.0$) | Sentinel-2B L2A (Stage 4.5) | Model B, C |
| \`VAR_18\` | **Moisture Index (NDMI)** | Biophysical Canopy | Continuous ($-1.0$ to $+1.0$) | Sentinel-2B L2A (Stage 4.5) | Model B, C |`
      }
    ],
    relatedArticleIds: ['D7', 'D8', 'D16', 'D17', 'D18', 'F14'],
    sources: [
      { citation: 'Reichenbach, P., et al. (2018). A review of statistically-based landslide susceptibility models. Earth-Science Reviews, 180, 60–91.', verified: true }
    ]
  },
  {
    id: 'F8',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Exploratory Spatial Data Analysis (ESDA)',
    subtitle: 'Bivariate histograms, boxplots, and spatial density heatmaps',
    authorNote: 'Before feeding data into machine learning models, we must explore empirical bivariate relationships. Here, I describe our ESDA inspection protocols.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Outlines Exploratory Spatial Data Analysis (ESDA) protocols applied across candidate predictors and landslide initiation points. Explains kernel density estimation, bivariate frequency ratio distributions, and boxplot comparisons between landslide presence and background terrain.',
    keyTakeaways: [
      'Frequency Ratio (FR): Quantifies whether a specific class range has a higher proportion of landslides than expected by chance ($FR > 1.0$ indicates positive conditioning).',
      'Kernel Density Estimation (KDE): Identifies spatial clusters of landslide initiation without arbitrary administrative boundaries.',
      'Outlier Detection: Inspects extreme slope (> 60°) and curvature values to detect localized DEM noise.'
    ],
    sections: [
      {
        id: 'sec-f8-1',
        title: '1. Frequency Ratio Formulation and Visual Inspection',
        content: `For each categorical or binned continuous predictor, the **Frequency Ratio ($FR$)** is calculated:
$$FR = \\frac{N_i(L) / N_{\\text{total}}(L)}{A_i / A_{\\text{total}}}$$
Where $N_i(L)$ is the number of landslide points in class $i$, $N_{\\text{total}}(L)$ is total landslides ($4,756$), $A_i$ is area of class $i$, and $A_{\\text{total}}$ is total study area.
- $FR > 1.0$: Indicates terrain conditions that strongly favor landslide initiation.
- $FR = 1.0$: Random, neutral distribution.
- $FR < 1.0$: Terrain conditions that inhibit slope failure.`
      }
    ],
    relatedArticleIds: ['C5', 'F7', 'G1'],
    sources: [
      { citation: 'Lee, S., & Talib, J. A. (2005). Probabilistic landslide susceptibility and factor effect analysis. Environmental Geology, 47(7), 982–990.', verified: true }
    ]
  },
  {
    id: 'F9',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Multicollinearity & Statistical Feature Screening',
    subtitle: 'Variance Inflation Factor (VIF < 5) and Spearman rank filtering',
    authorNote: 'Correlated predictors inflate regression variance and distort feature importance. Here, I detail our VIF and Spearman rank screening protocol.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Details the statistical feature screening pipeline designed to detect and eliminate multicollinearity among candidate conditioning factors. Outlines Spearman rank correlation matrices, tolerance calculations, and Variance Inflation Factor (VIF) filtering with a strict VIF < 5 threshold.',
    keyTakeaways: [
      'Multicollinearity Danger: Collinear variables inflate parameter standard errors in logistic regression and artificially dilute tree-based feature importance.',
      'Screening Step 1: Pairwise Spearman rank correlation matrix; pairs with $|r_s| > 0.75$ are flagged, and the mechanically weaker variable is pruned.',
      'Screening Step 2: Variance Inflation Factor ($\text{VIF} = 1 / (1 - R_j^2)$); any variable with $\text{VIF} \ge 5.0$ is eliminated.',
      'Expected Collinearities: Slope vs. TRI; Elevation vs. Mean Temperature; NDVI vs. NDMI.'
    ],
    sections: [
      {
        id: 'sec-f9-1',
        title: '1. Mathematical Formulation of VIF Screening',
        content: `For each candidate predictor $X_j$, a linear regression is fitted against all remaining $p-1$ predictors:
$$X_j = \\alpha_0 + \\sum_{k \\ne j} \\alpha_k X_k + \\epsilon$$
The **Variance Inflation Factor ($\text{VIF}_j$)** is:
$$\\text{VIF}_j = \\frac{1}{1 - R_j^2}$$
Where $R_j^2$ is the coefficient of determination.
- If $\\text{VIF}_j < 5.0$: Collinearity is low; variable retained.
- If $5.0 \\le \\text{VIF}_j < 10.0$: Moderate collinearity; requires sensitivity checking.
- If $\\text{VIF}_j \\ge 10.0$: Severe multicollinearity; mandatory elimination.`
      }
    ],
    relatedArticleIds: ['F7', 'G1', 'G2'],
    sources: [
      { citation: 'O\'brien, R. M. (2007). A caution regarding rules of thumb for variance inflation factors. Quality & Quantity, 41(5), 673–690.', verified: true }
    ]
  },
  {
    id: 'F10',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Machine Learning Model Architecture',
    subtitle: 'Random Forest, Gradient Boosting, SVM, and Logistic Regression pipelines',
    authorNote: 'In this section, I outline the algorithmic architecture of our four candidate classifiers, detailing hyperparameter tuning and loss functions.',
    readingTime: '10 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Presents the machine learning model architecture implemented for landslide susceptibility classification. Details four supervised learning algorithms: Logistic Regression (parametric baseline), Random Forest (bagging ensemble), XGBoost (gradient boosting), and Support Vector Machines (kernel separation).',
    keyTakeaways: [
      'Four Diverse Algorithms: Ensures conclusions are not idiosyncratic to a single model architecture.',
      'Logistic Regression: Provides transparent log-odds coefficients and established statistical inference.',
      'Random Forest: Non-parametric ensemble capable of handling non-linear interactions without overfitting.',
      'XGBoost: Extreme Gradient Boosting with tree-pruning, L1/L2 regularization, and high predictive power.',
      'Support Vector Machines (RBF Kernel): Maximizes margin hyperplanes in high-dimensional feature space.'
    ],
    sections: [
      {
        id: 'sec-f10-1',
        title: '1. Model Formulation & Tuning Architecture',
        content: `The susceptibility problem is framed as binary classification:
$$y_i \\in \\{0, 1\\} \\quad (1 = \\text{Landslide initiation scar}, 0 = \\text{Pseudo-absence})$$

Each algorithm is tuned via Bayesian optimization over hyperparameter spaces:
- **Logistic Regression:** L2 (Ridge) penalty parameter $C \\in [10^{-3}, 10^2]$.
- **Random Forest:** Number of trees $n_{\\text{estimators}} \\in [200, 1000]$, maximum depth $d_{\\text{max}} \\in [10, 30]$, minimum samples split $s_{\\text{min}} \\in [2, 10]$.
- **XGBoost:** Learning rate $\\eta \\in [0.01, 0.2]$, subsample ratio $\\in [0.6, 0.9]$, column sample $\\in [0.6, 0.9]$, max depth $\\in [3, 8]$.
- **SVM:** RBF kernel width $\\gamma \\in [10^{-4}, 10^{-1}]$, penalty $C \\in [0.1, 100]$.`
      }
    ],
    relatedArticleIds: ['F11', 'F14', 'G2'],
    sources: [
      { citation: 'Breiman, L. (2001). Random forests. Machine Learning, 45(1), 5–32.', verified: true },
      { citation: 'Chen, T., & Guestrin, C. (2016). XGBoost: A scalable tree boosting system. ACM SIGKDD, 785–794.', verified: true }
    ]
  },
  {
    id: 'F11',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Spatial Block Cross-Validation Framework',
    subtitle: 'Preventing spatial data leakage via geographic partitioning blocks',
    authorNote: 'Standard random cross-validation produces dangerously optimistic, inflated accuracy metrics in spatial modeling. Here, I detail our spatial block cross-validation framework.',
    readingTime: '10 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Establishes the theoretical and mathematical necessity of Spatial Block Cross-Validation. Demonstrates how spatial autocorrelation causes random cross-validation to leak information between training and testing folds, detailing our geographic block partitioning protocol across Kerala.',
    keyTakeaways: [
      'Spatial Data Leakage: Points located close together share virtually identical terrain and rainfall attributes due to spatial autocorrelation; random CV tests models on data nearly identical to training data.',
      'Spatial Blocking Solution: Partitions geographic space into contiguous blocks (e.g., $30\\text{ km} \\times 30\\text{ km}$ tiles or administrative taluks), training on one set and testing on completely separate geographic blocks.',
      'Honest Performance Benchmarking: Spatial block CV reveals true geographic generalizability, preventing catastrophic real-world model failure.'
    ],
    sections: [
      {
        id: 'sec-f11-1',
        title: '1. The Mathematics of Spatial Data Leakage',
        content: `In standard machine learning, samples are assumed to be Independent and Identically Distributed ($i.i.d.$). However, by **Tobler's First Law of Geography**, spatial observations violate $i.i.d.$:
$$\\text{Cov}\\left(X(s_i), X(s_j)\\right) = f\\left(d(s_i, s_j)\\right) > 0$$
Where covariance increases as distance $d$ approaches zero.

If random 5-fold cross-validation is used:
- A test point at $(x, y)$ will likely have a training point at $(x + 50\\text{ m}, y + 50\\text{ m})$.
- The model memorizes the localized coordinates and reports an artificial AUC of **$0.92 - 0.96$**.
- When deployed in an adjacent unmapped valley, performance collapses to **$0.65 - 0.70$**!

### The Spatial Blocking Protocol:
1. Kerala is divided into **$50\text{ km} \times 50\text{ km}$ contiguous spatial blocks**.
2. Folds are assigned at the block level: all points within Block $K$ belong exclusively to Fold $K$.
3. Models are trained on $K-1$ blocks and tested on the held-out, geographically distant block.
4. This guarantees that reported AUC reflects genuine physical transferability.`
      }
    ],
    relatedArticleIds: ['F10', 'G1', 'G3', 'H2'],
    sources: [
      { citation: 'Roberts, D. R., et al. (2017). Cross-validation strategies for data with temporal, spatial, or hierarchical structure. Ecography, 40(8), 913–929.', verified: true },
      { citation: 'Brenning, A. (2012). Spatial cross-validation and bootstrap for the assessment of prediction rules in remote sensing. IEEE TGRS, 50(9), 3539–3548.', verified: true }
    ]
  },
  {
    id: 'F12',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Model Interpretability & Explainable AI (XAI)',
    subtitle: 'SHAP game-theoretic attribution and partial dependence curve inspection',
    authorNote: 'Black-box machine learning is unacceptable in disaster risk governance. In this section, I explain our TreeSHAP game-theoretic feature attribution framework.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Details the Explainable AI (XAI) framework deployed to interpret machine learning predictions. Explains Shapley Additive Explanations (TreeSHAP), Permutation Feature Importance, and Partial Dependence Plots (PDP), detailing how they quantify the marginal contribution of ecological variables.',
    keyTakeaways: [
      'SHAP (Shapley Additive exPlanations): Grounded in cooperative game theory; assigns each predictor a unique, additive contribution $\\phi_i$ to each individual prediction.',
      'Efficiency & Additivity: $\\sum_{j=1}^M \\phi_j(x) = f(x) - E[f(x)]$, guaranteeing exact feature balance.',
      'Partial Dependence Plots (PDP): Visualize non-linear response curves (e.g., how susceptibility changes across slope angles from 0° to 60°).',
      'Research Goal: Use SHAP to determine whether WGEEP variables add real predictive signal or merely act as surrogate proxies for slope and rainfall.'
    ],
    sections: [
      {
        id: 'sec-f12-1',
        title: '1. Shapley Values Formulation',
        content: `Following Lundberg & Lee (2017), the **Shapley value $\\phi_j$** for feature $j$ is calculated across all possible feature subsets $S \\subseteq F \\setminus \\{j\\}$:
$$\\phi_j = \\sum_{S \\subseteq F \\setminus \\{j\\}} \\frac{|S|! (|F| - |S| - 1)!}{|F|!} \\left[ f(S \\cup \\{j\\}) - f(S) \\right]$$
Where $F$ is the total set of candidate predictors.

TreeSHAP computes exact Shapley values in polynomial time $O(T L D^2)$, allowing global summary plots that rank features by mean absolute impact:
$$I_j = \\frac{1}{N} \\sum_{i=1}^N |\\phi_j^{(i)}|$$
This provides the definitive empirical test of Hypothesis H3.`
      }
    ],
    relatedArticleIds: ['A6', 'F14', 'G4'],
    sources: [
      { citation: 'Lundberg, S. M., & Lee, S. I. (2017). A unified approach to interpreting model predictions. Advances in Neural Information Processing Systems, 30, 4765–4774.', verified: true }
    ]
  },
  {
    id: 'F13',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Uncertainty Assessment & Sensitivity Audits',
    subtitle: 'Monte Carlo perturbation and parameter perturbation boundaries',
    authorNote: 'Susceptibility maps must not convey false certainty. Here, I outline our Monte Carlo uncertainty framework to quantify confidence intervals around susceptibility scores.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Outlines the uncertainty assessment and sensitivity auditing framework. Details Monte Carlo elevation perturbation, pseudo-absence sampling variability, bootstrap confidence intervals, and spatial variance mapping.',
    keyTakeaways: [
      'Epistemic Uncertainty: Arises from incomplete knowledge (e.g., missing 1:50k vector lithology, unverified geotechnical parameters U01/U02).',
      'Aleatoric Uncertainty: Inherent natural randomness in precipitation cloudburst locations.',
      'Monte Carlo DEM Perturbation: Adding Gaussian random fields ($\\sigma = 2.0\\text{ m}$) to the Copernicus DEM to observe slope and susceptibility stability.',
      'Susceptibility maps must present both the mean predicted probability and the spatial standard deviation (uncertainty).'
    ],
    sections: [
      {
        id: 'sec-f13-1',
        title: '1. Monte Carlo Spatial Perturbation Workflow',
        content: `To evaluate the robustness of susceptibility predictions:
1. **DEM Perturbation:** Generate 100 perturbed DEM realizations: $z_{\\text{perturbed}} = z_{\\text{GLO30}} + \\epsilon(x, y)$, where $\\epsilon$ is spatially autocorrelated Gaussian noise with RMSE $= 2.0\\text{ m}$ (Copernicus DEM vertical error).
2. **Derivative Recalculation:** Recompute slope, aspect, and curvature for all 100 realizations.
3. **Model Prediction Ensemble:** Execute susceptibility inference across all realizations.
4. **Spatial Uncertainty Mapping:** Compute pixel-wise standard deviation $\\sigma_{\\text{susceptibility}}(x, y)$. Pixels with high standard deviation identify areas where model predictions are highly sensitive to DEM noise.`
      }
    ],
    relatedArticleIds: ['D20', 'F11', 'I5'],
    sources: [
      { citation: 'Crosetto, M., & Tarantola, S. (2001). Uncertainty and sensitivity analysis: evaluation of an environmental model. Environmental Modelling & Software, 16(4), 333–343.', verified: true }
    ]
  },
  {
    id: 'F14',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Comparative Model Evaluation (Models A, B, C)',
    subtitle: 'Evaluating whether ecological factors supply marginal predictive utility',
    authorNote: 'This is the central experimental design of the entire thesis. Here, I specify the exact structure of Model A, Model B, and Model C and the evaluation criteria.',
    readingTime: '11 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Details the comparative modeling framework that directly answers the central research question. Defines Model A (Conventional Conditioning Variables), Model B (Gadgil Ecological Variables), and Model C (Integrated Suite), specifying statistical benchmarking metrics (AUC-ROC, Brier Score, DeLong test, Net Reclassification Index).',
    diagramType: 'model-comparison',
    keyTakeaways: [
      'Model A (Conventional Physical Baseline): Elevation, Slope, Aspect (Sin/Cos), Plan Curvature, Profile Curvature, TRI, TPI, TWI, Fault Distance, IMD Rainfall, WorldCover LULC.',
      'Model B (Gadgil Ecological Sensitivity): WGEEP ESZ Class, Distance to ESZ-1, Sentinel-2 NDVI, Sentinel-2 NDMI, WGEEP Ordinal Sensitivity.',
      'Model C (Integrated Architecture): All variables from Model A + Model B combined.',
      'Evaluation Dimensions: (1) Predictive Discrimination (AUC-ROC); (2) Spatial Transferability (Spatial Block CV AUC); (3) Calibration (Brier Score); (4) Information Gain (DeLong p-value, Net Reclassification Index); (5) Interpretability (SHAP marginal contributions).'
    ],
    sections: [
      {
        id: 'sec-f14-1',
        title: '1. The Tri-Model Comparative Architecture',
        content: `To determine whether ecological sensitivity information meaningfully enhances landslide modeling, three parallel models are trained under identical algorithms, hyperparameter tuning protocols, and spatial cross-validation splits:

[MODEL A: Conventional Physical Suite]
- Terrain Morphometry (Copernicus DEM): Elevation, Slope, Aspect, Plan/Profile Curvature, TRI, TPI, TWI
- Structural Geology: Euclidean distance to mapped Precambrian shear zones and faults
- Climatology: IMD 0.25° Mean Monsoon Rainfall & Peak 2018 Storm Deluge
- Surface Medium: ESA WorldCover 2021 10m Land Cover

[MODEL B: Gadgil Ecological Suite]
- Policy Zonation: WGEEP Taluk ESZ Classification (ESZ-1, ESZ-2, ESZ-3, Non-ESZ)
- Ordinal Ranking: WGEEP Sensitivity Rank (3, 2, 1, 0)
- Regulatory Buffer: Euclidean distance to nearest ESZ-1 boundary
- Biophysical Remote Sensing: Sentinel-2B 20m NDVI (canopy vigor) & NDMI (canopy moisture)

[MODEL C: Integrated Synthesis Suite]
- Full concatenation of Model A + Model B candidate predictors (18 variables)`
      },
      {
        id: 'sec-f14-2',
        title: '2. Statistical Hypothesis Testing Metrics',
        content: `Models will be compared across five rigorous quantitative benchmarks:
1. **Area Under the ROC Curve (AUC-ROC):** Discriminatory capacity across all classification thresholds.
2. **DeLong’s Test for Correlated ROC Curves:** Determines whether the difference $\\Delta \\text{AUC} = \\text{AUC}_C - \\text{AUC}_A$ is statistically significant ($p < 0.05$).
3. **Brier Score ($BS$):** Measures probability calibration: $BS = \\frac{1}{N} \\sum (p_i - y_i)^2$. Lower values indicate superior probabilistic reliability.
4. **Net Reclassification Index (NRI):** Measures whether Model C correctly reclassifies landslide points into higher probability bins and absence points into lower probability bins.
5. **Spatial Generalization Drop ($\\Delta \\text{AUC}_{\\text{Spatial}}$):** Evaluates how much performance degrades when tested on geographically held-out spatial blocks.`
      }
    ],
    relatedArticleIds: ['A1', 'A4', 'A6', 'A8', 'F7', 'F10', 'F11', 'F12'],
    sources: [
      { citation: 'DeLong, E. R., et al. (1988). Comparing the areas under two or more correlated receiver operating characteristic curves. Biometrics, 44(3), 837–845.', verified: true },
      { citation: 'Pencina, M. J., et al. (2008). Evaluating the added predictive ability of a new marker: from area under the ROC curve to reclassification. Statistics in Medicine, 27(2), 157–172.', verified: true }
    ]
  },
  {
    id: 'F15',
    categoryId: 'cat-f',
    categoryName: 'Methodology & Research Workflow',
    title: 'Research Reproducibility & Open Science Protocols',
    subtitle: 'Docker containerization, Jupyter pipelines, and git provenance tracking',
    authorNote: 'Reproducibility is the bedrock of scientific integrity. In this final chapter of Category F, I document our computational pipeline environment and open science standards.',
    readingTime: '7 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Outlines the open science and computational reproducibility framework governing this research. Details Docker container environments, Conda package pinning, Jupyter notebook processing logs, cryptographic checksum registers, and open-source licensing.',
    keyTakeaways: [
      'Computational Environment: Python 3.12 pinned with GDAL 3.9, Rasterio 1.4, GeoPandas 1.0, Scikit-Learn 1.5, and XGBoost 2.1.',
      'Automated Provenance: Every spatial preprocessing step is executed via documented Python scripts in \`scratch/\` with logged command-line parameters.',
      'FAIR Data Principles: Data catalogs, metadata dictionaries, and code repositories follow Findable, Accessible, Interoperable, and Reusable standards.'
    ],
    sections: [
      {
        id: 'sec-f15-1',
        title: '1. Standards for Computational Reproducibility',
        content: `To ensure that any independent researcher can verify our calculations:
1. **Pinned Dependency Tree:** All software libraries are version-locked in \`environment.yml\` and containerized via Docker.
2. **Deterministic Random Seeds:** All stochastic operations (Random Forest bootstrap sampling, train-test splits, Bayesian hyperparameter tuning) use fixed seeds (\`seed=42\`).
3. **Data Checksum Registers:** Raw inputs, intermediate rasters, and final model matrices are fingerprinted with SHA-256 hashes recorded in public CSV manifests.`
      }
    ],
    relatedArticleIds: ['F5', 'H1', 'H3'],
    sources: [
      { citation: 'Wilkinson, M. D., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018.', verified: true }
    ]
  }
];
