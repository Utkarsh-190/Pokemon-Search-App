import classes from "./Details.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import BarChart from "./BarChart";
import Info from "./Info";

function Details(props) {
  let { id } = useParams();
  let [data, setData] = useState(null);

  useEffect(() => {
    const loadPokemonData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const result = await response.json();
      setData(result);
      console.dir(result);
    };
    loadPokemonData();
  }, []);

  return (
    <div className={classes.detailsPage}>
      {data && (
        <>
          <div className={classes.profile}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt={`${data.name}`}
            />

            <Info data={data} />
          </div>

          <div className={classes.barChart}>
            <BarChart data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
