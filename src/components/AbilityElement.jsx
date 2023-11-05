import {
    capitalizeFirstLetter,
} from "../utills/helperFunctions";
import useAbilityBox from "../customHooks/useAbilityElement";

const AbilityElement = ({ url }) => {
    const ability = useAbilityBox(url);
    
    return (
        <>
        {ability && (
        <div className="flex flex-col font-pokemonName bg-blue-500/70 rounded-2xl p-1 animate-fade-down">
            <h1 className="text-2xl">{capitalizeFirstLetter(ability.name)}</h1>
            <p>{ability.short_effect}</p>
        </div>
        
        )
        }

        </>

    )
    


}
export default AbilityElement;