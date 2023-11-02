import { useEffect, useState } from "react";
import EvolutionElement from "./EvolutionElement";
import { replaceSpeciesWithPokemon } from "../utills/helperFunctions";


const EvolutionChain = ({ chain }) => {
    const [basePokemon, setBasePokemon] = useState(null);
    const [evolvesTo, setEvolvesTo] = useState(null);
    const [evolutions, setEvolutions] = useState([]);

    
    useEffect(() => {
        fetch(chain)
        .then((res) => res.json())
        .then((data) => {
                const speciesUrl = data.chain.species?.url;
                const evolvesToUrl = data.chain.evolves_to[0]?.evolves_to[0]?.species.url;
                const evolutionData = data.chain.evolves_to || [];
                
                setBasePokemon(speciesUrl);
                setEvolvesTo(evolvesToUrl);
                setEvolutions(evolutionData);
        });
    }, [chain]);


    return (
        <>
        <div className="flex flex-row -space-x-5">
            {basePokemon && <EvolutionElement url={replaceSpeciesWithPokemon(basePokemon)}/> }
            {evolvesTo && <EvolutionElement url={replaceSpeciesWithPokemon(evolvesTo)}/> }
            {evolutions.map((evolution) => (
                <EvolutionElement url={replaceSpeciesWithPokemon(evolution.species.url)} key={evolution.species.name}/>
            ))}
        </div>
        </>

)
}
export default EvolutionChain;