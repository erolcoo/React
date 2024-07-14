import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from './AuthProvider';
import "./logout.css";

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div className="header-content">
      <h2>
        We're sorry you're leaving. For your next travel destination, we hope
        to see you again soon!
      </h2>
      <div className="Link-Home">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Logout;
