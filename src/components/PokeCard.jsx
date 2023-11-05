import CardID from "./CardID"
import CardTypeBox from "./CardTypeElement"
import usePokeCard from "../customHooks/usePokeCard"
import pokeball from "../assets/pokeball.png"
import { usePokemonContext } from "../context/PokemonContext"
import LoadingPokeCard from "./LoadingPokeCard"

const PokeCard = ({ url }) => {
    const { pokemon, colorVariant, name, speed, accelerate, decelerate } = usePokeCard(url);
    const { setSelectedPokemon } = usePokemonContext();

    return (
        <>
            {pokemon ? (
                <div className={`flex flex-row ${colorVariant} w-[250px] h-[100px] p-2 rounded-3xl cursor-pointer animate-fade shadow-xl text-xl border-2 border-opacity-40 border-black hover:border-opacity-100 transition-all hover:text-3xl`} onClick={() => setSelectedPokemon(pokemon)} onMouseEnter={accelerate} onMouseLeave={decelerate}>
                    <div className="flex justify-center flex-col w-[190px] -space-y-0">
                        <CardID id={pokemon.id} />
                        <h1 className="font-pokemonName text animate-fade-right">{name}</h1>
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
                <LoadingPokeCard />
            )}
        </>


    )


}
export default PokeCard;