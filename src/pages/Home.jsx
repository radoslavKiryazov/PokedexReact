import PokeGrid from "../components/PokeGrid";
import {usePokemonContext} from "../context/PokemonContext";
const Home = () => {
    const {selectedPokemon} = usePokemonContext();

    return (
        <div className="flex flex-col">
        {selectedPokemon ? (<h1> {selectedPokemon.name}</h1>) : 
        (<PokeGrid/>)}
        </div>
    
    );
}
export default Home;