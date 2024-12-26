/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lime' :"#bafa78",
        'green' :"#34d399",
        'indigo':"#9aa2c4",
        'red' : "#f43f5e",
        'blue' : "#be6bf8"
      },
    },
  },
  plugins: [],
};
