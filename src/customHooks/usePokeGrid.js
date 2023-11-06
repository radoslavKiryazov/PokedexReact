import { useEffect, useState } from "react";
import { usePokemonContext } from "../context/PokemonContext";
import usePokedex from "./usePokedex";

const usePokeGrid = () => {
  const { pageData } = usePokemonContext();
  const { loadPageData } = usePokedex();
  const [pageNumber, setPageNumber] = useState(1);

  const jumpToStart = async () => {
    loadPageData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
    setPageNumber(pageNumber + 1);
  };

  const onNextPage = async () => {
    loadPageData(pageData.next);
    setPageNumber(pageNumber + 1);
  };
  const onPreviousPage = async () => {
    loadPageData(pageData.previous);
    setPageNumber(pageNumber - 1);
  };
  return {
    pageData,
    onNextPage,
    onPreviousPage,
    jumpToStart,
    pageNumber,
  };
};
export default usePokeGrid;
