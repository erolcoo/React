import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";


export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/register">
              <FontAwesomeIcon icon={faUserPlus} style={{ color: "green" }} /> 
              Register
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} style={{ color: "green" }} />
              Login
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "red" }} />
              Logout
            </Link>
          </li>
          <li>
            <Link to="/Catalog">
              <FontAwesomeIcon icon={faList} style={{ color: "yellow" }} />
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
