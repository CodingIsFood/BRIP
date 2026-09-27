import {
  Activity,
  Route,
  Coins,
  FileBarChart,
  Briefcase,
  Library,
  TrendingUp,
  ShieldCheck,
  Scale,
  Landmark,
  Gavel,
  Users,
  Building2,
  FileText,
  Network,
  LineChart,
  Search,
  PieChart,
  Globe2,
  Sparkles,
  BookOpen,
  Video,
  GraduationCap,
  Newspaper,
  Award,
  Rocket,
} from 'lucide-react';

/* ================================================================== */
/* SOLUTIONS PAGE                                                      */
/* ================================================================== */
export const solutionPillars = [
  {
    title: 'Diagnose & Decide',
    description:
      'Assess financial position, test solvency and surface the realistic recovery pathways available to a distressed business.',
    icon: Activity,
    accent: '#2563EB',
    module: 'Financial Distress Diagnostic',
  },
  {
    title: 'Restructure Viable Businesses',
    description:
      'Model, negotiate and document restructuring plans end-to-end, from creditor terms to board-ready approvals.',
    icon: Route,
    accent: '#10B981',
    module: 'Restructuring Studio',
  },
  {
    title: 'Administer Insolvency',
    description:
      'Run administration, receivership and liquidation engagements with structured workflows and full audit trails.',
    icon: Gavel,
    accent: '#8B5CF6',
    module: 'Insolvency Case Management',
  },
  {
    title: 'Recover & Distribute Assets',
    description:
      'Track realisations, adjudicate creditor claims and apply a distribution engine that produces defensible accounts.',
    icon: Coins,
    accent: '#0EA5E9',
    module: 'Distribution Engine',
  },
  {
    title: 'Report & Comply',
    description:
      'Generate statutory reports, notices and filings with regulatory and legal compliance checks built in.',
    icon: FileBarChart,
    accent: '#F59E0B',
    module: 'Regulatory & Legal Compliance',
  },
  {
    title: 'Collaborate Securely',
    description:
      'Give creditors, clients and advisers a secure portal to share documents, monitor progress and stay informed.',
    icon: Users,
    accent: '#14B8A6',
    module: 'Creditor & Client Portal',
  },
];

export const audienceDetail = [
  { role: 'Insolvency Practitioners', icon: Briefcase, benefit: 'Structured appointments, schedules of work and audit-ready records.' },
  { role: 'Insolvency Firms', icon: Building2, benefit: 'Consistent delivery, team collaboration and portfolio-wide oversight.' },
  { role: 'Accountants & Advisors', icon: ShieldCheck, benefit: 'Viability assessment, solvency testing and recovery option modelling.' },
  { role: 'Lawyers & Legal', icon: Scale, benefit: 'Compliant notices, filings and document automation.' },
  { role: 'Banks & Lenders', icon: Landmark, benefit: 'Visibility over distressed exposures, claims and recoveries.' },
  { role: 'Valuers & Auctioneers', icon: Gavel, benefit: 'Valuation records and asset realisation tracking in one place.' },
];

/* ================================================================== */
/* TOOLS PAGE                                                          */
/* ================================================================== */
export const toolCategories = [
  {
    category: 'Assessment & Diagnostics',
    icon: Activity,
    accent: '#2563EB',
    tools: [
      'Financial Distress Diagnostic',
      'Detailed Solvency Test',
      '13-Week Cash Flow Builder',
      'Viability Screening',
    ],
  },
  {
    category: 'Recovery & Modelling',
    icon: TrendingUp,
    accent: '#10B981',
    tools: [
      'Recovery Options Engine',
      'Restructuring Plan Builder',
      'Scenario & Sensitivity Models',
      'Creditor Negotiation Schedules',
    ],
  },
  {
    category: 'Insolvency Administration',
    icon: Gavel,
    accent: '#8B5CF6',
    tools: [
      'Case Opening Workflow',
      'Asset & Recovery Ledger',
      'Claims Adjudication',
      'Distribution Calculator',
    ],
  },
  {
    category: 'Reporting & Compliance',
    icon: FileBarChart,
    accent: '#F59E0B',
    tools: [
      'Statutory Report Generator',
      'Notices & Letters Library',
      'Regulatory Filing Checklists',
      'Receiver & Liquidator Accounts',
    ],
  },
];

