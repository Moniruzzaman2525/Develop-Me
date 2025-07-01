"use client"
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

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
];

const SkillsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % taglines.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + taglines.length) % taglines.length);
    };

    return (
        <section id="portfolio" className="bg-black dark:bg-gray-900 text-white py-20 px-6 w-[99%] rounded-3xl z-20 mx-auto md:px-12 transition-colors duration-300">
            <div className="max-w-full md:px-16 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
                    <div className="animate-fade-in">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                                <ArrowDown className="w-4 h-4" />
                            </div>
                            <span className="text-sm border border-white rounded-full px-4 py-1">Why Choose Me</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            My Extensive
                            <br />
                            List of Skills
                        </h2>
                    </div>

                    <div>
                        <div className="mb-8">
                            <div className="h-16 overflow-hidden">
                                <div
                                    className="transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateY(-${currentSlide * 64}px)` }}
                                >
                                    {taglines.map((tagline, index) => (
                                        <p key={index} className="text-lg lg:text-xl text-gray-300 dark:text-gray-400 leading-relaxed h-16 flex items-center">
                                            {tagline.line1}
                                            <br />
                                            {tagline.line2}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "HTML & CSS", img: "/react.png" },
                        { title: "JavaScript", img: "/react.png" },
                        { title: "Webflow", img: "/react.png" },
                    ].map((skill, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-900/50 dark:bg-gray-800/50 rounded-2xl p-8 h-80 backdrop-blur-sm border border-gray-800/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:bg-gray-800/60 cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-6">
                                    <div className="w-24 h-20 relative group-hover:scale-110 transition-transform duration-300 mx-auto">
                                        <div className="w-20 h-20 relative mb-4 mx-auto">
                                            <Image src={skill.img} alt={skill.title} fill className="object-cover rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
