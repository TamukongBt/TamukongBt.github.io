"use client"
import { motion } from "framer-motion";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Link from "next/link";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, BriefcaseBusiness, Calendar, EarthLock, Github, Instagram, Linkedin, Mail, MessageCircleMore, Network, Palette, Shapes } from "lucide-react";
import { Code2, Brain, Database, Container, Layers, Box, Cpu, GitBranch } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const typingEffect = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
    },
  }),
};

const text = "BRIAN";
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
const popoverVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // Adjust the duration for a slower fade-in
    },
  },
};

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [currentFont, setCurrentFont] = useState<keyof typeof fontSizes>(fonts[0] as keyof typeof fontSizes);
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex(Math.floor(Math.random() * fonts.length));
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const currentFont = fonts[currentFontIndex];

  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSkillSet, setCurrentSkillSet] = useState(2);



  const educationData = [

    {
      "period": "August 2023 – August 2024",
      "company": "SB Capital: SB Remit",
      "role": "Software Engineer / Backend Engineer",
      "responsibilities": [
        "Handled third-party payment API integrations, improving transaction success rates by optimizing API response handling.",
        "Managed CI/CD processes, enhancing deployment efficiency and reducing deployment times by 25%.",
        "Collaborated with team members to deploy new features, address bug fixes, and improve system stability and robustness.",
        "Contributed to server and database system maintenance to ensure robust system performance and high availability, significantly improving reliability during peak periods."
      ],
      "skills": ["API Integrations", "CI/CD", "Backend Development", "Database Management", "System Maintenance"]
    },
    {
      "period": "January 2022 – May 2024",
      "company": "VELPFI Technologies Buea",
      "role": "Software Engineer",
      "responsibilities": [
        "Built and maintained a Microsoft server running Windows Server, ensuring 99.9% uptime through continuous monitoring and preventive maintenance.",
        "Led CI/CD pipeline management, testing, and bug fixing, which resulted in a 20% increase in development productivity.",
        "Trained customers on system usage, enhancing user adoption rates by 35%, and gathered feedback from stakeholders to align software updates with client needs.",
        "Built and deployed system architectures to meet customer needs."
      ],
      "skills": ["Windows Server", "CI/CD", "Customer Training", "System Architecture", "Bug Fixing"]
    },
    {
      "period": "August 2020 – April 2021",
      "company": "Union Bank of Cameroon Plc.",
      "role": "Data Analyst / System Developer",
      "responsibilities": [
        "Conducted data analysis and cleaning using Excel and Python, providing insights that improved data management practices by 30%.",
        "Proposed and developed a prototype for a card management system, allowing for more efficient data handling and enhancing overall data accessibility."
      ],
      "skills": ["Data Analysis", "Python", "Excel", "Prototyping", "System Development"]
    },
    {
      "period": "August 2019 – August 2020",
      "company": "AppsTech Douala",
      "role": "Data Analyst / Big Data Intern",
      "responsibilities": [
        "Collaborated with a team of developers to build a data pipeline integrating PostgreSQL and MySQL master databases for real-time data streaming, improving data processing speeds by 40%.",
        "Leveraged Kafka for efficient data streaming across distributed nodes, reducing latency in data availability by 30%.",
        "Managed a 3-node Hadoop cluster and led a team in implementing the Hadoop database, enabling the company to handle and analyze high-volume datasets effectively."
      ],
      "skills": ["Data Pipeline", "PostgreSQL", "MySQL", "Kafka", "Hadoop"]
    }
  ];

  // skillset 
  const skillSets = [
    [
      { name: 'Web Development', icon: Code2, description: 'HTML, CSS, JavaScript' },
      { name: 'AI & ML', icon: Brain, description: 'Python, TensorFlow' },
      { name: 'Database Management', icon: Database, description: 'SQL, NoSQL' },
      { name: 'Docker', icon: Container, description: 'Containerization' }
    ],
    [
      { name: 'React', icon: Layers, description: 'NextJS, Components' },
      { name: 'Python', icon: Box, description: 'Backend, Data Science' },
      { name: 'DevOps', icon: GitBranch, description: 'CI/CD, Automation' },
      { name: 'System Architecture', icon: Cpu, description: 'Scalable Solutions' }
    ],
    [
      { name: 'UI/UX Design', icon: Shapes, description: 'Figma, Adobe XD' },
      { name: 'Blockchain', icon: EarthLock, description: 'Crypto Currency, Web3' },
      { name: 'Networking', icon: Network, description: 'Router Setup and Wiring ' },
      { name: 'Content Creation', icon: Palette, description: 'Graphics, Video Editing' }
    ]
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillSet((prev) => (prev === 2 ? 0 : prev + 1));

    }, 2000);

    return () => clearInterval(interval);
  });


  return (
    <div className="flex flex-col h-[90vh] md:h-[98vh] items-center justify-center bg-eerieblack w-full text-whiteout">

      <ResizablePanelGroup
        direction="horizontal"
        className="border !border-lemonchiffon"
      >
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction={"vertical"}>
            <ResizablePanel defaultSize={isMobile ? 40 : 60} className="flex flex-col justify-between">
              <div className={`${currentFont.class} text-lemonchiffon !pt-8 pl-4 lg:!pl-8 w-full transition-all duration-100`}>
                <div className="text-xl font-body font-light  ">The name is </div>
                <div className="flex items-center max-h-32">
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={typingEffect} className={`text-[2rem] md:text-[3.2rem] ${currentFont.size} p-0 m-0`}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <motion.span
                    className="inline-block blink"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <div className=" w-2 h-2 lg:h-4 lg:w-4  p-2 lg:p-4 bg-lemonchiffon mt-auto xl:mt-[3.5em] rounded-lg ">
                      &nbsp;
                    </div>
                  </motion.span>
                </div>
                <div className="text-[2rem] lg:text-[3rem] xl:text-8xl  font-light font-body tracking-2">Tamukong </div>
                <div className="text-lg font-bold font-body">I create, I build, I design</div>
                <div className="pt-2">
                  <Link href="/work">
                    <Button className="rounded-3xl text-2xl bg-bittersweet text-lemonchiffon hover:bg-lemonchiffon hover:text-bittersweet shadow-md border-b-4 border-r-4 border-lemonchiffon hover:border-brownsugar px-4">See Doings</Button>
                  </Link>
                </div>
              </div>

              <div className="bottom m-2 ">
                <div className="flex justify-end space-x-4 my-2 text-lemonchiffon ">
                  <Link href="https://www.instagram.com/tbs_adonis" target="_blank" className="text-2xl">
                    <Instagram className="text-2xl" />
                  </Link>
                  <Link href="https://wa.me/651076194" className="text-2xl" target="_blank">
                    <MessageCircleMore className="text-2xl" />
                  </Link>
                  <Link href="mailto:adoniscreates@gmail.com" className="text-2xl" target="_blank">
                    <Mail className="text-2xl" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/tamukong-brian-tanyie-a2b829135/" className="text-2xl" target="_blank">
                    <Linkedin className="text-2xl" />
                  </Link>
                  <Link href="https://github.com/TamukongBt" className="text-2xl" target="_blank">
                    <Github className="text-2xl" />
                  </Link>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle className="bg-lemonchiffon !border-lemonchiffon" />
            <ResizablePanel defaultSize={isMobile ? 60 : 40}>
              <div className="flex justify-center p-6  bg-eerieblack">
                <div className={`dark:bg-zinc-900 rounded-lg border-2 border-lemonchiffon overflow-hidden shadow-2xl transition-all duration-300 ${isFullscreen ? 'w-full h-full' : 'w-[900px]'
                  }`}>
                  {/* Window Header */}
                  <div className="border-b border-lemonchiffon px-4 py-2 flex items-center space-x-2">
                    <Button
                      className={`w-3 h-3 ${currentSkillSet === 0 ? 'px-[0.7rem] py-0' : 'p-0'} rounded-full bg-bittersweet hover:bg-red-600 transition-all `}
                    />
                    <Button
                      className={`w-3 h-3 ${currentSkillSet === 1 ? 'px-[0.7rem] py-0' : 'p-0'} rounded-full bg-lemonchiffon hover:bg-yellow-600 transition-all`}
                    />
                    <Button
                      className={`w-3 h-3 ${currentSkillSet === 2 ? 'px-[0.7rem] py-0' : 'p-0'} rounded-full bg-orange-900 hover:bg-green-600 transition-all`}
                    />
                    <span className="ml-4 text-lemonchiffon  text-[0.6em] lg:text-sm">Skills & Technologies</span>
                  </div>

                  {/* Skills Grid */}
                  <div className=" p-2 md:p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {skillSets[currentSkillSet].map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center text-center lg:space-y-3 p-[0.3em] md:p-2 rounded-lg border border-zinc-700 hover:bg-bittersweet dark:hover:bg-zinc-700 transition-all duration-400"
                          >
                            <IconComponent size={isMobile ? 20 : 36} className="text-lemonchiffon" />
                            <h3 className="font-console text-[0.5em] md:text-xs text-whiteout">{skill.name}</h3>
                            <p className="text-[0.5em]  md:text-sm text-lemonchiffon hidden lg:block">{skill.description}</p>
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
        <ResizableHandle className="bg-lemonchiffon !border-lemonchiffon" />
        <ResizablePanel defaultSize={40} className="lg:p-6">
          <div className="grid grid-cols-1 w-full  xl:grid-cols-2  text-buff">
            <div className="block border-2 border-lemonchiffon text-yellow-50 p-4 leading-5 font-body !text-lemonchiffon  ">
              <div className="font-serif font-[700] text-lg tracking-wide capitalize border-buff text-buff border-b-2">First of All</div>
              <p className="text-[0.8em] pt-2 xl:text-[1em] text-lemonchiffon">
                I am a Software Engineer with a passion for building robust and scalable software solutions. I specialize in fullstack web development,artificial Intelligence, data analysis, and system architecture. I have experience working with a variety of technologies, including Python, SQL,TypeScript, Power Bi and Docker. I am always eager to learn new skills and take on new challenges.
              </p>

            </div>
            <div className=" ">
              <div className=" border-2 border-lemonchiffon text-yellow-50  text-xs  font-body text-justify ">
                {/* Container for the image and overlay */}
                <div className="relative border-2 border-lemonchiffon text-yellow-50 text-xs w-full font-body text-justify">
                  <img
                    src="me2.jpg"
                    alt="Just me"

                    className=" w-full max-h-[15rem] object-cover object-top filter dark:grayscale   transition-all duration-300 hover:grayscale-0 hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-50 mix-blend-multiply transition-opacity duration-300 hover:opacity-0">
                    <img src="image.png" alt="the picture" className="!h-full w-full" />
                  </div>
                </div>
                <div className="p-2 text-lemonchiffon xl:text-lg">
                  Yep Thats Me...
                </div>
              </div>
            </div>
          </div>
          <div className="h-4"></div>
          <div className="col-span-2  hide-scrollbar   ">
            <div className="border-2 border-lemonchiffon text-yellow-50 p-4 text-xs  font-body text-justify overflow-hidden hide-scrollbar hidden md:block">
              <div className="font-mono font-[600] text-xl tracking-wide capitalize mb-2 flex border-buff text-buff border-b- ">
                <BriefcaseBusiness className="w-6 h-6 mr-2 " />  Experience
              </div>

              <div className="flex flex-col h-[15em]  xl:h-[22em] items-center justify-center bg-eerieblack w-full text-whiteout">
                <div className="space-y-6 h-68 overflow-y-auto hide-scrollbar">
                  {educationData.map((edu, index) => (
                    <div key={index} className="border-gray-200 text-white lg:!text-lg">
                      <div className="flex items-center gap-2 text-lemonchiffon mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>

                      <h3 className="font-semibold text-bittersweet mb-1">
                        {edu.company}
                      </h3>

                      <div className="mb-1 text-lg font-body">
                        <ul className="">
                          {edu.responsibilities.map((resp, index) => (
                            <li key={index} className="block text-lemonchiffon text-sm">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-sm leading-4 text-buff">
                        <span className="font-medium">Related skills: </span>
                        {edu.skills.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          {/* </div> */}
        </ResizablePanel>
      </ResizablePanelGroup>



      {/* <div className="absolute bottom-0 right-0 z-50 !font-design hidden lg:block ">
        <div className="relative group" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}>
          <img src="1.png" alt="Just me" width={"180px"} />
          <div
            className={`absolute bottom-[12.5rem] right-[7.75rem] mb-2 w-32 h-32 z-50 p-1 border-bittersweet  bg-lemonchiffon text-taupe text-center rounded-md shadow-lg border-dashed transition-opacity duration-1000 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className={`h-full my-auto border-2 p-2 bg-lemonchiffon text-taupe rounded-md border-bittersweet border-dashed `} >
              Hi Welcome How can we be of service today
            </div>
          </div>
        </div>
      </div> */}

      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center justify-center w-12 h-12 bg-bittersweet text-white rounded-full shadow-lg">
              <Briefcase className="w-6 h-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-eerieblack rounded-lg">
            <DialogTitle>Education</DialogTitle>
            <DialogDescription className="bg-eerieblack">
              <div className="flex flex-col h-[20em]  lg:h-[40em] items-center justify-center bg-eerieblack w-full text-whiteout">
                <div className="space-y-6 h-68 overflow-y-auto hide-scrollbar">
                  {educationData.map((edu, index) => (
                    <div key={index} className="border-gray-200 text-white lg:!text-lg">
                      <div className="flex items-center gap-2 text-lemonchiffon mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>

                      <h3 className="font-semibold text-buff mb-1">
                        {edu.company}
                      </h3>

                      <div className="mb-1 text-lg font-body">
                        {edu.responsibilities.map((resp, index) => (
                          <ul key={index}>
                            <li key={index} className="block text-lemonchiffon text-sm">
                              {resp}
                            </li>
                          </ul>
                        ))}
                      </div>

                      <div className="text-xs leading-4 text-buff">
                        <span className="font-medium space-x-2">Related skills: </span>
                        {edu.skills}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>

    </div>
  );
}
