"use client"
import React, { useState } from 'react';
import { Menu, ArrowLeftFromLine, ArrowRightFromLine, PenToolIcon } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'; 

const Thoughts = () => {
    const [activeChapter, setActiveChapter] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const chapters = [
        {
            title: "Reckless Release ",
            icon: PenToolIcon,
            content: [
                {
                    description: `
                    I ballad with the misfits 
                    To the tune of our madness we dance 
                    With no rythm we jive, 
                    the only thing that matters is our smiles as our hands meet
                    Take away the music and still we will, dance for the moment that is ours 
                    For the joy in our feets that can't be taken away
                    People like us were not made for this, 
                    Yet we twist and turn, blissfully till our rythm goes down in history
                    Or lost to time like our dying youth 
                    Even without music, the rhythm of our spirits will carry on
                    The dance is ours, a fleeting gift, a taste of pure happiness
                    For this simple happiness of release i will let my body move in blissful abandon
                    And raise my hands to the heavens till it meets the maker`,
                    image: "/images/graphics.jpg",
                },
            ],
        },
        {
            title: "The Joke",
            icon: PenToolIcon,
            content: [
                {
                    description: 
                    `
                    Smile do it big so they see
                    Pearly whites or creamy whites 
                    Let them show, from molar to molar laugh
                    So hard you become the punch line 

                    The joke is living you just happened to be part of the audience
                    Cackle and laugh some more 
                    It's funny isn't it...keep it going till the tears drop 
                    And it feels like there is  no air in your lungs 
                    Yet don't stop laugh through it
                    The joke is on you`,
                    image: "/images/graphics.jpg",
                },
            ],
        },
       


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
                            <div className=" border-t-2 border-taupe p-4">
                                {Array.isArray(chapters[activeChapter].content) ? (
                                    <div className="w-45 prose ">
                                        <h2 className="text-2xl font-semibold text-eerieblack text-center underline ">{chapters[activeChapter].title}</h2>
                                        <pre className='text-left w-full text-taupe font-design text-2xl justify'>{chapters[activeChapter].content[0].description}</pre>
                                    </div>
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

export default Thoughts;