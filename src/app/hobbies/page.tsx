"use client"
import React, { useState } from 'react';
import { Menu, ArrowLeftFromLine, ArrowRightFromLine, Palette, Youtube, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';

const Hobbies = () => {
    const [activeChapter, setActiveChapter] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleImageClick = () => {
        setOverlayVisible(!overlayVisible);
    };


    const chapters = [
        {
            title: "Graphic/Logo Design",
            icon: Palette,
            content: [
                {
                    screenshot: "1.jpg",
                    name: "",
                    description: "",
                },
                {
                    screenshot: "2.jpg",
                    name: "",
                    description: "",
                },
                {
                    screenshot: "3.jpg",
                    name: "",
                    description: "",
                    url: "",
                },
                {
                    screenshot: "4.jpg",
                    name: "",
                    description: "",
                    url: "",
                },
                {
                    name: "",
                    description: "",
                    url: "",
                    screenshot: "5.jpg"
                },
                {
                    name: "",
                    description: "",
                    url: "",
                    screenshot: "6.jpg"
                },
                {
                    name: "",
                    description: "",
                    url: "",
                    screenshot: "7.jpg"
                },
                {
                    name: "",
                    description: "",
                    url: "",
                    screenshot: "8.jpg"
                },
                {
                    name: "",
                    description: "",
                    url: "",
                    screenshot: "9.jpg"
                },
                {
                    name: "",
                    description: "",
                    url: "",
                    screenshot: "1.png"
                },
            ],
        },
        {
            title: "Podcast",
            icon: Mic,
            content: [
                {
                    name: "Naming Ceremony",
                    description: "Get out of here you “Maquiza”, ever heard an aunt or even your mum call you that whilst growing up ? Want to know what it meant? Well then join us… If you’re 237 then you’ve surely met mama friendship, fake doccys and grassland. And if you haven’t then join us as they introduce us to some of their ‘babies’ and how they got their names. In this episode we journey through..",
                    url: "https://podcasts.apple.com/us/podcast/the-naming-ceremony/id1613474137?i=1000556233168",
                    screenshot: "hc3.png"
                },
                {
                    name: "Arabian Nights",
                    description: "From the late-night backyard gathering to the lights-out quarter gatherings and even down to the eerie bedrooms with scary blinds… one thing is sure we all had a setting for our favorite bedtime or storytelling sessions. Remember those days when our elderly ones told us stories that either left you so scared you had to fall asleep immediately after or had you begging for more? Yes yes, the good old storytelling days join us as we take you through a time warp of storytelling with of course none other than our most talked of characters “John and Mary”… Just how much do you remember?",
                    url: "https://podcasts.apple.com/us/podcast/arabian-nights/id1613474137?i=1000588336757",
                    screenshot: "hc4.png"
                },
                {
                    name: "Welcome to class",
                    description: "“I was a serious student when I was your age”…..that’s what they always said but was it always so? Did the folly and capriciousness start only in our time or are we the offspring of masters at the craft of lies? Welcome to class, sit back whilst we walk you through allowances, successes, failures, school menu and of course breaking bounds! We bring you the mindset behind “Grammar” and“Technical” education.",
                    url: "https://podcasts.apple.com/us/podcast/welcome-to-class/id1613474137?i=1000564593136",
                    screenshot: "hc3.png"
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
                    screenshot: "hc1.png",
                    description: "Hidden Cowries Youtube Channel"
                },
                {
                    name: "Pace Setter Visit",
                    url: "https://youtu.be/WopaBB_Dk4k?si=q0EUW0pZ_d-cjHQO",
                    screenshot: "hc2.png",
                    description: "Pace Setter Visit to Dublin"
                },
                {
                    name: "Lims Diaries",
                    url: "https://www.youtube.com/@limsdiaries7625",
                    screenshot: "hc3.png",
                    description: "Lims Diaries Youtube Channel"
                }
            ]
        }
    ];



    return (
        <div className="h-[98vh] items-center justify-center bg-eerieblack w-full !text-whiteout">

            <Menubar className="fixed rounded-xl lg:hidden !z-30 w-[85%]  !bg-eerieblack bottom-10  right-5 bg-purple text-white ">
                <MenubarMenu >
                    <div className="flex items-center justify-between w-full">
                        {chapters.map((chapter, index) => {
                            const IconComponent = chapter.icon;
                            return (
                                <MenubarTrigger
                                    key={index}
                                    onClick={() => setActiveChapter(index)}
                                    className={`!bg-transparent w-full text-left p-4 hover:bg-lemonchiffon hover:text-eerieblack transition-colors duration-200
                ${activeChapter === index ? 'bg-lemonchiffon text-eerieblack border-bittersweet' : 'text-lemonchiffon hover:bg-lemonchiffon hover:text-eerieblack'}`}
                                >
                                    <IconComponent className={`h-6 w-6 hover:bg-transparent ${activeChapter === index ? 'border-lemonchiffon border text-lemonchiffon  rounded-sm p-[2px]' : 'text-lemonchiffon'} transition-colors duration-200`} />

                                </MenubarTrigger>
                            )
                        })}

                    </div>

                </MenubarMenu>
            </Menubar>
            <div className="flex h-full border border-lemonchiffon">
                {/* Sidebar */}
                <div className={`hidden lg:block bg-eerieblack shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'
                    } overflow-hidden`}>
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-3xl font-display font-semibold text-lemonchiffon">Projects</h2>
                    </div>
                    <nav className="overflow-y-auto  h-full ">
                        {chapters.map((chapter, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveChapter(index)}
                                className={`w-full text-left p-4 hover:bg-lemonchiffon hover:text-eerieblack transition-colors duration-200
                ${activeChapter === index ? 'bg-lemonchiffon border-l-4 text-eerieblack border-bittersweet' : 'text-lemonchiffon hover:bg-lemonchiffon hover:text-eerieblack'}`}
                            >
                                <span className={`font-medium`}>{chapter.title}</span>
                            </button>
                        ))}
                    </nav>


                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col border-b border-l border-lemonchiffon">
                    {/* Content Header */}
                    <div className="bg-bittersweet shadow-sm border-b border-lemonchiffon p-[0.85em] flex items-center">
                        <Button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 rounded-lg border-2 border-bittersweet hover:border-lemonchiffon  bg-lemonchiffon  transition-colors duration-200"
                        >
                            <Menu size={20} className="text-taupe hover:text-bittersweet" />
                        </Button>
                        <h1 className="ml-4 text-xl font-semibold text-lemonchiffon">
                            {chapters[activeChapter].title}
                        </h1>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-auto md:p-8  bg-eerieblack m-4 h-full  rounded-lg shadow-sm">

                        <div className="py-2 max-w-none   bg-lemonchiffon rounded-lg border border-lemonchiffon">
                            {/* next and previous buttons */}
                            <div className="flex space-x-2 justify-end">
                                <Button
                                    onClick={() => setActiveChapter(activeChapter - 1)}
                                    disabled={activeChapter === 0}
                                    variant={'link'}
                                    className="border-bittersweet hover:bg-transparent text-taupe bg-lemonchiffon  transition-colors duration-200"
                                >
                                    <ArrowLeftFromLine size={20} className="transform  hover:text-bittersweet text-taupe mx-2" />
                                    Previous
                                </Button>
                                <Button
                                    onClick={() => setActiveChapter(activeChapter + 1)}
                                    disabled={activeChapter === chapters.length - 1}
                                    variant={'link'}
                                    className="hover:bg-transparent bg-lemonchiffon text-taupe  transition-colors duration-200"
                                >
                                    Next
                                    <ArrowRightFromLine size={20} className="text-taupe hover:text-bittersweet mx-2" />
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 border-t-2 border-taupe p-4">
                                {Array.isArray(chapters[activeChapter].content) ? (
                                    chapters[activeChapter].content.map((project, index) => (
                                        <div key={index} className="border w-full hover:border-2 rounded-lg border-taupe p-4 transition-all">
                                            {project.screenshot && (
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                    <div className="relative border-2 border-lemonchiffon rounded-lg text-yellow-50 text-xs font-body  text-justify">
                                                        <img
                                                            src={project.screenshot} alt={project.name || 'Project Image'}
                                                            className="w-full h-48 rounded-lg  object-cover object-top filter  contrast-125  transition-all duration-100 grayscale-0"
                                                        />
                                                        <div className="absolute inset-0 bg-white bg-opacity-50 rounded-lg mix-blend-multiply transition-opacity duration-100 hover:hidden">
                                                            <img src="image.png" alt="the picture" className="w-full h-48 rounded-lg" />
                                                        </div>
                                                    </div>
                                                </a>
                                            )}
                                            <div className="border-t border-taupe">
                                                {project.name && <h3 className="text-lg font-semibold text-taupe font-console">{project.name}</h3>}
                                                {project.description && <p className="text-sm text-bistre">{project.description.slice(0, 70)}...</p>}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-full col-span-4">
                                        <p className='text-center w-full text-taupe font-design text-2xl'>{`Coming Soon..`}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hobbies;