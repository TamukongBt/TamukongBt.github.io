import React from 'react';
import Link from "next/link"
import {
    Dice3,
    Home,
    Martini,
    Popcorn,
} from "lucide-react"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
// Adjust the import path based on your project structure

const   BottomMenubar = () => {
    return (
        <Menubar className="fixed rounded-xl md:hidden !z-30  !bg-darkpurple bottom-10 left-5 right-5 bg-purple text-white ">
            <MenubarMenu >
                <div className="flex items-center justify-between w-full">
                    
                    <MenubarTrigger className='!bg-transparent'>
                        <Link
                            href="/cocktail"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            
                            <Martini className="h-5 w-5" />
                            <span className="sr-only">Cocktails</span>
                        </Link>
                    </MenubarTrigger>
                    <MenubarTrigger className='!bg-transparent'>
                        <Link
                            href="/chops"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Popcorn className="h-5 w-5" />
                            <span className="sr-only">Small Chops</span>
                        </Link>
                    </MenubarTrigger>
                    <MenubarTrigger className='!bg-transparent'>
                        <Link
                            href="/games"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Dice3 className="h-5 w-5" />
                            <span className="sr-only">Games</span>
                        </Link>
                    </MenubarTrigger>
                    <MenubarTrigger className='!bg-transparent'>
                        <Link
                            href="/"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Cocktails</span>
                        </Link>
                    </MenubarTrigger>
                </div>

            </MenubarMenu>
        </Menubar>
    );
};

export default BottomMenubar;
