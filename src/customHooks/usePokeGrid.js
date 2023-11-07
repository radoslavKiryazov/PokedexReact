import { useState } from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { getPageData } from "../utills/APICalls";

const usePokeGrid = () => {
  const { setPageData, pageData } = usePokemonContext();
  const [pageNumber, setPageNumber] = useState(1);

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
  };
};
export default usePokeGrid;
