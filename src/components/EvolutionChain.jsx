import { useEffect, useState } from "react";


const EvolutionChain = ({ chain }) => {
    const [basePokemon, setBasePokemon] = useState(null);
    const [nextPokemon, setNextPokemon] = useState(null);
    const [finalPokemon, setFinalPokemon] = useState(null);

    
    useEffect(() => {
        fetch(chain)
        .then((res) => res.json())
        .then((data) => {
            data.chain.species && setBasePokemon(data.chain.species.name)
            data.chain.evolves_to[0] && setNextPokemon(data.chain.evolves_to[0].species.name)
            if (
                data.chain.evolves_to[0] &&
                data.chain.evolves_to[0].evolves_to[0]
            ) {
                setFinalPokemon(data.chain.evolves_to[0].evolves_to[0].species.name);
            }        });
    }, []);


    return (
        <>
        <div className="flex flex-col">
            <>
            {basePokemon && (<p>{basePokemon}</p>)}
            {nextPokemon && (<p>{nextPokemon}</p>)}
            {finalPokemon && (<p>{finalPokemon}</p>)}
            </>
        </div>
        </>

)
}
export default EvolutionChain;