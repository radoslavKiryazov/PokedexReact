import { useEffect } from "react";
import { useState } from "react";
import {
    capitalizeFirstLetter,
} from "../utills/helperFunctions";

const AbilityBox = ({ url }) => {
    const [ability, setAbility] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const englishEffect = data.effect_entries.find((effect) => effect.language.name === "en");
                if(englishEffect) {
                    setAbility({...data, short_effect: englishEffect.short_effect});
                } 


            });
    });
    
    return (
        <>
        {ability && (
        <div className="flex flex-col font-pokemonName bg-blue-500/70 rounded-2xl p-1">
            <h1 className="text-2xl">{capitalizeFirstLetter(ability.name)}</h1>
            <p>{ability.short_effect}</p>
        </div>
        
        )
        }

        </>

    )
    


}
export default AbilityBox;