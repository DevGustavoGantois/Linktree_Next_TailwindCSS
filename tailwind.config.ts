import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'jetbrains': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #000000, #001240)',
        'linktree-gradient': 'linear-gradient(180deg, #000000, #252525)',
        '1': 'url(/1.svg)',
        '2': 'url(/2.svg)',
        '3': 'url(/3.svg)',
        '4': 'url(/4.svg)',
        'BehanceBg': 'url(/BehanceBg.svg)',
        'InstagramBg': 'url(/InstagramBg.svg)',
        'LinkedinBg': 'url(/LinkedinBg.svg)',
        'GitHubBg': 'url(/GitHubBg.svg)',
      },
      keyframes: {
        slideCarousel: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideCarousel: 'slideCarousel 65s linear infinite',
        float: 'float 4s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
} satisfies Config;
