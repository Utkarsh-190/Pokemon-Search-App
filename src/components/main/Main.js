import { useState } from "react";
import classes from "./Main.module.css";
import Search from "./Search";
import Filter from "./Filter";
import List from "./List";

function Main(props) {
  const [pokemonList, setPokemonList] = useState([]);

  const listChangeHandler = (list) => {
    setPokemonList(list);
  };

  return (
    <div className={classes.mainBody}>
      <div className={classes.options}>
        <Search setPokemons={listChangeHandler} />
        <Filter setPokemons={listChangeHandler} />
      </div>
      <div className={classes.list}>
        <List usePokemons={[pokemonList, listChangeHandler]} />
      </div>
    </div>
  );
}

export default Main;
