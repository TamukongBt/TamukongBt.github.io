"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail, MessageCircleMore, Calendar, BriefcaseBusiness, Briefcase } from "lucide-react";
import { Brain, Code2, Cloud, Database, Cpu, GitBranch, Smartphone, Server, Bot, FlaskConical } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const typingEffect = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.5 },
  }),
};

const text = "TAMUKONG";
const fonts = [
  { class: "font-display", size: "xl:text-[8rem]" },
  { class: "font-script", size: "xl:text-[8rem]" },
  { class: "font-serif", size: "xl:text-[6.5rem]" },
  { class: "font-italic", size: "xl:text-[6.5rem]" },
  { class: "font-console", size: "xl:text-[8rem]" },
  { class: "font-old1", size: "xl:text-[8rem]" },
  { class: "font-child", size: "xl:text-[7.5rem]" },
  { class: "font-black", size: "xl:text-[6rem]" },
  { class: "font-cursive", size: "xl:text-[8rem]" },
];

// ── Three capability pillars ──────────────────────────────────────────────────
const skillPillars = [
  {
    label: "AI & Machine Learning",
    skills: [
      { name: "Active Learning", icon: Bot, desc: "Query-strategy systems" },
      { name: "Reinforcement Learning", icon: Brain, desc: "PPO · DPO · GRPO" },
      { name: "Anomaly Detection", icon: FlaskConical, desc: "CAN-bus · Malware" },
      { name: "ML Pipelines", icon: Cpu, desc: "Scikit-learn · PyTorch" },
    ],
  },
  {
    label: "Full-Stack & Mobile",
    skills: [
      { name: "Kotlin Multiplatform", icon: Smartphone, desc: "KMP · Jetpack Compose" },
      { name: "Web Development", icon: Code2, desc: "React · Next.js · TS" },
      { name: "Backend & APIs", icon: Server, desc: "Node · Django · Supabase" },
      { name: "Database Systems", icon: Database, desc: "PostgreSQL · Redis · SQL" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "Cloud Platforms", icon: Cloud, desc: "GCP · Azure · DigitalOcean" },
      { name: "Containerisation", icon: GitBranch, desc: "Docker · Kubernetes" },
      { name: "CI/CD Pipelines", icon: Cpu, desc: "GitHub Actions · Terraform" },
      { name: "Data Engineering", icon: Database, desc: "Kafka · Hadoop · Pipelines" },
    ],
  },
];

