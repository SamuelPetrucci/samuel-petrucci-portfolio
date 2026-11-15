export const profile = {
  name: "Samuel Petrucci",
  role: "Cloud & AI Engineer",
  tagline:
    "I build automation, dashboards, and AI-powered tools that help small businesses run leaner.",
  location: "Connecticut, USA",
  email: "info@aitransformationllc.com",
  phone: "+1 (860) 705-3417",
  github: "https://github.com/SamuelPetrucci",
  linkedin: "https://www.linkedin.com/in/samuel-petrucci-51360b225",
  company: "AI Transformation LLC",
  companyUrl: "https://aitransformationllc.com",
  bioShort:
    "Founder · AWS Certified · Turning messy ops into scalable systems with Python, Next.js, and AI.",
};

export const githubBio =
  "Founder @ AI Transformation | Cloud & AI Engineer | AWS Certified | Building automation, CRMs, and AI tools for SMBs.";

export type Skill = {
  name: string;
  icons: { src: string; alt: string }[];
};

export const skills: Skill[] = [
  { name: "Python", icons: [{ src: "/skills/python.svg", alt: "Python" }] },
  { name: "TypeScript", icons: [{ src: "/skills/typescript.svg", alt: "TypeScript" }] },
  {
    name: "React / Next.js",
    icons: [
      { src: "/skills/react.svg", alt: "React" },
      { src: "/skills/nextdotjs.svg", alt: "Next.js" },
    ],
  },
  { name: "AWS", icons: [{ src: "/skills/amazonaws.svg", alt: "AWS" }] },
  { name: "Supabase", icons: [{ src: "/skills/supabase.svg", alt: "Supabase" }] },
  { name: "SQL", icons: [{ src: "/skills/postgresql.svg", alt: "PostgreSQL / SQL" }] },
  { name: "n8n", icons: [{ src: "/skills/n8n.svg", alt: "n8n" }] },
  { name: "Docker", icons: [{ src: "/skills/docker.svg", alt: "Docker" }] },
  {
    name: "OpenAI / Groq",
    icons: [
      { src: "/skills/openai.svg", alt: "OpenAI" },
      { src: "/skills/groq.svg", alt: "Groq" },
    ],
  },
  { name: "Streamlit", icons: [{ src: "/skills/streamlit.svg", alt: "Streamlit" }] },
  { name: "Pandas", icons: [{ src: "/skills/pandas.svg", alt: "Pandas" }] },
  { name: "Computer Vision", icons: [{ src: "/skills/opencv.svg", alt: "OpenCV" }] },
];

export const experience = [
  {
    title: "Founder",
    org: "AI Transformation LLC",
    period: "Jun 2025 — Present",
    points: [
      "Help SMBs close operational gaps with custom software, AI automation, and modern web platforms.",
      "Ship end-to-end systems: lead CRMs, agent ops hubs, content pipelines, and client-facing sites.",
      "Act as consultant and builder — discovery through deployment on Vercel + Supabase.",
    ],
  },
  {
    title: "OTD&A Intern",
    org: "The Hartford",
    period: "May 2024 — Aug 2024",
    points: [
      "Built observability dashboards across Splunk, Dynatrace, Apptio Cloudability, and AWS CloudWatch.",
      "Gave DevOps teams an at-a-glance view of performance and cloud cost for an internal document platform.",
    ],
  },
  {
    title: "Programming Tutor",
    org: "theCoderSchool",
    period: "May 2023 — Sep 2023",
    points: [
      "Taught Java, Python, and Scratch to K–12 students with project-based lesson plans.",
    ],
  },
];

