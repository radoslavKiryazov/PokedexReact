import PokeCard from "./PokeCard";
import usePokeGrid from "../customHooks/usePokeGrid";

const PokeGrid = () => {
    const {pokemonData,
        onNextPage,
        onPreviousPage,
        nextPageData,
        previousPageData} = usePokeGrid();
        
    return (
        <>
        <div className="grid grid-cols-4 gap-9">
        {pokemonData.map((pokemon, index) => (
            <PokeCard key={index} url={pokemon.url}/>
        ))}
        </div>
        <div className="flex flex-row space-x-3 justify-end m-5">
        {previousPageData && (<button className="border" onClick={onPreviousPage}> Previous </button>)}
        {nextPageData && (<button className="border" onClick={onNextPage}> Next </button>)}
        </div>
        </>  
    
    );





}
export default PokeGrid;