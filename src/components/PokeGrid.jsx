import PokeCard from "./PokeCard";
import usePokeGrid from "../customHooks/usePokeGrid";

const PokeGrid = () => {
    const {pokemonData,
        onNextPage,
        onPreviousPage,
        nextPageData,
        previousPageData,
        pageNumber} = usePokeGrid();

        
        
    return (
        <>
        <div className="grid grid-cols-4 gap-5">
        {pokemonData.map((pokemon) => 
        (<PokeCard url={pokemon.url} key={pokemon.name}/>))}
        </div>
        <div className="flex flex-row space-x-3 justify-between m-5 animate-pulse">
        {pageNumber}
        <div className="space-x-5">
        {previousPageData && (<button className="border" onClick={onPreviousPage}> Previous </button>)}
        {nextPageData && (<button className="border" onClick={onNextPage}> Next </button>)}
        </div>
        </div>
        </>  
    
    );





}
export default PokeGrid;