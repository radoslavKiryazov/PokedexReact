import heightimg from "../assets/height.png";
import weightimg from "../assets/weight.png";
import {
    capitalizeFirstLetter,
} from "../utills/helperFunctions";

const PokemonInfo = ({ id,  name, weight, height, pokeimage, blurb }) => {
    return (
        <div className="flex flex-col w-[620px] h-[400px] bg-blue-200/50 rounded-3xl p-1">
                    <div className="flex flex-row h-full ">
                        <div className="flex flex-col opacity-40 ">
                            <h1 className="font-pokemonName text-6xl">{capitalizeFirstLetter(name)}</h1>
                            <h1 className="font-pokemonName text-7xl">#{id}</h1>
                            <div className="flex flex-row space-x-1">
                                <img className="w-[30px] h-[30px]" src={weightimg} alt="weight" />
                                <p className="font-pokemonName text-2xl">{weight} </p>
                                <img className="w-[30px] h-[30px]" src={heightimg} alt="height" />
                                <p className="font-pokemonName text-2xl">{height}</p>
                            </div>
                            <div className="flex flex-col p-1 w-[350px] h-[150px]">
                                    <h1 className="font-pokemonName text-md">{blurb}</h1>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                        <img className="w-[300px] h-[250px]" src={pokeimage} alt={name} />
                        </div>
                        </div>
                </div>
    )

}
export default PokemonInfo;