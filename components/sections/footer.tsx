"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false)
    const footerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (footerRef.current) {
            observer.observe(footerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div className="w-full mx-auto">
            <footer ref={footerRef} className="bg-black rounded-3xl p-6 md:p-12 text-white overflow-hidden">
                <div className="flex flex-col lg:flex-row w-full justify-between">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16">
                        <div
                            className={`text-lime-400 text-2xl md:text-3xl font-bold mb-4 md:mb-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: "0.2s" }}
                        >
                            DEVLOP.ME
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div
                            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-start mb-10 md:mb-20 font-light transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                                }`}
                            style={{ transitionDelay: "0.4s" }}
                        >
                            As you can
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-16">
                            <div
                                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                                style={{ transitionDelay: "0.6s" }}
                            >
                                <h3 className="text-gray-400 text-sm mb-4 md:mb-6">Say hello</h3>
                                <div className="space-y-2">
                                    <Link
                                        href="mailto:HELLO@DEVLOP.ME.COM"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1"
                                    >
                                        HELLO@DEVLOP.ME.COM
                                    </Link>
                                    <Link
                                        href="mailto:MAHBUBUL@ME.COM"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1"
                                    >
                                        MAHBUBUL@ME.COM
                                    </Link>
                                </div>

                                <div className="py-6 md:py-10">
                                    <h3 className="text-gray-400 text-sm mb-4 md:mb-6">Call</h3>
                                    <div className="space-y-2">
                                        <Link
                                            href="tel:+784549498100"
                                            className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1"
                                        >
                                            +784549 4981 00
                                        </Link>
                                        <Link
                                            href="tel:+88450100911"
                                            className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1"
                                        >
                                            +8845 0100 911
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                                style={{ transitionDelay: "0.8s" }}
                            >
                                <h3 className="text-gray-400 text-sm mb-4 md:mb-6">Menu</h3>
                                <div className="space-y-2">
                                    <Link
                                        href="/"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1"
                                    >
                                        HOME
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1"
                                    >
                                        ABOUT
                                    </Link>
                                    <Link
                                        href="/portfolio"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1"
                                    >
                                        PORTFOLIO
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1"
                                    >
                                        BLOG
                                    </Link>
                                </div>
                            </div>

                            <div
                                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                                style={{ transitionDelay: "1.0s" }}
                            >
                                <h3 className="text-gray-400 text-sm mb-4 md:mb-6">Social</h3>
                                <div className="space-y-2">
                                    <Link
                                        href="#"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1 hover:scale-105"
                                    >
                                        TWITTER
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1 hover:scale-105"
                                    >
                                        INSTAGRAM
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1 hover:scale-105"
                                    >
                                        FACEBOOK
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1 hover:scale-105"
                                    >
                                        BEHANCE
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block text-white hover:text-lime-400 transition-all duration-300 hover:translate-x-1 hover:scale-105"
                                    >
                                        DRIBBBLE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 space-y-4 md:space-y-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    style={{ transitionDelay: "1.2s" }}
                >
                    <div className="text-white font-bold text-lg hover:text-lime-400 transition-colors duration-300 cursor-default">
                        BESMIK
                    </div>

                    <div className="text-gray-400 text-sm">© devlop.me 2022</div>

                    <div className="text-gray-400 text-sm flex flex-wrap items-center">
                        <Link href="/privacy" className="hover:text-white transition-all duration-300 hover:scale-105">
                            PRIVACY
                        </Link>
                        <span className="mx-2">-</span>
                        <Link href="/terms" className="hover:text-white transition-all duration-300 hover:scale-105">
                            TERMS
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
