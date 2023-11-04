import forward from "../assets/forwardbutton.png";
import back from "../assets/backbutton.png";
import { getPokemon } from "../utills/APICalls";
import {usePokemonContext} from "../context/PokemonContext";
import PokedexNavigationButton from "./PokedexNavigationButton";


const NavigationConsole = () => {

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
    
    return (
        <div className="font-pokemonName flex flex-col space-y-5 text-2xl">
        {selectedPokemon.id === 1 ? (
    <PokedexNavigationButton onClick={onNextClick} image={forward} value="NEXT" width="w-[100px]" />
  ) : selectedPokemon.id === 1017 ? ( //1017 last pokemon in the pokedex according to bulbpedia maybe I shouldnt fetch after that
    <PokedexNavigationButton onClick={onBackClick} image={back} value="PREVIOUS" width="w-[100px]" />
  ) : (
    <>
    <PokedexNavigationButton onClick={onNextClick} image={forward} value="NEXT" width="w-[100px]" />
    <PokedexNavigationButton onClick={onBackClick} image={back} value="PREVIOUS" width="w-[100px]" />
    </>
  )}
            </div>

    )

}
export default NavigationConsole;