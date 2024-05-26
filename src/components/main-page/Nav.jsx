import { BrowserRouter as Router, Link } from 'react-router-dom';

import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">logout</Link>
          </li>
          <li>
            <Link to="/USA">USA</Link>
          </li>
          <li>
            <Link to="/Europa">Europe</Link>
          </li>
          <li>
            <Link to="/Arabia">Arabia</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
