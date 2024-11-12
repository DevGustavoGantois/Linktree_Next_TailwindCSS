'use client'
import { ButtonsCTA } from "@/components/ButtonsCTA";
import { GridLayout } from "@/components/GridLayout";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <LanguageProvider>
      <main>
        <div className="flex justify-center items-center mt-20">
          <div className="py-6 lg:py-14 bg-[#000000] rounded-2xl overflow-hidden relative">
            <Header />
            <GridLayout />
            <ButtonsCTA />
          </div>
          <div className="absolute top-0 bottom-0 -z-10">
            <Image
              src="/WhiteLines.svg"
              width={1400}
              height={400}
              alt="White Lines"
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="absolute top-24 left-0 right-0 bottom-0 mx-auto transform -translate-y-1/2 -z-10">
          <Image
            src="/BgBlur.svg"
            alt="Background Image"
            width={200}
            height={200}
            priority
            quality={100}
            className="mx-auto w-screen h-auto"
          />
        </div>
      </main>
    </LanguageProvider>
  );
}
