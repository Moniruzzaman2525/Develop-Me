"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
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
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false)
    }

    const headerVariants: Variants = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: {
            y: -20,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    const mobileMenuVariants: Variants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    }

    const mobileItemVariants: Variants = {
        hidden: {
            x: -20,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    }

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-black/80 shadow-lg" : "bg-white/30 dark:bg-black/30 shadow-sm"
                }`}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.nav
                className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-6 md:px-12"
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Logo without animations */}
                <div className="text-2xl font-bold text-black dark:text-white transition-colors duration-300 cursor-pointer">
                    DEVLOP.ME
                </div>

                <motion.div className="hidden md:flex items-center space-x-8" variants={itemVariants}>
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="relative text-black dark:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 overflow-hidden"
                            aria-label={`Navigate to ${item.name}`}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                color: "#3b82f6",
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            custom={index}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded"
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">{item.name}</span>
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>
                        <ThemeToggle />
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <AnimatedButton
                            variant="outline"
                            className="hidden md:flex rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-6 relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 0.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">Start Project</span>
                        </AnimatedButton>
                    </motion.div>

                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isOpen}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative z-10"
                                >
                                    <X className="w-6 h-6 text-black dark:text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative z-10"
                                >
                                    <Menu className="w-6 h-6 text-black dark:text-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </motion.div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 md:hidden overflow-hidden"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="max-w-[1600px] mx-auto px-6 py-4 space-y-4">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left text-black dark:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-2 relative overflow-hidden"
                                    variants={mobileItemVariants}
                                    whileHover={{
                                        x: 10,
                                        color: "#3b82f6",
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    custom={index}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10">{item.name}</span>
                                </motion.button>
                            ))}
                            <motion.div variants={mobileItemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <AnimatedButton
                                    variant="outline"
                                    className="w-full rounded-full border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black relative overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 1, opacity: 0.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10">Start Project</span>
                                </AnimatedButton>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Navigation
