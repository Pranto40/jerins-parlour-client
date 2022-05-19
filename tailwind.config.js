module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F73E7B",
          accent: "#E5E5E5",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}