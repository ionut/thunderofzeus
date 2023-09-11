/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'coralblue':'#43d0ff',
      'blue':'#2500b9',
      'whitetransparent':'#ffffffa1',
      'blacktransparent':'#00000045'
    },
    extend: {
      spacing: {
        '5p': '5%',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
