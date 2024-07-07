import { Link } from "react-router-dom";

import "./logout.css";

export default function Logout() {
  return (
    <div class="header-content">
      <h2>
        We're sorry you're leaving. For your next travel destination, we hope
        to see you again soon!
      </h2>
      <div className="Link-Home">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
