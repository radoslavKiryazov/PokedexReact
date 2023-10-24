import { useEffect, useState } from "react";
import IDbox from "./IDbox";
import TypeBox from "./TypeBox";
const capitalizeFirstLetter = (string) => {
   
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const Home = () => {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/pichu`)
        .then(response => response.json())
        .then(data => setPokemon(data));
    }, [])
        
    return (
        <div>
            { pokemon && (
            <div className="flex flex-row bg-black/50 w-[300px] h-[100px] p-2 rounded-3xl">
            <div className="flex justify-center flex-col w-[190px] -space-y-0">
            <IDbox id={pokemon.order}/> 
            <h1 className="text-xl font-mono text-black">{capitalizeFirstLetter(pokemon.name)}</h1>
            <div className="flex flex-row space-x-2">
            {pokemon.types.map((type,index) => (
                <TypeBox value={type.type.name} key={index}/>
            ))}
            </div>
            </div>
            <div className="flex items-center pb-5">
            <img className="w-[90px] h-[90px]" src={pokemon.sprites.other.dream_world.front_default} alt="PokemonImage" />
            </div>
            </div>
            )}

        </div>
    )
}
export default Home;