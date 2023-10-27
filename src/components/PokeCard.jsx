import IDbox from "./IDbox"
import TypeBox from "./TypeBox"
import usePokeCard from "../customHooks/usePokeCard"
import pokeball from "../assets/pokeball.png"
import { usePokemonContext } from "../context/PokemonContext"


const PokeCard = ({url}) => {
   const {pokemon, colorVariant, name} = usePokeCard(url);
   const {setSelectedPokemon } = usePokemonContext();

    return (
            <>
            {pokemon && (
            <div className={`flex flex-row ${colorVariant} w-[250px] h-[100px] p-2 rounded-3xl cursor-pointer hover:animate-pulse`} onClick={() => setSelectedPokemon(pokemon)}>
            <div className="flex justify-center flex-col w-[190px] -space-y-0">
            <IDbox id={pokemon.id}/> 
            <h1 className="text-xl font-pokemonName text animate-fade-right">{name}</h1>
            <div className="flex flex-row space-x-2">
            {pokemon.types.map((type,index) => (
                <TypeBox image={type.type.name} key={index}/>
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