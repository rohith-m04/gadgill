import { Article } from '../../types';

export const CATEGORY_G_ARTICLES: Article[] = [
  {
    id: 'G1',
    categoryId: 'cat-g',
    categoryName: 'Statistics & Machine Learning',
    title: 'Spatial Statistics Foundation',
    subtitle: 'Distributions, correlation, spatial autocorrelation, and sampling bias',
    authorNote: 'Spatial data requires spatial statistics. In this article, I review why standard statistical tests fail when spatial autocorrelation is present, deriving Moran’s I and discussing class imbalance.',
    readingTime: '11 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Provides a rigorous mathematical foundation in spatial statistics tailored to geohazard modeling. Covers descriptive distribution moments, Pearson vs Spearman rank correlations, spatial autocorrelation via Global and Local Moran’s I, class imbalance corrections (SMOTE vs downsampling), and the crucial difference between statistical and practical significance.',
    keyTakeaways: [
      'Spatial Autocorrelation (Tobler\'s Law): Pixels close together in space share correlated values, violating the classical Independent and Identically Distributed (i.i.d.) assumption of ordinary least squares.',
      'Moran\'s I Formulation: $I = \\frac{N}{W} \\frac{\\sum_i \\sum_j w_{ij}(z_i - \\bar{z})(z_j - \\bar{z})}{\\sum_i (z_i - \\bar{z})^2}$; values near +1.0 indicate severe spatial clustering.',
      'Severe Class Imbalance: True landslide initiation pixels occupy $< 0.05\\%$ of Kerala’s landscape; naive training causes classifiers to predict 100% non-landslide, achieving 99.95% accuracy while predicting zero disasters.',
      'Statistical Significance vs Practical Relevance: In large datasets ($N > 100,000$), p-values become arbitrarily small even for trivial, practically useless effect sizes.'
    ],
    sections: [
      {
        id: 'sec-g1-1',
        title: '1. Spatial Autocorrelation: Mechanics and Moran’s I',
        content: `In standard statistical inference, observations $(y_1, y_2, \\dots, y_n)$ are assumed to be mutually independent. In spatial environmental modeling, however:
> *"Everything is related to everything else, but near things are more related than distant things."* (Tobler, 1970).

To quantify spatial clustering in landslide conditioning factors, **Global Moran’s I** is computed:
$$I = \\frac{N}{\\sum_{i=1}^N \\sum_{j=1}^N w_{ij}} \\frac{\\sum_{i=1}^N \\sum_{j=1}^N w_{ij} \\left( x_i - \\bar{x} \\right) \\left( x_j - \\bar{x} \\right)}{\\sum_{i=1}^N \\left( x_i - \\bar{x} \\right)^2}$$
Where:
- $N$ = Total number of spatial units.
- $x_i, x_j$ = Attribute values at locations $i$ and $j$.
- $\\bar{x}$ = Mean value of attribute $x$.
- $w_{ij}$ = Spatial spatial weights matrix element ($w_{ij} = 1 / d_{ij}$ or inverse-distance squared).

In Kerala terrain rasters:
- Elevation: $I = +0.89$ (Strong positive spatial autocorrelation).
- Slope: $I = +0.64$ (Moderate spatial autocorrelation along ridge lines).
- IMD Rainfall: $I = +0.94$ (Extremely high spatial autocorrelation due to 27.5 km grid spacing).`
      },
      {
        id: 'sec-g1-2',
        title: '2. The Class Imbalance Problem in Susceptibility Modeling',
        content: `A critical statistical challenge in landslide machine learning is extreme **class imbalance**:
- Kerala’s terrestrial landmass encompasses $38,863\\text{ km}^2$, which at $30\\text{ m}$ resolution contains approximately **$43.1\\text{ million pixels}$**.
- The 4,728 mapped 2018 landslide initiation points occupy approximately **$4,728$ pixels** ($~0.011\\%$ of the study area).
- If a machine learning algorithm is trained naively on the entire landscape, it can achieve a deceptive **$99.989\\%$ classification accuracy** simply by predicting that *zero landslides will ever occur anywhere*!

### Corrective Sampling Strategies:
1. **Targeted Environmental Stratified Downsampling:** Sampling pseudo-absences at a controlled $1:1$ or $1:2$ ratio from non-landslide terrain, while enforcing slope-gradient exclusion boundaries ($< 5^\circ$) to avoid training on obvious coastal flats.
2. **Cost-Sensitive Learning / Class Weighting:** Penalizing false-negative errors during loss optimization:
   $$L = -\\sum_{i=1}^N \\left[ w_1 y_i \\log(p_i) + w_0 (1 - y_i) \\log(1 - p_i) \\right]$$
   Where $w_1 = \\frac{N_0}{N_1}$ scales the loss proportionally to the minority class frequency.`
      }
    ],
    relatedArticleIds: ['F8', 'F9', 'G2', 'G3'],
    sources: [
      { citation: 'Anselin, L. (1995). Local indicators of spatial association—LISA. Geographical Analysis, 27(2), 93–115.', verified: true },
      { citation: 'He, H., & Garcia, E. A. (2009). Learning from imbalanced data. IEEE Transactions on Knowledge and Data Engineering, 21(9), 1263–1284.', verified: true }
    ]
  },
  {
    id: 'G2',
    categoryId: 'cat-g',
    categoryName: 'Statistics & Machine Learning',
    title: 'Supervised Classifiers for Susceptibility',
    subtitle: 'Logistic Regression, Random Forest, XGBoost, and Support Vector Machines',
    authorNote: 'No single classifier is universally superior. In this article, I analyze the four algorithms deployed in our comparative pipeline, comparing parametric baselines with tree ensembles.',
    readingTime: '12 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Provides a thorough theoretical and mathematical examination of four supervised classification algorithms applied to landslide susceptibility modeling: Binary Logistic Regression, Random Forest ensemble, XGBoost gradient boosting, and Support Vector Machines with RBF kernels. Compares loss functions, non-linear feature partitioning, and resistance to overfitting.',
    keyTakeaways: [
      'Logistic Regression: $P(y=1|x) = 1 / (1 + e^{-(\\beta_0 + \\sum \\beta_j x_j)})$; provides odds ratios and parametric transparency, but struggles with non-linear threshold interactions.',
      'Random Forest: Bagging ensemble of de-correlated decision trees; robust against overfitting and feature noise, computes out-of-bag (OOB) error estimates.',
      'XGBoost: Gradient boosting optimizing second-order Taylor expansion of the loss function with L1/L2 leaf regularization; achieves state-of-the-art predictive performance.',
      'Support Vector Machines (SVM): Constructs an optimal separating hyperplane in infinite-dimensional Hilbert space via the Radial Basis Function (RBF) kernel.'
    ],
    sections: [
      {
        id: 'sec-g2-1',
        title: '1. Binary Logistic Regression (Parametric Baseline)',
        content: `Binary Logistic Regression models the log-odds (logit) of landslide occurrence as a linear combination of predictors:
$$\\text{logit}(p) = \\ln\\left(\\frac{p}{1 - p}\\right) = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\dots + \\beta_p X_p$$
Solving for probability $p$:
$$p = P(Y = 1 \\mid \\mathbf{X}) = \\frac{1}{1 + e^{-\\left(\\beta_0 + \\mathbf{\\beta}^T \\mathbf{X}\\right)}}$$
The coefficients $\\beta_j$ have direct physical interpretation: $e^{\\beta_j}$ represents the **odds ratio**. If $\\beta_{\\text{slope}} = 0.08$, an increase of $1^\circ$ in slope angle multiplies the odds of slope failure by $e^{0.08} = 1.083$ ($+8.3\\%$).

*Limitation:* Assumes linear or monotonic relationships between predictors and log-odds, failing to capture threshold phenomena (such as landslides dropping above 45° due to lack of soil).`
      },
      {
        id: 'sec-g2-2',
        title: '2. Random Forest and Gradient Boosting (Non-Parametric Ensembles)',
        content: `### Random Forest (Bagging)
Developed by Breiman (2001), Random Forest builds an ensemble of $B$ independent decision trees:
1. For each tree $b = 1, \\dots, B$, draw a bootstrap sample of size $N$ from the training set.
2. At each node split, randomly select a subset of $m \\approx \\sqrt{p}$ candidate features.
3. Grow trees to maximum depth without pruning.
4. Final susceptibility prediction is the ensemble mean of tree class probabilities:
   $$P(Y = 1 \\mid \\mathbf{X}) = \\frac{1}{B} \\sum_{b=1}^B P_b(Y = 1 \\mid \\mathbf{X})$$

### XGBoost (Gradient Boosting)
XGBoost builds trees sequentially, where each new tree $f_t(x)$ minimizes a regularized objective function:
$$\\mathcal{L}^{(t)} = \\sum_{i=1}^N l\\left(y_i, \\hat{y}_i^{(t-1)} + f_t(\\mathbf{x}_i)\\right) + \\Omega(f_t)$$
Where the regularization term penalizes tree complexity:
$$\\Omega(f) = \\gamma T + \\frac{1}{2} \\lambda \\sum_{j=1}^T w_j^2$$
Where $T$ is the number of terminal leaves, $w$ is leaf weights, and $\\lambda$ is L2 regularization.`
      }
    ],
    relatedArticleIds: ['F10', 'F14', 'G3', 'G4'],
    sources: [
      { citation: 'Breiman, L. (2001). Random forests. Machine Learning, 45(1), 5–32.', verified: true },
      { citation: 'Hastie, T., Tibshirani, R., & Friedman, J. (2009). The Elements of Statistical Learning: Data Mining, Inference, and Prediction. 2nd Edition, Springer.', verified: true }
    ]
  },
  {
    id: 'G3',
    categoryId: 'cat-g',
    categoryName: 'Statistics & Machine Learning',
    title: 'Spatial Validation & Generalization',
    subtitle: 'Data leakage mechanics, spatial blocking, and environmental dissimilarity',
    authorNote: 'The heart of scientific machine learning is honest evaluation. In this article, I mathematically demonstrate why spatial block validation is the only defensible validation strategy.',
    readingTime: '10 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Explores spatial cross-validation strategies designed to evaluate true geographic generalizability. Details spatial data leakage mechanisms, spatial block k-fold partitioning, environmental dissimilarity metrics (Mahalanobis and Euclidean feature space distances), and the trade-off between bias and variance.',
    keyTakeaways: [
      'Random k-Fold Cross-Validation: Evaluates interpolation capability within the training territory, NOT predictive transferability across space.',
      'Spatial Block CV: Evaluates extrapolation capability to unseen geographic landscapes, revealing the true operational utility of the model.',
      'Environmental Dissimilarity: If a test block has a fundamentally different climate or geology than training blocks, model performance will degrade predictably; this must be quantified rather than hidden.',
      'Performance Metrics: Receiver Operating Characteristic (ROC), Area Under Curve (AUC), Precision-Recall Curve (PR-AUC), and Brier Score.'
    ],
    sections: [
      {
        id: 'sec-g3-1',
        title: '1. The Spatial Generalization Paradigm',
        content: `When a model is deployed for real-world disaster management, it is never used to predict landslides at coordinates where geologists have already mapped scars. It is deployed to predict susceptibility in **unmapped valleys, adjacent taluks, or future storm corridors**.

Therefore, the only meaningful metric of model quality is **out-of-region spatial transferability**:
- **Train Fold:** Northern and Central Western Ghats (Wayanad, Palakkad, Thrissur).
- **Test Fold:** Southern Western Ghats (Idukki, Pathanamthitta, Kollam).
- If an integrated model (Model C) maintains an AUC $> 0.80$ when transferred across these structurally distinct geological terrains, the integration of WGEEP ecological variables is empirically validated.`
      }
    ],
    relatedArticleIds: ['F11', 'F14', 'G1', 'H2'],
    sources: [
      { citation: 'Roberts, D. R., et al. (2017). Cross-validation strategies for data with temporal, spatial, or hierarchical structure. Ecography, 40(8), 913–929.', verified: true }
    ]
  },
  {
    id: 'G4',
    categoryId: 'cat-g',
    categoryName: 'Statistics & Machine Learning',
    title: 'Explainable AI (XAI) & SHAP Theory',
    subtitle: 'Shapley values, TreeSHAP, partial dependence, and epistemic uncertainty',
    authorNote: 'We must not only know THAT a model predicts a landslide, but WHY. Here, I review cooperative game theory and the TreeSHAP algorithm.',
    readingTime: '10 min',
    lastUpdated: 'November 2026',
    status: 'ESTABLISHED_KNOWLEDGE',
    abstract: 'Provides a complete mathematical formulation of Explainable Artificial Intelligence (XAI) applied to geohazard modeling. Analyzes cooperative game-theoretic Shapley values, the polynomial-time TreeSHAP algorithm, partial dependence plots, and the distinction between aleatoric and epistemic uncertainty.',
    keyTakeaways: [
      'Shapley Additive Explanations (SHAP): Grounded in Lloyd Shapley’s 1953 Nobel Prize-winning game theory; allocates payout among cooperating players based on marginal contributions.',
      'Four Axioms of Fairness: Efficiency (attributions sum to output shift), Symmetry (equal players get equal attribution), Dummy (zero-impact player gets zero), and Additivity.',
      'TreeSHAP: Computes exact feature attributions for tree ensembles in polynomial time without sampling approximations.',
      'Partial Dependence Plots (PDP): Reveal non-linear thresholds and interaction effects between slope angle, rainfall, and WGEEP ecological zoning.'
    ],
    sections: [
      {
        id: 'sec-g4-1',
        title: '1. Mathematical Axioms of Shapley Values',
        content: `SHAP explains a prediction $f(x)$ as an additive feature attribution model:
$$g(z') = \\phi_0 + \\sum_{j=1}^M \\phi_j z_j'$$
Where $\\phi_0 = E[f(x)]$ is the base value (dataset mean), $z_j' \\in \\{0, 1\\}$ indicates feature presence, and $\\phi_j$ is the Shapley value of feature $j$.

Shapley values are uniquely proven to satisfy four essential axioms:
1. **Efficiency:** $\\sum_{j=1}^M \\phi_j = f(x) - E[f(x)]$. The sum of feature contributions exactly equals the difference between model output and expected baseline.
2. **Symmetry:** If two features $j$ and $k$ contribute identically across all possible subsets ($f(S \\cup \\{j\\}) = f(S \\cup \\{k\\})$), their attributions are equal: $\\phi_j = \\phi_k$.
3. **Dummy / Null Player:** If feature $j$ adds zero marginal gain to every subset ($f(S \\cup \\{j\\}) = f(S)$), its attribution is zero: $\\phi_j = 0$.
4. **Additivity:** For ensemble models $f = f_1 + f_2$, attributions sum: $\\phi_j(f) = \\phi_j(f_1) + \\phi_j(f_2)$.`
      }
    ],
    relatedArticleIds: ['A6', 'F12', 'F14', 'G2'],
    sources: [
      { citation: 'Lundberg, S. M., & Lee, S. I. (2017). A unified approach to interpreting model predictions. Advances in Neural Information Processing Systems, 30, 4765–4774.', verified: true },
      { citation: 'Shapley, L. S. (1953). A value for n-person games. Contributions to the Theory of Games, 2(28), 307–317.', verified: true }
    ]
  }
];
