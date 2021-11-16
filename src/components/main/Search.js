import { useEffect } from "react";
import classes from "./Search.module.css";

function Search() {
  useEffect(() => {
    const loadAllPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200"
      );
      const { results } = await response.json();
      // console.log(results);
      sessionStorage.setItem("allPokemonsName", JSON.stringify(results));
    };

    if (sessionStorage.getItem("allPokemonsName")) {
      // use existing list;
      // sessionStorage.removeItem("allPokemonsName");
    } else {
      loadAllPokemons();
    }
  }, []);

  // return <div className={classes.searchBox}>Search</div>;
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => {
        e.target.value = e.target.value.toLowerCase();
      }}
      className={classes.searchBox}
    />
  );
}

export default Search;
