"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Phone, Facebook, Instagram, Twitter, ArrowDown } from 'lucide-react'
import { motion, type Variants } from "framer-motion"

interface FormData {
    name: string
    email: string
    project: string
}

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        project: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const handleContactMe = () => {
        console.log("Contact me clicked")
    }

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

    const formVariants: Variants = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const inputVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        focus: {
            scale: 1.02,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <div className="relative min-h-[60vh] transition-colors duration-300">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/contact-banner.png"
                    alt="Contact Background"
                    fill
                    className="object-cover brightness-75 dark:brightness-50 transition-all duration-300"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-10 bg-white/10 dark:bg-black/20 backdrop-blur-[1px] transition-all duration-300" />

            <motion.div
                className="relative z-20 min-h-[60vh]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Left Section */}
                        <motion.div className="space-y-8" variants={itemVariants}>
                            <div className="space-y-4">
                                <motion.div variants={itemVariants}>
                                    <motion.div
                                        className="flex items-center gap-2 mb-4"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div
                                            className="w-8 h-8 rounded-full border border-gray-800 dark:border-gray-500 flex items-center justify-center"
                                            whileHover={{ rotate: 180, scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowDown className="w-4 h-4 text-black dark:text-white" />
                                        </motion.div>
                                        <motion.span
                                            className="text-sm border rounded-full border-gray-800 dark:border-gray-500 px-3 py-1 text-black dark:text-white"
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.1)" }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            Contact
                                        </motion.span>
                                    </motion.div>
                                    <motion.h2
                                        className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        Let's work together
                                    </motion.h2>
                                </motion.div>

                                <motion.h1
                                    className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    Interested in{" "}
                                    <motion.span
                                        className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 inline-block transition-colors duration-300"
                                        whileHover={{ scale: 1.05, rotate: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        work
                                    </motion.span>{" "}
                                    together?
                                </motion.h1>

                                <motion.p
                                    className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    We start every new client interaction with an in-depth discovery call where we get to know each other.
                                </motion.p>
                            </div>

                            <motion.div
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="flex items-center border px-5 py-3 border-gray-800 dark:border-gray-500 rounded-full gap-3 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                                    onClick={handleContactMe}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 15 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Phone className="w-6 h-6" />
                                    </motion.div>
                                    Schedule a Call
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right Section - Contact Form */}
                        <motion.div
                            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
                            variants={formVariants}
                        >
                            <motion.div
                                className="w-full max-w-sm sm:max-w-md bg-black dark:bg-white rounded-3xl p-6 sm:p-8 shadow-2xl transition-colors duration-300"
                                whileHover={{
                                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                                    y: -5,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <motion.div className="space-y-2" variants={inputVariants}>
                                        <label className="block text-white dark:text-black text-sm sm:text-base">
                                            Enter your name
                                        </label>
                                        <motion.div
                                            className="border-b border-white/30 dark:border-black/30 pb-2 focus-within:border-[#C5FF41] transition-colors"
                                            whileFocus="focus"
                                            variants={inputVariants}
                                        >
                                            <input
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent text-white dark:text-black placeholder:text-transparent focus:outline-none text-base"
                                                placeholder="Enter your name"
                                            />
                                        </motion.div>
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div className="space-y-2" variants={inputVariants}>
                                        <label className="block text-white/70 dark:text-black/70 text-sm sm:text-base">
                                            Your email address
                                        </label>
                                        <motion.div
                                            className="border-b border-white/30 dark:border-black/30 pb-2 focus-within:border-[#C5FF41] transition-colors"
                                            whileFocus="focus"
                                            variants={inputVariants}
                                        >
                                            <input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent text-white dark:text-black placeholder:text-transparent focus:outline-none text-base"
                                                placeholder="Your email address"
                                            />
                                        </motion.div>
                                    </motion.div>

                                    {/* Project Description */}
                                    <motion.div className="space-y-2" variants={inputVariants}>
                                        <label className="block text-white/70 dark:text-black/70 text-sm sm:text-base">
                                            Describe your project
                                        </label>
                                        <motion.div
                                            className="border-b border-white/30 dark:border-black/30 pb-2 focus-within:border-[#C5FF41] transition-colors"
                                            whileFocus="focus"
                                            variants={inputVariants}
                                        >
                                            <textarea
                                                name="project"
                                                value={formData.project}
                                                onChange={handleInputChange}
                                                rows={2}
                                                className="w-full bg-transparent text-white dark:text-black placeholder:text-transparent focus:outline-none resize-none text-base"
                                                placeholder="Describe your project"
                                            />
                                        </motion.div>
                                    </motion.div>

                                    {/* Buttons */}
                                    <motion.div
                                        className="flex flex-col sm:flex-row gap-4 pt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.button
                                            type="submit"
                                            className="flex items-center justify-center gap-2 bg-transparent border border-white/30 dark:border-black/30 text-white dark:text-black px-6 py-3 rounded-full hover:bg-white/10 dark:hover:bg-black/10 focus:border-[#C5FF41] transition-all text-base font-normal w-full sm:w-auto"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                className="w-5 h-5 rounded-full border border-white/50 dark:border-black/50 flex items-center justify-center"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <div className="w-2 h-2 bg-white dark:bg-black rounded-full"></div>
                                            </motion.div>
                                            Send
                                        </motion.button>

                                        <div className="flex items-center justify-center text-white/50 dark:text-black/50 text-sm">
                                            or
                                        </div>

                                        <motion.button
                                            type="button"
                                            onClick={handleContactMe}
                                            className="flex items-center justify-center gap-2 bg-transparent border border-white/30 dark:border-black/30 text-white dark:text-black px-6 py-3 rounded-full hover:bg-white/10 dark:hover:bg-black/10 focus:border-[#C5FF41] transition-all text-base font-normal w-full sm:w-auto"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                className="w-5 h-5 rounded-full border border-white/50 dark:border-black/50 flex items-center justify-center"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="w-3 h-2 border border-white dark:border-black rounded-sm"></div>
                                            </motion.div>
                                            Contact me
                                        </motion.button>
                                    </motion.div>

                                    {/* Footer */}
                                    <motion.div
                                        className="pt-6 border-t border-white/20 dark:border-black/20"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <motion.span
                                                className="text-white/70 dark:text-black/70 text-sm"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                @williamrey
                                            </motion.span>
                                            <div className="flex space-x-4">
                                                <motion.button
                                                    type="button"
                                                    className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Facebook className="h-5 w-5" />
                                                </motion.button>
                                                <motion.button
                                                    type="button"
                                                    className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
                                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Instagram className="h-5 w-5" />
                                                </motion.button>
                                                <motion.button
                                                    type="button"
                                                    className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Twitter className="h-5 w-5" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </form>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactSection
