import {useState, useEffect} from "react";
import PokeCard from "./PokeCard";

const PokeGrid = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [nextPageData, setNextPageData] = useState(null);
    const [previousPageData, setPreviousPageData] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        .then(response => response.json())
        .then(data => {
            setNextPageData(data.next);
            setPreviousPageData(data.previous);
            setPokemonData(data.results)});
    }, [])

    const onNextPage = () => {
        fetch(nextPageData)
        .then(response => response.json())
        .then(data => {
            setNextPageData(data.next)
            setPokemonData(data.results)
            setPreviousPageData(data.previous)
        });
    }
    const onPreviousPage = () => {
        fetch(previousPageData)
        .then(response => response.json())
        .then(data => {
            setNextPageData(data.next);
            setPreviousPageData(data.previous);
            setPokemonData(data.results)});
    }
    return (
        <>
        <div className="grid grid-cols-4 gap-7">
        {pokemonData.map((pokemon, index) => (
            <PokeCard key={index} url={pokemon.url}/>
        ))}
        </div>
        <div className="flex flex-row space-x-3 justify-end m-5">
        {previousPageData && (<button className="border" onClick={onPreviousPage}> Previous </button>)}
        {nextPageData && (<button className="border" onClick={onNextPage}> Next </button>)}
        </div>
        </>  
    
    );





}
export default PokeGrid;