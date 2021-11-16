import { useState, useEffect } from "react";
import classes from "./Search.module.css";

function Search() {
  let [searchText, setSearctText] = useState("");
  let [allPokemons, setAllPokemons] = useState([]);
  let [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadAllPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200"
      );
      const { results } = await response.json();
      console.log(results);
      // sessionStorage.setItem("allPokemons", JSON.stringify(results));
      setAllPokemons(results);
    };

    // loadAllPokemons();

    // if (sessionStorage.getItem("allPokemons")) {
    //   // use existing list;
    //  // sessionStorage.removeItem("allPokemons");
    // } else {
    //   loadAllPokemons();
    // }
  }, []);

  const searchChangeHandler = (e) => {
    e.target.value = e.target.value.toLowerCase();
    const text = e.target.value;
    let matches = [];

    if (text.length > 0) {
      allPokemons.map(({ name }) => {
        const regex = new RegExp(`${text}`, "i");
        const idx = name.search(regex);
        if (idx === 0) {
          const suggestion = {
            start: name.substring(0, idx),
            mid: name.substring(idx, idx + text.length),
            end: name.substring(idx + text.length, name.length),
          };
          matches.push(suggestion);
        }
        // if(matches.length > 15) break;
      });
      // console.log(matches);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }

    setSearctText(text);
  };

  return (
    <div className={classes.searchBox}>
      <input
        type="text"
        placeholder="Search"
        onChange={searchChangeHandler}
        className={classes.searchInput}
      />
      {suggestions && (
        <div className={classes.suggestionBox}>
          {suggestions.map((suggestion, index) => (
            <div key={index} className={classes.suggestion}>
              {suggestion.start}
              <strong>{suggestion.mid}</strong>
              {suggestion.end}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
