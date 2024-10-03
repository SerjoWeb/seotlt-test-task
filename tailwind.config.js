/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#6675F7",
        viollette: "#57007B",
        pinky: "#F76680",
      },
    },
  },
  plugins: [],
}
