import { useEffect, useState } from "react";
import PokeGrid from "../components/PokeGrid";
import PokemonDisplay from "../components/PokemonDisplay";
import { usePokemonContext } from "../context/PokemonContext";
import usePokeGrid from "../customHooks/usePokeGrid";

const Home = () => {
    const { selectedPokemon } = usePokemonContext();
    const { pokemonData,
        onNextPage,
        onPreviousPage,
        nextPageData,
        previousPageData
    } = usePokeGrid();
    const [stashedPage, setStashedPage] = useState(null);

    useEffect(() => {
        if (selectedPokemon) {
            setStashedPage({ next: nextPageData, previous: previousPageData, data: pokemonData });
            console.log(stashedPage);
        } else {
            setStashedPage(null);
        }
    }, [selectedPokemon]);

    return (
        <div className="flex flex-col">
            {selectedPokemon ?
                (<PokemonDisplay pokemon={selectedPokemon} key={selectedPokemon.id} />) :
                (stashedPage ? (<PokeGrid pokemonData={stashedPage.data} onNextPage={onNextPage} onPreviousPage={onPreviousPage} nextPageData={stashedPage.next} previousPageData={stashedPage.previous} />)
                    : (<PokeGrid pokemonData={pokemonData} onNextPage={onNextPage} onPreviousPage={onPreviousPage} nextPageData={nextPageData} previousPageData={previousPageData} />))}
        </div>

    );
}
export default Home;