import PokedexNavigation from "./PokedexNavigation";
import PokemonDisplay1 from "./PokemonDisplay";
import { usePokemonContext } from "../context/PokemonContext";
const PokemonShowcase = () => {
    const { selectedPokemon } = usePokemonContext();

    return (
        <div className="flex flex-row space-x-1 w-[1400px] h-[550px] ">
        <PokedexNavigation />
        <PokemonDisplay1 pokemon={selectedPokemon} key={selectedPokemon.id}/>
        </div>

    )

}
export default PokemonShowcase;