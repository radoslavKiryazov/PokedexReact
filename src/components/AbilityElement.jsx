import { capitalizeFirstLetter } from "../utills/helperFunctions";

const AbilityElement = ({ ability }) => {
  return (
    <>
      {ability && (
        <div className="flex flex-col font-pokemonName bg-gray-200/20 rounded-2xl p-3 animate-fade-down">
          <h1 className="text-2xl">{capitalizeFirstLetter(ability.name)}</h1>
          <p>{ability.short_effect}</p>
        </div>
      )}
    </>
  );
};
export default AbilityElement;
