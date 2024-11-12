import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "@next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Linktree DevGustavoGantois",
  description: "Meios de contato para solicitar orçamentos e conhecer minha experiência profissional como desenvolvedor web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${poppins.variable} antialiased bg-custom-gradient h-full w-full`}
      >
        {children}
      </body>
    </html>
  );
}
