import { useEffect } from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { getPageData } from "../utills/APICalls";

const usePokedex = () => {
  const { setPageData } = usePokemonContext();

  useEffect(() => {
    loadPageData("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  }, []);

  const loadPageData = async (url) => {
    try {
      const data = await getPageData(url);
      setAllInfo(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };
  const setAllInfo = (data) => {
    setPageData({
      result: data.results,
      next: data.next,
      previous: data.previous,
    });
  };
  return {
    loadPageData,
  };
};

export default usePokedex;
