"use client"
import React, { useState } from 'react';
import { Menu, ArrowLeftFromLine, ArrowRightFromLine,  MonitorSmartphone, Database, Shapes, EarthLock, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';

const BookReader = () => {
    const [activeChapter, setActiveChapter] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const chapters = [
        {
            title: "Web Development",
            icon: MonitorSmartphone,
            content: [
                {
                    name: "Axis Marketplace",
                    description: "B2C Ecommerce Application.",
                    url: "https://theaxismarket.com/home",
                    github: "",
                    screenshot: "../axis.png"
                },
                {
                    name: "The Nightout Party App",
                    description: "Event discovery and ticket booking platform.",
                    url: "https://www.thenightout.party/",
                    github: "",
                    screenshot: "../nightout.png"
                },
                {
                    name: "Kvisionlens",
                    description: "Photography Portfolio and Booking.",
                    url: "https://kvisionlens.com/",
                    github: "",
                    screenshot: "../kvision.png"
                },
                {
                    name: "VZZ Brokerage",
                    description: "Loan and Brokerage App.",
                    url: "https://www.vzzbrokerage.com/",
                    github: "",
                    screenshot: "../vz.png"
                },
                {
                    name: "Omega Gospel Ministries",
                    description: "Church Website and Donation Site.",
                    url: "https://omegagospelministry.com/",
                    github: "",
                    screenshot: "../omega.png"
                },
                {
                    name: "Studs.",
                    description: "Student Timetable Project.",
                    url: "https://github.com/TamukongBt/Studs",
                    github: "https://github.com/TamukongBt/Studs",
                    screenshot: ""
                },
                {
                    name: "Immoniva.",
                    description: "Company E-commerce and Service Homepage.",
                    url: "https://github.com/TamukongBt/immonivo",
                    github: "https://github.com/TamukongBt/immonivo",
                    screenshot: ""
                },
                {
                    name: "Cards.",
                    description: "Bank Card Management Prototype.",
                    url: "https://github.com/TamukongBt/Cards",
                    github: "https://github.com/TamukongBt/Cards",
                    screenshot: ""
                },
            ],
        },
        {
            title: "Big Data",
            icon: Database,
            content: [
                {
                    name: "Big Data Kafka Project.",
                    description: "Odoo to Kafka Pipeline.",
                    url: "https://github.com/TamukongBt/kafkaconnectproject",
                    github: "https://github.com/TamukongBt/kafkaconnectproject",
                    screenshot: ""
                },
            ],
        },
        {
            title: "UI/UX",
            icon: Shapes,
            content: [
                {
                    name: "Match And Mingle UI",
                    description: "A Dating Website Design.",
                    url: "https://www.figma.com/design/G0jUNAr1YBOQp7hXRF5bv2/Match-N-Mingle?node-id=0-1&t=CPHCj4jY7jMrsT4N-1",
                    github: "",
                    screenshot: "../mnm.png"
                },
                {
                    name: "Congress App",
                    description: "Religious Booking App.",
                    url: "https://www.figma.com/design/OV6GYlx9VZ6U2IeXEPchNa/Congress-App?node-id=284-2&t=ZVuHoOfnpCRYRgWN-1",
                    github: "",
                    screenshot: "../congress.png"
                },
            ],
        },
        {
            title: "Blockchain and Encryption",
            icon: EarthLock,
            content: [
                {
                    name: "Master’s Thesis Authentication Using Blockchain and Homomorphic Encryption",
                    description: "Blockchain, Encryption and Ethereum.",
                    url: "https://github.com/TamukongBt/bank_app",
                    github: "https://github.com/TamukongBt/bank_app",
                    screenshot: ""
                },
            ],
        },
        {
            title: "Mobile Development",
            icon: Smartphone,

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

                                            {project.screenshot ? (
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                    <div className="relative border-2 border-lemonchiffon rounded-lg text-yellow-50 text-xs font-body  text-justify">
                                                        <img
                                                            src={project.screenshot} alt={project.name}

                                                            className="w-full h-48 rounded-lg  object-cover object-top filter  contrast-125  transition-all duration-100 grayscale-0"
                                                        />
                                                        <div className="absolute inset-0 bg-white bg-opacity-50 rounded-lg mix-blend-multiply transition-opacity duration-100 hover:hidden">
                                                            <img src="../image.png" alt="the picture" className="w-full h-48 rounded-lg" />
                                                        </div>
                                                    </div>
                                                </a>
                                            ) : (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                                                    {/* <img src={'github.png'} alt={project.name} className="w-full h-48 object-contain rounded-lg mb-4" /> */}
                                                    <div className="relative w-full">
                                                        <img
                                                            src={'../github.png'} alt={project.name}
                                                            className="w-full h-48  object-contain filter grayscale contrast-125  transition-all duration-300 "
                                                        />
                                                        <div className="absolute inset-0 bg-white bg-opacity-50 mix-blend-multiply transition-opacity duration-300 hover:opacity-0">
                                                            <img src="../image.png" alt="the picture" className="w-full h-48" />
                                                        </div>
                                                    </div>
                                                </a>
                                            )}
                                            <div className="border-t border-taupe">
                                                <h3 className="text-lg font-semibold text-taupe font-console">{project.name}</h3>
                                                <p className="text-sm text-bistre">{project.description}</p>
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

export default BookReader;