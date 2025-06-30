import { Instagram, Twitter, Facebook, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-[85vh] mt-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner.png"
                    alt=""
                    fill
                    className="object-cover brightness-75"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-0"></div>
            <div className="min-h-[85vh] overflow-y-hidden relative z-10 flex items-center">
                <div className="">
                    <div className="mb-48 px-[50px] w-full">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                            Trusted{" "}
                            <span className="bg-black text-white px-4 py-2 inline-block transition-all duration-300 hover:scale-105">
                                Partner
                            </span>{" "}
                            <br />
                            for Your Website{" "}
                            <span className="bg-black text-white px-4 py-2 inline-block transition-all duration-300 hover:scale-105">
                                Develop.
                            </span>
                        </h1>
                    </div>
                    <div className="flex gap-60">
                        <div className="hidden items-center lg:flex justify-center space-x-4 pl-6">
                            <div className="mt-[107px]">
                                <div className="transform -rotate-90 text-sm text-black whitespace-nowrap">@williamrey</div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <a href="https://www.instagram.com/monir_2525" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile">
                                    <Twitter className="w-6 h-6 text-black hover:text-gray-700 transition-colors duration-300" />
                                </a>
                                <a href="https://x.com/Monir8699" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                                    <Instagram className="w-6 h-6 text-black hover:text-gray-700 transition-colors duration-300" />
                                </a>
                                <a href="https://www.facebook.com/moniruzzaman255" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile">
                                    <Facebook className="w-6 h-6 text-black hover:text-gray-700 transition-colors duration-300" />
                                </a>
                                <div className="w-px h-16 bg-black mb-4"></div>
                            </div>
                        </div>
                        <div className="flex-1 flex px-6 md:px-12 lg:px-20">
                            <div className="max-w-4xl animate-fade-in">
                                <div className="mb-8 space-y-2 animate-slide-up">
                                    <p className="text-lg md:text-xl text-black">
                                        Building the worlds best marketing websites for over a decade.
                                    </p>
                                    <p className="text-lg md:text-xl text-black">
                                        Your trusted partner for strategy, design, and dev.
                                    </p>
                                </div>
                                <AnimatedButton className="rounded-full bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg flex items-center gap-3" variant="outline" aria-label="Schedule a consultation call">
                                    <Phone className="w-5 h-5" />
                                    Schedule a Call
                                </AnimatedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
