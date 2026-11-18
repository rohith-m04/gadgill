import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'WGEEP',
    slug: 'wgeep',
    category: 'Ecological Policy',
    definition: 'Western Ghats Ecology Expert Panel, established in March 2010 by the Ministry of Environment and Forests (MoEF), Government of India, chaired by Prof. Madhav Gadgil. Tasked with assessing the ecological status of the Western Ghats mountain range and recommending zoning protocols.',
    contextInProject: 'Serves as the foundational ecological-sensitivity framework tested in this research to determine if its socio-ecological variables improve physical landslide susceptibility models.',
    relatedTerms: ['Gadgil Report', 'ESA', 'ESZ']
  },
  {
    term: 'Gadgil Report',
    slug: 'gadgil-report',
    category: 'Ecological Policy',
    definition: 'The landmark 2011 report titled "Report of the Western Ghats Ecology Expert Panel" authored by Prof. Madhav Gadgil et al. Proposes a stratified, participatory conservation architecture designating the entire Western Ghats into three Ecologically Sensitive Zones (ESZ-1, ESZ-2, ESZ-3).',
    contextInProject: 'Contains the original 174 formal taluka assignments (166 in core states) analyzed and reconciled with modern GIS boundaries.',
    relatedTerms: ['WGEEP', 'ESZ', 'Kasturirangan Report']
  },
  {
    term: 'Ecologically Sensitive Area (ESA)',
    slug: 'esa-ecologically-sensitive-area',
    category: 'Ecological Policy',
    definition: 'A designated geographical territory under Section 3 of the Environment (Protection) Act, 1986, characterized by high bio-richness, unique endemic species, steep climatic gradients, and susceptibility to environmental degradation where developmental activities are regulated.',
    contextInProject: 'WGEEP recommended that the entire Western Ghats mountain system (~129,037 km²) be declared an Ecologically Sensitive Area.',
    relatedTerms: ['WGEEP', 'ESZ']
  },
  {
    term: 'Ecologically Sensitive Zone (ESZ)',
    slug: 'esz',
    category: 'Ecological Policy',
    definition: 'Hierarchical regulatory tiers defined by WGEEP: ESZ-1 (highest sensitivity; strict conservation, ban on mining/quarrying/dams), ESZ-2 (moderate sensitivity; regulated activities), and ESZ-3 (lowest sensitivity; sustainable development encouraged).',
    contextInProject: 'Operationalized in this research as categorical and ordinal candidate predictor variables in comparative machine learning models.',
    relatedTerms: ['WGEEP', 'Gadgil Report']
  },
  {
    term: 'Landslide Susceptibility',
    slug: 'landslide-susceptibility',
    category: 'Landslide Science',
    definition: 'The spatial likelihood or probability of a landslide occurring in an area based entirely on local terrain, geological, hydrologic, and land-cover conditioning factors, WITHOUT considering the temporal probability of triggering events or hazard magnitude.',
    contextInProject: 'The primary spatial modeling target of this research. Distinct from landslide hazard (which includes timing/recurrence) and landslide risk (which includes socioeconomic vulnerability).',
    relatedTerms: ['Landslide Hazard', 'Landslide Risk', 'Conditioning Factor']
  },
  {
    term: 'Landslide Hazard',
    slug: 'landslide-hazard',
    category: 'Landslide Science',
    definition: 'The probability that a landslide of a given magnitude or volume will occur within a specified geographical area and within a specified period of time, explicitly integrating dynamic triggers such as extreme rainfall return periods or seismic shaking.',
    contextInProject: 'This research models susceptibility, not hazard, because temporal trigger recurrence intervals are not modeled dynamically across all 4,728 scars.',
    relatedTerms: ['Landslide Susceptibility', 'Landslide Risk']
  },
  {
    term: 'Landslide Risk',
    slug: 'landslide-risk',
    category: 'Landslide Science',
    definition: 'The expected degree of loss (fatalities, injuries, property damage, economic disruption) resulting from a landslide hazard, calculated as the mathematical product: Risk = Hazard x Vulnerability x Exposure.',
    contextInProject: 'Socioeconomic vulnerability assessments lie beyond the immediate scope of this physical-ecological susceptibility investigation.',
    relatedTerms: ['Landslide Susceptibility', 'Landslide Hazard']
  },
  {
    term: 'Conditioning Factor',
    slug: 'conditioning-factor',
    category: 'GIS & Modeling',
    definition: 'A static or quasi-static environmental, geomorphological, or geological parameter that predisposes a slope to failure (e.g., slope angle, aspect, plan curvature, lithology, distance to faults, soil depth, land cover).',
    contextInProject: 'Conventional factors (Model A) are compared against WGEEP ecological variables (Model B) and combined factors (Model C).',
    relatedTerms: ['Triggering Factor', 'Terrain Derivatives']
  },
  {
    term: 'Regolith & Saprolite',
    slug: 'regolith-saprolite',
    category: 'Geology',
    definition: 'Regolith is the complete mantle of loose, unconsolidated rock and soil overlying intact bedrock. Saprolite is chemically weathered bedrock formed in situ, retaining the structural fabrics and relic joints of the parent rock but possessing low mechanical shear strength.',
    contextInProject: 'In the Western Ghats, catastrophic debris flows and shallow translational slides typically initiate at the sharp hydraulic conductivity boundary between saprolite and impermeable crystalline bedrock.',
    relatedTerms: ['Lithology', 'Laterite', 'Shear Strength']
  },
  {
    term: 'Laterite & Lateritization',
    slug: 'laterite-lateritization',
    category: 'Geology',
    definition: 'A residual soil and rock product rich in iron and aluminum oxides formed by prolonged tropical weathering under alternating wet and dry seasons. Often capped by an indurated duricrust overlying a soft, mottled lithomargic clay layer.',
    contextInProject: 'Audited in Stage 3 (quarantining unverified 18.5 MPa UCS record U01). The interface between hard laterite caprock and weak underlying lithomarge creates classical slip planes.',
    relatedTerms: ['Regolith & Saprolite', 'UCS']
  },
  {
    term: 'Digital Elevation Model (DEM)',
    slug: 'dem',
    category: 'Remote Sensing',
    definition: 'A generic term for a digital 3D representation of a terrain surface. Must be technically distinguished into Digital Surface Models (DSM) and Digital Terrain Models (DTM).',
    contextInProject: 'Acquired Copernicus GLO-30 in Stage 4.1 to derive slope, aspect, curvature, TRI, and TPI across Kerala.',
    relatedTerms: ['DSM', 'DTM', 'Copernicus DEM']
  },
  {
    term: 'Digital Surface Model (DSM)',
    slug: 'dsm',
    category: 'Remote Sensing',
    definition: 'An elevation model that captures the top surfaces of all features on Earth, including tree canopies, vegetation, buildings, and other elevated structures (e.g., Copernicus GLO-30, SRTM, AW3D30).',
    contextInProject: 'Identified as a critical scientific limitation: in dense Ghats forests, GLO-30 measures the tree canopy, overestimating ground elevation by 15–30 m and smoothing fine-scale gully morphology.',
    relatedTerms: ['DEM', 'DTM']
  },
  {
    term: 'Digital Terrain Model (DTM)',
    slug: 'dtm',
    category: 'Remote Sensing',
    definition: 'A bare-earth elevation model where all vegetation, canopy cover, and man-made structures have been digitally filtered out, representing the true bare topographic ground surface (typically derived from airborne LiDAR).',
    contextInProject: 'An airborne LiDAR DTM is currently unavailable across Kerala, necessitating careful documentation of DSM canopy bias.',
    relatedTerms: ['DEM', 'DSM']
  },
  {
    term: 'Terrain Ruggedness Index (TRI)',
    slug: 'tri',
    category: 'Terrain Analysis',
    definition: 'A morphometric index proposed by Riley et al. (1999) that quantifies topographic heterogeneity by calculating the root mean square deviation of elevation between a center pixel and its eight surrounding neighbors.',
    contextInProject: 'Derived from GLO-30 in Stage 4.1. Edge-pixel artefacts along state borders and water bodies were audited and documented.',
    relatedTerms: ['TPI', 'Terrain Derivatives']
  },
  {
    term: 'Topographic Position Index (TPI)',
    slug: 'tpi',
    category: 'Terrain Analysis',
    definition: 'An index developed by Weiss (2001) that measures the difference between the elevation of a central cell and the average elevation of its neighborhood. Positive values indicate ridges/crests; negative values indicate valleys/incised channels.',
    contextInProject: 'Used to classify landscape position and identify concave slope segments susceptible to convergent pore-water accumulation.',
    relatedTerms: ['TRI', 'Curvature']
  },
  {
    term: 'Normalized Difference Vegetation Index (NDVI)',
    slug: 'ndvi',
    category: 'Remote Sensing',
    definition: 'A normalized spectral ratio measuring photosynthetic activity: NDVI = (NIR - Red) / (NIR + Red). Ranges from -1.0 to +1.0, where dense green canopies typically yield values from 0.6 to 0.9.',
    contextInProject: 'Derived from Sentinel-2 L2A in Stage 4.5. Crucial scientific rule enforced: NDVI measures chlorophyll vigor, NOT ecological integrity or biodiversity.',
    relatedTerms: ['NDMI', 'Sentinel-2']
  },
  {
    term: 'Normalized Difference Moisture Index (NDMI)',
    slug: 'ndmi',
    category: 'Remote Sensing',
    definition: 'A spectral index sensitive to foliar and canopy water content: NDMI = (NIR - SWIR) / (NIR + SWIR). Complements NDVI by tracking water stress and antecedent moisture in dense vegetation.',
    contextInProject: 'Processed at 20m resolution in Stage 4.5 to quantify canopy moisture gradients across the Western Ghats escarpment.',
    relatedTerms: ['NDVI', 'Sentinel-2']
  },
  {
    term: 'IMD Daily Gridded Rainfall',
    slug: 'imd-gridded-rainfall',
    category: 'Meteorology',
    definition: 'A continuous, spatially interpolated daily precipitation archive provided by the India Meteorological Department at 0.25° x 0.25° resolution (~27.5 km grid), constructed using Shepard interpolation from quality-controlled rain-gauge stations.',
    contextInProject: 'Acquired in Stage 4.4 for 2018–2024 (NetCDF4) to establish regional monsoon rainfall anomalies and antecedent precipitation indices.',
    relatedTerms: ['GPM IMERG', 'Antecedent Rainfall']
  },
  {
    term: 'Spatial Autocorrelation & Moran\'s I',
    slug: 'spatial-autocorrelation',
    category: 'Spatial Statistics',
    definition: 'The formal property where spatial observations located close to one another in geographic space exhibit correlated attribute values (Tobler\'s First Law of Geography). Quantified using Moran\'s I or Geary\'s C.',
    contextInProject: 'Severe spatial autocorrelation in landslide points violates standard i.i.d. assumptions in machine learning, necessitating spatial cross-validation.',
    relatedTerms: ['Spatial Cross-Validation', 'Data Leakage']
  },
  {
    term: 'Spatial Block Cross-Validation',
    slug: 'spatial-block-cv',
    category: 'Machine Learning',
    definition: 'A validation protocol that partitions geographic space into contiguous spatial tiles, blocks, or administrative polygons, training models on one set of blocks and testing on completely unseen, distant geographic blocks.',
    contextInProject: 'Mandatory in this research to prevent spatial data leakage and guarantee that reported model performance reflects true geographic generalizability.',
    relatedTerms: ['Spatial Autocorrelation', 'Data Leakage', 'Overfitting']
  },
  {
    term: 'Data Leakage',
    slug: 'data-leakage',
    category: 'Machine Learning',
    definition: 'A catastrophic machine learning flaw where information from the validation or test dataset is inadvertently shared with the training set, causing deceptively inflated performance metrics that collapse upon real-world deployment.',
    contextInProject: 'In spatial modeling, random k-fold cross-validation causes spatial data leakage because training and testing pixels are sampled from immediately adjacent coordinates.',
    relatedTerms: ['Spatial Block Cross-Validation', 'Overfitting']
  },
  {
    term: 'SHAP (SHapley Additive exPlanations)',
    slug: 'shap',
    category: 'Machine Learning',
    definition: 'A game-theoretic framework based on Shapley values that calculates the fair marginal contribution of each predictor variable to an individual model prediction, providing both global and local explainability.',
    contextInProject: 'Used in Stage 5 to evaluate whether WGEEP ecological variables supply meaningful marginal information over conventional terrain and rainfall predictors.',
    relatedTerms: ['Feature Importance', 'Machine Learning']
  },
  {
    term: 'Area Under the ROC Curve (AUC-ROC)',
    slug: 'auc-roc',
    category: 'Machine Learning',
    definition: 'A threshold-independent performance metric measuring the discriminatory capability of a binary classifier across all decision thresholds. AUC = 0.5 indicates random guessing; AUC = 1.0 indicates perfect separation.',
    contextInProject: 'Primary benchmark used to compare Model A (Conventional), Model B (Ecological), and Model C (Integrated).',
    relatedTerms: ['Machine Learning', 'Spatial Block Cross-Validation']
  }
];
