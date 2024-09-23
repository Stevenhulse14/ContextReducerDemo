import { useState, useContext } from "react";
import { Header, MiniComponentA } from "./components";
import { pokeContext } from "./components/PokemonProvider";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const { team, dispatch } = useContext(pokeContext);
  const handleClick = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      const { id, name, sprites } = await response.json();

      const poke = {
        id: id,
        name: name,
        sprite: sprites.front_default,
      };
      console.log(poke);
      setPokemon(poke);
    } catch (error) {
      console.error(error);
    }
  };

  function generatePokemon(pokemon) {
    return (
      <>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprite} alt={pokemon.name} />
        <button onClick={() => dispatch({ type: "add", pokemon: pokemon })}>
          Catch
        </button>
      </>
    );
  }

  return (
    <>
      <Header title="PokeDex" />
      <button onClick={handleClick}>Generate</button>
      <div>
        <h1>Generated Pokemon </h1>
        {pokemon && generatePokemon(pokemon)}
      </div>

      <h1>Team</h1>
      <ul>
        {team.map((pokemon) => (
          <li key={pokemon.id}>{generatePokemon(pokemon)}</li>
        ))}
      </ul>
      <MiniComponentA />
    </>
  );
}

export default App;
