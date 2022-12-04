module.exports = {
  darkMode: "class", // This can be 'media' if preferred.
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  content: ["./src/**/*.svelte", "./src/**/*.html", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1e1e2a",
          secondary: "#111117",
          accent: "#FB503B",
          text: "#eaeede",
        },
        darker: {
          primary: "#15151b",
          secondary: "#070709",
          accent: "#ca2713",
          text: "#eaeede",
        },
        light: {
          primary: "#eaeede",
          secondary: "#111117",
          accent: "#FB503B",
          text: "#1e1e2a",
        },
      },
      fontFamily: {
        dosis: ["Dosis"],
      },
    },
  },
  plugins: [],
};
