'use client'
import { translations, useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function GridLayout() {
    const { language } = useLanguage();
    const currentTranslations = translations[language];

    return (
        <section className="mt-8 mb-40 lg:mb-0">
            <div className="flex-col flex lg:flex-row gap-8">
                <div>
                    <div className="bg-card-gradient p-1 rounded-2xl m-3 mt-2 neon-border relative" data-aos="fade-down">
                        <Image src="/Dev.svg" width={200} height={300} alt="" priority className="w-full h-full" />
                        <div className="mt-6 relative z-10">
                            <p className="text-[#f2f2f2] max-w-[450px] text-sm lg:text-base mb-4 m-3 font-poppins">{currentTranslations[0].description}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 lg:gap-4 flex-1 m-2 mt-2 lg:w-full">
                    <a 
                        data-aos="flip-up"
                        href="https://www.behance.net/gustavogantois" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="neon-border p-10 w-full rounded-2xl flex justify-center items-center transition-all duration-700 hover:animate-bounce cursor-pointer relative"
                        style={{ backgroundImage: 'url(/BehanceBg.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
                    >
                        <FaBehance className="text-white w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] relative z-10" />
                    </a>
                    <a 
                        data-aos="flip-up" data-aos-duration="200"
                        href="https://www.linkedin.com/in/gustavo-gantois-2839b5168/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="neon-border p-10 w-full rounded-2xl flex justify-center items-center transition-all duration-700 hover:animate-bounce cursor-pointer relative"
                        style={{ backgroundImage: 'url(/LinkedinBg.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
                    >
                        <FaLinkedinIn className="text-white w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] relative z-10" />
                    </a>
                    <a 
                        data-aos="flip-up" data-aos-duration="300"
                        href="https://github.com/DevGustavoGantois" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="neon-border p-10 w-full rounded-2xl flex justify-center items-center transition-all duration-700 hover:animate-bounce cursor-pointer relative"
                        style={{ backgroundImage: 'url(/GitHubBg.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
                    >
                        <FaGithub className="text-white w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] relative z-10" />
                    </a>
                    <a 
                        data-aos="flip-up" data-aos-duration="400"
                        href="https://www.instagram.com/devgustavogantois_/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="neon-border p-10 w-full h-full rounded-2xl flex justify-center items-center transition-all duration-700 hover:animate-bounce cursor-pointer relative"
                        style={{ backgroundImage: 'url(/InstagramBg.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
                    >
                        <FaInstagram className="text-white w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] relative z-10" />
                    </a>
                </div>
            </div>
        </section>
    );
}
