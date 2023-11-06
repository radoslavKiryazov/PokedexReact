import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pageData, setPageData] = useState({
    result: [],
    next: null,
    previous: null,
  });

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, setSelectedPokemon, pageData, setPageData }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
