

import { ArrowRight } from "lucide-react"
import { ProcessCard } from "@/components/ui/process-card"

const processes = [
    {
        title: "Discovery",
        description:
            "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
        variant: "default" as const,
    },
    {
        title: "Strategy",
        description:
            "Every end-to-end project of ours begins with a 1-Sprint Pre-build Sprint. From brand ID consultation to in-depth code reviews your here to set the stage for success.",
        variant: "highlighted" as const,
    },
    {
        title: "Design",
        description:
            "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
        variant: "default" as const,
    },
    {
        title: "Build",
        description:
            "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
        variant: "default" as const,
    },
]

const WorkProcessSection = () => {
    return (
        <section className="bg-black dark:bg-gray-900 text-white py-20 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-full mx-auto md:px-20">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-16 animate-fade-in">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-sm border border-white rounded-full px-4 py-1">Work Process</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold">My Work Process</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {processes.map((process, index) => (
                        <div key={process.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ProcessCard {...process} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkProcessSection
