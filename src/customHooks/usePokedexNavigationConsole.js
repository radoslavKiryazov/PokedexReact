import { usePokemonContext } from "../context/PokemonContext";
import { getPokemon } from "../utills/APICalls";

const usePokedexNavigationConsole = () => {
    const {selectedPokemon ,setSelectedPokemon} = usePokemonContext();
    const base_URL = "https://pokeapi.co/api/v2/pokemon/"

    
    const onNextClick = async () => {
        const newURL = base_URL + (selectedPokemon.id + 1);
        const data = await getPokemon(newURL);
        setSelectedPokemon(data);
    }

    const onBackClick = async () => {
        const newURL = base_URL + (selectedPokemon.id - 1);
        const data = await getPokemon(newURL);
        setSelectedPokemon(data);
    }

    return {onNextClick, onBackClick, selectedPokemon};

}
export default usePokedexNavigationConsole;