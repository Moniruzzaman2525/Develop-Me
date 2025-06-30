import { Instagram, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/banner.png" alt="" fill className="transition-opacity duration-400" priority />
            </div>

            <div className="relative z-10 flex min-h-screen ">
                <div className="bottom-32 absolute">
                    <div className="hidden items-center lg:flex justify-center space-x-4 pl-6">
                        <div className="mt-[107px]">
                            <div className="transform -rotate-90 text-sm text-black whitespace-nowrap">@williamrey</div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <a
                                href="https://www.instagram.com/monir_2525"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 text-black hover:text-gray-700 transition-colors duration-300"
                                aria-label="Twitter profile"
                            >
                                <Twitter className="w-full h-full" />
                            </a>
                            <a
                                href="https://x.com/Monir8699"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 text-black hover:text-gray-700 transition-colors duration-300"
                                aria-label="Instagram profile"
                            >
                                <Instagram className="w-full h-full" />
                            </a>
                            <a
                                href="https://www.facebook.com/moniruzzaman255"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 text-black hover:text-gray-700 transition-colors duration-300"
                                aria-label="Facebook profile"
                            >
                                <Facebook className="w-full h-full" />
                            </a>
                            <div className="w-px h-16 bg-black mb-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
