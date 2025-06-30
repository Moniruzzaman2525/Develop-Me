import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, ChevronLeft } from "lucide-react"

const AboutSection = () => {
    return (
        <div className="relative min-h-[90vh] w-full overflow-hidden">
            <Image src="/about-banner.png" alt="Gradient background" fill className="object-cover" priority />

            <div className="relative z-10 min-h-screen p-8 md:p-12 lg:p-16">
                <div className="px-60">
                    <div className="flex justify-end gap-5 items-center mb-16">
                        <div className="px-3 py-3 border rounded-full">
                            <ArrowDown className="h-6 w-6" />
                        </div>
                        <button
                            className=" px-6 py-3 rounded-full border font-medium gap-2"
                        >
                            About
                        </button>
                    </div>
                </div>
                <div className="w-full mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-[78px] font-[700] text-black leading-tight mb-8">
                        I've been <span className="bg-black text-white px-4 py-2 rounded-2xl inline-block">Developing</span>
                    </h1>
                    <h1 className="text-5xl md:text-[78px] font-[700] text-black leading-tight mb-8">
                        Websites since <span className="bg-black text-white px-4 py-2 rounded-2xl inline-block">2013</span>
                    </h1>

                    <p className="text-gray-800 text-lg md:text-xl max-w-full mx-auto leading-relaxed">
                        We start every new client interaction with an in-depth discovery call where we get
                        <br />
                        to know each other and recommend the best course of action.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default AboutSection
