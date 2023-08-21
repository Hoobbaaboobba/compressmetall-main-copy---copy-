/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-bg": "#F9A825",
        "gray-bg": "#404040",
        "light-gray": "#F5F5F5",
        "gray-text": "#2A2A2A",
      },
    },
  },
  plugins: [],
};
