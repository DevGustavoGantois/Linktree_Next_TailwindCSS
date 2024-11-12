'use client'

import React, {createContext, useContext, useState, ReactNode} from "react";
import { en } from "@/locales/en";
import { fr } from "@/locales/fr";
import { pt } from "@/locales/pt";

type Language = 'pt' | 'en' | 'fr';

export const translations = {
    pt: pt,
    en: en,
    fr: fr,
}

const LanguageContext = createContext<{
    language: Language;
    setLanguage: (language: Language) => void;
}>({
    language: 'pt',  
    setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

//Context
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('pt');

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}