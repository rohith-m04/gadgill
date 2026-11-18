export interface ArticleSection {
  id: string;
  title: string;
  content: string; // Markdown or rich HTML/JSX compatible text
  subsections?: {
    id: string;
    title: string;
    content: string;
  }[];
}

export interface Article {
  id: string; // e.g. "A1", "B4", "C3"
  categoryId: string; // e.g. "cat-a", "cat-b"
  categoryName: string;
  title: string;
  subtitle?: string;
  authorNote?: string;
  readingTime: string;
  lastUpdated: string;
  status: 'ESTABLISHED_KNOWLEDGE' | 'SOURCE_DERIVED' | 'HYPOTHESIS' | 'PROPOSED_METHOD' | 'AUDIT_FLAG';
  abstract: string;
  sections: ArticleSection[];
  relatedArticleIds: string[];
  keyTakeaways: string[];
  sources: {
    citation: string;
    pageOrSection?: string;
    doiOrUrl?: string;
    verified: boolean;
  }[];
  previewImage?: {
    src: string;
    caption: string;
    sourceDataset: string;
  };
  diagramType?: 'conceptual-framework' | 'wgeep-matrix' | 'landslide-mechanisms' | 'dem-derivatives' | 'model-comparison' | 'methodology-flow' | 'spectral-indices' | 'unresolved-register' | 'rainfall-window';
}

export interface Category {
  id: string;
  code: string;
  name: string;
  description: string;
  iconName: string;
  articles: ArticleSummary[];
}

export interface ArticleSummary {
  id: string;
  title: string;
  subtitle: string;
  readingTime: string;
  status: Article['status'];
}

export interface ReferenceItem {
  id: string;
  citationKey: string;
  title: string;
  authors: string[];
  year: number;
  source: string; // Journal / Book / Official Agency Report
  volumeIssuePages?: string;
  doi?: string;
  url?: string;
  category: 'WGEEP' | 'GSI' | 'REMOTE_SENSING' | 'LANDSLIDE_SCIENCE' | 'MACHINE_LEARNING' | 'METEOROLOGY';
  relevanceToProject: string;
  verified: boolean;
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  category: string;
  definition: string;
  contextInProject: string;
  relatedTerms: string[];
  articleLink?: string;
}

export interface UnresolvedIssue {
  id: string; // U01 - U12
  title: string;
  severity: 'Critical' | 'High' | 'Medium';
  currentTreatment: string;
  resolutionCondition: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  evidenceSource: string;
  domain: 'Geotechnical' | 'Rainfall' | 'Landslides' | 'DEM' | 'Boundaries' | 'Geology' | 'WGEEP' | 'Sampling';
  implication: string;
}

export interface SpatialDatasetSpec {
  id: string;
  name: string;
  stage: string;
  authority: string;
  nativeResolution: string;
  spatialCoverage: string;
  temporalCoverage: string;
  format: string;
  crs: string;
  dataQualityStatus: 'VALIDATED' | 'PROVISIONALLY_ACCEPTED' | 'QUARANTINED' | 'IN_PROGRESS';
  knownLimitations: string[];
  checksum?: string;
  previewImage?: string;
  downloadSize?: string;
  description: string;
}
