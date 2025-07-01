"use client"

import { ArrowDown } from 'lucide-react'
import { ProcessCard } from "@/components/ui/process-card"
import { motion, type Variants } from "framer-motion"

interface Process {
    title: string
    description: string
    variant: "default" | "highlighted"
}

const processes: Process[] = [
    {
        title: "Discovery",
        description:
            "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
        variant: "default",
    },
    {
        title: "Strategy",
        description:
            "Every end-to-end project of ours begins with a 1-Sprint Pre-build Sprint. From brand ID consultation to in-depth code reviews your here to set the stage for success.",
        variant: "highlighted",
    },
    {
        title: "Design",
        description:
            "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
        variant: "default",
    },
    {
        title: "Build",
        description:
            "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
        variant: "default",
    },
]

const WorkProcessSection: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    }

    const headerVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    return (
        <motion.section
            id="blog"
            className="bg-black dark:bg-gray-900 text-white py-20 px-6 md:px-12 transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-full mx-auto md:px-20">
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-center gap-8 mb-16"
                    variants={headerVariants}
                >
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="w-8 h-8 rounded-full border border-white dark:border-gray-500 flex items-center justify-center"
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowDown className="w-4 h-4 text-white dark:text-gray-300" />
                        </motion.div>
                        <motion.span
                            className="text-sm border border-white dark:border-gray-500 rounded-full px-4 py-1 text-white dark:text-gray-300"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            transition={{ duration: 0.2 }}
                        >
                            Work Process
                        </motion.span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white dark:text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        My Work Process
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    {processes.map((process: Process, index: number) => (
                        <motion.div
                            key={process.title}
                            variants={cardVariants}
                            whileHover="hover"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="cursor-pointer"
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <ProcessCard
                                    title={process.title}
                                    description={process.description}
                                    variant={process.variant}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default WorkProcessSection
