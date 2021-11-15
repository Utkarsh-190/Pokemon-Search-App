import classes from "./App.module.css";
import Main from "./components/main/Main";
import Details from "./components/details/Details";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <Navbar className={classes.nav} />
      <Routes>
        <Route path="/" element={<Main className={classes.content} />} />
        <Route
          path="/details/:name"
          element={<Details className={classes.content} />}
        />
      </Routes>
    </div>
  );
}

export default App;
