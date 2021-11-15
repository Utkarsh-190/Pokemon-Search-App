import classes from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={`${props.className} ${classes.nav}`}>
      <div className={classes.navHeading}>Pokemon Search App</div>
    </div>
  );
}

export default Navbar;
