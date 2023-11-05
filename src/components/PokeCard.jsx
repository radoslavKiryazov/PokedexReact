import CardID from "./CardID"
import CardTypeBox from "./CardTypeElement"
import usePokeCard from "../customHooks/usePokeCard"
import pokeball from "../assets/pokeball.png"
import { usePokemonContext } from "../context/PokemonContext"

const PokeCard = ({ url }) => {
    const { pokemon, colorVariant, name, speed, accelerate, decelerate } = usePokeCard(url);
    const { setSelectedPokemon } = usePokemonContext();

    return (
        <>
            {pokemon ? (
                <div className={`flex flex-row ${colorVariant} w-[250px] h-[100px] p-2 rounded-3xl cursor-pointer animate-fade shadow-xl border-2 border-opacity-60 border-black`} onClick={() => setSelectedPokemon(pokemon)} onMouseEnter={accelerate} onMouseLeave={decelerate}>
                    <div className="flex justify-center flex-col w-[190px] -space-y-0">
                        <CardID id={pokemon.id} />
                        <h1 className="text-xl font-pokemonName text animate-fade-right">{name}</h1>
                        <div className="flex flex-row space-x-2">
                            {pokemon.types.map((type, index) => (
                                <CardTypeBox type={type.type.name} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center pb-5">
                        <img src={pokeball} alt="pokeball" className={`relative w-[150px] h-[100px] opacity-40 animate-spin ${speed}`} />
                        <img className="w-[100px] h-[100px] absolute animate-fade-down" src={pokemon.sprites.other["official-artwork"].front_default} alt="PokemonImage" />
                    </div>
                </div>
            ) : (
                <div className={`flex flex-row bg-gray-200/70 w-[250px] h-[100px] p-2 rounded-3xl cursor-pointer animate-fade`}>
                    <h1 className="font-pokemonName text-xl"> Encountering a wild Pokémon! </h1>
                </div>
            )}
        </>


    )


}
export default PokeCard;