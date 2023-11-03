import { usePokemonContext } from "../context/PokemonContext";

const useToPokedex = () => {
  const { setSelectedPokemon } = usePokemonContext();

  const onReturnToPokedex = () => {
    setSelectedPokemon(null);
  };

  return { onReturnToPokedex };
};
export default useToPokedex;
