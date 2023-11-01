import { useState, useEffect } from "react";
import {
  colorVariantConverter,
  capitalizeFirstLetter,
} from "../utills/helperFunctions";
import { pokemonMap } from "../utills/helperFunctions";

const usePokeCard = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const [caching, setCaching] = useState("");
  const colorVariant =
    pokemon && colorVariantConverter(pokemon.types[0].type.name);
  const name = pokemon && capitalizeFirstLetter(pokemon.name);

  useEffect(() => {
    if (pokemonMap.has(url)) {
      setPokemon(pokemonMap.get(url));
      setCaching("got it from the cache");
      return;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        pokemonMap.set(url, data);
        setCaching("contacted the API");
        setPokemon(data);
      });
  }, [url]);

  return {
    pokemon,
    colorVariant,
    name,
    caching,
  };
};

export default usePokeCard;
