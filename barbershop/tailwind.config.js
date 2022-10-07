/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "title": "url(./assets/title.png)"
      },
      backgroundColor : {
        "myHeaderColor" : "rgba(0, 0, 0, 0.4)"
      },
      colors: {
        "sand" : "#FCEDC5"
      }
    },
  },
  plugins: [],
}