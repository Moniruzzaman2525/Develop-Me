"use client"

import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const taglines = [
    {
        line1: "Building the world's best marketing, your",
        line2: "trusted partner for strategy, design, and dev.",
    },
    {
        line1: "Creating innovative digital solutions that",
        line2: "drive growth and exceed expectations.",
    },
    {
        line1: "Transforming ideas into powerful brands with",
        line2: "cutting-edge design and development.",
    },
    {
        line1: "Your success is our mission through expert",
        line2: "strategy, creative design, and robust development.",
    },
]

const skills = [
    { title: "HTML & CSS", img: "/react.png" },
    { title: "JavaScript", img: "/react.png" },
    { title: "Webflow", img: "/react.png" },
    { title: "React", img: "/react.png" },
    { title: "Next.js", img: "/react.png" },
    { title: "TypeScript", img: "/react.png" },
    { title: "Node.js", img: "/react.png" },
    { title: "MongoDB", img: "/react.png" },
    { title: "Tailwind CSS", img: "/react.png" },
]

const SkillsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSkillPage, setCurrentSkillPage] = useState(0)
    const [skillsPerPage, setSkillsPerPage] = useState(3)

    useEffect(() => {
        const updateSkillsPerPage = () => {
            if (window.innerWidth < 768) {
                setSkillsPerPage(1)
            } else if (window.innerWidth < 1024) {
                setSkillsPerPage(2)
            } else {
                setSkillsPerPage(3)
            }
            setCurrentSkillPage(0) 
        }

        updateSkillsPerPage()
        window.addEventListener("resize", updateSkillsPerPage)
        return () => window.removeEventListener("resize", updateSkillsPerPage)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % taglines.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % taglines.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + taglines.length) % taglines.length)
    }

    const totalPages = Math.ceil(skills.length / skillsPerPage)

    const nextSkillPage = () => {
        setCurrentSkillPage((prev) => (prev + 1) % totalPages)
    }

    const prevSkillPage = () => {
        setCurrentSkillPage((prev) => (prev - 1 + totalPages) % totalPages)
    }

    const getCurrentSkills = () => {
        const startIndex = currentSkillPage * skillsPerPage
        return skills.slice(startIndex, startIndex + skillsPerPage)
    }

    return (
        <motion.section
            id="portfolio"
            className="bg-black dark:bg-gray-900 text-white py-20 px-6 w-[99%] rounded-3xl z-20 mx-auto md:px-12 transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-full md:px-16 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
                    <motion.div
                        className="animate-fade-in"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="flex items-center gap-2 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
                                whileHover={{ rotate: 180, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ArrowDown className="w-4 h-4" />
                            </motion.div>
                            <motion.span
                                className="text-sm border border-white rounded-full px-4 py-1"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                Why Choose Me
                            </motion.span>
                        </motion.div>
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            My Extensive
                            <br />
                            List of Skills
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-8">
                            <div className="h-16 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, y: 64 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -64 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="h-16 flex items-center"
                                    >
                                        <p className="text-lg lg:text-xl text-gray-300 dark:text-gray-400 leading-relaxed">
                                            {taglines[currentSlide].line1}
                                            <br />
                                            {taglines[currentSlide].line2}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <motion.button
                                onClick={prevSlide}
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                onClick={nextSlide}
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSkillPage}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {getCurrentSkills().map((skill, idx) => (
                                <motion.div
                                    key={`${currentSkillPage}-${idx}`}
                                    className="bg-gray-900/50 dark:bg-gray-800/50 rounded-2xl p-8 h-80 backdrop-blur-sm border border-gray-800/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:bg-gray-800/60 cursor-pointer group flex flex-col justify-between"
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: 2,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <div>
                                        <motion.div className="mb-6" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                                            <div className="w-24 h-20 relative group-hover:scale-110 transition-transform duration-300 mx-auto">
                                                <div className="w-20 h-20 relative mb-4 mx-auto">
                                                    <Image
                                                        src={skill.img || "/placeholder.svg"}
                                                        alt={skill.title}
                                                        fill
                                                        className="object-cover rounded-xl"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.h3
                                            className="text-2xl font-bold mb-4"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {skill.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-400 leading-relaxed"
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {totalPages > 1 && (
                        <motion.div
                            className="flex justify-center items-center gap-4 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                onClick={prevSkillPage}
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </motion.button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <motion.button
                                        key={idx}
                                        onClick={() => setCurrentSkillPage(idx)}
                                        className={`w-3 h-3 rounded-full transition-colors ${idx === currentSkillPage ? "bg-white" : "bg-white/30"
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>

                            <motion.button
                                onClick={nextSkillPage}
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default SkillsSection
