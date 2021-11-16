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
      setAllPokemons(results);
    };

    // loadAllPokemons();
  }, []);

  const searchChangeHandler = (e) => {
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

  const searchHandler = () => {
    let id = 0;
    for (let i = 0; i < allPokemons.length; i++) {
      if (allPokemons[i].name === searchText) {
        id = allPokemons[i].id;
        break;
      }
    }
    //  jjjkjkjkjkjj
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

      <button className={classes.searchButton} onClick={searchHandler}>
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
