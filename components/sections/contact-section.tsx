"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Phone, Facebook, Instagram, Twitter, ArrowDown } from "lucide-react"

const ContactSection = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [formData, setFormData] = useState({
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

    return (
        <div className={`relative min-h-[60vh] transition-colors duration-300 ${darkMode ? "dark" : ""}`}>

            <div className="absolute inset-0 z-0">
                <Image
                    src="/contact-banner.png"
                    alt=""
                    fill
                    className={`object-cover transition-all duration-300 ${darkMode ? "brightness-50" : "brightness-75"}`}
                    priority
                />
            </div>

            <div className="absolute inset-0 z-10 bg-white/10 dark:bg-black/20 backdrop-blur-[1px] transition-all duration-300" />

            <div className="fixed top-4 right-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-300 dark:border-gray-600"
                >
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
            </div>

            <div className="relative z-20 min-h-[60vh]">
                <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="animate-fade-in">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full border border-gray-800 dark:border-gray-700 flex items-center justify-center">
                                            <ArrowDown className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm border rounded-full border-gray-800 dark:border-gray-700 px-3 py-1">Contact</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                        My Extensive
                                        <br />
                                        List of Skills
                                    </h2>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Interested in{" "}
                                    <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 inline-block transition-colors duration-300">
                                        work
                                    </span>{" "}
                                    together?
                                </h1>

                                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
                                    We start every new client interaction with an in-depth discovery call where we get to know each other.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
                                <div className="flex items-center border px-5 py-3 border-gray-800 dark:border-gray-700 rounded-full gap-3 w-full sm:w-auto">
                                    <Phone className="w-6 h-6" />
                                    <button>
                                        Schedule a Call
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                            <div className="w-full max-w-sm sm:max-w-md bg-black rounded-3xl p-6 sm:p-8 shadow-2xl">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="block text-white text-sm sm:text-base">Enter your name</label>
                                        <div className="border-b border-white/30 pb-2 focus-within:border-[#C5FF41] transition-colors duration-200">
                                            <input
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent text-white placeholder:text-transparent focus:outline-none text-base"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-white/70 text-sm sm:text-base">Your email address</label>
                                        <div className="border-b border-white/30 pb-2 focus-within:border-[#C5FF41] transition-colors duration-200">
                                            <input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent text-white placeholder:text-transparent focus:outline-none text-base"
                                                placeholder="Your email address"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-white/70 text-sm sm:text-base">Describe your project</label>
                                        <div className="border-b border-white/30 pb-2 focus-within:border-[#C5FF41] transition-colors duration-200">
                                            <textarea
                                                name="project"
                                                value={formData.project}
                                                onChange={handleInputChange}
                                                rows={2}
                                                className="w-full bg-transparent text-white placeholder:text-transparent focus:outline-none resize-none text-base"
                                                placeholder="Describe your project"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button
                                            type="submit"
                                            className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 focus:border-[#C5FF41] transition-all duration-200 text-base font-normal w-full sm:w-auto"
                                        >
                                            <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            Send
                                        </button>

                                        <div className="flex items-center justify-center text-white/50 text-sm">or</div>

                                        <button
                                            type="button"
                                            onClick={handleContactMe}
                                            className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 focus:border-[#C5FF41] transition-all duration-200 text-base font-normal w-full sm:w-auto"
                                        >
                                            <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center">
                                                <div className="w-3 h-2 border border-white rounded-sm"></div>
                                            </div>
                                            Contact me
                                        </button>
                                    </div>

                                    <div className="pt-6 border-t border-white/20">
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <span className="text-white/70 text-sm">@williamrey</span>
                                            <div className="flex space-x-4">
                                                <button type="button" className="text-white/70 hover:text-white transition-colors duration-200">
                                                    <Facebook className="h-5 w-5" />
                                                </button>
                                                <button type="button" className="text-white/70 hover:text-white transition-colors duration-200">
                                                    <Instagram className="h-5 w-5" />
                                                </button>
                                                <button type="button" className="text-white/70 hover:text-white transition-colors duration-200">
                                                    <Twitter className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactSection
