"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Phone, Facebook, Instagram, Twitter, ArrowDown } from "lucide-react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleContactMe = () => {
        console.log("Contact me clicked");
    };

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

            <div className="relative z-20 min-h-[60vh]">
                <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Left Section */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="animate-fade-in">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full border border-gray-800 dark:border-gray-500 flex items-center justify-center">
                                            <ArrowDown className="w-4 h-4 text-black dark:text-white" />
                                        </div>
                                        <span className="text-sm border rounded-full border-gray-800 dark:border-gray-500 px-3 py-1 text-black dark:text-white">
                                            Contact
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                                        Let's work together
                                    </h2>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                                    Interested in{" "}
                                    <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 inline-block transition-colors duration-300">
                                        work
                                    </span>{" "}
                                    together?
                                </h1>

                                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
                                    We start every new client interaction with an in-depth discovery call where we get to know each other.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
                                <button
                                    className="flex items-center border px-5 py-3 border-gray-800 dark:border-gray-500 rounded-full gap-3 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                                    onClick={handleContactMe}
                                >
                                    <Phone className="w-6 h-6" />
                                    Schedule a Call
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Contact Form */}
                        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                            <div className="w-full max-w-sm sm:max-w-md bg-black dark:bg-white rounded-3xl p-6 sm:p-8 shadow-2xl transition-colors duration-300">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <label className="block text-white dark:text-black text-sm sm:text-base">Enter your name</label>
                                        <div className="border-b border-white/30 dark:border-black/30 pb-2 focus-within:border-[#C5FF41] transition-colors">
                                            <input
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent text-white dark:text-black placeholder:text-transparent focus:outline-none text-base"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label className="block text-white/70 dark:text-black/70 text-sm sm:text-base">Your email address</label>
                                        <div className="border-b border-white/30 dark:border-black/30 pb-2 focus-within:border-[#C5FF41] transition-colors">
                                            <input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent text-white dark:text-black placeholder:text-transparent focus:outline-none text-base"
                                                placeholder="Your email address"
                                            />
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <div className="space-y-2">
                                        <label className="block text-white/70 dark:text-black/70 text-sm sm:text-base">Describe your project</label>
                                        <div className="border-b border-white/30 dark:border-black/30 pb-2 focus-within:border-[#C5FF41] transition-colors">
                                            <textarea
                                                name="project"
                                                value={formData.project}
                                                onChange={handleInputChange}
                                                rows={2}
                                                className="w-full bg-transparent text-white dark:text-black placeholder:text-transparent focus:outline-none resize-none text-base"
                                                placeholder="Describe your project"
                                            />
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button
                                            type="submit"
                                            className="flex items-center justify-center gap-2 bg-transparent border border-white/30 dark:border-black/30 text-white dark:text-black px-6 py-3 rounded-full hover:bg-white/10 dark:hover:bg-black/10 focus:border-[#C5FF41] transition-all text-base font-normal w-full sm:w-auto"
                                        >
                                            <div className="w-5 h-5 rounded-full border border-white/50 dark:border-black/50 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white dark:bg-black rounded-full"></div>
                                            </div>
                                            Send
                                        </button>

                                        <div className="flex items-center justify-center text-white/50 dark:text-black/50 text-sm">or</div>

                                        <button
                                            type="button"
                                            onClick={handleContactMe}
                                            className="flex items-center justify-center gap-2 bg-transparent border border-white/30 dark:border-black/30 text-white dark:text-black px-6 py-3 rounded-full hover:bg-white/10 dark:hover:bg-black/10 focus:border-[#C5FF41] transition-all text-base font-normal w-full sm:w-auto"
                                        >
                                            <div className="w-5 h-5 rounded-full border border-white/50 dark:border-black/50 flex items-center justify-center">
                                                <div className="w-3 h-2 border border-white dark:border-black rounded-sm"></div>
                                            </div>
                                            Contact me
                                        </button>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-6 border-t border-white/20 dark:border-black/20">
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <span className="text-white/70 dark:text-black/70 text-sm">@williamrey</span>
                                            <div className="flex space-x-4">
                                                <button type="button" className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors">
                                                    <Facebook className="h-5 w-5" />
                                                </button>
                                                <button type="button" className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors">
                                                    <Instagram className="h-5 w-5" />
                                                </button>
                                                <button type="button" className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors">
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
    );
};

export default ContactSection;
