import { useEffect, useState } from "react";
const Home = () => {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/cinccino`)
        .then(response => response.json())
        .then(data => setPokemon(data));
    }, [])
        
    return (
        <div>
            <h1>This is the Home page</h1>
            { pokemon && (
            <>
            <h1>Pokemon id: {pokemon.order}</h1> 
            <h1>Pokemon name: {pokemon.name}</h1>
            <img src={pokemon.sprites.other.home.front_default} alt="PokemonImage" />
            {pokemon.types.map((type,index) => (
                <>
                <p>
                    Type: {type.type.name}
                </p>
                </>
            ))}
            </>
            ) }

        </div>
    )
}
export default Home;