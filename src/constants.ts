import { Job, SkillCategory, AIExpertiseItem } from './types';

export const EXPERIENCE: Job[] = [
  {
    title: "Head of Data & Analytics",
    company: "Leapwork",
    period: "Jan 2024 - Current",
    description: "Establishing a scalable data strategy for Leapwork’s revolutionary automation platform.",
    highlights: [
      "Engineered end-to-end data lake infrastructure using Microsoft Fabric (Spark, Python, SQL).",
      "Defined roadmap for data governance and best practices to ensure a single source of truth.",
      "Introduced Power BI for centralized KPI visibility across the wider business.",
      "Translating senior leadership needs into fully scoped technical projects."
    ]
  },
  {
    title: "Head of Business Intelligence",
    company: "Olio",
    period: "April 2022 - Dec 2024",
    description: "Built and managed a multi-disciplinary team covering BI, data science, and engineering for a tech-for-good scale-up.",
    highlights: [
      "Modernized data stack by migrating to GCP with Fivetran and dbt.",
      "Introduced Tableau to democratize data access for senior leadership.",
      "Built predictive models for demand/supply forecasting, customer segmentation, and item classification.",
      "Optimized performance marketing and product improvements through data science."
    ]
  },
  {
    title: "Head of Business Intelligence & Data Science",
    company: "Elder",
    period: "Nov 2019 - April 2022",
    description: "Established the BI and data science function at a health care scale-up.",
    highlights: [
      "Built a team of four for dashboard development, ad-hoc queries, and predictive modeling.",
      "Developed predictive models for customer acquisition and dynamic pricing logic.",
      "Implemented time series forecasting for operational and revenue planning.",
      "Mentored junior team members in SQL, Python, and machine learning concepts."
    ]
  },
  {
    title: "Senior Business Intelligence Analyst",
    company: "The Trade Desk (Contract)",
    period: "May 2019 - Nov 2019",
    description: "Strategic initiatives focusing on global forecasting and scenario-based analysis.",
    highlights: [
      "Built revenue forecast models used by FP&A for business impact testing.",
      "Utilized R, Python, SQL, and Tableau for data-driven decision making.",
      "Educated team members in time series analysis theory and best practices."
    ]
  },
  {
    title: "Data Scientist – Data & Analytics",
    company: "Kwiff (Contract)",
    period: "Sep 2018 - May 2019",
    description: "Started the data and analytics department, defining KPIs and strategic data usage.",
    highlights: [
      "Created a new odds balancer algorithm to maintain stable margins and customer satisfaction.",
      "Implemented A/B testing for validation of data-driven simulations.",
      "Owned end-to-end project from algorithm design to production."
    ]
  },
  {
    title: "Data Scientist – FP&A team",
    company: "Klarna Bank",
    period: "Mar 2015 - Sep 2018",
    description: "Predictive modeling of transactions and revenues in a high-growth fintech environment.",
    highlights: [
      "Optimized time series models and cleaned code for increased efficiency.",
      "Created user-friendly applications for data visualization using R Shiny.",
      "Utilized SQL, R, Python, SAS, and visual tools like Qlik, Tableau, and D3.",
      "Trained team members in statistical techniques and data-business understanding."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Core Tech",
    level: "Advanced",
    skills: ["Python", "R", "SQL", "Git", "Excel"]
  },
  {
    category: "Data Platforms & Cloud",
    level: "Advanced",
    skills: ["Microsoft Fabric", "GCP", "Azure", "BigQuery"]
  },
  {
    category: "Visualization & BI",
    level: "Advanced",
    skills: ["Tableau", "Power BI", "D3.js", "Qlik", "R Shiny"]
  },
  {
    category: "Engineering & Orchestration",
    level: "Intermediate",
    skills: ["dbt", "Airflow", "Fivetran", "SAS", "AWS"]
  },
  {
    category: "Analytics & Product",
    level: "Intermediate",
    skills: ["Mixpanel", "Amplitude", "Google Analytics", "Matlab"]
  }
];

export const CONTACT = {
  name: "Jon Nielsen",
  email: "jon.nielsen.swe@gmail.com",
  phone: "+64212205902",
  linkedin: "https://www.linkedin.com/in/jon-nielsen-47081730/",
  location: "Auckland, New Zealand",
  availability: "Global Scale",
  visa: "Work Visa Holder until Jan 2029"
};

export const BLOG_POSTS = [
  {
    id: "future-of-data-architecture",
    title: "The Future of Data Architecture: Microsoft Fabric & Beyond",
    excerpt: "Exploring how unified data platforms are changing the way we build AI-ready infrastructures.",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    content: `
# The Future of Data Architecture

In the rapidly evolving landscape of data engineering, the shift towards unified platforms like **Microsoft Fabric** represents a significant milestone. For years, organizations have struggled with fragmented data stacks—juggling multiple vendors for ingestion, storage, transformation, and visualization.

## Why Unified Platforms Matter

Unified platforms reduce the "integration tax" that data teams pay when moving data between disparate systems. By providing a single, SaaS-based environment, platforms like Fabric allow us to focus on what truly matters: **extracting value from data.**

### Key Benefits of Microsoft Fabric:
- **OneLake:** A single, unified data lake for the entire organization.
- **Direct Lake Mode:** Eliminating the need for data movement between the lake and Power BI.
- **AI Integration:** Built-in support for Copilot and machine learning models.

## Building AI-Ready Infrastructure

To be truly "AI-ready," an organization needs more than just a large language model. It needs a robust data foundation. This means:
1. **Data Governance:** Ensuring data is clean, compliant, and discoverable.
2. **Scalability:** Architecture that can handle the massive compute requirements of modern AI.
3. **Accessibility:** Making data available to both technical and non-technical stakeholders.

As we move forward, the role of the data architect will increasingly focus on orchestration and governance rather than just pipeline maintenance.
    `
  },
  {
    id: "bridging-the-gap",
    title: "Bridging the Gap: Technical Excellence vs. Business Strategy",
    excerpt: "Why the most successful Head of Data roles require a deep understanding of both code and the boardroom.",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    content: `
# Bridging the Gap

One of the most common pitfalls in data leadership is the disconnect between technical execution and business objectives. A brilliant technical architecture is worthless if it doesn't solve a commercial problem.

## The Bilingual Data Leader

The most effective data leaders are "bilingual." They can discuss **Spark optimization** with engineers in the morning and **EBITDA impact** with the CFO in the afternoon.

### Strategies for Alignment:
- **Start with the 'Why':** Every data project should begin with a clear business question.
- **KPI Mapping:** Directly link data initiatives to corporate goals.
- **Education:** Demystify data for non-technical stakeholders to build trust.

## Hands-on Leadership

I've always believed that a leader should never be too far from the tools. Being hands-on allows me to:
- Understand the real-world constraints my team faces.
- Make better architectural decisions.
- Mentor junior talent by showing, not just telling.

In the AI era, this strategic-technical hybrid role is more critical than ever.
    `
  },
  {
    id: "mentorship-in-data-science",
    title: "Mentorship in Data Science: Building High-Performing Teams",
    excerpt: "My philosophy on growing junior talent and creating a culture of continuous learning.",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    content: `
# Mentorship in Data Science

Building a high-performing data team isn't just about hiring the best talent; it's about cultivating it. In my experience at scale-ups like Olio and Elder, I've found that a culture of mentorship is the secret sauce for long-term success.

## My Mentorship Philosophy

1. **Psychological Safety:** Create an environment where it's okay to fail and ask "stupid" questions.
2. **Structured Learning:** Move beyond ad-hoc help. Implement peer reviews, lunch-and-learns, and clear career paths.
3. **Real-World Projects:** Give junior members ownership of meaningful projects early on.

### The ROI of Education

Investing in your team's education pays dividends in:
- **Retention:** People stay where they are growing.
- **Efficiency:** Better-trained teams write cleaner code and make fewer architectural errors.
- **Innovation:** A curious team is an innovative team.

## Leading by Example

Mentorship is a two-way street. By being hands-on and transparent about my own learning process, I encourage my team to stay curious and keep pushing the boundaries of what's possible with data and AI.
    `
  }
];

export const AI_EXPERTISE: AIExpertiseItem[] = [
  {
    title: "Predictive Modeling & Forecasting",
    description: "Hands-on expertise in building robust models for demand/supply forecasting and revenue planning. I don't just lead; I architect and code.",
    icon: "TrendingUp",
    tags: ["Time Series", "Regression", "Prophet", "Scikit-Learn"]
  },
  {
    title: "Modern AI Infrastructure",
    description: "Architecting end-to-end data lakes using Microsoft Fabric and GCP. I focus on building scalable systems that empower teams to innovate.",
    icon: "Cpu",
    tags: ["Microsoft Fabric", "Spark", "Data Lakehouse", "GCP"]
  },
  {
    title: "Algorithmic Optimization",
    description: "Designing custom algorithms for real-time applications. Validated through rigorous A/B testing and production-grade deployments.",
    icon: "Zap",
    tags: ["Optimization", "A/B Testing", "Simulations", "Production AI"]
  },
  {
    title: "Leadership & Mentorship",
    description: "Passionate about educating stakeholders and mentoring junior talent. I believe in raising the collective bar through knowledge sharing.",
    icon: "Brain",
    tags: ["Strategy", "Mentorship", "Education", "Team Building"]
  }
];
