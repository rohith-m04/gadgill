# Western Ghats Research Knowledge Base & Academic Portal

[![Stage](https://img.shields.io/badge/Research%20Stage-Stage%204.5%20Validated-163323.svg)](https://github.com/rohith-m04/gadgill)
[![License](https://img.shields.io/badge/License-CC%20BY%204.0%20%2F%20Academic-blue.svg)](LICENSE)
[![Framework](https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Vite%20%7C%20Tailwind-emerald.svg)](package.json)

> **Research Project:** *Integration of the Western Ghats Ecology Expert Panel (WGEEP/Gadgil) Ecological Sensitivity Framework with Landslide Susceptibility Assessment Using GIS, Remote Sensing, Statistical Analysis and Machine Learning.*

---

## 📌 Central Research Question

> *"Can ecological sensitivity information derived from the WGEEP/Gadgil framework be operationalized and empirically evaluated alongside conventional geomorphological, geological, climatic and land-cover predictors to improve spatial landslide susceptibility assessment, interpretability and transferability?"*

---

## 🌿 Overview

This repository contains the complete web-based research portal and scientific knowledge base for ongoing academic research in the Western Ghats (Kerala case study). It serves as:
- **An Academic Research Portal:** Full documentation of research background, objectives, and testable hypotheses.
- **A Scientific Knowledge Base:** Over 80 detailed academic articles across Categories A through L.
- **An Interactive Research Textbook:** Simulators for landslide failure kinematics, pore-water pressure triggering, and spatial data models.
- **A Project Methodology Documentation System:** Detailed tri-model comparative architecture (Models A, B, and C) and Spatial Block Cross-Validation.
- **An Evolving Research Archive:** Live tracking of the Master Unresolved-Issues Register (U01–U12) and cryptographic data manifests.

---

## 🏛️ Information Architecture (Categories A–L)

- **Category A — Project Foundation:** Motivation, background, research problem, questions, objectives, hypotheses, scope, and conceptual framework.
- **Category B — Western Ghats & Gadgil Framework:** Geography, WGEEP panel mandate, Gadgil Report (2011), ESZ 1/2/3 zonation, indicator matrix, spatial discrepancies (174 vs 166 talukas, Goa grid assessment), and ecological sensitivity vs slope instability distinctions.
- **Category C — Landslide Science:** Failure kinematics, Varnes/Hungr classification, translational slides, debris flows ("Urulpottal"), lithological controls, pore-water pressure physics, and inventory bias.
- **Category D — GIS & Remote Sensing Foundation:** CRS projections (EPSG:4326 vs UTM Zone 43N), DEM vs DSM vs DTM canopy bias, Horn's slope algorithm, curvature, TRI, TPI, TWI, Sentinel-2 L2A, Landsat C2, NDVI, NDMI, and WorldCover 11-class typology.
- **Category E — Research Data Catalogue:** Detailed provenance, specs, and limitations for Copernicus DEM GLO-30, Kerala administrative boundaries (61 historical taluks), GSI geology, IMD 0.25° gridded rainfall, and ESA WorldCover 2021 (10m).
- **Category F — Methodology & Research Workflow:** 15-phase pipeline from study area definition to 30m grid alignment, pseudo-absence sampling (U11), comparative model training (Models A, B, C), spatial block CV, and TreeSHAP.
- **Category G — Statistics & Machine Learning:** Spatial autocorrelation (Moran's I), class imbalance, Logistic Regression, Random Forest, XGBoost, Support Vector Machines, spatial data leakage, and game-theoretic Shapley values.
- **Category H — Research Progress & Decisions:** Stage-by-stage chronological history (Stages 1–4.5), major scientific decisions log, and the Master Unresolved-Issues Register (U01–U12).
- **Category I — Limitations & Research Gaps:** Systematic taxonomy of data, methodological, spatial, temporal, modeling, and interpretation limitations.
- **Category J — Expected Contributions & Future Work:** Academic contributions, participatory risk governance for Panchayats, and pan-Western Ghats transferability roadmap.
- **Category K — References & Reading Library:** Searchable, verified academic bibliography.
- **Category L — Scientific Glossary:** Searchable A–Z technical lexicon with cross-links.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended; developed on Node v22)
- [npm](https://www.npmjs.com/)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rohith-m04/gadgill.git
   cd gadgill
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173/
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🗺️ Verified Spatial Assets Included (Previews)

The repository embeds 20 authentic high-resolution preview maps generated during Stages 4.1–4.5:
- Copernicus DEM GLO-30 30m Elevation, Slope, and Hillshade.
- Kerala State, 14 Districts, and 61 Historical Taluk Boundary Polygons.
- WGEEP Taluk ESZ Crosswalk Confidence Maps.
- GSI Geological Framework, Observation Sites, and Precambrian Shear Zones.
- IMD Daily Gridded Mean Annual and Southwest Monsoon Precipitation Maps.
- ESA WorldCover 2021 10m Classification Map and District Composition Charts.
- Sentinel-2B Level-2A Cloud-Masked 20m NDVI & NDMI Western Ghats Maps.
- 4,756 Mapped Landslide Initiation Points Spatial Overlay.

---

## ⚖️ Scientific Governance & Ethics

- **Zero Data Fabrication:** All spatial and statistical analyses originate strictly from verifiable public agency archives (ESA, Copernicus, USGS, IMD, GSI, Census of India).
- **Tree Cover ≠ Natural Forest:** Satellite Class 10 (Tree Cover) conflates commercial monocultures (rubber, tea) with primary rainforest; plantations are strictly not treated as natural forest.
- **NDVI ≠ Ecological Sensitivity:** Optical greenness reflects chlorophyll absorption, not biodiversity or WGEEP conservation priority.
- **Spatial Overlap ≠ Causation:** Landslides clustering in Tree Cover (88.29%) reflects steep slope topography (> 20°), not botanical causation.

---

## 📄 Citation & Attribution

If referencing this knowledge base or its methodological frameworks:

```bibtex
@misc{rohith2026wgeep_landslides,
  author = {Rohith, M.},
  title = {Integration of the WGEEP/Gadgil Ecological Sensitivity Framework with Landslide Susceptibility Assessment: Academic Knowledge Base},
  year = {2026},
  publisher = {GitHub},
  howpublished = {\url{https://github.com/rohith-m04/gadgill}}
}
```
