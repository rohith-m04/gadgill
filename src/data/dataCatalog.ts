import { SpatialDatasetSpec } from '../types';

export const SPATIAL_DATASETS: SpatialDatasetSpec[] = [
  {
    id: 'ds-dem-glo30',
    name: 'Copernicus DEM GLO-30 Digital Surface Model (Kerala Study Area)',
    stage: 'Stage 4.1',
    authority: 'European Space Agency (ESA) / Airbus Defence & Space / Copernicus',
    nativeResolution: '1.0 arc-second (~30 m at equator)',
    spatialCoverage: 'State of Kerala (8 DGED Tiles: N08–N12, E074–E077)',
    temporalCoverage: 'Acquisition baseline 2011–2015 (TanDEM-X radar mission)',
    format: 'Cloud Optimized GeoTIFF (COG), 32-bit floating point, LZW compression',
    crs: 'EPSG:4326 (WGS 84 geographic 2D) / Vertical: EGM2008 geoid',
    dataQualityStatus: 'PROVISIONALLY_ACCEPTED',
    knownLimitations: [
      'Digital Surface Model (DSM), NOT a bare-earth Digital Terrain Model (DTM). Represents canopy top elevation.',
      'Canopy height bias in dense Western Ghats rainforests can overestimate ground elevation by 15–30 meters.',
      'Derived terrain curvature, TRI, and TPI exhibit NoData-edge boundary artefacts and must be masked along coastal/state margins.',
      'Vertical accuracy reported as LE90 < 4 m globally, but degraded in steep complex terrain (> 30°).'
    ],
    checksum: 'Verified independently across all 8 tiles (e.g. N09_E076: bcfa8b8a...)',
    previewImage: '/previews/kerala_dem_elevation_preview.png',
    downloadSize: '210.4 MB (Raw 8 tiles) / 58.2 MB (Mosaicked & Masked)',
    description: 'Continuous elevation model providing baseline morphometric parameters (slope, aspect, curvature, TRI, TPI, and hydrological catchment areas) for landslide conditioning factor modeling.'
  },
  {
    id: 'ds-admin-boundaries',
    name: 'Kerala State, District & Historical Taluk Administrative Boundaries',
    stage: 'Stage 4.2 & 4.2.1',
    authority: 'Kerala State Remote Sensing & Environment Centre (KSREC) / Survey of India / Census 2011',
    nativeResolution: 'Vector polygon geometry (1:50,000 cartographic scale)',
    spatialCoverage: '1 State boundary, 14 Revenue Districts, 61 Historical Taluk Polygons',
    temporalCoverage: 'Census 2001/2011 historical baseline (aligned with WGEEP 2011 reporting)',
    format: 'OGC GeoPackage (.gpkg) and GeoJSON',
    crs: 'EPSG:4326 (WGS 84 geographic)',
    dataQualityStatus: 'VALIDATED',
    knownLimitations: [
      'Historical taluk configuration (61 taluks) differs from modern post-2013 administrative structure (77 taluks).',
      'WGEEP crosswalk reconciliation established: 34 HIGH confidence matches, 6 MEDIUM confidence matches due to taluk splits (e.g., Konni from Kozhencherry, Kattakkada from Nedumangad), and 1 external Mahe assignment.',
      'Cannot be used blindly with post-2015 census revenue records without historical-to-current crosswalk lookup.'
    ],
    checksum: 'SHA-256 validated across state, district, and taluk layers',
    previewImage: '/previews/kerala_wgeep_taluk_esz_crosswalk_map.png',
    downloadSize: '4.8 MB total vector package',
    description: 'Definitive administrative boundary layers required to map WGEEP taluk-level ecological sensitivity recommendations (ESZ-1, ESZ-2, ESZ-3) and spatially associate landslide occurrences with governance units.'
  },
  {
    id: 'ds-worldcover-10m',
    name: 'ESA WorldCover 2021 v200 Global Land Cover (10 m)',
    stage: 'Stage 4.5',
    authority: 'European Space Agency (ESA) / VITO Remote Sensing',
    nativeResolution: '10 m x 10 m (0.00008333°)',
    spatialCoverage: 'State of Kerala (4 COG Tiles: N06E075, N09E075, N12E075, N12E072; 100% terrestrial coverage)',
    temporalCoverage: 'Calendar Year 2021 composite (Sentinel-1 SAR + Sentinel-2 MSI)',
    format: 'Cloud Optimized GeoTIFF (uint8), LZW compressed',
    crs: 'EPSG:4326 (WGS 84)',
    dataQualityStatus: 'VALIDATED',
    knownLimitations: [
      'Tree Cover (Class 10) constitutes 85.89% of Kerala, but CONFLATES natural primary rainforest with commercial monoculture plantations (rubber, tea, coffee, eucalyptus, teak).',
      'Tree cover must NOT be reported as "Natural Forest". Plantations have drastically different root cohesion, interception, and understory hydrology.',
      '88.29% of 2018 mapped landslides fall within Tree Cover; this reflects steep slope topographic conditioning (> 20°), NOT botanical causation.',
      'Post-2018 landslide scars appear as Bare (Class 60) or regenerating Grassland (Class 30) due to 2021 image timing.'
    ],
    checksum: '1f8980291fa6f3f87dab439b9095b2e2280b7ccc014ebdd1d97b1b8724552daa',
    previewImage: '/previews/kerala_esa_worldcover_2021_map.png',
    downloadSize: '229.2 MB (Source 4 tiles) / 42.7 MB (State Mosaic)',
    description: 'High-resolution primary land cover baseline classifying Kerala into 11 standardized classes, capturing the physical surface medium across midland and highland escarpments.'
  },
  {
    id: 'ds-sentinel2-indices',
    name: 'Copernicus Sentinel-2B Level-2A BOA Surface Reflectance & Vegetation Indices (NDVI / NDMI)',
    stage: 'Stage 4.5',
    authority: 'European Space Agency (ESA) / Copernicus Open Access Hub',
    nativeResolution: '20 m (resampled from 10m/20m native bands)',
    spatialCoverage: 'MGRS Tile 43PFP (Western Ghats: Palakkad, Silent Valley, Nilgiri foothills, Wayanad margin)',
    temporalCoverage: 'Acquired 2024-03-26 05:07:09 UTC (Dry pre-monsoon baseline, 0.81% cloud cover)',
    format: 'GeoTIFF (float32), Deflate compressed',
    crs: 'EPSG:32643 (WGS 84 / UTM Zone 43N)',
    dataQualityStatus: 'VALIDATED',
    knownLimitations: [
      'Scene Classification Layer (SCL) cloud/shadow masking removes 9.88% of tile pixels.',
      'High NDVI (> 0.7) measures chlorophyll absorption and photosynthetic vigor, NOT biodiversity or ecological sensitivity. Rubber monocultures often exhibit higher NDVI than natural shola grasslands.',
      'Monsoon season optical imagery suffers from > 85% cloud occlusion; dry season baseline required for clean optical indices.'
    ],
    checksum: 'NDVI: 196d1afbc46d7fcd... / NDMI: 2323fafdb2e9ad3e...',
    previewImage: '/previews/sentinel2_ndvi_western_ghats_map.png',
    downloadSize: '120.7 MB (NDVI) + 127.5 MB (NDMI)',
    description: 'High-resolution multi-spectral vegetation vigor (NDVI) and canopy moisture (NDMI) layers with strict SCL cloud-shadow masking, establishing biophysical canopy state prior to monsoonal saturation.'
  },
  {
    id: 'ds-landslide-inventory',
    name: 'Kerala Multi-Tier Landslide Inventory (2018 Mapped Features & Curated Disaster Records)',
    stage: 'Stage 2 & Stage 3 Audit',
    authority: 'Geological Survey of India (GSI) / Kerala State Disaster Management Authority (KSDMA) / PDNA',
    nativeResolution: 'Point features (PointZ, Z=0) and tabular disaster records',
    spatialCoverage: 'State of Kerala (predominantly Idukki, Wayanad, Malappuram, Thrissur, Palakkad)',
    temporalCoverage: '2018 Disaster Mapped Scars (August 2018) + 2016–2024 Modern Disaster Records + 5 Historical GSI Events',
    format: 'ESRI Shapefile, GeoJSON, and CSV',
    crs: 'EPSG:4326 (WGS 84)',
    dataQualityStatus: 'PROVISIONALLY_ACCEPTED',
    knownLimitations: [
      '4,728 mapped point features (4,756 in standardized GeoJSON) represent mapped scar locations, NOT 4,728 independent geomorphic events.',
      'Structurally verified in GIS does NOT mean independently ground-truthed. Field verification conducted on only a subset by GSI.',
      'Modern disaster records (23 events) and historical records (5 events) are community/settlement centroids and must remain quarantined from point scar training data.',
      'Significant reporting bias toward road corridors, populated settlements, and infrastructure.'
    ],
    checksum: 'Validated in Stage 3 Master Inventory Audit',
    previewImage: '/previews/kerala_landslide_inventory_landcover_overlay_map.png',
    downloadSize: '1.2 MB vector files',
    description: 'The primary empirical landslide inventory for spatial modeling, structured into segregated tiers to prevent conflating mapped point initiation scars with town disaster records.'
  },
  {
    id: 'ds-imd-rainfall',
    name: 'IMD Daily Gridded Rainfall Dataset (0.25° x 0.25° NetCDF4)',
    stage: 'Stage 4.4',
    authority: 'India Meteorological Department (IMD) Pune / Ministry of Earth Sciences (MoES)',
    nativeResolution: '0.25° x 0.25° (~27.5 km at Kerala latitudes)',
    spatialCoverage: 'State of Kerala and adjacent Western Ghats (Latitude 8.0°N–13.0°N, Longitude 74.5°E–77.75°E; 31 grid cells)',
    temporalCoverage: 'Daily time series: 2018-01-01 to 2024-12-31 (7 calendar years; 2,557 days)',
    format: 'NetCDF4 (compressed chunked arrays) and CSV summary matrices',
    crs: 'EPSG:4326 (WGS 84 regular grid)',
    dataQualityStatus: 'VALIDATED',
    knownLimitations: [
      'Coarse spatial resolution (0.25°) smooths localized orographic rainfall spikes along steep escarpment crests.',
      'Cannot resolve localized micro-bursts or cloudburst events occurring within < 5 km valleys.',
      'Station observations (11 source-verified records) lack verified coordinates and cannot be interpolated across the state without introducing severe false spatial gradients.',
      'Useful for regional antecedent rainfall indexing, but not for micro-scale slope failure triggering analysis.'
    ],
    checksum: 'NetCDF4 SHA-256 validated in Stage 4.4 Report',
    previewImage: '/previews/imd_mean_annual_rainfall_kerala_map.png',
    downloadSize: '38.4 MB (NetCDF4 time series)',
    description: 'Long-term, daily continuous gridded precipitation archive capturing annual southwest and northeast monsoon cycles and extreme storm anomalies during the August 2018 and August 2019 disaster periods.'
  },
  {
    id: 'ds-geology-structural',
    name: 'Kerala Geological Framework, Structural Shear Zones & Geotechnical Verification',
    stage: 'Stage 4.3 & Stage 3 Audits',
    authority: 'Geological Survey of India (GSI) / Literature / SRO-16991',
    nativeResolution: 'Site-specific observation points (6 sites) and 7 regional structural lineament features',
    spatialCoverage: 'Precambrian crystalline basement (Charnockites, Khondalites, Gneisses) and Western Ghats shears (Palakkad Gap, Moyar, Achankovil, Bavali)',
    temporalCoverage: 'Precambrian lithology with Cenozoic lateritization',
    format: 'GeoJSON, OGC GeoPackage, and verified attribute CSVs',
    crs: 'EPSG:4326 (WGS 84)',
    dataQualityStatus: 'PROVISIONALLY_ACCEPTED',
    knownLimitations: [
      'Continuous 1:50,000 Bhukosh vector lithological GIS layer is NOT yet acquired; regional lithology is currently represented by documentary observation sites.',
      'Geotechnical measurement 021 (reported 18.5 MPa laterite caprock UCS) is quarantined under issue U01 due to lack of source substantiation.',
      'Measurement 022 (2.4 MPa sandstone strength) lacks an established testing protocol (U02).',
      'Cannot be used to build a continuous lithological raster without acquiring authoritative state-wide vector geology.'
    ],
    checksum: 'Documented in Stage 4.3 Register',
    previewImage: '/previews/kerala_structural_shear_zones_and_lineaments_map.png',
    downloadSize: '2.1 MB vector and tabular packages',
    description: 'Documentary structural geology and lithological observation register cataloging major Precambrian shear zones, fracture lineaments, and audited rock mass strength parameters.'
  }
];
