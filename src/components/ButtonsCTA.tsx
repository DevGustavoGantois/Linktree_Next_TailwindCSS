'use client'
import { translations, useLanguage } from "@/context/LanguageContext";
import { FaDiscord, FaGlobe, FaSpotify, FaTiktok } from "react-icons/fa";

export function ButtonsCTA() {

    const { language } = useLanguage();
    const currentTranslations = translations[language];

    return (
        <section className="mt-20 mb-40 lg:mt-6 m-12">
            <div className="flex flex-col gap-2">
                <a href="https://devgustavogantois.vercel.app/" target="_blank" data-aos="fade-up" className="transition-all duration-700 hover:animate-float">
                    <button className="flex flex-col gap-4 bg-1 bg-center bg-cover w-full mt-8 p-2 rounded-lg neon-border relative">
                        <h1 className="text-white text-xl lg:text-2xl m-3 font-jetbrains z-10">{currentTranslations[0].title_one}</h1>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-40">
                            <p className="text-sm lg:text-base max-w-[450px] text-left mt-2 text-[#f2f2f2] mb-4 m-3 font-poppins z-10">
                                {currentTranslations[0].box_one}
                            </p>
                            <FaGlobe className="text-white w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] hidden lg:flex mb-10 animate-pulse z-10" />
                        </div>
                    </button>
                </a>
                <a href="https://wa.me/5571999588246?text=Ol%C3%A1!%20Tudo%20bem%20Gustavo!?%20Quero%20solicitar%20um%20or%C3%A7amento!!" target="_blank" data-aos="fade-up" className="transition-all duration-700 hover:animate-float">
                    <button className="flex flex-col gap-4 bg-3 bg-center bg-cover w-full mt-8 p-2 rounded-lg neon-border relative">
                        <h1 className="text-white text-xl lg:text-2xl m-3 font-jetbrains z-10">{currentTranslations[0].title_two}</h1>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-40">
                            <p className="text-sm lg:text-base max-w-[450px] text-left mt-2 text-[#f2f2f2] mb-4 m-3 font-poppins z-10">
                                {currentTranslations[0].box_two}
                            </p>
                            <FaGlobe className="text-white w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] hidden lg:flex mb-10 animate-pulse z-10" />
                        </div>
                    </button>
                </a>
                
                <a href="mailto:gugagantoisdev@gmail.com" target="_blank" className="transition-all duration-700 hover:animate-float">
                    <button className="flex flex-col gap-4 bg-4 bg-center bg-cover w-full mt-8 p-2 rounded-lg neon-border relative">
                        <h1 className="text-white text-xl lg:text-2xl m-3 font-jetbrains z-10">{currentTranslations[0].title_four}</h1>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-40">
                            <p className="text-sm lg:text-base max-w-[450px] text-left mt-2 text-[#f2f2f2] mb-4 m-3 font-poppins z-10">
                                {currentTranslations[0].box_four}
                            </p>
                            <FaGlobe className="text-white w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] mt-6 lg:mt-0 hidden lg:flex mb-10 animate-pulse z-10" />
                        </div>
                    </button>
                </a>
            </div>
        </section>
    );
}
