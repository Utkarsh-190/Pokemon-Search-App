import { useState } from "react";
import classes from "./Filter.module.css";
import downArrow from "../../public/images/down_arrow.png";

function Filter({ setPokemons }) {
  const [showTypes, setShowTypes] = useState(false);
  const types = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const loadPokemons = async (type) => {
    filterClicked();
    const typeName = type.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}/`);
    const { pokemon } = await response.json();
    const list = [];
    pokemon.map((data) => {
      const res = data.pokemon.url.split("/");
      data.pokemon.id = res[res.length - 2];
      list.push(data.pokemon);
    });
    setPokemons(list);
  };

  const filterClicked = () => {
    setShowTypes((prevState) => !prevState);
  };

  return (
    <div className={classes.filterBox}>
      <div className={classes.filter} onClick={filterClicked}>
        <div>Filter</div>
        <img src={downArrow} alt="drop down arrow" />
      </div>
      {showTypes && (
        <div className={classes.filterTypes}>
          {types.map((type, index) => (
            <div
              key={index}
              onClick={() => {
                loadPokemons(type);
              }}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
