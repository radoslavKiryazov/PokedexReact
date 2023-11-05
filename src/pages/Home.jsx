import PokeGrid from "../components/PokeGrid";
import { usePokemonContext } from "../context/PokemonContext";
import usePokeGrid from "../customHooks/usePokeGrid";
import PokemonShowcase from "../components/PokemonShowcase";

const Home = () => {
    const { selectedPokemon } = usePokemonContext();
    const { pageData,
        onNextPage,
        onPreviousPage,
        nextPageData,
        previousPageData,
        pageNumber,
        jumpToStart
    } = usePokeGrid();


    return (
        <div className="flex flex-col">
            {selectedPokemon ?
                (<PokemonShowcase/>) :
            (<PokeGrid pageData={pageData} onNextPage={onNextPage} onPreviousPage={onPreviousPage} nextPageData={nextPageData} previousPageData={previousPageData} pageNumber={pageNumber} onJumpToStart={jumpToStart} />)}
        </div>

    );
}
export default Home;