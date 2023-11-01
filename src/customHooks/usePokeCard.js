import { useState, useEffect } from "react";
import {
  colorVariantConverter,
  capitalizeFirstLetter,
} from "../utills/helperFunctions";
import { getPokemon } from "../utills/APICalls";

const usePokeCard = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const colorVariant =
    pokemon && colorVariantConverter(pokemon.types[0].type.name);
  const name = pokemon && capitalizeFirstLetter(pokemon.name);

  useEffect(() => {
    getPokemon(url).then((data) => {
      setPokemon(data);
    });
  }, [url]);

  return {
    pokemon,
    colorVariant,
    name,
  };
};

export default usePokeCard;
