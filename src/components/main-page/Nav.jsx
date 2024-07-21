import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faList,
  faTrash,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../auth-pages/AuthProvider';
import './Navbar.css';

export default function NavBar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav>
      <ul>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/register">
                <FontAwesomeIcon icon={faUserPlus} style={{ color: 'green' }} />
                Register
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} style={{ color: 'green' }} />
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/DeleteAccount">
                <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                Delete Account
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'orange' }} />
                Logout
              </Link>
            </li>
            <li>
              <Link to="/CreateDestination">
                <FontAwesomeIcon icon={faPlusCircle} style={{ color: 'blue' }} />
                Create
              </Link>
            </li>
          </>
        )}
        <li>
          <Link to="/Catalog">
            <FontAwesomeIcon icon={faList} style={{ color: 'yellow' }} />
            Catalog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
