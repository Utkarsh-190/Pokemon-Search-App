import classes from "./Main.module.css";
import Search from "./Search";
import Filter from "./Filter";
import List from "./List";

function Main(props) {
  return (
    <div className={classes.mainBody}>
      <div className={classes.options}>
        <Search />
        <Filter />
      </div>
      <div className={classes.list}>
        <List />
      </div>
    </div>
  );
}

export default Main;
