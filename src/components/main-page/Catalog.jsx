import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Catalog.css";

export default function Catalog() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/USA">Usa</Link>
          </li>
          <li>
            <Link to="/Europa">Europe</Link>
          </li>
          <li>
            <Link to="/Arabia">Arabia</Link>
          </li>
        </ul>
      </nav>
      <div className="catalog-view">
        <h4>Select from our vacation catalog.</h4>
      </div>
    </>
  );
}
