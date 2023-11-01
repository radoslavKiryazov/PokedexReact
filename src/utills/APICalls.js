export const pokemonMap = new Map(); // This is a cache that will store the data from the API calls. It will be used to prevent unnecessary API calls.

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      results: data.results,
      next: data.next,
      previous: data.previous,
    };
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};

export const getPokemon = async (url) => {
  if (pokemonMap.has(url)) {
    console.log(`${url}from the cache`);
    return pokemonMap.get(url);
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    pokemonMap.set(url, data);
    console.log(`${url} from the API`);
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon", error);
  }
};

export const fetchSpecies = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      description: data.flavor_text_entries[0].flavor_text,
    };
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};
