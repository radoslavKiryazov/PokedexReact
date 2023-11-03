import { useState, useEffect } from "react";

const usePokemonDisplay = (url) => {
  const [species, setSpecies] = useState({});
  const blurb =
    species &&
    species.flavor_text_entries &&
    species.flavor_text_entries[9] &&
    species.flavor_text_entries[9].flavor_text;
  const chain = species.evolution_chain && species.evolution_chain.url;

  const formatWeight = (weightInGrams) => {
    const weightInKilograms = weightInGrams / 10;
    return weightInKilograms + " kg";
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSpecies(data))
      .catch((error) => {
        console.log("Error fetching Pokemon species:", error);
      });
  }, [url]);

  const formatHeight = (decimeters) => {
    return Math.round(decimeters * 0.1 * 100) / 100 + " m";
  };
  return { formatWeight, formatHeight, blurb, chain };
};

export default usePokemonDisplay;
