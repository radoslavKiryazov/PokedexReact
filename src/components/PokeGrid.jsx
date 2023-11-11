import PokeCard from "./PokeCard";
import backbutton from "../assets/backbutton.png";
import forwardbutton from "../assets/forwardbutton.png";
import usePokeGrid from "../customHooks/usePokeGrid";
import LoadingGrid from "./LoadingGrid";
import PokeGridNavigationButton from "./PokeGridNavigationButton";

const PokeGrid = ({ pageData }) => {
  const {
    pageNumber,
    onNextPage,
    onPreviousPage,
    jumpToStart,
    loading,
    pokemons,
  } = usePokeGrid();

  if (loading) return <LoadingGrid />;

  return (
    <>
      <div className="flex flex-row">
        <div className="flex items-center justify-center w-10 ">
          {pageData.previous && (
            <PokeGridNavigationButton
              onClick={onPreviousPage}
              direction={backbutton}
            />
          )}
        </div>
        <div className="flex flex-col w-[1050px] h-[600px] ">
          <div className="md:grid grid-cols-4 gap-3 h-fil p-2 w-[1050px] h-[600px]">
            {pokemons.map((pokemon) => (
              <PokeCard pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
          <div
            className="flex flex-row font-pokemonName px-2 justify-between text-3xl"
            key={pageNumber}
          >
            <h1 className="animate-fade-right">{pageNumber}</h1>
            {pageNumber >= 5 && (
              <button
                className="animate-fade-left hover:text-4xl transition-all"
                onClick={jumpToStart}
              >
                {" "}
                Jump To Start{" "}
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-10 ">
          {pageData.next && (
            <PokeGridNavigationButton
              onClick={onNextPage}
              direction={forwardbutton}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default PokeGrid;
