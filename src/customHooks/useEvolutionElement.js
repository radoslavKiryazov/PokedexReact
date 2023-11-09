import { useState, useEffect } from "react";
import { usePokemonContext } from "../context/PokemonContext";

const useEvolutionElement = (pokemon) => {
  const { setSelectedPokemon } = usePokemonContext();
  const [suggest, setSuggest] = useState(false);

  const onClick = () => {
    if (setSelectedPokemon) {
      setSelectedPokemon(pokemon);
    }
  };

  const onMouseEnter = () => {
    setSuggest(true);
  };
  const onMouseLeave = () => {
    setSuggest(false);
  };
  return { onClick, onMouseEnter, onMouseLeave, suggest };
};
export default useEvolutionElement;
