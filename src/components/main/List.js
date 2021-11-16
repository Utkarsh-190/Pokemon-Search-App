import { useState, useEffect } from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem";

function List() {
  let [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const loadPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25"
      );
      const { results } = await response.json();
      results.map((data) => {
        const res = data.url.split("/");
        return (data.id = res[res.length - 2]);
      });
      console.log(results);
      setPokemonList(results);
    };

    // loadPokemons();

    // https://github.com/kevinadhiguna/pokedex
  }, []);

  return (
    <div className={classes.list}>
      {pokemonList.map((pokemon) => (
        <ListItem pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

export default List;
