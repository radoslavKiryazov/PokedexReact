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
