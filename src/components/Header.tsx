// Header.tsx
'use client';

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import { CarouselSlide } from "./CarouselSlide";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (selectedLanguage: 'pt' | 'en' | 'fr') => {
    setLanguage(selectedLanguage);
    setIsOpen(false); // Fecha a lista após a seleção
  };

  return (
    <header>
      <div className="p-4 flex flex-col items-start lg:flex-row justify-between gap-8 lg:gap-32 lg:items-center">
        <div className="flex items-center gap-4">
          <div>
            <Image src="/PerfilLogo.svg" width={140} height={200} priority alt="" data-aos="zoom-in" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-xl lg:text-4xl font-poppins" data-aos="fade-up">Gustavo Gantois</h1>
            <p className=" text-gradient-blue font-poppins" data-aos="fade-up" data-aos-delay="200">Web Development & WebDesigner</p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)} // Alterna a visibilidade da lista ao clicar
            className="bg-[#121316] text-white p-4 rounded-md w-full flex justify-between items-center font-poppins"
          >
            <span>{language === 'pt' ? 'PT-BR' : language === 'en' ? 'EN' : 'FR'}</span>
            <span className="ml-2">&#9660;</span>
          </button>

          {isOpen && (
            <ul className="absolute bg-[#121316] text-white mt-2 rounded-md w-full z-10 font-poppins">
              <li
                className="px-4 py-2 transition-all duration-700 hover:bg-[#351CBC] cursor-pointer"
                onClick={() => handleLanguageChange('pt')}
              >
                PT-BR
              </li>
              <li
                className="px-4 py-2 transition-all duration-700 hover:bg-[#351CBC] cursor-pointer"
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </li>
              <li
                className="px-4 py-2 transition-all duration-700 hover:bg-[#351CBC] cursor-pointer"
                onClick={() => handleLanguageChange('fr')}
              >
                FR
              </li>
            </ul>
          )}
        </div>
      </div>
      <CarouselSlide />
    </header>
  );
}
