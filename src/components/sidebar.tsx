"use client"
import Link from "next/link"
import {
  BriefcaseBusiness,
  Home,
  Moon,
  Newspaper,
  Palette,
  PencilLine,
  Sun,
} from "lucide-react"



import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export function SideBar() {
  const route = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      const isDark = theme === 'dark';
      setIsDarkMode(isDark);
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
    <>

      <TooltipProvider>
        {/* place menubar  at bottom of screen at all times  */}

        <aside className=" z-10 hidden w-14 flex-col border-lemonchiffon border h-[98vh] bg-eerieblack sm:flex">
          <div className=" bg-lemonchiffon h-[3.5rem] py-2 font-bold font-display capitalize">
            <Link href="/" className="px-4 text-2xl text-bittersweet leading-3 my-auto flex align-middle items-center h-full">
              TB
            </Link>
          </div>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">

            <Link
              href="/"
              className={`group flex h-9 w-9 shrink-0 items-center text-bittersweet dark:text-eerieblack justify-center gap-2 rounded-full bg-bittersweet text-lg ${route == '/' ? 'bg-lemonchiffon !text-eerieblack' : ''} font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base`}
            >
              <Home className="h-4 w-4 transition-all group-hover:scale-110 dark:text-eerieblack ${route == '/' ? 'bg-lemonchiffon !text-eerieblack' : ''}  " />
              <span className="sr-only">Tamukong Brian</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/work"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center text-lemonchiffon hover:bg-lemonchiffon hover:text-eerieblack gap-2 rounded-full text-lg font-semibold ${route == '/work/' ? 'bg-lemonchiffon !text-eerieblack' : ''} md:h-8 md:w-8 md:text-base`}
                >
                  <BriefcaseBusiness className="h-5 w-5" />
                  <span className="sr-only">Work</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-lemonchiffon text-eerieblack">Work</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/hobbies"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center text-lemonchiffon hover:bg-lemonchiffon hover:text-eerieblack gap-2 rounded-full text-lg font-semibold ${route == '/hobbies/' ? 'bg-lemonchiffon !text-eerieblack' : ''} md:h-8 md:w-8 md:text-base`}
                >
                  <Palette className="h-5 w-5" />
                  <span className="sr-only">Hobbies</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-lemonchiffon text-eerieblack">Hobbies</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/thoughts"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center text-lemonchiffon hover:bg-lemonchiffon hover:text-eerieblack gap-2 rounded-full text-lg font-semibold ${route == '/thoughts/' ? 'bg-lemonchiffon !text-eerieblack' : ''} md:h-8 md:w-8 md:text-base`}
                >
                  <Newspaper className="h-5 w-5" />
                  <span className="sr-only">Thoughts</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-lemonchiffon text-eerieblack">Thoughts</TooltipContent>
            </Tooltip>


          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={toggleTheme}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-lemonchiffon transition-colors hover:bg-lemonchiffon hover:text-eerieblack md:h-8 md:w-8"
                >
                  {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  
                
                  <span  className="sr-only">Theme</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-lemonchiffon text-eerieblack">Theme</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/credits"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-lemonchiffon transition-colors hover:bg-lemonchiffon hover:text-eerieblack md:h-8 md:w-8"
                >
                  <PencilLine className="h-5 w-5" />
                  <span className="sr-only">Credits</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-lemonchiffon text-eerieblack">Credits</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
      </TooltipProvider>

    </>
  )
}

export default SideBar
