// tailwind.config.js
import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(avatar|button|card|divider|dropdown|input|modal|progress|table|tabs|toast|popover|ripple|spinner|menu|form|checkbox|spacer).js"
],
  theme: {
    extend: {
       fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};