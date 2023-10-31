import {
    colorVariantConverter,
    capitalizeFirstLetter,
  } from "../utills/helperFunctions";
import height from "../assets/height.png";
import weight from "../assets/weight.png";
import usePokemonDisplay from "../customHooks/usePokemonDisplay";
import { useEffect, useState } from "react";
import StatBox from "./StatBox";


const PokemonDisplay = ({ pokemon }) => {
    const url = pokemon && pokemon.species.url;
    const {formatWeight, species, formatHeight} = usePokemonDisplay(url);
    return (
        <>
        <div className="flex flex-row space-x-5">
            
            <div className="flex flex-col items-center bg-blue-100 p-2 w-[300px] h-[500px]">  
            <h1 className="font-pokemonName text-4xl"> STATS </h1>
            <StatBox stat={pokemon.stats[0].stat.name} value={pokemon.stats[0].base_stat}/>
            <p>Attack</p>
            <p>Defense</p>
            <p>Special Attack</p>
            <p>Special Defense</p>
            <p>Speed</p>

            
            </div>
            
            
            
            <div className="flex flex-col w-[700px] h-[500px] bg-blue-100 p-1">
            <div className="relative flex h-full items-center justify-center">
            <div className="absolute left-1 -top-1 flex flex-col opacity-40">
            <h1 className="font-pokemonName text-9xl">{capitalizeFirstLetter(pokemon.name)}</h1>
            <h1 className="font-pokemonName text-9xl">#{pokemon.id}</h1>
            <div className="flex flex-row space-x-1">
            <img className="w-[30px] h-[30px]" src={weight} alt="weight"/>
            <p className="font-pokemonName text-2xl">{formatWeight(pokemon.weight)} </p>
            <img className="w-[30px] h-[30px]" src={height} alt="height"/>
            <p className="font-pokemonName text-2xl">{formatHeight(pokemon.height)}</p>
            </div>
            <div className="flex flex-col bg-blue-100 p-1 w-[300px] h-[10px]">  
        {species && species.flavor_text_entries && species.flavor_text_entries[9] && (
            <h1 className="font-pokemonName text-md">{species.flavor_text_entries[9].flavor_text}</h1>)}
            </div>
            </div>
            <img className="absolute w-[300px] h-[300px] right-11"src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            </div>
            <div className="flex flex-row w-full -space-x-6 justify-right items-center">
            </div>
            
            
        </div>
        <div className="flex flex-col bg-blue-100 p-1 w-[300px] h-[500px]">  
        </div>
        </div>
        </>

    )

}
export default PokemonDisplay;