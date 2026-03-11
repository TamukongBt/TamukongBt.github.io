"use client";
import React, { useState } from "react";
import {
  Menu,
  ArrowLeftFromLine,
  ArrowRightFromLine,
  MonitorSmartphone,
  Database,
  Shapes,
  EarthLock,
  Smartphone,
  Brain,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const WorkPage = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const chapters = [
    {
      title: "AI & ML Research",
      icon: Brain,
      content: [
        {
          name: "Adaptive Intrusion Detection (Active Learning + RL)",
          description:
            "Research system combining Active Learning query strategies with Reinforcement Learning (PPO/GRPO) for real-time anomaly detection on CAN-bus and malware datasets. Built dynamic threshold models with ModAL and evaluated with DeepEval.",
          url: "",
          github: "https://github.com/TamukongBt",
          screenshot: "",
          tags: [
            "Python",
            "Active Learning",
            "PPO",
            "ModAL",
            "Scikit-learn",
            "PyTorch",
          ],
        },
        {
          name: "CIFAR-10 Feature Extraction Pipeline",
          description:
            "Efficient image feature extraction pipeline benchmarking classical ML (Random Forest, Histogram Gradient Boosting) vs CNN embeddings on CIFAR-10. Focused on training efficiency and classification performance.",
          url: "",
          github: "https://github.com/TamukongBt",
          screenshot: "",
          tags: ["Python", "PyTorch", "Scikit-learn", "Random Forest", "CNN"],
        },
        {
          name: "Master's Thesis — Blockchain Authentication",
          description:
            "Authentication system using Blockchain and Homomorphic Encryption for secure identity verification on Ethereum.",
          url: "https://github.com/TamukongBt/bank_app",
          github: "https://github.com/TamukongBt/bank_app",
          screenshot: "",
          tags: ["Blockchain", "Ethereum", "Homomorphic Encryption", "Python"],
        },
      ],
    },
    {
      title: "Web Development",
      icon: MonitorSmartphone,
      content: [
        {
          name: "Axis Marketplace",
          description:
            "B2C Ecommerce Application — product listings, cart, and checkout flow.",
          url: "https://theaxismarket.com/home",
          github: "",
          screenshot: "../axis.png",
        },
        {
          name: "The Nightout Party App",
          description:
            "Event discovery and ticket booking platform with live event feeds.",
          url: "https://www.thenightout.party/",
          github: "",
          screenshot: "../nightout.png",
        },
        {
          name: "Kvisionlens",
          description: "Photography portfolio and client booking system.",
          url: "https://kvisionlens.com/",
          github: "",
          screenshot: "../kvision.png",
        },
        {
          name: "VZZ Brokerage",
          description: "Loan and brokerage web application.",
          url: "https://www.vzzbrokerage.com/",
          github: "",
          screenshot: "../vz.png",
        },
        {
          name: "Omega Gospel Ministries",
          description: "Church website with donation and events management.",
          url: "https://omegagospelministry.com/",
          github: "",
          screenshot: "../omega.png",
        },
        {
          name: "Studs.",
          description: "Student timetable and schedule management tool.",
          url: "https://github.com/TamukongBt/Studs",
          github: "https://github.com/TamukongBt/Studs",
          screenshot: "",
        },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      content: [
        {
          name: "Chakap — Event Media Platform",
          description:
            "Cross-platform event media app built with Kotlin Multiplatform and Jetpack Compose. Features event-scoped photo/video storage, real-time media uploads, photobooth camera system, live streaming, and role-based access for organizers, attendees, and contributors.",
          url: "",
          github: "https://github.com/TamukongBt",
          screenshot: "",
          tags: [
            "Kotlin Multiplatform",
            "Supabase",
            "Jetpack Compose",
            "Docker",
            "Immich",
          ],
        },
        {
          name: "Scheduling App",
          description:
            "The Scheduling App is a mobile application that allows users to schedule and manage their appointments. The app is built using Kotlin Expo and Supabase, and it features a user-friendly interface with a variety of features such as event creation, editing, and deletion. The app also includes a calendar view that allows users to view their events and appointments in a visual way.",
          url: "",
          github: "https://github.com/TamukongBt",
          screenshot: "",
          tags: ["Expo", "Supabase"],
        },
      ],
    },

    {
      title: "Cloud & Systems",
      icon: Cloud,
      content: [
        {
          name: "IoT Waste Management Platform",
          description:
            "Sensor data ingestion pipelines with cloud dashboards, real-time analytics, and smart bin monitoring. CoAP protocol integration for edge devices with GCP cloud backend.",
          url: "",
          github: "https://github.com/TamukongBt",
          screenshot: "",
          tags: ["GCP", "IoT", "CoAP", "WebSockets", "Docker"],
        },
        {
          name: "Big Data Kafka Pipeline",
          description:
            "Odoo to Kafka real-time data streaming pipeline. Managed a 3-node Hadoop cluster for high-volume dataset analysis. Reduced data latency by 30%.",
          url: "https://github.com/TamukongBt/kafkaconnectproject",
          github: "https://github.com/TamukongBt/kafkaconnectproject",
          screenshot: "",
          tags: ["Kafka", "Hadoop", "PostgreSQL", "MySQL", "Data Pipelines"],
        },
      ],
    },
    {
      title: "Data & Big Data",
      icon: Database,
      content: [
        {
          name: "SB Remit — Payment API Integration",
          description:
            "Production payment API integrations for a fintech remittance platform. Improved transaction success rates by optimising API response handling and CI/CD processes.",
          url: "",
          github: "",
          screenshot: "",
          tags: ["REST APIs", "CI/CD", "Backend", "Database Optimisation"],
        },
      ],
    },
    {
      title: "UI/UX Design",
      icon: Shapes,
      content: [
        {
          name: "Match And Mingle UI",
          description:
            "A dating website design — full Figma design system with component library.",
          url: "https://www.figma.com/design/G0jUNAr1YBOQp7hXRF5bv2/Match-N-Mingle?node-id=0-1&t=CPHCj4jY7jMrsT4N-1",
          github: "",
          screenshot: "../mnm.png",
          tags: ["Figma", "UI/UX", "Design Systems"],
        },
        {
          name: "Congress App",
          description:
            "Religious event booking application — full mobile UX design.",
          url: "https://www.figma.com/design/OV6GYlx9VZ6U2IeXEPchNa/Congress-App?node-id=284-2&t=ZVuHoOfnpCRYRgWN-1",
          github: "",
          screenshot: "../congress.png",
          tags: ["Figma", "Mobile UX", "Booking Flow"],
        },
      ],
    },
    {
      title: "Blockchain & Encryption",
      icon: EarthLock,
      content: [
        {
          name: "Blockchain Authentication System",
          description:
            "Master's thesis — authentication using Blockchain and Homomorphic Encryption on Ethereum for secure banking identity verification.",
          url: "https://github.com/TamukongBt/bank_app",
          github: "https://github.com/TamukongBt/bank_app",
          screenshot: "",
          tags: ["Ethereum", "Blockchain", "Homomorphic Encryption"],
        },
      ],
    },
  ];

  return (
    <div className="h-[98vh] items-center justify-center bg-eerieblack w-full !text-whiteout">
      {/* Mobile nav bar */}
      <Menubar className="fixed rounded-sm lg:hidden !z-30 w-[90%] !bg-[hsla(30, 37%, 50%, 1.00)]] border border-brownsugar bottom-6 right-4 left-4 mx-auto">
        <MenubarMenu>
          <div className="flex items-center justify-between w-full">
            {chapters.map((chapter, index) => {
              const IconComponent = chapter.icon;
              return (
                <MenubarTrigger
                  key={index}
                  onClick={() => setActiveChapter(index)}
                  className={`!bg-transparent flex-1 flex justify-center p-3 transition-colors duration-200 ${
                    activeChapter === index
                      ? "text-lemonchiffon"
                      : "text-taupe hover:text-lemonchiffon"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                </MenubarTrigger>
              );
            })}
          </div>
        </MenubarMenu>
      </Menubar>

      <div className="flex h-full border border-brownsugar">
        {/* Desktop sidebar */}
        <div
          className={`hidden lg:block bg-eerieblack shadow-lg transition-all duration-300 ${isSidebarOpen ? "w-56" : "w-0"} overflow-hidden border-r border-brownsugar`}
        >
          <div className="p-4 border-b border-brownsugar">
            <h2 className="text-xs font-console uppercase tracking-widest text-taupe">
              Projects
            </h2>
          </div>
          <nav className="overflow-y-auto h-full hide-scrollbar">
            {chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => setActiveChapter(index)}
                className={`w-full text-left px-4 py-3 text-sm font-body transition-colors duration-200 border-l-2 ${
                  activeChapter === index
                    ? "border-bittersweet text-lemonchiffon bg-[hsla(30, 22%, 40%, 1.00)]"
                    : "border-transparent text-taupe hover:text-lemonchiffon hover:bg-[hsla(30, 37%, 50%, 1.00)]]"
                }`}
              >
                {chapter.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content header */}
          <div className="border-b border-brownsugar px-4 py-4 md:px-6 md:py-4 flex items-center gap-3 bg-[hsla(30, 37%, 50%, 1.00)]]">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              size="sm"
              variant="ghost"
              className="lg:hidden p-1.5 h-auto text-taupe hover:text-lemonchiffon hover:bg-brownsugar"
            >
              <Menu size={16} />
            </Button>
            <div>
              <p className="text-[0.6em] font-console tracking-widest uppercase text-taupe leading-none mb-1 hidden md:block">
                Projects
              </p>
              <h1 className="text-lg md:text-xl font-body text-lemonchiffon leading-tight">
                {chapters[activeChapter].title}
              </h1>
            </div>
            <div className="ml-auto flex gap-1">
              <Button
                onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                disabled={activeChapter === 0}
                size="sm"
                variant="ghost"
                className="p-1.5 h-auto text-taupe hover:text-lemonchiffon disabled:opacity-20"
              >
                <ArrowLeftFromLine size={14} />
              </Button>
              <Button
                onClick={() =>
                  setActiveChapter(
                    Math.min(chapters.length - 1, activeChapter + 1),
                  )
                }
                disabled={activeChapter === chapters.length - 1}
                size="sm"
                variant="ghost"
                className="p-1.5 h-auto text-taupe hover:text-lemonchiffon disabled:opacity-20"
              >
                <ArrowRightFromLine size={14} />
              </Button>
            </div>
          </div>

          {/* Cards area */}
          <div className="flex-1 overflow-auto p-4 md:p-6 bg-eerieblack">
            {Array.isArray(chapters[activeChapter].content) &&
            chapters[activeChapter].content.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {chapters[activeChapter].content.map((project, index) => (
                  <a
                    key={index}
                    href={project.url || project.github || "#"}
                    target={
                      project.url || project.github ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="group block border border-brownsugar rounded-sm hover:border-taupe transition-colors duration-200"
                  >
                    {project.screenshot ? (
                      <div className="relative border-b border-brownsugar overflow-hidden">
                        <img
                          src={project.screenshot}
                          alt={project.name}
                          className="w-full h-40 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-eerieblack bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300" />
                      </div>
                    ) : (
                      <div className="h-16 border-b border-brownsugar bg-[hsla(30, 37%, 50%, 1.00)]] flex items-center px-4">
                        {React.createElement(chapters[activeChapter].icon, {
                          className: "w-6 h-6 text-brownsugar",
                        })}
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-sm font-console text-lemonchiffon mb-1 leading-snug">
                        {project.name}
                      </h3>
                      <p className="text-xs text-taupe leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      {"tags" in project && project.tags && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {project.tags.map((tag: string, ti: number) => (
                            <span
                              key={ti}
                              className="text-[0.6em] font-console px-2 py-0.5 border border-brownsugar text-taupe rounded-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-taupe font-console text-sm tracking-widest uppercase">
                  Coming Soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
