"use client"

import { Instagram, Twitter, Facebook, Phone } from "lucide-react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"

const HeroSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    }

    const slideUpVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const slideInFromLeft: Variants = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const fadeInVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    }

    const socialIconVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    const textStaggerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    // Add these new variants after the existing variants
    const headingContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    const highlightVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 1,
                ease: "backOut",
                delay: 0.2,
            },
        },
    }

    return (
        <section id="home" className="relative min-h-[85vh] mt-40 mb-20 md:mb-0 md:mt-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner.png"
                    alt="Background"
                    fill
                    className="object-cover brightness-75 dark:brightness-50"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-0"></div>

            <motion.div
                className="min-h-[85vh] overflow-y-hidden relative z-10 flex items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="w-full">
                    <motion.div className="mb-48 px-[50px] w-full" variants={slideUpVariants}>
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight"
                            variants={headingContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.span variants={wordVariants} className="inline-block mr-4">
                                Trusted
                            </motion.span>
                            <motion.span
                                variants={highlightVariants}
                                className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 inline-block transition-all duration-300 hover:scale-105 mr-4"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -2, 2, 0],
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Partner
                            </motion.span>
                            <br />
                            <motion.span variants={wordVariants} className="inline-block mr-4">
                                for
                            </motion.span>
                            <motion.span variants={wordVariants} className="inline-block mr-4">
                                Your
                            </motion.span>
                            <motion.span variants={wordVariants} className="inline-block mr-4">
                                Website
                            </motion.span>
                            <motion.span
                                variants={highlightVariants}
                                className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 inline-block transition-all duration-300 hover:scale-105"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, 2, -2, 0],
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Develop.
                            </motion.span>
                        </motion.h1>
                    </motion.div>

                    <div className="flex gap-60">
                        <motion.div
                            className="hidden items-center lg:flex justify-center space-x-4 pl-6"
                            variants={slideInFromLeft}
                        >
                            <div className="mt-[107px]">
                                <motion.div
                                    className="transform -rotate-90 text-sm text-black dark:text-white whitespace-nowrap"
                                    variants={fadeInVariants}
                                >
                                    @williamrey
                                </motion.div>
                            </div>
                            <motion.div className="flex flex-col items-center space-y-4" variants={textStaggerVariants}>
                                <motion.a
                                    href="https://www.instagram.com/monir_2525"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter profile"
                                    variants={socialIconVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Twitter className="w-6 h-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300" />
                                </motion.a>
                                <motion.a
                                    href="https://x.com/Monir8699"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram profile"
                                    variants={socialIconVariants}
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Instagram className="w-6 h-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300" />
                                </motion.a>
                                <motion.a
                                    href="https://www.facebook.com/moniruzzaman255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook profile"
                                    variants={socialIconVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Facebook className="w-6 h-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300" />
                                </motion.a>
                                <motion.div
                                    className="w-px h-16 bg-black dark:bg-white mb-4"
                                    variants={fadeInVariants}
                                    initial={{ height: 0 }}
                                    animate={{ height: 64 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div className="flex-1 flex px-6 md:px-12 lg:px-20" variants={slideUpVariants}>
                            <motion.div className="max-w-4xl" variants={textStaggerVariants}>
                                <motion.div className="mb-8 space-y-2" variants={textStaggerVariants}>
                                    <motion.p className="text-lg md:text-xl text-black dark:text-white" variants={slideUpVariants}>
                                        Building the world's best marketing websites for over a decade.
                                    </motion.p>
                                    <motion.p className="text-lg md:text-xl text-black dark:text-white" variants={slideUpVariants}>
                                        Your trusted partner for strategy, design, and dev.
                                    </motion.p>
                                </motion.div>
                                <motion.div variants={slideUpVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <AnimatedButton
                                        className="rounded-full bg-transparent border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-8 py-6 text-lg flex items-center gap-3"
                                        variant="outline"
                                        aria-label="Schedule a consultation call"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Schedule a Call
                                    </AnimatedButton>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection
