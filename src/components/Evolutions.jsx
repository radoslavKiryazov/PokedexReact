import EvolutionElement from "./EvolutionElement";

const Evolution = ({ evolutions, colorVariant }) => {
  return (
    <div
      className={`flex flex-row justify-start w-[620px] h-[100px] ${colorVariant} items-center font-pokemonName rounded-3xl overflow-y-hidden border-opacity-60 overflow-x-auto animate-fade-up border-2 border-black shadow-2xl `}
    >
      {evolutions.map((pokemon) => (
        <EvolutionElement pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};
export default Evolution;
