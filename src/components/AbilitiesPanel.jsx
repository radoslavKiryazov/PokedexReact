import AbilityElement from "./AbilityElement";

const AbilitiesPanel = ({abilities, colorVariant}) => {
    return (
        <div className={`flex flex-col ${colorVariant} w-[300px] h-[540px] rounded-3xl px-2 border-opacity-60 animate-fade-down border-2 border-black`}>
                <div className="flex items-center justify-center">
                    <h1 className="font-pokemonName text-4xl animate-fade"> ABILITIES: </h1>
                    </div>
                <div className="font flex-col space-y-5">

                {abilities.map((ability) => (
                    <AbilityElement url={ability.ability.url} key={ability.ability.name}/>
                ))}
                </div>

            </div>
    )

}
export default AbilitiesPanel;