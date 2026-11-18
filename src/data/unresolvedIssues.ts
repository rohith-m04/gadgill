import { UnresolvedIssue } from '../types';

export const UNRESOLVED_ISSUES: UnresolvedIssue[] = [
  {
    id: 'U01',
    title: 'Geotechnical record 021: Reported 18.5 MPa laterite caprock strength unestablished',
    severity: 'High',
    currentTreatment: 'Quarantined from verified geotechnical data. Preserved in original audit record.',
    resolutionCondition: 'Verify exact source passage, parameter, value, unit and test method. Otherwise retain as unverified.',
    status: 'OPEN',
    evidenceSource: 'SRO-16991.pdf Chapter 4 p. 52, Chapter 6 Table 6.6, Chapter 8 Table 8.14',
    domain: 'Geotechnical',
    implication: 'Prevents assigning uncalibrated 18.5 MPa compressive strength to laterite caprock in slope stability models.'
  },
  {
    id: 'U02',
    title: 'Geotechnical record 022: Reported 2.4 MPa sandstone strength has no established test method',
    severity: 'Medium',
    currentTreatment: 'Retained as source-reported; test method explicitly marked not established.',
    resolutionCondition: 'Find explicit source evidence establishing the testing protocol and core orientation.',
    status: 'OPEN',
    evidenceSource: 'SRO-16991.pdf Chapter 4 p. 54 & Chapter 8',
    domain: 'Geotechnical',
    implication: 'Flags uncertainty in laboratory vs field UCS measurements for sedimentary formations.'
  },
  {
    id: 'U03',
    title: 'Rainfall observations lack verified station coordinates and continuous time series',
    severity: 'High',
    currentTreatment: 'Retained 11 source-verified observations as documentary disaster evidence. Regional interpolation strictly prohibited.',
    resolutionCondition: 'Acquire continuous, spatially referenced gridded rainfall data (e.g., IMD 0.25° or GPM IMERG).',
    status: 'RESOLVED',
    evidenceSource: 'IMD Daily Gridded Rainfall (0.25° NetCDF4 2018–2024); Stage 4.4 Acquisition Report',
    domain: 'Rainfall',
    implication: 'Resolved for regional climatology via Stage 4.4 IMD acquisition. Station-level point coordinates remain non-interpolated.'
  },
  {
    id: 'U04',
    title: '2018 Landslide inventory contains 4,728 mapped point features; event aggregation unknown',
    severity: 'High',
    currentTreatment: 'Treated as mapped scar/initiation features, not 4,728 independent geomorphic events.',
    resolutionCondition: 'Obtain defensible event grouping or scar delineations using dates, spatial clustering, and PDNA reports.',
    status: 'OPEN',
    evidenceSource: 'Kerela landslide.shp (PointZ, Z=0; GSI Geological Survey of India 2018 Kerala Report)',
    domain: 'Landslides',
    implication: 'Statistical independence assumption would be violated if treated as 4,728 separate events; spatial clustering required.'
  },
  {
    id: 'U05',
    title: 'Modern disaster records are community/settlement centroids, not scar slip surfaces',
    severity: 'High',
    currentTreatment: 'Kept as a distinct curated disaster catalog (23 modern records + 5 historical GSI records). Separate from 2018 points.',
    resolutionCondition: 'Verify individual events using dates, locality, post-disaster field reports, and high-res imagery.',
    status: 'OPEN',
    evidenceSource: '2016 to 2026 all landslide data.csv; REVISED_LANDSLIDE_SPATIAL_ASSOCIATION.csv',
    domain: 'Landslides',
    implication: 'Prevents spatial join errors where town centroids do not match steep slope initiation zones.'
  },
  {
    id: 'U06',
    title: 'Authentic continuous DEM missing; previous terrain rasters were unverified',
    severity: 'Critical',
    currentTreatment: 'Acquired Copernicus DEM GLO-30 (30m DSM) across 8 tiles covering Kerala in Stage 4.1.',
    resolutionCondition: 'Acquire authentic continuous DEM, verify coverage, resolution, CRS, vertical datum; derive terrain morphometry.',
    status: 'RESOLVED',
    evidenceSource: 'Copernicus DEM GLO-30 DGED tiles; Stage 4.1 Validation Report (DSM limitation documented)',
    domain: 'DEM',
    implication: 'Resolved with documented limitation: GLO-30 is a DSM representing canopy top, not a bare-earth DTM.'
  },
  {
    id: 'U07',
    title: 'Official taluka boundary polygons missing for WGEEP spatial overlay',
    severity: 'Critical',
    currentTreatment: 'Acquired 61 historical Kerala taluk boundary polygons in Stage 4.2. Reconciled 41 WGEEP assignments.',
    resolutionCondition: 'Acquire authoritative or defensible polygons and document boundary vintage and historical name reconciliation.',
    status: 'RESOLVED',
    evidenceSource: 'Kerala Revenue Department historical taluk GIS layers; WGEEP_FINAL_TALUK_CROSSWALK.csv (Stage 4.2.1)',
    domain: 'Boundaries',
    implication: '34 confident matches, 6 ambiguous historical splits documented with confidence scores, 1 external Mahe assignment.'
  },
  {
    id: 'U08',
    title: 'Continuous regional geological/lithological GIS layers are missing or incomplete',
    severity: 'High',
    currentTreatment: 'Documented 6 GSI observation sites and 7 regional structural shear zones in Stage 4.3.',
    resolutionCondition: 'Acquire continuous 1:50,000 Bhukosh vector lithology and fault GIS layers.',
    status: 'OPEN',
    evidenceSource: 'GSI Miscellaneous Publication 30; Stage 4.3 Kerala Geology Report',
    domain: 'Geology',
    implication: 'Regional lithological unit boundaries cannot be treated as continuous GIS rasters until authoritative vector data is secured.'
  },
  {
    id: 'U09',
    title: 'Goa WGEEP assessment is grid-based (1\'x1\'), not represented by formal taluka appendix assignments',
    severity: 'High',
    currentTreatment: 'Goa maintained strictly separate from the 166 formal taluka assignments across Maharashtra, Karnataka, Kerala, Tamil Nadu.',
    resolutionCondition: 'Reconstruct original Goa 1\' x 1\' grid-level assessment if source maps permit.',
    status: 'OPEN',
    evidenceSource: 'WGEEP Report Vol. 1 p. 25 & pp. 68–74',
    domain: 'WGEEP',
    implication: 'Prevents misrepresenting Goa as having taluka-level ESZ rankings in pan-Western Ghats summaries.'
  },
  {
    id: 'U10',
    title: 'Historical WGEEP taluka names do not match modern post-2013 administrative reorganizations',
    severity: 'High',
    currentTreatment: 'Documented historical taluk crosswalk with confidence tiers (HIGH, MEDIUM, LOW) in Stage 4.2.1.',
    resolutionCondition: 'Create a documented historical-to-current administrative crosswalk with explicit polygon mappings.',
    status: 'RESOLVED',
    evidenceSource: 'WGEEP Final Taluk Crosswalk Register (34 HIGH, 6 MEDIUM, 1 LOW/External)',
    domain: 'Boundaries',
    implication: 'Permits rigorous spatial joins without forcing erroneous matches on bifurcated or renamed taluks.'
  },
  {
    id: 'U11',
    title: 'Defensible negative/absence labels for machine learning are not established',
    severity: 'Critical',
    currentTreatment: 'Do not treat unrecorded locations, low-slope buffers, or arbitrary points as confirmed non-landslide absences.',
    resolutionCondition: 'Develop a defensible environmental dissimilarity or spatial block pseudo-absence strategy with sensitivity audits.',
    status: 'OPEN',
    evidenceSource: 'Stage 3 Closure & Stage 4 Governance Charter; Machine Learning Sampling Protocols',
    domain: 'Sampling',
    implication: 'Critical barrier to Stage 5 model training; naive random sampling would introduce severe false-negative bias.'
  },
  {
    id: 'U12',
    title: 'Landslide inventory heterogeneity across modern disaster records and 2018 mapped points',
    severity: 'Medium',
    currentTreatment: 'Maintain separate layers. Do not merge point scars with settlement disaster records into a single training dataset.',
    resolutionCondition: 'Establish source-specific inclusion criteria, verifying coordinates, dates, and geomorphic validity.',
    status: 'OPEN',
    evidenceSource: 'Curated 23-event disaster catalog vs GSI Spl. Pub 108 (5 events) vs 2018 point shapefile (4,728 features)',
    domain: 'Landslides',
    implication: 'Ensures machine learning training utilizes homogeneous point scar geometries while disaster records serve as validation events.'
  }
];
