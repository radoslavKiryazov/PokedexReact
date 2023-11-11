import PokeCardInfo from "./PokeCardInfo";
import usePokeCard from "../customHooks/usePokeCard";
import { usePokemonContext } from "../context/PokemonContext";
import LoadingPokeCard from "./LoadingPokeCard";
import PokeCardTypes from "./PokeCardTypes";
import PokeCardImage from "./PokeCardImage";

const PokeCard = ({ pokemon }) => {
  const { colorVariant, name, speed, accelerate, decelerate } =
    usePokeCard(pokemon);
  const { setSelectedPokemon } = usePokemonContext();

  return (
    <>
      {pokemon ? (
        <div
          className={`flex flex-row ${colorVariant} w-[250px] h-[100px] p-2 rounded-3xl cursor-pointer animate-fade shadow-2xl text-xl border-2 border-opacity-40 border-black hover:border-opacity-100 transition-all hover:text-3xl`}
          onClick={() => setSelectedPokemon(pokemon)}
          onMouseEnter={accelerate}
          onMouseLeave={decelerate}
        >
          <div className="flex justify-center flex-col w-[190px] -space-y-0">
            <PokeCardInfo id={pokemon.id} name={name} />
            <PokeCardTypes types={pokemon.types} />
          </div>
          <PokeCardImage
            image={pokemon.sprites.other["official-artwork"].front_default}
            speed={speed}
          />
        </div>
      ) : (
        <LoadingPokeCard />
      )}
    </>
  );
};
export default PokeCard;
