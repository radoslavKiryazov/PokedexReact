import { capitalizeFirstLetter } from "../utills/helperFunctions";
import pokeball from "../assets/pokeball2.gif";
import useEvolutionElement from "../customHooks/useEvolutionElement";

const EvolutionElement = ({ pokemon }) => {
  const { onClick, onMouseEnter, onMouseLeave, suggest } =
    useEvolutionElement(pokemon);

  const defaultRender = () => (
    <>
      <img
        className="relative w-[100px] h-[100px] animate-fade-down"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="animate-fade-up text-base">
        {capitalizeFirstLetter(pokemon.name)}
      </p>
    </>
  );

  const suggestRender = () => (
    <img
      className="relative w-[100px] h-[100px] animate-fade-down"
      src={pokeball}
      alt={pokemon.name}
    />
  );

  return (
    <div
      className="flex flex-col items-center w-[100px] h-[100px] justify-center font-pokemonName text-xl -space-y-4 pb-2 animate-ease-in-out cursor-pointer"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {suggest ? suggestRender() : pokemon && defaultRender()}
    </div>
  );
};
export default EvolutionElement;
