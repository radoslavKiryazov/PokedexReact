import EvolutionElement from "./EvolutionElement";
import { replaceSpeciesWithPokemon } from "../utills/helperFunctions";
import useEvolutionChain from "../customHooks/useEvolutionChain";


const EvolutionChain = ({ chain }) => {
    const { basePokemon, evolvesTo, evolutions } = useEvolutionChain(chain);

    return (
        <>
        <div className="flex justify-start w-[620px] h-[250px] bg-blue-200/50 items-center font-pokemonName rounded-3xl overflow-y-hidden overflow-x-auto">
            {basePokemon && <EvolutionElement url={replaceSpeciesWithPokemon(basePokemon)}/> }
            {evolutions.map((evolution) => (
                <EvolutionElement url={replaceSpeciesWithPokemon(evolution.species.url)} key={evolution.species.name}/>
            ))}
            {evolvesTo && <EvolutionElement url={replaceSpeciesWithPokemon(evolvesTo)}/> }
        </div>
        </>

)
}
export default EvolutionChain;