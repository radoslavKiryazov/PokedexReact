import { useState, useEffect } from "react";
import {
  capitalizeFirstLetter,
  buildDynamicColor,
} from "../utills/helperFunctions";
import { getPokemon } from "../utills/APICalls";

const usePokeCard = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const colorVariant = pokemon && buildDynamicColor(pokemon.types);
  const name = pokemon && capitalizeFirstLetter(pokemon.name);
  const [speed, setSpeed] = useState("animate-duration-[10000ms]");

  useEffect(() => {
    getPokemon(url).then((data) => {
      setPokemon(data);
    });
  }, [url]);

  const accelerate = () => {
    setSpeed("animate-duration-[900ms]");
  };

  const decelerate = () => {
    setSpeed("animate-duration-[10000ms]");
  };

  return {
    pokemon,
    colorVariant,
    name,
    speed,
    accelerate,
    decelerate,
  };
};

export default usePokeCard;
