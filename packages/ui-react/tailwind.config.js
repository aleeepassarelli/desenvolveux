import tokens from "@cef-ux/design-tokens/tokens.json" assert { type: "json" };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: tokens.color,
      fontFamily: tokens.font.family,
      fontSize: tokens.font.size,
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadow
    }
  },
  plugins: []
};
