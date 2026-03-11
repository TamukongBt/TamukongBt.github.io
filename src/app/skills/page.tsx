"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain, Code2, Cloud, Database, Smartphone, GitBranch,
  Server, FlaskConical, Cpu, Bot, Layers, Globe,
  Container, Terminal, Figma, ChevronDown
} from "lucide-react";

type Skill = { name: string; level?: "primary" | "secondary" };
type SkillGroup = { name: string; icon: React.ElementType; skills: Skill[] };
type Domain = { title: string; description: string; groups: SkillGroup[] };

const domains: Domain[] = [
  {
    title: "AI & Machine Learning",
    description: "Research-grade ML systems and production AI pipelines.",
    groups: [
      {
        name: "Techniques",
        icon: Brain,
        skills: [
          { name: "Active Learning", level: "primary" },
          { name: "Reinforcement Learning (PPO · DPO · GRPO)", level: "primary" },
          { name: "Anomaly Detection", level: "primary" },
          { name: "Semi-Supervised Learning", level: "primary" },
          { name: "Random Forest & Ensemble Methods", level: "primary" },
          { name: "Histogram Gradient Boosting", level: "primary" },
          { name: "Offline Contextual Bandits", level: "secondary" },
          { name: "Feature Extraction (Image / Tabular)", level: "primary" },
        ],
      },
      {
        name: "Tools & Frameworks",
        icon: FlaskConical,
        skills: [
          { name: "Python", level: "primary" },
          { name: "PyTorch", level: "primary" },
          { name: "Scikit-learn", level: "primary" },
          { name: "HuggingFace Transformers", level: "primary" },
          { name: "TRL (Transformer RL)", level: "primary" },
          { name: "ModAL", level: "primary" },
          { name: "DeepEval", level: "secondary" },
        ],
      },
      {
        name: "Research Areas",
        icon: Bot,
        skills: [
          { name: "Intrusion Detection Systems", level: "primary" },
          { name: "CAN-bus Anomaly Detection", level: "primary" },
          { name: "LLM Evaluation", level: "secondary" },
          { name: "Edge AI & Efficiency", level: "secondary" },
          { name: "Cyber-Physical Security", level: "primary" },
        ],
      },
    ],
  },
  {
    title: "Full-Stack & Mobile",
    description: "End-to-end application development from mobile to backend.",
    groups: [
      {
        name: "Mobile",
        icon: Smartphone,
        skills: [
          { name: "Kotlin Multiplatform (KMP)", level: "primary" },
          { name: "Jetpack Compose", level: "primary" },
          { name: "CameraX & Vision Camera", level: "primary" },
          { name: "React Native / Expo", level: "secondary" },
          { name: "Android (native)", level: "primary" },
        ],
      },
      {
        name: "Frontend",
        icon: Code2,
        skills: [
          { name: "React", level: "primary" },
          { name: "Next.js", level: "primary" },
          { name: "TypeScript", level: "primary" },
          { name: "TailwindCSS", level: "primary" },
          { name: "HTML5 / CSS3 / SCSS", level: "primary" },
        ],
      },
      {
        name: "Backend & APIs",
        icon: Server,
        skills: [
          { name: "Node.js", level: "primary" },
          { name: "Python / Django", level: "primary" },
          { name: "Supabase (Auth · Storage · Edge Functions)", level: "primary" },
          { name: "REST APIs", level: "primary" },
          { name: "GraphQL", level: "secondary" },
          { name: "Strapi / WordPress / Shopify", level: "secondary" },
        ],
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud-native infrastructure, automation, and deployment pipelines.",
    groups: [
      {
        name: "Cloud Platforms",
        icon: Cloud,
        skills: [
          { name: "Google Cloud Platform", level: "primary" },
          { name: "Azure", level: "secondary" },
          { name: "Supabase", level: "primary" },
          { name: "DigitalOcean", level: "secondary" },
          { name: "Cloud Run", level: "primary" },
          { name: "Cloud SQL", level: "primary" },
        ],
      },
      {
        name: "Infrastructure",
        icon: Container,
        skills: [
          { name: "Docker", level: "primary" },
          { name: "Kubernetes (basics)", level: "secondary" },
          { name: "Terraform", level: "secondary" },
          { name: "GitHub Actions", level: "primary" },
          { name: "CI/CD Pipelines", level: "primary" },
        ],
      },
    ],
  },
  {
    title: "Data Engineering & Systems",
    description: "Big data pipelines, streaming architectures, and database systems.",
    groups: [
      {
        name: "Databases",
        icon: Database,
        skills: [
          { name: "PostgreSQL", level: "primary" },
          { name: "MySQL", level: "primary" },
          { name: "Redis", level: "secondary" },
          { name: "SQL", level: "primary" },
        ],
      },
      {
        name: "Data Systems",
        icon: Layers,
        skills: [
          { name: "Apache Kafka", level: "primary" },
          { name: "Hadoop", level: "primary" },
          { name: "Event-driven Pipelines", level: "primary" },
          { name: "IoT Data Ingestion", level: "primary" },
          { name: "Real-time Analytics", level: "primary" },
        ],
      },
      {
        name: "Protocols",
        icon: Globe,
        skills: [
          { name: "REST", level: "primary" },
          { name: "WebSockets", level: "primary" },
          { name: "CoAP", level: "secondary" },
        ],
      },
    ],
  },
  {
    title: "Languages & Tools",
    description: "Programming languages and day-to-day engineering tooling.",
    groups: [
      {
        name: "Primary Languages",
        icon: Terminal,
        skills: [
          { name: "Python", level: "primary" },
          { name: "TypeScript / JavaScript", level: "primary" },
          { name: "Kotlin", level: "primary" },
          { name: "SQL", level: "primary" },
        ],
      },
      {
        name: "Secondary Languages",
        icon: Cpu,
        skills: [
          { name: "Java", level: "secondary" },
          { name: "C#", level: "secondary" },
          { name: "PHP", level: "secondary" },
          { name: "Bash", level: "secondary" },
          { name: "C++", level: "secondary" },
        ],
      },
      {
        name: "Tooling",
        icon: GitBranch,
        skills: [
          { name: "Git / GitHub / GitLab", level: "primary" },
          { name: "Linux", level: "primary" },
          { name: "Figma", level: "primary" },
          { name: "Notion / Agile / Scrum", level: "primary" },
          { name: "Power BI", level: "secondary" },
          { name: "Excel", level: "secondary" },
        ],
      },
    ],
  },
  {
    title: "UI/UX & Design",
    description: "Design systems, component libraries, and interface prototyping.",
    groups: [
      {
        name: "Design",
        icon: Figma,
        skills: [
          { name: "Figma", level: "primary" },
          { name: "Design Systems & Colour Tokens", level: "primary" },
          { name: "Mobile UX Design", level: "primary" },
          { name: "Camera Interface Design", level: "primary" },
          { name: "Event Platform UI", level: "primary" },
          { name: "Adobe XD", level: "secondary" },
        ],
      },
    ],
  },
];

export default function SkillsPage() {
  const [openDomain, setOpenDomain] = useState<number | null>(0);

  return (
    <div className=" flex flex-col bg-eerieblack text-whiteout pb-24">

      {/* Page header */}
      <div className="border-y border-brownsugar px-4 py-4 md:px-6 md:py-5 bg-[hsla(29, 12%, 45%, 1.00)] dark:bg-[hsl(30,8%,9%)]">
        <p className="text-[0.6em] font-console uppercase tracking-widest text-taupe mb-1">Skills & Technical Stack</p>
        <h1 className="text-xl md:text-2xl font-body text-lemonchiffon font-light">
          What I build with
        </h1>
        <p className="text-sm text-taupe mt-2 max-w-2xl leading-relaxed">
          A full breakdown of my technical capabilities across AI/ML research, full-stack and mobile development, cloud infrastructure, and data engineering.
        </p>
      </div>

      {/* Domains accordion */}
      <div className="divide-y divide-brownsugar border-x border-y border-brownsugar mx-4 md:mx-6 mt-6 rounded-sm overflow-hidden">
        {domains.map((domain, di) => (
          <div key={di}>
            {/* Domain header */}
            <button
              onClick={() => setOpenDomain(openDomain === di ? null : di)}
              className="w-full flex items-center justify-between px-5 py-5 md:px-6 md:py-6 text-left hover:bg-[hsla(37, 15%, 38%, 1.00)] dark:hover:bg-[hsl(30,8%,11%)] transition-colors duration-200"
            >
              <div>
                <h2 className="text-base md:text-lg font-console text-lemonchiffon">{domain.title}</h2>
                <p className="text-xs md:text-sm text-taupe mt-1.5">{domain.description}</p>
              </div>
              <motion.div
                animate={{ rotate: openDomain === di ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-taupe" />
              </motion.div>
            </button>

            {/* Skill groups */}
            {openDomain === di && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="border-t border-brownsugar bg-[hsla(41, 28%, 74%, 1.00)] dark:bg-[hsl(30,8%,7%)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-brownsugar">
                  {domain.groups.map((group, gi) => {
                    const GroupIcon = group.icon;
                    return (
                      <div key={gi} className="bg-white dark:bg-[hsl(30,8%,7%)] p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-5">
                          <GroupIcon className="w-5 h-5 text-taupe" />
                          <h3 className="text-xs md:text-sm font-console uppercase tracking-widest text-taupe">{group.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2.5 md:gap-3">
                          {group.skills.map((skill, si) => (
                            <span
                              key={si}
                              className={`text-xs md:text-sm font-body px-3.5 py-1.5 md:px-4 md:py-2 rounded-sm border transition-colors duration-150 ${skill.level === "primary"
                                  ? "border-brownsugar text-lemonchiffon hover:border-taupe"
                                  : "border-brownsugar text-taupe opacity-70 hover:opacity-100"
                                }`}
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Languages quick-view bar */}
      <div className="mx-4 md:mx-6 mt-4 border border-brownsugar rounded-sm p-4 bg-white dark:bg-[hsl(30,8%,9%)]">
        <p className="text-[0.6em] font-console uppercase tracking-widest text-taupe mb-3">Primary Stack</p>
        <div className="flex flex-wrap gap-2">
          {["Python", "TypeScript", "Kotlin", "React / Next.js", "Supabase", "Docker", "GCP", "PyTorch", "Scikit-learn"].map((t) => (
            <span key={t} className="text-xs font-console px-3 py-1.5 border border-brownsugar text-lemonchiffon rounded-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
