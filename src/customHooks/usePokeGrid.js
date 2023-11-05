import { useEffect, useState } from "react";
import { getPageData } from "../utills/APICalls";
const usePokeGrid = () => {
  const [pageData, setPageData] = useState([]);
  const [nextPageData, setNextPageData] = useState(null);
  const [previousPageData, setPreviousPageData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    jumpToStart();
  }, []);

  const setNewData = (data) => {
    setPageData(data.results);
    setNextPageData(data.next);
    setPreviousPageData(data.previous);
  };

  const jumpToStart = async () => {
    try {
      const data = await getPageData(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
      );
      setNewData(data);
      setPageNumber(1);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const onNextPage = async () => {
    try {
      const data = await getPageData(nextPageData);
      setNewData(data);
      setPageNumber(pageNumber + 1);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };
  const onPreviousPage = async () => {
    try {
      const data = await getPageData(previousPageData);
      setNewData(data);
      setPageNumber(pageNumber - 1);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };
  return {
    pageData,
    onNextPage,
    onPreviousPage,
    nextPageData,
    previousPageData,
    jumpToStart,
    pageNumber,
  };
};
export default usePokeGrid;
