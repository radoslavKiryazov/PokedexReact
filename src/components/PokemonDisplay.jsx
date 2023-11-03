import {
    capitalizeFirstLetter,
} from "../utills/helperFunctions";
import height from "../assets/height.png";
import weight from "../assets/weight.png";
import usePokemonDisplay from "../customHooks/usePokemonDisplay";
import StatBox from "./StatBox";
import DisplayTypeBox from "./DisplayTypeBox";
import EvolutionChain from "./EvolutionChain";
import { usePokemonContext } from "../context/PokemonContext";
import AbilityBox from "./AbilityBox";
import pokedex from "../assets/pokedex.gif";


const PokemonDisplay = ({ pokemon }) => {
    const url = pokemon && pokemon.species.url;
    const { formatWeight, species, formatHeight } = usePokemonDisplay(url);
    const { setSelectedPokemon } = usePokemonContext();


    const onReturnToPokedex = () => {
        setSelectedPokemon(null);
    }
    return (
        <div className="flex flex-row space-x-10 w-[1300px] h-[700px]">

            <div className="flex flex-col w-[620px] h-[540px] space-y-2 ">
                <div className="flex flex-row bg-blue-200/50 rounded-3xl w-[620px] h-[100px] items-center p-2 space-x-5 cursor-pointer" onClick={onReturnToPokedex}>
                <img className="w-[90px] h-[90px]" src={pokedex} alt="pokedex "/>
                <h1 className="font-pokemonName text-6xl">RETURN TO POKEDEX</h1>
                </div>




                <div className="flex flex-col w-[620px] h-[400px] bg-blue-200/50 rounded-3xl p-1">
                    <div className="flex flex-row h-full ">
                        <div className="flex flex-col opacity-40 ">
                            <h1 className="font-pokemonName text-6xl">{capitalizeFirstLetter(pokemon.name)}</h1>
                            <h1 className="font-pokemonName text-7xl">#{pokemon.id}</h1>
                            <div className="flex flex-row space-x-1">
                                <img className="w-[30px] h-[30px]" src={weight} alt="weight" />
                                <p className="font-pokemonName text-2xl">{formatWeight(pokemon.weight)} </p>
                                <img className="w-[30px] h-[30px]" src={height} alt="height" />
                                <p className="font-pokemonName text-2xl">{formatHeight(pokemon.height)}</p>
                            </div>
                            <div className="flex flex-col p-1 w-[350px] h-[150px]">
                                {species && species.flavor_text_entries && species.flavor_text_entries[9] && (
                                    <h1 className="font-pokemonName text-md">{species.flavor_text_entries[9].flavor_text}</h1>)}
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                        <img className="w-[300px] h-[250px]" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                        </div>



                    </div>
                </div>

                <div className="flex justify-start w-[620px] h-[250px] bg-blue-200/50 items-center font-pokemonName rounded-3xl overflow-y-hidden overflow-x-auto">
                    {species.evolution_chain && (
                        <EvolutionChain className chain={species.evolution_chain.url} />)}

                </div>
            </div>







            <div className="flex flex-col items-center bg-blue-200/50 p-2 w-[300px] h-[540px] rounded-3xl ">
                <h1 className="font-pokemonName text-4xl"> STATS </h1>
                {pokemon.stats.map((stat) => (<StatBox stat={stat.stat.name} value={stat.base_stat} key={stat.stat.name} />))}
                <h1 className="font-pokemonName text-4xl pt-5"> TYPE </h1>

                <div className="flex flex-row space-x-3">
                    {pokemon.types.map((type) => (
                        <DisplayTypeBox type={type.type.name} key={type.slot} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col bg-blue-200/50 w-[300px] h-[540px] rounded-3xl px-2">
                <div className="flex items-center justify-center">
                    <h1 className="font-pokemonName text-4xl"> ABILITIES: </h1>
                    </div>
                <div className="font flex-col space-y-5">

                {pokemon.abilities.map((ability) => (
                    <AbilityBox url={ability.ability.url} key={ability.ability.name}/>
                ))}

                </div>

            </div>
        </div>




    )

}
export default PokemonDisplay;