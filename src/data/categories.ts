import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-a',
    code: 'A',
    name: 'Project Foundation',
    description: 'Theoretical motivation, research questions, hypotheses, scope, and conceptual integration framework.',
    iconName: 'Compass',
    articles: [
      { id: 'A1', title: 'Project Overview', subtitle: 'Motivation, central vision, and interdisciplinary integration', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'A2', title: 'Research Background', subtitle: 'Environmental, geomorphological, and social setting of the Western Ghats', readingTime: '10 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'A3', title: 'Research Problem & Gap', subtitle: 'The persistent divide between ecological zonation and physical hazard modeling', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'A4', title: 'Research Questions', subtitle: 'Primary overarching inquiry and specific secondary investigative threads', readingTime: '6 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'A5', title: 'Research Objectives', subtitle: 'Primary goals, specific technical milestones, and scholarly contributions', readingTime: '6 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'A6', title: 'Research Hypotheses', subtitle: 'Falsifiable propositions governing empirical model comparison', readingTime: '7 min', status: 'HYPOTHESIS' },
      { id: 'A7', title: 'Scope and Delimitations', subtitle: 'Geographical boundaries, temporal baselines, and methodological constraints', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'A8', title: 'Conceptual Research Framework', subtitle: 'Interactive architecture bridging ecological integrity with slope mechanics', readingTime: '9 min', status: 'PROPOSED_METHOD' }
    ]
  },
  {
    id: 'cat-b',
    code: 'B',
    name: 'Western Ghats & Gadgil Framework',
    description: 'Geographical setting, WGEEP historical mandate, Gadgil report methodology, and ESZ zonation operationalization.',
    iconName: 'Trees',
    articles: [
      { id: 'B1', title: 'Western Ghats: Geography & Environment', subtitle: 'Orography, monsoonal gradients, biodiversity, and structural geology', readingTime: '11 min', status: 'SOURCE_DERIVED' },
      { id: 'B2', title: 'Western Ghats Ecology Expert Panel (WGEEP)', subtitle: 'Origin, ministerial mandate, consultative process, and governance philosophy', readingTime: '9 min', status: 'SOURCE_DERIVED' },
      { id: 'B3', title: 'The Gadgil Report (2011)', subtitle: 'Report architecture, conservation principles, and the ESA declaration', readingTime: '10 min', status: 'SOURCE_DERIVED' },
      { id: 'B4', title: 'Ecologically Sensitive Zones (ESZ 1, 2, 3)', subtitle: 'Zonation definitions, regulatory guidelines, and sector-specific prescriptions', readingTime: '12 min', status: 'SOURCE_DERIVED' },
      { id: 'B5', title: 'WGEEP Indicator Matrix & Scoring', subtitle: 'Reconstructed biological, climatic, and hydrological criteria', readingTime: '10 min', status: 'SOURCE_DERIVED' },
      { id: 'B6', title: 'WGEEP Spatial Methodology & Discrepancies', subtitle: '174 formal talukas, 166 core state assignments, and Goa grid assessment', readingTime: '9 min', status: 'AUDIT_FLAG' },
      { id: 'B7', title: 'Operationalizing WGEEP for GIS Modeling', subtitle: 'Transforming qualitative recommendations into spatial predictor variables', readingTime: '8 min', status: 'PROPOSED_METHOD' },
      { id: 'B8', title: 'Ecological Sensitivity vs. Landslide Susceptibility', subtitle: 'Why ecological integrity and slope instability are fundamentally distinct', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' }
    ]
  },
  {
    id: 'cat-c',
    code: 'C',
    name: 'Landslide Science',
    description: 'Kinematic failure mechanisms, geotechnical controls, regolith weathering, pore-pressure physics, and inventory standards.',
    iconName: 'Mountain',
    articles: [
      { id: 'C1', title: 'Introduction to Slope Mass Movements', subtitle: 'Definitions, historical impact in peninsular India, and socioeconomic toll', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C2', title: 'Kinematic Landslide Classification', subtitle: 'Varnes, Cruden & Varnes, and Hungr et al. classification systems', readingTime: '9 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C3', title: 'Primary Failure Mechanisms in Tropical Regolith', subtitle: 'Translational slides, rotational slumps, debris flows, and rockfalls', readingTime: '11 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C4', title: 'Lithological & Geological Controls', subtitle: 'Precambrian crystalline basement, charnockites, gneisses, and shearing', readingTime: '9 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C5', title: 'Geomorphological Controls', subtitle: 'Slope gradient thresholds, aspect-solar exposure, and curvature convergence', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C6', title: 'Hydrological & Hydrogeological Dynamics', subtitle: 'Pore-water pressure, perched water tables, and transient seepage forces', readingTime: '10 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C7', title: 'Rainfall Triggering Mechanics & Thresholds', subtitle: 'Intensity-duration curves, antecedent moisture, and monsoon storm pulses', readingTime: '10 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C8', title: 'Deep Weathering, Saprolite & Laterite Profiles', subtitle: 'Tropical weathering crusts, lithomargic clays, and sliding interfaces', readingTime: '9 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C9', title: 'Structural Discontinuities & Lineaments', subtitle: 'Foliation joints, regional shear zones, and brittle faulting controls', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C10', title: 'Susceptibility, Hazard & Risk Differentiation', subtitle: 'Clarifying the spatial probability, temporal frequency, and loss equations', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C11', title: 'Landslide Inventory Construction Protocols', subtitle: 'Field mapping, aerial photogrammetry, satellite detection, and scar geometry', readingTime: '9 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'C12', title: 'Inventory Uncertainty, Censoring & Sampling Bias', subtitle: 'Road-cut clustering, vegetation concealment, and historical reporting voids', readingTime: '8 min', status: 'AUDIT_FLAG' }
    ]
  },
  {
    id: 'cat-d',
    code: 'D',
    name: 'GIS & Remote Sensing Foundation',
    description: 'Cartographic theory, DEM processing, morphometric derivatives, satellite multispectral sensors, and spectral indices.',
    iconName: 'Layers',
    articles: [
      { id: 'D1', title: 'GIS Fundamentals in Geohazard Assessment', subtitle: 'Spatial primitives, topological relationships, and geospatial overlays', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D2', title: 'Raster vs. Vector Data Models', subtitle: 'Continuous field vs discrete object representations and conversion trade-offs', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D3', title: 'Coordinate Reference Systems & Projections', subtitle: 'EPSG:4326 vs UTM Zone 43N (EPSG:32643) distortion management', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D4', title: 'Spatial Resolution & Modifiable Areal Unit Problem', subtitle: 'Grid cell sizing, aggregation biases, and scale mismatch hazards', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D5', title: 'Digital Elevation Models: Theory & Physics', subtitle: 'Photogrammetric, interferometric SAR, and LiDAR elevation extraction', readingTime: '9 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D6', title: 'DEM vs. DSM vs. DTM: The Canopy Bias Trap', subtitle: 'Why Copernicus GLO-30 DSM captures rainforest canopy top, not bare ground', readingTime: '9 min', status: 'AUDIT_FLAG' },
      { id: 'D7', title: 'Morphometric Terrain Derivatives Overview', subtitle: 'Primary and secondary topographic parameters derived from DEMs', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D8', title: 'Slope Gradient & Aspect Mechanics', subtitle: '3x3 finite-difference algorithms and directional solar-facing effects', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D9', title: 'Profile & Planform Curvature', subtitle: 'Flow acceleration and contour convergence modeling on hillslopes', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D10', title: 'Terrain Ruggedness Index (TRI - Riley)', subtitle: 'Formulation, physical interpretation, and edge-artefact audits', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D11', title: 'Topographic Position Index (TPI - Weiss)', subtitle: 'Landscape scale segmentation into ridges, upper slopes, and valleys', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D12', title: 'Hydrological Terrain Analysis & TWI', subtitle: 'D8/D-infinity flow routing, upslope contributing area, and moisture index', readingTime: '9 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D13', title: 'Satellite Optical Remote Sensing Principles', subtitle: 'Solar irradiance, atmospheric scattering, and surface reflectance', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D14', title: 'Copernicus Sentinel-2 MSI Specifications', subtitle: '13 spectral bands, 5-day revisit, and Sen2Cor L2A processing', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D15', title: 'USGS Landsat Collection 2 Architecture', subtitle: '50-year archive continuity, OLI/TIRS sensors, and Level-2 surface reflectance', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D16', title: 'Normalized Difference Vegetation Index (NDVI)', subtitle: 'Canopy chlorophyll vigor, saturation limits, and false ecological equivalency', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D17', title: 'Normalized Difference Moisture Index (NDMI)', subtitle: 'Foliar liquid water absorption in SWIR bands and moisture tracking', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D18', title: 'Land-Cover Classification Schemes', subtitle: 'ESA WorldCover 11-class typology and monoculture plantation limitations', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D19', title: 'Spatial Overlays & Zonal Statistics', subtitle: 'Vector-on-raster and raster-on-raster aggregation algorithms', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'D20', title: 'Spatial Data Uncertainty & Error Propagation', subtitle: 'Positional uncertainty, thematic misclassification, and Taylor expansion error', readingTime: '9 min', status: 'ESTABLISHED_KNOWLEDGE' }
    ]
  },
  {
    id: 'cat-e',
    code: 'E',
    name: 'Research Data Catalogue',
    description: 'Detailed specifications, provenance records, and quality audits of all acquired spatial and tabular datasets.',
    iconName: 'Database',
    articles: [
      { id: 'E1', title: 'WGEEP Zonation Dataset', subtitle: '174 formal taluka assignments, 34 Kerala matches, and crosswalk confidence', readingTime: '10 min', status: 'SOURCE_DERIVED' },
      { id: 'E2', title: 'Multi-Tier Landslide Inventory', subtitle: '4,728 PointZ scars, 23 curated disaster records, and 5 historical GSI events', readingTime: '11 min', status: 'SOURCE_DERIVED' },
      { id: 'E3', title: 'Copernicus DEM GLO-30 Dataset', subtitle: '8 DGED tiles, mosaic specifications, and documented DSM canopy bias', readingTime: '9 min', status: 'SOURCE_DERIVED' },
      { id: 'E4', title: 'Kerala Administrative Boundaries', subtitle: 'State, 14 districts, and 61 historical taluk polygons from KSREC/Census', readingTime: '8 min', status: 'SOURCE_DERIVED' },
      { id: 'E5', title: 'Geological & Structural Dataset', subtitle: 'Precambrian shear zones, 6 GSI observation points, and lithological gaps', readingTime: '8 min', status: 'SOURCE_DERIVED' },
      { id: 'E6', title: 'IMD Gridded Rainfall Dataset (2018–2024)', subtitle: '0.25° NetCDF4 archive, monsoon precipitation anomalies, and 11 point records', readingTime: '9 min', status: 'SOURCE_DERIVED' },
      { id: 'E7', title: 'ESA WorldCover 2021 (10 m) Land Cover', subtitle: 'Seamless 4-tile mosaic, 11 classes, and Tree Cover vs Forest audit', readingTime: '10 min', status: 'SOURCE_DERIVED' },
      { id: 'E8', title: 'Satellite Multi-Spectral Imagery Archive', subtitle: 'Sentinel-2B L2A tile 43PFP (March 2024) and Landsat 8/9 C2L2 scenes', readingTime: '8 min', status: 'SOURCE_DERIVED' },
      { id: 'E9', title: 'Curated Historical Disaster Catalog', subtitle: 'Pettimudi (2020), Kavalappara (2019), Meppadi (2024), and 2018 events', readingTime: '9 min', status: 'SOURCE_DERIVED' },
      { id: 'E10', title: 'Geotechnical Measurements & Strength Audit', subtitle: '22 rock/soil strength records, laterite 18.5 MPa quarantine, and U01/U02 flags', readingTime: '9 min', status: 'AUDIT_FLAG' }
    ]
  },
  {
    id: 'cat-f',
    code: 'F',
    name: 'Methodology & Research Workflow',
    description: 'End-to-end experimental protocol from study area definition to comparative modeling (Models A, B, C) and open science.',
    iconName: 'Workflow',
    articles: [
      { id: 'F1', title: 'Study Area Definition & Geographic Scope', subtitle: 'The Western Ghats mega-system and the Kerala high-hazard case study', readingTime: '8 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'F2', title: 'Systematic Literature Review Protocol', subtitle: 'Synthesis of 150+ peer-reviewed geohazard and ecological studies', readingTime: '7 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'F3', title: 'WGEEP Indicator Harmonization', subtitle: 'Standardizing disparate administrative zonation scores into GIS rasters', readingTime: '8 min', status: 'PROPOSED_METHOD' },
      { id: 'F4', title: 'Landslide Inventory Segregation & Sampling', subtitle: 'Separating point initiation scars from settlement centroid records', readingTime: '9 min', status: 'PROPOSED_METHOD' },
      { id: 'F5', title: 'Multi-Source Spatial Acquisition Architecture', subtitle: 'Automated retrieval, cryptographic verification, and format harmonization', readingTime: '8 min', status: 'PROPOSED_METHOD' },
      { id: 'F6', title: 'Standardized GIS Preprocessing Pipeline', subtitle: 'Clipping, reprojection, co-registration, and resampling to 30m grid', readingTime: '9 min', status: 'PROPOSED_METHOD' },
      { id: 'F7', title: 'Candidate Predictor Variable Construction', subtitle: 'Deriving 18 physical and ecological conditioning factors', readingTime: '10 min', status: 'PROPOSED_METHOD' },
      { id: 'F8', title: 'Exploratory Spatial Data Analysis (ESDA)', subtitle: 'Bivariate histograms, boxplots, and spatial density heatmaps', readingTime: '8 min', status: 'PROPOSED_METHOD' },
      { id: 'F9', title: 'Multicollinearity & Statistical Feature Screening', subtitle: 'Variance Inflation Factor (VIF < 5) and Spearman rank filtering', readingTime: '8 min', status: 'PROPOSED_METHOD' },
      { id: 'F10', title: 'Machine Learning Model Architecture', subtitle: 'Random Forest, Gradient Boosting, SVM, and Logistic Regression pipelines', readingTime: '10 min', status: 'PROPOSED_METHOD' },
      { id: 'F11', title: 'Spatial Block Cross-Validation Framework', subtitle: 'Preventing spatial data leakage via geographic partitioning blocks', readingTime: '10 min', status: 'PROPOSED_METHOD' },
      { id: 'F12', title: 'Model Interpretability & Explainable AI (XAI)', subtitle: 'SHAP game-theoretic attribution and partial dependence curve inspection', readingTime: '9 min', status: 'PROPOSED_METHOD' },
      { id: 'F13', title: 'Uncertainty Assessment & Sensitivity Audits', subtitle: 'Monte Carlo perturbation and parameter perturbation boundaries', readingTime: '8 min', status: 'PROPOSED_METHOD' },
      { id: 'F14', title: 'Comparative Model Evaluation (Models A, B, C)', subtitle: 'Evaluating whether ecological factors supply marginal predictive utility', readingTime: '11 min', status: 'PROPOSED_METHOD' },
      { id: 'F15', title: 'Research Reproducibility & Open Science Protocols', subtitle: 'Docker containerization, Jupyter pipelines, and git provenance tracking', readingTime: '7 min', status: 'PROPOSED_METHOD' }
    ]
  },
  {
    id: 'cat-g',
    code: 'G',
    name: 'Statistics & Machine Learning',
    description: 'Foundations of spatial statistics, supervised classifiers, spatial cross-validation, and explainable AI algorithms.',
    iconName: 'BarChart3',
    articles: [
      { id: 'G1', title: 'Spatial Statistics Foundation', subtitle: 'Distributions, correlation, spatial autocorrelation, and sampling bias', readingTime: '11 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'G2', title: 'Supervised Classifiers for Susceptibility', subtitle: 'Logistic Regression, Random Forest, XGBoost, and Support Vector Machines', readingTime: '12 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'G3', title: 'Spatial Validation & Generalization', subtitle: 'Data leakage mechanics, spatial blocking, and environmental dissimilarity', readingTime: '10 min', status: 'ESTABLISHED_KNOWLEDGE' },
      { id: 'G4', title: 'Explainable AI (XAI) & SHAP Theory', subtitle: 'Shapley values, TreeSHAP, partial dependence, and epistemic uncertainty', readingTime: '10 min', status: 'ESTABLISHED_KNOWLEDGE' }
    ]
  },
  {
    id: 'cat-h',
    code: 'H',
    name: 'Research Progress & Decisions',
    description: 'Chronological research logs, major scientific governance decisions, and the Master Unresolved Issues Register (U01–U12).',
    iconName: 'History',
    articles: [
      { id: 'H1', title: 'Stage-by-Stage Chronological History', subtitle: 'Reconnaissance, extraction, forensic audits, and Stage 4 spatial acquisition', readingTime: '11 min', status: 'SOURCE_DERIVED' },
      { id: 'H2', title: 'Major Scientific Decisions Log', subtitle: 'Justifications for rejecting synthetic DEMs, naive absences, and interpolation', readingTime: '10 min', status: 'SOURCE_DERIVED' },
      { id: 'H3', title: 'Master Unresolved Issues Register (U01–U12)', subtitle: 'The 12 scientific, spatial, and data limitations controlling project governance', readingTime: '12 min', status: 'AUDIT_FLAG' },
      { id: 'H4', title: 'Research Roadmap & Stage 5+ Horizons', subtitle: 'Transition from verified spatial assets to empirical machine learning models', readingTime: '8 min', status: 'PROPOSED_METHOD' }
    ]
  },
  {
    id: 'cat-i',
    code: 'I',
    name: 'Limitations & Research Gaps',
    description: 'Systematic taxonomy of data, methodological, spatial, temporal, modeling, and interpretive limitations.',
    iconName: 'AlertTriangle',
    articles: [
      { id: 'I1', title: 'Data Limitations & Inventory Completeness', subtitle: 'Point vs polygon geometry, road-cut bias, and missing 1:50k vector geology', readingTime: '9 min', status: 'AUDIT_FLAG' },
      { id: 'I2', title: 'Methodological & Absence Sampling Constraints', subtitle: 'The challenge of generating defensible non-landslide pseudo-absences', readingTime: '9 min', status: 'AUDIT_FLAG' },
      { id: 'I3', title: 'Spatial Resolution Mismatches & Boundary Gaps', subtitle: 'Harmonizing 30m DEM, 10m LULC, 27km rainfall, and taluk polygons', readingTime: '8 min', status: 'AUDIT_FLAG' },
      { id: 'I4', title: 'Temporal Baseline Discrepancies', subtitle: '2018 disaster inventory vs 2021 WorldCover baseline vs 2024 S2 imagery', readingTime: '8 min', status: 'AUDIT_FLAG' },
      { id: 'I5', title: 'Model Limitations & Simplifications', subtitle: 'Binary static classification vs dynamic hydrological trigger physics', readingTime: '8 min', status: 'AUDIT_FLAG' },
      { id: 'I6', title: 'Interpretation Limitations & False Causation', subtitle: 'Spatial association != causation; tree cover != forest; NDVI != ESZ', readingTime: '9 min', status: 'AUDIT_FLAG' }
    ]
  },
  {
    id: 'cat-j',
    code: 'J',
    name: 'Expected Contributions & Future Work',
    description: 'Anticipated academic contributions, methodological innovations, transferability across Western Ghats states, and thesis horizon.',
    iconName: 'GraduationCap',
    articles: [
      { id: 'J1', title: 'Methodological & Conceptual Contributions', subtitle: 'First empirical benchmark testing WGEEP ecological variables in slope models', readingTime: '8 min', status: 'PROPOSED_METHOD' },
      { id: 'J2', title: 'Empirical Findings & Policy Implications', subtitle: 'Translating research findings into participatory landslide risk mitigation', readingTime: '8 min', status: 'PROPOSED_METHOD' },
      { id: 'J3', title: 'Pan-Western Ghats Transferability Roadmap', subtitle: 'Scaling from Kerala to Maharashtra, Goa, Karnataka, and Tamil Nadu', readingTime: '9 min', status: 'PROPOSED_METHOD' }
    ]
  }
];
