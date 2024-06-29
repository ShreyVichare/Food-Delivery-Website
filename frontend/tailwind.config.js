/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 2.5s ease-in-out",
        fade1s: "fadeIn 1s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Cur: ["Playwrite DE Grund", " cursive"],
        Pop: ["Poppins", " sans-serif"],
      },
      gridTemplateColumns: {
        "fill-240": "repeat(auto-fill, minmax(240px, 1fr))",
      },
    },
  },

  plugins: [],
};
