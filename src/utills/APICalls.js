const pokemonMap = new Map();
const pageDataMap = new Map();
/// miserable attempt at caching, works tho

export const getPageData = async (url) => {
  if (pageDataMap.has(url)) {
    return pageDataMap.get(url);
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    pageDataMap.set(url, data);

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
    return pokemonMap.get(url);
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    pokemonMap.set(url, data);

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
