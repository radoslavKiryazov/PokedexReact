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
  const [pageNumber, setPageNumber] = useState(1); //this entire context class might be overkill, but I wanted to try it out

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
        pageData,
        setPageData,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
