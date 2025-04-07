/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        panna: "#fef0d5",
        astronaut: {
          50: "#f2f6fc",
          100: "#e1ebf8",
          200: "#c9dcf4",
          300: "#a5c6eb",
          400: "#79a9e1",
          500: "#5a8ad7",
          600: "#4670ca",
          700: "#3c5eb9",
          800: "#364e97",
          900: "#2d3f71", // MAIN
          950: "#212a4a",
        },
        "trieste-red": {
          50: "#fef2f2",
          100: "#fee3e2",
          200: "#feccca",
          300: "#fca8a5",
          400: "#f87671",
          500: "#ef4a44",
          600: "#dc2d26",
          700: "#b9221c",
          800: "#a6221d", // MAIN
          900: "#7f211d",
          950: "#450c0a",
        },
      },
    },
  },
  plugins: [],
};
