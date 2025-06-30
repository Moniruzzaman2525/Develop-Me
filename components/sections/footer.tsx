import Link from "next/link"

const Footer = () => {
    return (
        <div className="w-full mx-auto p-4 md:p-6">
            <footer className="bg-black rounded-3xl p-6 md:p-12 text-white">
                <div className="flex flex-col lg:flex-row w-full justify-between">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16">
                        <div className="text-lime-400 text-2xl md:text-3xl font-bold mb-4 md:mb-0">DEVLOP.ME</div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-start mb-10 md:mb-20 font-light">
                            As you can
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-16">
                            <div>
                                <h3 className="text-gray-400 text-sm mb-4 md:mb-6">Say hello</h3>
                                <div className="space-y-2">
                                    <Link href="mailto:HELLO@DEVLOP.ME.COM" className="block text-white hover:text-lime-400 transition-colors">
                                        HELLO@DEVLOP.ME.COM
                                    </Link>
                                    <Link href="mailto:MAHBUBUL@ME.COM" className="block text-white hover:text-lime-400 transition-colors">
                                        MAHBUBUL@ME.COM
                                    </Link>
                                </div>

                                <div className="py-6 md:py-10">
                                    <h3 className="text-gray-400 text-sm mb-4 md:mb-6">Call</h3>
                                    <div className="space-y-2">
                                        <Link href="tel:+784549498100" className="block text-white hover:text-lime-400 transition-colors">
                                            +784549 4981 00
                                        </Link>
                                        <Link href="tel:+88450100911" className="block text-white hover:text-lime-400 transition-colors">
                                            +8845 0100 911
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-gray-400 text-sm mb-4 md:mb-6">Menu</h3>
                                <div className="space-y-2">
                                    <Link href="/" className="block text-white hover:text-lime-400 transition-colors">
                                        HOME
                                    </Link>
                                    <Link href="/about" className="block text-white hover:text-lime-400 transition-colors">
                                        ABOUT
                                    </Link>
                                    <Link href="/portfolio" className="block text-white hover:text-lime-400 transition-colors">
                                        PORTFOLIO
                                    </Link>
                                    <Link href="/blog" className="block text-white hover:text-lime-400 transition-colors">
                                        BLOG
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-gray-400 text-sm mb-4 md:mb-6">Social</h3>
                                <div className="space-y-2">
                                    <Link href="#" className="block text-white hover:text-lime-400 transition-colors">
                                        TWITTER
                                    </Link>
                                    <Link href="#" className="block text-white hover:text-lime-400 transition-colors">
                                        INSTAGRAM
                                    </Link>
                                    <Link href="#" className="block text-white hover:text-lime-400 transition-colors">
                                        FACEBOOK
                                    </Link>
                                    <Link href="#" className="block text-white hover:text-lime-400 transition-colors">
                                        BEHANCE
                                    </Link>
                                    <Link href="#" className="block text-white hover:text-lime-400 transition-colors">
                                        DRIBBBLE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 space-y-4 md:space-y-0">
                    <div className="text-white font-bold text-lg">BESMIK</div>
                    <div className="text-gray-400 text-sm">© devlop.me 2022</div>
                    <div className="text-gray-400 text-sm flex flex-wrap items-center">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            PRIVACY
                        </Link>
                        <span className="mx-2">-</span>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            TERMS
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
