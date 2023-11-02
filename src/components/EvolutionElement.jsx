import { useEffect, useState } from 'react';
import {getPokemon} from '../utills/APICalls';
import { usePokemonContext } from '../context/PokemonContext';
import { capitalizeFirstLetter } from '../utills/helperFunctions';
import pokeball from "../assets/pokeball2.gif"


const EvolutionElement = ({ url }) => {
    const [pokemon, setPokemon] = useState(null);
        const {setSelectedPokemon} = usePokemonContext();
    const [suggest, setSuggest] = useState(false);

    useEffect(() => {
        getPokemon(url)
        .then((data) => {
            setPokemon(data);
        })
    }, [url]);

    const onClick = () => {
        setSelectedPokemon(pokemon);
    }

    const onMouseEnter = () => {
        setSuggest(true);

    }
    const onMouseLeave = () => {
        setSuggest(false)
    }


    return (
        <div className="flex flex-col items-center w-[100px] h-[100px] justify-center font-pokemonName text-xl -space-y-4 pb-2 animate-ease-in-out cursor-pointer" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {pokemon && (
            <>
            {suggest ? (
            <>
            <img className='relative w-[100px] h-[100px] animate-fade-down' src={pokeball} alt={pokemon.name} />
            <p className='animate-fade-up text-base'>{capitalizeFirstLetter(pokemon.name)}</p>
                
                </>
                ) : 
                (
                    <>
                <img className='relative w-[100px] h-[100px] animate-fade-down' src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p className='animate-fade-up text-base'>{capitalizeFirstLetter(pokemon.name)}</p>
                </>
                )}
                
            </>
        )}
            </div>
        
        // <>
        // {pokemon && (
        //     <div className="flex flex-col items-center justify-center font-pokemonName text-xl -space-y-4 pb-2 animate-ease-in-out cursor-pointer" onClick={onClick} onMouseEnter={onMouseEnter} on onMouseLeave={onMouseLeave}>
        //         <img className='relative w-[100px] h-[100px] animate-fade-down' src={pokemon.sprites.front_default} alt={pokemon.name} />
        //         <p className='animate-fade-up text-base'>{capitalizeFirstLetter(pokemon.name)}</p>
        //     </div>
        // )}
        // </>
    
        )
}
export default EvolutionElement;