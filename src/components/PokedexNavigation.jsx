import pokedex from "../assets/pokedex.gif";
import useToPokedex from "../customHooks/useToPokedex";
import NavigationConsole from "./PokedexNavigationConsole";

const ToPokedex = () => {
  const { onReturnToPokedex } = useToPokedex();

  return (
    <div className="flex flex-col rounded-3xl w-[110px] h-[500px] space-y-5">
      <img
        className="w-[90px] h-[90px] cursor-pointer hover:animate-pulse"
        src={pokedex}
        alt="pokedex"
        onClick={onReturnToPokedex}
      />
      <NavigationConsole />
    </div>
  );
};
export default ToPokedex;
