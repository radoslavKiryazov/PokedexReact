import {
    colorVariantConverter,
    capitalizeFirstLetter,
  } from "../utills/helperFunctions";
import height from "../assets/height.png";
import weight from "../assets/weight.png";


const formatWeight = (weightInGrams) => {
   const weightInKilograms = weightInGrams / 10;
   return weightInKilograms + " kg";
}


const PokemonDisplay = ({ pokemon }) => {
    return (
        <div className="flex flex-col w-[700px] h-[700px] bg-blue-100">
            <div className="flex w-full bg-gray-500">
            <h1 className="font-pokemonName text-8xl"> {capitalizeFirstLetter(pokemon.name)} </h1>
            </div>
            <div className="flex flex-row space-x-1 pl-2">
            <img  src={weight} alt="weight"/>
            <p>{formatWeight(pokemon.weight)} </p>
            <img src={height} alt="height"/>
            <p>{pokemon.height} cm</p>
            </div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>

    )

}
export default PokemonDisplay;