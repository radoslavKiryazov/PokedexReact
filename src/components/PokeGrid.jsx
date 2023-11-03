import PokeCard from "./PokeCard";
import backbutton from '../assets/backbutton.png'
import forwardbutton from '../assets/forwardbutton.png'

const PokeGrid = ({ pokemonData, onNextPage, onPreviousPage, nextPageData, previousPageData }) => {
    return (
        <>
            <div className="flex flex-row ">
                <div className="flex items-center justify-center w-10">
                    {previousPageData && (<button className="border-2 border-black rounded-full" onClick={onPreviousPage}><img className="w-7 h-7" src={backbutton} alt="backbutton" /></button>)}
                </div>

                <div className="md:grid grid-cols-4 gap-3 h-fil p-2 w-[1050px] h-[600px] md:h-[500px] lg:w-[1050px] lg:h-[500px]">
                    {pokemonData.map((pokemon) =>
                        (<PokeCard url={pokemon.url} key={pokemon.name} />))}
                </div>

                <div className="flex items-center justify-center w-10">
                    {nextPageData && (<button className="border-2 border-black rounded-full" onClick={onNextPage}><img className="w-7 h-7" src={forwardbutton} alt="forwardbutton" /></button>)}
                </div>
            </div>
        </>

    );





}
export default PokeGrid;