import {
    colorVariantConverter,
    capitalizeFirstLetter,
  } from "../utills/helperFunctions";
import height from "../assets/height.png";
import weight from "../assets/weight.png";
import usePokemonDisplay from "../customHooks/usePokemonDisplay";
import { useEffect, useState } from "react";


const PokemonDisplay = ({ pokemon }) => {
    const url = pokemon && pokemon.species.url;
    const {formatWeight, species} = usePokemonDisplay(url);
    return (
        <>
        <div className="flex flex-row space-x-11">
            
            <div className="flex flex-col w-[500px] h-[700px] bg-blue-100 p-1">
                
            {species && species.flavor_text_entries && species.flavor_text_entries[9] && (
  <h1 className="font-pokemonName text-xl">{species.flavor_text_entries[9].flavor_text}</h1>
)}
            
            </div>
        <div className="flex flex-col w-[700px] h-[700px] bg-blue-100 p-1">
            <div className="flex flex-row w-full -space-x-6 justify-right items-center">
            <h1 className="font-pokemonId text-8xl"> #{pokemon.id} </h1>
            <h1 className="font-pokemonName text-5xl p-10"> {capitalizeFirstLetter(pokemon.name)} </h1>
            </div>

            <div className="flex flex-row space-x-1 pl-2">
            <img className="w-[30px] h-[30px]" src={weight} alt="weight"/>
            <p className="font-pokemonName text-2xl">{formatWeight(pokemon.weight)} </p>
            <img className="w-[30px] h-[30px]" src={height} alt="height"/>
            <p className="font-pokemonName text-2xl">{pokemon.height} cm</p>
            </div>
            <div className="relative flex h-full items-center justify-center">
            <h1 className="absolute left-2 top-2 opacity-50 font-pokemonName text-9xl">GALLERY</h1>
            <img className="absolute w-[500px] h-[500px]" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            </div>
            
        </div>
        <div className="flex flex-col w-[500px] h-[700px] bg-blue-100 p-1">
            
            </div>
        </div>
        </>

    )

}
export default PokemonDisplay;