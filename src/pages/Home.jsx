import PokeGrid from "../components/PokeGrid";
import PokemonDisplay from "../components/PokemonDisplay";
import {usePokemonContext} from "../context/PokemonContext";

const Home = () => {
    const {selectedPokemon} = usePokemonContext();

    return (
        <div className="flex flex-col">
        {selectedPokemon ? 
        (<PokemonDisplay pokemon={selectedPokemon} key={selectedPokemon.id}/>) : 
        (<PokeGrid/>)}
        </div>
    
    );
}
export default Home;