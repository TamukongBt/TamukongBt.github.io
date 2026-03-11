"use client"
import Link from "next/link"
import {
  BriefcaseBusiness,
  BookOpen,
  Home,
  Moon,
  Newspaper,
  Palette,
  Sun,
  BarChart3,
  PencilLine,
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const isDark = storedTheme
        ? storedTheme === 'dark'
        : document.documentElement.classList.contains('dark');

      document.documentElement.classList.toggle('dark', isDark);
      setIsDarkMode(isDark);
    }
  }, []);

 
 
  const toggleTheme = () => {
    setIsDarkMode((previous) => {
      const next = !previous;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };


  return (
    <>

      <TooltipProvider>
        {/* place menubar  at bottom of screen at all times  */}

        <aside className="z-10 hidden w-14 flex-col border-brownsugar border h-[98vh] bg-eerieblack sm:flex">
          <div className="bg-eerieblack border-b border-brownsugar h-[3.5rem] py-2 font-bold font-display capitalize">
            <Link href="/" className="px-4 text-2xl text-lemonchiffon leading-3 my-auto flex align-middle items-center h-full tracking-widest">
              TB
            </Link>
          </div>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">

            <Link
              href="/"
              className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold transition-colors duration-200 ${
                route === '/' 
                  ? 'bg-bittersweet text-eerieblack' 
                  : 'text-lemonchiffon hover:bg-brownsugar hover:text-lemonchiffon'
              } md:h-8 md:w-8 md:text-base`}
            >
              <Home className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Home</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/work"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold transition-colors duration-200 ${
                    route === '/work'
                      ? 'bg-bittersweet text-eerieblack'
                      : 'text-lemonchiffon hover:bg-brownsugar hover:text-lemonchiffon'
                  } md:h-8 md:w-8 md:text-base`}
                >
                  <BriefcaseBusiness className="h-5 w-5" />
                  <span className="sr-only">Work</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-bittersweet text-eerieblack border-0">Work</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/hobbies"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold transition-colors duration-200 ${
                    route === '/hobbies'
                      ? 'bg-bittersweet text-eerieblack'
                      : 'text-lemonchiffon hover:bg-brownsugar hover:text-lemonchiffon'
                  } md:h-8 md:w-8 md:text-base`}
                >
                  <Palette className="h-5 w-5" />
                  <span className="sr-only">Musings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-bittersweet text-eerieblack border-0">Musings</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/skills"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold transition-colors duration-200 ${
                    route === '/skills'
                      ? 'bg-bittersweet text-eerieblack'
                      : 'text-lemonchiffon hover:bg-brownsugar hover:text-lemonchiffon'
                  } md:h-8 md:w-8 md:text-base`}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span className="sr-only">Skills</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-bittersweet text-eerieblack border-0">Skills</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/blog"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold transition-colors duration-200 ${
                    route === '/blog'
                      ? 'bg-bittersweet text-eerieblack'
                      : 'text-lemonchiffon hover:bg-brownsugar hover:text-lemonchiffon'
                  } md:h-8 md:w-8 md:text-base`}
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="sr-only">Blog</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-bittersweet text-eerieblack border-0">Blog</TooltipContent>
            </Tooltip>

          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  role="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-lemonchiffon transition-colors hover:bg-brownsugar hover:text-lemonchiffon md:h-8 md:w-8 cursor-pointer"
                >
                  {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  
                
                  <span  className="sr-only">Theme</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-bittersweet text-eerieblack border-0">Theme</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/credits"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-lemonchiffon transition-colors hover:bg-brownsugar hover:text-lemonchiffon md:h-8 md:w-8"
                >
                  <PencilLine className="h-5 w-5" />
                  <span className="sr-only">Credits</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-bittersweet text-eerieblack border-0">Credits</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
      </TooltipProvider>

    </>
  )
}

export default SideBar
