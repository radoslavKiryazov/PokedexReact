import pokedex from "../assets/pokedex.gif";
import useToPokedex from "../customHooks/useToPokedex";
import forward from "../assets/forwardbutton.png";
import back from "../assets/backbutton.png";

const ToPokedex = () => {
    const {onReturnToPokedex} = useToPokedex();
    return (
        <div className="flex flex-row rounded-3xl w-[620px] space-x-5">
                <div className="flex flex-row bg-blue-200/50 items-center space-x-3 cursor-pointer h-[100px] w-[400px] rounded-3xl" onClick={onReturnToPokedex}>
                <img className="w-[90px] h-[90px]" src={pokedex} alt="pokedex "/>
                <h1 className="font-pokemonName text-5xl">RETURN TO POKEDEX</h1>
                </div>
                <div className="flex space-x-3 font-pokemonName text-2xl">
                <div className="flex flex-col items-center justify-center rounded-3xl bg-blue-200/50 w-[100px] h-[100px]"> 
                PREVIOUS 
                <img src={back} alt="back" />
                
                </div>

                <div className="flex flex-col items-center justify-center rounded-3xl bg-blue-200/50 w-[100px] h-[100px]"> 
                <img src={forward} alt="forward" />
                
                NEXT 
                </div>
                </div>
                </div>
    )

}
export default ToPokedex;