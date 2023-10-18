/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "poke-pattern": "url('/public/pokepattern.jpeg')",
        pokevista: "url('/public/vista.jpg')",
      },
    },
  },
  plugins: [],
};
