import pokedex from "../assets/pokedex.gif";
import { usePokemonContext } from "../context/PokemonContext";

const ToPokedex = () => {
    const { setSelectedPokemon } = usePokemonContext();
    const onReturnToPokedex = () => {
        setSelectedPokemon(null);
    }
    return (
        <div className="flex flex-row bg-blue-200/50 rounded-3xl w-[620px] h-[100px] items-center p-2 space-x-5 cursor-pointer" onClick={onReturnToPokedex}>
                <img className="w-[90px] h-[90px]" src={pokedex} alt="pokedex "/>
                <h1 className="font-pokemonName text-6xl">RETURN TO POKEDEX</h1>
                </div>
    )

}
export default ToPokedex;