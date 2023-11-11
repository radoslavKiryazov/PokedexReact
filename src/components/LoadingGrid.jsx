import waiting from "../assets/waiting.gif";
import useLoadingGrid from "../customHooks/useLoadingGrid";
const LoadingGrid = () => {
  const text = useLoadingGrid();

  return (
    <div className="flex flex-col w-[1050px] h-[600px] justify-center items-center font font-pokemonName text-9xl">
      <img src={waiting} alt="loading..." />

      <h1>{text}</h1>
    </div>
  );
};
export default LoadingGrid;
