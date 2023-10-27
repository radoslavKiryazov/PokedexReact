import { useState, useEffect } from "react";
import {
  colorVariantConverter,
  capitalizeFirstLetter,
} from "../utills/helperFunctions";

const usePokeCard = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const colorVariant =
    pokemon && colorVariantConverter(pokemon.types[0].type.name);
  const name = pokemon && capitalizeFirstLetter(pokemon.name);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [url]);

  return {
    pokemon,
    colorVariant,
    name,
  };
};

export default usePokeCard;
