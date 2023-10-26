/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "poke-pattern": "url('/public/pokepattern.jpeg')",
        pokevista: "url('/public/vista.jpg')",
      },
      fontFamily: {
        pokemonName: ["Handjet"],
        pokemonId: ["Julius Sans One"],
      },
      colors: {
        bug: "#A8B820",
        dark: "#705848",
        dragon: "#7038F8",
        electric: "#F8D030",
        fairy: "#EE99AC",
        fire: "#F08030",
        fighting: "#C03028",
        flying: "#A890F0",
        ghost: "#705898",
        grass: "#78C850",
        ground: "#E0C068",
        ice: "#98D8D8",
        normal: "#A8A878",
        poison: "#A040A0",
        psychic: "#F85888",
        rock: "#B8A038",
        water: "#6890F0",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
