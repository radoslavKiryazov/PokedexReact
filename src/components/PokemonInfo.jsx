import heightimg from "../assets/height.png";
import weightimg from "../assets/weight.png";
import {
    capitalizeFirstLetter,
} from "../utills/helperFunctions";

const PokemonInfo = ({ id,  name, weight, height, pokeimage, blurb, colorVariant }) => {
    return (
        <div className={`flex flex-col w-[620px] h-[400px] ${colorVariant} border-opacity-60 rounded-3xl p-1 border-2 border-black animate-fade-down`}>
                    <div className="flex flex-row h-full ">
                        <div className="flex flex-col pt-2 pl-2">
                            <h1 className="font-pokemonName text-6xl animate-fade-down">{capitalizeFirstLetter(name)}</h1>
                            <h1 className="font-pokemonName text-7xl animate-fade-down"># {id}</h1>
                            <div className="flex flex-row space-x-1 animate-fade-right">
                                <img className="w-[30px] h-[30px]" src={weightimg} alt="weight" />
                                <p className="font-pokemonName text-2xl">{weight} </p>
                                <img className="w-[30px] h-[30px]" src={heightimg} alt="height" />
                                <p className="font-pokemonName text-2xl">{height}</p>
                            </div>
                            <div className="flex flex-col p-1 w-[350px] h-[150px] animate-fade-right">
                                    <h1 className="font-pokemonName text-md">{blurb}</h1>
                            </div>
                        </div>
                        <div className="flex justify-center items-center animate-fade-left">
                        <img className="w-[300px] h-[250px]" src={pokeimage} alt={name} />
                        </div>
                        </div>
                </div>
    )

}
export default PokemonInfo;