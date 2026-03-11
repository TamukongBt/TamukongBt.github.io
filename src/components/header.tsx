"use client"
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    // Set the initial state based on the stored theme
    const [isDarkMode, setIsDarkMode] = useState(false);
    const route = usePathname();

    const navItems = [
        { href: "/work", label: "Work" },
        { href: "/skills", label: "Skills" },
        { href: "/blog", label: "Blog" },
        { href: "/hobbies", label: "Musings" },
    ];

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
        <header className="sticky top-0 z-30 w-full md:hidden border border-brownsugar bg-eerieblack sm:static sm:h-auto">
            <div className="flex items-center gap-2 h-14 pl-3 pr-2">
                <div className="flex-1 overflow-x-auto hide-scrollbar">
                    <nav className="flex min-w-max items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-1.5 rounded-sm text-xs font-console uppercase tracking-wide transition-colors duration-200 border ${
                                    route === item.href
                                        ? "border-bittersweet text-lemonchiffon bg-bistre"
                                        : "border-transparent text-taupe hover:text-lemonchiffon hover:bg-bistre/60"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                <div
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    role="button"
                    className="h-9 w-9 flex items-center justify-center rounded-lg text-eerieblack bg-bittersweet transition-colors hover:bg-brownsugar hover:text-lemonchiffon md:h-8 md:w-8 cursor-pointer"
                >
                    {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </div>
                <div className="bg-eerieblack border-l border-brownsugar font-bold font-display capitalize">
                    <Link href="/" className="px-3 text-2xl text-lemonchiffon leading-3 flex items-center h-9 tracking-widest">
                        TB
                    </Link>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Header;