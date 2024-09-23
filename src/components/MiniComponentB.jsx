import { useContext } from "react";
import { pokeContext } from "./PokemonProvider";

function MiniComponentB() {
  const { team, dispatch } = useContext(pokeContext);
  return <div>{team.length}</div>;
}

export default MiniComponentB;
