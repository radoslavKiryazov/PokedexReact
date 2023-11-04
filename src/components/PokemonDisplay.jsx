import usePokemonDisplay from "../customHooks/usePokemonDisplay";
import EvolutionChain from "./EvolutionChain";
import StatsPanel from "./StatsPanel";
import PokemonInfo from "./PokemonInfo";
import AbilitiesPanel from "./AbilitiesPanel";

const PokemonDisplay = ({ pokemon }) => {
    const url = pokemon && pokemon.species.url;
    const { formatWeight, formatHeight, blurb, chain} = usePokemonDisplay(url);
    return (
        <div className="flex flex-row space-x-5 w-[1300px] h-[550px]  justify-center items-center font-pokemonName">
            <div className="flex flex-col w-[620px] h-[540px] space-y-1 justify-center items-center">
                <PokemonInfo id={pokemon.id} name={pokemon.name} height={formatHeight(pokemon.height)} weight={formatWeight(pokemon.weight)} pokeimage={pokemon.sprites.other["official-artwork"].front_default} blurb={blurb}/>
                <EvolutionChain chain={chain}/>
            </div>
            <StatsPanel stats={pokemon.stats} types={pokemon.types} key={pokemon.stats}/>
            <AbilitiesPanel abilities={pokemon.abilities}/>
        </div>

    )

}
export default PokemonDisplay;