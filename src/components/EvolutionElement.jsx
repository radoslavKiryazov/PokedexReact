import { useEffect, useState } from 'react';
import {getPokemon} from '../utills/APICalls';


const EvolutionChain = ({ url }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        getPokemon(url)
        .then((data) => {
            setPokemon(data);
        })
    }, [url]);

    return (
        <>
        {pokemon && (
            <div className="flex flex-col items-center justify-center font-pokemonName -space-y-6">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>{pokemon.name}</p>
            </div>
        )}
        </>
    //     <div className="flex flex-col items-center justify">
    //     {pokemon ? (
    //     <>
    //     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    //     <p>{pokemon.name}</p>
    //     </>
    //     ): (
    //         <p>Loading...</p>
    //     )}
    // </div>
    
        )
}
export default EvolutionChain;