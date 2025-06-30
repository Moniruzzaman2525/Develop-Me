"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
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
        // Handle form submission here
    }

    const handleContactMe = () => {
        console.log("Contact me clicked")
        // Handle contact action here
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
                <div className="max-w-full mx-auto md:px-32 md:py-14">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ">
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <div className="animate-fade-in">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-8 h-8 rounded-full border border-gray-800 dark:border-gray-700 flex items-center justify-center">
                                            <ArrowDown className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm border rounded-full border-gray-800 dark:border-gray-700 px-4 py-2">Contact</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                        My Extensive
                                        <br />
                                        List of Skills
                                    </h2>
                                </div>

                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Interested in{" "}
                                    <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 inline-block transition-colors duration-300">
                                        work
                                    </span>{" "}
                                    together?
                                </h1>

                                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
                                    We start every new client interaction with an in-depth discovery call where we get to know each other
                                </p>
                            </div>

                            <div className="transition-all w-[35%] border px-5 border-gray-800 dark:border-gray-700 py-3 gap-5 rounded-full flex items-center duration-200">
                                <div className="flex items-center border px-5 border-gray-800 dark:border-gray-700 py-5 justify-center rounded-full">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <button
                                >
                                    Schedule a Call
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <Card className="w-full max-w-md bg-black/90 dark:bg-gray-900/95 backdrop-blur-sm border-gray-800 dark:border-gray-700 p-6 lg:p-8 shadow-2xl">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="bg-transparent border-gray-600 dark:border-gray-500 text-white placeholder:text-gray-400 focus:border-gray-400 dark:focus:border-gray-300 transition-colors duration-200"
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Your email address"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="bg-transparent border-gray-600 dark:border-gray-500 text-white placeholder:text-gray-400 focus:border-gray-400 dark:focus:border-gray-300 transition-colors duration-200"
                                        />
                                    </div>

                                    <div>
                                        <Textarea
                                            name="project"
                                            placeholder="Describe your project"
                                            value={formData.project}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="bg-transparent border-gray-600 dark:border-gray-500 text-white placeholder:text-gray-400 focus:border-gray-400 dark:focus:border-gray-300 resize-none transition-colors duration-200"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            type="submit"
                                            variant="outline"
                                            className="flex-1 bg-transparent border-gray-600 dark:border-gray-500 text-white hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-200"
                                        >
                                            Send
                                        </Button>
                                        <span className="text-gray-400 self-center text-sm">or</span>
                                        <Button
                                            type="button"
                                            onClick={handleContactMe}
                                            variant="outline"
                                            className="flex-1 bg-transparent border-gray-600 dark:border-gray-500 text-white hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-200"
                                        >
                                            Contact me
                                        </Button>
                                    </div>

                                    <div className="pt-4 border-t border-gray-700 dark:border-gray-600">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">@williammey</span>
                                            <div className="flex space-x-3">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-gray-400 hover:text-white hover:bg-white/10 dark:hover:bg-gray-700/50 h-8 w-8 transition-all duration-200"
                                                >
                                                    <Facebook className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-gray-400 hover:text-white hover:bg-white/10 dark:hover:bg-gray-700/50 h-8 w-8 transition-all duration-200"
                                                >
                                                    <Instagram className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-gray-400 hover:text-white hover:bg-white/10 dark:hover:bg-gray-700/50 h-8 w-8 transition-all duration-200"
                                                >
                                                    <Twitter className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactSection
