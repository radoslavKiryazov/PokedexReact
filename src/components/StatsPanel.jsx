import StatElement from "./StatElement";
import DisplayTypeElement from "./DisplayTypeElement";
import { usePokemonContext } from "../context/PokemonContext";

const StatsPanel = ({ colorVariant }) => {
  const { selectedPokemon } = usePokemonContext();

  return (
    <div
      className={`flex flex-col items-center ${colorVariant} p-2 w-[300px] h-[540px] border-opacity-60 rounded-3xl animate-fade-up border-2 border-black shadow-2xl`}
    >
      <h1 className="font-pokemonName text-4xl animate-fade"> STATS </h1>
      {selectedPokemon.stats.map((stat) => (
        <StatElement
          stat={stat.stat.name}
          value={stat.base_stat}
          key={stat.stat.name}
        />
      ))}
      <h1 className="font-pokemonName text-4xl pt-5 animate-fade"> TYPE </h1>

      <div className="flex flex-row space-x-3 m-1">
        {selectedPokemon.types.map((type) => (
          <DisplayTypeElement type={type.type.name} key={type.slot} />
        ))}
      </div>
    </div>
  );
};
export default StatsPanel;
