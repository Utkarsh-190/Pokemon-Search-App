import classes from "./Info.module.css";

function Info({ data }) {
  return (
    <div className={classes.info}>
      <div>{data.name}</div>
      <div className={classes.properties}>
        <div>
          <span>Height: </span>
          <span>{data.height * 10} cm</span>
        </div>

        <div>
          <span>Weight: </span>
          <span>{data.weight / 10} kg</span>
        </div>

        <div>
          <span>Abilities: </span>
          <span>
            {data.abilities.map(({ ability }) => (
              <span>{ability.name} </span>
            ))}
          </span>
        </div>

        <div>
          <span>Type: </span>
          <span>
            {data.types.map(({ type }) => (
              <span>{type.name} </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
