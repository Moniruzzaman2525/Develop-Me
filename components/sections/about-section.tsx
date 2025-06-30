import Image from "next/image"
import { ArrowDown } from "lucide-react"

const AboutSection = () => {
    return (
        <div id="about" className="relative min-h-[90vh] w-full overflow-hidden">
            <Image src="/about-banner.png" alt="Gradient background" fill className="object-cover" priority />

            <div className="relative z-10 min-h-screen p-16">
                <div className="w-full max-w-[1600px] mx-auto">
                    <div className="flex justify-end gap-5 items-center mb-16">
                        <div className="p-3 border rounded-full">
                            <ArrowDown className="h-6 w-6" />
                        </div>
                        <button className="px-6 py-3 rounded-full border font-medium">About</button>
                    </div>
                </div>

                <div className="w-full max-w-[1000px] mx-auto text-center mb-20">
                    <h1 className="text-[78px] font-bold text-black leading-tight mb-8">
                        I've been <span className="bg-black text-white px-4 py-2 rounded-2xl inline-block">Developing</span>
                    </h1>
                    <h1 className="text-[78px] font-bold text-black leading-tight mb-8">
                        Websites since <span className="bg-black text-white px-4 py-2 rounded-2xl inline-block">2013</span>
                    </h1>
                    <p className="text-gray-800 text-xl max-w-[800px] mx-auto leading-relaxed">
                        We start every new client interaction with an in-depth discovery call where we get
                        <br />
                        to know each other and recommend the best course of action.
                    </p>
                </div>

                <div className="w-full max-w-[1600px] mx-auto">
                    <div className="flex items-center gap-80">
                        <div className="w-[200px]">
                            <h3 className="text-black font-bold text-lg leading-tight">
                                PREVIOUSLY
                                <br />
                                WORKED ON
                            </h3>
                        </div>

                        <div className="w-[1000px]">
                            <div className="flex justify-between items-center mb-0">
                                <div
                                    className="w-[270px] h-[270px] relative"
                                    style={{
                                        transform: "rotate(11deg)",
                                    }}
                                >
                                    <Image src="/awwward.png" alt="Awwwards" fill className="object-contain rounded-full" />
                                </div>
                                <div
                                    className="w-[270px] h-[270px] relative ml-[100px] -mt-[100px]"
                                    style={{
                                        zIndex: 2,
                                    }}
                                >
                                    <Image src="/facebook.png" alt="Facebook" fill className="object-contain rounded-full" />
                                </div>
                                <div
                                    className="w-[270px] h-[270px] mr-[13px] relative"
                                    style={{
                                        transform: "rotate(14deg)",
                                        zIndex: 2,
                                    }}
                                >
                                    <Image src="/cssDesign.png" alt="CSS Design" fill className="object-contain rounded-full" />
                                </div>
                            </div>

                            <div className="flex justify-between items-center -mt-[175px] -ml-[100px]">
                                <div
                                    className="w-[270px] h-[270px] relative -mt-[5px]"
                                    style={{
                                        zIndex: 2,
                                    }}
                                >
                                    <Image src="/cssInner.png" alt="CSS Inner" fill className="object-contain rounded-full" />
                                </div>
                                <div
                                    className="w-[270px] h-[270px] relative mr-[-70px] -mt-[60px]"
                                    style={{
                                        transform: "rotate(-10deg)",
                                        zIndex: 2,
                                    }}
                                >
                                    <Image src="/thoughtWork.png" alt="ThoughtWorks" fill className="object-contain rounded-full" />
                                </div>
                                <div
                                    className="w-[270px] h-[270px] relative mr-[160px] -mt-[50px]"
                                    style={{
                                        zIndex: 2,
                                    }}
                                >
                                    <Image src="/autoDesk.png" alt="AutoDesk" fill className="object-contain  rounded-full" />
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