export const education = [
  {
    title: "B.S. Computer Science, Minor in Business Administration",
    org: "Eastern Connecticut State University",
    period: "2021 — 2025",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "AWS Data Engineering — Pluralsight training complete",
];

export type Project = {
  title: string;
  blurb: string;
  impact: string;
  stack: string[];
  href?: string;
  kind: "Product" | "Client" | "Research" | "Personal";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AIT Ops Hub",
    blurb:
      "Private CRM and agent-operations desk for AI Transformation — companies, deal pipeline, approvals inbox, content queue, and Buffer analytics.",
    impact:
      "One control plane for outreach, revenue goals, agent directives, and content shipping.",
    stack: ["Next.js", "Supabase", "TypeScript", "Buffer API"],
    href: "https://github.com/SamuelPetrucci/ait-ops-hub",
    kind: "Product",
    featured: true,
  },
  {
    title: "AI Transformation Website",
    blurb:
      "Company site with AI chatbot, service demos, contact capture, and Calendly booking for SMB digital transformation.",
    impact: "Lead magnet + service storytelling for the consulting practice.",
    stack: ["Next.js 15", "OpenAI", "Supabase", "Framer Motion"],
    href: "https://github.com/SamuelPetrucci/AI-Transformation",
    kind: "Product",
    featured: true,
  },
  {
    title: "COLA Verify",
    blurb:
      "AI-assisted alcohol label verification prototype for TTB-style compliance — OCR, federal baseline rules, batch review, and history.",
    impact: "Turns 5–10 minute manual checks into seconds for peak-season batches.",
    stack: ["Next.js", "Tesseract.js", "Supabase"],
    href: "https://github.com/SamuelPetrucci/treasurytakehome-rgb",
    kind: "Product",
    featured: true,
  },
  {
    title: "KB Intel (FileBot)",
    blurb:
      "SaaS knowledge platform: upload documents, ask questions with RAG, and monetize access with Stripe.",
    impact: "Document intelligence productized for teams that need answers from their own files.",
    stack: ["Next.js", "Supabase", "Groq", "Stripe"],
    kind: "Product",
  },
  {
    title: "SkillVantage",
    blurb:
      "AI talent intelligence platform matching employers and professionals through skills verification and network signals.",
    impact: "Two-sided talent marketplace with AI-assisted fit scoring.",
    stack: ["Next.js", "OpenAI", "Supabase", "PDF parsing"],
    kind: "Product",
  },
  {
    title: "True North Crew Hub",
    blurb:
      "Operations hub for hours, clients, contracts, and receipts — with banking links and messaging integrations.",
    impact: "Replaces spreadsheet chaos for a field/crew business.",
    stack: ["Next.js", "Supabase", "Plaid", "Linq"],
    kind: "Product",
  },
  {
    title: "ACA Broker ATS",
    blurb:
      "Application tracking for ACA brokers with admin workflows and daily submission digests via cron.",
    impact: "Keeps insurance enrollment pipelines visible and accountable.",
    stack: ["Next.js", "Supabase", "Vercel Cron"],
    kind: "Client",
  },
  {
    title: "WHAASCO Website",
    blurb:
      "Community organization site with hero storytelling, board profiles, gallery/events, and donate/contact flows.",
    impact: "Modern web presence for West Hartford African American Social & Cultural Organization.",
    stack: ["Next.js", "Tailwind", "Nodemailer"],
    href: "https://github.com/SamuelPetrucci/WHASSCO",
    kind: "Client",
  },
  {
    title: "Abbah — Fathering for Good",
    blurb:
      "Nonprofit site covering mission, pillars, resources, events, partners, and volunteer/donation CTAs.",
    impact: "Clean digital home for a community fathering nonprofit.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/SamuelPetrucci/Abbah",
    kind: "Client",
  },
  {
    title: "RLJ Enterprise",
    blurb:
      "Mission-driven real estate firm site with AI chatbot, contact/partnership forms, and admin lead management.",
    impact: "Brand + lead capture for a conscious-community investment firm.",
    stack: ["Next.js", "Groq", "Supabase"],
    href: "https://github.com/SamuelPetrucci/RJLenterprise",
    kind: "Client",
  },
  {
    title: "Insurance Quote Sites",
    blurb:
      "Multi-step quote funnels for health insurance practices — SMTP notifications, optional admin dashboards, carrier storytelling.",
    impact: "Turn website traffic into structured quote requests for brokers.",
    stack: ["Next.js", "Supabase", "Nodemailer"],
    kind: "Client",
  },
  {
    title: "YOLO Weapon Detection Research",
    blurb:
      "Senior research comparing YOLOv8 vs YOLOv11 for weapon detection on CPU-only hardware — accuracy, speed, and resource trade-offs.",
    impact: "Academic CV work grounded in constrained real-world deployment.",
    stack: ["Python", "Ultralytics YOLO", "OpenCV"],
    href: "https://github.com/SamuelPetrucci/Senior-Research-Project.github.io",
    kind: "Research",
    featured: true,
  },
  {
    title: "Stock Dashboard & Forecaster",
    blurb:
      "Streamlit app for live/historical market charts with Facebook Prophet forecasting via Yahoo Finance.",
    impact: "Interactive analytics demo deployed on AWS EC2.",
    stack: ["Python", "Streamlit", "Prophet", "Plotly"],
    href: "https://github.com/SamuelPetrucci/StockDashboard",
    kind: "Personal",
  },
  {
    title: "Momentum Trading Desk",
    blurb:
      "Alpaca paper trading bot with risk limits, LLM cycle thesis feed, and a multi-page control dashboard.",
    impact: "End-to-end automation from signal → order → journal.",
    stack: ["Python", "Alpaca", "Next.js", "Groq"],
    href: "https://github.com/SamuelPetrucci/trading-bot",
    kind: "Personal",
  },
  {
    title: "Weather ChatBot",
    blurb:
      "GroupMe chatbot pulling OpenWeatherMap data from chat commands, deployed on AWS EC2.",
    impact: "Practical API automation in a social chat surface.",
    stack: ["Python", "GroupMe", "AWS EC2"],
    href: "https://github.com/SamuelPetrucci/WeatherChatBot",
    kind: "Personal",
  },
];
