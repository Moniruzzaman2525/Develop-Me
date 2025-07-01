import Image from "next/image"
import { ArrowDown } from "lucide-react"

const AboutSection = () => {
    return (
        <div id="about" className="relative min-h-screen w-full overflow-hidden">
            <Image
                src="/about-banner.png"
                alt="Gradient background"
                fill
                className="object-cover"
                priority
            />

            <div className="relative z-10 min-h-screen">
                <div className="w-full px-8 lg:px-16 pt-16">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="flex justify-end gap-6 items-center mb-20">
                            <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                                <ArrowDown className="h-6 w-6 text-gray-800 dark:text-white" />
                            </div>
                            <button className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-600 font-semibold text-gray-800 dark:text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                                About
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full px-8 lg:px-16">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="text-center mb-24">
                            <div className="max-w-[1200px] mx-auto">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[78px] font-bold text-black dark:text-white leading-[1.1] mb-8">
                                    I've been{" "}
                                    <span className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-2xl inline-block transform hover:scale-105 transition-transform duration-300">
                                        Developing
                                    </span>
                                </h1>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[78px] font-bold text-black dark:text-white leading-[1.1] mb-12">
                                    Websites since{" "}
                                    <span className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-2xl inline-block transform hover:scale-105 transition-transform duration-300">
                                        2013
                                    </span>
                                </h1>
                                <div className="max-w-[900px] mx-auto">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                                        We start every new client interaction with an in-depth discovery call where we get to know each
                                        other and recommend the best course of action.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full pb-20">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
                                <div className="w-full lg:w-[200px] flex-shrink-0">
                                    <h2 className="text-2xl md:text-3xl lg:text-[26px] font-bold text-black dark:text-white leading-tight">
                                        PREVIOUSLY
                                        <br />
                                        WORKED ON
                                    </h2>
                                </div>

                                <div className="flex-1 w-full">
                                    <div className="block lg:hidden">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-[270px] h-[70px] bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg">
                                                    awwwards.
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-[270px] h-[70px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                    facebook
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-[270px] h-[70px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-4 h-4 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                            S
                                                        </span>
                                                        CSS Design Awards
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-[270px] h-[70px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                    CSS WINNER
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-[270px] h-[70px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                    /thoughtworks
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-[270px] h-[70px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                    <span className="flex items-center gap-2">
                                                        <span className="text-lg">🔧</span>
                                                        AUTODESK
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden lg:block">
                                        <div className="relative">
                                            <div className="flex items-center justify-start gap-8 mb-8">
                                                <div className="" style={{ transform: "rotate(11.73deg)" }}>
                                                    <div className="w-[270px] h-[90px] bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg">
                                                        awwwards.
                                                    </div>
                                                </div>
                                                <div className="ml-[80px] mt-[-67px]">
                                                    <div className="w-[270px] h-[90px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                        facebook
                                                    </div>
                                                </div>
                                                <div className="-ml-10" style={{ transform: "rotate(20deg)" }}>
                                                    <div className="w-[270px] h-[90px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                        <span className="flex items-center gap-2">
                                                            <span className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                                S
                                                            </span>
                                                            CSS Design Awards
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-start gap-8 -mt-4">
                                                <div className="-ml-16 mt-[-9px]">
                                                    <div className="w-[270px] h-[90px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                        CSS WINNER
                                                    </div>
                                                </div>
                                                <div style={{ transform: "rotate(-12deg)" }} className="ml-[-20px] mt-[-45px]">
                                                    <div className="w-[300px] h-[90px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                        /thoughtworks
                                                    </div>
                                                </div>
                                                <div className="-ml-8 -mt-10">
                                                    <div className="w-[270px] h-[90px] bg-white/90 dark:bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-300 text-black dark:text-black flex items-center justify-center rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300">
                                                        <span className="flex items-center gap-2">
                                                            <span className="text-lg">🔧</span>
                                                            AUTODESK
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
