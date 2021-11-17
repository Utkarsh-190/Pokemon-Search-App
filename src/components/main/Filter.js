import { useState } from "react";
import classes from "./Filter.module.css";
import downArrow from "../../public/images/down_arrow.png";

function Filter() {
  let [showTypes, setShowTypes] = useState(false);
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

  const filterClicked = () => {
    setShowTypes((prevState) => !prevState);
  };

  return (
    <div>
      <div className={classes.filterBox} onClick={filterClicked}>
        <div>Filter</div>
        <img src={downArrow} alt="drop down arrow" />
      </div>
      {showTypes && (
        <div>
          {types.map((type, index) => (
            <div key={index}>{type}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
