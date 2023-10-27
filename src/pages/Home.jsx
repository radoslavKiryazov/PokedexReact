import PokeGrid from "../components/PokeGrid";
import {useState} from 'react';
const Home = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const onPokemonSelected = (pokemon) => {
        console.log(pokemon.name);
        setSelectedPokemon(pokemon);
    }

    return (
        <div className="flex flex-col">
        {selectedPokemon ? (<h1> {selectedPokemon.name}</h1>) : 
        (<PokeGrid onPokemonSelected={onPokemonSelected}/>)}
        </div>
    
    );
}
export default Home;