/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: "true",
        padding: "1rem",
      },
      fontFamily: {
        display: ["Zen Maru Gothic", "Noto Serif JP", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        'sakura-light': '#FFE6EF',
        'sakura-medium': '#F7A7C1',
        'plum-soft': '#A05C78',
        'carbon': '#141414',
        'ivory': '#FFF9FB',
        'mist-gray': '#EDE6EC',
      },
      borderRadius: {
        'component': '16px',
      },
      lineHeight: {
        'relaxed': '1.6',
      },
    },
  },
  plugins: [],
};
