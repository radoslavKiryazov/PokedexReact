import PokedexNavigation from "./PokedexNavigation";
import PokemonDisplay from "./PokemonDisplay";
const PokemonShowcase = () => {
  return (
    <div className="flex flex-row space-x-1 w-[1400px] h-[550px] ">
      <PokedexNavigation />
      <PokemonDisplay />
    </div>
  );
};
export default PokemonShowcase;
