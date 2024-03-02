module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["Helvetica", "Arial", "sans-serif"],
            magesta: ["magesta", "serif"],
            qwigley: "qwigley",
            delaGothic: "delaGothic",
            led: "led",
          },
          colors: {
            primary: "#7c2d12",
            primary2: "#fef3c7",
            textPrimary: "#4c5562",
            textPrimary2: "#777979",
          },
          screens: {
            mobile: "0px",
            // => @media (min-width: 640px) { ... }
    
            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }
    
            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
          },
        },
      },
    plugins: [],
}