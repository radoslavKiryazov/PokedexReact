import { useEffect, useState } from 'react';
import {getPokemon} from '../utills/APICalls';
import { usePokemonContext } from '../context/PokemonContext';


const EvolutionElement = ({ url }) => {
    const [pokemon, setPokemon] = useState(null);
        const {setSelectedPokemon} = usePokemonContext();

    useEffect(() => {
        getPokemon(url)
        .then((data) => {
            setPokemon(data);
        })
    }, [url]);

    const onClick = () => {
        setSelectedPokemon(pokemon);
    }

    return (
        <>
        {pokemon && (
            <div className="flex flex-col items-center justify-center font-pokemonName text-xl -space-y-4 animate-ease-in-out" onClick={onClick}>
                <img className='w-[100px] h-[100px] animate-fade-down' src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p className='animate-fade-up'>{pokemon.name}</p>
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
export default EvolutionElement;