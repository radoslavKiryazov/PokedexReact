import { useEffect, useState } from "react";
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
    const [stashedPage, setStashedPage] = useState(null);

    useEffect(() => {
        if (selectedPokemon) {
            !stashedPage === pageData && console.log('NEW PAGE');;
        } else {
            setStashedPage(null);
        }
    }, [pageData, selectedPokemon, stashedPage]);

    return (
        <div className="flex flex-col">
            {selectedPokemon ?
                (<PokemonShowcase/>) :
                (stashedPage ? (<PokeGrid pokemonData={stashedPage.data} onNextPage={onNextPage} onPreviousPage={onPreviousPage} nextPageData={stashedPage.next} previousPageData={stashedPage.previous} />)
                    : (<PokeGrid pokemonData={pageData} onNextPage={onNextPage} onPreviousPage={onPreviousPage} nextPageData={nextPageData} previousPageData={previousPageData} pageNumber={pageNumber} onJumpToStart={jumpToStart} />))}
        </div>

    );
}
export default Home;