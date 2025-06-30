"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
]
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 w-[98%] mx-auto rounded-b-3xl z-50 backdrop-blur-md shadow-sm">

            <nav
                className="flex items-center justify-between px-6 py-6 md:px-12"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="text-2xl font-bold text-black dark:text-white transition-colors duration-300">DEVLOP.ME</div>
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                            aria-label={`Navigate to ${item.name}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <AnimatedButton
                        variant="outline"
                        className="hidden md:flex rounded-full border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-6"
                    >
                        Start Project
                    </AnimatedButton>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-black dark:text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-black dark:text-white" />
                        )}
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 md:hidden">
                        <div className="px-6 py-4 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-2"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <AnimatedButton
                                variant="outline"
                                className="w-full rounded-full border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                            >
                                Start Project
                            </AnimatedButton>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}


export default Navigation;
