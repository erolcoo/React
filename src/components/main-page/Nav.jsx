import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../auth-pages/AuthProvider';
import './Navbar.css';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons/faPenFancy';

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
                <FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'red' }} />
                Delete Account
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'red' }} />
                Logout
              </Link>
            </li>
            {/* Show 'CreateDestination' link only if authenticated */}
            <li>
              <Link to="/CreateDestination">
                <FontAwesomeIcon icon={faPenFancy} style={{ color: 'blue' }} />
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
