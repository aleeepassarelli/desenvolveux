import tokens from "./tokens.json" assert { type: "json" };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: tokens.color.primary,
        secondary: tokens.color.secondary,
        neutral: tokens.color.neutral,
        success: tokens.color.semantic.success,
        warning: tokens.color.semantic.warning,
        error: tokens.color.semantic.error,
        info: tokens.color.semantic.info
      },
      fontFamily: {
        sans: tokens.font.family.sans,
        mono: tokens.font.family.mono
      },
      fontSize: tokens.font.size,
      fontWeight: tokens.font.weight,
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadow
    }
  },
  plugins: []
};
