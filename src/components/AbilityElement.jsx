import {
    capitalizeFirstLetter,
} from "../utills/helperFunctions";
import useAbilityBox from "../customHooks/useAbilityElement";

const AbilityElement = ({ url }) => {
    const ability = useAbilityBox(url);
    
    return (
        <>
        {ability && (
        <div className="flex flex-col font-pokemonName bg-gray-200/20 rounded-2xl p-3 animate-fade-down">
            <h1 className="text-2xl">{capitalizeFirstLetter(ability.name)}</h1>
            <p>{ability.short_effect}</p>
        </div>
        
        )
        }

        </>

    )
    


}
export default AbilityElement;