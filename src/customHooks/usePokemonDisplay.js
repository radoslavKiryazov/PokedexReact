import { useState, useEffect } from "react";

const usePokemonDisplay = (url) => {
  const [species, setSpecies] = useState({});

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
  }, []);

  const formatHeight = (decimeters) => {
    return Math.round(decimeters * 0.1 * 100) / 100 + " m";
  };
  return { formatWeight, species, formatHeight };
};

export default usePokemonDisplay;
