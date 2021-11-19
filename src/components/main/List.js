import { useEffect } from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem";

function List({ usePokemons }) {
  let [pokemonList, setPokemonList] = usePokemons;

  useEffect(() => {
    const loadPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24"
      );
      const { results } = await response.json();
      results.map((data) => {
        const res = data.url.split("/");
        return (data.id = res[res.length - 2]);
      });
      setPokemonList(results);
    };

    loadPokemons();
  }, []);

  return (
    <div className={classes.listPage}>
      <div className={classes.list}>
        {pokemonList.map((pokemon) => (
          <ListItem pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
      {/* <button>Show more pokemons</button> */}
    </div>
  );
}

export default List;
