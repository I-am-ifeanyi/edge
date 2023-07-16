/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBlue: "#0062FF",
        colorYellow: "#FFC542",
        colorSkyBlue: "#50B5FF",
        colorLightGreen: "#3DD598",
        colorOrange: "#FF974A",
        colorRed: "#FC5A5A",
        colorGreen: "#82C43C",
        colorPurple: "#A461D8",
        colorPink: "#FF9AD5"
      }
    }
  },
  plugins: []
}
