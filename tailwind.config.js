/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1b8bf5",
          secondary: "#4b5563",
        },
        light: {
          primary: "#4af7d8",
          secondary: "#4b5563",
        },
      },
    },
  },
  plugins: [],
};
