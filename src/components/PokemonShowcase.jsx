import PokedexNavigation from "./PokedexNavigation";
import PokemonDisplay1 from "./PokemonDisplay";
const PokemonShowcase = () => {

    return (
        <div className="flex flex-row space-x-1 w-[1400px] h-[550px] ">
        <PokedexNavigation />
        <PokemonDisplay1/>
        </div>

    )

}
export default PokemonShowcase;