import forward from "../assets/forwardbutton.png";
import back from "../assets/backbutton.png";
import PokedexNavigationButton from "./PokedexNavigationButton";
import usePokedexNavigationConsole from "../customHooks/usePokedexNavigationConsole";

const NavigationConsole = () => {
  const { onNextClick, onBackClick, selectedPokemon } =
    usePokedexNavigationConsole();

  const renderDefault = () => (
    <>
      <PokedexNavigationButton
        onClick={onNextClick}
        image={forward}
        value="NEXT"
      />
      <PokedexNavigationButton
        onClick={onBackClick}
        image={back}
        value="PREVIOUS"
      />
    </>
  );

  const renderNext = () => (
    <PokedexNavigationButton
      onClick={onNextClick}
      image={forward}
      value="NEXT"
    />
  );
  const renderPrevious = () => (
    <PokedexNavigationButton
      onClick={onBackClick}
      image={back}
      value="PREVIOUS"
    />
  );

  return (
    <div className="font-pokemonName flex flex-col space-y-5 text-2xl">
      {selectedPokemon.id === 1
        ? renderNext()
        : selectedPokemon.id === 1017 //1017 last pokemon in the pokedex according to bulbpedia maybe I shouldnt fetch after that
        ? renderPrevious()
        : renderDefault()}
    </div> //as readable as I could get it ;x
  );
};
export default NavigationConsole;
