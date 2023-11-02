import {
    colorVariantConverter,
    capitalizeFirstLetter,
  } from "../utills/helperFunctions";
import height from "../assets/height.png";
import weight from "../assets/weight.png";
import usePokemonDisplay from "../customHooks/usePokemonDisplay";
import StatBox from "./StatBox";
import DisplayTypeBox from "./DisplayTypeBox";
import EvolutionChain from "./EvolutionChain";


const PokemonDisplay = ({ pokemon }) => {
    const url = pokemon && pokemon.species.url;
    const {formatWeight, species, formatHeight} = usePokemonDisplay(url);
    return (
        <div className="flex flex-col p-10 w-[1400px] h-[600px] items-center space-y-3">
        <div className="flex flex-row space-x-5">

        <div className="flex flex-col w-[600px] h-[500px] space-y-2 ">
        <div className="flex flex-col w-[600px] h-[400px] bg-blue-200/70 rounded-3xl p-1">
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
            <div className="flex flex-col p-1 w-[300px] h-[100px]">  
        {species && species.flavor_text_entries && species.flavor_text_entries[9] && (
            <h1 className="font-pokemonName text-md">{species.flavor_text_entries[9].flavor_text}</h1>)}
            </div>
            </div>
            <img className="absolute w-[300px] h-[300px] right-2"src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            </div>
            <div className="flex flex-row w-full -space-x-6 justify-right items-center">
            </div>
            </div>
            
            <div className="relative flex justify-start w-[600px] h-[100px] bg-blue-200/70 items-center font-pokemonName rounded-3xl">
        <h1 className="absolute text-8xl opacity-20"> EVOLUTIONS </h1>
        {species.evolution_chain && (
        <EvolutionChain className chain={species.evolution_chain.url}/>)}
        
        </div>

            
            

        </div>






            
            <div className="flex flex-col items-center bg-blue-100/70 p-2 w-[300px] h-[510px] rounded-3xl ">  
            <h1 className="font-pokemonName text-4xl"> STATS </h1>
            {pokemon.stats.map((stat) => (<StatBox stat={stat.stat.name} value={stat.base_stat} key={stat.stat.name}/>))}
            <h1 className="font-pokemonName text-4xl pt-5"> TYPE </h1>
            
            <div className="flex flex-row space-x-3">
                {pokemon.types.map((type) => (
                <DisplayTypeBox type={type.type.name} key={type.slot}/>
            ))}
            </div>
            </div>
            
        <div className="flex flex-col bg-blue-100 p-2 w-[300px] h-[510px] items-center rounded-3xl "> 
        <h1 className="font-pokemonName text-4xl"> ABILITIES: </h1> 
        {pokemon.abilities.map((ability) => (
            <p key={ability.ability.name}>{ability.ability.name}</p>

        ))}

        </div>
        </div>


        </div>
        

    )

}
export default PokemonDisplay;