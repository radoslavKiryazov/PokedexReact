import AbilityElement from "./AbilityElement";

const Abilities = ({ abilities, colorVariant }) => {
  return (
    <div
      className={`flex flex-col ${colorVariant} w-[300px] h-[540px] rounded-3xl px-2 shadow-2xl border-opacity-60 animate-fade-down border-2 border-black`}
    >
      <div className="flex items-center justify-center">
        <h1 className="font-pokemonName text-4xl animate-fade"> ABILITIES: </h1>
      </div>
      <div className="font flex-col space-y-3 pt-2">
        {abilities.map((ability) => (
          <AbilityElement ability={ability} key={ability.id} />
        ))}
      </div>
    </div>
  );
};
export default Abilities;