const experienceData = [
  {
    period: "2025 – Present",
    company: "Independent Research",
    role: "AI / ML Researcher",
    responsibilities: [
      "Developing adaptive intrusion detection systems combining Active Learning and Reinforcement Learning (PPO/GRPO).",
      "Building dynamic threshold models for CAN-bus and malware anomaly detection on high-dimensional datasets.",
      "Implementing and benchmarking query strategies with ModAL and DeepEval for LLM evaluation.",
      "Engineering efficient CIFAR-10 feature-extraction pipelines comparing classical ML vs CNN embeddings.",
    ],
    skills: ["Active Learning", "Reinforcement Learning", "PyTorch", "Scikit-learn", "ModAL"],
  },
  {
    period: "2024 – Present",
    company: "Chakap (Self-founded)",
    role: "Lead Engineer — Mobile & Platform",
    responsibilities: [
      "Architecting a cross-platform event-media app using Kotlin Multiplatform and Jetpack Compose.",
      "Integrating Supabase (auth, storage, edge functions) and Immich for event-scoped media management.",
      "Building a real-time photobooth camera system with live filters, overlays, and video capture.",
      "Deploying cloud infrastructure on Docker + Cloud Run with CI/CD via GitHub Actions.",
    ],
    skills: ["Kotlin Multiplatform", "Supabase", "Docker", "Camera APIs", "Cloud Run"],
  },
  {
    period: "March 2026 – Present (Part-time)",
    company: "University of Southern Denmark",
    role: "Student Assistant — Prompt Engineering",
    responsibilities: [
      "Developing and testing prompt engineering strategies for large language models.",
      "Designing prompts for AI-assisted research and analysis workflows.",
      "Evaluating model outputs and improving prompt performance.",
      "Supporting development of AI-based research tooling.",
      "Experimenting with LLM interaction systems and evaluation methods.",
    ],
    skills: ["Prompt Engineering", "LLMs", "AI Research", "Evaluation"],
  },
  {
    period: "July 2025 – Present",
    company: "Danfoss — Nordborg, Denmark",
    role: "Student Worker — Hardware Test / Software Testing",
    responsibilities: [
      "Hardware validation and testing of embedded systems.",
      "Software testing for hardware-integrated products.",
      "Supporting automated testing environments.",
      "Assisting with cloud-based test infrastructure.",
    ],
    skills: ["Hardware Validation", "Software Testing", "Test Automation"],
  },
  {
    period: "February 2025 – June 2025",
    company: "Sonfor — Sønderborg, Denmark",
    role: "Student Worker — Software Systems",
    responsibilities: [
      "Developed internal tools using C# and Django.",
      "Managed infrastructure data using NetBox.",
      "Built and integrated REST APIs.",
      "Automated internal workflows.",
      "Deployed services on Azure cloud infrastructure.",
    ],
    skills: ["C#", "Django", "NetBox", "Azure", "REST APIs"],
  },
  {
    period: "August 2023 – September 2024",
    company: "SB Capital: SB Remit",
    role: "Software Engineer / Backend Engineer",
    responsibilities: [
      "Integrated third-party financial APIs.",
      "Improved transaction reliability and API performance.",
      "Managed CI/CD pipelines.",
      "Reduced deployment time by approximately 25%.",
      "Maintained backend services and databases and optimized systems for high transaction workloads.",
    ],
    skills: ["API Integrations", "CI/CD", "Backend Development", "Database Optimization"],
  },
  {
    period: "January 2022 – May 2024",
    company: "VELPFI Technologies Buea",
    role: "Software Engineer",
    responsibilities: [
      "Designed and maintained Windows Server infrastructure and ensured 99.9% system uptime.",
      "Implemented CI/CD pipelines for development teams.",
      "Improved development productivity by ~20%.",
      "Delivered client training and technical support.",
      "Designed and deployed system architectures.",
    ],
    skills: ["Windows Server", "CI/CD", "System Architecture"],
  },
];

