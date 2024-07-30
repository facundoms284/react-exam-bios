/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#252525",
        customWhite: "#F7F7F7",
        customPurple: "#6C63FF",
        customRed: "#ef4444",
      },
    },
  },
  plugins: [],
};
