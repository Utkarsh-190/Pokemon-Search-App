import { useState, useEffect } from "react";
import classes from "./Search.module.css";
import searchIcon from "../../public/images/search_icon.svg";

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
    // e.target.value = e.target.value.toLowerCase();
    const text = e.target.value.toLowerCase();
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
            name: name,
          };
          matches.push(suggestion);
        }
      });
      // console.log(matches);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }

    setSearctText(text);
  };

  const suggestionHandler = (text) => {
    setSearctText(text);
  };

  const inputBlurHandler = () => {
    setTimeout(() => {
      setSuggestions([]);
    }, 200);
  };

  return (
    <div className={classes.searchBox}>
      <input
        type="text"
        placeholder="Search"
        onChange={searchChangeHandler}
        onBlur={inputBlurHandler}
        value={searchText}
        className={classes.searchInput}
      />

      <button className={classes.searchButton}>
        <img src={searchIcon} alt="search icon" />
      </button>

      {suggestions && (
        <div className={classes.suggestionBox}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={classes.suggestion}
              onClick={() => {
                suggestionHandler(suggestion.name);
              }}
            >
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
