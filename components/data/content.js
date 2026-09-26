import {
  Briefcase,
  GraduationCap,
  Building2,
  Calculator,
  Scale,
  Landmark,
  Gavel,
  ShieldCheck,
  BookOpen,
  Users,
  Activity,
  HeartPulse,
  Route,
  Compass,
  Hammer,
  Coins,
  HandCoins,
  FileBarChart,
  CheckCircle2,
  ClipboardList,
  BrainCircuit,
  Library,
  TrendingUp,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Audience — "Who BRIP360 Serves"                                     */
/* ------------------------------------------------------------------ */
export const audience = [
  {
    title: 'Insolvency Practitioners',
    description: 'Run end-to-end appointments with structured workflows and audit trails.',
    icon: Briefcase,
  },
  {
    title: 'Fellows, Associates & Students',
    description: 'Learn, qualify and practise with models aligned to professional standards.',
    icon: GraduationCap,
  },
  {
    title: 'Insolvency Firms',
    description: 'Standardise delivery across teams, offices and client portfolios.',
    icon: Building2,
  },
  {
    title: 'Accountants & Financial Advisors',
    description: 'Assess viability, model recovery options and advise clients with confidence.',
    icon: Calculator,
  },
  {
    title: 'Lawyers & Legal Professionals',
    description: 'Draft notices, filings and reports with compliance-ready templates.',
    icon: Scale,
  },
  {
    title: 'Banks & Lenders',
    description: 'Monitor distressed exposures, claims and recoveries in one dashboard.',
    icon: Landmark,
  },
  {
    title: 'Valuers & Auctioneers',
    description: 'Record valuations, manage asset realisation and track disposal proceeds.',
    icon: Gavel,
  },
  {
    title: 'Regulators & Policymakers',
    description: 'Access anonymised, standards-based data for oversight and policy insight.',
    icon: ShieldCheck,
  },
  {
    title: 'Academia & Researchers',
    description: 'Explore aggregate benchmarks and sector distress intelligence.',
    icon: BookOpen,
  },
  {
    title: 'Other Stakeholders',
    description: 'Creditors, directors, employees and advisers collaborating securely.',
    icon: Users,
  },
];

/* ------------------------------------------------------------------ */
/* Lifecycle — 10 numbered chevron steps                               */
/* ------------------------------------------------------------------ */
export const lifecycleSteps = [
  { step: 1, title: 'Onboard Clients & Cases', color: '#1D4ED8', icon: ClipboardList },
  { step: 2, title: 'Assess Financial Position', color: '#2563EB', icon: Activity },
  { step: 3, title: 'Diagnose Distress & Risks', color: '#3B82F6', icon: HeartPulse },
  { step: 4, title: 'Decide Best Options', color: '#0EA5E9', icon: Compass },
  { step: 5, title: 'Plan Recovery or Insolvency', color: '#14B8A6', icon: Route },
  { step: 6, title: 'Execute Restructure or Administer', color: '#10B981', icon: Hammer },
  { step: 7, title: 'Recover Assets & Value', color: '#059669', icon: Coins },
  { step: 8, title: 'Distribute Proceeds to Creditors', color: '#EAB308', icon: HandCoins },
  { step: 9, title: 'Report Stakeholders & Regulators', color: '#F59E0B', icon: FileBarChart },
  { step: 10, title: 'Close Case & Learn', color: '#EA580C', icon: CheckCircle2 },
];

/* ------------------------------------------------------------------ */
/* Action cards — "What would you like to do?"                         */
/* ------------------------------------------------------------------ */
export const actionCards = [
  {
    title: 'Assess a Distressed Business',
    description: 'Run a structured diagnostic on financial position, cash flow and viability.',
    icon: Activity,
    accent: '#2563EB',
  },
  {
    title: 'Determine Solvency',
    description: 'Test balance-sheet and cash-flow solvency against legal thresholds.',
    icon: ShieldCheck,
    accent: '#10B981',
  },
  {
    title: 'Build 13-Week Cash Flow',
    description: 'Project short-term liquidity and surface funding gaps early.',
    icon: TrendingUp,
    accent: '#0EA5E9',
  },
  {
    title: 'Evaluate Recovery Options',
    description: 'Compare restructure, sale, refinance and insolvency pathways side-by-side.',
    icon: Compass,
    accent: '#8B5CF6',
  },
  {
    title: 'Create Restructuring Plan',
    description: 'Draft a creditor-ready plan with terms, timelines and assumptions.',
    icon: Route,
    accent: '#14B8A6',
  },
  {
    title: 'Open Insolvency Case',
    description: 'Initiate administration, receivership or liquidation with full case controls.',
    icon: Gavel,
    accent: '#F59E0B',
  },
];

/* ------------------------------------------------------------------ */
/* The 18 core platform modules (used for tooltips / hidden content)   */
/* ------------------------------------------------------------------ */
export const coreModules = [
  'Practitioner Workspace',
  'Client & Case Onboarding',
  'Financial Distress Diagnostic',
  'Recovery Options Engine',
  'Restructuring Studio',
  'Insolvency Case Management',
  'Asset & Recovery Management',
  'Creditors & Claims Management',
  'Distribution Engine',
  'Receivership & Liquidation Accounts',
  'Investigation & Forensics',
  'Regulatory & Legal Compliance',
  'Document & Report Generator',
  'Creditor & Client Portal',
  'Knowledge & Models Library',
  'Cross-Border Insolvency',
  'Industry Intelligence',
  'Integration & Ecosystem',
];

/* Feature highlight grid — column 1 */
export const copilotBullets = [
  'Analyze financial statements',
  'Identify risks and anomalies',
  'Model recovery scenarios',
  'Draft professional documents',
];

/* Feature highlight grid — column 2 */
export const libraryBullets = [
  'Financial models',
  'Restructuring models',
  'Insolvency templates',
  'Letters, notices and reports',
];

/* Feature highlight grid — column 3 */
export const intelligenceBullets = [
  'Sector distress trends',
  'Recovery benchmarks',
  'Anonymised industry data',
  'Regulatory updates',
];

export const featureIcons = { BrainCircuit, Library, TrendingUp };
