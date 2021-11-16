import classes from "./Details.module.css";
import { useParams } from "react-router";

function Details(props) {
  let { id } = useParams();
  // fetch data using pokemon id then display nicely and add a back button
  return <div>details {id}</div>;
}

export default Details;
