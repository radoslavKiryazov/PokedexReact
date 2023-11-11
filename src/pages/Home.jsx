import PokeGrid from "../components/PokeGrid";
import { usePokemonContext } from "../context/PokemonContext";
import PokemonShowcase from "../components/PokemonShowcase";
import usePokedex from "../customHooks/usePokedex";

const Home = () => {
  const { selectedPokemon, pageData } = usePokemonContext();
  usePokedex();

  return (
    <div className="flex flex-col">
      {selectedPokemon ? <PokemonShowcase /> : <PokeGrid pageData={pageData} />}
    </div>
  );
};
export default Home;
