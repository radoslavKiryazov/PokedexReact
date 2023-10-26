import IDbox from "./IDbox"
import TypeBox from "./TypeBox"
import {capitalizeFirstLetter} from "../utills/helperFunctions"
import { useEffect, useState } from "react"
import pokeball from "../assets/pokeball.png"

const PokeCard = ({url}) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPokemon(data));

    }, [url])

    return (

            <>
            {pokemon && (
            <div key={pokemon.id} className={`flex flex-row bg-${pokemon.types[0].type.name}/70 w-[250px] h-[100px] p-2 rounded-3xl cursor-pointer hover:bg-dragon`}>
            <div className="flex justify-center flex-col w-[190px] -space-y-0">
            <IDbox id={pokemon.id}/> 
            <h1 className="text-xl text-gray-50 font-pokemonName text animate-fade-right">{capitalizeFirstLetter(pokemon.name)}</h1>
            <div className="flex flex-row space-x-2">
            {pokemon.types.map((type) => (
                <TypeBox image={type.type.name}/>
            ))}
            </div>
            </div>
            <div className="flex items-center pb-5">
            <img src={pokeball} alt="pokeball" className="relative w-[150px] h-[100px] opacity-40  animate-spin animate-duration-[10000ms]"/>
            <img className="w-[100px] h-[100px] absolute animate-fade-down" src={pokemon.sprites.other.dream_world.front_default} alt="PokemonImage"/>
            </div>
            </div>
            )}
            </>
    
    
    )
    

}
export default PokeCard;