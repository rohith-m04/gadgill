import { Article } from '../../types';

export const CATEGORY_C_ARTICLES: Article[] = [
  {
    id: 'C1',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Introduction to Slope Mass Movements',
    subtitle: 'Definitions, historical impact in peninsular India, and socioeconomic toll',
    authorNote: 'In this introductory chapter to landslide science, I establish the physical terminology and examine the escalating frequency and socioeconomic destruction caused by mass movements along the Western Ghats.',
    readingTime: '7 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Introduces the fundamental principles of slope mass movements, defining landslides under international geoscientific standards. Synthesizes the historical footprint of catastrophic slope failures across Kerala and peninsular India, detailing human casualties, infrastructure devastation, and economic disruption.',
    keyTakeaways: [
      'A landslide is defined as the movement of a mass of rock, debris, or earth down a slope under the direct influence of gravity (Cruden & Varnes, 1996).',
      'The Western Ghats of Kerala represents one of India\'s most landslide-vulnerable regions outside the Himalayas, accounting for disproportionate annual disaster damages.',
      'Slope movements are driven by the fundamental struggle between shear stress (gravitational driving forces) and shear strength (internal frictional and cohesive resistance).',
      'Rapid population growth, highland road expansion, commercial monoculture plantations, and intensified monsoon cloudbursts have combined to escalate landslide risk.'
    ],
    sections: [
      {
        id: 'sec-c1-1',
        title: '1. Defining Mass Movement Phenomena',
        content: `In engineering geology and geomorphology, the term **landslide** encompasses a broad spectrum of gravity-driven mass-wasting processes. Following the internationally accepted definitions established by the International Union of Geological Sciences (IUGS) Working Group on Landslides and Cruden & Varnes (1996), a landslide is rigorously defined as:
> *"The movement of a mass of rock, debris, or earth down a slope."*

The term distinguishes mass movements from particulate fluvial sediment transport or aeolian erosion. Landslides involve the coherent or disaggregated displacement of a discrete body of earth materials along identifiable slip surfaces, shear zones, or free-fall trajectories.

The mechanical condition of any hillslope is governed by the classical **Factor of Safety ($FS$)**:
$$FS = \\frac{\\text{Resisting Shear Strength } (\\tau_f)}{\\text{Driving Shear Stress } (\\tau_d)}$$
- If $FS > 1.0$: The slope is theoretically stable.
- If $FS = 1.0$: The slope is in a state of limit equilibrium (imminent failure).
- If $FS < 1.0$: Gravitational failure occurs, resulting in downslope displacement.`
      },
      {
        id: 'sec-c1-2',
        title: '2. The Disastrous Legacy in Kerala',
        content: `Kerala, despite occupying only 1.18% of India's landmass, experiences a disproportionate share of fatal slope failures. The state's unique combination of high population density (nearly 860 persons/km²), intense monsoon precipitation (> 3,000 mm annually), and precipitous Western Ghats escarpments has generated catastrophic landslide milestones:
- **August 2018 Statewide Catastrophe:** Unprecedented continuous rainfall triggered over 4,700 mapped landslide scars across Idukki, Wayanad, Malappuram, and Thrissur districts, contributing to over 480 fatalities and statewide economic losses exceeding ₹31,000 crore ($3.8 billion USD).
- **Kavalappara Disaster (Malappuram, August 2019):** A massive liquefactive debris flow buried an entire hillside village, claiming 59 lives.
- **Pettimudi Disaster (Idukki, August 2020):** A deep-seated rock and debris avalanche initiated at the crest of the Rajamala tea estate, traveling over 1.5 km and burying tea plantation laborer quarters, resulting in 66 fatalities.
- **Meppadi / Chooralmala Disaster (Wayanad, July 2024):** Massive multi-kilometer channelized debris flows wiped out entire settlement clusters along the Iruvaipuzha river corridor, claiming over 350 lives.`
      }
    ],
    relatedArticleIds: ['A2', 'C2', 'C3', 'C7', 'C10', 'E9'],
    sources: [
      { citation: 'Cruden, D. M., & Varnes, D. J. (1996). Landslide types and processes. Special Report - Transportation Research Board, 247, 36–75.', verified: true },
      { citation: 'Geological Survey of India (GSI). (2018). A Comprehensive Report on Landslide Incidences of Kerala Monsoon 2018.', verified: true }
    ]
  },
  {
    id: 'C2',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Kinematic Landslide Classification',
    subtitle: 'Varnes, Cruden & Varnes, and Hungr et al. classification systems',
    authorNote: 'Precise classification of failure kinematics is essential. In my analysis of the 2018 inventory, distinguishing shallow debris slides from channelized debris flows was critical for interpreting conditioning factors.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Examines the evolution of kinematic landslide classification schemes from the foundational Varnes (1978) matrix through Cruden & Varnes (1996) to the updated Hungr et al. (2014) system. Defines the two-component taxonomy based on material type and kinematic movement mechanism.',
    diagramType: 'landslide-mechanisms',
    keyTakeaways: [
      'The standard classification matrix is cross-tabulated by Material Type (Rock, Debris, Earth) and Kinematic Movement Type (Fall, Topple, Slide, Spread, Flow).',
      'Slides are kinematically divided into Rotational (curved, spoon-shaped slip surfaces) and Translational (planar, structural slip surfaces parallel to the slope).',
      'The Hungr et al. (2014) revision introduced refined rheological categories, distinguishing unconfined debris avalanches from channelized debris flows and liquefactive flowslides.',
      'Over 90% of slope failures in Kerala’s Western Ghats classify as shallow translational debris slides that transition rapidly into channelized debris flows (locally termed "Urulpottal").'
    ],
    sections: [
      {
        id: 'sec-c2-1',
        title: '1. The Varnes / Hungr Classification Matrix',
        content: `The international geoscientific community classifies slope mass movements according to two fundamental criteria:
1. **Type of Movement:** The kinematic displacement mode (Fall, Topple, Slide, Spread, Flow).
2. **Type of Material:** The geotechnical nature of the displaced mass prior to initiation (Rock, Debris, Earth):
   - *Rock:* Hard, consolidated, intact or fractured bedrock.
   - *Debris:* Coarse, unconsolidated soil containing $> 20\%$ gravel, cobbles, and boulders.
   - *Earth:* Fine-grained soil dominated by sand, silt, and clay ($< 20\%$ gravel).

The consolidated Hungr et al. (2014) classification matrix summarizes these failure modes:

| Movement Type | In Bedrock (Rock) | In Coarse Regolith (Debris) | In Fine Regolith (Earth) |
|---|---|---|---|
| **Fall** | Rockfall | Debris fall | Earth fall |
| **Topple** | Rock topple | Debris topple | Earth topple |
| **Rotational Slide** | Rock rotational slide (slump) | Debris rotational slide | Earth rotational slide (slump) |
| **Translational Slide** | Rock planar slide / wedge slide | **Debris planar slide (Translational)** | Earth planar slide |
| **Lateral Spread** | Rock spread | Debris spread | Earth spread (liquefactive) |
| **Flow** | Rock avalanche (Sturzstrom) | **Debris flow / Debris avalanche** | Earth flow / Mudflow |`
      },
      {
        id: 'sec-c2-2',
        title: '2. Western Ghats Failure Profile: "Urulpottal"',
        content: `In the Western Ghats of Kerala, the overwhelming majority of fatal landslides exhibit a compound, two-stage kinematic evolution known in Malayalam as **"Urulpottal"**:
1. **Initiation Stage (Translational Debris Slide):** On steep hillslope crests ($25^\circ - 40^\circ$), extreme pore-water pressure causes a shallow slab of saturated lateritic regolith ($1.5\text{ m} - 3.0\text{ m}$ thick) to detach along a planar slip surface at the saprolite-bedrock boundary.
2. **Propagation Stage (Channelized Debris Flow):** As the detached saturated mass accelerates downslope, it entrains boulders, uprooted tree trunks, and saturated colluvium, rapidly liquefying into a high-density, non-Newtonian viscoplastic slurry. The slurry funnels into pre-existing stream channels (first- and second-order gullies), surging down mountain flanks at velocities exceeding $10\text{ m/s} - 25\text{ m/s}$ ($36\text{ km/h} - 90\text{ km/h}$) and traveling several kilometers into valley settlement floors.`
      }
    ],
    relatedArticleIds: ['C1', 'C3', 'C6', 'C7', 'C8', 'E2'],
    sources: [
      { citation: 'Hungr, O., Leroueil, S., & Picarelli, L. (2014). The Varnes classification of landslide types, an update. Landslides, 11(2), 167–194.', verified: true },
      { citation: 'Varnes, D. J. (1978). Slope movement types and processes. Special Report 176, Transportation Research Board, Washington D.C., 11–33.', verified: true }
    ]
  },
  {
    id: 'C3',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Primary Failure Mechanisms in Tropical Regolith',
    subtitle: 'Translational slides, rotational slumps, debris flows, and rockfalls',
    authorNote: 'This article details the exact mechanics and equations governing the four primary failure modes observed in the Western Ghats.',
    readingTime: '11 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Provides a rigorous mechanical and mathematical treatment of the four primary landslide failure modes occurring across the Western Ghats: translational planar slides, rotational slumps, channelized debris flows, and structurally controlled rockfalls. Derives the infinite-slope stability equation and Mohr-Coulomb failure criterion.',
    diagramType: 'landslide-mechanisms',
    keyTakeaways: [
      'Translational Planar Failure: Governed by the infinite-slope limit equilibrium model; failure occurs along planar weaknesses parallel to the ground surface.',
      'Mohr-Coulomb Criterion: Shear strength $\\tau_f = c\' + (\\sigma_n - u)\\tan\\phi\'$, showing how rising pore-water pressure ($u$) directly diminishes effective stress and shear strength.',
      'Channelized Debris Flows: Characterized by high pore-fluid pressures, grain-collision dispersive stresses (Bagnold forces), and massive kinetic energy.',
      'Rotational Slumps: Rare on natural steep Ghats slopes, but common in deep roadside fills, embankment cuts, and modified agricultural bench terraces.'
    ],
    sections: [
      {
        id: 'sec-c3-1',
        title: '1. Mechanics of Translational Planar Slides (Infinite Slope Model)',
        content: `Translational slides are the dominant initiation mechanism in the Western Ghats. Because the depth of the failure surface ($z \\approx 1.5 - 3.0\\text{ m}$) is very small compared to the length and width of the hillslope ($> 50 - 200\\text{ m}$), the mechanical stability of the slope is rigorously modeled using the **Infinite Slope Stability Equation**:

$$FS = \\frac{c' + c_r + \\left(\\gamma_{\\text{sat}} z - \\gamma_w h_w\\right) \\cos^2\\beta \\tan\\phi'}{\\gamma_{\\text{sat}} z \\sin\\beta \\cos\\beta}$$

Where:
- $c'$ = Effective soil cohesion (kPa).
- $c_r$ = Apparent root cohesion supplied by vegetation root matrices (kPa).
- $\\phi'$ = Effective internal angle of friction of the regolith (degrees).
- $\\gamma_{\\text{sat}}$ = Saturated unit weight of regolith ($18 - 20\\text{ kN/m}^3$).
- $\\gamma_w$ = Unit weight of water ($9.81\\text{ kN/m}^3$).
- $z$ = Total vertical depth to the slip surface (m).
- $h_w$ = Height of the transient perched water table above the slip surface (m).
- $\\beta$ = Hillslope inclination angle (degrees).

### Key Mechanical Insights:
1. **Critical Slope Angle:** When cohesion is zero ($c' = 0$) and the soil is completely dry ($h_w = 0$), $FS = \\frac{\\tan\\phi'}{\\tan\\beta}$. The slope fails when $\\beta > \\phi'$ (typically $30^\circ - 35^\circ$ for coarse saprolitic sands).
2. **The Pore-Pressure Destruction:** When continuous extreme rainfall causes a perched water table to rise to the ground surface ($h_w = z$), the effective normal stress is halved:
   $$FS_{\\text{saturated}} \\approx \\frac{\\gamma'}{\\gamma_{\\text{sat}}} \\frac{\\tan\\phi'}{\\tan\\beta} \\approx 0.5 \\frac{\\tan\\phi'}{\\tan\\beta}$$
   Under full saturation, slopes with angles as low as **$15^\circ - 20^\circ$** become thermodynamically unstable and fail abruptly.`
      },
      {
        id: 'sec-c3-2',
        title: '2. Debris Flow Dynamics & Rheology',
        content: `Once initiated, translational debris slides in steep headwater gullies transform into rapid, channelized **debris flows**. Unlike clear-water floods, debris flows are high-concentration, two-phase mixtures of water and solids (sediment concentration by volume $> 50 - 60\\%$):
- **Bagnold Dispersive Stresses:** High-velocity shear within the granular slurry causes inter-particle collisions that generate upward dispersive stresses, driving large boulders ($> 1 - 3\\text{ m}$ diameter) to the surface and front of the flow, forming destructive bouldery surge fronts.
- **Excess Pore-Fluid Pressure:** The presence of fine kaolinitic and gibbsitic clays in the tropical saprolite matrix retards pore-pressure dissipation, maintaining near-zero basal friction and allowing debris flows to surge over low-gradient alluvial fans ($< 5^\circ$) for kilometers.`
      }
    ],
    relatedArticleIds: ['C2', 'C6', 'C7', 'C8', 'D8'],
    sources: [
      { citation: 'Iverson, R. M. (2000). Landslide triggering by rain infiltration. Water Resources Research, 36(7), 1897–1910.', verified: true },
      { citation: 'Skempton, A. W., & Delory, F. A. (1957). Stability of natural slopes in London Clay. Proc. 4th Int. Conf. Soil Mech. Found. Eng., 2, 378–381.', verified: true }
    ]
  },
  {
    id: 'C4',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Lithological & Geological Controls',
    subtitle: 'Precambrian crystalline basement, charnockites, gneisses, and shearing',
    authorNote: 'In Stage 4.3, we cataloged Kerala\'s structural geology. Here, I review how lithology dictates weathering susceptibility, fracture spacing, and mechanical shear strength.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Analyzes the lithological and petrological controls governing slope stability in the Western Ghats. Focuses on the Precambrian crystalline basement—charnockite massifs, hornblende-biotite gneisses, and khondalites—examining their differential weathering pathways, joint persistence, and mechanical shear resistance.',
    previewImage: {
      src: '/previews/kerala_geological_framework_and_observations_map.png',
      caption: 'Kerala geological framework and audited observation sites.',
      sourceDataset: 'GSI Miscellaneous Publication 30 & Stage 4.3 Geological Register'
    },
    keyTakeaways: [
      'The Western Ghats of Kerala is underlain by high-grade metamorphic rocks of the Southern Granulite Terrain (Charnockite Suite: 45–50%; Hornblende-Biotite Gneiss: 30–35%; Khondalite Suite: 10–15%).',
      'Charnockites are massive, dense, quartz-feldspar-hypersthene granulites forming steep cliff-forming escarpments, but weather into grus-like silty sands.',
      'Gneisses possess prominent compositional banding and foliation planes; when foliation dips parallel to the topographic slope (daylighting joints), large-scale planar sliding occurs.',
      'Laterite capping over crystalline basement creates a two-layer mechanical system with sharp permeability contrasts.'
    ],
    sections: [
      {
        id: 'sec-c4-1',
        title: '1. Petrological Suites of the Southern Granulite Terrain',
        content: `The Western Ghats escarpment in Kerala represents an exhumed lower-crustal metamorphic terrain formed during the Neoarchean to Neoproterozoic eras (2,500–550 Ma). The principal rock suites include:

1. **The Charnockite Group:** 
   - Massive, hypersthene-bearing granulites forming the high-relief mountain massifs (Anamalai, Cardamom Hills, Nilgiri plateau).
   - High unconfined compressive strength ($UCS > 100 - 180\\text{ MPa}$ when fresh).
   - Characterized by widely spaced orthogonal joint sets. Weathering produces spheroidal corestones embedded in a sandy, grus-like saprolite matrix.
2. **The Hornblende-Biotite Gneiss (Migmatite Complex):**
   - Dominates midland and foothill belts across Thrissur, Ernakulam, Palakkad, and Malappuram.
   - Exhibits strong metamorphic foliation and schistosity defined by aligned biotite and hornblende sheets.
   - Biotite-rich laminae weather rapidly into slippery chlorite and vermiculite clays, creating planes of profound structural weakness.
3. **The Khondalite Suite (Garnet-Sillimanite-Graphite Gneiss):**
   - Dominates southern Kerala (Thiruvananthapuram and Kollam).
   - Highly susceptible to intense lateritization due to the chemical breakdown of feldspars and sillimanite, yielding thick, soft lithomarge clay profiles.`
      }
    ],
    relatedArticleIds: ['A2', 'C8', 'C9', 'E5', 'E10'],
    sources: [
      { citation: 'Geological Survey of India (GSI). (2005). Geology and Mineral Resources of the States of India: Part IX - Kerala. Miscellaneous Publication No. 30.', verified: true },
      { citation: 'Santosh, M., et al. (2009). Anatomy of a deep crustal shear zone: the Palghat-Cauvery Shear Zone system, southern India. Gondwana Research, 16(3-4), 321–341.', verified: true }
    ]
  },
  {
    id: 'C5',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Geomorphological Controls',
    subtitle: 'Slope gradient thresholds, aspect-solar exposure, and curvature convergence',
    authorNote: 'Slope gradient is universally recognized as the single strongest statistical predictor in landslide susceptibility modeling. Here, I analyze the non-linear thresholds observed in Kerala terrain.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Reviews the primary geomorphological predictors governing hillslope stability: slope gradient, aspect, and profile/planform curvature. Analyzes the empirical slope angle threshold distribution observed across 4,700+ Western Ghats landslides, highlighting why failures cluster predominantly between 20° and 40°.',
    previewImage: {
      src: '/previews/kerala_terrain_slope_preview.png',
      caption: 'Slope gradient distribution across Kerala derived from 30m Copernicus GLO-30 DSM.',
      sourceDataset: 'Copernicus DEM GLO-30 (Stage 4.1)'
    },
    keyTakeaways: [
      'Slope Gradient Thresholds: Minimal landslides occur below 15° (gravitational shear stress insufficient); failures peak between 22° and 35°; frequencies drop above 45° because steep cliffs shed soil continuously, leaving bare rock.',
      'Planform Curvature Convergence: Concave convergent hollows (zero-order basins) concentrate subsurface drainage, accelerating perched pore-pressure spikes.',
      'Aspect Dynamics: West- and southwest-facing slopes receive direct perpendicular impact from moisture-laden monsoon jet streams, experiencing higher cumulative precipitation.'
    ],
    sections: [
      {
        id: 'sec-c5-1',
        title: '1. Slope Gradient: The Non-Linear Threshold',
        content: `In statistical susceptibility modeling, the relationship between slope gradient and landslide frequency is strongly non-linear:
- **Low Slopes ($< 15^\circ$):** Occupy flat coastal plains, river floodplains, and midland plateaus. Gravitational driving stress $\\tau_d = \\gamma z \\sin\\beta \\cos\\beta$ is insufficient to overcome soil cohesion and internal friction. Landslide density is $< 0.1\\%$.
- **Critical Threshold Window ($20^\circ - 38^\circ$):** Represents the geomorphic "sweet spot" for translational debris slides. These slopes are steep enough to generate high gravitational shear stress, yet gentle enough to accumulate thick, weathered saprolitic soil mantles ($1.5 - 5.0\\text{ m}$). Over **$82\\%$ of the 2018 Kerala landslides** fall within this range.
- **Precipitous Cliffs ($> 45^\circ$):** Despite extreme driving shear stresses, landslide frequency drops abruptly because weathering products cannot accumulate. Soils are stripped by continuous creep and erosion as rapidly as they form, exposing bare, competent bedrock where only occasional rockfalls occur.`
      }
    ],
    relatedArticleIds: ['C3', 'D8', 'D9', 'F7'],
    sources: [
      { citation: 'Montgomery, D. R., & Dietrich, W. E. (1994). A physically based model for the topographic control on shallow landsliding. Water Resources Research, 30(4), 1153–1171.', verified: true }
    ]
  },
  {
    id: 'C6',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Hydrological & Hydrogeological Dynamics',
    subtitle: 'Pore-water pressure, perched water tables, and transient seepage forces',
    authorNote: 'Water is the universal trigger. In this article, I derive the mathematical mechanisms by which rainfall infiltration transforms positive pore-water pressure into catastrophic slope collapse.',
    readingTime: '10 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Explores the hydrogeological mechanisms triggering rainfall-induced landslides in tropical saprolitic soils. Analyzes unsaturated matric suction, wetting front advance, formation of transient perched water tables along low-permeability bedrock boundaries, and the physics of positive pore-water pressure spikes.',
    keyTakeaways: [
      'In dry seasons, unsaturated soils remain stable due to negative pore-water pressure (matric suction: $u_a - u_w > 0$), which provides apparent cohesion.',
      'Rainfall infiltration progressively destroys matric suction, advancing a wetting front toward the impermeable saprolite-bedrock contact.',
      'Contrast in hydraulic conductivity ($K_{\\text{saprolite}} / K_{\\text{bedrock}} > 100$) forces infiltrating water to pond, forming a transient perched water table.',
      'Positive pore-water pressure ($u > 0$) directly counteracts total normal stress, reducing effective shear resistance to near zero.'
    ],
    sections: [
      {
        id: 'sec-c6-1',
        title: '1. Matric Suction Destruction and Wetting Front Advance',
        content: `Under antecedent dry conditions, unsaturated regolith above the groundwater table maintains stability through **matric suction** $(\\psi = u_a - u_w)$, where pore-air pressure exceeds pore-water pressure. Following Fredlund et al. (1978), the shear strength of unsaturated soil includes an apparent cohesion component:
$$\\tau_f = c' + (\\sigma_n - u_a) \\tan\\phi' + (u_a - u_w) \\tan\\phi^b$$
Where $\\phi^b$ is the angle defining the rate of strength increase with respect to matric suction.

When prolonged monsoon rainfall infiltrates the ground surface:
1. Soil moisture content increases toward saturation (approaching porosity $n \\approx 40 - 55\\%$).
2. The pore-air-water meniscus flattens, reducing and eventually **completely destroying matric suction** $(u_a - u_w \\to 0)$.
3. This eliminates the apparent root/soil cohesion, causing an immediate drop of $10 - 25\\text{ kPa}$ in resisting shear strength.`
      },
      {
        id: 'sec-c6-2',
        title: '2. The Perched Water Table Mechanism',
        content: `The decisive trigger occurs when infiltrating water reaches the boundary between porous, permeable saprolite ($K_{\\text{sat}} \\approx 10^{-4} - 10^{-5}\\text{ m/s}$) and unweathered crystalline charnockite/gneiss bedrock ($K_{\\text{sat}} \\approx 10^{-7} - 10^{-9}\\text{ m/s}$).

Because the bedrock is virtually impermeable:
- Infiltrating flux exceeds the downward drainage capacity of the rock.
- Water backs up, generating a **transient perched water table** that rises rapidly upward through the saprolite profile ($h_w \\uparrow$).
- Basal pore-water pressure becomes positive: $u = \\gamma_w h_w \\cos^2\\beta$.
- According to Terzaghi's effective stress principle:
  $$\\sigma' = \\sigma_n - u = (\\gamma_{\\text{sat}} z - \\gamma_w h_w) \\cos^2\\beta$$
- When $u$ approaches $\\sigma_n$, effective stress collapses to zero, and the slope fails catastrophically as a translational debris slide.`
      }
    ],
    relatedArticleIds: ['C3', 'C7', 'C8', 'D12'],
    sources: [
      { citation: 'Fredlund, D. G., et al. (1978). The shear strength of unsaturated soils. Canadian Geotechnical Journal, 15(3), 313–321.', verified: true },
      { citation: 'Iverson, R. M. (2000). Landslide triggering by rain infiltration. Water Resources Research, 36(7), 1897–1910.', verified: true }
    ]
  },
  {
    id: 'C7',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Rainfall Triggering Mechanics & Thresholds',
    subtitle: 'Intensity-duration curves, antecedent moisture, and monsoon storm pulses',
    authorNote: 'In Stage 4.4, we acquired the IMD daily gridded rainfall dataset for Kerala (2018–2024). In this article, I analyze the empirical rainfall thresholds that trigger Western Ghats landslides.',
    readingTime: '10 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Reviews rainfall triggering thresholds for shallow landslides and debris flows. Distinguishes between short-term storm intensity (cloudbursts) and long-term antecedent rainfall pre-conditioning, analyzing empirical Intensity-Duration (I-D) power laws and their specific application to the 2018 and 2019 Kerala disasters.',
    previewImage: {
      src: '/previews/imd_mean_annual_rainfall_kerala_map.png',
      caption: 'IMD mean annual rainfall distribution across Kerala (2018–2024) highlighting Western Ghats orographic crests.',
      sourceDataset: 'IMD 0.25° Gridded Rainfall (Stage 4.4)'
    },
    keyTakeaways: [
      'Empirical Intensity-Duration (I-D) thresholds follow the Caine (1980) power-law form: $I = \\alpha D^{-\\beta}$.',
      'In the Western Ghats, catastrophic failures require BOTH high antecedent rainfall ($> 400 - 800\\text{ mm}$ over 20–30 days) and an extreme short-term triggering pulse ($> 150 - 300\\text{ mm}$ in 24 hours).',
      'During August 15–17, 2018, rainfall in Idukki and Wayanad exceeded the 100-year return period threshold, overwhelming slope drainage capacities.',
      'Using localized gauge records without verified coordinates can produce false spatial gradients; continuous gridded products (IMD 0.25°) provide traceable regional baselines.'
    ],
    sections: [
      {
        id: 'sec-c7-1',
        title: '1. The Caine Intensity-Duration (I-D) Threshold Framework',
        content: `Globally, the relationship between rainfall and landslide initiation is commonly characterized by empirical **Intensity-Duration (I-D) power-law thresholds**, pioneered by Caine (1980):
$$I = \\alpha D^{-\\beta}$$
Where:
- $I$ = Mean rainfall intensity ($\text{mm/hour}$).
- $D$ = Rainfall duration ($\text{hours}$).
- $\\alpha$ = Intercept parameter reflecting the rainfall climate and regional geological threshold.
- $\\beta$ = Scaling exponent governing the rate of intensity decay with duration.

If a storm event plots above the regional threshold curve $(I > \\alpha D^{-\\beta})$, landslides are statistically probable.`
      },
      {
        id: 'sec-c7-2',
        title: '2. The Two-Phase Antecedent + Trigger Model in Kerala',
        content: `In the deeply weathered regolith of the Western Ghats, an isolated intense cloudburst on dry soil rarely triggers widespread landslides because unsaturated suction and high soil infiltration capacity absorb the initial pulse. Widespread slope failure requires a **two-phase hydrometeorological sequence**:

1. **Phase 1: Antecedent Saturation (15 to 30 Days):**
   - Continuous moderate to heavy monsoonal rain fills soil macropores, brings the moisture deficit to zero, and raises the regional groundwater table.
   - In Kerala, antecedent precipitation index ($API_{30}$) values exceeding $400 - 600\text{ mm}$ bring hillslopes to critical pre-failure threshold.
2. **Phase 2: The Triggering Deluge (24 to 72 Hours):**
   - A synoptic-scale monsoon low-pressure depression or offshore trough parks over the coast, delivering an intense pulse of $200 - 400\text{ mm/day}$.
   - Because the soil profile is already saturated ($100\%$ field capacity), $100\%$ of new rainfall generates immediate positive pore-water pressure, triggering simultaneous slope failures across entire mountain catchments.`
      }
    ],
    relatedArticleIds: ['A2', 'C6', 'E6', 'F7'],
    sources: [
      { citation: 'Caine, N. (1980). The rainfall intensity-duration control of shallow landslides and debris flows. Geografiska Annaler: Series A, 62(1-2), 23–27.', verified: true },
      { citation: 'Guzzetti, F., et al. (2007). Rainfall thresholds for the initiation of landslides. Meteorological Applications, 14(4), 399–410.', verified: true }
    ]
  },
  {
    id: 'C8',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Deep Weathering, Saprolite & Laterite Profiles',
    subtitle: 'Tropical weathering crusts, lithomargic clays, and sliding interfaces',
    authorNote: 'In Stage 3, we audited 22 geotechnical strength measurements from the research files. Here, I analyze the mechanical reality of tropical weathering profiles and explain why unverified strength values (Issue U01) were quarantined.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Examines the pedological, geotechnical, and mineralogical anatomy of deep tropical weathering profiles in the Western Ghats. Details the weathering grades (I to VI), the chemical transformation of feldspars to kaolinite and gibbsite, the formation of laterite duricrusts, and the critical slip surface formed by lithomargic clay.',
    keyTakeaways: [
      'Tropical weathering transforms hard crystalline rock through six standardized weathering grades: Grade I (Fresh), Grade II (Slightly), Grade III (Moderately), Grade IV (Highly), Grade V (Completely/Saprolite), and Grade VI (Residual Soil).',
      'Saprolite retains relic rock foliation, fractures, and joint orientations, but exhibits low shear strength and high void ratios.',
      'Laterite profiles feature an indurated iron-rich duricrust caprock overlying a weak, plastic, kaolinitic lithomargic clay horizon.',
      'Geotechnical strength parameters vary drastically across weathering grades; assigning blanket strength values (such as the unverified 18.5 MPa caprock UCS in Issue U01) introduces severe model errors.'
    ],
    sections: [
      {
        id: 'sec-c8-1',
        title: '1. Standard Tropical Weathering Profile (ISRM Grades)',
        content: `The International Society for Rock Mechanics (ISRM) classifies weathered rock masses into six progressive grades:

| Weathering Grade | Description | Geomechanical Characteristics in Western Ghats | Typical Cohesion ($c'$) & Friction ($\\phi'$) |
|---|---|---|---|
| **Grade VI** | **Residual Soil / Duricrust** | Completely degraded into soil/laterite crust; rock fabric completely destroyed. | $c' = 5 - 15\\text{ kPa}$, $\\phi' = 24^\circ - 30^\circ$ |
| **Grade V** | **Completely Weathered (Saprolite)** | Rock completely discolored and decomposed into soil; original relict structural fabric preserved. Easily crumbled in hand. | $c' = 0 - 10\\text{ kPa}$, $\\phi' = 28^\circ - 34^\circ$ |
| **Grade IV** | **Highly Weathered Rock** | More than half of rock material decomposed to soil; corestones present. | $c' = 15 - 40\\text{ kPa}$, $\\phi' = 32^\circ - 38^\circ$ |
| **Grade III** | **Moderately Weathered Rock** | Rock discolored; rock fabric intact, but requires light hammer blow to break. | $c' = 50 - 150\\text{ kPa}$, $\\phi' = 36^\circ - 44^\circ$ |
| **Grade II** | **Slightly Weathered Rock** | Slight discoloration along joint margins; fresh rock interior. | $UCS > 60 - 100\\text{ MPa}$ |
| **Grade I** | **Fresh Intact Bedrock** | Completely unweathered crystalline charnockite/gneiss. | $UCS > 100 - 180\\text{ MPa}$ |`
      },
      {
        id: 'sec-c8-2',
        title: '2. The Lithomargic Clay Slip Plane',
        content: `In the midland and highland lateritic belts of Kerala, intense leaching of alkalis and silica under humid monsoonal climates leaves a residual concentration of iron and aluminum oxides. This generates the classic **three-layer profile**:
1. **Upper Indurated Duricrust:** Permeable, cellular, iron-rich laterite caprock.
2. **Intermediate Lithomarge:** Soft, whitish to variegated, plastic silt-clay layer rich in kaolinite, halloysite, and gibbsite ($0.5 - 2.0\text{ m}$ thick).
3. **Basal Bedrock / Hard Saprolite:** Impermeable basement.

During prolonged rain, water rapidly infiltrates through the porous laterite caprock and ponds on top of the impermeable bedrock, saturating the lithomarge layer. When saturated, lithomargic clay undergoes dramatic loss of cohesion ($c' \to 0$) and liquefies, causing the overlying laterite caprock and soil mantle to slide en masse.`
      }
    ],
    relatedArticleIds: ['C4', 'E10', 'H3'],
    sources: [
      { citation: 'ISRM. (1981). Suggested methods for the quantitative description of discontinuities in rock masses. International Society for Rock Mechanics.', verified: true },
      { citation: 'Fookes, P. G. (1997). Tropical Residual Soils. Geological Society, London, Professional Handbook Series.', verified: true }
    ]
  },
  {
    id: 'C9',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Structural Geology & Discontinuities',
    subtitle: 'Foliation joints, regional shear zones, and brittle faulting controls',
    authorNote: 'In Stage 4.3, we documented the regional shear zones of Kerala. Here, I explain the rock mechanics of structural discontinuities in triggering planar rockslides and debris avalanches.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Analyzes structural geological controls on slope stability in crystalline metamorphic rocks. Examines foliation jointing, orthogonal fracture sets, major ductile shear zones (Palghat, Moyar, Achankovil, Bavali), and kinematic daylighting conditions that facilitate planar, wedge, and toppling failures.',
    previewImage: {
      src: '/previews/kerala_structural_shear_zones_and_lineaments_map.png',
      caption: 'Kerala structural shear zones and major fracture lineaments.',
      sourceDataset: 'GSI / GEM Active Faults Audit (Stage 4.3)'
    },
    keyTakeaways: [
      'Intact crystalline rock rarely fails through intact shear; failure almost always propagates along pre-existing structural discontinuities (joints, faults, foliation planes).',
      'Kinematic Daylighting Condition: A planar joint set triggers rockslides when its dip direction matches the topographic slope aspect and its dip angle is less than the slope angle but greater than the friction angle ($\\phi < \\psi_p < \\beta$).',
      'Major Precambrian shear zones in Kerala (Palakkad Gap, Moyar, Bavali, Achankovil) are flanked by intense mylonitization and joint fracturing, predisposing adjacent valley walls to deep weathering and slope failure.'
    ],
    sections: [
      {
        id: 'sec-c9-1',
        title: '1. Discontinuity Kinematics and Markland’s Test',
        content: `In rock mechanics, discontinuities (joints, bedding, schistosity, foliation, shear planes) control rock mass shear strength following Barton’s empirical criterion:
$$\\tau = \\sigma_n \\tan\\left[JRC \\log_{10}\\left(\\frac{JCS}{\\sigma_n}\\right) + \\phi_b\\right]$$
Where $JRC$ is the Joint Roughness Coefficient, $JCS$ is the Joint Wall Compressive Strength, and $\\phi_b$ is the basic friction angle.

Kinematically, planar sliding occurs when a persistent joint set **"daylights"** in the cut slope face:
1. Dip direction of the joint plane is within $\\pm 20^\circ$ of the slope dip direction $(\\alpha_j \\approx \\alpha_s)$.
2. Dip angle of the joint plane is flatter than the slope face inclination $(\\psi_j < \\beta)$, meaning the joint plane emerges ("daylights") in open space.
3. Dip angle of the joint plane is steeper than the effective friction angle $(\\psi_j > \\phi')$, allowing gravitational sliding to overcome frictional resistance.`
      }
    ],
    relatedArticleIds: ['C4', 'E5', 'E10'],
    sources: [
      { citation: 'Hoek, E., & Bray, J. D. (1981). Rock Slope Engineering. Revised 3rd Edition, The Institution of Mining and Metallurgy, London.', verified: true },
      { citation: 'Barton, N. (1973). Review of a new shear-strength criterion for rock joints. Engineering Geology, 7(4), 287–332.', verified: true }
    ]
  },
  {
    id: 'C10',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Susceptibility, Hazard & Risk Differentiation',
    subtitle: 'Clarifying the spatial probability, temporal frequency, and loss equations',
    authorNote: 'A constant source of error in non-specialist literature is conflating susceptibility with hazard and risk. Here, I provide the strict formal mathematical definitions governing this research.',
    readingTime: '7 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Establishes the precise scientific and mathematical distinctions separating landslide susceptibility, hazard, and risk. Explains why this research specifically targets spatial susceptibility modeling, clarifying the data requirements, probabilistic assumptions, and policy utility of each tier.',
    keyTakeaways: [
      'Landslide Susceptibility ($S$): Spatial probability of failure based on terrain and environmental factors: $S = P(L | X)$, where $X$ is a vector of conditioning factors. Purely spatial; does not define WHEN or HOW LARGE.',
      'Landslide Hazard ($H$): Spatiotemporal probability of failure of a given magnitude $M$ within a time window $T$: $H = P(L, M, T)$. Requires dynamic trigger recurrence intervals.',
      'Landslide Risk ($R$): Expected socioeconomic loss: $R = H \\times V \\times E$, where $V$ is vulnerability and $E$ is exposure.',
      'This research models Susceptibility ($S$), not Hazard or Risk, because static and quasi-static spatial factors can be rigorously standardized without fabricating temporal recurrence frequencies.'
    ],
    sections: [
      {
        id: 'sec-c10-1',
        title: '1. The Formal Mathematical Equations',
        content: `Following the international consensus framework formalized by Guzzetti et al. (2005) and the Joint Technical Committee on Landslides (JTC-1, Fell et al., 2008):

### Tier 1: Landslide Susceptibility ($S$)
$$\\text{Susceptibility } S = P(L_i = 1 \\mid \\mathbf{X}_i)$$
Where $L_i \\in \\{0, 1\\}$ represents the presence or absence of a landslide initiation point at spatial coordinate $i$, and $\\mathbf{X}_i = (x_{i1}, x_{i2}, \\dots, x_{ip})$ is a vector of static and quasi-static conditioning factors (slope, aspect, curvature, lithology, land cover, WGEEP zonation). Susceptibility is **unitless** ($0.0$ to $1.0$) and ranks terrain from least to most prone to failure.

### Tier 2: Landslide Hazard ($H$)
$$H = P(L) \\times P(M \\mid L) \\times P(T)$$
Where $P(L)$ is spatial susceptibility, $P(M \\mid L)$ is the probability that the failure exceeds a specific magnitude or volume $M$, and $P(T)$ is the temporal probability of the triggering event (e.g., a 50-year return period rainfall deluge) occurring within time interval $T$.

### Tier 3: Landslide Risk ($R$)
$$R = \\sum \\left( H \\times V \\times E \\right)$$
Where $V$ is vulnerability (the degree of loss to an element at risk, ranging from 0 for undamaged to 1 for total destruction) and $E$ is exposure (the value, count, or population of elements at risk).`
      }
    ],
    relatedArticleIds: ['A1', 'B8', 'F10', 'F14'],
    sources: [
      { citation: 'Guzzetti, F., et al. (2005). Landslide hazard and risk assessment. Earth-Science Reviews, 72(3-4), 272–315.', verified: true },
      { citation: 'Fell, R., et al. (2008). Guidelines for landslide susceptibility, hazard and risk zoning for land use planning. Engineering Geology, 102(3-4), 85–98.', verified: true }
    ]
  },
  {
    id: 'C11',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Landslide Inventory Construction Protocols',
    subtitle: 'Field mapping, aerial photogrammetry, satellite detection, and scar geometry',
    authorNote: 'The quality of any machine learning model is strictly limited by the quality of its training inventory. Here, I review the standards used to build and audit the 2018 Kerala inventory.',
    readingTime: '9 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Reviews standards for constructing landslide inventories. Compares field surveys, aerial photogrammetry, and satellite optical/SAR detection, analyzing the geomechanical differences between mapping initiation headscarps, runout tracks, and deposition zones as points versus full polygon delineations.',
    keyTakeaways: [
      'A complete landslide feature consists of three distinct morphological zones: (1) Depletion Zone / Headscarp; (2) Transport Channel / Runout Track; (3) Deposition Zone / Debris Fan.',
      'Susceptibility modeling must sample strictly from the Initiation Headscarp (where terrain failure conditions originated), NOT from deposition fans or runout channels.',
      'Point inventories (e.g., the 2018 Kerala 4,728-point shapefile) collapse complex 3D scars into single coordinates, introducing positional uncertainty.',
      'Post-disaster mapping must document image acquisition dates, sensor resolution, and field ground-truthing percentages.'
    ],
    sections: [
      {
        id: 'sec-c11-1',
        title: '1. Point vs. Polygon Geometry & The Sampling Trap',
        content: `A central finding of our Stage 3 audit was identifying the mechanical consequences of inventory geometry:
- **Full Polygon Inventory:** Delineates the exact outline of the failure crown, scarp face, transport gully, and debris fan. This represents the gold standard in geomorphology, allowing researchers to extract terrain attributes specifically at the **highest initiation scarp point**.
- **Point Inventory (The Kerala Reality):** The official 2018 GSI dataset (\`Kerela landslide.shp\`) comprises **4,728 PointZ features** ($Z=0$). 
- **The Sampling Trap:** A point placed arbitrarily in the middle of a $2\text{ km}$ debris track captures low valley-bottom slopes ($5^\circ - 10^\circ$) rather than the steep ridge crest ($32^\circ$) where the failure actually initiated. In this research, we cross-referenced point coordinates against high-resolution DEM slope gradients to verify that training points coincide with true initiation envelopes.`
      }
    ],
    relatedArticleIds: ['C2', 'C12', 'E2', 'F4', 'H3'],
    sources: [
      { citation: 'Guzzetti, F., et al. (2012). Landslide inventory maps: New tools for an old problem. Earth-Science Reviews, 112(1-2), 42–66.', verified: true }
    ]
  },
  {
    id: 'C12',
    categoryId: 'cat-c',
    categoryName: 'Landslide Science',
    title: 'Inventory Uncertainty, Censoring & Sampling Bias',
    subtitle: 'Road-cut clustering, vegetation concealment, and historical reporting voids',
    authorNote: 'In this final chapter of Category C, I address the hidden biases lurking in landslide inventories that can severely corrupt machine learning models if not explicitly corrected.',
    readingTime: '8 min',
    lastUpdated: 'November 2026',
    status: 'AUDIT_FLAG',
    abstract: 'Examines systemic sources of bias and uncertainty in landslide inventories. Analyzes infrastructure accessibility bias, dense canopy concealment, historical reporting voids, and the statistical perils of treating mapped point features as independent geomorphic events (Issue U04).',
    keyTakeaways: [
      'Accessibility Bias: Landslides near highways, settlements, and agricultural plantations are mapped with high completeness, while failures in inaccessible pristine interior forests remain unrecorded.',
      'Canopy Concealment: Dense multi-layered tropical evergreen rainforests obscure small shallow debris slides from optical satellites, biasing inventories toward open monocultures.',
      'Issue U04 (Event Clustering): The 4,728 mapped point features do NOT represent 4,728 independent geomorphic events; dozens of points often belong to a single coalescing debris avalanche complex.',
      'Machine learning models trained on biased inventories inadvertently learn road and settlement proximity rather than true physical hillslope failure physics.'
    ],
    sections: [
      {
        id: 'sec-c12-1',
        title: '1. Deconstructing Systematic Inventory Biases',
        content: `A landslide inventory is rarely an unbiased random sample of nature. In the Western Ghats, three major biases dominate:
1. **Infrastructure & Road-Cut Bias:** Field geologists and disaster responders map landslides primarily along transport corridors. Consequently, road-cut slips are overrepresented in training databases, causing machine learning models to assign artificially inflated importance to "Distance to Roads".
2. **Dense Canopy Occlusion:** Optical satellite imagery (Sentinel-2, Landsat) cannot detect shallow slides ($< 10\text{ m}$ width) beneath dense multi-layered evergreen rainforest canopies unless the failure removes the canopy completely. This creates an artificial illusion that intact forests have zero landslides, whereas open monoculture plantations (tea, rubber) show visible scars.
3. **Event Dependency (Issue U04):** During August 2018, single catastrophic mass movements spawned multiple branches and sub-scars. Treating each digitized scar point as an independent statistical event violates the fundamental Independent and Identically Distributed (i.i.d.) assumption of machine learning. Spatial clustering and spatial block cross-validation are required to prevent overoptimistic model fitting.`
      }
    ],
    relatedArticleIds: ['A7', 'C11', 'E2', 'F4', 'G1', 'H3'],
    sources: [
      { citation: 'Steger, S., et al. (2016). The impact of landslide inventory completeness on susceptibility models. Geomorphology, 270, 289–303.', verified: true },
      { citation: 'Carrara, A., et al. (1995). GIS techniques and statistical models in evaluating landslide hazard. Earth Surface Processes and Landforms, 20(3), 271–295.', verified: true }
    ]
  }
];
