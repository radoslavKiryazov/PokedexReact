import { useEffect, useState } from "react";
import { getPokemonData } from "../utills/APICalls";
import { usePokemonContext } from "../context/PokemonContext";
const usePokeGrid = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageData, setNextPageData] = useState(null);
  const [previousPageData, setPreviousPageData] = useState(null);
  

  useEffect(() => {
    getPokemonData(`https://pokeapi.co/api/v2/pokemon?limit=20`)
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
    getPokemonData(nextPageData).then((data) => {
      setPokemonData(data.results);
      setNextPageData(data.next);
      setPreviousPageData(data.previous);
    });
  };
  const onPreviousPage = () => {
    getPokemonData(previousPageData).then((data) => {
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
