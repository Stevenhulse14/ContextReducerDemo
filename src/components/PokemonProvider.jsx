import { createContext, useReducer } from "react";

const initialState = [];
const pokeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.pokemon];
    case "remove":
      return state.filter((pokemon) => pokemon.id !== action.id);
    default:
      return state;
  }
};

export const pokeContext = createContext();

function PokemonProvider({ children }) {
  const [team, dispatch] = useReducer(pokeReducer, initialState);

  return (
    <pokeContext.Provider value={{ team, dispatch }}>
      {children}
    </pokeContext.Provider>
  );
}

export default PokemonProvider;
