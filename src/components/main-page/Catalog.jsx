import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMosque,
  faHome,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

import "./Catalog.css";

export default function Catalog() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/USA">
              <FontAwesomeIcon icon={faFlagUsa} style={{ color: "red" }} /> USA
            </Link>
          </li>
          <li>
            <Link to="/Europa">
              <FontAwesomeIcon icon={faGlobe} style={{ color: "blue" }} />{" "}
              Europe
            </Link>
          </li>
          <li>
            <Link to="/Arabia">
              <FontAwesomeIcon icon={faMosque} style={{ color: "orange" }} />{" "}
              Arabia
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} style={{ color: "green" }} /> Home
            </Link>
          </li>
        </ul>
      </nav>
      <div className="catalog-view">
        <h4>Select from our vacation catalog.</h4>
      </div>
    </>
  );
}
