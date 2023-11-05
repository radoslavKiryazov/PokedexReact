import usePokemonDisplay from "../customHooks/usePokemonDisplay";
import EvolutionChain from "./EvolutionChain";
import StatsPanel from "./StatsPanel";
import PokemonInfo from "./PokemonInfo";
import AbilitiesPanel from "./AbilitiesPanel";
import { usePokemonContext } from "../context/PokemonContext";
import { buildDynamicColor } from "../utills/helperFunctions";

const PokemonDisplay = () => {
    const { selectedPokemon } = usePokemonContext();
    const url = selectedPokemon && selectedPokemon.species.url;
    const { formatWeight, formatHeight, species, chain} = usePokemonDisplay(url);
    const colorVariant = selectedPokemon && buildDynamicColor(selectedPokemon.types);

    return (
        <div className="flex flex-row space-x-5 w-[1300px] h-[550px]  justify-center items-center font-pokemonName" key={selectedPokemon.id}>
            <div className="flex flex-col w-[620px] h-[540px] space-y-1 justify-center items-center">
                <PokemonInfo id={selectedPokemon.id} name={selectedPokemon.name} height={formatHeight(selectedPokemon.height)} weight={formatWeight(selectedPokemon.weight)} pokeimage={selectedPokemon.sprites.other["official-artwork"].front_default} blurb={species.blurb} colorVariant={colorVariant}/>
                <EvolutionChain chain={chain} colorVariant={colorVariant}/>
            </div>
            <StatsPanel stats={selectedPokemon.stats} types={selectedPokemon.types} key={selectedPokemon.stats} colorVariant={colorVariant}/>
            <AbilitiesPanel abilities={selectedPokemon.abilities} colorVariant={colorVariant}/>
        </div>

    )

}
export default PokemonDisplay;