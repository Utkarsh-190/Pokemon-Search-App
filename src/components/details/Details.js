import classes from "./Details.module.css";
import { useEffect } from "react";
import { useParams } from "react-router";

function Details(props) {
  let { id } = useParams();
  let data;
  useEffect(() => {
    const loadPokemonData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      data = await response.json();
      // console.dir(data);
    };
    loadPokemonData();
  }, []);

  return (
    <div className={classes.detailsPage}>
      <div className={classes.info}></div>
      <div className={classes.stats}></div>
    </div>
  );
}

export default Details;
