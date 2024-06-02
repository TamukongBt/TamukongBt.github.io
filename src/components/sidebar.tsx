"use client"
import Link from "next/link"
import {
  Dice3,
  Home,
  Martini,
  Popcorn,
  Settings,
} from "lucide-react"


import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"


import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { usePathname } from 'next/navigation';

export function SideBar() {
  const route = usePathname();
  return (
    <>

      <TooltipProvider>
        {/* place menubar  at bottom of screen at all times  */}

        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-gray-500 border-r  pt-16 bg-darkpurple sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/"
              className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg ${route == '/' ? 'bg-white text-black' : ''} font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base`}
            >
              <Home className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Adonis Inc</span>
            </Link>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/cocktail"
                   className={`group flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground gap-2 rounded-full text-lg font-semibold ${route == '/cocktail' ? 'bg-accent text-accent-foreground' : ''} md:h-8 md:w-8 md:text-base`}
                >
                  <Martini className="h-5 w-5" />
                  <span className="sr-only">Cocktails</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Cocktails</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/chops"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground gap-2 rounded-full text-lg font-semibold ${route == '/chops' ? 'bg-accent text-accent-foreground' : ''} md:h-8 md:w-8 md:text-base`}
                >
                  <Popcorn className="h-5 w-5" />
                  <span className="sr-only">Small Chops</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Small Chops</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/games"
                  className={`group flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground gap-2 rounded-full text-lg font-semibold ${route == '/games' ? 'bg-accent text-accent-foreground' : ''} md:h-8 md:w-8 md:text-base`}
                >
                  <Dice3 className="h-5 w-5" />
                  <span className="sr-only">Games</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Games</TooltipContent>
            </Tooltip>


          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-lightpurple md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
      </TooltipProvider>
      
    </>
  )
}

export default SideBar
