import { createContext, useContext, useRef, useState } from "react";

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
  const [pageNumber, setPageNumber] = useState(1);

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