const educationData = [
  {
    period: "September 2024 – Present",
    school: "University of Southern Denmark",
    degree: "Software Engineering"
  },
  {
    period: "October 2020 – December 2023",
    school: "University of Buea",
    degree: "Master of Technology — Software Engineering"
  },
  {
    period: "October 2016 – December 2019",
    school: "University of Buea",
    degree: "Bachelor of Technology — Software Engineering"
  }
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [currentPillar, setCurrentPillar] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Set a static font instead of changing periodically
    setCurrentFontIndex(4); // font-console is index 4
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPillar((prev) => (prev + 1) % skillPillars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentFont = fonts[currentFontIndex];
  const activePillar = skillPillars[currentPillar];

  return (
    <div className="flex flex-col h-[calc(100dvh-3.5rem)] md:h-[98vh] bg-eerieblack w-full text-whiteout">

      <ResizablePanelGroup direction={isMobile ? "vertical" : "horizontal"} className="border !border-brownsugar">

        {/* ── LEFT PANEL ────────────────────────────────── */}
        <ResizablePanel defaultSize={isMobile ? 60 : 50}>
          {/* On mobile: hero + skills stacked in vertical col, on desktop keep vertical */}
          <ResizablePanelGroup direction="vertical">

            {/* Hero */}
            <ResizablePanel defaultSize={isMobile ? 60 : 70} className="flex flex-col justify-between overflow-y-auto hide-scrollbar">
              <div className={`${currentFont.class} text-lemonchiffon !pt-6 pl-4 lg:!pl-8 w-full transition-all duration-100`}>

                <div className="text-xl md:text-lg font-bold font-body font-light text-taupe">Software Engineer · AI Researcher · Developer</div>

                <div className="flex items-center max-h-32">
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={typingEffect}
                      className={`text-[2.2rem] md:text-[3.2rem] ${currentFont.size} p-0 m-0`}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <div className="w-2 h-2 md:h-4 md:w-4 p-2 md:p-4 bg-bittersweet mt-auto xl:mt-[3.5em] rounded-lg">&nbsp;</div>
                  </motion.span>
                </div>

                <div className="text-[2rem] md:text-[3rem] xl:text-8xl font-light font-body tracking-2">Brian</div>
                <div className="text-base md:text-sm font-body text-taupe">I look at screens and press buttons </div>

                <div className="pt-3 pb-6 flex gap-3 flex-wrap">
                  <Link href="/work">
                    <Button className="rounded-3xl text-sm bg-bittersweet text-white hover:bg-lemonchiffon hover:text-white shadow-md border border-bittersweet hover:border-lemonchiffon px-4 transition-all duration-300">
                      See Projects
                    </Button>
                  </Link>
                  <Link href="/skills">
                    <Button variant="outline" className="rounded-3xl text-sm border border-brownsugar text-lemonchiffon hover:bg-brownsugar hover:text-white bg-transparent px-4 transition-all duration-300">
                      Skills & Stack
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Social links */}
              <div className="m-2">
                <div className="flex justify-end space-x-4 my-2 text-taupe">
                  <Link href="https://www.instagram.com/tbs_adonis" target="_blank" aria-label="Instagram">
                    <Instagram className="text-2xl hover:text-lemonchiffon transition-colors duration-200" />
                  </Link>
                  <Link href="https://wa.me/651076194" target="_blank" aria-label="WhatsApp">
                    <MessageCircleMore className="text-2xl hover:text-lemonchiffon transition-colors duration-200" />
                  </Link>
                  <Link href="mailto:adoniscreates@gmail.com" target="_blank" aria-label="Email">
                    <Mail className="text-2xl hover:text-lemonchiffon transition-colors duration-200" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/tamukong-brian-tanyie-a2b829135/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="text-2xl hover:text-lemonchiffon transition-colors duration-200" />
                  </Link>
                  <Link href="https://github.com/TamukongBt" target="_blank" aria-label="GitHub">
                    <Github className="text-2xl hover:text-lemonchiffon transition-colors duration-200" />
                  </Link>
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle className="bg-brownsugar !border-brownsugar" />

            {/* Skills widget — three pillars */}
            <ResizablePanel defaultSize={isMobile ? 40 : 30}>
              <div className="flex justify-center p-2 md:p-4 bg-eerieblack h-full">
                <div className="rounded-sm border border-brownsugar overflow-hidden w-full flex flex-col h-full">

                  {/* Tab header */}
                  <div className="border-b border-brownsugar flex bg-black dark:bg-[hsla(30, 37%, 50%, 1.00)]]">
                    {skillPillars.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPillar(i)}
                        className={`flex-1 py-2 px-1 text-[0.5em] md:text-xs font-console uppercase tracking-widest transition-colors duration-200 border-r last:border-r-0 border-brownsugar ${i === currentPillar
                            ? "text-white bg-neutral-900 dark:bg-[hsl(30,8%,12%)]"
                            : "text-neutral-400 hover:text-white dark:text-taupe dark:hover:text-lemonchiffon"
                          }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>

                  {/* Skills grid */}
                  <div className="p-2 md:p-5 flex-1 overflow-y-auto hide-scrollbar">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pb-2">
                      {activePillar.skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center text-center gap-1 p-2 rounded-sm border border-brownsugar hover:border-taupe transition-colors duration-200 min-h-[4rem]"
                          >
                            <Icon className="text-taupe w-4 h-4 md:w-5 md:h-5" />
                            <h3 className="font-console text-[0.55em] md:text-xs text-lemonchiffon leading-tight">{skill.name}</h3>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle className="bg-brownsugar !border-brownsugar" />

        {/* ── RIGHT PANEL ─────────────────────────────── */}
        <ResizablePanel defaultSize={isMobile ? 40 : 50} className="lg:p-4">
          <div className="h-full flex flex-col overflow-y-auto hide-scrollbar">
            {/* About & Image Section — always side-by-side */}
            <div className="grid grid-cols-2 xl:grid-cols-2 flex-shrink-0">
            
            {/* About Text */}
            <div className="flex flex-col justify-center border border-brownsugar p-3 lg:p-4 leading-5 font-body h-full">
              <div className="text-xs font-console uppercase tracking-widest text-taupe border-b border-brownsugar pb-1 mb-3">
                About
              </div>
              <p className="text-[0.7em] xl:text-[0.9em] text-lemonchiffon leading-relaxed">
                Software engineer and researcher specialising in <span className="text-bittersweet font-medium">AI systems, scalable applications, and cloud infrastructure</span>. My work spans machine learning research, real-time data systems, and full-stack mobile/web development.
              </p>
              <p className="text-[0.65em] xl:text-[0.85em] text-taupe mt-2 leading-relaxed hidden sm:block">
                Currently focused on <strong className="text-lemonchiffon">Active Learning</strong> and <strong className="text-lemonchiffon">Reinforcement Learning</strong> for anomaly detection, and building event-media platforms with Kotlin Multiplatform and Supabase.
              </p>
            </div>
            
            {/* Profile Image */}
            <div className="flex flex-col h-full border border-brownsugar border-l-0 text-xs font-body">
              <div className="relative border-b border-brownsugar flex-1 min-h-[10rem] overflow-hidden">
                <img
                  src="me2.jpg"
                  alt="Brian Tamukong"
                  className="absolute inset-0 w-full h-full object-cover object-top filter grayscale transition-all duration-300 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-eerieblack bg-opacity-30 mix-blend-multiply transition-opacity duration-300 hover:opacity-0 pointer-events-none">
                  <img src="image.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" aria-hidden="true" />
                </div>
              </div>
              <div className="p-2 text-taupe text-xs font-console tracking-wide mt-auto">
                Brian Tamukong
              </div>
            </div>
            
          </div>

          {/* Spacer */}
          <div className="h-2" />

          {/* Experience & Education — now inline, all screen sizes */}
          <div className="border border-brownsugar p-4 text-xs font-body">
            <div className="font-console text-xs uppercase tracking-widest text-taupe flex items-center gap-2 border-b border-brownsugar pb-2 mb-4">
              <BriefcaseBusiness className="w-4 h-4" /> Experience & Education
            </div>

            {/* Experience list */}
            <div className="space-y-5 mb-6">
              {experienceData.map((exp, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 text-taupe mb-1">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs font-console">{exp.period}</span>
                  </div>
                  <h3 className="font-semibold text-bittersweet text-sm">{exp.company}</h3>
                  <div className="text-taupe text-xs italic mb-1">{exp.role}</div>
                  <ul className="space-y-0.5 mt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-lemonchiffon text-xs leading-relaxed">· {r}</li>
                    ))}
                  </ul>
                  <div className="text-[0.65rem] text-taupe mt-1.5 font-console uppercase tracking-wider">
                    <span className="font-bold opacity-70">Stack: </span>{exp.skills.join(" · ")}
                  </div>
                </div>
              ))}
            </div>

            {/* Education list */}
            <div className="space-y-4 pt-4 border-t border-brownsugar border-dashed">
              <div className="text-xs font-console uppercase tracking-widest text-taupe mb-2">Education</div>
              {educationData.map((edu, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 text-taupe mb-1">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs font-console">{edu.period}</span>
                  </div>
                  <h3 className="font-semibold text-lemonchiffon text-sm">{edu.school}</h3>
                  <div className="text-taupe text-xs">{edu.degree}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom padding */}
          <div className="h-8" />
          </div>

        </ResizablePanel>
      </ResizablePanelGroup>

    </div>
  );
}
