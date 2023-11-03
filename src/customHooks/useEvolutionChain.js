import { useState, useEffect } from "react";

const useEvolutionChain = (chain) => {
  const [basePokemon, setBasePokemon] = useState(null);
  const [evolvesTo, setEvolvesTo] = useState(null);
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    fetch(chain)
      .then((res) => res.json())
      .then((data) => {
        const speciesUrl = data.chain.species?.url;
        const evolvesToUrl =
          data.chain.evolves_to[0]?.evolves_to[0]?.species.url;
        const evolutionData = data.chain.evolves_to || [];

        setBasePokemon(speciesUrl);
        setEvolvesTo(evolvesToUrl);
        setEvolutions(evolutionData);
      });
  }, [chain]);

  return { basePokemon, evolvesTo, evolutions };
};
export default useEvolutionChain;
