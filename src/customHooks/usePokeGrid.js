import { useEffect, useState } from "react";
import { getPageData } from "../utills/APICalls";
const usePokeGrid = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageData, setNextPageData] = useState(null);
  const [previousPageData, setPreviousPageData] = useState(null);

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

  const onNextPage = () => {
    getPageData(nextPageData).then((data) => {
      setPokemonData(data.results);
      setNextPageData(data.next);
      setPreviousPageData(data.previous);
    });
  };
  const onPreviousPage = () => {
    getPageData(previousPageData).then((data) => {
      setPokemonData(data.results);
      setNextPageData(data.next);
      setPreviousPageData(data.previous);
    });
  };
  return {
    pokemonData,
    onNextPage,
    onPreviousPage,
    nextPageData,
    previousPageData,
  };
};
export default usePokeGrid;
