import { useState} from "react";
import {
  capitalizeFirstLetter,
  buildDynamicColor,
} from "../utills/helperFunctions";

const usePokeCard = (pokemon) => {
  const colorVariant = pokemon && buildDynamicColor(pokemon.types);
  const name = pokemon && capitalizeFirstLetter(pokemon.name);
  const [speed, setSpeed] = useState("animate-duration-[10000ms]");

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
