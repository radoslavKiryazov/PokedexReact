import EvolutionElement from "./EvolutionElement";
import { replaceSpeciesWithPokemon } from "../utills/helperFunctions";
import useEvolutionChain from "../customHooks/useEvolutionChain";


const EvolutionChain = ({ chain }) => {
    const { basePokemon, evolvesTo, evolutions } = useEvolutionChain(chain);

    return (
        <>
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl"> EVOLUTION CHAIN </h1>
        <div className="flex flex-row justify-start w-[620px] h-[100px] bg-blue-200/50 items-center font-pokemonName rounded-3xl overflow-y-hidden overflow-x-auto">
            {basePokemon && <EvolutionElement url={replaceSpeciesWithPokemon(basePokemon)}/> }
            {evolutions.map((evolution) => (
                <EvolutionElement url={replaceSpeciesWithPokemon(evolution.species.url)} key={evolution.species.name}/>
            ))}
            {evolvesTo && <EvolutionElement url={replaceSpeciesWithPokemon(evolvesTo)}/> }
        </div>
        </div>
        </>

)
}
export default EvolutionChain;