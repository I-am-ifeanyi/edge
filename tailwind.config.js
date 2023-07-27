/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBlue: "#041644",
        colorWhitishBlue: "#6476a5",
        colorYellow: "#FFC542",
        colorSkyBlue: "#50B5FF",
        colorLightGreen: "#3DD598",
        colorOrange: "#FF974A",
        colorYellow: "#FFF6A6",
        colorRed: "#FC5A5A",
        colorGreen: "#82C43C",
        colorLightGreen: "#82C43C",
        colorPurple: "#A461D8",
        colorPink: "#FF9AD5",
        colorGray1: "#171725",
        colorGray2: "#44444F",
        colorGray3: "#696974",
        colorGray4: "#92929D",
        colorGray5: "#B5B5BE",
        colorGray6: "#D5D5DC",
        colorWhite1: "#FFFFFF",
        colorWhite2: "#FAFAFB",
        colorWhite3: "#F1F1F5"
      }
    }
  },
  variants: {
    scrollbar: ["rounded-md"] 
  },
  plugins: []
}
