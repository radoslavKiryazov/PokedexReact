import { useEffect, useState } from 'react';
import {getPokemon} from '../utills/APICalls';
import { usePokemonContext } from '../context/PokemonContext';
import { capitalizeFirstLetter } from '../utills/helperFunctions';


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
            <div className="flex flex-col items-center justify-center font-pokemonName text-xl -space-y-4 pb-2 animate-ease-in-out cursor-pointer" onClick={onClick}>
                <img className='w-[100px] h-[100px] animate-fade-down' src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p className='animate-fade-up text-base'>{capitalizeFirstLetter(pokemon.name)}</p>
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