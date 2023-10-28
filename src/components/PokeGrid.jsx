import PokeCard from "./PokeCard";
import usePokeGrid from "../customHooks/usePokeGrid";
import backbutton from '../assets/backbutton.png'
import forwardbutton from '../assets/forwardbutton.png'

const PokeGrid = () => {
    const {pokemonData,
        onNextPage,
        onPreviousPage,
        nextPageData,
        previousPageData,
        pageNumber} = usePokeGrid();

        
        
    return (
        <>
        <div className="flex flex-row ">
        <div className="flex items-center justify-center w-10">
        {previousPageData && (<button className="border" onClick={onPreviousPage}><img src={backbutton} alt="backbutton"/></button>)}
        </div>

        <div className="grid grid-cols-5 gap-1 w-[1350px] h-[500px]">
        {pokemonData.map((pokemon) => 
        (<PokeCard url={pokemon.url} key={pokemon.name}/>))}
        </div>

        <div className="flex items-center justify-center w-10">
        {nextPageData && (<button className="border" onClick={onNextPage}><img src={forwardbutton} alt="forwardbutton"/></button>)}
        </div>
        </div>
        </>  
    
    );





}
export default PokeGrid;