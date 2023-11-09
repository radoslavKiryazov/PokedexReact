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
export const getAbility = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const englishEffect = data.effect_entries.find(
      (effect) => effect.language.name === "en"
    );

    return { ...data, short_effect: englishEffect.short_effect };
  } catch (error) {
    console.error("Error fetching Pokemon Ability:", error);
  }
};
export const getEvolutionChain = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const base = data.chain.species?.url;
    const evolvesToUrl = data.chain.evolves_to[0]?.evolves_to[0]?.species.url;
    const evolutionData = [...data.chain.evolves_to] || [];
    const urls = evolutionData.map((evolution) => evolution.species.url);
    const builder = [];

    base && builder.push(base);
    evolvesToUrl && builder.push(evolvesToUrl);
    urls && builder.push(...urls);

    return builder;
  } catch (error) {
    console.error("Error fetching Pokemon Ability:", error);
  }
};

export const getPokemonSpecies = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const english_blurb = data.flavor_text_entries.find(
      (flavor_text) => flavor_text.language.name === "en"
    ); //find the english description
    return { ...data, blurb: english_blurb.flavor_text };
  } catch (error) {
    console.error("Error fetching Pokemon species:", error);
  }
};
