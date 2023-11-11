import { usePokemonContext } from "../context/PokemonContext";
import { getPageData } from "../utills/APICalls";
import { useEffect, useState } from "react";
import { getPokemon } from "../utills/APICalls";

const usePokeGrid = () => {
  const { setPageData, pageData, setPageNumber, pageNumber } =
    usePokemonContext();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);

    fetchPokemons();
  }, [pageData]);

  const fetchPokemons = async () => {
    setLoadingState(true);
    try {
      const results = await Promise.all(
        pageData.result.map(async (pokemon) => {
          const response = await getPokemon(pokemon.url);
          return response;
        })
      );
      setPokemons(results);
    } catch (error) {
      console.error("Error fetching evolution chain data:", error);
    } finally {
      setLoadingState(false);
    }
  };

  const jumpToStart = async () => {
    try {
      const data = await getPageData(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
      );
      setPageData({
        result: data.results,
        next: data.next,
        previous: data.previous,
      });
      setPageNumber(1);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const onNextPage = async () => {
    try {
      const data = await getPageData(pageData.next);
      setPageData({
        result: data.results,
        next: data.next,
        previous: data.previous,
      });
      setPageNumber(pageNumber + 1);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };
  const onPreviousPage = async () => {
    try {
      const data = await getPageData(pageData.previous);
      setPageData({
        result: data.results,
        next: data.next,
        previous: data.previous,
      });
      setPageNumber(pageNumber - 1);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };
  return {
    pageNumber,
    onNextPage,
    onPreviousPage,
    jumpToStart,
    loading,
    pokemons,
  };
};
export default usePokeGrid;
