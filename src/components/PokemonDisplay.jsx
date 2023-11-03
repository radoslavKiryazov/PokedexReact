import usePokemonDisplay from "../customHooks/usePokemonDisplay";
import EvolutionChain from "./EvolutionChain";
import StatsPanel from "./StatsPanel";
import PokemonInfo from "./PokemonInfo";
import ToPokedex from "./ToPokedex";
import AbilitiesPanel from "./AbilitiesPanel";


const PokemonDisplay = ({ pokemon }) => {
    const url = pokemon && pokemon.species.url;
    const { formatWeight, formatHeight, blurb, chain } = usePokemonDisplay(url);

    return (
        <div className="flex flex-row space-x-10 w-[1300px] h-[550px]">

            <div className="flex flex-col w-[620px] h-[540px] space-y-2 ">
                <ToPokedex />
                <PokemonInfo id={pokemon.id} name={pokemon.name} height={formatHeight(pokemon.height)} weight={formatWeight(pokemon.weight)} pokeimage={pokemon.sprites.other["official-artwork"].front_default} blurb={blurb}/>
                <EvolutionChain chain={chain} />
            </div>

            <StatsPanel stats={pokemon.stats} types={pokemon.types}/>
            <AbilitiesPanel abilities={pokemon.abilities}/>
        </div>




    )

}
export default PokemonDisplay;