import { Article } from '../../types';

export const CATEGORY_J_ARTICLES: Article[] = [
  {
    id: 'J1',
    categoryId: 'cat-j',
    categoryName: 'Expected Contributions & Future Work',
    title: 'Methodological & Conceptual Contributions',
    subtitle: 'First empirical benchmark testing WGEEP ecological variables in slope models',
    authorNote: 'In this concluding section, I articulate the anticipated academic contributions of this research, detailing how our findings will advance the geohazard literature.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Articulates the core academic and methodological contributions of this research. Highlights the first reproducible benchmark integrating WGEEP ecological zoning with physical slope mechanics, the deployment of Spatial Block Cross-Validation in the Western Ghats, and game-theoretic explainable AI attribution.',
    keyTakeaways: [
      'First Empirical Bridge: Establishes the first data-grounded benchmark testing whether WGEEP ecological sensitivity classifications supply non-redundant predictive information in landslide susceptibility models.',
      'Methodological Rigor: Replaces flawed random cross-validation with Spatial Block Cross-Validation, preventing spatial data leakage.',
      'Explainable AI Integration: Uses TreeSHAP to dismantle the machine learning black-box, providing transparent feature attribution for disaster managers.',
      'Full Computational Reproducibility: Delivers fully audited, open-source code and metadata manifests following FAIR data principles.'
    ],
    sections: [
      {
        id: 'sec-j1-1',
        title: '1. Anticipated Academic Innovations',
        content: `This research contributes four major advances to the international literature on geohazard assessment and environmental policy:
1. **Bridging the Disciplinary Chasm:** Provides a reproducible methodological blueprint for operationalizing broad, qualitative ecological policy frameworks into continuous and discrete GIS predictor variables suitable for machine learning.
2. **The Tri-Model Comparative Paradigm:** Rather than simply building a single complex model and claiming success, the explicit comparison of **Model A** (Physical), **Model B** (Ecological), and **Model C** (Integrated) isolates the exact marginal value added by ecological data.
3. **Audit-Gated Data Governance:** Establishes a gold standard in data transparency by openly documenting unresolved data gaps (Issues U01–U12) and quarantining synthetic or unverified assets rather than silently smoothing them over.`
      }
    ],
    relatedArticleIds: ['A1', 'A5', 'F14', 'G4'],
    sources: [
      { citation: 'Reichenbach, P., et al. (2018). A review of statistically-based landslide susceptibility models. Earth-Science Reviews, 180, 60–91.', verified: true }
    ]
  },
  {
    id: 'J2',
    categoryId: 'cat-j',
    categoryName: 'Expected Contributions & Future Work',
    title: 'Empirical Findings & Policy Implications',
    subtitle: 'Translating research findings into participatory landslide risk mitigation',
    authorNote: 'Science should serve society. Here, I discuss how our empirical models can inform grassroots disaster risk governance and participatory land-use planning.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Explores the policy implications of integrating ecological sensitivity into disaster risk reduction. Discusses how fine-scale spatial susceptibility maps can empower local Gram Sabhas and Panchayats, resolve land-use zoning conflicts, and guide climate-resilient infrastructure development.',
    keyTakeaways: [
      'Empowering Local Governance: Translating complex geohazard models into accessible village-level hazard overlays for Gram Sabhas under the 73rd Constitutional Amendment.',
      'Targeted Risk Interventions: Identifying high-susceptibility zones within ESZ-2 and ESZ-3 areas that may require urgent slope stabilization or quarrying moratoria.',
      'Moving Beyond Bivariate Polemics: Providing evidence-based modeling that disproves both pure ecological fatalism and pure physical denial.'
    ],
    sections: [
      {
        id: 'sec-j2-1',
        title: '1. Bridging Science and Grassroots Governance',
        content: `A central vision of the WGEEP report was the democratic devolution of environmental decision-making to local **Gram Sabhas and Panchayats**. 

However, local communities currently lack objective, high-resolution scientific data regarding slope stability:
- By delivering validated, interpretable susceptibility maps that highlight specific slope angles, drainage hollows, and vegetative buffers, this research provides local governments with actionable planning tools.
- Panchayats can use these maps to designate local no-build hazard zones, regulate road excavations, manage plantation drainage terraces, and identify safe shelter locations during monsoon emergencies.`
      }
    ],
    relatedArticleIds: ['B2', 'B4', 'F14'],
    sources: [
      { citation: 'Gadgil, M., et al. (2011). Report of the Western Ghats Ecology Expert Panel. Vol. 1, Chapter 5.', verified: true }
    ]
  },
  {
    id: 'J3',
    categoryId: 'cat-j',
    categoryName: 'Expected Contributions & Future Work',
    title: 'Pan-Western Ghats Transferability Roadmap',
    subtitle: 'Scaling from Kerala to Maharashtra, Goa, Karnataka, and Tamil Nadu',
    authorNote: 'Kerala is the proving ground, but the Western Ghats spans five states. In this final article, I outline the technical roadmap for scaling our framework across the entire mountain system.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'PROPOSED_METHOD',
    abstract: 'Outlines the future research roadmap for scaling the empirical modeling framework from Kerala to the other four Western Ghats states: Maharashtra, Goa, Karnataka, and Tamil Nadu. Analyzes state-specific geomorphic variations, inventory acquisition challenges, and the potential for a unified pan-Western Ghats geohazard atlas.',
    keyTakeaways: [
      'Phase 1: Complete and publish the Kerala high-resolution empirical modeling benchmark (Stage 5 and Stage 6).',
      'Phase 2: Expand to the Nilgiri and Anamalai sectors of Tamil Nadu, leveraging comparable Precambrian granulite lithology and historical tea plantation records.',
      'Phase 3: Scale to the Central Western Ghats of Karnataka (Uttara Kannada, Kodagu, Chikmagalur), adapting to Dharwar craton geology.',
      'Phase 4: Address the Northern Western Ghats of Maharashtra, calibrating models to sub-horizontal Deccan volcanic basalt terraces and extreme monsoon intensities.'
    ],
    sections: [
      {
        id: 'sec-j3-1',
        title: '1. State-Specific Scaling Challenges',
        content: `Extending the framework beyond Kerala involves distinct geological and environmental adaptations:
- **Tamil Nadu (Nilgiris & Kanyakumari):** High susceptibility around Ooty and Coonoor, where extensive road cuts and tea plantations in deeply weathered charnockites experience frequent translational failures.
- **Karnataka (Kodagu & Western Escarpment):** The August 2018 disasters also devastated Kodagu district; applying our WGEEP crosswalk will allow direct comparison between Karnataka’s ESZ-1 talukas and Kerala’s adjacent Wayanad slopes.
- **Maharashtra (Deccan Traps):** Stepped basaltic lava terraces create different failure kinematics, dominated by rockfalls, debris slides along red-bole intertrappean horizons, and plateau-margin rotational slumps.
- **Goa (1\' x 1\' Grid Integration):** Requires reconstructing the fine-scale grid methodology used in WGEEP Volume 1 to assess iron-ore mining impacts on hillslope stability.`
      }
    ],
    relatedArticleIds: ['A7', 'B1', 'B6', 'H4'],
    sources: [
      { citation: 'Gadgil, M., et al. (2011). Report of the Western Ghats Ecology Expert Panel. Volumes 1 & 2.', verified: true }
    ]
  }
];
