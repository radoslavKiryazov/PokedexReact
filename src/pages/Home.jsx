import PokeGrid from "../components/PokeGrid";
import { usePokemonContext } from "../context/PokemonContext";
import PokemonShowcase from "../components/PokemonShowcase";

const Home = () => {
    const { selectedPokemon, pageData } = usePokemonContext();

    return (
        <div className="flex flex-col">
            {selectedPokemon ?
                (<PokemonShowcase/>) :
            (<PokeGrid pageData={pageData.result} nextPageData={pageData.next} previousPageData={pageData.previous}/>)}
        </div>

    );
}
export default Home;