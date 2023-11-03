import EvolutionChain from "./EvolutionChain";

const EvolutionsPanel = ({ evolutions }) => {
    return (
        <div className="flex justify-start w-[620px] h-[250px] bg-blue-200/50 items-center font-pokemonName rounded-3xl overflow-y-hidden overflow-x-auto">
                    {species.evolution_chain && (
                        <EvolutionChain className chain={species.evolution_chain.url} />)}

                </div>
    )

}
export default EvolutionsPanel;