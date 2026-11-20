export const profile = {
  name: "Jhakeem Moultrie",
  email: "starkjhakeem@gmail.com",
  github: "https://github.com/starkjhakeem-cloud",
  linkedin: "https://www.linkedin.com/in/jhakeem-moultrie-29907b400/",
  resume: "/Jhakeem_Moultrie_Software_Engineer_Resume.pdf",
  siteUrl: "https://portfolio-site-mu-sage.vercel.app",
} as const;

export type Project = {
  id: string;
  number: string;
  title: string;
  category: "Web" | "Mobile";
  kind: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  image: string;
  imageAlt: string;
  details: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    id: "finance",
    number: "01",
    title: "Finance Tracker Dashboard",
    category: "Web",
    kind: "Data visualization · Personal finance",
    description:
      "Making everyday finances easier to understand. A dashboard that brings transactions, balances, and spending patterns into one clear view.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/starkjhakeem-cloud/finance-tracker-dashboard",
    image: "/projects/finance-dashboard.webp",
    imageAlt:
      "Finance Tracker with balance, income, expenses, transaction form, and recent transactions",
    details: [
      {
        title: "The problem",
        body: "Transaction records are difficult to interpret without a clear view of income, expenses, and categorized spending.",
      },
      {
        title: "The solution",
        body: "A single dashboard connects transaction entry and editing with balances, spending categories, and income-versus-expense charts.",
      },
      {
        title: "Architecture",
        body: "A Next.js client page coordinates typed React state. Separate form, list, dashboard, and Recharts components consume the transaction data; Tailwind CSS styles the interface.",
      },
      {
        title: "Implementation",
        body: "Transactions can be created, edited, and deleted. Totals and category/date aggregates are derived from the current records, which persist in browser localStorage.",
      },
      {
        title: "Technical trade-off",
        body: "Browser storage makes the dashboard self-contained without accounts or a backend. Records belong to the current browser and do not synchronize between devices.",
      },
      {
        title: "Engineering considerations",
        body: "Totals, categories, and charts are derived from one changing transaction list. That keeps transaction edits connected to the summaries without maintaining separate copies of the calculated data.",
      },
      {
        title: "Future improvements",
        body: "The project README proposes authentication, cloud storage, CSV export, and budget goals. Stronger amount validation and storage recovery are additional next steps, not completed features.",
      },
    ],
  },
  {
    id: "jobs",
    number: "02",
    title: "Job Application Tracker",
    category: "Mobile",
    kind: "Mobile development · Career organization",
    description:
      "A little more clarity in the job search. A mobile application for organizing opportunities, tracking applications, and keeping the next step in sight.",
    stack: ["React Native", "TypeScript", "Expo"],
    github: "https://github.com/starkjhakeem-cloud/job-tracker-react-native",
    image: "/projects/job-tracker.webp",
    imageAlt:
      "Job Tracker mobile dashboard showing application statistics, search, status filters, and an application card",
    details: [
      {
        title: "The problem",
        body: "A job search involves companies, roles, application dates, and changing statuses that need to stay organized.",
      },
      {
        title: "The solution",
        body: "A mobile application list brings editable records, company/role search, status selection, and calculated pipeline counts together.",
      },
      {
        title: "Architecture",
        body: "An Expo Router screen coordinates typed React Native state, reusable application-card and modal-form components, and AsyncStorage. The Animated API and Expo Haptics provide interaction feedback.",
      },
      {
        title: "Implementation",
        body: "Users can add, edit, and delete applications. Search and status selection narrow the records, while dashboard counts are derived from the underlying application list.",
      },
      {
        title: "Technical trade-off",
        body: "AsyncStorage keeps records on the device without requiring a server. This supports local use; it does not provide an account or cross-device synchronization.",
      },
      {
        title: "Known limitations",
        body: "The source uses “Offers” in one filter chip and “Offer” in stored records, so that chip needs normalization. Persistence initialization and date validation also need further testing. These limitations belong to the project prototype.",
      },
      {
        title: "Future improvements",
        body: "Normalize status values, strengthen validation and storage recovery, and then explore optional backup or synchronization. These are proposed next steps, not existing capabilities.",
      },
    ],
  },
];

export const skillGroups = [
  {
    number: "01",
    title: "Interfaces",
    subtitle: "From browser to mobile",
    icon: "code" as const,
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Data & application logic",
    subtitle: "Connecting the pieces",
    icon: "database" as const,
    items: [
      "Supabase (familiarity)",
      "REST APIs",
      "Authentication",
      "React state",
      "localStorage",
      "AsyncStorage",
      "Recharts",
    ],
  },
  {
    number: "03",
    title: "Tools & workflow",
    subtitle: "Built with intention",
    icon: "terminal" as const,
    items: [
      "Git",
      "GitHub",
      "Expo",
      "Vercel",
      "VS Code",
      "Responsive design",
      "Component architecture",
    ],
  },
];
