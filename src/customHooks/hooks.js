const API_BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemon = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
