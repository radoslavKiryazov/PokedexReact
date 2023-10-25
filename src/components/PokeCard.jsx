import IDbox from "./IDbox"
import TypeBox from "./TypeBox"
import {capitalizeFirstLetter} from "../utills/helperFunctions"
import { useEffect, useState } from "react"

const PokeCard = ({url}) => {
    const [pokemon, setPokemon] = useState(null);
    
    
    useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPokemon(data));

    }, [url])

    return (
        <div>
            {pokemon && (
            <div className="flex flex-row bg-black/50 w-[250px] h-[100px] p-2 rounded-3xl">
            <div className="flex justify-center flex-col w-[190px] -space-y-0">
            <IDbox id={pokemon.id}/> 
            <h1 className="text-xl font-mono text-black">{capitalizeFirstLetter(pokemon.name)}</h1>
            <div className="flex flex-row space-x-2">
            {pokemon.types.map((type,index) => (
                <TypeBox value={capitalizeFirstLetter(type.type.name)} key={index}/>
            ))}
            </div>
            </div>
            <div className="flex items-center pb-5">
            <img className="w-[150px] h-[150px]" src={pokemon.sprites.other.dream_world.front_default} alt="PokemonImage" />
            </div>
            </div>
            )}
        </div>
    )
    

}
export default PokeCard;