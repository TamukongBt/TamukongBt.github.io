"use client"
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    // Set the initial state based on the stored theme
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const theme = localStorage.getItem('theme');
            const isDark = theme === 'dark';
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);



    const toggleTheme = () => {

        // removefromLocalStorage
        localStorage.removeItem('theme');
        // storeIn storage 
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', !isDarkMode);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="sticky top-0 z-30  !w-full justify-between flex md:hidden pl-4 !h-14 border border-lemonchiffon bg-eerieblack sm:static sm:h-auto  ">

            <div className="grid grid-cols-3 space-x-3 text-lemonchiffon font-sans pr-2  font-light sm:text-md rounded-lg ">
                <Link href="/work" className="flex items-center ">
                    <div className="mx-auto items-center hover:border-lemonchiffon hover:border-b-2">
                        My Work
                    </div>
                </Link>
                <Link href="/hobbies" className="flex items-center">
                    <div className="mx-auto items-center  hover:border-lemonchiffon hover:border-b-2">
                        Hobbies
                    </div>
                </Link>
                <Link href="/thoughts" className="flex items-center">
                    <div className="mx-auto items-center hover:border-lemonchiffon hover:border-b-2">
                        Thoughts
                    </div>
                </Link>
            </div>
            <div className="flex space-x-2 ">
                <div
                    onClick={toggleTheme}
                    className=" h-9 w-9 mx-auto my-auto items-center justify-center rounded-lg text-eerieblack bg-lemonchiffon transition-colors border border-lemonchiffon hover:text-bittersweet md:h-8 md:w-8"
                >
                    {isDarkMode ? <Moon className="h-7 w-7 mx-auto my-auto " /> : <Sun className="h-7 w-7" />}


                </div>
                <div className=" bg-lemonchiffon font-bold font-display capitalize">

                    <Link href="/" className="px-4 text-2xl text-bittersweet leading-3 my-auto flex align-middle items-center h-full">
                        TB
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;