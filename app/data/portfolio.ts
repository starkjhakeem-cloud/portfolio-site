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
  github?: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
  details: { title: string; body: string }[];
  verified: boolean;
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
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "https://github.com/starkjhakeem-cloud/finance-tracker-dashboard",
    image: "/projects/finance-dashboard.webp",
    imageAlt:
      "Finance Tracker with balance, income, expenses, transaction form, and recent transactions",
    verified: true,
    details: [
      {
        title: "The problem",
        body: "Income and expense records are more useful when they can be reviewed together. This project connects transaction entry with a visual overview of personal spending.",
      },
      {
        title: "The implementation",
        body: "React state drives transaction creation, editing, and deletion. Dashboard components derive income, expenses, balance, and the top spending category from the same transaction data. Recharts renders expense and income-versus-expense charts.",
      },
      {
        title: "Data & scope",
        body: "Transactions persist in browser localStorage. This is a client-side application; the current repository does not implement authentication or a cloud database.",
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
    stack: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
    github: "https://github.com/starkjhakeem-cloud/job-tracker-react-native",
    image: "/projects/job-tracker.webp",
    imageAlt:
      "Job Tracker mobile dashboard showing application statistics, search, status filters, and an application card",
    verified: true,
    details: [
      {
        title: "The problem",
        body: "A job search spans companies, roles, dates, and changing statuses. This application puts those records and a summary of the pipeline in a single mobile interface.",
      },
      {
        title: "The implementation",
        body: "Reusable application-card and form components support adding, editing, and deleting records. Company and role search combines with status filtering, while dashboard counts are calculated from the application list.",
      },
      {
        title: "Data & interaction",
        body: "AsyncStorage keeps records on the device. React Native’s Animated API handles form and dashboard transitions, and Expo Haptics supplies touch feedback. No hosted web demonstration is published in the repository.",
      },
    ],
  },
  {
    id: "notes",
    number: "03",
    title: "Link & Notes Application",
    category: "Web",
    kind: "Project archive",
    description:
      "Another part of my development journey. Get in touch to learn more about this project and its current source availability.",
    stack: [],
    verified: false,
    details: [],
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
      "Supabase",
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
