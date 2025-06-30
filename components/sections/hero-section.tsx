import Image from "next/image";


const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/banner.png" alt="" fill className=" transition-opacity duration-400" priority />
            </div>
        </section>
    );
};

export default HeroSection;
