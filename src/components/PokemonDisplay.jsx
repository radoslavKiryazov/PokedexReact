import usePokemonDisplay from "../customHooks/usePokemonDisplay";
import StatsPanel from "./StatsPanel";
import PokemonInfo from "./PokemonInfo";
import { usePokemonContext } from "../context/PokemonContext";
import { buildDynamicColor } from "../utills/helperFunctions";
import Evolution from "./Evolutions";
import Abilities from "./Abilities";

const PokemonDisplay = () => {
  const { selectedPokemon } = usePokemonContext();
  const { species, abilities, evolutions, loading } = usePokemonDisplay();
  const colorVariant =
    selectedPokemon && buildDynamicColor(selectedPokemon.types);

  return (
    <div
      className="flex flex-row space-x-5 w-[1300px] h-[550px]  justify-center items-center font-pokemonName"
      key={selectedPokemon.id}
    >
      <div className="flex flex-col w-[620px] h-[540px] space-y-1 justify-center items-center">
        <PokemonInfo colorVariant={colorVariant} blurb={species.blurb} />
        <h1 className="text-5xl animate-fade"> EVOLUTION CHAIN </h1>
        <Evolution evolutions={evolutions} colorVariant={colorVariant} />
      </div>
      <StatsPanel colorVariant={colorVariant} />
      {loading ? (
        <h1 className="font-pokemonName text-2xl">LOADING</h1>
      ) : (
        <Abilities abilities={abilities} colorVariant={colorVariant} />
      )}
    </div>
  );
};
export default PokemonDisplay;
