import { useState, useEffect } from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { replaceSpeciesWithPokemon } from "../utills/helperFunctions";
import { getPokemon } from "../utills/APICalls";
import { getAbility } from "../utills/APICalls";
import { getEvolutionChain } from "../utills/APICalls";
import { getPokemonSpecies } from "../utills/APICalls";

const usePokemonDisplay = () => {
  const { selectedPokemon } = usePokemonContext();
  const [species, setSpecies] = useState({});
  const [abilities, setAbilities] = useState([]);
  const [evolutions, setEvolutions] = useState([]);

  const chainURL = species.evolution_chain && species.evolution_chain.url;
  const speciesURL = selectedPokemon && selectedPokemon.species.url;

  useEffect(() => {
    fetchSpecies();
    if (species.evolution_chain) {
      const chain = species.evolution_chain.url;
      fetchAbilitiesData();
      fetchEvolutions(chain);
    }
  }, [selectedPokemon]);

  useEffect(() => {
    if (species.evolution_chain) {
      const chain = species.evolution_chain.url;
      fetchAbilitiesData();
      fetchEvolutions(chain);
    }
  }, [species]);

  const formatWeight = (weightInGrams) => {
    const weightInKilograms = weightInGrams / 10;
    return weightInKilograms + " kg";
  };

  const fetchAbilitiesData = async () => {
    const promises = selectedPokemon.abilities.map(async (ability) => {
      try {
        const response = await getAbility(ability.ability.url);
        return response;
      } catch (error) {
        console.error("Error fetching Pokemon Ability", error);
      }
    });
    const fetchedAbilites = await Promise.all(promises);
    setAbilities(fetchedAbilites);
  };

  const fetchEvolutions = async () => {
    try {
      const response = await getEvolutionChain(chainURL);

      const results = await Promise.all(
        response.map(async (url) => {
          const response = await getPokemon(replaceSpeciesWithPokemon(url));
          return response;
        })
      );
      setEvolutions(results);
    } catch (error) {
      console.error("Error fetching evolution chain data:", error);
    }
  };
  const fetchSpecies = async () => {
    try {
      const response = await getPokemonSpecies(speciesURL);
      setSpecies(response);
    } catch (error) {
      console.error("Error fetching Pokemon species:", error);
    }
  };

  const formatHeight = (decimeters) => {
    return Math.round(decimeters * 0.1 * 100) / 100 + " m";
  };

  return {
    formatWeight,
    formatHeight,
    species,
    abilities,
    evolutions,
  };
};

export default usePokemonDisplay;
