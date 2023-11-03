import { useEffect, useState } from "react";
import { getPageData } from "../utills/APICalls";
const usePokeGrid = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageData, setNextPageData] = useState(null);
  const [previousPageData, setPreviousPageData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getPageData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .then((data) => {
        setNextPageData(data.next);
        setPreviousPageData(data.previous);
        setPokemonData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  }, []);

  const jumpToStart = () => {
    getPageData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .then((data) => {
        setNextPageData(data.next);
        setPreviousPageData(data.previous);
        setPokemonData(data.results);
        setPageNumber(1);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  };

  const onNextPage = () => {
    getPageData(nextPageData)
      .then((data) => {
        setPokemonData(data.results);
        setNextPageData(data.next);
        setPreviousPageData(data.previous);
        setPageNumber(pageNumber + 1);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  };
  const onPreviousPage = () => {
    getPageData(previousPageData)
      .then((data) => {
        setPokemonData(data.results);
        setNextPageData(data.next);
        setPreviousPageData(data.previous);
        setPageNumber(pageNumber - 1);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  };
  return {
    pokemonData,
    onNextPage,
    onPreviousPage,
    nextPageData,
    previousPageData,
    jumpToStart,
    pageNumber,
  };
};
export default usePokeGrid;
