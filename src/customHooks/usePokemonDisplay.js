import { useState, useEffect } from "react";

const usePokemonDisplay = (url) => {
  const [species, setSpecies] = useState({});
  const chain = species.evolution_chain && species.evolution_chain.url;
  const chainID = species.evolution_chain && species.evolution_chain.id;

  const formatWeight = (weightInGrams) => {
    const weightInKilograms = weightInGrams / 10;
    return weightInKilograms + " kg";
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const english_blurb = data.flavor_text_entries.find(
          (flavor_text) => flavor_text.language.name === "en"
        );
        if (english_blurb) {
          setSpecies({ ...data, blurb: english_blurb.flavor_text });
        }
      })
      .catch((error) => {
        console.log("Error fetching Pokemon species:", error);
      });
  }, [url]);

  const formatHeight = (decimeters) => {
    return Math.round(decimeters * 0.1 * 100) / 100 + " m";
  };
  return { formatWeight, formatHeight, species, chain, chainID };
};

export default usePokemonDisplay;
