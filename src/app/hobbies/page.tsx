"use client";
import React, { useState } from "react";
import {
  Menu,
  ArrowLeftFromLine,
  ArrowRightFromLine,
  Palette,
  Youtube,
  Mic,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const Hobbies = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const chapters = [
    {
      title: "Graphic/Logo Design",
      icon: Palette,
      content: [
        {
          screenshot: "../1.jpg",
          name: "",
          description: "",
        },
        {
          screenshot: "../2.jpg",
          name: "",
          description: "",
        },
        {
          screenshot: "../3.jpg",
          name: "",
          description: "",
          url: "",
        },
        {
          screenshot: "../4.jpg",
          name: "",
          description: "",
          url: "",
        },
        {
          name: "",
          description: "",
          url: "",
          screenshot: "../5.jpg",
        },
        {
          name: "",
          description: "",
          url: "",
          screenshot: "../6.jpg",
        },
        {
          name: "",
          description: "",
          url: "",
          screenshot: "../7.jpg",
        },
        {
          name: "",
          description: "",
          url: "",
          screenshot: "../8.jpg",
        },
        {
          name: "",
          description: "",
          url: "",
          screenshot: "../9.jpg",
        },
        {
          name: "",
          description: "",
          url: "",
          screenshot: "../1.png",
        },
      ],
    },
    {
      title: "Podcast",
      icon: Mic,
      content: [
        {
          name: "Naming Ceremony",
          description:
            "Get out of here you “Maquiza”, ever heard an aunt or even your mum call you that whilst growing up ? Want to know what it meant? Well then join us… If you’re 237 then you’ve surely met mama friendship, fake doccys and grassland. And if you haven’t then join us as they introduce us to some of their ‘babies’ and how they got their names. In this episode we journey through..",
          url: "https://podcasts.apple.com/us/podcast/the-naming-ceremony/id1613474137?i=1000556233168",
          screenshot: "../hc3.png",
        },
        {
          name: "Arabian Nights",
          description:
            "From the late-night backyard gathering to the lights-out quarter gatherings and even down to the eerie bedrooms with scary blinds… one thing is sure we all had a setting for our favorite bedtime or storytelling sessions. Remember those days when our elderly ones told us stories that either left you so scared you had to fall asleep immediately after or had you begging for more? Yes yes, the good old storytelling days join us as we take you through a time warp of storytelling with of course none other than our most talked of characters “John and Mary”… Just how much do you remember?",
          url: "https://podcasts.apple.com/us/podcast/arabian-nights/id1613474137?i=1000588336757",
          screenshot: "../hc4.png",
        },
        {
          name: "Welcome to class",
          description:
            "“I was a serious student when I was your age”…..that’s what they always said but was it always so? Did the folly and capriciousness start only in our time or are we the offspring of masters at the craft of lies? Welcome to class, sit back whilst we walk you through allowances, successes, failures, school menu and of course breaking bounds! We bring you the mindset behind “Grammar” and“Technical” education.",
          url: "https://podcasts.apple.com/us/podcast/welcome-to-class/id1613474137?i=1000564593136",
          screenshot: "../hc3.png",
        },
      ],
    },
    {
      title: "Video Editing",
      icon: Youtube,
      content: [
        {
          name: "Hidden Cowries",
          url: "https://youtube.com/@hiddencowries4868?si=eqmL0wPHkqutbbYQ",
          screenshot: "../youtube.webp",
          description: "Hidden Cowries Youtube Channel",
        },
        {
          name: "Pace Setter Visit",
          url: "https://youtu.be/WopaBB_Dk4k?si=q0EUW0pZ_d-cjHQO",
          screenshot: "../youtube.webp",
          description: "Pace Setter Visit to Dublin",
        },
        {
          name: "Lims Diaries",
          url: "https://www.youtube.com/@limsdiaries7625",
          screenshot: "../youtube.webp",
          description: "Lims Diaries Youtube Channel",
        },
      ],
    },
  ];

  return (
    <div className="h-[calc(100dvh-3.5rem)] md:h-[98vh] flex flex-col bg-eerieblack w-full !text-whiteout">
      {/* Mobile Nav Bar */}
      <Menubar className="fixed rounded-sm lg:hidden !z-30 w-[90%] !bg-bistre border border-brownsugar bottom-6 right-4 left-4 mx-auto">
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

      <div className="flex flex-1 min-h-0 border border-brownsugar">
        {/* Sidebar */}
        <div
          className={`hidden lg:block bg-eerieblack border-r border-brownsugar shadow-lg transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-0"
          } overflow-hidden`}
        >
          <div className="p-4 border-b border-brownsugar">
            <h2 className="text-xs font-console uppercase tracking-widest text-taupe">
              Projects
            </h2>
          </div>
          <nav className="overflow-y-auto  h-full ">
            {chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => setActiveChapter(index)}
                className={`w-full text-left px-4 py-3 text-sm font-body transition-colors duration-200 border-l-2 ${
                  activeChapter === index
                    ? "border-bittersweet text-lemonchiffon bg-bistre"
                    : "border-transparent text-taupe hover:text-lemonchiffon hover:bg-bistre/60"
                }`}
              >
                {chapter.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content Header */}
          <div className="bg-eerieblack border-b border-brownsugar px-4 py-4 md:px-6 md:py-4 flex items-center gap-3">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              size="sm"
              variant="outline"
              className="lg:hidden p-1.5 h-auto border-brownsugar text-taupe hover:text-lemonchiffon"
            >
              <Menu size={16} />
            </Button>
            <div>
              <p className="text-[0.6em] font-console tracking-widest uppercase text-taupe leading-none mb-1">
                Musings
              </p>
              <h1 className="text-lg md:text-xl font-body text-lemonchiffon leading-tight">
                {chapters[activeChapter].title}
              </h1>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col overflow-y-auto p-4 md:p-6 lg:p-8 bg-eerieblack  hide-scrollbar">
            <div className="w-full flex-1 mx-auto bg">
              {/* next and previous buttons */}
              <div className="flex space-x-2 w-full justify-between lg:justify-end mb-4">
                <Button
                  onClick={() => setActiveChapter(activeChapter - 1)}
                  disabled={activeChapter === 0}
                  variant={"outline"}
                  className="border border-brownsugar text-taupe bg-transparent hover:text-lemonchiffon hover:bg-brownsugar transition-colors duration-200"
                >
                  <ArrowLeftFromLine size={16} className="mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={() => setActiveChapter(activeChapter + 1)}
                  disabled={activeChapter === chapters.length - 1}
                  variant={"outline"}
                  className="border border-brownsugar text-taupe bg-transparent hover:text-lemonchiffon hover:bg-brownsugar transition-colors duration-200"
                >
                  Next
                  <ArrowRightFromLine size={16} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(chapters[activeChapter].content) ? (
                  chapters[activeChapter].content.map((project, index) => (
                    <div
                      key={index}
                      className="border border-brownsugar bg-bistre/30 w-full hover:border-taupe rounded-sm p-4 transition-all flex flex-col h-full"
                    >
                      {"screenshot" in project && project.screenshot && (
                        <a
                          href={"url" in project ? project.url : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-taupe hover:opacity-80 transition-opacity"
                        >
                          <div className="mb-4 relative h-48 w-full overflow-hidden rounded-sm">
                            <img
                              src={project.screenshot}
                              alt={
                                "name" in project
                                  ? project.name
                                  : "Project image"
                              }
                              className="w-full h-full object-cover rounded-sm border border-brownsugar transition-all duration-300"
                            />
                          </div>
                        </a>
                      )}
                      <div className="pt-3 flex-1 flex flex-col">
                        {"name" in project && project.name && (
                          <h3 className="text-lg font-body text-lemonchiffon">
                            {project.name}
                          </h3>
                        )}
                        {"description" in project && project.description && (
                          <p className="text-sm text-taupe mt-1 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        )}
                        <div className="flex-1"></div>
                        {"url" in project && project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center text-taupe hover:text-bittersweet transition-colors text-sm font-sans w-fit"
                          >
                            Link <ArrowRightFromLine className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full col-span-3">
                    <p className="text-center w-full text-taupe font-console text-lg">
                      Coming Soon..
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
