import { useState, useEffect } from "react";
import { getPokemon } from "../utills/APICalls";
import { usePokemonContext } from "../context/PokemonContext";

const useEvolutionElement = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const { setSelectedPokemon } = usePokemonContext();
  const [suggest, setSuggest] = useState(false);

  useEffect(() => {
    getPokemon(url).then((data) => {
      setPokemon(data);
    });
  }, [url]);

  const onClick = () => {
    setSelectedPokemon(pokemon);
  };

  const onMouseEnter = () => {
    setSuggest(true);
  };
  const onMouseLeave = () => {
    setSuggest(false);
  };
  return { pokemon, onClick, onMouseEnter, onMouseLeave, suggest };
};
export default useEvolutionElement;
