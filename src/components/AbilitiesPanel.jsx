import AbilityBox from "./AbilityBox";

const AbilitiesPanel = ({abilities}) => {
    return (
        <div className="flex flex-col bg-blue-200/50 w-[300px] h-[540px] rounded-3xl px-2">
                <div className="flex items-center justify-center">
                    <h1 className="font-pokemonName text-4xl"> ABILITIES: </h1>
                    </div>
                <div className="font flex-col space-y-5">

                {abilities.map((ability) => (
                    <AbilityBox url={ability.ability.url} key={ability.ability.name}/>
                ))}
                </div>

            </div>
    )

}
export default AbilitiesPanel;