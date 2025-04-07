/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fee3e2",
          200: "#feccca",
          300: "#fca8a5",
          400: "#f87671",
          500: "#ef4a44",
          600: "#dc2d26",
          700: "#b9221c",
          800: "#a6221d", // main
          900: "#7f211d",
          950: "#450c0a",
        },
      },
    },
  },
  plugins: [],
};
