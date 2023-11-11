import { useEffect} from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { getPageData } from "../utills/APICalls";

const usePokedex = () => {
  const { setPageData } = usePokemonContext();

  useEffect(() => {
    getPageData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`).then(
      (data) => {
        setPageData({
          result: data.results,
          next: data.next,
          previous: data.previous,
        });
      }
    );
  }, []);
};

export default usePokedex;
