"use client"

import { Instagram, Twitter, Facebook, Phone } from "lucide-react"
import Image from "next/image"
import { motion, type Variants, useScroll, useTransform, useSpring } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { useRef } from "react"

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
    const backgroundYSpring = useSpring(backgroundY, springConfig)

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const slideUpVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    const slideInFromLeft: Variants = {
        hidden: {
            opacity: 0,
            x: -80,
            rotate: -5,
        },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    const fadeInVariants: Variants = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: "easeOut",
            },
        },
    }

    const socialIconVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.3,
            rotate: -180,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "backOut",
                type: "spring",
                stiffness: 200,
            },
        },
    }

    const textStaggerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const headingContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
            },
        },
    }

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 100,
            rotateX: -90,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
            },
        },
    }

    const highlightVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.3,
            rotateX: -90,
            rotateY: 180,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            transition: {
                duration: 1.2,
                ease: "backOut",
                delay: 0.3,
                type: "spring",
                stiffness: 150,
            },
        },
    }

    return (
        <section ref={sectionRef} id="home" className="relative min-h-[85vh] py-20 mt-16 overflow-hidden">
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundYSpring }}>
                <Image
                    src="/banner.png"
                    alt="Background"
                    fill
                    className="object-cover brightness-75 dark:brightness-50"
                    priority
                />
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "linear-gradient(45deg, transparent, transparent, rgba(0,0,0,0.1))",
                            "linear-gradient(45deg, transparent, rgba(0,0,0,0.05), transparent)",
                            "linear-gradient(45deg, transparent, transparent, rgba(0,0,0,0.1))",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            <motion.div
                className="min-h-[85vh] overflow-y-hidden relative z-10 flex items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ y: textY }}
            >
                <div className="w-full">
                    <motion.div className="mb-48 px-[50px] w-full" variants={slideUpVariants}>
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight"
                                variants={headingContainerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.span
                                    variants={wordVariants}
                                    className="inline-block mr-4"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "#10b981",
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    Trusted
                                </motion.span>
                                <motion.span
                                    variants={highlightVariants}
                                    className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 inline-block transition-all duration-300 hover:scale-105 mr-4 relative overflow-hidden"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: [0, -3, 3, 0],
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                        transition: { duration: 0.4 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatDelay: 3,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    Partner
                                </motion.span>
                                <br />
                                <motion.span
                                    variants={wordVariants}
                                    className="inline-block mr-4"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "#3b82f6",
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    for
                                </motion.span>
                                <motion.span
                                    variants={wordVariants}
                                    className="inline-block mr-4"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "#8b5cf6",
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    Your
                                </motion.span>
                                <motion.span
                                    variants={wordVariants}
                                    className="inline-block mr-4"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "#f59e0b",
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    Website
                                </motion.span>
                                <motion.span
                                    variants={highlightVariants}
                                    className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 inline-block transition-all duration-300 hover:scale-105 relative overflow-hidden"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: [0, 3, -3, 0],
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                        transition: { duration: 0.4 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatDelay: 4,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    Develop.
                                </motion.span>
                            </motion.h1>
                        </motion.div>
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
                                    animate={{
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                >
                                    @williamrey
                                </motion.div>
                            </div>
                            <motion.div
                                className="flex flex-col items-center space-y-4"
                                variants={textStaggerVariants}
                                animate={{
                                    y: [-10, 10, -10],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                <motion.a
                                    href="https://www.instagram.com/monir_2525"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter profile"
                                    variants={socialIconVariants}
                                    whileHover={{
                                        scale: 1.3,
                                        rotate: 15,
                                        color: "#1da1f2",
                                        filter: "drop-shadow(0 0 10px #1da1f2)",
                                        transition: { duration: 0.3 },
                                    }}
                                    whileTap={{ scale: 0.8 }}
                                    className="relative"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-blue-500/20"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 2, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <Twitter className="w-6 h-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 relative z-10" />
                                </motion.a>
                                <motion.a
                                    href="https://x.com/Monir8699"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram profile"
                                    variants={socialIconVariants}
                                    whileHover={{
                                        scale: 1.3,
                                        rotate: -15,
                                        color: "#e4405f",
                                        filter: "drop-shadow(0 0 10px #e4405f)",
                                        transition: { duration: 0.3 },
                                    }}
                                    whileTap={{ scale: 0.8 }}
                                    className="relative"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-pink-500/20"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 2, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <Instagram className="w-6 h-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 relative z-10" />
                                </motion.a>
                                <motion.a
                                    href="https://www.facebook.com/moniruzzaman255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook profile"
                                    variants={socialIconVariants}
                                    whileHover={{
                                        scale: 1.3,
                                        rotate: 15,
                                        color: "#1877f2",
                                        filter: "drop-shadow(0 0 10px #1877f2)",
                                        transition: { duration: 0.3 },
                                    }}
                                    whileTap={{ scale: 0.8 }}
                                    className="relative"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-blue-600/20"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 2, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <Facebook className="w-6 h-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 relative z-10" />
                                </motion.a>
                                <motion.div
                                    className="w-px bg-black dark:bg-white mb-4"
                                    variants={fadeInVariants}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: 64,
                                        opacity: 1,
                                        scaleY: [0, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.8,
                                        ease: "backOut",
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div className="flex-1 flex px-6 md:px-12 lg:px-20" variants={slideUpVariants}>
                            <motion.div className="max-w-4xl" variants={textStaggerVariants}>
                                <motion.div className="mb-8 space-y-2" variants={textStaggerVariants}>
                                    <motion.p
                                        className="text-lg md:text-xl text-black dark:text-white"
                                        variants={slideUpVariants}
                                        whileHover={{
                                            scale: 1.02,
                                            color: "#10b981",
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        Building the world&apos;s best marketing websites for over a decade.
                                    </motion.p>
                                    <motion.p
                                        className="text-lg md:text-xl text-black dark:text-white"
                                        variants={slideUpVariants}
                                        whileHover={{
                                            scale: 1.02,
                                            color: "#3b82f6",
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        Your trusted partner for strategy, design, and dev.
                                    </motion.p>
                                </motion.div>

                                <motion.div
                                    variants={slideUpVariants}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 1.2, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <AnimatedButton
                                        className="rounded-full bg-transparent border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-8 py-6 text-lg flex items-center gap-3 relative z-10 transition-all duration-300"
                                        variant="outline"
                                        aria-label="Schedule a consultation call"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "linear",
                                            }}
                                        >
                                            <Phone className="w-5 h-5" />
                                        </motion.div>
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