export const modelLibrary = [
  { name: 'Financial Models', desc: 'Integrated three-statement, cash flow and covenant models.', icon: LineChart },
  { name: 'Restructuring Models', desc: 'Debt-for-equity, scheme and workout modelling templates.', icon: PieChart },
  { name: 'Insolvency Templates', desc: 'Engagement letters, notices, statements of affairs and reports.', icon: FileText },
  { name: 'Letters & Notices', desc: 'Standardised creditor, director and regulator correspondence.', icon: Newspaper },
  { name: 'Investigation & Forensics', desc: 'Transaction testing and asset tracing workpapers.', icon: Search },
  { name: 'Cross-Border Toolkits', desc: 'Recognition and cooperation templates for cross-border cases.', icon: Globe2 },
];

/* ================================================================== */
/* KNOWLEDGE HUB PAGE                                                  */
/* ================================================================== */
export const knowledgeResources = [
  { type: 'Guide', title: 'A Practitioner\u2019s Guide to Business Recovery in Nigeria', desc: 'The full lifecycle, from early warning signs to case closure.', icon: BookOpen, accent: '#2563EB' },
  { type: 'Model', title: '13-Week Cash Flow Master Template', desc: 'A ready-to-use liquidity forecasting model with commentary.', icon: LineChart, accent: '#10B981' },
  { type: 'Webinar', title: 'Solvency Testing Explained', desc: 'On-demand session covering balance-sheet and cash-flow tests.', icon: Video, accent: '#8B5CF6' },
  { type: 'Course', title: 'Introduction to Insolvency Administration', desc: 'Structured learning for associates and students.', icon: GraduationCap, accent: '#0EA5E9' },
  { type: 'Template', title: 'Statutory Notice & Letter Pack', desc: 'A compliant set of notices, letters and filings.', icon: FileText, accent: '#F59E0B' },
  { type: 'Article', title: 'Sector Distress Trends: H1 2026', desc: 'Anonymised benchmarks across key Nigerian sectors.', icon: TrendingUp, accent: '#14B8A6' },
];

export const insightStats = [
  { value: '1,240+', label: 'Practitioners & firms onboarded' },
  { value: '3,800+', label: 'Cases managed on-platform' },
  { value: '18', label: 'Integrated core modules' },
  { value: '36', label: 'States and FCT supported' },
];

export const knowledgeFaqs = [
  {
    question: 'What is the BRIP360 Knowledge Hub?',
    answer:
      'A curated library of guidance, models, templates, webinars and courses designed to help practitioners, firms, associates and students deliver recovery and insolvency work to a consistent professional standard.',
  },
  {
    question: 'Is the content aligned to Nigerian standards?',
    answer:
      'Yes. All resources are developed around Nigerian legal and regulatory expectations and are structured to support BRIPAN members and professional best practice.',
  },
  {
    question: 'Can firms contribute their own models?',
    answer:
      'Firms can publish approved internal models and templates to their own private workspace, ensuring consistency across teams while keeping proprietary content secure.',
  },
  {
    question: 'How often is new content added?',
    answer:
      'New guides, templates and insights are released regularly, alongside quarterly industry intelligence reports drawn from anonymised platform data.',
  },
];

/* ================================================================== */
/* PRICING PAGE                                                        */
/* ================================================================== */
export const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    cadence: '',
    tagline: 'For students, associates and individuals exploring recovery & insolvency.',
    features: [
      '1 active case',
      'Core diagnostics & solvency test',
      '13-week cash flow builder',
      'Knowledge Hub (read-only)',
      'Community support',
    ],
    cta: 'Create Free Account',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '\u20a645,000',
    cadence: '/month',
    tagline: 'For practising insolvency professionals and sole practitioners.',
    features: [
      'Up to 25 active cases',
      'Full Recovery Options Engine',
      'Restructuring Studio',
      'Document & Report Generator',
      'BRIP AI Copilot',
      'Priority email support',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Firm',
    price: '\u20a6225,000',
    cadence: '/month',
    tagline: 'For insolvency firms and multi-disciplinary advisory teams.',
    features: [
      'Unlimited cases',
      'Up to 25 team seats',
      'Portfolio dashboards & roles',
      'Models & Templates Library',
      'Client & creditor portals',
      'Dedicated success manager',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    tagline: 'For banks, regulators and institutions with bespoke requirements.',
    features: [
      'Everything in Firm',
      'SSO & advanced security',
      'API & ecosystem integrations',
      'Industry Intelligence access',
      'Cross-border case support',
      'Tailored onboarding & SLAs',
    ],
    cta: 'Request a Demo',
    highlight: false,
  },
];

export const pricingFaqs = [
  {
    question: 'Do I need a credit card to start?',
    answer:
      'No. The Starter plan is free forever and Professional includes a free trial period — no card required to begin.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Yes. You can upgrade, downgrade or cancel at any time, and your data and case history always remain intact.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'BRIP360 is built with security and privacy by design, including role-based access, encryption and full audit trails on every action.',
  },
  {
    question: 'Do you offer support for firms?',
    answer:
      'Firm and Enterprise plans include priority support, onboarding assistance and a dedicated success manager for larger teams.',
  },
];

/* ================================================================== */
/* ABOUT PAGE                                                          */
/* ================================================================== */
export const aboutValues = [
  { title: 'Professional First', desc: 'Everything we build respects the rigour and responsibility of the profession.', icon: Award, accent: '#2563EB' },
  { title: 'Compliance Ready', desc: 'Standards-based workflows keep every case defensible and auditable.', icon: ShieldCheck, accent: '#10B981' },
  { title: 'Built for Nigeria', desc: 'Designed around Nigerian practice, regulation and market realities.', icon: Landmark, accent: '#8B5CF6' },
  { title: 'Intelligent by Default', desc: 'AI and automation reduce effort so experts can focus on judgement.', icon: Sparkles, accent: '#F59E0B' },
  { title: 'Collaborative', desc: 'One secure source of truth for practitioners, clients and creditors.', icon: Users, accent: '#0EA5E9' },
  { title: 'Continuously Improving', desc: 'We close the loop on every case to make the next one better.', icon: Rocket, accent: '#14B8A6' },
];

export const aboutMilestones = [
  { year: '2023', title: 'The idea', desc: 'Conceived with BRIPAN members to digitise the recovery and insolvency lifecycle.' },
  { year: '2024', title: 'Platform build', desc: 'Core diagnostics, recovery and case management modules developed and piloted.' },
  { year: '2025', title: 'Early adopters', desc: 'Practitioners, firms and lenders onboarded across pilot cohorts.' },
  { year: '2026', title: 'Going national', desc: 'Full 18-module platform launched, with AI Copilot and Industry Intelligence.' },
];

export const aboutStats = [
  { value: '18', label: 'Core platform modules' },
  { value: '10', label: 'Lifecycle stages supported' },
  { value: '1,240+', label: 'Practitioners & firms' },
  { value: '36', label: 'States & FCT supported' },
];

export const aboutTeam = [
  { name: 'Olumide Adeyemi', role: 'Chief Executive Officer', initials: 'OA', accent: '#2563EB' },
  { name: 'Ngozi Okafor', role: 'Chief Product Officer', initials: 'NO', accent: '#10B981' },
  { name: 'Tunde Bakare', role: 'Head of Insolvency Practice', initials: 'TB', accent: '#8B5CF6' },
  { name: 'Aisha Bello', role: 'Head of Compliance', initials: 'AB', accent: '#F59E0B' },
];

/* ================================================================== */
/* CONTACT PAGE                                                        */
/* ================================================================== */
export const contactChannels = [
  { title: 'Sales & Demos', desc: 'Explore plans and book a walkthrough.', value: 'sales@brip360.ng', icon: Rocket, accent: '#10B981' },
  { title: 'Support', desc: 'Get help from our practitioner support team.', value: 'support@brip360.ng', icon: ShieldCheck, accent: '#2563EB' },
  { title: 'Partnerships', desc: 'Integrate, resell or collaborate with BRIP360.', value: 'partners@brip360.ng', icon: Network, accent: '#8B5CF6' },
  { title: 'Head Office', desc: 'Lagos, Nigeria', value: '+234 (0) 700 000 3600', icon: Landmark, accent: '#F59E0B' },
];

export const contactFaqs = [
  {
    question: 'How quickly will I hear back?',
    answer: 'Our team typically responds to sales and support requests within one business day.',
  },
  {
    question: 'Do you offer guided onboarding?',
    answer: 'Yes — Firm and Enterprise customers receive personalised onboarding and training for their teams.',
  },
  {
    question: 'Can I book a live demo?',
    answer: 'Absolutely. Choose a time that suits you and we\u2019ll walk you through the platform end-to-end.',
  },
];
